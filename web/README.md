# web/ — web propia (Astro + Tailwind + Cloudflare)

One-page de captación + textos legales + formulario conectado a email. Es el **uso nº 1** de la futura plantilla (P-06).

## Qué editar

| Qué | Dónde |
|-----|-------|
| Marca, contacto, datos legales, textos | `src/content/site.ts` (valores marcados con `TODO`) |
| Precios y reglas del configurador `/presupuesto` | `src/content/pricing.ts` |
| Dominio | `astro.config.mjs` (`site`) + `site.url` en `site.ts` |
| Colores y tipografía | `src/styles/global.css` (`@theme`) |
| Secciones de la home | `src/pages/index.astro` (orden) y `src/components/` |
| Formulario (backend) | `worker/index.ts` |
| Configuración de Cloudflare | `wrangler.jsonc` (el `name` debe coincidir con el proyecto) |

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
