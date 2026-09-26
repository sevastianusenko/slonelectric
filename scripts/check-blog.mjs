/**
 * Проверяет статьи блога. Запуск: npm run check:blog
 *
 * Правила жёстче, чем у проектных постов: статья обязана отвечать на вопрос
 * в первых строках, иметь разобранный пример, пять внутренних ссылок,
 * два внешних авторитетных источника и корректную атрибуцию чужих фото.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "src", "content", "blog");

const INTERNAL = new Set([
  "/agricultural-electrical-services", "/commercial-electrical-services",
  "/industrial-electrical-services", "/standby-generator-installation",
  "/electrical-service-upgrades", "/commercial-led-lighting",
  "/control-panels-machine-wiring", "/low-voltage-structured-wiring",
  "/electrical-preventive-maintenance", "/ev-charging-installation",
  "/emergency-electrician", "/services", "/projects", "/blog",
  "/contact", "/about", "/service-area",
]);

const projectSlugs = new Set(
  readdirSync(join(ROOT, "src", "content", "projects"))
    .filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f))
    .map((f) => f.replace(/\.ts$/, "")),
);

const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f));
const slugs = new Set(files.map((f) => f.replace(/\.ts$/, "")));

const MIN_WORDS = 1200;
let problems = 0;
const rows = [];

for (const file of files.sort()) {
  const slug = file.replace(/\.ts$/, "");
  const src = readFileSync(join(DIR, file), "utf8");
  const bad = [];

  // объём прозы
  const strings = src.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  const prose = strings
    .filter((s) => s.length > 45 && !s.includes("/photos/") && !s.startsWith('"/') && !s.startsWith('"http'))
    .join(" ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) bad.push(`мало текста: ${words}`);

  const dashes = (src.match(/[—–]/g) ?? []).length;
  if (dashes) bad.push(`длинных тире: ${dashes}`);

  // ответ в начале
  const ans = /answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  if (!ans) bad.push("нет answer");
  else if (ans[1].length < 200) bad.push(`answer короткий: ${ans[1].length} симв.`);

  if (!/closing:\s*\n?\s*"/.test(src)) bad.push("нет closing");
  if (!/callout:\s*\{/.test(src)) bad.push("нет ни одной врезки с примером");

  // ссылки в тексте
  const links = [...src.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  const ext = links.filter((l) => /^https?:\/\//.test(l));
  const int = links.filter((l) => l.startsWith("/"));
  if (int.length < 5) bad.push(`внутренних ссылок в тексте: ${int.length}`);
  if (ext.length < 2) bad.push(`внешних ссылок в тексте: ${ext.length}`);

  for (const l of int) {
    if (l.startsWith("/projects/")) {
      if (!projectSlugs.has(l.slice(10))) bad.push(`битый проект: ${l}`);
    } else if (l.startsWith("/blog/")) {
      const t = l.slice(6);
      if (!slugs.has(t)) bad.push(`битая статья: ${l}`);
      if (t === slug) bad.push("ссылка на саму себя");
    } else if (!INTERNAL.has(l)) {
      bad.push(`неизвестная ссылка: ${l}`);
    }
  }

  // источники
  const srcBlock = /sources:\s*\[([\s\S]*?)\n  \],/.exec(src);
  const srcCount = srcBlock ? (srcBlock[1].match(/href:/g) ?? []).length : 0;
  if (srcCount < 2) bad.push(`источников: ${srcCount}`);

  // фотографии и атрибуция
  const photoBlock = /photos:\s*\[([\s\S]*?)\n  \],/.exec(src);
  if (!photoBlock) bad.push("не разобрал photos");
  else {
    const paths = [...photoBlock[1].matchAll(/src:\s*"([^"]+)"/g)].map((m) => m[1]);
    const credits = (photoBlock[1].match(/credit:\s*\{/g) ?? []).length;
    const ours = paths.filter((p) => !/\/ext-/.test(p)).length;
    const borrowed = paths.filter((p) => /\/ext-/.test(p)).length;
    if (ours < 2) bad.push(`наших фото: ${ours}`);
    if (borrowed < 2) bad.push(`внешних фото: ${borrowed}`);
    if (credits < borrowed) bad.push(`без атрибуции: ${borrowed - credits} из ${borrowed}`);
    paths.forEach((p) => {
      if (!existsSync(join(ROOT, "public", p))) bad.push(`нет файла: ${p}`);
    });
  }

  const faq = (src.match(/\bq:\s*"/g) ?? []).length;
  if (faq < 4) bad.push(`вопросов: ${faq}`);

  const sm = /summary:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  if (sm && (sm[1].length < 140 || sm[1].length > 200)) bad.push(`summary ${sm[1].length} симв.`);

  for (const m of src.matchAll(/related:\s*\[([^\]]*)\]/g)) {
    const rel = [...m[1].matchAll(/"([^"]+)"/g)].map((r) => r[1]);
    if (rel.length < 2) bad.push(`related: ${rel.length}`);
    rel.forEach((r) => { if (!slugs.has(r)) bad.push(`битый related: ${r}`); });
  }

  problems += bad.length;
  rows.push({ slug, words, int: int.length, ext: ext.length, bad });
}

console.log(`Статей: ${files.length}\n`);
for (const r of rows) {
  console.log(
    `${r.bad.length ? "ПРОБЛЕМА" : "ок      "} ${r.slug.padEnd(34)} ` +
    `${String(r.words).padStart(4)} слов  внутр ${r.int}  внеш ${r.ext}`,
  );
  r.bad.forEach((b) => console.log(`          ${b}`));
}
console.log(problems ? `\nВсего замечаний: ${problems}` : "\nЗамечаний нет.");
process.exitCode = problems ? 1 : 0;
