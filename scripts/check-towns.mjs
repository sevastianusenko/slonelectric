/**
 * Проверяет городские страницы. Запуск: npm run check:towns
 *
 * Главный риск здесь — дорвеи: тринадцать почти одинаковых страниц,
 * отличающихся только названием. Правило из docs/site-map.md: если можно
 * подменить название города и текст останется верным, страница не нужна.
 * Поэтому скрипт ищет повторы формулировок и требует, чтобы город называл
 * сам себя и свои ориентиры в тексте.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "src", "content", "towns");

const slugsIn = (d) =>
  new Set(
    readdirSync(join(ROOT, "src", "content", d))
      .filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f))
      .map((f) => f.replace(/\.ts$/, "")),
  );

const projectSlugs = slugsIn("projects");
const articleSlugs = slugsIn("blog");
const serviceSlugs = slugsIn("services");
const areaSlugs = slugsIn("areas");
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f));
const townSlugs = new Set(files.map((f) => f.replace(/\.ts$/, "")));
const PAGES = new Set(["services", "projects", "blog", "contact", "about", "service-area", "privacy", "terms"]);

const pick = (src, key) => {
  const m = new RegExp(`\\n  ${key}:\\s*\\[([\\s\\S]*?)\\n  \\]`).exec(src);
  return m ? m[1] : "";
};

let problems = 0;
const rows = [];
const allHeadings = [];
const allDemand = [];
const allLandmarks = [];
const allLeads = [];
const allBodies = [];

for (const file of files.sort()) {
  const slug = file.replace(/\.ts$/, "");
  const src = readFileSync(join(DIR, file), "utf8");
  const bad = [];

  const townName = /\n  town:\s*"([^"]+)"/.exec(src)?.[1] ?? "";
  const county = /\n  county:\s*"([^"]+)"/.exec(src)?.[1] ?? "";
  if (!areaSlugs.has(county)) bad.push(`неизвестный округ: ${county}`);

  const strings = src.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  const prose = strings
    .filter((s) => s.length > 45 && !s.includes("/photos/") && !s.startsWith('"/') && !s.startsWith('"http'))
    .join(" ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  if (words < 450) bad.push(`мало текста: ${words}`);
  if (words > 1200) bad.push(`слишком длинно: ${words}`);

  const dashes = (src.match(/[—–]/g) ?? []).length;
  if (dashes) bad.push(`длинных тире: ${dashes}`);

  // город обязан называть себя: иначе текст подменяемый
  const mentions = (prose.match(new RegExp(`\\b${townName}\\b`, "g")) ?? []).length;
  if (mentions < 2) bad.push(`город назван в тексте ${mentions} раз, нужно 2+`);

  const sections = [...src.matchAll(/heading:\s*"([^"]+)"/g)].map((m) => m[1]);
  if (sections.length < 2) bad.push(`разделов: ${sections.length}`);
  allHeadings.push(...sections.map((h) => ({ slug, v: h })));

  const landmarks = [...pick(src, "landmarks").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (landmarks.length < 5) bad.push(`ориентиров: ${landmarks.length}`);
  allLandmarks.push(...landmarks.map((l) => ({ slug, v: l })));

  const demand = [...src.matchAll(/title:\s*"([^"]+)"/g)].map((m) => m[1]);
  if (demand.length < 4) bad.push(`позиций в demand: ${demand.length}`);
  allDemand.push(...demand.map((d) => ({ slug, v: d })));

  // Заголовок можно развести, а текст под ним оставить общим. Это тот же дорвей.
  const bodies = [...src.matchAll(/\n      body:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  allBodies.push(...bodies.map((b) => ({ slug, v: b })));

  const lead = /\n  lead:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src)?.[1] ?? "";
  if (lead) allLeads.push({ slug, v: lead.slice(0, 60) });

  const svc = [...src.matchAll(/service:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const x of svc) if (!serviceSlugs.has(x)) bad.push(`нет услуги: ${x}`);

  const links = [...src.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  const internal = links.filter((l) => l.startsWith("/"));
  if (internal.length < 2) bad.push(`внутренних ссылок в тексте: ${internal.length}`);
  for (const l of internal) {
    const seg = l.slice(1).split("/");
    if (seg[0] === "projects" && seg[1]) { if (!projectSlugs.has(seg[1])) bad.push(`битый проект: ${l}`); }
    else if (seg[0] === "blog" && seg[1]) { if (!articleSlugs.has(seg[1])) bad.push(`битая статья: ${l}`); }
    else if (seg[0] === "service-area" && seg[1]) {
      if (seg[2]) { if (!townSlugs.has(seg[2])) bad.push(`битый город: ${l}`); }
      else if (!areaSlugs.has(seg[1])) bad.push(`битый округ: ${l}`);
    } else if (seg.length === 1 && !serviceSlugs.has(seg[0]) && !PAGES.has(seg[0])) {
      bad.push(`неизвестная ссылка: ${l}`);
    }
  }

  const hero = /src:\s*"([^"]+)"/.exec(src);
  if (!hero) bad.push("нет hero");
  else if (!existsSync(join(ROOT, "public", hero[1]))) bad.push(`нет файла: ${hero[1]}`);

  const faq = (src.match(/\bq:\s*"/g) ?? []).length;
  if (faq < 4) bad.push(`вопросов: ${faq}`);

  const rel = /related:\s*\{([\s\S]*?)\n  \}/.exec(src)?.[1] ?? "";
  const relP = [...(/projects:\s*\[([\s\S]*?)\]/.exec(rel)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const relA = [...(/articles:\s*\[([\s\S]*?)\]/.exec(rel)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (relP.length < 3) bad.push(`проектов в related: ${relP.length}`);
  if (relA.length < 3) bad.push(`статей в related: ${relA.length}`);
  for (const r of relP) if (!projectSlugs.has(r)) bad.push(`нет проекта: ${r}`);
  for (const r of relA) if (!articleSlugs.has(r)) bad.push(`нет статьи: ${r}`);

  const nearby = [...(/nearby:\s*\[([\s\S]*?)\]/.exec(src)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (nearby.length < 2) bad.push(`соседей: ${nearby.length}`);
  for (const n of nearby) {
    if (!townSlugs.has(n)) bad.push(`нет города: ${n}`);
    if (n === slug) bad.push("сосед сам себе");
  }

  const sm = /\n  summary:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  // Верхняя граница 160: дальше Google обрезает описание в выдаче.
  if (sm && (sm[1].length < 140 || sm[1].length > 160)) bad.push(`summary ${sm[1].length} симв.`);

  // адрес компании на городских страницах не живёт
  if (/Yeagley|319 /.test(prose)) bad.push("адрес компании на городской странице");

  problems += bad.length;
  rows.push({ slug, county, words, mentions, links: internal.length, bad });
}

// ── подменяемость ──────────────────────────────────────────────
function flagDuplicates(list, label) {
  const seen = new Map();
  for (const row of list) {
    const k = row.v.toLowerCase();
    if (seen.has(k)) {
      console.log(`ДОРВЕЙ  ${row.slug} повторяет ${label} "${row.v}" из ${seen.get(k)}`);
      problems++;
    } else seen.set(k, row.slug);
  }
}
flagDuplicates(allHeadings, "заголовок");
flagDuplicates(allDemand, "позицию");
flagDuplicates(allBodies, "текст позиции");
flagDuplicates(allLandmarks, "ориентир");
flagDuplicates(allLeads, "начало лида");

console.log(`\nГородских страниц: ${files.length}\n`);
for (const r of rows) {
  console.log(
    `${r.bad.length ? "ПРОБЛЕМА" : "ок      "} ${r.slug.padEnd(16)} ${r.county.padEnd(16)} ` +
    `${String(r.words).padStart(4)} слов  город назван ${r.mentions}  ссылок ${r.links}`,
  );
  r.bad.forEach((b) => console.log(`          ${b}`));
}
console.log(problems ? `\nВсего замечаний: ${problems}` : "\nЗамечаний нет.");
process.exitCode = problems ? 1 : 0;
