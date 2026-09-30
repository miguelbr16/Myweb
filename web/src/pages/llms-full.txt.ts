import { site } from "../content/site";
import { fact, faq, pricing, process, serviceCatalog } from "../content/home";
import { abs } from "../lib/seo";

// Versión completa en Markdown, generada desde los mismos datos que la home.
export function GET() {
  const body = `# ${site.brand}

> ${site.description}

URL: ${abs("/")}
Idioma: español (${site.locale})

## Datos clave

${fact.rows.map((r) => `- **${r.k}:** ${r.v}`).join("\n")}

## Servicios

${serviceCatalog.map((s) => `- **${s.name}:** ${s.description}`).join("\n")}

## Precios orientativos (IVA no incluido)

${pricing.rows.map((r) => `- **${r.name}:** ${r.price}, plazo ${r.time}. ${r.what}`).join("\n")}

${pricing.extrasLine}

Calcula el tuyo en ${abs("/presupuesto/")}.

## Cómo funciona

${process.steps.map((s) => `${Number(s.n)}. **${s.title}** (${s.tag}): ${s.text}`).join("\n")}

## Preguntas frecuentes

${faq.items.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Contacto

Email: ${site.contact.email}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
