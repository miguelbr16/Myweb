# Auditoría externa (Grok) y verificación — 2026-09-30

> **Qué es:** auditoría completa A–L hecha por Grok sobre la web en vivo (`myweb.miguelborrasroig.workers.dev`), el repo (`main` @ `89b3ed9`) y la estrategia. Cada hallazgo se ha **comprobado contra la web y el código** antes de actuar.  
> **Decisiones derivadas:** [2026-09-30-repo-privado-y-lanzamiento.md](../../decisions/2026-09-30-repo-privado-y-lanzamiento.md)

## Veredicto

Web técnicamente seria pero **aún no vendible**: identidad legal de relleno, antispam de prueba, repo público con la estrategia, oferta más amplia que la capacidad de entrega. La artesanía va por delante de la preparación de mercado (Grok: craft 6,5/10, listo para cobrar 3/10).

| Área | Nota Grok | Área | Nota Grok |
|------|----------:|------|----------:|
| A Seguridad | 5,5 | G CRO | 6,5 |
| B Rendimiento | 7,5 | H Diseño | 7,5 |
| C SEO | 3 | I Accesibilidad | 7 |
| D SEM | 3,5 | J Legal | 2,5 |
| E GEO/AEO | 4,5 | K Código | 7 |
| F Marketing | 5,5 | L Estrategia | 5 |

Las notas bajas de C, D y E son en buena parte **estado pre-lanzamiento intencionado** (`noindex`, `Disallow`, `example.com`), no defectos.

## Verificación de los hallazgos

| Hallazgo | Resultado | Acción |
|----------|-----------|--------|
| Sin rate limit en el Worker | ✅ Confirmado | Hecho: `ratelimits` de Cloudflare, 3 envíos/60 s por IP y ubicación |
| Sin tope de tamaño del cuerpo | ✅ Confirmado | Hecho: 411 sin `Content-Length`, 413 por encima de 64 KiB |
| Asunto y `reply_to` sin sanear | ⚠️ Parcial (riesgo bajo) | Sin inyección real (el `reply_to` se valida y el asunto viaja en JSON). Hecho: se eliminan caracteres de control |
| Turnstile de prueba | ✅ Confirmado | Pendiente tuya: clave real. Puerta de lanzamiento lo bloquea |
| Sin HSTS ni CSP | ✅ Confirmado | Hecho: CSP estricta y HSTS en `_headers` (0 violaciones probadas) |
| Teléfono, WhatsApp y datos legales de relleno | ✅ Confirmado | Hecho: botón de WhatsApp oculto con número falso; puerta de lanzamiento. Pendiente tuya: datos reales |
| El modo «urgente» no acorta el plazo | ✅ Confirmado (bug propio) | Hecho: plazo a la mitad («4–6 días (urgente)») y prueba que lo protege |
| Sin `.gitignore` en la raíz | ✅ Confirmado | Hecho |
| Sin CI, sin tests, sin Dependabot | ✅ Confirmado | Hecho: 37 pruebas, CI y `dependabot.yml` |
| Contradicciones de documentación (X-17, «llamada») | ✅ Confirmado | Hecho en esta revisión |
| Vender «automatización» con el CRM bloqueado | ✅ Confirmado | Decisión del fundador: se mantiene; **no se publicará** hasta que los servicios estén listos |
| Repo público con `factory/` | ✅ Confirmado | Decidido: `factory/` pasa a un repo privado (ver decisión) |
| **Typo `ahola@`** | ❌ **No encontrado** (web ni repo) | Falso positivo probable |
| `npm audit` | 0 vulnerabilidades | — |
| CWV/PageSpeed en producción | ⏳ No verificable | La API de Google dio 429 también a nosotros. Pasar pagespeed.web.dev a mano |
| Secret scanning y Dependabot de GitHub | ⏳ No verificable desde aquí | Revisar en GitHub → Settings → Security |

## Hallazgo añadido al verificar

- **El Worker podía lanzar una excepción** si Cloudflare (Turnstile) no respondía. Ahora se trata como «no verificado». Hecho.
- **Los redirects pasaban por una redirección extra** por la barra final. Corregido.
- **El ACK al cliente puede usarse para enviar correo a terceros** si se activa `SEND_ACK`. Se mitiga con Turnstile y el rate limit; mantener `SEND_ACK=false` hasta tener dominio verificado.

## Lo que está bien (según la auditoría)

Modelo asíncrono con precio a la vista · fuente única de precios y estimación en servidor · FAQ y JSON-LD alineados · Turnstile diferido con verificación en servidor y honeypot · HTML escapado en emails y logs sin datos personales · web estática en Cloudflare (TTFB bajo) · identidad memorable · honestidad «estamos empezando» · `check-copy` en el build · estructura legal presente.

## Plan en tres horizontes

**Antes de lanzar:** datos legales reales · Turnstile de producción end-to-end · dominio real · contrato del 50 % y condiciones de venta · decidir el alcance de los paquetes · repo de estrategia privado · envío de prueba real (formulario → email).  
**30 días:** indexar · un caso real · medición de leads · CSP/HSTS (hecho) y CI (hecho) · 10 conversaciones reales midiendo presupuesto → pago.  
**90 días:** 1–2 landings por sector · SEM solo si el coste por presupuesto compensa · política de bots de IA · 2 mantenimientos · economía unitaria con horas reales.

## Preguntas de la auditoría, pendientes de responder

1. ¿Sector o ICP para los primeros 90 días (local, vertical, nacional)?
2. ¿Ingresos objetivo y proyectos en paralelo que puedes atender?
3. ¿Dominio y fecha prevista de `prelaunch: false`?
4. ¿Anuncios en 30 días o solo postal y QR?
5. ¿Ya eres autónomo con NIF?
6. ~~¿Repo público a propósito?~~ → No: `factory/` pasa a privado.
7. ~~¿Puedes entregar automatización y CRM?~~ → Se mantiene en la oferta; no se publica hasta que esté listo.

## Checklist de lanzamiento (de la auditoría)

- [ ] `site.url` distinto de `example.com` *(la puerta de lanzamiento lo exige)*
- [ ] Datos legales reales antes de `prelaunch: false` *(puerta)*
- [ ] `robots` permitido y sitemap con el dominio real *(automático al lanzar)*
- [ ] Turnstile de producción probado de extremo a extremo *(puerta para la clave pública; el secreto lo compruebas tú)*
- [x] Rate limit activo
- [ ] WhatsApp y teléfono reales *(puerta; mientras tanto, oculto)*
- [ ] Resend con SPF, DKIM y DMARC
- [ ] Política de privacidad con los encargados reales
- [ ] Condiciones de contratación
- [ ] Prueba formulario → email al fundador y acuse
- [ ] PageSpeed móvil en producción documentado
- [ ] `factory/` fuera del repo público
- [ ] Paquetes vendibles = entregables
