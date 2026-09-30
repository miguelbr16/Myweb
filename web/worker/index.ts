// Cloudflare Worker: sirve la web estática (dist/) y gestiona POST /api/contact y /api/presupuesto.
// Las rutas que coinciden con un archivo de dist/ las sirve Cloudflare directamente
// sin ejecutar este código; solo llegan aquí /api/contact y las rutas inexistentes.
// 1. Valida campos + honeypot + Turnstile
// 2. Envía con Resend un aviso al fundador y un acuse al lead
// 3. Redirige a /gracias o /error (el formulario funciona sin JavaScript)
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

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY: string;
  TURNSTILE_SECRET: string;
  CONTACT_TO: string; // email donde recibes los leads
  CONTACT_FROM: string; // remitente verificado en Resend, p. ej. "Web <web@tudominio.com>"
  // "true" solo con dominio verificado en Resend. Sin dominio (onboarding@resend.dev)
  // Resend solo permite enviar a tu propio email, así que el acuse al lead se omite.
  SEND_ACK?: string;
}

const MAX = { name: 100, email: 200, website_url: 300, service: 100, message: 2000 };

const redirect = (request: Request, path: string) =>
  Response.redirect(new URL(path, request.url).toString(), 303);

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

async function sendEmail(env: Env, email: { to: string; subject: string; html: string; reply_to?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.CONTACT_FROM, ...email }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}`);
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(request, "/error");
  }

  const field = (k: keyof typeof MAX) => String(form.get(k) ?? "").trim().slice(0, MAX[k]);
  const data = {
    name: field("name"),
    email: field("email"),
    website_url: field("website_url"),
    service: field("service"),
    message: field("message"),
  };

  // Honeypot: un bot lo rellena; fingimos éxito para no darle pistas.
  if (String(form.get("company") ?? "") !== "") return redirect(request, "/gracias");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!data.name || !validEmail || !data.service || !data.message || form.get("privacy") !== "yes") {
    return redirect(request, "/error");
  }

  const token = String(form.get("cf-turnstile-response") ?? "");
  const human = token && (await verifyTurnstile(token, env.TURNSTILE_SECRET, request.headers.get("CF-Connecting-IP")));
  if (!human) return redirect(request, "/error");

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
        <p style="color:#64748b">Recibido: ${new Date().toISOString()} · Responde a este email para contestar al lead.</p>`,
    });
  } catch (err) {
    console.error("contact: aviso fallido", err instanceof Error ? err.message : "desconocido");
    return redirect(request, "/error");
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
      console.error("contact: acuse fallido", err instanceof Error ? err.message : "desconocido");
    }
  }

  return redirect(request, "/gracias");
}

// Presupuestador: el precio se recalcula aquí (no se confía en el navegador).
async function handleQuote(request: Request, env: Env): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(request, "/error");
  }
  if (String(form.get("company") ?? "") !== "") return redirect(request, "/presupuesto/enviado");

  const text = (k: string, max: number) => String(form.get(k) ?? "").trim().slice(0, max);
  const type = text("type", 20);
  const maint = text("maintenance", 20) || "none";
  const data = {
    business: text("business", 120),
    sector: text("sector", 80),
    current_url: text("current_url", 300),
    name: text("name", 100),
    email: text("email", 200),
    message: text("message", 2000),
  };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (
    !isProjectType(type) ||
    !isMaintenance(maint) ||
    !data.business ||
    !data.sector ||
    !data.name ||
    !validEmail ||
    form.get("privacy") !== "yes"
  ) {
    return redirect(request, "/error");
  }

  const token = String(form.get("cf-turnstile-response") ?? "");
  const human = token && (await verifyTurnstile(token, env.TURNSTILE_SECRET, request.headers.get("CF-Connecting-IP")));
  if (!human) return redirect(request, "/error");

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
        <p style="color:#64748b">Recibido: ${new Date().toISOString()} · Responde a este email para enviar la propuesta.</p>`,
    });
  } catch (err) {
    console.error("presupuesto: aviso fallido", err instanceof Error ? err.message : "desconocido");
    return redirect(request, "/error");
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
      console.error("presupuesto: acuse fallido", err instanceof Error ? err.message : "desconocido");
    }
  }

  return redirect(request, "/presupuesto/enviado");
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
