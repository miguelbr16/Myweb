import { site } from "../content/site";
import { serviceCatalog } from "../content/home";
import { abs } from "../lib/seo";

// llms.txt (llmstxt.org): guía en Markdown para asistentes de IA. Convención emergente: ningún gran
// buscador ha confirmado que la use, cuesta cero mantenerla y se genera desde los mismos textos de la web.
export function GET() {
  const body = `# ${site.brand}

> ${site.description}

${site.brand} es un estudio español de webs, automatización e inteligencia artificial para negocios de cualquier tamaño. El proceso es online y por escrito: el cliente configura el proyecto, ve el precio al instante y recibe la propuesta por email.

## Servicios

${serviceCatalog.map((s) => `- [${s.name}](${abs("/#que-hacemos")}): ${s.description}`).join("\n")}

## Precios y contratación

- [Configurador de presupuesto](${abs("/presupuesto/")}): elige el tipo de proyecto, los extras y el mantenimiento y obtén el precio orientativo al momento.
- [Datos clave y preguntas frecuentes](${abs("/llms-full.txt")}): precios, plazos, forma de pago, alcance y respuestas completas en texto plano.

## Legal

- [Aviso legal](${abs("/aviso-legal/")})
- [Política de privacidad](${abs("/privacidad/")})
- [Política de cookies](${abs("/cookies/")})

## Contacto

- Email: ${site.contact.email}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
