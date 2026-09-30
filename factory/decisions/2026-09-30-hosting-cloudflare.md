# 2026-09-30 — Hosting en Cloudflare

> **Estado:** DECIDED (fundador, 2026-09-30)  
> **Relacionado:** [DECISION_LOG.md](./DECISION_LOG.md) P-01, P-06, P-10

## DECISIÓN

1. **Las webs (la propia y las de clientes) se publican en Cloudflare**, no en Vercel.
2. **Modo de despliegue por defecto:** **Cloudflare Workers con static assets**. Astro genera `dist/` (estático) y un Worker mínimo (`web/worker/index.ts`) solo atiende `POST /api/contact`. Configuración en `web/wrangler.jsonc`. *(Actualizado el mismo día: se pasó de Pages Functions a Workers porque es el flujo que ofrece hoy el panel de Cloudflare.)*
3. **El formulario de contacto** pasa por esa función: valida Turnstile y envía con Resend (vía `fetch`) el acuse al lead y el aviso al fundador.
4. **Alternativa** si un cliente necesita render en servidor: el adaptador oficial `@astrojs/cloudflare`. No es el modo por defecto.

## CONTEXTO

- El fundador elige Cloudflare. Ventajas para este negocio:
  - CDN y SSL gratis.
  - DNS en el mismo sitio.
  - **Web Analytics sin cookies** (cierra O-06 y evita el banner de cookies por analítica).
  - **Turnstile** contra el spam, gratis.
  - **Email Routing** para recibir `hola@tudominio` gratis.
  - Registrar a precio de coste.
- Una web de captación es contenido estático más un formulario. Servirla como estático en la CDN es lo más rápido, barato y difícil de romper.

## ALTERNATIVAS RECHAZADAS

- **Vercel:** decisión del fundador.
- **Render en servidor (SSR) por defecto:** una web de captación no lo necesita; añade piezas que pueden romperse.

## CONSECUENCIAS

- Se sustituye "Vercel" en oferta, stack y lista de encargados RGPD.
- **[RISK]** Con salida estática las imágenes se optimizan en el build (`astro:assets`). Los vídeos pesados se sirven comprimidos o desde fuera del repo.
- **[FACT]** Cloudflare Registrar no admite todos los TLD. Si quieres un `.es`, regístralo en otro registrador y apunta los DNS a Cloudflare.

## ETIQUETAS

FACT: el fundador decide Cloudflare (2026-09-30).
RISK: el sitio estático no puede generar páginas bajo demanda; para una web de captación no hace falta.

## REVISIÓN RED TEAM

N/A. La decisión es del fundador; aquí se documenta cómo aplicarla.
