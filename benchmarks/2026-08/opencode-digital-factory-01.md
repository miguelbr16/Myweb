# MULTIMODEL BENCHMARK — RESPUESTA

---

## 1. DIAGNÓSTICO

**El verdadero problema no es técnico ni comercial: es de secuencia.** Tenéis capacidad de entrega asumida y tres precios de referencia del mercado observados. Lo que no tenéis es **una sola conversación de venta real**. El debate "fábrica primero vs. vender primero" está mal planteado: la fábrica correcta no puede diseñarse hoy porque nadie sabe todavía qué partes de una web de clínica se repiten, cuántas horas cuesta cada fase y qué fricción genera el cliente. Esa información solo existe después de entregar 3–5 proyectos. Construir la fábrica ahora no es acelerar el futuro: es apostar el trimestre a una arquitectura sin datos.

**Información que falta** (y no puedo inventar):
- Disposición real a pagar y elasticidad de precio en el nicho. Los competidores (4.900€ web premium; 299€/mes web+SEO; 1.200€/mes landing+campañas) son **[FACT]** como datos proporcionados, pero no sabemos sus márgenes, volumen, churn ni si capturan demanda o la educan.
- Qué canal de adquisición funciona *para vosotros*.
- Tiempo real de entrega por fase (base de cualquier productización).
- Grado de repetibilidad estructural entre clínicas (% de componentes compartidos).

**Hipótesis principales:**
1. **[HYPOTHESIS]** Una clínica compra "captación medible" mejor que "web bonita", y eso permite posicionar por valor y no por hora.
2. **[HYPOTHESIS]** Un patrón único de web de clínica cubre ≥60% de cada proyecto futuro.
3. **[HYPOTHESIS]** Outbound personalizado (auditoría en vídeo) genera conversaciones en <30 días sin paid ads.
4. **[HYPOTHESIS]** El precio óptimo está entre el competidor low-cost y el premium.

**Supuestos que hago:** **[ASSUMPTION]** las 40h/semana son realmente disponibles y no compatibles con otro empleo a tiempo completo; **[ASSUMPTION]** el nivel técnico declarado permite entregar una landing de calidad en ~15–20h; **[ASSUMPTION]** el fundador puede hacer ventas (llamar, hablar, cerrar). Si alguno falla, el plan cambia.

**[RISK]** Diagnóstico central: el mayor enemigo no es la competencia, es el **meta-trabajo** — la sensación productiva de construir infraestructura mientras no ocurre ninguna venta.

*(~330 palabras)*

---

## 2. DECISIÓN ESTRATÉGICA

| Pregunta | **DECISION** |
|---|---|
| ¿Qué vender primero? | **Una sola cosa**: "Sistema de Captación de Pacientes" = landing de tratamiento estrella + respuesta automática <1 min (WhatsApp/email) + aviso al centro + panel simple. Outcome, no "web". |
| ¿A quién? | Clínicas dentales privadas en España, 1–3 sedes, dueño/a como decisor, con tráfico o gasto en ads existente. |
| ¿Con qué propuesta? | *"Cada paciente atendido en menos de 1 minuto. Landing lista en 14 días. Precio cerrado."* |
| ¿Qué NO vender todavía? | SEO mensual, CRO formal, agentes IA como producto, CRM como servicio, branding, mantenimiento genérico, software propio, templates a terceros. Cada uno añade superficie de venta sin evidencia de demanda. **[DO NOT BUILD]** como oferta. |
| ¿Qué construir? | Máximo 5 días de build en todo el mes: landing propia v0, **un** template base de clínica, intake form, checklist QA, plantilla de propuesta, registro de horas. Nada más. |
| ¿Qué NO construir? | Ver sección 5 y 11. Resumen: toda la lista de los 10 ítems del fundador queda aplazada o cancelada. |

**Trade-off clave:** la persona técnica tiene razón en que cada proyecto manual genera cierta deuda — pero esa deuda se controla con disciplina barata (un repo template, estructura fija, checklist), no con plataforma. La deuda real hoy es **cero clientes**, y esa no se paga con código.

---

## 3. PLAN DE 30 DÍAS

**Regla operativa: 40% venta, 40% entrega, 20% activos. Prohibido superar 5 días totales de construcción.**

### Semana 1 — Estar vendiendo al día 5
- **Objetivo:** oferta definida, presencia mínima, primeros contactos.
- **Tareas:** oferta+pricing escritos (0,5d) · landing propia v0 sobre template existente (1,5d) · lista de 100 clínicas desde Google Maps, manual (0,5d) · pitch, propuesta tipo, formulario Tally, checklist QA (1d) · mapear 30 contactos personales y pedir intros específicas (0,5d) · primeras 10 auditorías vídeo de 3 min (1d).
- **Horas:** ~38h · **Entregables:** landing live, lista ICP, 40 contactos tocados.
- **Éxito:** ≥3 llamadas agendadas y ≥1 intro caliente.

### Semana 2 — Primer cliente firmado
- **Objetivo:** contrato nº1 con anticipo cobrado.
- **Tareas:** 40 auditorías más · llamadas · propuestas · cierre con precio fundador · kickoff cliente 1.
- **Horas:** ~36h · **Éxito:** 1 firma + anticipo. Si a día 14 hay 0 llamadas: cambiar mensaje (no el nicho) y doblar volumen.

### Semana 3 — Entrega #1 + venta sostenida
- **Objetivo:** lanzar proyecto 1 en ≤14 días desde kickoff; mantener pipeline.
- **Tareas:** build cliente 1 (15–20h) registrando horas por fase · QA con checklist · handoff en Loom · 20 auditorías nuevas · 2 alianzas contactadas (gestorías, agencias de ads locales).
- **Horas:** ~38h · **Éxito:** sitio live + horas registradas + pipeline ≥3 conversaciones.

### Semana 4 — Entrega #2 + decisión GO/NO-GO
- **Objetivo:** segundo cliente en producción; informe de aprendizaje.
- **Tareas:** build cliente 2 · consolidar métricas de funnel y horas · documento GO/NO-GO contra gates explícitos (≥3 cierres, margen ≥50%, horas decrecientes, % reutilización ≥60%).
- **Horas:** ~34h · **Éxito:** decisión documentada, no sentida.

**Total ≈ 126h de 160 disponibles** — el buffer es deliberado: la semana 3–4 siempre colisiona.

---

## 4. PRODUCTO / OFERTA

| Campo | Definición |
|---|---|
| **ICP** | Clínica dental privada, España, 1–3 sedes, 2–20 empleados, dueño-decisor, ya invierte (o intentó invertir) en captación |
| **Problema** | Observado, no generalizado: tráfico mal explotado, formularios con fricción, CTAs débiles, seguimiento lento → fugas silenciosas |
| **Promesa** | Respuesta a cada solicitud en <1 minuto. Landing en 14 días. Precio cerrado. |
| **Entregables** | Landing 1 página (tratamiento estrella) · formulario corto · autorespuesta WhatsApp/email · aviso al centro · panel de leads · Loom de handoff |
| **Duración** | 14 días naturales desde kickoff con materiales completos |
| **Pricing** | **[HYPOTHESIS]**: core **1.500€** (precio lista) / **750€ fundador** (primeros 5, a cambio de testimonial + caso de estudio). Retainer posterior 200–400€/mes |
| **Upsells** | Gestión de campaña inicial · conexión de reserva online · web multipágina completa tras la landing |

**Sobre el precio — cómo lo validaría, no cómo lo invento:** los tres precios de competidores son anclas externas, no pruebas de viabilidad. Validación: (1) presentar 1.500€ sin descuento a los primeros 5 prospectos y registrar objeciones literales; (2) alternar anclas 1.500€/2.400€ en propuestas durante 2 semanas; (3) no fijar precio definitivo hasta 3 cierres. **[FACT]** No existe información suficiente hoy para afirmar un precio de mercado correcto.

**Retainer potencial:** solo prometer optimización mensual cuando existan datos propios de conversión del cliente 1. **[HYPOTHESIS]** el attach rate alcanzable es ≥40%.

---

## 5. DIGITAL FACTORY MVP

| Elemento | Decisión | Justificación |
|---|---|---|
| Landing propia | **BUILD NOW** | Vendedor 24/7 + primer dogfood |
| 1 template base de clínica (mínimo) | **BUILD NOW** | Evita improvisar total sin crear plataforma (1,5 días máximo) |
| Intake form (Tally) | **BUILD NOW** | Define gratis los campos de la futura SiteSpec |
| Checklist QA + plantilla propuesta | **BUILD NOW** | Calidad sin software |
| Registro horas/fricciones (board simple) | **BUILD NOW** | Es literalmente la especificación de la fábrica futura |
| Git/GitHub/Vercel/n8n básicos | **BUILD NOW** | Ya existen, coste ~0 |
| Vault Obsidian (notas + decision log) | **BUILD NOW** | Coste cero, memoria del negocio |
| SiteSpec completo | **BUILD AFTER CLIENT 3** | Con <3 proyectos no sabes qué campos importan; diseñarlos hoy es adivinar |
| Biblioteca formal de componentes | **BUILD AFTER CLIENT 3** | Antes: copiar-pegar entre repos. Formalizar cuando el patrón sea visible |
| Design system | **BUILD AFTER CLIENT 3** | Tokens básicos dentro del template sí; sistema no |
| QA automático (script Lighthouse) | **BUILD AFTER CLIENT 1** | Solo si la checklist manual consumió >2h/proyecto |
| CRM dedicado | **BUILD AFTER CLIENT 3** | Board simple basta hasta 10 oportunidades |
| Agency OS en Notion (relacional) | **DO NOT BUILD** | Es burocracia disfrazada de sistema |
| 15 automatizaciones n8n | **DO NOT BUILD** | Las 2 necesarias (lead→aviso→autorespuesta) se copian por cliente en <1h |
| 10 agentes especializados | **DO NOT BUILD** | Agentes permanentes para tareas no validadas = coste sin retorno |
| RAG / base vectorial | **DO NOT BUILD** | Con <100 documentos, búsqueda nativa supera a un RAG |
| Deployment totalmente automatizado | **BUILD MUCH LATER** | Vercel ya automatiza lo necesario |
| Software propio / templates para vender | **DO NOT BUILD** | Nadie compra templates de alguien sin marca distribuida |

---

## 6. ARQUITECTURA (mínima, una sola pila)

- **Frontend:** Astro + Tailwind. **[DECISION]** Sitios de contenido, casi estáticos: menos JS, builds rápidos, fácil de clonar por cliente. Se congela la pila 90 días. *(Next.js solo si algún proyecto exige app-like.)*
- **CMS:** ninguno. Contenido en el repo. **[HYPOTHESIS]** Los clientes del ICP no van a autogestionar contenido el primer año. Reevaluar tras cliente 3.
- **Forms:** Tally → webhook → n8n.
- **Base de datos:** Supabase, una tabla `leads`. Sin auth, sin relaciones. *(Alternativa aún más rápida: Google Sheet vía n8n; Supabase evita migración posterior.)*
- **Automatización:** n8n con 1 flujo: lead → aviso Telegram/WhatsApp al centro + email autorespuesta + fila en BD.
- **Analytics:** GA4 + Search Console (coste 0) + Looker Studio para el reporte al cliente. Privacy-first analytics como diferenciador de pago más adelante.
- **CRM:** board en Notion/Airtable. HubSpot free cuando haya >10 oportunidades vivas.
- **Git:** 1 repo template + 1 fork por cliente. Historial limpio por proyecto.
- **Deploy:** Vercel hobby, preview por branch, dominio del cliente apuntando.
- **Testing:** checklist manual + Lighthouse documentado + axe manual. Sin suites.
- **IA:** suscripciones existentes para copy/revisión. Ninguna API de IA dentro del producto hasta venderla explícitamente como servicio.

**Coste operativo estimado: 0–30€/mes** (tiers gratuitos + dominio + email). **Trade-off asumido:** renuncias a multi-tenant, autoservicio del cliente y tests automatizados — todo ello irrelevante hasta tener ingresos.

---

## 7. IA MULTIMODELO

**[ASSUMPTION]** Asigno roles provisionales por razonamiento funcional; no he verificado benchmarks comparativos actuales de estos modelos, así que estos papeles se revisan a las 2 semanas con experiencia propia.

| Modelo | Papel | Por qué ahí |
|---|---|---|
| **Composer 2.5 (Cursor)** | Construcción | Único con contexto del repo; el código pasa por él o no existe |
| **ChatGPT Go** | Redacción comercial + editor | Propuestas, emails outbound, copy de landings, claridad |
| **Gemini Flash** | Investigación + volumen | Resumir auditorías de webs, variantes de copy, análisis largo rápido |
| **Grok** | Crítico adversario, puntual | Atacar propuestas y ángulos antes de enviarlos. Uso episódico, no diario |

**Reglas de revisión:** Grok critica a ChatGPT (mensajes); el fundador critica todo lo demás. Nada sale sin gate humano.

**Cuándo NO usar un modelo:** decisiones de precio/posicionamiento (juicio humano sobre datos propios); comunicación directa con clientes sin revisión; cualquier dato de pacientes (categoría especial RGPD — **[FACT]** el art. 9 RGPD protege datos de salud; no deben tocar prompts de terceros).

**Siempre humanos:** llamadas, negociación, cierre, QA final, relación con el cliente, decisiones de dinero.

---

## 8. ORQUESTACIÓN

**DECISION: Opción D — pipeline por fases con transferencia mediante artefactos, con el fundador como autoridad final.**

Descarto A y C (sin árbitro humano, sesgo sin crítica), descarto B (dos "direcciones" artificiales para una empresa de una persona es sobrecarga, no estructura). D gana porque: produce artefactos verificables (brief, spec, copy, código, checklist), cada gate es aprobable por un humano en segundos, no requiere agentes permanentes, y escala después si hiciera falta.

| Rol | Quién |
|---|---|
| **Decide / autoridad final** | El fundador, siempre |
| **Investiga** | Gemini Flash + búsqueda web → entrega *brief de investigación* |
| **Critica** | Grok ataca propuestas; checklist + Lighthouse atacan el producto |
| **Construye** | Composer (código), ChatGPT (texto) → entregan artefactos, no opiniones |
| **Valida** | Checklist manual + el fundador en cada gate |

**Contradicciones:** no se debaten entre modelos. Dos modelos discrepando en algo material = señal de incertidumbre → se escala al fundador, que decide y registra el criterio en Obsidian (decision log). Una línea, cero reuniones.

---

## 9. SOURCE OF TRUTH

| Capa | Herramienta | Contenido | Por qué |
|---|---|---|---|
| **SOURCE OF TRUTH** | Git/GitHub | Código, template, propuestas tipo, checklist — todo texto plano versionado | Portable, auditable, coste 0, imposible que diverja silenciosamente |
| **KNOWLEDGE BASE** | Obsidian (vault en git) | Playbooks, decision log, aprendizajes, objection handling | Búsqueda nativa basta con <100 notas; RAG sería sobreingeniería |
| **PROJECT STATE** | Notion/Airtable (1 board) | Pipeline comercial, estado de entregas, horas por fase | Cambia a diario; no necesita historial estricto |
| **EXECUTION ENVIRONMENT** | Local + Cursor + Vercel previews | Nada productivo fuera de Git | Reproducibilidad |

**Regla dura:** **ningún conocimiento valioso vive solo dentro de un chat de IA.** Si merece la pena, ese mismo día va a Obsidian. Los chats son caché, no memoria.

---

## 10. RIESGOS (ordenados por prioridad = P×I)

| # | Riesgo | Tipo | Prob. | Impacto | Mitigación |
|---|---|---|---|---|---|
| 1 | Meta-trabajo: mes consumido en fábrica | Sobreingeniería | Alta | Alto | Tope duro de 5 días de build; lista DO NOT BUILD visible |
| 2 | 0 cierres en 30 días (propuesta/precio descalibrados) | Comercial | Media-alta | Alto | Red caliente primero; alternar anclas de precio; pivotar mensaje al día 14 si 0 llamadas |
| 3 | Publicidad sanitaria: claims no conformes | Legal | Media | Alto | **[FACT]** La publicidad de servicios sanitarios está regulada en España con particularidades autonómicas — copy neutro, sin promesas de resultado clínico, verificación con profesional antes de escalar |
| 4 | RGPD: formularios de clínicas tratan datos de salud (art. 9) + outbound | Seguridad/Legal | Media | Alto | Minimización, consentimiento claro, bases legales correctas, asesoría puntual |
| 5 | Fundador saturado (venta+entrega colisionan) | Operativo | Alta | Medio | Máx. 2 clientes simultáneos; buffer de ~34h/mes ya previsto |
| 6 | Sobreingeniería encubierta ("SiteSpec solo un poco") | Técnico | Alta | Medio | Gates: nada de plataforma antes de cliente 3 |
| 7 | Template percibido como genérico → objeción de diferenciación | Comercial | Media | Medio | Personalización fuerte solo en hero, oferta y fotos (donde se percibe) |
| 8 | Copy IA inconsistente en ámbito clínico | IA | Media | Medio | Gate humano obligatorio, tono definido, ejemplos propios |
| 9 | Stack elegido equivocado y frena después | Técnico | Baja-media | Medio | Pila única congelada 90 días; migrar es barato con sitios pequeños |
| 10 | Webhooks/spam/credenciales n8n expuestas | Seguridad | Media | Bajo-medio | Secretos en variables, honeypot + rate limit en forms |

---

## 11. QUÉ NO HARÍAS (top 10 pérdidas de tiempo/dinero)

1. **[DO NOT BUILD]** SiteSpec completo antes de 3 clientes.
2. **[DO NOT BUILD]** Design system y biblioteca de 30 componentes.
3. **[DO NOT BUILD]** Agency OS relacional en Notion (dashboards, bases enlazadas).
4. **[DO NOT BUILD]** 15 automatizaciones n8n pre-construidas.
5. **[DO NOT BUILD]** 10 agentes especializados u orquestador multi-agente.
6. **[DO NOT BUILD]** RAG / base vectorial / "memoria corporativa".
7. **[DO NOT BUILD]** QA automático y deployment custom.
8. **[DO NOT SELL]** SEO mensual, CRO formal, branding, agentes-como-producto: catálogo inflado mata el foco de venta.
9. Paid ads propios antes de validar mensaje orgánico con ≥100 contactos.
10. Contratar, comprar tools de pago, cambiar de nicho a mitad de mes, o rediseñar la landing propia más de una vez.

---

## 12. DECISIÓN FINAL

**DECISIÓN:**
Vender **una** oferta — "Sistema de Captación de Pacientes" (landing + respuesta <1 min + aviso + panel) — a clínicas dentales privadas españolas, entregada manualmente sobre **un** template mínimo. Precio lista 1.500€, fundador 750€ (validando ambos anclas). Máximo 5 días de construcción en el mes. Todo lo demás de la lista del fundador: aplazado hasta cliente 3 o cancelado.

**PRÓXIMO PASO:**
Hoy mismo: abrir Google Maps, listar 25 clínicas de tu ciudad, grabar 10 auditorías-vídeo de 3 minutos y enviarlas antes del mediodía de mañana. La landing propia va esta semana; el outbound empieza **antes** de que esté perfecta.

**MAYOR RIESGO:**
Que el mes se consuma construyendo infraestructura (meta-trabajo) en lugar de acumular conversaciones de venta. Es el riesgo #1 y es interno, no competitivo.

**MAYOR HIPÓTESIS:**
Que una clínica dental privada española paga 750–1.500€ por un sistema de captación entregado en 14 días por un proveedor sin reputación previa. Si esto falla, nada de la fábrica importa.

**[DO NOT BUILD]:**
SiteSpec completo · design system · biblioteca de componentes formal · Agency OS · agentes permanentes · RAG · QA automático · deployment custom · software propio · catálogo multiservicio.

**Si yo fuera responsable del resultado económico, mañana por la mañana:** abro Google Maps, hago la lista, grabo y envío 10 vídeos de auditoría personalizados antes de comer, y por la tarde llamo a mis 5 contactos más cercanos a dueños de clínicas para pedir intros. Ni una línea de código, ni un componente, ni un agente hasta tener la primera conversación agendada. El ingreso no nace de la fábrica; la fábrica nace del ingreso.
