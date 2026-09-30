# Prompt de inicio para un agente nuevo (Cursor, Claude, etc.)

> Sustituye a `archive/web_dev_playbook_2026-07-07/INICIO-NUEVO-AGENTE.txt`.

Copia esto al abrir un chat o agente nuevo:

```text
Este repo (Myweb) es la ÚNICA fuente de verdad de mi negocio de webs de conversión
y automatizaciones. No es el proyecto del cliente 24Shoots.

Lee en este orden:
1. README.md (raíz)
2. factory/docs/context/FUNDADOR_Y_ACTIVOS.md
3. factory/decisions/DECISION_LOG.md  (sobre todo DO NOT BUILD y V0.2)
4. factory/docs/strategy/OFERTA_Y_PRECIOS.md
5. factory/docs/playbooks/ROADMAP.md

Reglas:
- Si algo está en DO NOT BUILD, no lo propongas sin un trigger cumplido.
- Separa siempre MVP / Fase 2 / Fase 3.
- Prioridad: vender y entregar > construir infraestructura.
- Ninguna decisión nueva sin un decision record en factory/decisions/.
- Nada de datos personales de leads ni secrets en el repo.
- Etiqueta las afirmaciones: FACT / ASSUMPTION / HYPOTHESIS / RISK.

Tarea de hoy: <describe la tarea>
```
