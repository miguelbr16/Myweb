# Auditoría — Myweb + WEB_DEV/DEV-BUSINESS-PLAYBOOK

> ⚠️ **Documento histórico (inicio del día).** Partes superadas: el presupuestador ya no está bloqueado (P-11 sustituye a X-17), el hosting es Cloudflare (P-10) y la web va en Astro (P-01). La auditoría posterior está en [AUDITORIA_EXTERNA_2026-09-30.md](./AUDITORIA_EXTERNA_2026-09-30.md).

> **Fecha:** 2026-09-30  
> **Alcance:** repo `miguelbr16/Myweb` (Digital Factory, freeze 2026-08-22) y carpeta `miguelbr16/WEB_DEV/DEV-BUSINESS-PLAYBOOK` (playbook negocio propio, 2026-07-07)  
> **Resultado:** fusión en este repo. Ver [decisión de fusión](../../decisions/2026-09-30-fusion-myweb-webdev.md).

---

## 1. Resumen ejecutivo

**Son el mismo negocio, contado dos veces y sin conectar entre sí.**

| | WEB_DEV / playbook (jul) | Myweb / factory (ago) |
|--|--------------------------|------------------------|
| Qué aporta | **Lo comercial**: oferta, precios, discovery, roadmap, Instagram, perfil del fundador | **Lo de gobierno**: principios, qué NO construir, disciplina de decisiones, RGPD |
| Qué le falta | Límites: planea CRM, presupuestador y dashboard antes del primer cliente | Todo lo que vende: no hay oferta, precios, marca, web propia ni plan de captación |
| Activo real | Hace referencia a una plantilla Next.js que pertenece a **otro proyecto** (24Shoots), no a este negocio | Ninguno. Cero código y cero clientes |
| Formato | `.txt` sueltos | Markdown, vault Obsidian, decision log |

**Diagnóstico principal:** el proyecto estuvo parado (confirmado por el fundador) y se retoma poco a poco. La documentación tiene mucha estrategia y gobierno, pero todavía no hay web propia, ni plantilla propia, ni cliente de pago. **El riesgo al retomarlo es volver a diseñar en lugar de publicar y vender.** Por eso el roadmap pasa a organizarse por etapas sin fechas fijas.

---

## 2. Auditoría de Myweb

### Puntos fuertes
- **La disciplina de decisiones es muy buena.** Separa DECIDED, PROVISIONAL, OPEN y DO NOT BUILD, y etiqueta FACT, HYPOTHESIS y RISK. Es poco habitual y muy valioso.
- **Tiene una lista explícita de DO NOT BUILD** (X-01…X-15) que frena la sobreingeniería.
- **Tiene en cuenta el RGPD desde el principio.** Minimizar datos (D-05) es obligatorio si el nicho es sanitario.
- **Es honesto con la evidencia.** Marca `[NOT MEASURED]` y no convierte una opinión en un dato.

### Problemas encontrados

| # | Severidad | Problema | Evidencia |
|---|-----------|----------|-----------|
| M1 | 🔴 Alta | **La proporción entre gobierno y producto está desequilibrada.** Hay unos 65 KB de documentos de arquitectura y ningún activo comercial (oferta, precio, landing, guion de outbound). | `docs/strategy/` y `docs/playbooks/` solo tienen README |
| M2 | ~~🔴 Alta~~ ✅ Resuelto | ~~P-01 (Astro) ignora un activo que ya existe.~~ **Retirado:** el código de 24Shoots es otro proyecto y no se reutiliza. Con web desde cero y hosting en Cloudflare, **Astro se reafirma** (ver §6). | `DECISION_LOG.md` P-01 |
| M3 | 🟠 Media | **Enlaces rotos.** `spikes/GROK_RED_TEAM_V0.1.md` se cita como evidencia del freeze, pero no existe. Tampoco existen `/composer-analysis.md` ni `/multimodel-orchestration-analysis.md`. | `factory/README.md`, `ARCHITECTURE_FREEZE_V0.1.md` §6, `DIGITAL_FACTORY_CONTEXT.md` §11 |
| M4 | 🟠 Media | **Hay una decisión DECIDED apoyada en evidencia que falta.** Varias decisiones se atribuyen a "Grok Red Team" y ese documento no está en el repo. | D-05, D-09 |
| M5 | 🟡 Baja | **Hay READMEs desactualizados.** `spikes/README.md` dice "Vacío" y contiene dos informes. | `spikes/README.md` |
| M6 | 🟡 Baja | **El README raíz solo dice `# Myweb`.** Nadie, ni persona ni IA, sabe por dónde empezar. | `README.md` |
| M7 | 🟡 Baja | **El nicho dental aparece solo como hipótesis** (O-01, O-02). No hay experimento con fecha ni criterio de éxito o fallo. | `DIGITAL_FACTORY_CONTEXT.md` §5 |
| M8 | 🟡 Baja | **La orquestación multi-IA** (Gemini, Grok, Composer, ChatGPT) consume tiempo del fundador en coordinar revisiones. Con un equipo de una persona y sin clientes, cuesta más de lo que aporta. | `DIGITAL_FACTORY_CONTEXT.md` §7 |

---

## 3. Auditoría de WEB_DEV / DEV-BUSINESS-PLAYBOOK

### Puntos fuertes
- **Es accionable.** Tiene tareas semanales, entregables concretos y una sección "si vas con retraso" con prioridades.
- **Tiene una oferta productizada** en 3 paquetes, servicios recurrentes y una regla de scoping MVP / Fase 2 / Fase 3.
- **El cuestionario de discovery es completo** e incluye un checklist antes de publicar.
- **Tiene un plan de Instagram concreto** (12 posts con CTA por palabra clave) que sirve para medir.
- **Tiene la experiencia de entrega** de una web real para un cliente (24Shoots), útil como aprendizaje y como posible caso.

### Problemas encontrados

| # | Severidad | Problema | Evidencia |
|---|-----------|----------|-----------|
| W1 | 🔴 Alta | **Se construye producto interno antes de validar.** El roadmap mete CRM (semana 5), presupuestador (6), emails y PDF (7) y dashboard (8), lo que supone entre 30 y 45 h de desarrollo interno con 0 o 1 clientes. Además contradice su propia regla: "Automatizaciones complejas antes de tener 3 clientes reales" aparece en *Lo que NO quiero*. | `01-ROADMAP-8-SEMANAS.txt`, `02-AUTOMATIZACIONES-PRIORIDAD.txt` |
| W2 | 🔴 Alta | **El playbook se apoya en código de otro proyecto.** El nivel 0 ("ya tienes"), `npm run new-site` y el roadmap dan por hecho la plantilla de 24Shoots, y el README dice "Lleva toda la carpeta 24shoots a casa (incluye este playbook)". Mezcla el negocio propio con el proyecto de un cliente. | `README.txt`, `02-AUTOMATIZACIONES-PRIORIDAD.txt` nivel 0 |
| W3 | 🟠 Media | **El cliente ideal es demasiado amplio.** "Productoras, restaurantes, clínicas, inmobiliarias, coaches" son 5 mensajes distintos, y el outbound y el contenido se diluyen. | `CONTEXTO-NEGOCIO-PROPIO.txt` |
| W4 | 🟠 Media | **Falta el RGPD y la parte legal del propio negocio.** El formulario y el CRM guardan datos personales, pero no se mencionan base legal, retención, aviso de privacidad del CRM ni encargados de tratamiento (Resend, Vercel, Supabase). | `02-AUTOMATIZACIONES-PRIORIDAD.txt` nivel 2 |
| W5 | 🟠 Media | **Las métricas no tienen línea base.** "≥30% leads a llamada" y "3 clientes/mes a 90 días" son objetivos sin un embudo detrás. ¿Cuántos contactos hacen falta para 3 clientes? | `00-PLAN-MAESTRO.txt` |
| W6 | 🟡 Baja | **El formato `.txt` no se enlaza, no tiene Obsidian ni se integra con el decision log.** | Todo el playbook |
| W7 | 🟡 Baja | **Hay seguridad a medias.** `/admin/leads` está protegido con "password simple", lo que expone datos personales si falla. Hay que usar autenticación real o no tener panel. | `02-AUTOMATIZACIONES-PRIORIDAD.txt` |
| W8 | 🟡 Baja | **El nombre de marca sigue sin decidirse**, y bloquea el dominio, la bio de Instagram y la web. | `INICIO-NUEVO-AGENTE.txt` |

---

## 4. Contradicciones entre los dos repos

| Tema | WEB_DEV | Myweb | Resolución propuesta (ver decisión de fusión) |
|------|---------|-------|---------------------------------------------|
| Framework | Next.js 15 + Tailwind + JSON | Astro + Tailwind (apuesta de 90 días) | **Astro** (P-01 reafirmado), sin reutilizar código de 24Shoots, desplegado en **Cloudflare** |
| Contenido | JSON (`site.json`, `content/es`) | `copy.md` + configuración mínima | **JSON de la plantilla**. Es equivalente en espíritu a P-03 |
| Cliente ideal | Pymes, creadores y negocios locales en general | Clínicas dentales (hipótesis) | **Web de marca generalista** para negocios locales de servicios, y **outbound a un vertical cada vez** con experimento de 30 días |
| CRM / DB | Semana 5 | DO NOT BUILD antes de C1 (X-07) | **Email + tabla manual** hasta 3 clientes o 30 leads al mes |
| Presupuestador | Semana 6 | No contemplado | Aplazado hasta después de C1. Mientras tanto, tabla de precios estática en la web |
| Automatización del formulario | Resend: acuse al lead + aviso a ti | Formulario que llega por email a recepción | **Compatible**, se hace ya (nivel 1) |
| Topología de repos | `npm run new-site` (copia) | Copia independiente del template (D-08) | **Compatible**, se mantiene |
| Orden de prioridades | Web + Instagram + venta | Cliente 1 | **Compatible**: web propia, luego outbound, luego C1 |

---

## 5. Recomendaciones priorizadas

1. **Etapa 1:** crear la web propia desde cero en `web/` (Astro + Cloudflare). Será la semilla de la plantilla. Resuelve W2.
2. **Esta semana:** decidir el nombre de marca. Es lo que desbloquea el dominio, Instagram y la web.
3. **Semanas 1–2:** publicar la web propia en *one-page* con la plantilla existente, con formulario, WhatsApp y textos legales.
4. **Semanas 1–4:** hacer outbound a un único vertical (15 conversaciones en 30 días, como ya propone el contexto V0.2).
5. **No construir** CRM, presupuestador ni dashboard hasta que se cumpla alguno de los triggers de reapertura del freeze.
6. **Mantener el gobierno ligero:** un decision record por decisión real y nada de spikes nuevos. Reducir la coordinación multi-IA a lo imprescindible.
7. **Recuperar o dar por perdido** `GROK_RED_TEAM_V0.1.md`. Si existe en algún chat, commitearlo. Si no, dejarlo marcado como evidencia perdida (ya está marcado).
8. **Archivar WEB_DEV** con un README que apunte a este repo, para que solo haya una fuente de verdad.

---

## 6. Revisión tras el feedback del fundador (2026-09-30)

| Feedback | Cambio aplicado |
|----------|-----------------|
| "La web la haremos en Cloudflare" | Nueva decisión [hosting en Cloudflare](../../decisions/2026-09-30-hosting-cloudflare.md) (P-10). Se sustituye Vercel en toda la documentación. |
| "No llevo semanas planificando, el proyecto estaba parado" | Se corrige el diagnóstico (§1). El roadmap pasa a ir **por etapas y sin fechas**, para avanzar poco a poco. |
| "Solo Myweb y WEB_DEV; el resto son proyectos distintos" | Se retira todo lo que dependía del código de 24Shoots. La web y la plantilla propias se crean **desde cero** en `web/` dentro de este repo (P-06 redefinido), y **P-01 (Astro) se reafirma**. |

### Por qué Astro, ahora que se empieza de cero

- **Rendimiento:** genera HTML estático con **0 KB de JavaScript por defecto**. Es lo que más pesa en Lighthouse móvil y en la conversión de una web de captación.
- **Cloudflare:** hay soporte nativo (adaptador oficial) y el equipo de Astro forma parte de Cloudflare desde 2026.
- **Curva de aprendizaje:** los componentes `.astro` son HTML con props y Tailwind funciona igual. Si algún día hace falta una isla interactiva, se puede usar React dentro de Astro.
- **Coherencia:** era la apuesta original de V0.1. Lo único que justificaba cambiarla era reutilizar código de 24Shoots, y eso ya no aplica.

### Por qué `web/` dentro de Myweb

- Un solo repo para el negocio y su web: menos contexto que mantener para ti y para los agentes de IA.
- Tu principio 4: **"promover a template solo tras ≥3 usos similares"**. La web propia es el uso 1. Se extrae a un repo de plantilla cuando haya 3 webs parecidas.
