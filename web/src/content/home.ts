// Textos de la home. Reglas de redacción (scripts/check-copy.mjs las comprueba en cada build):
// concreto antes que aspiracional, sin emojis, sin clientes ni cifras que no tengamos, plural ("nosotros").
import { projectTypes, extras, maintenance, eur } from "./pricing";

export const hero = {
  eyebrow: "Solidum Digital · Webs, automatización e IA",
  lines: ["Que te encuentren.", "Que te entiendan.", "Que te escriban."],
  lede: "Hacemos webs rápidas y automatizamos cómo captas y atiendes clientes. Configuras el proyecto, ves el precio en el momento y todo el proceso es por escrito. Sin llamadas y sin reuniones.",
  cta: "Calcular mi presupuesto",
  ctaSecondary: "Ver cómo trabajamos",
  ticket: {
    title: "Tu presupuesto, ahora",
    pick: "Elige qué necesitas",
    note: "Precio orientativo, IVA no incluido. Te confirmamos el precio cerrado por email antes de empezar.",
    cta: "Afinar y enviar",
  },
};

export const scene = {
  eyebrow: "01 · El problema",
  title: "Jueves, 22:40. Alguien busca «fisioterapeuta en Valencia» desde el sofá y abre tres resultados.",
  aside: "Una escena típica, no un caso real.",
  beats: [
    { n: "1.º", text: "Tarda tanto en cargar que lo cierra." },
    { n: "2.º", text: "Es una ficha sin web: sin precios y sin forma de escribir." },
    { n: "3.º", text: "Explica qué hace, dice cuánto cuesta y tiene un botón de WhatsApp. Escribe al tercero." },
  ],
  close: "A los dos primeros no les falta calidad. Les falta que los encuentren, que los entiendan y que sea fácil escribirles. Eso se puede construir.",
};

export const pillars = {
  eyebrow: "02 · Qué hacemos",
  title: "Tres cosas, en este orden.",
  items: [
    {
      n: "01",
      verb: "Encontrar",
      title: "Que te encuentren",
      text: "Cuando alguien busca lo que haces, en Google o en un asistente de IA, tu negocio aparece y se explica bien.",
      list: ["SEO técnico y local", "Ficha de Google optimizada", "Textos preparados para ChatGPT, Gemini y Perplexity (GEO y AEO)"],
    },
    {
      n: "02",
      verb: "Entender",
      title: "Que te entiendan",
      text: "Una web que dice qué haces, cuánto cuesta y qué hacer a continuación, en el móvil y en menos de tres segundos.",
      list: ["Webs corporativas y landings de campaña", "Estructura y textos que convierten", "Identidad básica: logo, color y tipografía"],
    },
    {
      n: "03",
      verb: "Escribir",
      title: "Que te escriban",
      text: "Cada contacto te llega al email o al WhatsApp sin que tengas que perseguirlo, y sabes de dónde viene.",
      list: ["Formularios y WhatsApp conectados", "Respuestas y recordatorios automáticos", "Asistentes de IA y panel de métricas"],
    },
  ],
  after: `Después, mantenimiento: hosting, seguridad y mejoras cada mes, desde ${eur(maintenance.basic.monthly[0])} al mes.`,
};

export const guide = {
  eyebrow: "03 · Quiénes somos",
  title: "Solidum significa «lo firme, lo entero».",
  body: [
    "En derecho romano, «in solidum» quiere decir responder por el todo y no por una parte. Es la idea con la que trabajamos: nos ocupamos del proyecto completo, de la idea a la web publicada y medida, y respondemos de lo que entregamos.",
    "Combinamos desarrollo web, automatización y análisis de datos. No nos interesa una web que solo quede bonita: nos interesa que alguien te escriba.",
  ],
  facts: [
    { k: "El precio, primero", v: "Lo calculas tú en el configurador antes de hablar con nadie." },
    { k: "Todo por escrito", v: "Propuesta, contenido, revisiones y entrega. Sin reuniones obligatorias." },
    { k: "Tu web, tu dominio", v: "El dominio se registra a tu nombre y la web es tuya." },
    { k: "Sin plugins de pago", v: "Tecnología ligera y estándar: más rápida y más barata de mantener." },
  ],
  honest: {
    title: "Estamos empezando.",
    text: "Por eso no vas a ver logos ni reseñas inventadas. Vas a ver precios, plazos y una web que puedes medir tú mismo.",
  },
};

export const process = {
  eyebrow: "04 · Cómo funciona",
  title: "De cero a web publicada, por escrito.",
  note: "Sin reuniones obligatorias. Si prefieres hablar, hablamos.",
  steps: [
    { n: "01", tag: "Un minuto", title: "Configuras", text: "Eliges tipo de proyecto, extras y mantenimiento. El precio se actualiza mientras eliges." },
    { n: "02", tag: "Menos de 24 h laborables", title: "Confirmas", text: "Te enviamos la propuesta por email con precio cerrado y plazo. Si encaja, la aceptas y reservas con el 50 %." },
    { n: "03", tag: "Tú decides cuándo", title: "Nos pasas el contenido", text: "Un formulario guiado para textos, fotos y logo. Si no los tienes, los escribimos nosotros." },
    { n: "04", tag: "De 3 a 20 días", title: "Revisas y publicamos", text: "Te enviamos un enlace de prueba. Pides los cambios por escrito y, con tu visto bueno, publicamos y cobramos el 50 % restante." },
  ],
};

const dash = (n: number) => `desde ${eur(n)}`;
export const pricing = {
  eyebrow: "05 · Precios",
  title: "Precios orientativos, sin letra pequeña.",
  note: "IVA no incluido. El precio cerrado llega por email antes de empezar.",
  rows: [
    { name: "Landing page", what: "1 página, WhatsApp y formulario, SEO técnico, textos legales.", price: dash(projectTypes.landing.range[0]), time: projectTypes.landing.days },
    { name: "Web corporativa", what: "Hasta 5 páginas, formulario a tu email, analítica sin cookies.", price: dash(projectTypes.starter.range[0]), time: projectTypes.starter.days },
    { name: "Web profesional", what: "De 6 a 12 páginas, casos y blog.", price: dash(projectTypes.pro.range[0]), time: projectTypes.pro.days },
    { name: "Web con automatización", what: "Web profesional más contactos automáticos, respuestas y panel de métricas.", price: dash(projectTypes.auto.range[0]), time: projectTypes.auto.days },
    { name: "Proyecto a medida", what: "Empresas y proyectos con requisitos propios.", price: "A medida", time: "Según alcance" },
  ],
  extrasLine: `Extras desde: asistente con IA ${eur(extras.ai.range[0])} · reservas online ${eur(extras.booking.range[0])} · SEO local ${eur(extras.seo.range[0])} · idioma adicional ${eur(extras.language.range[0])}.`,
  cta: "Configurar el mío",
};

// Se rellena con una medición real antes de publicar (ver factory/docs/strategy/DISENO_Y_NARRATIVA.md).
export const proof = {
  eyebrow: "06 · La primera prueba",
  title: "La primera prueba es esta página.",
  text: "Nadie nos ha dado todavía una reseña, así que te dejamos algo que puedes comprobar: cómo de rápida, accesible y legible es la web que estás leyendo.",
  measured: {
    date: "30/09/2026",
    tool: "Lighthouse 13.5.0, perfil móvil, medido en local con la web lista para indexar",
    scores: [
      { label: "Rendimiento", value: 100 },
      { label: "Accesibilidad", value: 100 },
      { label: "Buenas prácticas", value: 100 },
      { label: "SEO", value: 100 },
    ],
    weight: "La portada entera pesa 109 KiB.",
  } as { date: string; tool: string; scores: { label: string; value: number }[]; weight: string } | null,
  verify: "Compruébalo tú mismo",
  verifyUrl: "https://pagespeed.web.dev/",
};

export const fact = {
  eyebrow: "07 · Datos clave",
  title: "Solidum Digital en una ficha.",
  rows: [
    { k: "Qué hacemos", v: "Webs y landings, automatización, asistentes de IA, SEO y GEO, analítica y mantenimiento." },
    { k: "Para quién", v: "Negocios de cualquier tamaño, del comercio local a la empresa." },
    { k: "Precios", v: `Landing desde ${eur(projectTypes.landing.range[0])} · web corporativa desde ${eur(projectTypes.starter.range[0])} · web con automatización desde ${eur(projectTypes.auto.range[0])}. IVA no incluido.` },
    { k: "Plazos", v: "De 3 a 20 días según el proyecto, desde que recibimos el contenido." },
    { k: "Pago", v: "50 % al aceptar la propuesta y 50 % en la entrega." },
    { k: "Cómo trabajamos", v: "Online y por escrito. Las llamadas son opcionales." },
    { k: "Dónde", v: "España. Trabajamos en remoto con clientes de todo el país." },
    { k: "Idioma", v: "Español." },
  ],
};

// Fuente única: alimenta la FAQ visible, el JSON-LD FAQPage y llms-full.txt (no pueden desincronizarse).
// Respuesta primero, en 40-70 palabras: es el formato que extraen los asistentes de IA.
export const faq = {
  eyebrow: "08 · Preguntas",
  title: "Preguntas frecuentes.",
  items: [
    {
      q: "¿Qué es Solidum Digital?",
      a: "Solidum Digital es un estudio español de webs, automatización e inteligencia artificial para negocios de cualquier tamaño. Diseñamos la web, automatizamos cómo recibes y atiendes clientes y medimos los resultados. Todo el proceso es online y por escrito, con el precio a la vista desde el principio.",
    },
    {
      q: "¿Cuánto cuesta una web para un negocio?",
      a: `Una landing de una página cuesta desde ${eur(projectTypes.landing.range[0])}, una web corporativa de hasta cinco páginas desde ${eur(projectTypes.starter.range[0])} y una web con automatización de clientes desde ${eur(projectTypes.auto.range[0])}. El precio final depende de los extras que elijas. Lo calculas al instante en el configurador y confirmamos el precio cerrado por email antes de empezar.`,
    },
    {
      q: "¿Cuánto se tarda en tener la web?",
      a: "Una landing tarda entre 3 y 5 días, una web corporativa entre 5 y 8 y una web profesional entre 8 y 12. Los plazos cuentan desde que recibimos tu contenido: textos, fotos y logo. Si no los tienes, los escribimos nosotros y ajustamos el plazo.",
    },
    {
      q: "¿Tengo que hacer llamadas o reuniones?",
      a: "No. Configuras el proyecto online, recibes la propuesta por email, envías tu contenido con un formulario y revisas la web en un enlace de prueba. Todo queda por escrito. Si en algún momento prefieres hablar, lo hacemos, pero nunca es obligatorio.",
    },
    {
      q: "¿La web y el dominio son míos?",
      a: `Sí. El dominio se registra a tu nombre y la web es tuya. Usamos tecnología estándar y ligera, sin plugins de pago, para que mantenerla cueste poco. Si prefieres que nos ocupemos nosotros, hay mantenimiento mensual desde ${eur(maintenance.basic.monthly[0])}.`,
    },
    {
      q: "¿Qué incluye el SEO?",
      a: "Todas las webs incluyen SEO técnico: títulos y descripciones, estructura de encabezados, velocidad, datos estructurados y sitemap. El SEO continuo, con contenidos y mejoras cada mes, va en el mantenimiento de crecimiento. Nadie puede prometerte la posición uno. Prometemos una web que Google pueda leer bien.",
    },
    {
      q: "¿Qué son GEO y AEO y los trabajáis?",
      a: "GEO y AEO consisten en preparar un sitio para que asistentes de IA, como ChatGPT, Gemini o Perplexity, y las respuestas destacadas de Google puedan leerlo y citarlo. Lo hacemos con respuestas directas al inicio de cada sección, datos estructurados y un archivo llms.txt. Ninguna técnica garantiza que te citen.",
    },
    {
      q: "¿Trabajáis con empresas grandes?",
      a: "Sí. Para proyectos de empresa elige «Proyecto a medida» en el configurador y preparamos una propuesta personalizada con alcance, plazos y precio. Si tu organización necesita una reunión o un contrato específico, lo hablamos por escrito o en directo, como prefieras.",
    },
    {
      q: "¿Cómo se paga?",
      a: "El 50 % al aceptar la propuesta y el 50 % restante en la entrega. El mantenimiento se cobra por mensualidades. Los precios que ves no incluyen IVA.",
    },
    {
      q: "¿Y si no sé qué necesito?",
      a: "Empieza por el configurador: elige el tipo de proyecto más parecido a lo que imaginas y ajusta los extras. Si dudas, escríbenos dos líneas sobre tu negocio en el formulario y te respondemos por email en menos de 24 horas laborables con una recomendación.",
    },
  ],
};

export const finalCta = {
  title: "Empieza por el precio.",
  text: "Un minuto, sin llamadas y sin compromiso.",
  cta: "Calcular mi presupuesto",
};

export const contactSection = {
  eyebrow: "09 · Escríbenos",
  title: "¿Prefieres escribirnos?",
  subtitle: "Para dudas o proyectos a medida. Te respondemos por email en menos de 24 h laborables.",
  serviceOptions: ["Web o landing", "Automatización", "Inteligencia artificial", "SEO y Google", "Datos y analítica", "Proyecto a medida", "Otro"],
};

// Servicios para datos estructurados y llms.txt (mismos nombres que el texto visible).
export const serviceCatalog = [
  { name: "Webs y landing pages", description: "Webs corporativas y landings de campaña rápidas, pensadas para el móvil y para convertir." },
  { name: "Automatización", description: "Formularios conectados al email o al WhatsApp, respuestas y recordatorios automáticos." },
  { name: "Asistentes de inteligencia artificial", description: "Asistentes que atienden a tus clientes las 24 horas y clasifican las solicitudes." },
  { name: "SEO, GEO y ficha de Google", description: "SEO técnico y local, ficha de Google y textos preparados para buscadores de IA." },
  { name: "Analítica y datos", description: "Paneles de métricas para saber de dónde viene cada cliente." },
  { name: "Mantenimiento y crecimiento", description: "Hosting, seguridad, cambios y mejoras mensuales." },
] as const;
