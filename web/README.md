# web/ — web propia (Astro + Tailwind + Cloudflare)

Home de captación con historia, configurador de presupuesto `/presupuesto/`, textos legales y formularios conectados a email. Es el **uso nº 1** de la futura plantilla (P-06).

Diseño y decisiones: [DISENO_Y_NARRATIVA.md](../factory/docs/strategy/DISENO_Y_NARRATIVA.md). SEO, SEM, GEO y AEO: [SEO_SEM_GEO_AEO.md](../factory/docs/strategy/SEO_SEM_GEO_AEO.md).

## Qué editar

| Qué | Dónde |
|-----|-------|
| Marca, contacto, datos legales, perfiles sociales | `src/content/site.ts` (valores marcados con `TODO`) |
| **Textos de la home**, FAQ, tabla de precios, datos de la medición | `src/content/home.ts` |
| Precios y reglas del configurador `/presupuesto` | `src/content/pricing.ts` |
| Dominio y modo pre-lanzamiento | `site.url` y `site.prelaunch` en `site.ts` (de ahí salen canonical, sitemap, JSON-LD y `llms.txt`) |
| Colores, tipografía y componentes de estilo | `src/styles/global.css` (`@theme`, `.btn`, `.field`…). La fuente está en `src/assets/fonts/` |
| Datos estructurados (JSON-LD), robots, sitemap, llms.txt | `src/lib/seo.ts`, `src/pages/robots.txt.ts`, `sitemap.xml.ts`, `llms*.txt.ts` |
| Logo, favicon e imagen para redes | `public/favicon.svg`, `public/logo.svg`; `scripts/brand-assets.html` + `.mjs` generan `og.png` y `apple-touch-icon.png` |
| Secciones de la home | `src/pages/index.astro` (orden) y `src/components/` (Hero, Scene, Pillars, Guide, Process, PriceTable, Proof, Fact, Faq, FinalCta, Contact) |
| Formulario (backend) | `worker/index.ts` |
| Configuración de Cloudflare | `wrangler.jsonc` (el `name` debe coincidir con el proyecto) |

## Reglas para editar textos

- `npm run build` ejecuta `scripts/check-copy.mjs`: rechaza emojis, clichés y afirmaciones que no podamos probar. Si una línea es legítima, añade `check-copy:ok` en ella.
- Los precios se cambian **solo** en `src/content/pricing.ts`; la tabla, el configurador, el ticket, la FAQ, el JSON-LD y `llms.txt` se actualizan solos.
- La FAQ se edita solo en `home.ts`: alimenta la página, el JSON-LD y `llms-full.txt` a la vez.
- Las cifras de la sección «La primera prueba» (`proof` en `home.ts`) se miden con Lighthouse y se actualizan a mano. Nunca pongas un número que no hayas medido.

## Desarrollo

```bash
cd web
npm install
npm run dev            # http://localhost:4321 (sin formulario)
cp .dev.vars.example .dev.vars
npm run preview        # web + Worker del formulario en http://localhost:8787
```

## Fase gratuita: publicar en `*.workers.dev` (sin dominio)

Coste 0 €. La web queda en `https://myweb.<tu-subdominio>.workers.dev`, **no indexada en Google** (`prelaunch: true` en `site.ts`), para enseñarla a prospectos con un enlace.

### 1. Crear el Worker conectado a GitHub

**Workers & Pages → Create → Import a repository** → `miguelbr16/Myweb`:

| Campo | Valor |
|-------|-------|
| Project name | `myweb` (debe coincidir con `name` en `wrangler.jsonc`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Advanced settings → **Path** | **`/web`** |
| API token | *Create new token* (no reutilices uno de otro proyecto) |
| Variables de build | ninguna |

→ **Deploy**.

### 2. Secretos del formulario

1. **Resend** (gratis): crea una cuenta con el email donde quieres recibir los leads → **API Keys → Create**.
2. **Turnstile** (gratis): Cloudflare → Turnstile → Add widget → hostname `myweb.<tu-subdominio>.workers.dev` → copia la *site key* a `turnstileSiteKey` en `site.ts` (commit y push).
3. En el Worker → **Settings → Variables and Secrets → Add**, tipo **Secret**:

   | Nombre | Valor |
   |--------|-------|
   | `RESEND_API_KEY` | la API key de Resend |
   | `TURNSTILE_SECRET` | la *secret key* de Turnstile |
   | `CONTACT_TO` | **el mismo email de tu cuenta de Resend** |

   `CONTACT_FROM` y `SEND_ACK` ya vienen en `wrangler.jsonc`.
4. Prueba el formulario desde el móvil: te debe llegar el aviso a `CONTACT_TO`.

> Sin dominio propio, Resend solo puede enviar a tu propio email: te llega el aviso de cada lead, pero el lead no recibe un email de confirmación (`SEND_ACK: "false"`). Lo ve en la página `/gracias`.

**Analítica:** Cloudflare → Analytics & Logs → Web Analytics → Add a site → tu URL `workers.dev`.

## Fase de lanzamiento: dominio propio

1. Compra el dominio (Cloudflare → Domain Registration; `.es` en otro registrador y DNS en Cloudflare).
2. Worker → **Settings → Domains & Routes → Add → Custom domain**.
3. Cambia `site` en `astro.config.mjs`, `url` en `site.ts` y pon `prelaunch: false`.
4. **Email Routing:** `hola@tudominio.com` → tu Gmail.
5. **Resend → Domains:** verifica el dominio (registros DNS en Cloudflare) y en `wrangler.jsonc` cambia `CONTACT_FROM` a `Web <web@tudominio.com>` y `SEND_ACK` a `"true"`.
6. Turnstile: añade el nuevo hostname al widget.

Cada `git push` a `main` redespliega; las ramas generan previews. También puedes desplegar a mano con `npm run deploy` (requiere `npx wrangler login`).

## Medir conversiones

Cloudflare Web Analytics no tiene eventos personalizados. Para medir:
- **Leads del formulario:** visitas a `/gracias` en Web Analytics (y los emails recibidos).
- **WhatsApp:** los mensajes que llegan con el texto predefinido de `site.contact.whatsappText`.

## Antes de publicar

- [ ] Ningún `TODO` en `site.ts` (`grep -n TODO src/content/site.ts`)
- [ ] Textos legales revisados con tus datos reales
- [ ] Clave real de Turnstile (la de prueba acepta a cualquiera)
- [ ] `prelaunch: false` solo cuando lances con dominio propio
- [ ] Formulario probado de principio a fin
- [ ] Lighthouse móvil ≥ 90
