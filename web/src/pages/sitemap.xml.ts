import { abs } from "../lib/seo";

// Solo páginas indexables. Las de confirmación, error y 404 llevan noindex y no entran.
const pages = [
  { path: "/", priority: "1.0" },
  { path: "/presupuesto/", priority: "0.9" },
  { path: "/aviso-legal/", priority: "0.2" },
  { path: "/privacidad/", priority: "0.2" },
  { path: "/cookies/", priority: "0.2" },
];

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => `  <url><loc>${abs(p.path)}</loc><lastmod>${lastmod}</lastmod><priority>${p.priority}</priority></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
