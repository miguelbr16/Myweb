import { describe, expect, it } from "vitest";
import { estimate, eur, formatRange, projectTypes, urgentDays } from "../src/content/pricing";

const base = { extras: [], languages: 0, maintenance: "none", urgent: false } as const;

describe("pricing", () => {
  it("el texto de plazo coincide con su rango numérico (sin desincronizarse)", () => {
    for (const [key, type] of Object.entries(projectTypes)) {
      if (!type.daysRange) continue;
      const [a, b] = type.daysRange;
      expect(type.days, key).toBe(`${a}–${b} días`);
    }
  });

  it("calcula el rango base sin extras", () => {
    expect(estimate({ ...base, type: "starter" }).oneOff).toEqual([700, 1400]);
  });

  it("suma extras, idiomas y mantenimiento", () => {
    const r = estimate({ type: "pro", extras: ["ai"], languages: 1, maintenance: "growth", urgent: false });
    expect(r.oneOff).toEqual([2000, 3800]); // 1400+400+200 · 2500+900+400
    expect(r.monthly).toEqual([250, 600]);
  });

  it("limita los idiomas entre 0 y 5", () => {
    expect(estimate({ ...base, type: "landing", languages: -3 }).oneOff).toEqual([450, 900]);
    expect(estimate({ ...base, type: "landing", languages: 99 }).oneOff).toEqual(
      estimate({ ...base, type: "landing", languages: 5 }).oneOff,
    );
  });

  it("urgente: +20 % redondeado a 50 € y plazo a la mitad", () => {
    const r = estimate({ ...base, type: "landing", urgent: true });
    expect(r.oneOff).toEqual([550, 1100]); // 540 → 550 · 1080 → 1100
    expect(r.days).toBe("2–3 días");
  });

  it.each([
    ["landing", "2–3 días"],
    ["starter", "3–4 días"],
    ["pro", "4–6 días"],
    ["auto", "6–10 días"],
  ] as const)("plazo urgente de %s", (type, days) => {
    expect(estimate({ ...base, type, urgent: true }).days).toBe(days);
  });

  it("sin urgencia mantiene el plazo original", () => {
    expect(estimate({ ...base, type: "starter" }).days).toBe("5–8 días");
  });

  it("proyecto a medida no tiene precio ni cambia por la urgencia", () => {
    const r = estimate({ ...base, type: "custom", urgent: true });
    expect(r.oneOff).toBeNull();
    expect(r.days).toBe("según alcance");
  });

  it("urgentDays redondea hacia arriba", () => {
    expect(urgentDays([3, 5])).toBe("2–3 días");
    expect(urgentDays([1, 1])).toBe("1 días");
  });

  it("formatea los importes con separador de miles", () => {
    expect(eur(1400)).toBe("1.400 €");
    expect(formatRange([700, 1400])).toBe("700 € – 1.400 €");
  });
});
