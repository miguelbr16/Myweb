# Web propia — Solidum Digital

> **Estado:** home y configurador construidos (2026-09-30); pendiente de datos reales, dominio y lanzamiento.  
> **Stack:** Astro + Tailwind + TypeScript en `web/` (P-01, P-06), salida estática en Cloudflare Workers (P-10).  
> **Diseño y narrativa:** [DISENO_Y_NARRATIVA.md](./DISENO_Y_NARRATIVA.md) · **SEO, SEM, GEO y AEO:** [SEO_SEM_GEO_AEO.md](./SEO_SEM_GEO_AEO.md)

## 1. Marca

- ✅ **Solidum Digital**: «Webs, automatización e IA con el precio a la vista».
- Dominio objetivo: `solidumdigital.com` (y `solidumlabs.com` como opcional). Sin comprar todavía.
- Bio de Instagram sugerida: «Webs, automatización e IA con el precio a la vista · Calcula tu presupuesto en 1 minuto · 🔗 enlace». Los emojis van en las redes, no en la web (la web los rechaza en `check-copy`).

## 2. Páginas

| Ruta | Estado | Indexable |
|------|--------|-----------|
| `/` | Hecha: 10 secciones con hilo encontrar, entender, escribir | Sí |
| `/presupuesto/` | Hecha: configurador con precio al instante | Sí |
| `/presupuesto/enviado/`, `/gracias/`, `/error/`, 404 | Hechas | No |
| `/aviso-legal/`, `/privacidad/`, `/cookies/` | Hechas (plantilla; falta titular, NIF y dirección reales) | Sí (baja prioridad) |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` | Generadas en el build | — |

**Siguientes:** páginas por servicio (webs, automatización, IA, SEO local), casos reales y, cuando haya datos de un sector, páginas por sector. Detalle en [SEO_SEM_GEO_AEO.md §4](./SEO_SEM_GEO_AEO.md#4-seo-siguiente-fase).

## 3. Requisitos técnicos (cumplidos salvo lo marcado)

- ✅ Responsive, Lighthouse móvil 100/100/100/100 en local (109 KiB).
- ✅ Formulario y configurador → Worker de Cloudflare (Turnstile + Resend): aviso al fundador; acuse al cliente cuando haya dominio verificado (`SEND_ACK`).
- ✅ Minimización de datos (D-05) y casilla de privacidad.
- ✅ Sin cookies: analítica de Cloudflare sin cookies, atribución por URL (`ref`, `utm_*`) y fuentes autoalojadas.
- ✅ Medición: visitas a `/gracias/` y `/presupuesto/enviado/`, más el campo `Origen:` de cada email.
- [ ] Legal real: titular, NIF y dirección (LSSI), lista de encargados (Cloudflare, Resend).
- [ ] Clave real de Turnstile, email, teléfono y WhatsApp reales en `site.ts`.
- [ ] Dominio propio y `prelaunch: false`.
