// Cloudflare Pages Function: POST /api/contact
// 1. Valida campos + honeypot + Turnstile
// 2. Envía con Resend un aviso al fundador y un acuse al lead
// 3. Redirige a /gracias o /error (el formulario funciona sin JavaScript)
// No registra datos personales en logs (D-05).

interface Env {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET: string;
  CONTACT_TO: string; // email donde recibes los leads
  CONTACT_FROM: string; // remitente verificado en Resend, p. ej. "Web <web@tudominio.com>"
}

interface Context {
  request: Request;
  env: Env;
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

export async function onRequestPost({ request, env }: Context): Promise<Response> {
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
    await sendEmail(env, {
      to: data.email,
      reply_to: env.CONTACT_TO,
      subject: "Hemos recibido tu mensaje",
      html: `<p>Hola ${safe.name},</p>
        <p>Gracias por escribir. He recibido tu solicitud sobre <b>${safe.service}</b> y te respondo en menos de 24 h laborables.</p>
        <p>Si quieres añadir algo, responde a este email.</p>`,
    });
  } catch (err) {
    console.error("contact: envío fallido", err instanceof Error ? err.message : "desconocido");
    return redirect(request, "/error");
  }

  return redirect(request, "/gracias");
}
