// Puerta de lanzamiento. Con `prelaunch: true` (antes de salir) solo informa de lo pendiente.
// Con `prelaunch: false` el build FALLA si queda algún dato de relleno: así no se puede publicar
// por error una web con el NIF entre corchetes, example.com o el antispam de prueba.
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url).pathname;
const read = (f) => readFileSync(root + f, "utf8");

const site = read("src/content/site.ts");
const launched = /prelaunch:\s*false/.test(site);

const files = ["src/content/site.ts", "src/content/home.ts", "astro.config.mjs"];
const rules = [
  [/example\.com/, "dominio de ejemplo (example.com): pon el dominio real en site.url"],
  [/\b[123]x0{20,}[A-Z]{2}\b/, "clave de Turnstile de PRUEBA: usa la clave real del sitio (y su secreto en Cloudflare)"],
  [/\+?346?0{8,}/, "teléfono o WhatsApp de relleno"],
  [/\[NIF\]|\[DIRECCI[ÓO]N|\[NOMBRE/, "datos legales de relleno (titular, NIF o dirección)"],
];

const pending = [];
for (const file of files) {
  const text = read(file);
  for (const [re, why] of rules) {
    if (re.test(text)) pending.push(`${file}: ${why}`);
  }
}
const unique = [...new Set(pending)];

if (!unique.length) {
  console.log(`check-launch: sin datos de relleno (${launched ? "modo LANZADO" : "pre-lanzamiento"})`);
} else if (launched) {
  console.error("check-launch: NO se puede lanzar (prelaunch: false) con datos de relleno:");
  for (const p of unique) console.error(`  - ${p}`);
  process.exit(1);
} else {
  console.log(`check-launch: pre-lanzamiento, ${unique.length} pendiente(s) antes de poner prelaunch: false:`);
  for (const p of unique) console.log(`  - ${p}`);
}
