# Captación de clientes — modelo asíncrono (sin llamadas)

> **Estado:** HYPOTHESIS. Mide y ajusta.  
> **Decisión:** [modelo asíncrono](../../decisions/2026-09-30-modelo-asincrono.md). Nada de auditorías manuales ni llamadas obligatorias: el cliente **se configura el presupuesto solo** en `/presupuesto` y todo va por escrito.  
> Sustituye a la versión anterior (auditoría + DMs + llamadas), que se puede consultar en el historial de git.

## 0. El embudo

```
Te encuentran (inbound)  ─┐
Reciben su demo (QR)     ─┼─► web ─► /presupuesto ─► email a Solidum ─► propuesta por email
Les recomiendan          ─┘                                              │
                                   pago 50 % ◄─────────────────────────┘
                                      │
                         formulario de contenido ─► enlace de prueba ─► publicación ─► mantenimiento
```

**Tu trabajo manual por cliente:** revisar el brief, enviar la propuesta (plantilla), construir y publicar. Nada más.

## 1. Inbound: que te encuentren (automático una vez montado)

| Canal | Qué hacer | Esfuerzo |
|-------|-----------|----------|
| **Ficha de Google de Solidum** | Crear el perfil de empresa: categoría "Diseñador de sitios web", servicios, fotos y enlace a `/presupuesto` | 1 h, una vez |
| **SEO de la web** | Fase 2: páginas por servicio y por sector (`/webs-para-restaurantes`…) que respondan a lo que la gente busca | Progresivo |
| **Instagram / LinkedIn** | Publicar casos, demos y "cuánto cuesta una web", siempre con el enlace al configurador | 1–3 posts por semana |
| **Anuncios** (opcional) | Google Ads con "diseño web [ciudad]" y destino `/presupuesto`. Empezar con 5 €/día y medir | Presupuesto diario |
| **Directorios** | Perfiles en directorios de freelancers y agencias con enlace | 1 h, una vez |

## 2. Negocios sin web: "te enviamos tu demo"

La prueba de la que hablas: **el negocio recibe una demo de su propia web**, sin que tengas que hablar con él.

### Paso a paso

1. **Encontrar negocios sin web.**
   - Manual: en Google Maps, fichas **sin botón "Sitio web"**, con **≥10 reseñas** y **nota ≥4,0**. Descarta cadenas.
   - Automático (fase 2): un script con la **API oficial de Google Places** que busca por categoría y ciudad y filtra los que no tienen web. **No hagas scraping de Maps**, va contra sus condiciones.
2. **Generar la demo.** Una landing con su nombre, su sector y sus servicios, publicada en una URL privada y no indexada (p. ej. `demo.solidumdigital.com/bar-pepe`).
   - Hoy se hace duplicando `web/` a mano, en unos 30–60 min.
   - Fase 2: un **generador de demos** que la cree sola a partir de nombre, sector y ciudad.
   - Sin sus fotos ni su logo, y marcada como "Demo".
3. **Hacérsela llegar de forma legal:**
   - ✅ **Carta o tarjeta postal** con un QR a su demo y a `/presupuesto`. Es legal, llama la atención y no requiere hablar.
   - ✅ **Dejarla en mano** en el local: un sobre con la tarjeta, sin conversación.
   - ⚠️ Formulario de contacto de su web (si tiene), de uno en uno y personalizado.
   - ❌ **Email, WhatsApp o DM masivos o automáticos en frío.** La LSSI (art. 21) prohíbe las comunicaciones comerciales electrónicas no solicitadas, también a empresas.
4. **El negocio entra en su demo**, pulsa "Quiero esta web", va a `/presupuesto` y el embudo sigue solo.

### Texto de la tarjeta (ejemplo)

> **[Negocio], así podría ser vuestra web.**
> Os hemos preparado una demo gratuita: escanead el QR y vedla en el móvil.
> Si os gusta, calculad el precio en 1 minuto, sin llamadas ni compromiso.
> — Solidum Digital · solidumdigital.com

Coste: unos 0,70–1,50 € por envío postal (tarjeta + sello). **Mide:** escaneos del QR (añade `?ref=postal-<id>` a la URL) → presupuestos → ventas.

## 3. Colaboradores (recomiendan por ti)

Gestorías, fotógrafos, agencias de redes sin desarrollador e imprentas: tienen clientes que necesitan web.
- Les das un enlace propio (`/presupuesto?ref=gestoria-x`) y una **comisión del 10–15 %** por cliente cerrado.
- Contáctalos por correo postal, en persona o por su formulario. Es una relación B2B de uno en uno, no una campaña masiva.

## 4. Registro y métricas

Tabla fuera del repo (Notion o una hoja), sin datos sensibles:

| Fecha | Negocio | Sector | Canal (inbound / postal / colaborador / anuncio) | ref | ¿Visitó la demo? | ¿Pidió presupuesto? | Estado |
|-------|---------|--------|---------------------------------------------------|-----|------------------|---------------------|--------|

Cada semana:
- Visitas a `/presupuesto` (Web Analytics)
- Presupuestos recibidos (emails)
- Propuestas aceptadas
- Coste por cliente, por canal

**Tras unos 30 presupuestos:** mira qué **sector** y qué **canal** convierten mejor. Ahí concentras el esfuerzo, y lo registras en un decision record.
