## 1. Diagnóstico

[FACT] El negocio cuenta con un único fundador disponible 40 h/semana, presupuesto limitado, sin base de clientes ni fábrica construida.
[FACT] El fundador pretende construir 10 piezas de infraestructura compleja antes de vender.
[FACT] No existen datos de mercado propios sobre CAC, conversión, LTV o disposición de pago para clínicas dentales en España.

El verdadero problema no es la falta de herramientas ni la falta de código: es el **riesgo de crear una solución para un cliente que aún no existe**, consumiendo el 100% de la capacidad operativa en activos teóricos no validados. Construir 30 componentes o 10 agentes antes del primer cliente es una trampa de sobreingeniería que ignora el cuello de botella actual: **adquisición y validación de oferta**.

[ASSUMPTION] 40 horas semanales de un solo operador son insuficientes para prospectar, vender y simultáneamente programar una plataforma de automatización completa.
[HYPOTHESIS] Las clínicas dentales privadas con tráfico o presencia local pagarán por una solución enfocada exclusivamente en captación y conversión de pacientes si se elimina la fricción técnica y de gestión.

Información crítica faltante:

* Disposición real a pagar y ticket medio aceptado por las clínicas.
* Ciclo de venta de los directores de clínica/propietarios.
* Tasa de respuesta en prospección directa (outbound).

---

## 2. Decisión Estratégica

* **Qué vender primero:** [DECISION] **"Sistema de Captación de Pacientes"** (Landing Page de alta conversión + Formulario con calificación + Integración directa a WhatsApp/Email del recepcionista).
* **A quién:** [DECISION] Clínicas dentales privadas en España que ya inviertan en visibilidad o tengan tráfico web pero cuenten con webs obsoletas o formularios lentos.
* **Con qué propuesta:** [DECISION] "Aumentamos las reservas de primeras visitas duplicando la conversión móvil de tu web actual en menos de 10 días, sin cambiar tu dominio principal."
* **Qué NO vender todavía:** [DO NOT BUILD] SEO a largo plazo, agentes de voz complejos, aplicaciones a medida, consultoría de marca o software propio.
* **Qué construir:** [DECISION] 1 plantilla base modular en código, 1 formulario con webhook a n8n, y 1 pipeline de intake en Markdown.
* **Qué NO construir:** [DO NOT BUILD] RAGs, Agency OS multi-nivel, decenas de agentes autónomos o sistemas de QA automático.

---

## 3. Plan de 30 Días

**Semana 1: Infraestructura Mínima y Oferta**

* **Objetivo:** Tener el asset de entrega listo y la lista de prospección.
* **Tareas:** Montar 1 boilerplate en Next.js/Tailwind con 5 secciones estándar. Configurar 1 webhook n8n para alertas. Redactar template de prospección. Identificar 50 clínicas candidatas.
* **Entregables:** 1 repo base funcional, 1 script de intake en Markdown, lista de 50 clínicas auditadas superficialmente.
* **Horas:** 40 h.
* **Criterio de éxito:** Boilerplate desplegado en Vercel con prueba de formulario enviando datos a n8n en <1 segundo.

**Semana 2: Outbound y Validación de Dolor**

* **Objetivo:** Generar 5 conversaciones de venta cualificadas.
* **Tareas:** Contactar a las 50 clínicas con auditorías visuales breves (vídeo de 60s o captura comentada). Iterar mensaje según aperturas y respuestas.
* **Entregables:** 50 contactos realizados, registro de objeciones y respuestas.
* **Horas:** 40 h.
* **Criterio de éxito:** Mínimo 3 reuniones comerciales agendadas.

**Semana 3: Cierre y Ejecución del Cliente 1**

* **Objetivo:** Cerrar el primer cliente de pago y comenzar producción.
* **Tareas:** Ejecutar reuniones, acordar entrega rápida (5-7 días), pasar intake manual, clonar boilerplate y personalizar copy/diseño con Cursor.
* **Entregables:** Contrato/acuerdo firmado, anticipo cobrado, repositorio del cliente creado.
* **Horas:** 40 h.
* **Criterio de éxito:** Primer pago recibido.

**Semana 4: Entrega, QA Manual y Retainer**

* **Objetivo:** Desplegar solución, medir resultados iniciales y presentar propuesta de mantenimiento.
* **Tareas:** Despliegue en subdominio/dominio del cliente, pruebas E2E manuales de formularios, conexión con su recepción, propuesta de soporte mensual.
* **Entregables:** Landing en producción, reporte de entrega, oferta de retainer enviada.
* **Horas:** 40 h.
* **Criterio de éxito:** Proyecto entregado a satisfacción y feedback documentado.

---

## 4. Producto / Oferta

* **ICP:** Clínica dental privada en España (1 a 3 sedes) con doctor propietario o gerente que dependa de citas privadas (implantes, ortodoncia, estética).
* **Problema:** Pierden pacientes que entran desde móvil porque sus formularios son largos, lentos o no derivan de inmediato a WhatsApp/teléfono.
* **Promesa:** Landing page optimizada para móvil orientada a un tratamiento estrella, integrada con alerta instantánea al equipo de recepción, entregada en 7 días hábiles.
* **Entregables:**
1. Landing page ultra-rápida (React/Tailwind en Vercel).
2. Formulario inteligente conectado a WhatsApp y Google Sheets/Email vía n8n.
3. Configuración de analítica básica (conversiones de eventos).


* **Duración:** 7 días desde recepción de intake y accesos.
* **Pricing Provisional:** [HYPOTHESIS] 950€ – 1.500€ de setup.
* *Método de validación:* Presentar 1.200€ al primer prospecto. Si hay objeción directa sobre precio, ofrecer descuento de 300€ a cambio de testimonio en vídeo y métricas abiertas.


* **Upsells:** Landing adicional para un segundo tratamiento específico (500€/ud).
* **Retainer Potencial:** Mantenimiento técnico, hosting, tests A/B mensuales y reporte de leads por 150€ – 250€/mes.

---

## 5. Digital Factory MVP

| Elemento | Estado | Justificación |
| --- | --- | --- |
| **SiteSpec (Markdown)** | `BUILD NOW` | Define alcance y evita scope creep sin coste de desarrollo. |
| **1 Boilerplate base (5 secciones)** | `BUILD NOW` | Reduce el tiempo de entrega de días a horas. |
| **1 Workflow n8n (Forms $\rightarrow$ Email/WA)** | `BUILD NOW` | Entrega el valor central del producto inmediatamente. |
| **Intake simplificado (Markdown/Form)** | `BUILD NOW` | Obligatorio para arrancar producción sin reuniones infinitas. |
| **Componentes adicionales (>5)** | `BUILD AFTER CLIENT 1` | Solo crear componentes que un cliente real haya exigido y pagado. |
| **Design System completo** | `BUILD AFTER CLIENT 3` | Inútil antes de estandarizar qué estilos y patrones convierten mejor. |
| **CRM interno complejo** | `BUILD AFTER CLIENT 3` | Inicialmente basta una tabla sencilla o Kanban para 1-3 clientes. |
| **QA automatizado** | `BUILD MUCH LATER` | Con 1-2 entregas al mes, el QA manual toma 20 minutos. |
| **Base de conocimiento / Obsidian** | `BUILD NOW` | Registro en local de prompts, bugs y aprendizajes sin coste. |
| **Agentes autónomos y RAG** | `DO NOT BUILD` | Alto coste de mantenimiento, fragilidad y cero impacto en la venta inicial. |
| **Agency OS en Notion** | `DO NOT BUILD` | Procrastinación productiva; consume tiempo sin generar caja. |

---

## 6. Arquitectura Técnica Mínima

```
[Visitante Móvil] 
       │
       ▼
[Frontend: Next.js + Tailwind (Vercel)] ── Analytics (Plausible / GA4)
       │ (Submit Formulario)
       ▼
[Backend: Webhook API Route]
       │
       ▼
[Automatización: n8n (Cloud o Docker básico)]
       ├── Alerta Inmediata ──► [WhatsApp / Email Recepción Clínica]
       └── Registro Lead    ──► [Google Sheets / Supabase]

```

* **Frontend:** Next.js (App Router) + Tailwind CSS desplegado en **Vercel** (Cero gestión de servidores, CDN global).
* **CMS:** Ninguno inicialmente. Textos y assets configurados vía archivo de constantes TypeScript (`content.config.ts`) para máxima velocidad.
* **Base de Datos / Backend:** n8n capturando el webhook del formulario y guardando en **Supabase** (o Google Sheets en cliente 1).
* **Forms & Leads:** Endpoint directo a n8n para derivar al instante el lead al WhatsApp/correo de la clínica.
* **Analytics:** Plausible Analytics o Google Tag Manager / GA4 configurado únicamente para registrar clics en llamada y envíos de formulario.
* **Control de versiones:** GitHub. Cada cliente es un branch o un repo clonado del template base.
* **Testing:** Checklist manual de 12 puntos antes de apuntar DNS.

---

## 7. IA Multimodelo

```
[Gemini 3.7 Flash]  ──► Auditorías de contexto amplio / Extracción de intake
         │
         ▼
[ChatGPT Go / Grok] ──► Generación de copy persuasivo y revisión de tono
         │
         ▼
[Composer 2.5]      ──► Montaje del código sobre el Boilerplate
         │
         ▼
[Humano]            ──► QA final, llamada de venta y cierre

```

* **Gemini 3.7 Flash (Ingeniero de Contexto y Análisis):**
* *Rol:* Procesar la web existente del cliente, transcribir material crudo y estructurar el `SiteSpec.md`.
* *Revisión:* Su salida es revisada por el humano antes de pasar al código.


* **ChatGPT Go / Grok 4.6 (Redacción de Copy y Mensajería):**
* *Rol:* Crear variaciones de llamadas a la acción, textos de anuncios y correos de prospección.
* *Revisión:* Grok valida tono directo; ChatGPT estructura propuestas.


* **Composer 2.5 / Cursor (Implementación de Código):**
* *Rol:* Aplicar el `SiteSpec.md` sobre el boilerplate de Next.js, modificar componentes y corregir estilos.


* **Cuándo NO usar IA:** [DECISION] En la llamada de ventas, la negociación de precios, la revisión final de DNS y las pruebas manuales de envío de formulario.
* **Tareas 100% humanas:** Validación de la propuesta económica, relación con el cliente y control de calidad final.

---

## 8. Orquestación

[DECISION] **Opción D: Pipeline por fases con transferencia mediante artefactos.**

No se emplean agentes permanentes ni bucles autónomos de toma de decisión. El sistema opera mediante documentos estáticos estructurados que pasan de un modelo a otro bajo supervisión del fundador:

```
[Web Actual + Material] 
       │  (Gemini 3.7 Flash)
       ▼
[Artefacto 1: Intake_Raw.md]
       │  (Gemini + Humano)
       ▼
[Artefacto 2: ProjectSpec.md + Copy]
       │  (Composer 2.5)
       ▼
[Artefacto 3: Repositorio en GitHub / Preview Vercel]
       │  (Humano)
       ▼
[Deploy Producción]

```

* **Quién decide:** El fundador humano.
* **Quién investiga:** Gemini (análisis de assets y webs competidoras).
* **Quién critica:** ChatGPT/Grok (auditoría de claridad del copy y objeciones comerciales).
* **Quién construye:** Composer 2.5 (código sobre el template).
* **Quién valida:** El fundador humano mediante checklist de despliegue.
* **Autoridad final:** Exclusivamente el fundador.
* **Resolución de contradicciones:** Si hay conflicto técnico o de diseño entre sugerencias de IA, prevalece la regla de **menor complejidad y menor tiempo de renderizado**.

---

## 9. Source of Truth

```
[SOURCE OF TRUTH]        Git Repo (GitHub) 
                         └─ /specs/project-spec.md + Código + Variables de entorno

[KNOWLEDGE BASE]         Obsidian Vault (Local / Sincronizado)
                         └─ Snippets, prompts validados, objeciones de clientes

[PROJECT STATE]          Linear / Trello mínimo (o simple TODO.md en repo)
                         └─ Estados: Intake -> Dev -> QA -> Deploy -> Live

[EXECUTION ENVIRONMENT]  Cursor / Composer 2.5 + Localhost + Vercel Preview

```

* **Source of Truth:** Repositorio Git. El archivo `project-spec.md` dentro de la raíz del proyecto define textos, colores, tracking IDs y webhooks. No hay dispersión en Notion.
* **Knowledge Base:** Obsidian en local. Almacena las plantillas de prompts de Composer, checklists de QA y notas de objeciones de ventas.
* **Project State:** Un archivo `STATUS.md` en el repositorio o un tablero Kanban básico de 4 columnas.
* **Execution Environment:** Composer en entorno local con previsualizaciones directas en Vercel.

---

## 10. Riesgos

| # | Riesgo | Categoría | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- | --- | --- |
| 1 | **Falta de tracción en outbound** (clínicas no responden) | Comercial | Alta | Alto | Pivotar mensaje o canal (teléfono/visita) al día 10. |
| 2 | **Procrastinación por sobreingeniería** | Operativo | Alta | Alto | Bloquear desarrollo de herramientas internas hasta cobrar al Cliente 1. |
| 3 | **Fricción en la captura de assets del cliente** | Operativo | Alta | Medio | No pedir material complejo; usar fotos actuales y redactar el copy internamente. |
| 4 | **Scope Creep** (el cliente pide cambios infinitos) | Operativo | Media | Alto | Limitar contrato a 1 landing y 1 ronda de revisiones en 5 días. |
| 5 | **Dependencia de credenciales/DNS del cliente** | Técnico | Alta | Medio | Montar en subdominio propio temporal o solicitar acceso delegado directo. |
| 6 | **Alucinaciones de código en Composer** | IA | Media | Medio | Limitar el contexto a un boilerplate limpio y tipado estricto. |
| 7 | **Fallo silencioso en entrega de leads (n8n/Webhook)** | Técnico | Baja | Crítico | Configurar doble notificación (email de respaldo + log en base de datos). |
| 8 | **Incompatibilidad con RGPD en captación de datos** | Seguridad | Media | Alto | Incluir cláusulas estándar de protección de datos y checkbox explícito. |
| 9 | **Dispersión en múltiples ofertas** | Estratégico | Media | Alto | Prohibir ofrecer SEO o software a medida hasta tener 3 clientes de landing. |
| 10 | **Agotamiento del operador único (burnout)** | Operativo | Media | Medio | Ceñirse al límite de 40 horas semanales eliminando tareas de bajo valor. |

---

## 11. Qué NO Harías

1. [DO NOT BUILD] Configurar un sistema RAG antes de tener documentos y clientes reales.
2. [DO NOT BUILD] Diseñar un sistema de diseño complejo con más de 10 variables de diseño.
3. [DO NOT BUILD] Crear 10 agentes autónomos que se comuniquen entre sí.
4. [DO NOT BUILD] Pasar más de 1 día armando plantillas de Notion o "Agency OS".
5. [DO NOT BUILD] Diseñar y programar una web corporativa propia de 6 páginas.
6. [DO NOT BUILD] Ofrecer servicios de posicionamiento SEO mensual o desarrollo de software a medida.
7. [DO NOT BUILD] Escribir tests automatizados end-to-end con Playwright/Cypress para el primer proyecto.
8. [DO NOT BUILD] Intentar automatizar al 100% el onboarding del cliente en la primera venta.
9. [DO NOT BUILD] Invertir presupuesto en publicidad de pago antes de validar el copy orgánicamente.
10. [DO NOT BUILD] Comprar licencias de múltiples herramientas SaaS sin facturación que las justifique.

---

## 12. Decisión Final

**DECISIÓN:**
Pausar de inmediato toda construcción de infraestructura teórica (RAG, agentes, Agency OS, 30 componentes). Adoptar una arquitectura mínima de 1 boilerplate en Next.js/Tailwind y salir al mercado en la Semana 2 con una oferta cerrada de "Landing de alta conversión para captación de pacientes en 7 días" a un precio inicial de 1.200€.

**PRÓXIMO PASO:**
Mañana por la mañana: Montar el repositorio base con 5 secciones estándar (Hero, Problema/Solución, Prueba Social, Oferta, Formulario) y preparar el listado de las primeras 20 clínicas dentales a auditar.

**MAYOR RIESGO:**
Quedarse sin tiempo de prospección comercial por seguir perfeccionando el código del boilerplate.

**MAYOR HIPÓTESIS:**
Los directores de clínicas dentales privadas aceptarán una propuesta de reemplazo de landing page si se les demuestra visualmente que su formulario móvil actual está perdiendo pacientes.

**[DO NOT BUILD]:**
El Agency OS en Notion, el sistema RAG y los 10 agentes de IA.
