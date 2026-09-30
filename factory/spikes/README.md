# spikes/

## Propósito

**Experimentos temporales** con fecha de caducidad: pruebas de concepto, benchmarks multimodelo, validación de schema SiteSpec, prototipos desechables.

El output útil se promueve a docs/specs/decisions; el resto se archiva o elimina.

## Qué debe vivir aquí

- Informes de spike (`YYYY-MM-DD-<tema>.md`)
- Resultados de benchmarks (p. ej. MULTIMODEL BENCHMARK)
- Notas de Ox Alpha / OpenCode (acceso temporal)
- Conclusión: **promover** | **descartar** | **repetir**

## Qué NO debe vivir aquí

- Código de producción
- Dependencias npm / repos inicializados
- Spikes sin conclusión ni fecha
- Decisiones finales sin Decision Record en `decisions/`

## Estado actual

**[FACT]** Contiene `OPEN_CODE_ARCHITECTURE_SPIKE.md` y `GEMINI_FINAL_REVIEW_V0.1.md`. `GROK_RED_TEAM_V0.1.md` se cita en otros documentos pero **nunca se commiteó**.

**[DECISION]** No hay spikes nuevos hasta que se entregue C1 (Architecture Freeze §10).
