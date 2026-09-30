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

## Primer despliegue en Cloudflare

1. Crea una cuenta en Cloudflare y añade tu dominio (o regístralo allí).
2. **Workers & Pages → Create → Pages → Connect to Git** → repo `Myweb`:
   - Root directory: `web`
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Settings → Variables and Secrets** (Production):
   - `RESEND_API_KEY` (secret), `TURNSTILE_SECRET` (secret)
   - `CONTACT_TO` = tu email, `CONTACT_FROM` = `Web <web@tudominio.com>` (dominio verificado en Resend)
4. **Turnstile → Add site** con tu dominio → copia la *site key* a `turnstileSiteKey` en `site.ts` y la *secret* a `TURNSTILE_SECRET`.
5. **Custom domains** → añade tu dominio.
6. **Web Analytics** → actívalo para el sitio (sin cookies).
7. **Email Routing** → `hola@tudominio.com` → tu Gmail.
8. Prueba el formulario desde el móvil: debe llegarte el aviso y al remitente el acuse.

Cada `git push` a la rama de producción redespliega. También puedes desplegar a mano con `npm run deploy`.

## Medir conversiones

Cloudflare Web Analytics no tiene eventos personalizados. Para medir:
- **Leads del formulario:** visitas a `/gracias` en Web Analytics (y los emails recibidos).
- **WhatsApp:** los mensajes que llegan con el texto predefinido de `site.contact.whatsappText`.

## Antes de publicar

- [ ] Ningún `TODO` en `site.ts` (`grep -n TODO src/content/site.ts`)
- [ ] Textos legales revisados con tus datos reales
- [ ] Clave real de Turnstile (la de prueba acepta a cualquiera)
- [ ] Formulario probado de principio a fin
- [ ] Lighthouse móvil ≥ 90
