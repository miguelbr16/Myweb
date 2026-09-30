import { site } from "../content/site";
import { abs } from "../lib/seo";

// robots.txt generado en el build: así el Sitemap siempre apunta al dominio vigente.
// Antes del lanzamiento se bloquea todo (prelaunch). Al lanzar, se permite todo y se nombran
// los rastreadores de IA para dejar la intención por escrito: queremos que nos citen.
const open = `User-agent: *
Allow: /

# Buscadores. El índice de Google alimenta AI Overviews; el de Bing alimenta Copilot y DuckDuckGo.
User-agent: Googlebot
User-agent: Bingbot
Allow: /

# OpenAI: GPTBot (entrenamiento), OAI-SearchBot (índice de ChatGPT search, el que permite que te citen)
# y ChatGPT-User (lectura en directo cuando un usuario pregunta).
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
Allow: /

# Anthropic
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
Allow: /

# Perplexity
User-agent: PerplexityBot
User-agent: Perplexity-User
Allow: /

# Google Gemini (no afecta al posicionamiento en Search) y Apple Intelligence
User-agent: Google-Extended
User-agent: Applebot
User-agent: Applebot-Extended
Allow: /

# Corpus abierto y Meta
User-agent: CCBot
User-agent: meta-externalagent
Allow: /

Sitemap: ${abs("/sitemap.xml")}
`;

const closed = `# Web en pre-lanzamiento: no indexar todavía.
User-agent: *
Disallow: /
`;

export function GET() {
  return new Response(site.prelaunch ? closed : open, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
