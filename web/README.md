# web/ — web propia (Astro + Tailwind + Cloudflare)

One-page de captación + textos legales + formulario conectado a email. Es el **uso nº 1** de la futura plantilla (P-06).

## Qué editar

| Qué | Dónde |
|-----|-------|
| Marca, contacto, datos legales, textos, precios | `src/content/site.ts` (valores marcados con `TODO`) |
| Dominio | `astro.config.mjs` (`site`) + `site.url` en `site.ts` |
| Colores y tipografía | `src/styles/global.css` (`@theme`) |
| Secciones de la home | `src/pages/index.astro` (orden) y `src/components/` |
| Formulario (backend) | `functions/api/contact.ts` |

## Desarrollo

```bash
cd web
npm install
npm run dev            # http://localhost:4321 (sin formulario)
cp .dev.vars.example .dev.vars
npm run preview        # web + función del formulario con Wrangler en http://localhost:8788
```

## Fase gratuita: publicar en `*.pages.dev` (sin dominio)

Coste 0 €. La web queda en `https://<proyecto>.pages.dev`, **no indexada en Google** (`prelaunch: true` en `site.ts`), para enseñarla a prospectos con un enlace.

1. **Cloudflare → Workers & Pages → Create → pestaña Pages → Connect to Git** → autoriza GitHub → repo `Myweb`.
2. Configuración del build:
   - Production branch: `main`
   - Framework preset: `Astro`
   - Root directory: `web`
   - Build command: `npm run build`
   - Build output directory: `dist`
3. **Resend** (gratis): crea una cuenta con el email donde quieres recibir los leads → **API Keys → Create**.
4. **Turnstile** (gratis): Cloudflare → Turnstile → Add widget → hostname `<proyecto>.pages.dev` → copia la *site key* a `turnstileSiteKey` en `site.ts`.
5. En el proyecto de Pages → **Settings → Variables and Secrets** (Production):

   | Nombre | Tipo | Valor |
   |--------|------|-------|
   | `RESEND_API_KEY` | Secret | la API key de Resend |
   | `TURNSTILE_SECRET` | Secret | la *secret key* de Turnstile |
   | `CONTACT_TO` | Text | **el mismo email de tu cuenta de Resend** |
   | `CONTACT_FROM` | Text | `Web <onboarding@resend.dev>` |
   | `SEND_ACK` | Text | `false` |

6. **Deployments → Retry deployment** para que coja las variables.
7. **Web Analytics:** en el proyecto de Pages → Metrics → activa Web Analytics.
8. Prueba el formulario desde el móvil: te debe llegar el aviso a `CONTACT_TO`.

> Sin dominio propio, Resend solo puede enviar a tu propio email: te llega el aviso de cada lead, pero el lead no recibe un email de confirmación (`SEND_ACK=false`). Lo ve en la página `/gracias`.

## Fase de lanzamiento: dominio propio

1. Compra el dominio (Cloudflare → Domain Registration; `.es` en otro registrador y DNS en Cloudflare).
2. Pages → **Custom domains** → añade el dominio.
3. Cambia `site` en `astro.config.mjs`, `url` en `site.ts` y pon `prelaunch: false`.
4. **Email Routing:** `hola@tudominio.com` → tu Gmail.
5. **Resend → Domains:** verifica el dominio (registros DNS en Cloudflare) y cambia `CONTACT_FROM=Web <web@tudominio.com>` y `SEND_ACK=true`.
6. Turnstile: añade el nuevo hostname al widget.

Cada `git push` a `main` redespliega. También puedes desplegar a mano con `npm run deploy` (requiere `npx wrangler login`).

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
