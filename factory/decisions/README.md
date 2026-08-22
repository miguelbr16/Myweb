# decisions/

## Propósito

**Decision Records** — decisiones significativas en formato corto, enlazable desde Obsidian y versionado en Git.

Complementa ADRs técnicos con decisiones de negocio, proceso, IA/orquestación y priorización.

## Formato sugerido

Archivo: `YYYY-MM-DD-<slug>.md`

Contenido mínimo:

- **DECISIÓN**
- **CONTEXTO**
- **ALTERNATIVAS RECHAZADAS**
- **CONSECUENCIAS**
- **ETIQUETAS** (FACT / ASSUMPTION / HYPOTHESIS / RISK)
- **REVISIÓN RED TEAM** (pendiente | hecha | N/A)

## Qué debe vivir aquí

- Decisiones aprobadas por el fundador
- Resultado de sintesis Gemini + critique Grok (resumen, no chats completos)
- Decisiones que desbloquean o bloquean implementación

## Qué NO debe vivir aquí

- Chats completos de modelos IA
- Specs técnicas largas → `docs/architecture/` o ADRs
- Borradores sin fecha ni decisión explícita
- Decisiones arquitectónicas marcadas como “aceptadas” sin Red Team cuando aplique

## Regla

**[RECOMMENDATION]** No code without Decision Record (cuando exista fase de implementación).
