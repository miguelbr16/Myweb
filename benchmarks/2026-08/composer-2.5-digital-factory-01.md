# MULTIMODEL BENCHMARK — DIGITAL FACTORY 01

---

## 1. DIAGNÓSTICO

**[FACT]** Sois 1 fundador, 40 h/semana, presupuesto limitado, sin clientes ni histórico, con capacidad real de entregar webs de calidad.

**[FACT]** El conflicto real no es “vender vs construir”. Es **construir lo que acelera venta y entrega** vs **construir la fábrica completa sin demanda validada**.

**[DECISION]** El verdadero problema es **ausencia de oferta productizada + pipeline comercial**, no ausencia de SiteSpec, RAG ni 10 agentes. La deuda técnica existe, pero la deuda existencial es **cero ingresos y cero aprendizaje de mercado**.

**[FACT]** La oportunidad dental es una **observación cualitativa**, no un mercado validado. Competidores existen entre 299 €/mes y 4.900 € proyecto; eso solo indica **rango de precios posibles**, no CAC, LTV ni disposición a pagar de vuestro ICP concreto.

**[HYPOTHESIS]** Clínicas dentales privadas en España con tráfico pero mala conversión existen en número suficiente para sostener una agencia de 1 persona en Etapa 1.

**[HYPOTHESIS]** Podéis diferenciaros sin competir en “web premium 4.900 €” ni en “299 €/mes commodity SEO”.

**[ASSUMPTION]** El fundador puede dedicar ~50 % del tiempo a ventas/outbound y ~50 % a producción los primeros 30 días.

**Información crítica que falta:**
- Disposición a pagar de 5–10 clínicas contactadas (no estimaciones de mercado).
- Tiempo real de entrega con factory MVP mínima.
- Si el decisor es el dentista, el gestor o ambos.
- Qué CRM/analytics usan hoy las clínicas objetivo.

**[EXPERIMENT]** 15 conversaciones + 3 propuestas enviadas en 30 días > cualquier análisis de mercado inventado.

*(~320 palabras)*

---

## 2. DECISIÓN ESTRATÉGICA

| Dimensión | **[DECISION]** |
|-----------|----------------|
| **Qué vender primero** | Landing + web de conversión para clínicas dentales privadas (1 servicio, 1 vertical). |
| **A quién** | Clínicas privadas 1–3 centros, España, con web existente mediocre en conversión (no clínicas sin web, no cadenas grandes). |
| **Propuesta** | “Más citas desde vuestra web en 14 días — sin depender solo de ads.” |
| **Qué NO vender todavía** | Agentes IA, RAG, Agency OS, automatizaciones complejas, SEO mensual retainer, campañas Meta, software propio, multi-vertical. |
| **Qué construir** | 1 template dental, 8–10 componentes, SiteSpec v0.1 mínimo, 1 landing propia, intake checklist, deploy Vercel, 2 Skills Cursor (QA + onboarding). |
| **Qué NO construir** | RAG, 10 agentes, 15 n8n, 30 componentes, Agency OS Notion elaborado, QA automático completo, design system formal. |

**[DECISION]** Posición explícita: **vender en paralelo a construir un MVP de fábrica de 20 %**, no esperar 3 meses ni improvisar cada proyecto desde cero.

**Trade-off aceptado:** El primer cliente puede costar más horas de las idealmente productizadas. El aprendizaje de entrega + precio vale más que la perfección arquitectónica.

---

## 3. PLAN DE 30 DÍAS

### Semana 1 — Oferta + activos mínimos (40 h)

| | |
|--|--|
| **Objetivo** | Tener oferta vendible y landing propia live. |
| **Tareas** | Definir ICP + oferta (4 h). Landing propia en template base (12 h). Lista 50 clínicas objetivo + criterios (4 h). 10 contactos outbound (8 h). SiteSpec v0.1 esquema en YAML (4 h). 8 componentes core (8 h). |
| **Entregables** | Landing agencia live, 1-pager oferta PDF/Notion, lista 50 clínicas, repo starter con 8 componentes. |
| **Éxito** | Landing publicada + ≥10 contactos enviados. |

### Semana 2 — Validación comercial + demo (40 h)

| | |
|--|--|
| **Objetivo** | Conversaciones reales + demo creíble. |
| **Tareas** | 20 contactos más (10 h). 5–8 conversaciones (5 h). Demo clínica ficticia (template dental) (15 h). Ajustar oferta según objeciones (3 h). Skill QA landing en Cursor (4 h). CI build + deploy auto (3 h). |
| **Entregables** | Demo clínica (URL preview), script venta, ≥5 conversaciones realizadas. |
| **Éxito** | ≥3 conversaciones cualificadas + ≥1 propuesta enviada. |

### Semana 3 — Cierre o iteración (40 h)

| | |
|--|--|
| **Objetivo** | Primer cliente firmado o señal fuerte de compra. |
| **Tareas** | Seguimiento pipeline (8 h). 15 contactos nuevos (8 h). Propuestas personalizadas (6 h). Si hay cliente: intake + SiteSpec cliente (8 h). Si no: ajustar ICP/precio/mensaje (10 h). Intake checklist documentado (4 h). |
| **Entregables** | ≥2 propuestas enviadas total acumulado, contrato template, intake checklist. |
| **Éxito** | Cliente firmado **o** 2 propuestas activas con fecha de decisión. |

### Semana 4 — Entrega o doble down ventas (40 h)

| | |
|--|--|
| **Objetivo** | Entregar primer proyecto **o** cerrar tras iteración comercial. |
| **Tareas** | **Si hay cliente:** build desde template (20 h), QA manual + Skill (4 h), deploy (2 h), analytics básico (2 h), handoff (2 h), ventas light (10 h). **Si no hay cliente:** duplicar outbound, bajar fricción oferta, considerar pricing test (30 h ventas, 10 h producto). |
| **Entregables** | Proyecto entregado **o** retrospectiva comercial + decisión pivot/persevere. |
| **Éxito** | 1 cliente pagando **o** evidencia clara de por qué no compran (precio/oferta/ICP). |

**[DECISION]** Máximo 12 h/semana en infraestructura; mínimo 18 h/semana en ventas hasta primer cliente.

---

## 4. PRODUCTO / OFERTA

### Primera oferta productizada

| Campo | Contenido |
|-------|-----------|
| **ICP** | Clínica dental privada, 1–3 centros, España, web existente, inversión previa en marketing, conversión pobre. |
| **Problema** | **[FACT]** Webs aceptables visualmente pero con oferta confusa, CTAs débiles, fricción móvil, seguimiento de leads deficiente (observado, no cuantificado en mercado). |
| **Promesa** | Web/landing orientada a citas, publicada en 14 días, con formulario optimizado y analytics de conversión. |
| **Entregables** | Hasta 5 páginas (Inicio, Tratamientos, Equipo, Contacto, Legal). Formulario → email/CRM cliente. GA4 o Plausible. Checklist SEO on-page básico. 1 ronda de revisiones. Handoff doc. |
| **Duración** | 14 días desde intake completo. |
| **Pricing provisional** | **[HYPOTHESIS]** Setup **1.800–2.800 €** proyecto (no invento “precio de mercado óptimo”). Anclado por debajo de 4.900 € premium, por encima de commodity 299 €/mes en percepción de valor one-shot. |
| **Validación precio** | **[EXPERIMENT]** En cada conversación: presentar 2.400 €; si 0/5 aceptan, probar 1.800 €; si 3/5 dicen “barato”, probar 2.800 €. |
| **Upsells (post-entrega)** | CRO mensual, SEO local, automatización recordatorios leads, landing campañas. |
| **Retainer potencial** | **[HYPOTHESIS]** 250–450 €/mes mantenimiento + optimización conversión (validar tras cliente 1). |

**[DO NOT BUILD]** Paquete “IA + agentes + workflows” como oferta inicial.

---

## 5. DIGITAL FACTORY MVP

| Elemento | Veredicto | Justificación |
|----------|-----------|---------------|
| **SiteSpec v0.1** | **BUILD NOW** | Separa config/content sin over-engineer; base del loop factory. |
| **8–10 componentes** | **BUILD NOW** | Suficiente para clínica; no 30. |
| **Design system formal** | **BUILD AFTER CLIENT 1** | Tokens sí ahora; Figma system no. |
| **Intake checklist** | **BUILD NOW** | Desbloquea venta y spec sin software. |
| **Template dental** | **BUILD NOW** | Demo + entrega cliente 1. |
| **Deploy automatizado** | **BUILD NOW** | GitHub → Vercel; bajo coste, alto ROI. |
| **Documentación (Obsidian lite)** | **BUILD NOW** | Decisiones + learnings; no vault masivo. |
| **Analytics setup script** | **BUILD NOW** | Parte del entregable vendido. |
| **QA manual + 1 Skill** | **BUILD NOW** | Checklist humano + Skill landing-qa. |
| **QA automático completo** | **BUILD AFTER CLIENT 1** | Lighthouse CI warn primero. |
| **n8n** | **BUILD AFTER CLIENT 3** | Volumen bajo; manual basta. |
| **CRM propio** | **DO NOT BUILD** | Usar CRM del cliente o HubSpot free. |
| **Agentes (10)** | **DO NOT BUILD** | Skills > agentes en Etapa 1. |
| **RAG** | **DO NOT BUILD** | Sin corpus útil aún. |
| **Agency OS Notion** | **BUILD AFTER CLIENT 1** | Tabla simple ahora; OS después. |
| **Base conocimiento formal** | **BUILD AFTER CLIENT 3** | Obsidian retrospectivas bastan. |
| **30 componentes** | **DO NOT BUILD** | Prematuro. |
| **15 automatizaciones** | **DO NOT BUILD** | Prematuro. |

---

## 6. ARQUITECTURA TÉCNICA MÍNIMA

| Capa | **[DECISION]** |
|------|----------------|
| **Frontend** | Astro + Tailwind + React islands (formularios). |
| **Backend** | Serverless mínimo (Vercel function o Formspree). |
| **CMS** | **No** para Etapa 1. Content en MD/MDX + SiteSpec YAML en Git. |
| **Base de datos** | **No** propia. Supabase solo si Agency OS lo exige tras cliente 3. |
| **Analytics** | Plausible o GA4 (según cliente). |
| **Forms** | Formspree → webhook → email/CRM cliente. |
| **CRM** | Del cliente (HubSpot/Pipedrive) o Google Sheet temporal. |
| **Automatización** | Manual; email nativo. n8n después. |
| **Git** | Monorepo: `packages/components`, `templates/dental`, `projects/`. |
| **Deployment** | GitHub Actions → Vercel preview + prod. |
| **Testing** | Build CI + link check. Lighthouse warn. E2E post-cliente 1. |
| **IA** | Cursor Skills (onboarding, landing-qa). No agentes permanentes. |

**[DECISION]** Stack optimizado para SSG, coste ~0 € hosting inicial, reutilización por template overlay.

**[DO NOT BUILD]** Supabase auth, headless CMS, microservicios, RAG pipeline.

---

## 7. IA MULTIMODELO

| Modelo | Rol provisional | Cuándo NO usarlo |
|--------|-----------------|------------------|
| **Gemini 3.7 Flash** | Síntesis: oferta, emails venta, SiteSpec draft, SOPs, SEO on-page review | Decisiones finales de precio; no es director absoluto |
| **Grok 4.6** | Red team: destruir over-engineering, revisar propuesta/pricing, adversarial QA | Copy final; tono puede ser demasiado agresivo para cliente |
| **Composer 2.5** | Build repo, componentes, CI, Skills, implementar SiteSpec | Estrategia CEO; no liderar ventas |
| **ChatGPT Go** | Móvil: scripts llamada, objeciones, resúmenes post-conversación | Arquitectura; decisiones estructurales |

**Flujo de revisión:**
1. Gemini → borrador.
2. Grok → critique (1 respuesta corta obligatoria en decisiones grandes).
3. Humano → aprueba.
4. Composer → ejecuta en Git.

**Tareas humanas obligatorias:** pricing final, firma contrato, llamadas venta, aprobación deploy, creative direction final, fact-check de claims comerciales.

---

## 8. ORQUESTACIÓN

**[DECISION] Arquitectura D — Pipeline por fases con transferencia mediante artefactos.**

No A (un solo director IA — sesgo y punto único de fallo).  
No C (council — parálisis).  
B parcialmente, pero D es más operativa para 1 persona.

```
INTAKE/VENTA → Gemini (artefacto: brief.md)
     ↓
RED TEAM → Grok (artefacto: critique.md, solo si decisión >2h impacto)
     ↓
DECISIÓN → Humano (artefacto: decision-record.md en Obsidian)
     ↓
BUILD → Composer (artefacto: PR Git)
     ↓
VALIDACIÓN → Humano + Skill QA (artefacto: checklist firmado)
```

| Rol | Quién |
|-----|-------|
| **Decide** | Humano (fundador) |
| **Investiga** | Gemini + fundador en llamadas |
| **Critica** | Grok |
| **Construye** | Composer |
| **Valida** | Humano + checklist |
| **Autoridad final** | Humano |
| **Contradicciones** | Grok vs Gemini → fundador decide en ≤15 min; se documenta en decision-record; **no se re-debate en chat** |

**[DECISION]** Ningún modelo es Director de Orquesta. El pipeline + artefactos orquestan.

---

## 9. SOURCE OF TRUTH

| Capa | Herramienta | Contenido |
|------|-------------|-----------|
| **SOURCE OF TRUTH (executable)** | **Git** | Código, SiteSpec YAML, content MD, Skills, CI |
| **KNOWLEDGE BASE** | **Obsidian** | Decision records, playbooks venta, retrospectivas, learnings |
| **PROJECT STATE** | **Notion (tabla simple)** | Pipeline: lead → propuesta → firmado → build → entregado |
| **EXECUTION ENVIRONMENT** | **Cursor + Vercel MCP + GitHub** | Build, deploy, QA técnico |

**[DECISION]** Chat logs de modelos **no** son SOT. Extraer solo decisiones a Obsidian.

**[DO NOT BUILD]** RAG como capa de verdad. Supabase como SOT hasta cliente 3+.

---

## 10. RIESGOS (Top 10)

| # | Riesgo | Prob. | Impacto | Prioridad |
|---|--------|-------|---------|-----------|
| 1 | Sobreingeniería factory antes de vender | Alta | Alta | **P0** |
| 2 | 30 días sin conversaciones comerciales reales | Media | Alta | **P0** |
| 3 | Primer proyecto consume 80+ h (margen negativo) | Alta | Media | **P1** |
| 4 | Pricing mal calibrado (sin datos) | Alta | Media | **P1** |
| 5 | Vertical dental no convierte | Media | Alta | **P1** |
| 6 | Fundador 100 % en build, 0 % ventas | Media | Alta | **P0** |
| 7 | Scope creep (“también quiero portal/login”) | Alta | Media | **P1** |
| 8 | Dependencia IA sin fact-check (claims falsos en propuesta) | Media | Alta | **P1** |
| 9 | Formularios/leads sin GDPR básico | Media | Media | **P2** |
| 10 | Ox/Codex/agentes como distracción | Media | Media | **P2** |

---

## 11. QUÉ NO HARÍA (10 cosas)

1. **[DO NOT BUILD]** SiteSpec “completo” antes del primer cliente.
2. **[DO NOT BUILD]** 30 componentes — máximo 10.
3. **[DO NOT BUILD]** Agency OS elaborado en Notion.
4. **[DO NOT BUILD]** 15 automatizaciones n8n.
5. **[DO NOT BUILD]** 10 agentes especializados.
6. **[DO NOT BUILD]** RAG / base conocimiento vectorial.
7. **[DO NOT BUILD]** QA automático enterprise.
8. **[DO NOT BUILD]** Design system Figma formal.
9. **[DO NOT BUILD]** Multi-vertical (estética + B2B + dental simultáneo).
10. **[DO NOT BUILD]** Benchmark de 4 modelos durante 3 días en lugar de outbound.

---

## 12. DECISIÓN FINAL

**DECISIÓN:**  
Vender **ya** una oferta productizada para **clínicas dentales privadas** (web conversión en 14 días), construyendo en paralelo solo un **MVP de fábrica del 20 %** (template dental + 8 componentes + SiteSpec v0.1 + deploy auto + intake checklist). Rechazar el plan de construir la fábrica completa antes del primer euro.

**PRÓXIMO PASO:**  
Mañana por la mañana: escribir el 1-pager de oferta (2 h), publicar landing propia con propuesta clara (4 h), identificar 20 clínicas objetivo y enviar **5 mensajes de outreach** antes de mediodía.

**MAYOR RIESGO:**  
Pasar 30 días perfeccionando arquitectura IA/factory sin pipeline comercial activo.

**MAYOR HIPÓTESIS:**  
Clínicas dentales privadas pagarán 1.800–2.800 € por web orientada a citas si la demo y la propuesta son creíbles.

**[DO NOT BUILD]:**  
RAG, 10 agentes, 15 n8n, Agency OS, 30 componentes, SiteSpec completo — todo eso **antes del cliente 1**.

---

**Si fuera responsable del resultado económico, mañana por la mañana haría esto:**

1. **08:00–10:00** — Bloquear oferta final: ICP, promesa, 2.400 € provisional, entregables, 14 días. Sin más arquitectura.
2. **10:00–13:00** — Landing propia live (aunque imperfecta) con CTA “Solicitar auditoría gratuita de conversión (15 min)”.
3. **13:00–14:00** — Lista 20 clínicas (ciudad concreta que conozcas); buscar email/teléfono.
4. **15:00–18:00** — Enviar 5 outreach personalizados (no template genérico) + preparar demo dental ficticia en template base para la semana 2.

**[FACT]** Sin conversaciones esta semana, ninguna decisión de factory importa.  
**[DECISION]** La fábrica se financia con el primer cliente, no al revés.
