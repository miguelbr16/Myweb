# Director de orquesta — decisión Chat vs Gemini

**Pedido del fundador:** un modelo que ayude con las decisiones y coordine el resto. Candidatos: ChatGPT o Gemini.  
**Fecha:** 22 agosto 2026.  
**Sesgo:** lo escribe Grok 4.6. No me autoasigno este asiento.

---

## Veredicto

**Director adjunto (decisiones): Gemini.**  
**Autoridad final: tú.**  
**ChatGPT Go: voz comercial, no la batuta.**

“Director de orquesta” aquí significa **chief of staff**: te propone qué hacer esta semana, qué no construir, qué pedirle a cada modelo, y deja la decisión en una línea. No significa que firme el precio, el contrato ni el mensaje al cliente.

Si el Gemini que usas es **Flash** (el de DF01), es un director *provisional*. Si tienes **Gemini Pro / AI Pro** (1M de contexto, PDFs, capturas), ese es el asiento correcto. No subas a Flash a CEO.

---

## Por qué Gemini y no ChatGPT Go

| Criterio | Gemini | ChatGPT Go |
|---|---|---|
| Lo que pediste (ayudarte a decidir con info incompleta) | Fuerte: research, corpus, intake, specs. 4/5 en DF01 lo pusieron ahí | Fuerte en explicar y estructurar; débil como recorte |
| Producto que pagas | Pro (si lo tienes) es el techo de Google en la app | **[FACT]** Go no incluye GPT-5.6 Sol; Think usa **Luna**. [Help ChatGPT Go](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go) |
| Autoevaluación en DF01 | Se puso en contexto/SiteSpec (coherente) | Se autoasignó estrategia/product/CRO y **él mismo** dijo que no está demostrado como Director |
| Error visible en DF01 | Inventó “duplicar conversión móvil en <10 días” | Empujó más fábrica (design system, QA auto) de la que el resto recortó |
| Encaje con Composer | Composer: Gemini redacta el brief → humano → código | Composer: ChatGPT = móvil / objeciones, no arquitectura |

**[RECOMMENDATION]** No pongas Luna a dirigir la empresa. Si más adelante pasas a **ChatGPT Plus (Sol)**, se reabre el asiento. Hoy, entre *chat* y *gemini* con lo que tienes, gana Gemini.

---

## Qué hace el director adjunto (y qué no)

**Hace**

1. Abrir el día: 3 prioridades, 1 cosa que no se construye, 1 conversación de venta o de ICP.
2. Decir a quién mandar cada pieza: Gemini (él mismo) investiga; ChatGPT redacta; Grok critica si hay dinero/claim; Composer construye.
3. Obligar a etiquetar **[FACT] / [HYPOTHESIS] / [DECISION]**. Si no hay dato, el output es un experimento, no una cifra.
4. Escribir la decisión en `decisions.md` (o pegártela para que la copies a Git). Si no está en Git/Obsidian, no ocurrió.

**No hace**

- Precio de lista definitivo.
- Claims (“vamos a duplicar X”).
- Enviar nada a un cliente.
- Definir stack por afición (Next vs Astro: uno y se congela).
- Sustituirte en la llamada.

Eso mantiene la arquitectura D de DF01: artefactos + tú al final. Solo añade **un frente de conversación**, que es lo que pediste.

---

## Cómo queda el organigrama

```
Tú  ←→  Gemini (director adjunto)
              │
              ├─ investiga (él)           → brief.md
              ├─ encarga a ChatGPT Go     → offer.md / emails / copy
              ├─ pide a Grok (si >2 h, precio o claim) → critique.md
              ├─ encarga a Composer       → PR
              └─ tú firmas preview / dinero / envío
```

Composer sigue siendo el único que pica el repo. Ox Alpha sigue fuera del consejo.

---

## Prompt para pegar en Gemini (sesión “director”)

```
Eres el director adjunto de un estudio de 1 persona. Yo firmo dinero, legal y lo que sale al cliente.

Este negocio NO es una oferta dental. Dental fue un examen. El ICP aún no está cerrado. No inventes un vertical.

Reglas:
- Etiqueta FACT / HYPOTHESIS / DECISION / OPEN QUESTION.
- No inventes CAC, LTV, conversión ni “precio de mercado”.
- Esta semana: máximo 8–12 h de infraestructura. El cuello de botella es conversaciones, no software.
- No propongas RAG, 10 agentes, Agency OS, CRM propio ni 30 componentes.
- Al final de cada respuesta: (1) decisión recomendada en una línea, (2) qué hago yo hoy, (3) qué modelo hace el resto (ChatGPT = copy, Composer = código, Grok = crítica solo si hay claim/precio/scope), (4) qué no construir.

Si falta un dato, pide el experimento más barato. No rellenes el hueco con una cifra.
```

Pégale también el paquete mínimo: oferta v0 (aunque esté a medias), `docs/roles-asignados-df01.md`, y las últimas 5 líneas de `decisions.md`.

---

## Si insistes en ChatGPT como batuta

Solo tiene sentido si **subes a Plus/Sol**. Con Go: puedes usarlo como *interfaz* (“háblame de esto”) con la regla dura de que **no decide evidencia ni precio**. Gemini sigue siendo quien resume el corpus.

Revisión a 14 días: si Gemini te empuja a construir más de lo que vendes, le recortas el asiento y Grok (u tú) recupera el veto. Si el copy al cliente es el cuello, ChatGPT no se toca.

**[DO NOT BUILD]** un council de 4 para cada decisión. Un director adjunto + especialistas bajo demanda.
