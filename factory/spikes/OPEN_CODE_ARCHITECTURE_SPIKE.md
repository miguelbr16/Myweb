> **Importado en repositorio:** 2026-08-22  
> **Ubicación:** `factory/spikes/OPEN_CODE_ARCHITECTURE_SPIKE.md`  
> **Fuente:** OpenCode / ox-alpha — cuerpo del informe sin alteración conceptual  

---

# Architecture Spike Report

| Campo | Valor |
|---|---|
| Fecha | 2026-08-22 |
| Autor | ox-alpha (opencode CLI) |
| Estado | **ANALYSIS-ONLY SPIKE — PROVISIONAL** |
| Entorno | Windows (win32), PowerShell 5.1, workspace vacío, sin repositorio git |
| Próxima acción requerida | Ejecutar el protocolo empírico definido en §9.Limitations antes de cerrar la decisión de stack |

> **DECLARACIÓN DE ALCANCE (leer primero)**
>
> Este documento registra un spike **analítico**, no empírico. Durante el trabajo que documenta **no se ejecutó ningún comando de build, ninguna medición, ni una sola línea de código de producción**. La interacción completa consistió en análisis arquitectónico sobre documentos (Blueprint V0.1, auditoría técnica, red team).
>
> Consecuencia directa: todas las secciones empíricas de este informe están marcadas `[NOT MEASURED]`. Ninguna cifra de este documento es experimental. La regla crítica del encargo ("distinguir OBSERVADO vs INFERIDO vs RECOMENDADO; no convertir una opinión en evidencia") se aplica estrictamente.
>
> Leyenda usada en todo el documento:
> - **OBSERVADO** — verificado directamente en este entorno durante el trabajo.
> - **INFERIDO** — conclusión por razonamiento a partir de conocimiento público o análisis.
> - **RECOMENDADO** — decisión propuesta, pendiente de validación empírica u operativa.

---

## 1. Objective

Pregunta principal que intentaba responder el spike:

> **Astro o Next.js para una Digital Factory orientada a landings de captación (clínicas privadas, móvil-first, ensambladas desde spec por agentes de código)?**

Preguntas secundarias derivadas del Blueprint V0.1:

1. ¿Se necesita Supabase antes del Cliente 1?
2. ¿Qué formato debe tener el SiteSpec para que un agente ensamble sin ambigüedad?
3. ¿Qué catálogo mínimo de componentes basta para una landing de captación?
4. ¿Qué alcance de n8n es indispensable en MVP?

**Resultado**: las cuatro preguntas fueron respondidas **solo a nivel de razonamiento arquitectónico**. Ninguna recibió validación experimental. Ver §4 y §9.

---

## 2. Repository State

### Estructura encontrada

- **[OBSERVADO]** El directorio de trabajo estaba **vacío al inicio de la sesión** (0 entradas, verificado mediante listado de directorio).
- **[OBSERVADO]** No existe repositorio git (sin `.git`), ni `package.json`, ni lockfiles, ni código fuente, ni configuraciones de tooling.
- **[FACT]** No había trabajo previo que preservar; la regla "NO borres trabajo existente" se cumplió trivialmente.

### Tecnologías existentes

Ninguna. No hay stack instalado ni inicializado.

### Cambios realizados durante el spike

- **[OBSERVADO]** Cero cambios en archivos o código. Los entregables del trabajo (revisión del blueprint, auditoría, red team) existen únicamente como documentos conversacionales en el historial del chat, **fuera del repositorio**.
- **[RISK]** Ese hecho constituye en sí mismo una brecha de continuidad: decisiones técnicas valiosas vivían en memoria de chat, no en archivos versionados. Este informe es el primer artefacto que corrige esa situación.
- Archivos creados por esta tarea: `spikes/ARCHITECTURE_SPIKE_REPORT.md` (este documento). Nada más.

---

## 3. Methodology

### Qué se ejecutó realmente (análisis)

1. **Comparativa de escritorio Astro vs Next.js** en 5 dimensiones: CWV por defecto, modelo de renderizado (islands vs RSC), reutilización entre proyectos, coste de mantenimiento para 1 desarrollador, familiaridad de agentes de código. Base: características públicamente documentadas de ambos framework + razonamiento sobre el caso de uso.
2. **Diseño de SiteSpec v0.1**: propuesta de `sitespec.json` validado contra JSON Schema con fallo rápido en build (ver §6).
3. **Definición de catálogo mínimo**: 14 componentes con función de conversión asignada (ver §6 y documento de auditoría previo).
4. **Análisis de riesgos**: hosting de n8n (webhook siempre activo), minimización de datos RGPD (art. 9), estrategia de propagación template→forks, promesa de WhatsApp automático vs realidad de Meta Cloud API.

### Qué NO se ejecutó (explícito)

- ❌ No se scaffoldingó ningún proyecto (ni Astro ni Next.js).
- ❌ No se ejecutaron builds → no hay tiempos de build.
- ❌ No se analizó ningún bundle → no hay pesos de JS.
- ❌ No se ejecutó Lighthouse ni ninguna prueba de Core Web Vitals.
- ❌ No se implementó landing simulada alguna, ni formulario de cualificación.
- ❌ No se probó SiteSpec contra ningún pipeline de build real.
- ❌ No se realizaron pruebas de modificación por agente (Composer/OpenCode/ox-alpha).
- ❌ No se crearon repositorios de Cliente A/B/C.

---

## 4. Measurements

**Regla aplicada**: solo métricas realmente medidas. Todo lo no medido queda como `[NOT MEASURED]`.

| Métrica | Valor | Razón |
|---|---|---|
| Bundle JS (Astro) | **[NOT MEASURED]** | Spike no ejecutado |
| Bundle JS (Next.js) | **[NOT MEASURED]** | Spike no ejecutado |
| Build time (ambos) | **[NOT MEASURED]** | Sin builds |
| Tamaño de dependencias | **[NOT MEASURED]** | Sin installs |
| Complejidad (ciclos/acoplamiento) | **[NOT MEASURED]** | Sin código fuente |
| Nº de archivos modificados por agente | **[NOT MEASURED]** | Sin pruebas de agente |
| Performance (LCP/TBT/CLS/INP móvil) | **[NOT MEASURED]** | Sin Lighthouse |
| Errores de agente por tarea | **[NOT MEASURED]** | Sin pruebas de agente |

**Conclusión de sección**: este spike no produce evidencia cuantitativa. Produce un marco de decisión y un protocolo para generarla (§9).

---

## 5. Agent-Friendliness

- **[OBSERVADO]**: nada fue observado experimentalmente. No existieron modificaciones de contenido vía configuración, porque no hubo contenido ni configuración.
- Ítems solicitados por el encargo — archivos que necesitó modificar el agente, si tocó componentes innecesariamente, superficie de error, facilidad de repetición, errores observados: **todos [NOT MEASURED]**.
- Las afirmaciones previas sobre comportamiento de agentes (p. ej., "React/Next tiene más ejemplos en training data", ".astro tiene menor superficie de alucinación por su sintaxis cercana a HTML") son **[HIPÓTESIS / INFERIDO]**, no evidencia. Quedan registradas aquí para ser falsadas o confirmadas en el protocolo empírico.

---

## 6. SiteSpec Findings

### Qué funcionó y qué produjo fricción

- **[OBSERVADO]**: nada funcionó ni produjo fricción, porque nunca se validó contra un pipeline real. Cero iteraciones ejecutadas.

### Diseño propuesto ([RECOMENDADO], no probado)

- Un único `sitespec.json` por proyecto, validado contra JSON Schema en build (fail-fast).
- Secciones: `meta` (nombre, SPEC_VERSION semver, locale, currency) · `brand` (tokens color/fuente/logo) · `blocks[]` (array ordenado `{type: enum del catálogo, props}`) · `integrations` (webhook_url, whatsapp_number, phone, analytics_id) · `tracking` (lead_submitted, whatsapp_click, call_click) · `seo` · `legal`.
- Tipos TypeScript generados **desde** el schema (fuente única), nunca paralelos manuales.

### Configuración vs código

| Debe ser configuración | Debe permanecer como código |
|---|---|
| Tokens de marca, textos, orden de bloques | Implementación de los 14 bloques |
| Endpoints, números, IDs de tracking | Layout, lógica de render, hidratación de la isla |
| Rutas de assets, metadatos SEO | Lógica de validación del schema |

### Decisiones aún abiertas

1. Formulario nativo del template vs Tally (bloque B4 de la auditoría).
2. Umbral a partir del cual el copy largo sale del JSON a archivos separados.
3. Política exacta de migraciones entre SPEC_VERSIONs.

---

## 7. Factory Reusability

- **[FACT]** Los Clientes A/B/C no existen. No hubo observación posible de reutilización real.
- Lo siguiente es **proyección de planificación [INFERIDO]**, a validar en Clientes 1–3:

| Aspecto | Proyección |
|---|---|
| Reutilizable esperado | Bloques del template, schema, workflow n8n maestro, checklist QA, taxonomía de eventos |
| Que cambiará por cliente | Tokens de marca, copy completo, integraciones (números/endpoints), textos legales adaptados |
| Riesgo de duplicación proyectado | Forks que divergen sin ritual upstream; workflows n8n copiados en vez de parametrizados |
| Riesgo de acoplamiento proyectado | Taxonomía de eventos y contratos de bloque definidos tarde, tras N clientes divergentes |

Hipótesis cuantitativa registrada para validación futura: **≥60% de estructura reutilizable entre landings consecutivas del mismo nicho**. Estado: sin datos.

---

## 8. Repository Strategy

Estrategia analizada: `factory-template` (upstream) + fork por cliente + remote `upstream`.

**Riesgos observados**: ninguno observado — **[INFERIDO]** por análisis:

1. Fixes del template no propagan a forks si falta el remote `upstream` o el ritual de sync documentado.
2. Conflictos de merge cuando un cliente diverge fuertemente en un bloque compartido.
3. Specs antiguas rotas ante cambios de schema sin versionado semver + notas de migración.
4. Sprawl de secretos entre forks sin convención central.

**No se asume definitiva.** Alternativas no evaluadas experimentalmente: monorepo con directorios de config por cliente; template como paquete npm versionado; generador (spec → repo nuevo). La decisión debe reabrirse cuando el Cliente 1 fuerce el primer sync real — ese será el primer dato observado de esta sección.

---

## 9. Astro vs Next.js

### Evidence

Empírica: **ninguna**. Todas las métricas de la comparativa: `[NOT MEASURED]`.

Base actual de la posición (razonamiento, no medición):

| Dimensión | Basis declarada | Tipo |
|---|---|---|
| CWV por defecto | Astro envía 0 JS salvo islands; Next App Router arrastra runtime React salvo configuración cuidadosa | INFERIDO (docs públicos) |
| Modelo de renderizado | Islands = mental model mínimo para "estático + 1 isla"; RSC añade fronteras server/client | INFERIDO |
| Reutilización | Bloques `.astro` ≈ HTML+props; clonar+sustituir spec trivial | INFERIDO |
| Mantenimiento 1 dev | Historial de breaking changes de Next majors (13→14→15) mayor que el de Astro | INFERIDO (historial público) |
| Familiaridad de agentes | Máximo volumen de ejemplos React/Next; `.astro` menos frecuente pero de baja ambigüedad | HIPÓTESIS |

### Recommendation

**[RECOMENDADO — PROVISIONAL]** Astro + Tailwind + TypeScript strict para el producto landing V0.1; reservar Next.js para productos app-like futuros (Nivel 3), que serían proyectos nuevos, no migraciones.

### Limitations

Este spike **NO demuestra**:

- Diferencia real de bundle JS o build time entre ambos stacks para una landing idéntica.
- Diferencia real de Core Web Vitals en dispositivo móvil real o emulado.
- Fiabilidad diferencial de agentes editando `.astro` vs `.tsx`.
- Coste de mantenimiento longitudinal (versiones, upgrades).

#### Protocolo del spike empírico (pendiente de ejecución)

Objetivo: convertir esta recomendación provisional en decisión con datos. Duración estimada: ~medio día. Pasos mínimos:

1. Scaffoldar **la misma landing de 1 página** en ambos stacks desde el mismo `sitespec.json`, con los mismos 14 bloques y la misma isla de formulario.
2. Medir ×3 runs por stack: tiempo de build; bytes de JS servidos en la ruta `/`; Lighthouse móvil (perfil throttled): Perf, LCP, TBT, CLS.
3. Ejecutar **3 tareas cronometradas de agente** en cada stack: (a) cambiar texto del CTA, (b) sustituir imagen hero, (c) añadir 1 ítem de FAQ — todas *solo vía sitespec*. Registrar: archivos tocados, errores, si algún componente fue modificado indebidamente.
4. Criterios de aceptación sugeridos: gana el stack con menor JS servido y mejor Perf Lighthouse, siempre que el agente complete las 3 tareas sin tocar componentes; desempate por tiempo total de las tareas.
5. Añadir resultados como **§13 de este documento** (append-only, sin reescribir historia) y actualizar el estado del encabezado.

---

## 10. Technical Debt

Deuda potencial proyectada **[INFERIDO]** — sin observación real:

**Al llegar al Cliente 5**
- Propagación rota template→forks si el ritual upstream no existe ya.
- Clientes anclados a SPEC_VERSION v1 mientras el template avanza; primera necesidad real de migraciones.
- Inventario de secretos imprescindible; taxonomía de eventos empieza a divergir.

**Al llegar al Cliente 10**
- Presión de reporting cross-cliente → migración Sheet→Postgres deja de ser opcional.
- Demanda plausible de CMS/autogestión de contenido; coste de PR-por-cambio-de-texto insostenible.
- Cadencia trimestral de updates de dependencias obligatoria o el parque se fragmenta.

**Al llegar al Cliente 20**
- Necesidad de plataforma de observabilidad multi-cliente (uptime, errores, conversiones agregadas).
- Refactor probable hacia template-como-paquete o generador; monorepo vs forks decide aquí.
- Revisión formal RGPD de retención de datos relacionados con salud a escala.

---

## 11. Decisions

**[FACT]**
- El workspace estaba vacío y no había repo git; el spike no ejecutó builds, mediciones ni código.
- Este documento es el primer artefacto técnico persistido del proyecto.
- Toda métrica del §4 es [NOT MEASURED]; toda "evidencia" del §9 es razonamiento clasificado, no dato.

**[RECOMMENDATION]**
- Stack V0.1: Astro + Tailwind + TS strict (provisional hasta protocolo §9).
- SiteSpec: JSON único + JSON Schema fail-fast; tipos generados desde schema.
- Persistencia: Google Sheet hasta Cliente 3+/300 leads/mes; Postgres después.
- Notificaciones v0: email + Telegram; WhatsApp Cloud API pospuesta a cliente pagante.
- Topología Git: template upstream + fork por cliente, con revisión al primer sync real.

**[HYPOTHESIS]**
- ≥60% de estructura reutilizable entre landings consecutivas del nicho.
- El schema fail-fast evita que agentes modifiquen componentes al editar contenido.
- La ventaja CWV estructural de Astro se traduce en ventaja comercial medible.

**[RISK]**
- Tratar este análisis de escritorio como si fuera evidencia experimental (riesgo que este propio documento mitiga al declararlo).
- Propagación de template y versionado de spec sin disciplina desde el día 1.
- Promesa comercial basada en integraciones cuya fricción real (Meta Cloud API) está documentada pero no medida en nuestro entorno.

**[DO NOT BUILD]**
- Continuar factory-core antes del spike empírico y del Cliente 1.
- Supabase pre-trigger · Radix/Shadcn · RAG · agentes permanentes · QA E2E · CMS · WhatsApp Cloud API · SaaS/i18n · design system formal.

---

## 12. Final Recommendation

**Mantener**
- La disciplina de documentación y el contrato DO-NOT-BUILD.
- La dirección general del diseño (landing única, spec-first, automatización mínima viable).
- La regla de que el conocimiento vive en el repo, no en chats — este archivo es su primera aplicación.

**Cambiar**
- El estatus de la decisión de stack: de "decidida" a **"provisional hasta ejecutar el protocolo del §9"**.
- La práctica de dejar decisiones en historial de chat: trasladarlas a documentos commiteados como este.

**Investigar después**
1. Ejecutar el protocolo empírico del §9 (~medio día) y anexarlo como §13.
2. Validar la hipótesis de ≥60% reutilización con los dos primeros clientes reales.
3. Medir tiempo real lead→ensamblaje con el pipeline intake→sitespec una vez exista.

---

*Fin del informe. Estado: PROVISIONAL. Este documento debe crecer por anexos (§13+) cuando existan datos, sin alterar secciones anteriores.*
