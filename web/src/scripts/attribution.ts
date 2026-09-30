// Atribución sin cookies ni almacenamiento: lee ref/utm_* de la URL actual y los reenvía
// en los enlaces internos al configurador y en campos ocultos de los formularios.
// Sirve para saber si un presupuesto viene de la postal con QR, de un colaborador o de una campaña.
const KEYS = ["ref", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

const current = new URLSearchParams(location.search);
export const carried = new URLSearchParams();
for (const key of KEYS) {
  const value = current.get(key);
  if (value) carried.set(key, value.slice(0, 80));
}

export function withAttribution(path: string): string {
  const url = new URL(path, location.origin);
  carried.forEach((value, key) => url.searchParams.set(key, value));
  return url.pathname + url.search + url.hash;
}

if (carried.size) {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/presupuesto"]').forEach((a) => {
    a.setAttribute("href", withAttribution(a.getAttribute("href") ?? "/presupuesto/"));
  });
  document.querySelectorAll<HTMLFormElement>("form[data-attribution]").forEach((form) => {
    carried.forEach((value, key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.append(input);
    });
  });
}
