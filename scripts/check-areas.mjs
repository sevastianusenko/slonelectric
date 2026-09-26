/**
 * Проверяет страницы округов. Запуск: npm run check:areas
 *
 * Главная проверка здесь — подменяемость. Правило из docs/site-map.md:
 * если можно заменить название округа и текст останется верным, страница
 * не нужна. Поэтому скрипт ищет повторы формулировок между округами и
 * требует, чтобы в тексте были названия собственных городов.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "src", "content", "areas");

const slugsIn = (d) =>
  new Set(
    readdirSync(join(ROOT, "src", "content", d))
      .filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f))
      .map((f) => f.replace(/\.ts$/, "")),
  );

const projectSlugs = slugsIn("projects");
const articleSlugs = slugsIn("blog");
const serviceSlugs = slugsIn("services");
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f));
const areaSlugs = new Set(files.map((f) => f.replace(/\.ts$/, "")));
const PAGES = new Set(["services", "projects", "blog", "contact", "about", "service-area"]);

let problems = 0;
const rows = [];
const allHeadings = [];
const allTowns = [];
const allDemand = [];

for (const file of files.sort()) {
  const slug = file.replace(/\.ts$/, "");
  const src = readFileSync(join(DIR, file), "utf8");
  const bad = [];

  const strings = src.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  const prose = strings
    .filter((s) => s.length > 45 && !s.includes("/photos/") && !s.startsWith('"/') && !s.startsWith('"http'))
    .join(" ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  if (words < 700) bad.push(`мало текста: ${words}`);
  if (words > 1800) bad.push(`слишком длинно: ${words}`);

  const dashes = (src.match(/[—–]/g) ?? []).length;
  if (dashes) bad.push(`длинных тире: ${dashes}`);

  // ровно семь городов, у каждого своя строка
  const towns = [...src.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
  const notes = [...src.matchAll(/note:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  if (towns.length !== 7) bad.push(`городов: ${towns.length}, нужно 7`);
  if (notes.length !== towns.length) bad.push(`описаний у городов: ${notes.length}`);
  for (const nt of notes) if (nt.length < 60) bad.push(`слишком короткое описание города: ${nt.slice(0, 40)}`);
  allTowns.push(...towns.map((t) => ({ slug, t })));

  // текст должен называть свои города, иначе он подменяемый
  const named = towns.filter((t) => prose.includes(t)).length;
  if (named < 2) bad.push(`в тексте не названо ни одного своего города (${named})`);

  const headings = [...src.matchAll(/heading:\s*"([^"]+)"/g)].map((m) => m[1]);
  if (headings.length < 3) bad.push(`разделов: ${headings.length}`);
  allHeadings.push(...headings.map((h) => ({ slug, h })));

  const demand = [...src.matchAll(/title:\s*"([^"]+)"/g)].map((m) => m[1]);
  if (demand.length < 6) bad.push(`позиций в demand: ${demand.length}`);
  allDemand.push(...demand.map((t) => ({ slug, t })));

  // ссылки на услуги в demand должны существовать
  const svc = [...src.matchAll(/service:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const x of svc) if (!serviceSlugs.has(x)) bad.push(`нет услуги: ${x}`);

  const links = [...src.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  const internal = links.filter((l) => l.startsWith("/"));
  if (internal.length < 4) bad.push(`внутренних ссылок в тексте: ${internal.length}`);
  for (const l of internal) {
    const seg = l.slice(1).split("/");
    if (seg[0] === "projects" && seg[1]) {
      if (!projectSlugs.has(seg[1])) bad.push(`битый проект: ${l}`);
    } else if (seg[0] === "blog" && seg[1]) {
      if (!articleSlugs.has(seg[1])) bad.push(`битая статья: ${l}`);
    } else if (seg[0] === "service-area" && seg[1]) {
      if (!areaSlugs.has(seg[1])) bad.push(`битый округ: ${l}`);
    } else if (seg.length === 1) {
      if (!serviceSlugs.has(seg[0]) && !PAGES.has(seg[0])) bad.push(`неизвестная ссылка: ${l}`);
    }
  }

  const hero = /src:\s*"([^"]+)"/.exec(src);
  if (!hero) bad.push("нет hero");
  else if (!existsSync(join(ROOT, "public", hero[1]))) bad.push(`нет файла: ${hero[1]}`);

  const faq = (src.match(/\bq:\s*"/g) ?? []).length;
  if (faq < 5) bad.push(`вопросов: ${faq}`);

  const fac = /facilities:\s*\[([\s\S]*?)\n  \]/.exec(src);
  if (!fac || (fac[1].match(/"/g) ?? []).length / 2 < 6) bad.push("мало facilities");

  const rel = /related:\s*\{([\s\S]*?)\n  \}/.exec(src)?.[1] ?? "";
  const relProjects = [...(/projects:\s*\[([\s\S]*?)\]/.exec(rel)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const relArticles = [...(/articles:\s*\[([\s\S]*?)\]/.exec(rel)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (relProjects.length < 4) bad.push(`проектов в related: ${relProjects.length}`);
  if (relArticles.length < 3) bad.push(`статей в related: ${relArticles.length}`);
  for (const r of relProjects) if (!projectSlugs.has(r)) bad.push(`нет проекта: ${r}`);
  for (const r of relArticles) if (!articleSlugs.has(r)) bad.push(`нет статьи: ${r}`);

  const nb = [...(/neighbours:\s*\[([\s\S]*?)\]/.exec(src)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (nb.length < 2) bad.push(`соседей: ${nb.length}`);
  for (const x of nb) {
    if (!areaSlugs.has(x)) bad.push(`нет округа: ${x}`);
    if (x === slug) bad.push("сосед сам себе");
  }

  const sm = /summary:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  if (sm && (sm[1].length < 140 || sm[1].length > 175)) bad.push(`summary ${sm[1].length} симв.`);

  // адрес компании на этих страницах не живёт: они про то, где мы работаем
  if (/Yeagley|319 /.test(prose)) bad.push("на странице округа адрес компании");

  problems += bad.length;
  rows.push({ slug, words, towns: towns.length, links: internal.length, bad });
}

// ── подменяемость ──────────────────────────────────────────────
function flagDuplicates(list, key, label) {
  const seen = new Map();
  for (const row of list) {
    const value = row[key];
    const k = value.toLowerCase();
    if (seen.has(k)) {
      console.log(`ПОДМЕНА ${row.slug} повторяет ${label} "${value}" из ${seen.get(k)}`);
      problems++;
    } else seen.set(k, row.slug);
  }
}
flagDuplicates(allHeadings, "h", "заголовок");
flagDuplicates(allDemand, "t", "позицию");
// города повторяться между округами не должны: город лежит в одном округе
flagDuplicates(allTowns, "t", "город");

console.log(`\nСтраниц округов: ${files.length}\n`);
for (const r of rows) {
  console.log(
    `${r.bad.length ? "ПРОБЛЕМА" : "ок      "} ${r.slug.padEnd(20)} ` +
    `${String(r.words).padStart(4)} слов  городов ${r.towns}  ссылок ${String(r.links).padStart(2)}`,
  );
  r.bad.forEach((b) => console.log(`          ${b}`));
}
console.log(problems ? `\nВсего замечаний: ${problems}` : "\nЗамечаний нет.");
process.exitCode = problems ? 1 : 0;
