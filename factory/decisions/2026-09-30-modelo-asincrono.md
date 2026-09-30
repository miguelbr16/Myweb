# 2026-09-30 — Modelo de venta asíncrono (sin llamadas) y marca Solidum Digital

> **Estado:** DECIDED (fundador, 2026-09-30)  
> **Relacionado:** [DECISION_LOG.md](./DECISION_LOG.md) · [OUTBOUND.md](../docs/playbooks/OUTBOUND.md) · [OFERTA_Y_PRECIOS.md](../docs/strategy/OFERTA_Y_PRECIOS.md)

## DECISIÓN

1. **Marca: Solidum Digital** (`solidumdigital.com`; `solidumlabs.com` como posible dominio defensivo o para una línea de producto). Posicionamiento: empresa seria de tecnología para clientes de cualquier tamaño, del pequeño comercio a la gran empresa. Se habla en **plural ("nosotros")**.
2. **Venta asíncrona y self-service.** El fundador no quiere auditorías manuales ni llamadas. El embudo es:
   `web → configurador /presupuesto (precio orientativo al instante) → email con el brief al fundador → propuesta por email → pago del 50 % → formulario de contenido → enlace de prueba → publicación`.
   Las llamadas son opcionales, nunca obligatorias.
3. **Catálogo completo de servicios** en la web (visión de Myweb §1 + WEB_DEV): webs y landings, automatización, IA, SEO y Google, datos y analítica, mantenimiento y crecimiento.
4. **El presupuestador sale de DO NOT BUILD** (X-17 → P-11). Con este modelo es el núcleo del proceso de venta, no un extra. Versión 1: reglas en `web/src/content/pricing.ts`, sin base de datos y con todo por email.
5. **Captación sin conversación:** inbound (web, SEO, ficha de Google, Instagram) + **demo personalizada** para negocios sin web, enviada por **canales legales** (ver consecuencias).

## CONTEXTO

- El fundador prefiere no hablar con clientes y quiere automatizar al máximo.
- El outbound anterior (auditoría manual + DMs + seguimiento) exige conversación, así que se sustituye.

## ALTERNATIVAS RECHAZADAS

- **Auditorías manuales y llamadas de descubrimiento:** van contra la preferencia del fundador.
- **Campañas automáticas de email, WhatsApp o DM en frío a negocios:** ver RISK legal.

## CONSECUENCIAS

- **[RISK legal] LSSI art. 21:** en España están prohibidas las comunicaciones comerciales por email **o medios electrónicos equivalentes** (SMS, WhatsApp…) que no se hayan solicitado ni autorizado, **también cuando el destinatario es una empresa**. La AEPD sanciona. Por eso **no se automatiza el envío en frío** por email, WhatsApp ni DM. Canales válidos para llegar a quien no te conoce:
  - Correo postal o flyer con un QR a su demo.
  - Visita presencial.
  - Anuncios (Google o Meta).
  - SEO y ficha de Google propia.
  - Colaboradores que recomiendan.
  - Formularios de contacto de la web del negocio, con prudencia y de uno en uno.
- **[RISK] Google Maps:** extraer datos de Maps con scraping va contra sus condiciones de uso. Para automatizar la búsqueda de negocios sin web se usa la **API oficial de Google Places**, que tiene cuota gratuita y es de pago al superarla.
- **[RISK comercial]** Un embudo 100 % automático convierte peor con negocios pequeños que no te conocen. Se compensa con **prueba**: la demo personalizada, casos y la transparencia de precios.
- Las empresas grandes suelen exigir una reunión. La opción «Proyecto a medida» deja esa puerta abierta sin imponerla.

## ETIQUETAS

- **FACT:** el configurador `/presupuesto` está implementado y probado en local (2026-09-30).
- **HYPOTHESIS:** los precios del configurador son hipótesis; se ajustan con las horas reales del primer cliente (C1).
- **HYPOTHESIS:** la demo personalizada enviada por correo postal con un QR genera más respuesta que una web genérica.
- **RISK:** textos legales y comunicaciones comerciales. Revisar con un asesor antes de lanzar campañas.

## REVISIÓN RED TEAM

N/A. La decisión es del fundador.
