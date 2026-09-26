/**
 * Проверяет проектные посты перед сборкой.
 * Запуск: node scripts/check-projects.mjs
 *
 * Ловит то, что TypeScript не видит: длинные тире, недобор по объёму,
 * битые ссылки, отсутствующие фотографии и посты без перелинковки.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "src", "content", "projects");

const SERVICES = new Set([
  "/agricultural-electrical-services", "/commercial-electrical-services",
  "/industrial-electrical-services", "/standby-generator-installation",
  "/electrical-service-upgrades", "/commercial-led-lighting",
  "/control-panels-machine-wiring", "/low-voltage-structured-wiring",
  "/electrical-preventive-maintenance", "/ev-charging-installation",
  "/emergency-electrician",
  "/services", "/projects", "/contact", "/about", "/service-area",
]);

const MIN_WORDS = 850;
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f));
const slugs = new Set(files.map((f) => f.replace(/\.ts$/, "")));

let problems = 0;
const report = [];

for (const file of files.sort()) {
  const slug = file.replace(/\.ts$/, "");
  const src = readFileSync(join(DIR, file), "utf8");
  const issues = [];

  // объём текста: считаем содержимое строковых литералов
  const strings = src.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  const prose = strings
    .filter((s) => s.length > 40 && !s.includes("/photos/") && !s.startsWith('"/'))
    .join(" ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) issues.push(`мало текста: ${words} слов`);

  // длинные тире
  const dashes = (src.match(/[—–]/g) ?? []).length;
  if (dashes) issues.push(`длинных тире: ${dashes}`);

  // ссылки внутри текста
  const links = [...src.matchAll(/\[[^\]]+\]\((\/[^)]+)\)/g)].map((m) => m[1]);
  const projLinks = links.filter((l) => l.startsWith("/projects/"));
  const svcLinks = links.filter((l) => !l.startsWith("/projects/"));
  if (svcLinks.length < 2) issues.push(`ссылок на услуги в тексте: ${svcLinks.length}`);
  if (projLinks.length < 2) issues.push(`ссылок на проекты в тексте: ${projLinks.length}`);

  for (const l of links) {
    if (l.startsWith("/projects/")) {
      const target = l.replace("/projects/", "");
      if (!slugs.has(target)) issues.push(`битая ссылка на проект: ${l}`);
      if (target === slug) issues.push("ссылка на самого себя");
    } else if (!SERVICES.has(l)) {
      issues.push(`неизвестная ссылка: ${l}`);
    }
  }

  // фотографии
  for (const m of src.matchAll(/"(\/photos\/[^"]+)"/g)) {
    if (!existsSync(join(ROOT, "public", m[1]))) issues.push(`нет файла: ${m[1]}`);
  }

  // related
  for (const m of src.matchAll(/related:\s*\[([^\]]*)\]/g)) {
    const rel = [...m[1].matchAll(/"([^"]+)"/g)].map((r) => r[1]);
    if (rel.length < 2) issues.push(`related: ${rel.length}`);
    rel.forEach((r) => { if (!slugs.has(r)) issues.push(`битый related: ${r}`); });
  }

  // длина summary
  const sm = /summary:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  if (sm && (sm[1].length < 120 || sm[1].length > 185)) {
    issues.push(`summary ${sm[1].length} символов`);
  }

  if (issues.length) problems += issues.length;
  report.push({ slug, words, links: links.length, issues });
}

console.log(`Постов: ${files.length}\n`);
for (const r of report) {
  const mark = r.issues.length ? "ПРОБЛЕМА" : "ок      ";
  console.log(`${mark} ${r.slug.padEnd(36)} ${String(r.words).padStart(4)} слов  ${String(r.links).padStart(2)} ссылок`);
  r.issues.forEach((i) => console.log(`          ${i}`));
}
console.log(problems ? `\nВсего замечаний: ${problems}` : "\nЗамечаний нет.");
process.exitCode = problems ? 1 : 0;
