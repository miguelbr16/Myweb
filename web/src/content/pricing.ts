// Reglas del presupuestador automático. Las usa la página /presupuesto (cálculo en vivo)
// y el Worker (cálculo en servidor, que es el que vale). Precios orientativos = HYPOTHESIS
// (factory/docs/strategy/OFERTA_Y_PRECIOS.md). Cambia aquí y se actualiza todo.

export type Range = readonly [number, number];

// `days` es el texto que se ve; `daysRange` es el mismo plazo en números (de él sale el plazo urgente).
// test/pricing.test.ts comprueba que ambos coinciden.
export const projectTypes = {
  landing: { label: "Landing page (1 página)", range: [450, 900], days: "3–5 días", daysRange: [3, 5] },
  starter: { label: "Web corporativa (hasta 5 páginas)", range: [700, 1400], days: "5–8 días", daysRange: [5, 8] },
  pro: { label: "Web profesional (6–12 páginas, casos, blog)", range: [1400, 2500], days: "8–12 días", daysRange: [8, 12] },
  auto: { label: "Web + automatización de clientes", range: [2500, 5000], days: "12–20 días", daysRange: [12, 20] },
  custom: { label: "Proyecto a medida / empresa", range: null, days: "según alcance", daysRange: null },
} as const satisfies Record<
  string,
  { label: string; range: Range | null; days: string; daysRange: Range | null }
>;

export const extras = {
  language: { label: "Idioma adicional (por idioma)", range: [200, 400] },
  booking: { label: "Reservas o citas online", range: [150, 300] },
  leads: { label: "Automatización de contactos (email + registro de clientes)", range: [300, 600] },
  ai: { label: "Asistente con IA (responde preguntas frecuentes)", range: [400, 900] },
  seo: { label: "SEO local + ficha de Google optimizada", range: [150, 300] },
  copy: { label: "Redacción de textos", range: [150, 400] },
  brand: { label: "Logo e identidad básica", range: [150, 300] },
  analytics: { label: "Panel de datos y métricas", range: [300, 700] },
} as const satisfies Record<string, { label: string; range: Range }>;

export const maintenance = {
  none: { label: "Sin mantenimiento", monthly: null },
  basic: { label: "Básico: hosting, seguridad y cambios pequeños", monthly: [80, 150] },
  growth: { label: "Crecimiento: lo básico + SEO y mejoras mensuales", monthly: [250, 600] },
} as const satisfies Record<string, { label: string; monthly: Range | null }>;

export const URGENT_MULTIPLIER = 1.2; // +20 % si se necesita en la mitad de plazo

/** Plazo en la mitad de tiempo, redondeando hacia arriba: «3–5 días» pasa a «2–3 días». */
export function urgentDays(range: Range): string {
  const [a, b] = [Math.ceil(range[0] / 2), Math.ceil(range[1] / 2)];
  return a === b ? `${a} días` : `${a}–${b} días`;
}

export type ProjectType = keyof typeof projectTypes;
export type Extra = keyof typeof extras;
export type Maintenance = keyof typeof maintenance;

export interface EstimateInput {
  type: ProjectType;
  extras: Extra[];
  languages: number; // idiomas adicionales al español
  maintenance: Maintenance;
  urgent: boolean;
}

export interface Estimate {
  oneOff: Range | null; // null = a medida
  monthly: Range | null;
  days: string;
}

const round50 = (n: number) => Math.round(n / 50) * 50;

export function estimate(input: EstimateInput): Estimate {
  const type = projectTypes[input.type];
  const monthly = maintenance[input.maintenance].monthly;
  if (!type.range) return { oneOff: null, monthly, days: type.days };
  const days = input.urgent && type.daysRange ? urgentDays(type.daysRange) : type.days;

  let [min, max] = type.range;
  for (const key of input.extras) {
    if (key === "language") continue;
    min += extras[key].range[0];
    max += extras[key].range[1];
  }
  const langs = Math.max(0, Math.min(5, input.languages));
  min += extras.language.range[0] * langs;
  max += extras.language.range[1] * langs;
  if (input.urgent) {
    min *= URGENT_MULTIPLIER;
    max *= URGENT_MULTIPLIER;
  }
  return { oneOff: [round50(min), round50(max)], monthly, days };
}

export const isProjectType = (v: string): v is ProjectType => v in projectTypes;
export const isExtra = (v: string): v is Extra => v in extras && v !== "language";
export const isMaintenance = (v: string): v is Maintenance => v in maintenance;

export const eur = (n: number) => `${n.toLocaleString("es-ES", { useGrouping: "always" })} €`;
export const formatRange = (r: Range) => `${eur(r[0])} – ${eur(r[1])}`;
