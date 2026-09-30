// Cloudflare Worker: sirve la web estática (dist/) y gestiona POST /api/contact y /api/presupuesto.
// Las rutas que coinciden con un archivo de dist/ las sirve Cloudflare directamente
// sin ejecutar este código; solo llegan aquí /api/* y las rutas inexistentes.
//
// Cada envío pasa, en este orden, por: rate limit por IP → tope de tamaño → honeypot → validación
// de campos → Turnstile (servidor) → Resend (aviso al fundador y, si SEND_ACK, acuse al cliente).
// El formulario funciona sin JavaScript y termina siempre en una redirección 303.
// No registra datos personales en logs (D-05).

import {
  estimate,
  extras,
  formatRange,
  isExtra,
  isMaintenance,
  isProjectType,
  maintenance,
  projectTypes,
} from "../src/content/pricing";
import { contactSection } from "../src/content/home";
import { MAX_BODY_BYTES } from "./limits";

interface RateLimiter {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  // Contador por IP y ubicación (wrangler.jsonc → ratelimits). Opcional: sin él (desarrollo local) no limita.
  FORM_LIMITER?: RateLimiter;
  RESEND_API_KEY: string;
  TURNSTILE_SECRET: string;
  CONTACT_TO: string; // email donde recibes los leads
  CONTACT_FROM: string; // remitente verificado en Resend, p. ej. "Web <web@tudominio.com>"
  // "true" solo con dominio verificado en Resend. Sin dominio (onboarding@resend.dev)
  // Resend solo permite enviar a tu propio email, así que el acuse al lead se omite.
  SEND_ACK?: string;
}

const PATHS = {
  contactOk: "/gracias/",
  quoteOk: "/presupuesto/enviado/",
  error: "/error/",
  busy: "/error/demasiados/",
} as const;

const redirect = (request: Request, path: string) =>
  new Response(null, {
    status: 303,
    headers: { Location: new URL(path, request.url).toString(), "Cache-Control": "no-store" },
  });

// Una línea: sin caracteres de control (evita saltos de línea en asuntos y nombres) y con tope de longitud.
// eslint-disable-next-line no-control-regex
const oneLine = (s: string, max: number) => s.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);
// Varias líneas: conserva los saltos de línea y elimina el resto de caracteres de control.
const multiLine = (s: string, max: number) =>
  // eslint-disable-next-line no-control-regex
  s.replace(/[\u0000-\u0009\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/\r\n?/g, "\n").trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Atribución: ref y utm_* llegan en campos ocultos (src/scripts/attribution.ts). Solo caracteres seguros.
const ATTR_KEYS = ["ref", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
function attribution(form: FormData): string {
  const parts = ATTR_KEYS.map(
    (k) => [k, String(form.get(k) ?? "").replace(/[^\w.\-~% ]/g, "").slice(0, 80)] as const,
  ).filter(([, v]) => v);
  return parts.length ? parts.map(([k, v]) => `${k}=${v}`).join(" · ") : "directo";
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  try {
    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    if (ip) body.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    return ((await res.json()) as { success?: boolean }).success === true;
  } catch {
    return false; // si Cloudflare no responde, tratamos el envío como no verificado
  }
}

async function sendEmail(env: Env, email: { to: string; subject: string; html: string; reply_to?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.CONTACT_FROM, ...email }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}`);
}

const errorName = (err: unknown) => (err instanceof Error ? err.message : "desconocido");

/** Comprobaciones previas comunes. Devuelve una respuesta si hay que cortar, o el formulario ya leído. */
async function readForm(request: Request, env: Env): Promise<Response | FormData> {
  if (env.FORM_LIMITER) {
    const key = request.headers.get("CF-Connecting-IP") ?? "desconocida";
    const { success } = await env.FORM_LIMITER.limit({ key });
    if (!success) return redirect(request, PATHS.busy);
  }

  const length = request.headers.get("content-length");
  if (length === null) return new Response("Length Required", { status: 411 });
  const bytes = Number(length);
  if (!Number.isFinite(bytes) || bytes > MAX_BODY_BYTES) return new Response("Payload Too Large", { status: 413 });

  try {
    return await request.formData();
  } catch {
    return redirect(request, PATHS.error);
  }
}

async function isHuman(request: Request, env: Env, form: FormData): Promise<boolean> {
  const token = String(form.get("cf-turnstile-response") ?? "");
  return token !== "" && (await verifyTurnstile(token, env.TURNSTILE_SECRET, request.headers.get("CF-Connecting-IP")));
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const form = await readForm(request, env);
  if (form instanceof Response) return form;

  // Honeypot: un bot lo rellena; fingimos éxito para no darle pistas.
  if (String(form.get("company") ?? "") !== "") return redirect(request, PATHS.contactOk);

  const data = {
    name: oneLine(String(form.get("name") ?? ""), 100),
    email: oneLine(String(form.get("email") ?? ""), 200),
    website_url: oneLine(String(form.get("website_url") ?? ""), 300),
    service: oneLine(String(form.get("service") ?? ""), 100),
    message: multiLine(String(form.get("message") ?? ""), 2000),
  };

  const validService = (contactSection.serviceOptions as readonly string[]).includes(data.service);
  if (!data.name || !EMAIL.test(data.email) || !validService || !data.message || form.get("privacy") !== "yes") {
    return redirect(request, PATHS.error);
  }
  if (!(await isHuman(request, env, form))) return redirect(request, PATHS.error);

  const safe = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, escapeHtml(v)])) as typeof data;

  try {
    await sendEmail(env, {
      to: env.CONTACT_TO,
      reply_to: data.email,
      subject: `Nuevo lead web: ${data.service} — ${data.name}`,
      html: `<h2>Nuevo lead desde la web</h2>
        <p><b>Nombre:</b> ${safe.name}<br><b>Email:</b> ${safe.email}<br>
        <b>Web actual:</b> ${safe.website_url || "—"}<br><b>Servicio:</b> ${safe.service}</p>
        <p><b>Mensaje:</b><br>${safe.message.replace(/\n/g, "<br>")}</p>
        <p><b>Origen:</b> ${attribution(form)}</p>
        <p style="color:#64748b">Recibido: ${new Date().toISOString()} · Responde a este email para contestar al lead.</p>`,
    });
  } catch (err) {
    console.error("contact: aviso fallido", errorName(err));
    return redirect(request, PATHS.error);
  }

  // El acuse al lead es secundario: si falla, el lead ya está en tu email.
  if (env.SEND_ACK === "true") {
    try {
      await sendEmail(env, {
        to: data.email,
        reply_to: env.CONTACT_TO,
        subject: "Hemos recibido tu mensaje",
        html: `<p>Hola ${safe.name},</p>
          <p>Gracias por escribir. Hemos recibido tu solicitud sobre <b>${safe.service}</b> y te respondemos en menos de 24 h laborables.</p>
          <p>Si quieres añadir algo, responde a este email.</p>`,
      });
    } catch (err) {
      console.error("contact: acuse fallido", errorName(err));
    }
  }

  return redirect(request, PATHS.contactOk);
}

// Presupuestador: el precio se recalcula aquí (no se confía en el navegador).
async function handleQuote(request: Request, env: Env): Promise<Response> {
  const form = await readForm(request, env);
  if (form instanceof Response) return form;
  if (String(form.get("company") ?? "") !== "") return redirect(request, PATHS.quoteOk);

  const type = oneLine(String(form.get("type") ?? ""), 20);
  const maint = oneLine(String(form.get("maintenance") ?? ""), 20) || "none";
  const data = {
    business: oneLine(String(form.get("business") ?? ""), 120),
    sector: oneLine(String(form.get("sector") ?? ""), 80),
    current_url: oneLine(String(form.get("current_url") ?? ""), 300),
    name: oneLine(String(form.get("name") ?? ""), 100),
    email: oneLine(String(form.get("email") ?? ""), 200),
    message: multiLine(String(form.get("message") ?? ""), 2000),
  };
  if (
    !isProjectType(type) ||
    !isMaintenance(maint) ||
    !data.business ||
    !data.sector ||
    !data.name ||
    !EMAIL.test(data.email) ||
    form.get("privacy") !== "yes"
  ) {
    return redirect(request, PATHS.error);
  }
  if (!(await isHuman(request, env, form))) return redirect(request, PATHS.error);

  const chosenExtras = [...new Set(form.getAll("extras").map(String))].filter(isExtra);
  const languages = Math.max(0, Math.min(5, Number(form.get("languages") ?? 0) || 0));
  const urgent = form.get("urgent") === "yes";
  const result = estimate({ type, extras: chosenExtras, languages, maintenance: maint, urgent });

  const safe = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, escapeHtml(v)])) as typeof data;
  const oneOff = result.oneOff ? formatRange(result.oneOff) : "A medida (propuesta personalizada)";
  const monthly = result.monthly ? `${formatRange(result.monthly)}/mes` : "—";
  const summary = `<ul>
    <li><b>Proyecto:</b> ${projectTypes[type].label}</li>
    <li><b>Extras:</b> ${chosenExtras.map((e) => extras[e].label).join(", ") || "ninguno"}</li>
    <li><b>Idiomas adicionales:</b> ${languages}</li>
    <li><b>Urgente:</b> ${urgent ? "sí" : "no"}</li>
    <li><b>Mantenimiento:</b> ${maintenance[maint].label} (${monthly})</li>
    <li><b>Precio orientativo:</b> ${oneOff} + IVA · plazo ${result.days}</li>
  </ul>`;

  try {
    await sendEmail(env, {
      to: env.CONTACT_TO,
      reply_to: data.email,
      subject: `Presupuesto web: ${data.business} (${data.sector}) — ${oneOff}`,
      html: `<h2>Nueva solicitud de presupuesto</h2>
        <p><b>Negocio:</b> ${safe.business} · <b>Sector:</b> ${safe.sector}<br>
        <b>Web/redes:</b> ${safe.current_url || "—"}<br>
        <b>Contacto:</b> ${safe.name} · ${safe.email}</p>
        ${summary}
        <p><b>Comentarios:</b><br>${safe.message.replace(/\n/g, "<br>") || "—"}</p>
        <p><b>Origen:</b> ${attribution(form)}</p>
        <p style="color:#64748b">Recibido: ${new Date().toISOString()} · Responde a este email para enviar la propuesta.</p>`,
    });
  } catch (err) {
    console.error("presupuesto: aviso fallido", errorName(err));
    return redirect(request, PATHS.error);
  }

  if (env.SEND_ACK === "true") {
    try {
      await sendEmail(env, {
        to: data.email,
        reply_to: env.CONTACT_TO,
        subject: `Tu presupuesto orientativo — ${data.business}`,
        html: `<p>Hola ${safe.name},</p>
          <p>Gracias por configurar tu proyecto. Este es el resumen:</p>
          ${summary}
          <p>Revisamos los detalles y te enviamos la propuesta con el precio cerrado en menos de 24 h laborables.</p>`,
      });
    } catch (err) {
      console.error("presupuesto: acuse fallido", errorName(err));
    }
  }

  return redirect(request, PATHS.quoteOk);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    const handler = pathname === "/api/contact" ? handleContact : pathname === "/api/presupuesto" ? handleQuote : null;
    if (handler) {
      if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      return handler(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
