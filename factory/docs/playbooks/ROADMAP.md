# Roadmap por etapas — V0.2

> **Ritmo:** poco a poco, sin fechas fijas. Se pasa de etapa cuando se cumple su **criterio de salida**, no cuando acaba una semana.  
> **Fuente:** `archive/web_dev_playbook_2026-07-07/roadmap/01-ROADMAP-8-SEMANAS.txt`, ajustado al freeze (X-16…X-18) y a las decisiones del 2026-09-30 (Astro + Cloudflare).  
> **Regla:** en cada sesión, marca lo que has hecho y apunta la siguiente tarea en la sección "Siguiente paso".

## Siguiente paso

➡️ **Etapa 1:** comprar el dominio del nombre de marca y añadirlo a Cloudflare.

---

## Etapa 1: fundaciones

- [ ] Eslogan
- [ ] Comprar el dominio y darlo de alta en Cloudflare
- [ ] Email entrante `hola@dominio` con Cloudflare Email Routing → Gmail
- [ ] Cuenta en Resend y dominio verificado (para enviar emails)
- [x] Cuenta de Cloudflare creada
- [x] Nombre de marca elegido (pendiente de pasarlo a `site.ts`)
- [ ] Crear el perfil de Instagram de negocio (reservar el nombre, aunque no publiques)
- [ ] Aprobar o rechazar la [decisión de fusión](../../decisions/2026-09-30-fusion-myweb-webdev.md)

**Criterio de salida:** tienes nombre, dominio y email funcionando.

## Etapa 2: web propia online

- [x] Base de la web creada en `web/` (one-page, legal, formulario → Resend) — 2026-09-30
- [ ] Personalizar `web/` (marca, colores y textos en `web/src/content/site.ts`)
- [ ] Escribir los textos de la one-page según [WEB_PROPIA.md](../strategy/WEB_PROPIA.md)
- [ ] Configurar Resend + Turnstile + variables en Cloudflare (pasos en [web/README.md](../../../web/README.md))
- [ ] Textos legales con tus datos reales (aviso legal, privacidad, cookies)
- [ ] Deploy en Cloudflare con el dominio y Web Analytics activado
- [ ] Probar el formulario de principio a fin desde el móvil

**Criterio de salida:** la web está online con tu dominio y un envío de prueba te llega por email.

## Etapa 3: preparar la venta

- [ ] Prospección en Google Maps de negocios **sin web o solo con redes** (sin sector fijo; el vertical saldrá de los datos). Ver [OUTBOUND.md §0](./OUTBOUND.md)
- [ ] Saber hacer un **mockup "así se vería tu web"** en menos de 1 h duplicando `web/`
- [ ] Lista de 30–50 negocios cualificados (≥10 reseñas, nota ≥4,0, sin web)
- [ ] Preparar los mensajes de [OUTBOUND.md](./OUTBOUND.md)
- [ ] Propuesta tipo (Notion o PDF manual) con MVP / Fase 2 / Fase 3
- [ ] Aspectos legales y fiscales mínimos antes de facturar ([PUESTA_EN_MARCHA_EMPRESA.md §2](../strategy/PUESTA_EN_MARCHA_EMPRESA.md#2-legal-y-fiscal-antes-de-la-primera-factura))

**Criterio de salida:** ya puedes enviar un mensaje, una auditoría y una propuesta sin improvisar.

## Etapa 4: conversaciones

- [ ] 15 conversaciones con negocios sin web
- [ ] Hacer seguimiento de cada contacto a las 48–72 h
- [ ] Enviar el [cuestionario de discovery](./DISCOVERY_CUESTIONARIO.md) a quien muestre interés
- [ ] Instagram en paralelo: 1–3 posts por semana ([plan](./INSTAGRAM_PLAN_MES_1.md)), sin que frene la venta
- [ ] **Revisar tras unos 30 contactos:** ¿qué tipo de negocio responde y compra más? Ese pasa a ser el vertical (decision record)

**Criterio de salida:** ≥1 propuesta formal enviada.

## Etapa 5: cliente 1

- [ ] Cerrar C1: alcance firmado y 50 % por adelantado
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
