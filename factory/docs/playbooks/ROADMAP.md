# Roadmap por etapas — V0.2

> **Ritmo:** poco a poco, sin fechas fijas. Se pasa de etapa cuando se cumple su **criterio de salida**, no cuando acaba una semana.  
> **Fuente:** `archive/web_dev_playbook_2026-07-07/roadmap/01-ROADMAP-8-SEMANAS.txt`, ajustado al freeze (X-16…X-18) y a las decisiones del 2026-09-30 (Astro + Cloudflare).  
> **Regla:** en cada sesión, marca lo que has hecho y apunta la siguiente tarea en la sección "Siguiente paso".

## Siguiente paso

➡️ **Etapa 2:** fusionar el PR y desplegar el Worker en Cloudflare (`workers.dev`, gratis).

---

## Etapa 1: fundaciones

- [x] Eslogan: "Tecnología sólida para hacer crecer tu negocio"
- [ ] Comprar `solidumdigital.com` (y opcionalmente `solidumlabs.com`) cuando llegue el lanzamiento
- [ ] Comprar el dominio y darlo de alta en Cloudflare
- [ ] Email entrante `hola@dominio` con Cloudflare Email Routing → Gmail
- [ ] Cuenta en Resend y dominio verificado (para enviar emails)
- [x] Cuenta de Cloudflare creada
- [x] Nombre de marca: **Solidum Digital** (ya en `site.ts`)
- [ ] Crear el perfil de Instagram de negocio (reservar el nombre, aunque no publiques)
- [ ] Aprobar o rechazar la [decisión de fusión](../../decisions/2026-09-30-fusion-myweb-webdev.md)

**Criterio de salida:** tienes nombre, dominio y email funcionando.

## Etapa 2: web propia online

- [x] Base de la web creada en `web/` (one-page, legal, formulario → Resend) — 2026-09-30
- [x] Home con historia, configurador, legal y SEO/GEO/AEO técnico construidos — 2026-09-30 ([diseño](../strategy/DISENO_Y_NARRATIVA.md), [SEO](../strategy/SEO_SEM_GEO_AEO.md))
- [ ] Sustituir los `TODO` de `web/src/content/site.ts` (email, teléfono, WhatsApp, datos legales). `npm run check:launch` lista lo que falta
- [x] Endurecimiento tras la auditoría externa: rate limit, tope de tamaño, CSP, HSTS, puerta de lanzamiento, tests y CI — 2026-09-30 ([informe](../audit/AUDITORIA_EXTERNA_2026-09-30.md))
- [ ] Crear el repo privado `solidum-factory` y mover `factory/` ([decisión](../../decisions/2026-09-30-repo-privado-y-lanzamiento.md))
- [ ] **Turnstile de producción** (clave de sitio en `site.ts` y secreto en Cloudflare) y **envío de prueba real** formulario → email
- [ ] Resend con SPF, DKIM y DMARC cuando haya dominio
- [ ] Contrato con pago del 50 % y condiciones de venta (revisar con un asesor)
- [ ] Decidir el alcance real de cada paquete: «paquetes vendibles = entregables»
- [ ] Decidir la **presencia humana** en la web: nombre, foto y nota de fundación (lo que más credibilidad añade)
- [ ] Configurar Resend + Turnstile + variables en Cloudflare (pasos en [web/README.md](../../../web/README.md))
- [ ] Textos legales con tus datos reales (aviso legal, privacidad, cookies)
- [ ] Deploy en Cloudflare con el dominio y Web Analytics activado
- [ ] **Checklist de lanzamiento** de [SEO_SEM_GEO_AEO.md §3](../strategy/SEO_SEM_GEO_AEO.md#3-antes-de-lanzar-checklist): `site.url`, `prelaunch: false`, Search Console, Bing Webmaster, ficha de Google
- [ ] Volver a medir Lighthouse en producción y actualizar la sección «La primera prueba»
- [ ] Probar el formulario de principio a fin desde el móvil

**Criterio de salida:** la web está online con tu dominio y un envío de prueba te llega por email.

## Etapa 3: preparar la captación (sin llamadas)

- [x] Configurador `/presupuesto` con precio al instante — 2026-09-30
- [ ] Plantilla de email de **propuesta** (precio cerrado, plazos, qué incluye, cómo pagar)
- [ ] **Enlace de pago** del 50 % (p. ej. Stripe Payment Link, sin código)
- [ ] **Formulario de contenido** para el cliente (textos, fotos, logo): Tally o Google Forms al principio
- [ ] Ficha de Google de Solidum Digital con enlace a `/presupuesto`
- [ ] Saber generar una **demo personalizada** en menos de 1 h duplicando `web/`
- [ ] Aspectos legales y fiscales mínimos antes de facturar ([PUESTA_EN_MARCHA_EMPRESA.md §2](../strategy/PUESTA_EN_MARCHA_EMPRESA.md#2-legal-y-fiscal-antes-de-la-primera-factura))

**Criterio de salida:** un cliente puede ir de la web al pago sin hablar contigo.

## Etapa 4: primeros envíos y primeros presupuestos

- [ ] Lista de 30 negocios sin web (Google Maps a mano; ≥10 reseñas, nota ≥4,0)
- [ ] 10 demos + tarjetas postales con QR ([OUTBOUND.md §2](./OUTBOUND.md))
- [ ] 2–3 colaboradores (gestoría, fotógrafo…) con enlace `?ref=`
- [ ] Instagram en paralelo: 1–3 posts por semana ([plan](./INSTAGRAM_PLAN_MES_1.md))
- [ ] Medir: escaneos del QR → presupuestos → ventas por canal

**Criterio de salida:** ≥3 solicitudes de presupuesto recibidas.

**Fase 2 (cuando haya ≥3 ventas):** generador automático de demos + búsqueda con la API de Google Places.

## Etapa 5: cliente 1

- [ ] Cerrar C1: propuesta aceptada por email y 50 % cobrado
- [ ] Entrega copiando `web/` como base (D-08)
- [ ] QA con el checklist del discovery y Lighthouse móvil ≥ 90
- [ ] Mantener el outbound mientras entregas

**Criterio de salida:** C1 en producción y cobrado.

## Etapa 6: aprender y decidir

- [ ] Retrospectiva de C1 en `docs/learnings/`: horas reales, qué se reutilizó y qué fue custom
- [ ] Revisar precios con las horas reales
- [ ] Ofrecer mantenimiento recurrente a C1
- [ ] Pedir testimonio y permiso para usar el caso
- [ ] **Evaluar los triggers del freeze:** si se cumplen, reabrir X-16 (CRM) con un decision record

**Criterio de salida:** sistema repetible documentado y decisión informada sobre el producto interno.

---

## En cada sesión de trabajo

1. Abre este archivo y mira "Siguiente paso".
2. Haz **una** cosa de la etapa actual.
3. Márcala y actualiza "Siguiente paso".

## Si te atascas

Prioridad absoluta: web propia online → conversaciones → 1 cliente de pago. Todo lo demás puede esperar.
