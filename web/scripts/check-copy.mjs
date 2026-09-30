// Comprueba los textos antes de cada build. Reglas (adaptadas al español de las "señales de texto de IA"
// y de solidum-factory/docs/strategy/DISENO_Y_NARRATIVA.md): sin emojis, sin clichés, sin afirmaciones que no podamos probar.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../src/", import.meta.url).pathname;
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|ts)$/.test(f) && !p.includes("/lib/")) files.push(p);
  }
})(root);

const emoji = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const banned = [
  ["holístic", "cliché"],
  ["sinergia", "cliché"],
  ["soluciones integrales", "cliché"],
  ["llevar tu negocio al siguiente nivel", "cliché"],
  ["en el mundo actual", "cliché"],
  ["en la era digital", "cliché"],
  ["líderes en", "afirmación sin prueba"],
  ["los mejores", "afirmación sin prueba"],
  ["clientes satisfechos", "afirmación sin prueba"],
  ["resultados garantizados", "promesa que no podemos hacer"],
  ["posición número 1", "promesa que no podemos hacer"],
  ["cutting-edge", "anglicismo de relleno"],
  ["no solo", "construcción «no solo X, sino Y» (revisa)"],
];
let errors = 0;
for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    const plain = line.toLowerCase();
    if (emoji.test(line)) {
      console.error(`${file.replace(root, "src/")}:${i + 1} emoji`);
      errors++;
    }
    for (const [word, why] of banned) {
      if (plain.includes(word) && !plain.includes("check-copy:ok")) {
        console.error(`${file.replace(root, "src/")}:${i + 1} «${word}»: ${why}`);
        errors++;
      }
    }
  });
}
if (errors) {
  console.error(`\ncheck-copy: ${errors} problema(s). Corrige el texto (o añade «check-copy:ok» en la línea si es legítimo).`);
  process.exit(1);
}
console.log(`check-copy: ${files.length} ficheros sin problemas`);
