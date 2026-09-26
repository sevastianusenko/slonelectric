/**
 * Проверяет страницы услуг. Запуск: npm run check:services
 *
 * Отдельно следит за шаблонностью: страницы услуг пишутся пачками и
 * склонны сходиться в один каркас, о чём прямо предупреждает CLAUDE.md.
 * Поэтому мало проверить наличие блоков — проверяем, что формулировки
 * в них у каждой страницы свои.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "src", "content", "services");

const slugsIn = (d) =>
  new Set(
    readdirSync(join(ROOT, "src", "content", d))
      .filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f))
      .map((f) => f.replace(/\.ts$/, "")),
  );

const projectSlugs = slugsIn("projects");
const articleSlugs = slugsIn("blog");
const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f));
const serviceSlugs = new Set(files.map((f) => f.replace(/\.ts$/, "")));
const PAGES = new Set(["services", "projects", "blog", "contact", "about", "service-area"]);

/** Достаёт массив строк из блока вида `ключ: [ ... ]`. */
function block(src, key) {
  const re = new RegExp(`\\n  ${key}:\\s*\\[([\\s\\S]*?)\\n  \\]`);
  const m = re.exec(src);
  return m ? m[1] : "";
}
const titlesIn = (chunk) => [...chunk.matchAll(/\btitle:\s*"([^"]+)"/g)].map((m) => m[1]);

let problems = 0;
const rows = [];
const allHeadings = [];
const allWhy = [];
const allAudience = [];
const allGroups = [];

for (const file of files.sort()) {
  const slug = file.replace(/\.ts$/, "");
  const src = readFileSync(join(DIR, file), "utf8");
  const bad = [];

  const strings = src.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  const prose = strings
    .filter((s) => s.length > 45 && !s.includes("/photos/") && !s.startsWith('"/') && !s.startsWith('"http'))
    .join(" ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  if (words < 1300) bad.push(`мало текста: ${words}`);
  if (words > 2800) bad.push(`слишком длинно: ${words}`);

  const dashes = (src.match(/[—–]/g) ?? []).length;
  if (dashes) bad.push(`длинных тире: ${dashes}`);

  const links = [...src.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  const internal = links.filter((l) => l.startsWith("/"));
  if (internal.length < 8) bad.push(`внутренних ссылок в тексте: ${internal.length}`);

  for (const l of internal) {
    const seg = l.slice(1).split("/");
    if (seg[0] === "projects" && seg[1]) {
      if (!projectSlugs.has(seg[1])) bad.push(`битый проект: ${l}`);
    } else if (seg[0] === "blog" && seg[1]) {
      if (!articleSlugs.has(seg[1])) bad.push(`битая статья: ${l}`);
    } else if (seg.length === 1) {
      if (!serviceSlugs.has(seg[0]) && !PAGES.has(seg[0])) bad.push(`неизвестная ссылка: ${l}`);
      if (seg[0] === slug) bad.push("ссылка на саму себя");
    }
  }

  const hero = /src:\s*"([^"]+)"/.exec(src);
  if (!hero) bad.push("нет hero");
  else if (!existsSync(join(ROOT, "public", hero[1]))) bad.push(`нет файла: ${hero[1]}`);

  const headings = [...src.matchAll(/heading:\s*"([^"]+)"/g)].map((m) => m[1]);
  if (headings.length < 4) bad.push(`разделов: ${headings.length}`);
  allHeadings.push(...headings.map((h) => ({ slug, h })));

  // Перечень подуслуг: ядро лендинга
  const scope = block(src, "scope");
  const groups = [...scope.matchAll(/group:\s*"([^"]+)"/g)].map((m) => m[1]);
  const scopeItems = [...scope.matchAll(/items:\s*\[([\s\S]*?)\n\s*\]/g)]
    .reduce((n, m) => n + (m[1].match(/"(?:[^"\\]|\\.)*"/g) ?? []).length, 0);
  if (groups.length < 4) bad.push(`групп в scope: ${groups.length}`);
  if (scopeItems < 24) bad.push(`подуслуг: ${scopeItems}`);
  allGroups.push(...groups.map((g) => ({ slug, g })));

  // Для кого
  const audience = block(src, "audience");
  const aTitles = titlesIn(audience);
  if (aTitles.length < 4) bad.push(`аудиторий: ${aTitles.length}`);
  allAudience.push(...aTitles.map((t) => ({ slug, t })));

  // Почему мы
  const why = block(src, "whyUs");
  const wTitles = titlesIn(why);
  if (wTitles.length < 4) bad.push(`причин в whyUs: ${wTitles.length}`);
  allWhy.push(...wTitles.map((t) => ({ slug, t })));

  const faq = (src.match(/\bq:\s*"/g) ?? []).length;
  if (faq < 5) bad.push(`вопросов: ${faq}`);

  const fac = /facilities:\s*\[([\s\S]*?)\n  \]/.exec(src);
  if (!fac || (fac[1].match(/"/g) ?? []).length / 2 < 5) bad.push("мало facilities");

  const proc = /process:\s*\{[\s\S]*?lines:\s*\[([\s\S]*?)\n    \]/.exec(src);
  if (!proc || (proc[1].match(/^\s+"/gm) ?? []).length < 5) bad.push("мало шагов в process");

  // Блоки в конце страницы: работы и статьи по теме
  const rel = /related:\s*\{([\s\S]*?)\n  \}/.exec(src)?.[1] ?? "";
  const relProjects = [...(/projects:\s*\[([\s\S]*?)\]/.exec(rel)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const relArticles = [...(/articles:\s*\[([\s\S]*?)\]/.exec(rel)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (relProjects.length < 4) bad.push(`проектов в related: ${relProjects.length}`);
  if (relArticles.length < 3) bad.push(`статей в related: ${relArticles.length}`);
  for (const r of relProjects) if (!projectSlugs.has(r)) bad.push(`нет проекта: ${r}`);
  for (const r of relArticles) if (!articleSlugs.has(r)) bad.push(`нет статьи: ${r}`);

  const also = [...(/seeAlso:\s*\[([\s\S]*?)\]/.exec(src)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  if (also.length < 3) bad.push(`seeAlso: ${also.length}`);
  for (const a of also) {
    if (!serviceSlugs.has(a)) bad.push(`нет услуги: ${a}`);
    if (a === slug) bad.push("seeAlso ссылается на себя");
  }

  const sm = /summary:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  if (sm && (sm[1].length < 140 || sm[1].length > 175)) bad.push(`summary ${sm[1].length} симв.`);

  // фактические заявки с числами должны опираться на ссылку
  if (/\b(19|20)\d\d study|percent of annual turnover|according to/i.test(prose) && !links.some((l) => l.startsWith("http"))) {
    bad.push("числовая заявка без внешнего источника");
  }

  problems += bad.length;
  rows.push({ slug, words, links: internal.length, scope: scopeItems, bad });
}

// ── шаблонность ────────────────────────────────────────────────
const generic =
  /^(what we do|our services|benefits|why choose us|overview|introduction|who we serve|our process|the work|our approach)/i;

function flagDuplicates(list, key, label) {
  const seen = new Map();
  for (const row of list) {
    const value = row[key];
    const k = value.toLowerCase();
    if (generic.test(value)) {
      console.log(`ШАБЛОН  ${row.slug}: общая формулировка ${label} "${value}"`);
      problems++;
    }
    if (seen.has(k)) {
      console.log(`ШАБЛОН  ${row.slug} повторяет ${label} "${value}" из ${seen.get(k)}`);
      problems++;
    } else seen.set(k, row.slug);
  }
}

flagDuplicates(allHeadings, "h", "заголовок");
flagDuplicates(allWhy, "t", "причину");
flagDuplicates(allAudience, "t", "аудиторию");
flagDuplicates(allGroups, "g", "группу услуг");

console.log(`\nСтраниц услуг: ${files.length}\n`);
for (const r of rows) {
  console.log(
    `${r.bad.length ? "ПРОБЛЕМА" : "ок      "} ${r.slug.padEnd(36)} ` +
    `${String(r.words).padStart(4)} слов  ссылок ${String(r.links).padStart(2)}  подуслуг ${String(r.scope).padStart(2)}`,
  );
  r.bad.forEach((b) => console.log(`          ${b}`));
}
console.log(problems ? `\nВсего замечаний: ${problems}` : "\nЗамечаний нет.");
process.exitCode = problems ? 1 : 0;
