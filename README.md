# Myweb — negocio de webs de conversión + automatizaciones

**Fuente única de verdad** del negocio: estrategia, oferta, playbooks, decisiones y el **código de la web propia**.
Desde 2026-09-30 incluye el antiguo `WEB_DEV/DEV-BUSINESS-PLAYBOOK` (archivado en `factory/archive/`).

> Otros repos (24Shoots, etc.) son **proyectos distintos** y no se mezclan con este.

## Empieza aquí

| Si quieres… | Lee |
|-------------|-----|
| Saber qué hacer en tu próxima sesión | [Roadmap por etapas](factory/docs/playbooks/ROADMAP.md) → "Siguiente paso" |
| Montar la empresa (marca, autónomo, facturas, RGPD) | [Puesta en marcha](factory/docs/strategy/PUESTA_EN_MARCHA_EMPRESA.md) |
| Saber qué vendes y a qué precio | [Oferta y precios](factory/docs/strategy/OFERTA_Y_PRECIOS.md) |
| Conseguir las primeras conversaciones | [Outbound](factory/docs/playbooks/OUTBOUND.md) |
| Editar y publicar tu web | [web/README.md](web/README.md) |
| Entender el estado y los problemas detectados | [Auditoría 2026-09-30](factory/docs/audit/AUDITORIA_2026-09-30.md) |
| Saber qué está decidido y qué NO se construye | [Decision Log](factory/decisions/DECISION_LOG.md) |
| Arrancar un agente de IA con contexto | [Prompt de inicio](factory/docs/playbooks/INICIO_NUEVO_AGENTE.md) |

## Estructura

```
web/                          Web propia: Astro + Tailwind, desplegada en Cloudflare
├── src/content/site.ts       ← todos los textos, precios y datos (edita aquí)
└── worker/index.ts           Formulario → Turnstile → Resend (Cloudflare Worker)

factory/                      ← ábrelo como vault de Obsidian
├── docs/
│   ├── audit/                Auditorías
│   ├── context/              Visión, fundador, activos
│   ├── strategy/             Oferta, precios, web propia, puesta en marcha
│   ├── playbooks/            Roadmap, outbound, discovery, Instagram, automatizaciones
│   ├── learnings/            Retrospectivas post-cliente
│   └── factory/              SiteSpec (archivado)
├── decisions/                Decision Log + decision records
├── spikes/                   Informes de IA históricos (sin spikes nuevos)
└── archive/                  Originales importados, sin modificar
```

## Stack

Astro + Tailwind + TypeScript · Cloudflare (hosting, DNS, analítica sin cookies, Turnstile, Email Routing) · Resend (email) · GitHub.
