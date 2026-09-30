import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import worker, { type Env } from "../worker/index";
import { MAX_BODY_BYTES } from "../worker/limits";

type Call = { url: string; init?: RequestInit };
let calls: Call[];
let turnstileOk: boolean;
let turnstileThrows: boolean;
let resendOk: boolean;

const env = (extra: Partial<Env> = {}): Env => ({
  ASSETS: { fetch: async () => new Response("asset") },
  RESEND_API_KEY: "re_test",
  TURNSTILE_SECRET: "secret",
  CONTACT_TO: "yo@solidum.test",
  CONTACT_FROM: "Web <web@solidum.test>",
  ...extra,
});

beforeEach(() => {
  calls = [];
  turnstileOk = true;
  turnstileThrows = false;
  resendOk = true;
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, init });
      if (url.includes("turnstile")) {
        if (turnstileThrows) throw new Error("red caída");
        return Response.json({ success: turnstileOk });
      }
      return new Response("{}", { status: resendOk ? 200 : 500 });
    }),
  );
  vi.spyOn(console, "error").mockImplementation(() => {});
});
afterEach(() => vi.restoreAllMocks());

function post(path: string, fields: Record<string, string | string[]>, headers: Record<string, string> = {}) {
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries(fields)) for (const x of Array.isArray(v) ? v : [v]) body.append(k, x);
  const text = body.toString();
  return new Request(`https://solidum.test${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "content-length": String(text.length),
      "CF-Connecting-IP": "203.0.113.7",
      ...headers,
    },
    body: text,
  });
}

const contact = (extra: Record<string, string> = {}) => ({
  name: "Ana",
  email: "ana@example.org",
  service: "Web o landing",
  message: "Hola, necesito una web.",
  privacy: "yes",
  "cf-turnstile-response": "tok",
  ...extra,
});
const quote = (extra: Record<string, string | string[]> = {}) => ({
  type: "pro",
  maintenance: "basic",
  business: "Bar Pepe",
  sector: "Hostelería",
  name: "Ana",
  email: "ana@example.org",
  privacy: "yes",
  "cf-turnstile-response": "tok",
  ...extra,
});
const location = (r: Response) => new URL(r.headers.get("location")!).pathname;
const resendCalls = () => calls.filter((c) => c.url.includes("resend"));
const resendBody = (i = 0) => JSON.parse(String(resendCalls()[i].init!.body));

describe("rutas", () => {
  it("GET a la API devuelve 405", async () => {
    const r = await worker.fetch(new Request("https://solidum.test/api/contact"), env());
    expect(r.status).toBe(405);
    expect(r.headers.get("allow")).toBe("POST");
  });
  it("lo demás lo sirven los assets", async () => {
    const r = await worker.fetch(new Request("https://solidum.test/"), env());
    expect(await r.text()).toBe("asset");
  });
});

describe("/api/contact", () => {
  it("envío válido: avisa al fundador y redirige a /gracias/", async () => {
    const r = await worker.fetch(post("/api/contact", contact()), env());
    expect(r.status).toBe(303);
    expect(location(r)).toBe("/gracias/");
    expect(resendCalls()).toHaveLength(1);
    expect(resendBody().to).toBe("yo@solidum.test");
    expect(resendBody().reply_to).toBe("ana@example.org");
  });

  it("escapa el HTML de los campos en el email", async () => {
    await worker.fetch(post("/api/contact", contact({ name: "<img src=x onerror=alert(1)>" })), env());
    const html: string = resendBody().html;
    expect(html).not.toContain("<img");
    expect(html).toContain("&lt;img");
  });

  it("quita saltos de línea del asunto (sin inyección de cabeceras)", async () => {
    await worker.fetch(post("/api/contact", contact({ name: "Ana\r\nBcc: x@y.z" })), env());
    expect(resendBody().subject).not.toMatch(/[\r\n]/);
  });

  it("honeypot relleno: finge éxito y no llama a nadie", async () => {
    const r = await worker.fetch(post("/api/contact", contact({ company: "spam" })), env());
    expect(location(r)).toBe("/gracias/");
    expect(calls).toHaveLength(0);
  });

  it.each([
    ["email inválido", { email: "no-es-email" }],
    ["servicio desconocido", { service: "Hackeo" }],
    ["sin mensaje", { message: "" }],
    ["sin privacidad", { privacy: "no" }],
  ])("rechaza: %s", async (_name, patch) => {
    const r = await worker.fetch(post("/api/contact", contact(patch)), env());
    expect(location(r)).toBe("/error/");
    expect(calls).toHaveLength(0);
  });

  it("sin token de Turnstile: error y sin email", async () => {
    const r = await worker.fetch(post("/api/contact", contact({ "cf-turnstile-response": "" })), env());
    expect(location(r)).toBe("/error/");
    expect(resendCalls()).toHaveLength(0);
  });

  it("Turnstile rechaza: error y sin email", async () => {
    turnstileOk = false;
    const r = await worker.fetch(post("/api/contact", contact()), env());
    expect(location(r)).toBe("/error/");
    expect(resendCalls()).toHaveLength(0);
  });

  it("Turnstile no responde: error controlado, sin excepción", async () => {
    turnstileThrows = true;
    const r = await worker.fetch(post("/api/contact", contact()), env());
    expect(location(r)).toBe("/error/");
  });

  it("Resend falla: error", async () => {
    resendOk = false;
    const r = await worker.fetch(post("/api/contact", contact()), env());
    expect(location(r)).toBe("/error/");
  });

  it("acuse al cliente solo con SEND_ACK=true", async () => {
    await worker.fetch(post("/api/contact", contact()), env({ SEND_ACK: "false" }));
    expect(resendCalls()).toHaveLength(1);
    calls = [];
    await worker.fetch(post("/api/contact", contact()), env({ SEND_ACK: "true" }));
    expect(resendCalls()).toHaveLength(2);
    expect(resendBody(1).to).toBe("ana@example.org");
  });
});

describe("límites", () => {
  it("rate limit superado: redirige a /error/demasiados/ sin tocar Turnstile ni Resend", async () => {
    const FORM_LIMITER = { limit: vi.fn(async () => ({ success: false })) };
    const r = await worker.fetch(post("/api/contact", contact()), env({ FORM_LIMITER }));
    expect(location(r)).toBe("/error/demasiados/");
    expect(FORM_LIMITER.limit).toHaveBeenCalledWith({ key: "203.0.113.7" });
    expect(calls).toHaveLength(0);
  });

  it("rate limit correcto: deja pasar", async () => {
    const FORM_LIMITER = { limit: vi.fn(async () => ({ success: true })) };
    const r = await worker.fetch(post("/api/contact", contact()), env({ FORM_LIMITER }));
    expect(location(r)).toBe("/gracias/");
  });

  it("cuerpo demasiado grande: 413", async () => {
    const r = await worker.fetch(
      post("/api/contact", contact(), { "content-length": String(MAX_BODY_BYTES + 1) }),
      env(),
    );
    expect(r.status).toBe(413);
    expect(calls).toHaveLength(0);
  });

  it("sin Content-Length: 411", async () => {
    const req = new Request("https://solidum.test/api/contact", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: "a=b",
    });
    req.headers.delete("content-length");
    expect((await worker.fetch(req, env())).status).toBe(411);
  });
});

describe("/api/presupuesto", () => {
  it("recalcula el precio en el servidor e incluye el origen saneado", async () => {
    const r = await worker.fetch(
      post("/api/presupuesto", quote({ extras: ["ai"], languages: "1", ref: "a<b>&c", utm_source: "qr" })),
      env(),
    );
    expect(location(r)).toBe("/presupuesto/enviado/");
    const html: string = resendBody().html;
    expect(html).toContain("2.000 € – 3.800 €");
    expect(html).toContain("ref=abc");
    expect(html).toContain("utm_source=qr");
    expect(html).not.toContain("a<b>");
  });

  it("urgente: el email indica el plazo reducido", async () => {
    await worker.fetch(post("/api/presupuesto", quote({ type: "landing", urgent: "yes" })), env());
    expect(resendBody().html).toContain("plazo 2–3 días");
  });

  it("ignora extras inventados y tipos desconocidos", async () => {
    await worker.fetch(post("/api/presupuesto", quote({ extras: ["ai", "language", "gratis"] })), env());
    expect(resendBody().html).toContain("Asistente con IA");
    expect(resendBody().html).not.toContain("gratis");
    calls = [];
    const r = await worker.fetch(post("/api/presupuesto", quote({ type: "hack" })), env());
    expect(location(r)).toBe("/error/");
    expect(calls).toHaveLength(0);
  });

  it("proyecto a medida: sin precio cerrado", async () => {
    await worker.fetch(post("/api/presupuesto", quote({ type: "custom" })), env());
    expect(resendBody().html).toContain("A medida");
  });

  it("acuse con SEND_ACK=true", async () => {
    await worker.fetch(post("/api/presupuesto", quote()), env({ SEND_ACK: "true" }));
    expect(resendCalls()).toHaveLength(2);
  });
});
