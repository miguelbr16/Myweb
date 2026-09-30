# Prioridad de automatizaciones — V0.2

> **Fuente:** `archive/web_dev_playbook_2026-07-07/roadmap/02-AUTOMATIZACIONES-PRIORIDAD.txt`, ajustado al freeze.  
> **Regla:** no automatizar antes de 3 repeticiones documentadas ([contexto](../context/DIGITAL_FACTORY_CONTEXT.md) §10).

## Nivel 0: ya existe (plantilla 24Shoots)

- [x] Formulario web → `/api/contact`
- [x] Log del envío en el servidor
- [x] WhatsApp flotante
- [x] Contenido editable en JSON
- [x] Script para clonar la web: `npm run new-site`

## Nivel 1: AHORA (4–6 h), dentro de V0.1

- [ ] Resend: email de acuse al lead + email de aviso al fundador
- [ ] Plantillas de email reutilizables (`emails/lead-received.tsx`, `emails/lead-notification.tsx`)
- [ ] `.env.example` documentado (`RESEND_API_KEY`, `CONTACT_TO`), **nunca** `.env.local` en git
- [ ] Protección anti-spam (honeypot + rate limit)
- [ ] Sin datos sensibles en los logs del servidor (D-05)

Archivo principal: `src/app/api/contact/route.ts`

Registro de leads mientras no haya CRM: **una tabla manual** (Notion o una hoja) con nombre, origen, servicio, estado y fecha. Cuesta 2 minutos por lead.

## Nivel 2: CRM mínimo · 🔒 bloqueado (X-16)

**Trigger:** C1 entregado **y** (≥3 clientes **o** ≥30 leads/mes).

- Tabla de leads (Postgres en Supabase o Neon)
- Campos: id, name, email, phone, service, message, status, source, created_at
- Estados: nuevo → contactado → propuesta → cerrado / perdido
- Panel protegido con **autenticación real** (X-19), nunca con "password simple"
- Política de retención y registro de actividades de tratamiento (RGPD)

Estimación: 8–12 h

## Nivel 3: presupuestador · 🔒 bloqueado (X-17)

**Trigger:** C1 entregado + precios revisados con horas reales.

- `config/pricing-rules.json`
- Página `/presupuesto`: tipo de negocio, páginas, idiomas y extras → rango en €
- Doble uso: herramienta interna y **lead magnet** en la web

Estimación: 10–15 h

## Nivel 4: seguimiento · 🔒 bloqueado (X-18)

- Recordatorio de leads sin respuesta en 48 h
- PDF de propuesta desde plantilla
- Dashboard: leads por semana, por estado y por origen

Estimación: 12–16 h

## No construir (esperar demanda real)

Chatbot IA complejo · portal de cliente multi-tenant · API de publicación de Instagram · facturación integrada · app móvil · n8n (O-08).

## Build vs buy

| Construir | Comprar o externalizar |
|-----------|------------------------|
| Flujo lead → seguimiento → propuesta (cuando toque) | Dominio, hosting/CDN |
| Presupuestador por reglas (cuando toque) | Email transaccional (Resend) |
| Plantillas de email y PDF | Pasarela de pago · textos legales definitivos (asesoría) |
