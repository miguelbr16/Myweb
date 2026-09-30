# Myweb: web de Solidum Digital

Código de la web de **Solidum Digital** (webs, automatización e IA): home con historia, configurador de presupuesto, textos legales y formularios con un Worker de Cloudflare.

**Stack:** Astro 7 (salida estática) · Tailwind 4 · TypeScript · Cloudflare Workers con static assets · Turnstile y Resend para los formularios.

## Estructura

```
web/                          La web
├── src/content/site.ts       Identidad, contacto y datos legales
├── src/content/home.ts       Textos de la home y FAQ
├── src/content/pricing.ts    Precios y reglas del configurador (fuente única)
├── worker/                   Formularios: rate limit → Turnstile → Resend
├── test/                     Pruebas (Vitest)
├── scripts/                  check-copy, check-launch y generación de imágenes
└── wrangler.jsonc            Configuración de Cloudflare
.github/                      CI y Dependabot
```

## Empezar

```bash
cd web
npm install
npm test            # pruebas
npm run build       # check-copy + check-launch + astro check + astro build
npm run preview     # web y Worker en http://localhost:8787
```

La guía completa (qué editar, despliegue en Cloudflare, secretos, seguridad y puerta de lanzamiento) está en [`web/README.md`](web/README.md).

> La estrategia, las decisiones y los playbooks del negocio viven en un repositorio privado aparte. Este repo contiene únicamente código.
