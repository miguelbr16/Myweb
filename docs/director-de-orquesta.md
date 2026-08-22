# Director de orquesta — dúo Gemini × ChatGPT

**Pedido del fundador:** usar **los dos** para rebatirse. No un único director.  
**Fecha:** 22 agosto 2026.  
**Sesgo:** lo escribe Grok 4.6. No soy el tercer voto obligatorio.

---

## Veredicto

**Autoridad final: tú.**  
**Dúo de decisión: Gemini propone, ChatGPT rebate** (o al revés si el artefacto es copy). Una ronda. Luego tú.

No es un council de 4. Composer construye. Grok solo si tras el dúo sigue habiendo dinero, claim o scope sin resolver. Ox fuera.

ChatGPT Go sigue siendo Luna según OpenAI, aunque la UI diga Sol y no deje cambiarlo. Eso **no** impide usarlo para rebatir: el valor del dúo es el desacuerdo, no el SKU. Gemini (Pro si existe) sigue siendo quien aguanta corpus.

---

## Protocolo (para que no sea ping-pong)

**Cuándo los dos:** ICP, oferta, precio, “qué construimos esta semana”, claims, matar/seguir un experimento.  
**Cuándo uno solo:** un WhatsApp, un heading, un bug, un email ya decidido.

| Tipo de tarea | Quién habla primero | Quién rebate |
|---|---|---|
| Research, capturas, PDFs, “qué hay en el mercado” | Gemini | ChatGPT |
| Copy, propuesta, email, objeciones | ChatGPT | Gemini |
| Prioridad de la semana / qué no construir | Gemini | ChatGPT |

**Una ronda.** Pegar el texto entero al segundo, no un resumen tuyo.

Prompt de réplica (pegar tal cual):

```
Rebate esto. No lo reescribas entero.

1) Qué es FACT vs HYPOTHESIS vs relleno.
2) Qué no construir / no prometer.
3) Una alternativa más barata o más estrecha.
4) En una línea: ¿aceptar, aceptar con recorte, o rechazar?

Si no tienes el dato, dilo. No inventes CAC, LTV ni precio de mercado.
```

**Si coinciden:** tú ejecutas (o Composer, si es código).  
**Si discrepan en algo material:** no hay tercera ronda entre ellos. Tú decides en ≤15 min y escribes una línea en `decisions.md`. Eso es incertidumbre, no un debate.

Tope: 30 minutos de dúo. Si no hay decisión, gana la opción que **vende o aprende esta semana**, no la que construye más.

---

## Organigrama

```
Tú
 ├─ Gemini  ⇄  ChatGPT     (1 ronda, artefactos)
 ├─ Grok                    (opcional, si el dúo no cierra precio/claim)
 ├─ Composer                (código del spec que tú firmaste)
 └─ Ox Alpha                (pico ≤4 h, sin PII)
```

Flujo:

```
Pregunta tuya
  → A redacta (brief.md u offer.md)
  → B rebate (critique.md, 4 puntos)
  → Tú: DECISION en una línea
  → Composer si hay que picar
```

---

## Qué no hacer

- No encadenar A→B→A→B. Eso es comité.
- No meter a Grok “por si acaso” en cada dúo.
- No dejar que gane el más largo. Gana el que etiqueta mejor y recorta.
- No enviar al cliente el texto del dúo sin tu pase.
- Dental no es la oferta. No dejes que el examen DF01 cuele un vertical.

---

## Prompt de sesión (los dos)

Misma regla en Gemini y en ChatGPT:

```
Eres un lado de un dúo. El otro modelo te va a rebatir (o tú a él). Yo firmo dinero, legal y lo que sale al cliente. ICP no cerrado. No es oferta dental.

Etiqueta FACT / HYPOTHESIS / DECISION.
No inventes cifras.
Máximo 8–12 h de infra esta semana.
Nada de RAG, 10 agentes, Agency OS, CRM propio, 30 componentes.

Acaba con: decisión en una línea + qué hago yo hoy + qué no construir.
```

---

## Nota Go / Sol

Plan **Go**, modelo bloqueado, etiqueta “Sol”: OpenAI dice que Go no incluye Sol (Luna). [Help Go](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go). Úsalo igual para rebatir. Si algún día hay Plus/Sol de verdad, el protocolo no cambia: sigue siendo dúo + tú.
