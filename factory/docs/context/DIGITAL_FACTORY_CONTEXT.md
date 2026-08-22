# Digital Factory — Context V0.2

> **Versión:** 0.2  
> **Estado:** Contexto consolidado — pre-implementación  
> **Última actualización:** 2026-08-22  

---

## 1. Visión

**[FACT]** Queremos crear una empresa digital que combine:

- diseño y desarrollo de webs;
- landing pages;
- CRO;
- SEO;
- generación de leads;
- automatizaciones;
- CRM;
- IA;
- agentes;
- workflows;
- mantenimiento;
- optimización.

**[FACT]** La visión a largo plazo es una **Digital Factory** — un sistema de producción repetible:

```
CLIENTE
↓
INTAKE
↓
INFORMACIÓN + ASSETS + PREFERENCIAS
↓
SPEC
↓
CONFIGURACIÓN
↓
PRODUCCIÓN
↓
QA
↓
DEPLOY
↓
RESULTADOS
↓
DATOS
↓
APRENDIZAJE
↓
MEJORES COMPONENTES / TEMPLATES / PROCESOS
↓
PRODUCCIÓN MÁS RÁPIDA
```

**[FACT]** Elementos que la factory debe desarrollar progresivamente:

- templates;
- componentes;
- design systems;
- SiteSpec / ProjectSpec;
- formularios de intake;
- workflows;
- automatizaciones;
- agentes;
- QA;
- deployment;
- conocimiento acumulado.

**[FACT]** Modelos de ingreso objetivo (presente y futuro):

- servicios;
- servicios productizados;
- retainers;
- templates;
- componentes;
- automatizaciones;
- productos digitales;
- eventualmente software propio.

---

## 2. Situación actual

**[FACT]**

| Aspecto | Estado |
|---------|--------|
| Equipo | 1 fundador |
| Factory madura | No |
| Base de clientes | No significativa |
| Histórico de proyectos | Insuficiente para infraestructura compleja |
| Capacidad de entrega | Sí — webs de calidad |
| Primer objetivo | Conseguir clientes y demostrar resultados |

**[FACT]** Presupuesto inicial limitado.

**[FACT]** El fundador puede dedicar aproximadamente **40 horas/semana**.

**[ASSUMPTION]** Reparto provisional hasta primer cliente: ~50 % ventas/comercial, ~50 % producto/producción (ajustable semanalmente).

---

## 3. Recursos disponibles

### Herramientas IA

**[FACT]**

- ChatGPT Go
- Gemini 3.7 Flash
- Grok 4.6
- Cursor + Composer 2.5
- Codex (incorporación posterior)
- Otros agentes (posible, no definidos)

### Infraestructura y herramientas

**[FACT]**

- Git
- GitHub
- Vercel
- n8n
- Herramientas de analytics
- Supabase (posible)
- Obsidian (posible)
- Otras herramientas si se justifican

---

## 4. Restricciones

**[FACT]**

- Presupuesto limitado.
- Una sola persona gestionando el proyecto.
- Primer cliente lo antes posible.
- No meses construyendo infraestructura antes de vender.
- No crear cada proyecto desde cero.
- La empresa debe poder escalar posteriormente.

**[DECISION]** Prioridad explícita: **velocidad de aprendizaje + generación de ingresos** > abstracciones + automatización + complejidad.

---

## 5. Oportunidad detectada (hipótesis)

**[HYPOTHESIS]** Vertical inicial candidata: **clínicas dentales privadas en España**.

**[FACT]** Problema **observado** (no cuantificado en mercado):

- poca claridad de oferta;
- formularios con fricción;
- CTAs débiles;
- mala experiencia móvil;
- poca diferenciación;
- poca explotación del tráfico existente;
- seguimiento de leads deficiente.

**[FACT]** No tenemos datos suficientes para afirmar que esto sea generalizado en todo el mercado.

**[FACT]** Referencias de competencia (no implica su rentabilidad):

| Oferta observada | Precio |
|------------------|--------|
| Web premium clínicas | desde 4.900 € |
| Web + SEO | desde 299 €/mes |
| Landing + campañas Meta | desde 1.200 €/mes |

**[OPEN QUESTION]** Tamaño real del mercado, CAC, conversión, disposición a pagar, churn, LTV, margen real — **desconocidos**.

**[EXPERIMENT]** Validar con conversaciones comerciales (objetivo: 15 en 30 días), no con research inventado.

---

## 6. Conflicto interno (documentado)

**[FACT]** Tensión entre tres impulsos:

| Voz | Posición |
|-----|----------|
| Negocio | Vender ya; construir factory completa antes del primer cliente es perder tiempo |
| Tecnología | Sin arquitectura mínima, cada cliente genera deuda técnica |
| Marketing | Propuesta diferenciada + landing propia antes de outbound |

**[FACT]** Impulso del fundador de construir antes de vender (lista no aprobada como plan):

1. SiteSpec completo  
2. 30 componentes reutilizables  
3. Sistema de diseño  
4. Agency OS en Notion  
5. 15 automatizaciones n8n  
6. 10 agentes especializados  
7. Sistema RAG  
8. Base de conocimiento  
9. QA automático completo  
10. Deployment totalmente automatizado  

**[DECISION]** Posición provisional (benchmark): **vender en paralelo a MVP factory ~20 %** — rechazar construcción completa pre-cliente.

**[DO NOT BUILD]** Items 1–10 de la lista anterior antes del primer cliente (salvo MVP acotado documentado en decisiones).

---

## 7. Orquestación IA (provisional)

**[DECISION]** Arquitectura de colaboración: **Pipeline por fases con transferencia mediante artefactos** (Arquitectura D).

| Rol | Asignación provisional |
|-----|------------------------|
| Director final | Humano (fundador) |
| Síntesis / borradores | Gemini 3.7 Flash |
| Red Team / adversarial | Grok 4.6 |
| Implementación en repo | Composer 2.5 (cuando exista código) |
| Móvil / táctico | ChatGPT Go |

**[FACT]** Ningún modelo es Director de Orquesta único.

**[OPEN QUESTION]** Roles definitivos pendientes de benchmark multimodelo ejecutado.

---

## 8. Source of Truth (provisional)

| Capa | Herramienta | Contenido |
|------|-------------|-----------|
| **SOURCE OF TRUTH (executable)** | Git | Specs, código futuro, Skills, CI |
| **KNOWLEDGE BASE** | Obsidian + `factory/docs/` | Decisiones, playbooks, learnings |
| **PROJECT STATE** | Notion (tabla simple) | Pipeline comercial y fases |
| **EXECUTION ENVIRONMENT** | Cursor + MCP | Build, deploy (futuro) |

**[FACT]** Chat logs de modelos no son fuente de verdad.

---

## 9. Decisiones pendientes (NO cerradas)

**[FACT]** Las siguientes decisiones **no están cerradas** y requieren Red Team + aprobación humana:

- Framework frontend (Astro vs Next.js vs otro)
- Estructura de monorepo vs multi-repo
- CMS vs content en Git
- Base de datos propia (Supabase) — cuándo
- Stack de forms / CRM
- Alcance exacto SiteSpec V0.1 implementable
- Pricing final validado
- ICP definitivo si dental no convierte

**[OPEN QUESTION]** ¿Quién edita SiteSpec: fundador, cliente o IA?

---

## 10. Principios operativos

**[RECOMMENDATION]**

1. Ventas + entrega + aprendizaje antes que abstracción.
2. No code without Decision Record (fase implementación).
3. No automatizar antes de 3 repeticiones documentadas.
4. Promover a componente/template solo tras ≥3 usos similares.
5. Separar QA técnico (CI) de QA estratégico (humano).
6. Harvest 30 min post-entrega → `docs/learnings/`.

---

## 11. Documentos relacionados

| Documento | Ubicación |
|-----------|-----------|
| Análisis arquitectónico (Composer) | `/composer-analysis.md` (repo root, pre-scaffold) |
| Análisis multimodelo | `/multimodel-orchestration-analysis.md` (repo root, pre-scaffold) |
| SiteSpec Contract V0.1 | `docs/factory/SITESPEC_CONTRACT_V0.1.md` |
| Decision Records | `decisions/` |

---

## Changelog

| Versión | Cambios |
|---------|---------|
| V0.1 | Visión y pipeline factory (análisis inicial) |
| V0.2 | + situación actual, recursos, conflicto build/sell, oportunidad dental, orquestación provisional, decisiones pendientes, principios |
