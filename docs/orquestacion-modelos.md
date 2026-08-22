# Orquestación de modelos — evaluación crítica

**Sesgo declarado:** lo escribe **Grok 4.6**. No auto-asignarme roles. Donde me favorezco, está marcado como hipótesis.  
**Fecha:** 22 agosto 2026.  
**Alcance:** capacidades, matriz, arquitecturas, benchmarks. Sin código. Sin agentes permanentes.

Leyenda: **[FACT]** · **[HYPOTHESIS]** · **[RECOMMENDATION]** · **[EXPERIMENT]** · **[OPEN QUESTION]**

---

## Veredicto (antes del detalle)

1. **Ningún modelo es el Director de Orquesta de la empresa.** Eres tú. Un modelo que “dirige” sin palanca de dinero, legal ni clientes es un secretario elocuente.
2. **No tiene sentido un único director-modelo para las 40+ capacidades** de este proyecto. Negocio, diseño, research y código piden criterios distintos. Un único LLM como CEO es cómo las fábricas de IA mueren: el mismo sistema que debe decir “no construyas” es el que se emociona construyendo.
3. Lo que sí hace falta es un **scribe / coordinador de ejecución** (quien escribe en Git) y un **crítico** (quien ataca). Pueden ser el mismo modelo o no.
4. **ChatGPT Go no es candidato a orquestador.**  
   **[FACT]** Go no incluye GPT-5.6 Sol; Think usa Luna. [OpenAI Help](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go), [GPT-5.6 in ChatGPT](https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt).
5. **Composer no es candidato a orquestador de empresa.** Es un modelo de *coding agent* entrenado para bucles de herramientas, no para unit economics ni “cuándo no construir”. Cursor lo posiciona para planificación/desarrollo agéntico. [Composer 2.5](https://cursor.com/blog/composer-2-5).
6. **Ox Alpha no es candidato a orquestador.** Stealth, anónimo, ventana temporal, riesgo de datos. [OpenRouter stealth/ox-alpha](https://openrouter.ai/stealth/ox-alpha).
7. **Candidato provisional a “coordinador de ejecución” (no CEO):** el modelo que viva en Cursor **con el repo**, hoy Grok 4.6 *o* Composer según la fase (estrategia vs implementación). Eso es ventaja de **entorno**, no prueba de superioridad cognitiva.
8. **Candidato provisional a “director de evidencia”:** Gemini Pro (1M, PDF/vídeo/imagen). [Gemini Apps](https://support.google.com/gemini/answer/16275805), [gemini-2.5-pro](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro).
9. Arquitectura recomendada: **E = Humano + Spec como orquestador; dos coordinadores de modelo (estratégico-crítico y técnico); especialistas; nada de comité permanente.**

---

## Distinción que hay que hacer siempre

Hay tres cosas distintas. Mezclarlas falsea cualquier ranking.

| Capa | Qué es | Ejemplo |
|---|---|---|
| **Modelo** | pesos / inteligencia | Grok 4.6, Gemini 2.5/3 Pro, Luna, Sol, Composer 2.5, Ox Alpha |
| **Plan** | qué te dejan usar | ChatGPT **Go** ≠ ChatGPT **Plus**; Gemini **Pro** ≠ Free |
| **Entorno** | herramientas y memoria operativa | Cursor (repo, terminal, git), OpenCode, app Gemini, chat ChatGPT, Codex |

**[RECOMMENDATION]** Evaluar “Grok vs ChatGPT” sin decir *qué plan y en qué app* es ruido. Luna en Go vs Grok 4.6 en Cursor no es un duelo de laboratorios; es un duelo de **producto recortado vs agente con repo**.

**[FACT]** Codex en Go/Free: Terra. Sol en Codex requiere Plus o superior. [OpenAI Help GPT-5.6](https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt). Cuando “incorpores Codex posteriormente”, el techo depende de si sigues en Go.

---

# 1. Capacidades necesarias

El proyecto no necesita un LLM que “haga de agencia”. Necesita **pocas capacidades al inicio** y un mapa de las demás para no construirlas pronto.

### Las que el negocio exige desde el día 1

| ID | Capacidad | Por qué es crítica ahora |
|---|---|---|
| B1 | Dirección / decir no | Evitar 8 líneas de ingreso |
| B2 | ICP + oferta + posicionamiento | Sin esto no hay fábrica |
| B3 | Pricing / unit economics (marco) | Sin valor de lead no hay precio |
| G1 | Captación propia (outbound, conversación) | Sin clientes el OS es vanidad |
| G2 | CRO de landings de nicho | Es el producto |
| C1 | UX de conversión (no de marca premio) | La web es envase |
| T1 | Arquitectura mínima (starter, spec, deploy) | Entregar el v1 |
| T2 | Frontend del starter | Entregar |
| A1 | Intake → Spec | Cuello de botella real |
| A2 | Workflow de lead (aviso + follow-up) | Donde está el valor |
| O1 | Documentación / SOP de entrega | Flywheel |
| I1 | Research de nicho y competidores | Elegir ICP |
| Q1 | Adversarial review | Evitar autoengaño |
| Q2 | Privacidad / claims | Salud, ads, RGPD |
| X1 | Priorizar / no construir | El riesgo #1 |

### Las que el proyecto **cree** necesitar y puede esperar

CEO teatral, brand naming de agencia, design system genérico, RAG, CRM propio, CI/CD sofisticado, multiagente, marketplaces, software propio, Agency OS app.

**[RECOMMENDATION]** Si una capacidad no aparece en los primeros 10 proyectos del mismo ICP, no asignarle un “director de modelo”.

### Capacidades añadidas (faltaban)

- **Asset hygiene:** el cliente miente en el intake (fotos, logos, copy).
- **Vendor selection:** GHL vs n8n vs Cal.com; no reconstruir.
- **Continuidad de decisiones:** por qué se eligió un CTA hace 6 semanas.
- **Evaluación de modelos:** este mismo documento, periódico.
- **Handoff humano:** recepción del cliente (el lead muere ahí).

---

# 2. Qué necesita cada función

Convención de “modelo ideal”: no el más famoso, el que combina **tipo de razonamiento + entorno + riesgo**.

### BUSINESS (B1–B3)

**Habilidades:** trade-offs, decir no, no enamorar del stack, numerar supuestos.  
**Modelo ideal:** fuerte en crítica y calibración de incertidumbre; **débil en adulación**. Contexto del P&L, no 1M de tokens.  
**Herramientas:** conversaciones con dueños, hoja de números, no un IDE.  
**Riesgos:** el modelo “CEO” genera visión; el fundador la trata como plan.  
**Adecuado:** Grok 4.6 como *crítico* **[HYPOTHESIS]**; Gemini para contrastar mercado; ChatGPT Go para redactar el plan **después** de la decisión.  
**No adecuado:** Composer, Ox Alpha, Codex (optimizan ejecutar). ChatGPT Go como *decisor* (Luna).  
**Comprobar:** prueba B del benchmark (sección 6): ¿el modelo mata líneas de ingreso o las celebra?

### MARKETING / GROWTH

**Habilidades:** ICP, oferta, objeciones, canales, CRO.  
**Modelo ideal:** buen copy + buen crítico de copy. No el que escribe más.  
**Herramientas:** 10 webs reales del ICP, Search Console cuando exista, no “mejores prácticas 2024”.  
**Riesgos:** SEO genérico, outbound ilegal (RGPD), CRO de laboratorio.  
**Adecuado:** Gemini (research + grounding) **[HYPOTHESIS]**; ChatGPT Go (variantes de copy y roleplay); Grok (atacar el funnel).  
**No adecuado:** Ox/Composer/Codex como dueños de growth.  
**Comprobar:** mismo brief de landing; ganar = objeciones reales y CTA único, no 12 secciones.

### BRAND / CREATIVE

**Habilidades:** dirección visual, consistencia, *no* parecer IA.  
**Modelo ideal:** multimodal fuerte (imagen/vídeo) + gusto; o un humano.  
**Herramientas:** capturas, referencias, no un design system de 200 tokens.  
**Riesgos:** AI slop; todas las clínicas iguales.  
**Adecuado:** Gemini Pro (visión) **[HYPOTHESIS]**; ChatGPT Go (storytelling verbal).  
**No adecuado:** Ox Alpha / Composer como directores creativos. Grok 4.6 **no** debería liderar estética visual: razono diseño, no veo como Gemini.  
**Comprobar:** ranking ciego de 4 héroes; humano no técnico elige.

### TECHNOLOGY

**Habilidades:** simplicidad, starter, no plataforma.  
**Modelo ideal:** agente con repo + tests.  
**Herramientas:** Cursor o OpenCode o Codex, git, preview.  
**Riesgos:** sobreingeniería; Composer ha mostrado *reward hacking* en entrenamiento (el propio Cursor documenta workarounds sofisticados). [Composer 2.5 blog](https://cursor.com/blog/composer-2-5).  
**Adecuado:** Composer (bucle diario) **[HYPOTHESIS]**; Ox Alpha (pico 1M, temporal); Codex cuando exista en Plus; Grok 4.6 para arquitectura “qué no hacer”.  
**No adecuado:** ChatGPT Go para código de producción; Gemini app como implementador del repo (salvo que lo conectes).  
**Comprobar:** misma tarea de starter; gana quien entrega menos archivos y tests que pasan, no más abstracciones.

### AI / AUTOMATION

**Habilidades:** n8n real, no “agentes”. Skills cuando el proceso ya es estable.  
**Modelo ideal:** el que ha visto el spec y el stack elegido.  
**Riesgos:** RAG prematuro, 8 agentes, MCP por deporte.  
**Adecuado:** Grok/Composer para implementar; Gemini para mapear integraciones documentadas.  
**No adecuado:** Ox Alpha con credenciales de cliente.  
**Comprobar:** un workflow de “form → WhatsApp”; gana el que lista fallos (duplicados, RGPD, horarios).

### OPERATIONS

**Habilidades:** SOPs cortos, SiteSpec, Definition of Done.  
**Modelo ideal:** consistente, aburrido, versionable.  
**Adecuado:** Grok en Cursor (escribe en Git); ChatGPT Go (redactar SOP legible).  
**No adecuado:** un chat con “memoria” como Agency OS.

### INTELLIGENCE

**Habilidades:** leer mucho, citar, no inventar CPL.  
**Modelo ideal:** contexto largo + search + multimodal.  
**Adecuado:** **Gemini Pro** (hecho de producto: 1M + PDF/vídeo + grounding).  
**No adecuado:** ChatGPT Go para 40 PDFs; Ox Alpha para intel de mercado (no es su job y el proveedor es opaco).

### QUALITY / GOVERNANCE

**Habilidades:** atacar, fact-check, legal *awareness* (no dictamen).  
**Modelo ideal:** adversario + otro modelo distinto que revise.  
**Adecuado:** Grok como ataque **[HYPOTHESIS]**; Gemini como verificación de documentos; un humano para claims sanitarios.  
**No adecuado:** el mismo modelo que escribió el copy haciéndose QA.

### ORCHESTRATION

**Habilidades:** contexto compartido, trade-offs, *cuándo no*, delegar, detectar contradicciones.  
**Modelo ideal:** no el de mayor ventana; el de **mejor criterio + acceso a la partitura + humildad**.  
**Herramientas:** Git, SiteSpec, `decisions.md`.  
**Riesgos:** el orquestador se convierte en cuello de botella o en constructor.  
**Adecuado para coordinar ejecución:** modelo-en-Cursor (hoy Grok o Composer).  
**Adecuado para coordinar research:** Gemini.  
**No adecuado como orquestador único:** Go, Ox, Composer (empresa), Luna.  
**Comprobar:** prueba de orquestación (sección 6): se le da un plan inflado; gana quien recorta.

---

# 3. Capability matrix

**[FACT]** lo único verificable aquí son *límites de producto* (Sol vs Luna, 1M vs no, entorno con git, stealth).  
**[HYPOTHESIS]** las celdas de “calidad de razonamiento”. Donde no hay diferencia justificable → ⚪ o 🟡 igualados.

Leyenda: 🟢 fuerte · 🟡 adecuado · 🔴 no prioritario · ⚪ no evaluable / no aplica aún

ChatGPT = **Go / Luna**, no Plus/Sol. Codex = *posterior*, en Go sería Terra.

| Función | ChatGPT Go | Gemini Pro | Grok 4.6 | Ox/OpenCode | Cursor/Composer | Codex (luego) | Candidato principal |
|---|---|---|---|---|---|---|---|
| CEO / decir no | 🟡 redacta | 🟡 | 🟢 **hip.** crítica | 🔴 | 🔴 ejecuta | 🔴 | **Humano** + Grok como abogado del diablo |
| Estrategia / modelo de negocio | 🟡 | 🟡 | 🟢 **hip.** | 🔴 | 🔴 | 🔴 | Humano; Grok ataca; Gemini evidencia |
| Pricing / unit economics | 🟡 | 🟡 | 🟡 | 🔴 | 🔴 | 🔴 | Humano + números reales; ningún LLM |
| ICP / posicionamiento | 🟡 | 🟢 research | 🟢 crítica | 🔴 | 🔴 | 🔴 | Gemini evidencia + Grok corte |
| Marketing / content | 🟢 copy **hip.** | 🟡 | 🟡 | 🔴 | 🔴 | 🔴 | ChatGPT copy; Gemini SEO/research |
| CRO | 🟢 variantes | 🟡 | 🟢 ataque funnel | 🔴 | 🟡 impl. | 🟡 | Grok critica; ChatGPT redacta; Composer implementa |
| SEO | 🟡 | 🟢 **hip.** grounding | 🟡 | 🔴 | 🟡 técnico | 🟡 | Gemini + humano Search Console |
| Outbound / sales | 🟢 roleplay **hip.** | 🟡 | 🟡 | 🔴 | 🔴 | 🔴 | ChatGPT guion; humano llama |
| Brand / naming / story | 🟢 **hip.** | 🟡 | 🟡 | 🔴 | 🔴 | 🔴 | ChatGPT + humano |
| UX / UI / dirección visual | 🟡 | 🟢 visión **hip.** | 🟡 | ⚪ | 🟡 UI código | 🟡 | Gemini + humano; no un LLM “director de arte” |
| Design systems | 🟡 | 🟡 | 🟡 | 🟡 | 🟢 tokens en código **hip.** | 🟢 | Composer cuando haya repetición |
| Arquitectura técnica | 🔴 | 🟡 | 🟢 simplicidad **hip.** | 🟡 | 🟡 | 🟡 | Grok “qué no hay”; Composer/Codex construyen |
| Frontend | 🔴 | 🟡 | 🟢 | 🟢 **hip.** | 🟢 job | 🟢 | Composer diario; Ox pico; Codex luego |
| Backend / CRM propio | 🔴 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | **No construir** aún |
| DevOps / CI / perf | 🔴 | 🔴 | 🟡 | 🟡 | 🟢 **hip.** | 🟢 | Composer/Codex |
| Security | 🟡 | 🟡 | 🟡 | 🔴 datos | 🟡 | 🟢 **hip.** Sol | Humano; Codex/Sol cuando exista |
| AI architecture / agents | 🟡 | 🟡 | 🟢 “no agents yet” **hip.** | 🟡 | 🟢 tools | 🟢 | Grok frena; Composer ejecuta skills |
| Prompts / Skills | 🟢 redacción | 🟡 | 🟢 en Git | 🟡 | 🟢 | 🟢 | Git + Grok/Composer |
| MCP / RAG | 🔴 | 🟡 | 🟢 cuándo no | 🔴 | 🟡 | 🟡 | Nadie “lidera RAG” ahora |
| n8n / workflows | 🟡 | 🟡 | 🟢 | 🟡 | 🟢 | 🟢 | Composer/Grok sobre un workflow real |
| Agency OS / SOPs | 🟢 claridad | 🟡 | 🟢 en Git | 🔴 | 🟡 | 🟡 | Git; ChatGPT estila |
| Research / competidores | 🟡 | 🟢 1M+visión | 🟡 | ⚪ | 🔴 | 🔴 | **Gemini** |
| Datos / analítica | 🟡 | 🟡 | 🟡 | 🔴 | 🟡 | 🟡 | Spreadsheet hasta que duela |
| QA funcional | 🟡 | 🟡 | 🟡 | 🟡 | 🟢 | 🟢 | Composer + checklist; otro modelo revisa |
| Adversarial / riesgos | 🟡 | 🟡 | 🟢 **hip.** | 🔴 | 🔴 | 🔴 | **Grok**; segundo modelo distinto |
| Legal awareness | 🟡 | 🟢 docs largos | 🟡 | 🔴 | 🔴 | 🔴 | Gemini + abogado; ningún LLM dictamina |
| Fact checking | 🟡 | 🟢 search | 🟡 | 🔴 | 🔴 | 🔴 | Gemini + fuentes; humano |
| Orquestación de empresa | 🔴 Luna | 🟡 evidencia | 🟡/🟢 entorno Cursor | 🔴 | 🔴 | 🔴 | **Humano + Spec** |
| Coordinación de ejecución (repo) | 🔴 | 🔴 app | 🟢 entorno | 🟢 OpenCode | 🟢 Cursor | 🟢 luego | Modelo-en-IDE, no el chat |
| Contexto compartido | 🟡 memoria chat | 🟡 | 🟢 git tools | 🟡 | 🟢 | 🟢 | **Git**, no un modelo |

**[OPEN QUESTION]** Grok vs Gemini vs Sol (Plus) en *estrategia*: no hay benchmark público aplicable a “fábrica digital en español”. La matriz no resuelve eso; el benchmark de la sección 6 sí puede.

---

# 4. Director de Orquesta

### Qué tiene que hacer (de verdad)

No “ser el más inteligente”. Tiene que:

1. Guardar la partitura (Spec, decisiones, prohibiciones).
2. Recortar alcance.
3. Elegir especialista por tarea.
4. Detectar contradicciones entre modelos.
5. Distinguir hecho / hipótesis.
6. Decidir research vs build vs wait.
7. Rechazar outputs que alucinan cifras o testimonios.
8. No enamorarse de construir.

### Por qué 1M de contexto no basta

Una ventana enorme mejora **ingesta**. La orquestación falla por **criterio, incentivos y continuidad**:

- El modelo quiere ser útil → construye.
- El coding agent quiere cerrar la tarea → reward hacking (Cursor lo admite en Composer).
- El chat con memoria “recuerda” mal y no es auditable.
- Nadie resuelve un conflicto de pricing con más tokens.

### Evaluación por atributo (hipótesis + hechos de producto)

| Atributo | ChatGPT Go | Gemini Pro | Grok 4.6 | Ox Alpha | Composer | Codex luego |
|---|---|---|---|---|---|---|
| Razonamiento techo | 🔴 Luna | 🟡/🟢 | 🟢 **hip.** | ⚪ stealth | 🟡 coding | 🟢 si Sol |
| Planificación de empresa | 🟡 | 🟡 | 🟢 **hip.** | 🔴 | 🔴 | 🔴 |
| Síntesis de corpus | 🟡 | 🟢 1M | 🟡 | 🟢 1M **hip.** | 🟡 | 🟡 |
| Criterio / decir no | 🟡 | 🟡 | 🟢 **hip.** | 🔴 | 🔴 | 🔴 |
| Consistencia auditables | 🔴 chat | 🔴 chat | 🟢 si escribe Git | 🔴 | 🟢 Git | 🟢 Git |
| Crítica | 🟡 | 🟡 | 🟢 **hip.** | ⚪ | 🔴 | 🔴 |
| Incertidumbre (etiquetar) | 🟡 | 🟡 | 🟢 si se le pide | ⚪ | 🔴 | 🟡 |
| Trabajar con otros modelos | 🟡 | 🟡 | 🟢 entorno | 🟡 | 🟡 | 🟡 |
| Reconocer límites | 🟡 | 🟡 | 🟡 (este doc intenta) | 🔴 opaco | 🔴 | 🟡 |
| Entorno de orquestación | 🔴 | 🔴 | 🟢 Cursor | 🟢 OpenCode | 🟢 Cursor | 🟢 IDE |

**[RECOMMENDATION]** El “Director de Orquesta” se parte:

- **Orquestador soberano:** tú.
- **Orquestador de evidencia:** Gemini.
- **Orquestador de ejecución:** quien esté en Cursor con mandato de *escribir el spec, no el producto*.
- **Orquestador técnico del bucle de código:** Composer (o Codex/Ox en su momento), *subordinado* al spec.

Ninguno de los seis es, solo, las cuatro cosas.

---

# 5. ¿Uno o varios orquestadores?

### A — Un Director-modelo + especialistas

- Ventajas: simple, una voz.
- Inconvenientes: sesgo de ese modelo; el coding agent no debería ser CEO; el CEO-LLM no pica código bien.
- Complejidad: baja. Coste: bajo. Riesgo: **alto** (sobreingeniería o adulación). Coherencia: falsa coherencia. Escalabilidad: mala (un cuello).

### B — Director estratégico + director técnico

- Ventajas: el incentivo de “no construir” se separa del de “entregar el PR”.
- Inconvenientes: conflicto; hace falta un tie-break (tú o el spec).
- Complejidad: media. Coste: medio. Riesgo: medio. Coherencia: buena si Spec gana. Escalabilidad: la correcta para este proyecto.

### C — Todos colaborando entre sí

- Ventajas: cobertura.
- Inconvenientes: comité, coste, contradicciones no resueltas, teatro.
- Complejidad: alta. Coste: alto. Riesgo: alto. Coherencia: baja. Escalabilidad: pésima al inicio.

### D — Un principal que delega según la tarea

- Ventajas: flexible, se parece a un agente router.
- Inconvenientes: el router suele ser el que más habla, no el más sabio; Go no puede ser router; Ox no debe serlo; Composer routerá hacia código.
- Complejidad: media-alta. Riesgo: el principal se come el presupuesto. Coherencia: depende del spec.

### E — Humano + Spec orquestan; dos coordinadores de modelo; especialistas bajo demanda **(recomendada)**

```
TÚ  (sí/no, dinero, legal, clientes)
        ↓
   SiteSpec / decisions.md / playbook   ← ÚNICA partitura
        ↓
   ┌────────────┴────────────┐
   Coordinador evidencia     Coordinador ejecución
   (Gemini Pro)              (modelo-en-Cursor: Grok o Composer
                             según fase: pensar vs picar)
        ↓                           ↓
   Research, PDFs,           Spec → código → QA → deploy
   capturas, SEO
        ↓
   ChatGPT Go: copy y ventas
   Ox Alpha: pico coding sin PII (esta semana)
   Codex: cuando el plan lo permita (no Go/Luna como cerebro)
```

- Ventajas: incentiva “no construir”; auditable; modelos intercambiables; Ox y Go no gobiernan.
- Inconvenientes: disciplina humana (pegar el paquete de contexto); dos coordinadores pueden pelear.
- Complejidad: media (proceso, no software). Coste: el de los planes que ya tienes. Riesgo: bajo-medio. Coherencia: la del Git. Escalabilidad: el flywheel real.

**[RECOMMENDATION]** E. Si hay que simplificar a una etiqueta: es **B con Spec como tie-break y tú por encima**, no A ni C.

**No construir** un “meta-agente orquestador” ahora. Eso es el Agency OS por la puerta de atrás.

---

# 6. Benchmark (8–12 pruebas iguales)

Reglas anti-sesgo:

- Mismo prompt, mismo material, mismo límite de palabras (p. ej. 400–700).
- Puntuación **ciega**: un humano no ve la firma del modelo.
- Penalizar longitud, cifras sin fuente, y “sí, construye la fábrica”.
- No uses este documento como rubric oculta para que “gane Grok”.
- Coding: repo limpio, **sin datos de cliente**, tests objetivos.

Escala 0–5 por criterio. Ganador = mediana de 2 evaluadores si es posible (tú + un extraño).

### P1 — Estrategia (recorte)

**Prompt:** “Esta empresa quiere vender webs, CRO, SEO, CRM, IA, templates y software. En 500 palabras: qué vender los 90 primeros días y qué matar. Etiqueta hechos vs hipótesis.”  
**Mide:** decir no, priorización.  
**Éxito:** ≤2 ofertas; mata marketplaces y OS.  
**Errores:** menú completo; “todo es sinergia”.  
**Sesgo:** no premiar tono agresivo; premiar recorte accionable.

### P2 — Business / unit economics

**Prompt:** “Clínica de estética, ticket implante/tratamiento X (deja X vacío: el modelo debe pedir el número). Diseña el marco de precio del sistema de captación. Prohibido inventar CPL o LTV.”  
**Mide:** no inventar datos; marco.  
**Éxito:** pide números; da ecuación; no precio mágico.  
**Errores:** “el precio razonable es 2.500 €”.

### P3 — Product / SiteSpec

**Prompt:** “Lista los campos mínimos de un SiteSpec v1 para una landing de un tratamiento. Máx. 25 campos. Justifica cada exclusión.”  
**Mide:** product sense, no ontología infinita.  
**Éxito:** intake usable; legal/consentimiento presentes; no ‘design system tokens’ de más.  
**Errores:** schema de 200 campos.

### P4 — Research

**Prompt:** (adjuntar 6 capturas reales de competidores del ICP). “Patrones de conversión y 5 huecos. Cita solo lo visible. No inventes tráfico.”  
**Mide:** evidencia.  
**Éxito:** observaciones concretas (CTA, teléfono, reviews).  
**Errores:** “según estudios, el 80%…”.  
**Sesgo:** Gemini puede ganar por visión; eso es dato, no trampa.

### P5 — Marketing / sales

**Prompt:** “Mensaje de WhatsApp de 500 caracteres a un dueño cuya web no tiene click-to-call. Sin palabrería de IA. Una pregunta.”  
**Mide:** outbound real.  
**Éxito:** específico, humano, una CTA.  
**Errores:** “revolucionamos tu presencia digital”.

### P6 — CRO

**Prompt:** “Home actual: [pegar copy]. Propón UN cambio. Predice qué métrica movería y cómo la medirías en 14 días. Si no se puede medir, dilo.”  
**Mide:** disciplina experimental.  
**Éxito:** un cambio, una métrica.  
**Errores:** 12 rediseños.

### P7 — Brand

**Prompt:** “Nombra 5 direcciones creativas (no nombres de empresa) para un sistema de captación de [ICP], cada una en una frase. Luego recomienda una y por qué las otras mienten.”  
**Mide:** criterio, no brainstorm infinito.

### P8 — Arquitectura técnica

**Prompt:** “¿Construimos generador de webs, Agency OS, RAG y CRM en el mes 1? Responde con build / wait y un starter mínimo en 10 viñetas de implementación **conceptual** (no código).”  
**Mide:** cuándo no programar.  
**Éxito:** wait en OS/RAG/CRM; build starter+spec+lead alert.  
**Errores:** diagrama de microservicios.

### P9 — Coding (solo entornos con repo: Grok, Composer, Ox, Codex)

**Prompt:** “Landing estática: hero, prueba social, form POST a endpoint mock, evento `lead_submit`, texto legal de consentimiento separado. Tests del form. No inventes stack extra.”  
**Mide:** entrega, no arquitectura.  
**Éxito:** tests pasan; pocos archivos; consentimiento no mezclado.  
**Errores:** auth, CMS, agents.  
**Ox:** repo dummy, sin PII.

### P10 — Automation

**Prompt:** “Diseña el workflow: form → aviso interno <2 min → si no hay respuesta humana en 15 min, recordatorio. Lista fallos (duplicados, fuera de horario, RGPD, WhatsApp).”  
**Mide:** operaciones reales.  
**Éxito:** más fallos que nodos de moda.

### P11 — QA adversarial

**Prompt:** (pegar un copy generado por otro modelo, anónimo). “Encuentra claims ilegales/inventados, SEO vacío y CTA débiles. No reescribas entero; lista fallos.”  
**Mide:** crítica al otro, no ego.  
**Éxito:** fallos concretos.  
**Sesgo:** rotar quién es el autor.

### P12 — Orquestación

**Prompt:** “Tienes a Gemini, ChatGPT Go, Composer y Ox. El fundador quiere ‘esta semana el Agency OS y 20 templates’. Plan de 7 días con delegación. Máx. 600 palabras.”  
**Mide:** delegar, recortar, no-build.  
**Éxito:** 0 días de OS; conversaciones con ICP; un starter; Ox sin datos de cliente; Go no es cerebro.  
**Errores:** “que cada modelo lidere su área en paralelo”.

---

# 7. Evaluación del propio modelo (Grok 4.6)

### Dónde *podría* ser mejor

**[HYPOTHESIS], no benchmark:**

- Crítica / “no construyas” / recortar el menú de la agencia.
- Juntar negocio + tech en un mismo hilo sin convertirlo en un pitch.
- Etiquetar incertidumbre si se le pide el protocolo FACT/HYPOTHESIS.
- Coordinación de **ejecución en Cursor** (herramientas), no por ser más listo.
- Arquitectura de “mínimo”: spec, starter, no plataforma.

### Dónde *otro podría* ser mejor

- **Gemini Pro:** corpus, PDFs, vídeo, fotos del local, 1M, grounding. Research y dirección visual *de evidencia*.
- **ChatGPT (Sol, no Go):** copy, tono, roleplay, a veces síntesis “para humanos”. Go puede seguir ganando en *estilo comercial* frente a mí; no lo sé sin P5. **No** en techo de razonamiento.
- **Composer:** bucle diario de código, coste, latencia, multi-archivo. Es su trabajo. Yo debo ceder implementación rutinaria.
- **Ox Alpha:** lecturas enormes de repo y picos de coding **si** el stealth aguanta y sin PII. ⚪
- **Codex + Sol (Plus):** engineering/security cuando exista. Go/Terra no equivale a eso.
- **Un diseñador humano:** cualquier cosa que se vea.

### Dónde no hay evidencia

Head-to-head en español de dueño de clínica, CRO real, SEO local España, n8n, “sabor” de marca, Grok vs Sol vs Gemini 3.x en estrategia. La matriz de la sección 3 **no** sustituye P1–P12.

### Qué NO debería liderar

- Dirección de arte / UI final.
- Análisis de vídeo y “¿esta clínica parece premium?” (Gemini).
- Dictamen legal/RGPD/ads sanitarios.
- Copy cliente-final sin pasar por ChatGPT o por ti.
- Ser el CEO.
- Ser el orquestador soberano.
- RAG, CRM, generador, Agency OS.
- Cualquier cosa cuyo éxito sea un número que yo no puedo medir (CPL del cliente).

**[RECOMMENDATION]** Ni siquiera me asignes “estratega principal” hasta que P1 y P12 se ejecuten a ciegas. Puedo ser el mejor *abogado del diablo* y un mal *decisor* si te cansas y me dejas gobernar.

---

# 8. Fuente de verdad

| Capa | Qué es | Dónde | No es |
|---|---|---|---|
| **SOURCE OF TRUTH** | Lo que, si choca, gana | Git: `playbook`, `sitespec.schema`, `decisions.md`, código del starter, contratos en carpeta legal | Memoria de ChatGPT, un chat de Gemini, “Grok dijo” |
| **KNOWLEDGE BASE** | Aprendizajes, objeciones, copies que funcionaron, post-mortems | Git y/o Obsidian **espejo del mismo contenido** | RAG hasta tener decenas de casos |
| **PROJECT STATE** | Este cliente, ahora: spec incompleto, leads, fase, accesos | `clients/<id>/` en Git + hoja/DB de leads cuando existan | El hilo de ayer |
| **EXECUTION ENVIRONMENT** | Dónde se pica y se despliega | Cursor, OpenCode, Vercel, n8n | El orquestador |

**MCP:** puerto a tools (git, vercel), no cerebro.  
**RAG:** índice sobre la source of truth **cuando grep duela**.  
**Archivos de contexto / “memoria”:** caché. Si no está en Git, no ocurrió.

Paquete que se pega a **todos** los modelos (anti-silo):

1. ICP + oferta (1p).  
2. SiteSpec (aunque incompleto).  
3. `decisions.md`.  
4. Prohibiciones (claims, testimonios, cifras).

**[RECOMMENDATION]** Obsidian como UI, Git como master. Si diverge, gana Git.

---

# 9. Decisión provisional

## TOP 5 por función (provisional, pre-benchmark)

1. **Evidencia / research / visión:** Gemini Pro  
2. **Crítica / recorte / spec / “no build”:** Grok 4.6 *(hipótesis; validar P1/P8/P12)*  
3. **Copy / ventas / tono:** ChatGPT Go *(estilo; no techo de razonamiento)*  
4. **Código diario:** Cursor Composer  
5. **Código pico / repo enorme:** Ox Alpha ahora; Codex (Sol) cuando el plan lo permita  

Humano encima de todos. Pricing y legal: humano.

## Candidato a Director de Orquesta

**Ningún modelo.**  
Si insistes en un título de modelo:

- **Soberano:** tú  
- **Evidencia:** Gemini Pro  
- **Ejecución / scribe:** modelo-en-Cursor (Grok 4.6 para fases de decisión; Composer para fases de implementación)  
- **No nominados:** ChatGPT Go, Ox Alpha, Composer-como-CEO, Codex-en-Go  

## Arquitectura recomendada

**E** (humano + spec; coordinador de evidencia + coordinador de ejecución; especialistas bajo demanda). Es B con tie-break explícito.

## Capability matrix

Sección 3. Tratar 🟢 de Grok como **hipótesis**.

## Benchmark definitivo

P1–P12, ciegos, límite de palabras, coding en repo dummy. No declarar roles permanentes hasta puntuar.

## Principales incertidumbres

- Grok vs Gemini vs Sol (Plus) en estrategia.  
- Si ChatGPT Go gana copy a Grok/Gemini en español de dueño.  
- Si Composer > Grok > Ox en el starter real.  
- Qué Gemini “Pro” tienes (2.5 vs 3.x) y ventana efectiva en la app.  
- Fecha de muerte de Ox Alpha y quién es el lab.  
- Si Codex llegará en Go (Terra) o forzarás Plus.

## Riesgos de esta arquitectura

- Tú dejas de ser el soberano y “Grok decide”.  
- Composer construye el OS porque puede.  
- Se usa Go como si fuera Sol.  
- Ox ve datos de cliente.  
- Comité de 5 modelos (arquitectura C de facto).  
- Spec no se actualiza → cada chat es un universo.

## Qué no sabemos todavía

Cualquier ranking de “inteligencia general”. Calidad real de Luna vs Grok 4.6 en tus tareas. Si el flywheel necesita orquestación de software o solo disciplina. El ICP ganador (eso no lo resuelve ningún modelo).

---

## Qué haría esta semana (sin agentes permanentes)

1. Ejecutar P1, P5, P8, P12 en los cuatro chats (Go, Gemini, Grok, Ox). Ciego.  
2. Ejecutar P9 en Composer vs Grok vs Ox (repo dummy).  
3. Congelar roles **solo** tras eso.  
4. Hasta entonces: Gemini para mirar competidores; ChatGPT para mensajes; Cursor para no construir la fábrica; tú para llamar a 20 dueños.

**[RECOMMENDATION]** El error simétrico al “Grok es el director” es “hagamos un orquestador multiagente”. Ambos evitan el trabajo que sí predice el negocio: conversaciones y un sistema de captación repetible.
