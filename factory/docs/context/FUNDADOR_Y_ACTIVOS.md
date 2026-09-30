# Fundador y activos existentes

> **Fuente:** `archive/web_dev_playbook_2026-07-07/CONTEXTO-NEGOCIO-PROPIO.txt` + `00-PLAN-MAESTRO.txt`  
> Complementa [DIGITAL_FACTORY_CONTEXT.md](./DIGITAL_FACTORY_CONTEXT.md), que no incluía esta información.

## Perfil

- **[FACT]** Científico de datos con perfil técnico.
- **[FACT]** Desarrollador web en práctica (Next.js, TypeScript, Tailwind).
- **[FACT]** Trabaja desde España. Objetivo: clientes locales y en remoto.
- **Diferencial:** perfil híbrido de datos y desarrollo que **mide y optimiza**, no solo diseña.

## Qué quiere vender

1. **Webs y landings orientadas a conversión:** útiles, rápidas, con SEO base, mobile-first y fáciles de mantener.
2. **Automatizaciones:** captura de leads, brief automático, presupuestos por reglas y reporting mensual.
3. **Herramientas propias (futuro):** CRM ligero, presupuestador, panel de proyectos y plantilla clonable.

## Qué NO quiere (al inicio)

- WordPress pesado para todo.
- Depender de un CMS de pago para cada cliente.
- Prometer SEO milagroso en una semana.
- Apps móviles nativas.
- Automatizaciones complejas antes de tener 3 clientes reales.

## Activos existentes

| Activo | Estado | Riesgo |
|--------|--------|--------|
| **Plantilla web** (Next.js 15 + Tailwind + TS + JSON + i18n, `npm run new-site`) | Funciona, nació con 24Shoots | 🔴 **No está en un repo propio**: vive dentro de la carpeta del cliente |
| API `/api/contact` + log + WhatsApp flotante | En la plantilla | Falta el email transaccional (Resend) |
| **Cliente 24Shoots Media** (productora audiovisual) | Entrega en curso a 2026-07-07; **estado actual desconocido en el repo** | Documentar si está entregado y si se puede usar como caso |
| Playbook comercial (oferta, discovery, Instagram) | Migrado a `docs/strategy/` y `docs/playbooks/` | — |
| Documentación de gobierno (freeze, decision log) | En este repo | — |

## Stack

| Capa | Elección | Estado |
|------|----------|--------|
| Frontend | Next.js + Tailwind + TypeScript | P-06 (propuesto) |
| Contenido | JSON (`config/site.json`, `content/es`, `content/en`) | P-06 |
| Hosting | Vercel (gratis al inicio) | En uso |
| Repo | GitHub | En uso |
| Email | Resend (gratis hasta ~3.000/mes) | P-07 (propuesto) |
| DB | Postgres (Supabase o Neon) | 🔒 X-16 hasta que se cumpla el trigger |

## Separación de contextos

- **24Shoots** = entrega a cliente (repo y conversación propios).
- **Este repo** = marca propia, factory y negocio.
- La plantilla nació con 24Shoots, pero es del fundador y se reutiliza **sin datos del cliente**.
