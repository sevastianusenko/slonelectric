/**
 * Заголовок страницы и <title> это разные вещи. H1 может быть длинным
 * и человеческим, а в выдаче title обрезается примерно на шестидесяти
 * символах. Здесь из длинного заголовка получается короткий.
 */
const BRAND = "Slon Electric";
const LIMIT = 62;

/** Заголовок статьи или проекта: режем по двоеточию, потом по запятой. */
export function metaTitle(title: string, brand = BRAND): string {
  let t = title.split(":")[0].trim();
  if (t.length > 55) t = t.split(",")[0].trim();
  const withBrand = `${t} | ${brand}`;
  if (withBrand.length <= LIMIT) return withBrand;
  return t.length <= LIMIT ? t : `${t.slice(0, LIMIT - 3).trim()}...`;
}

/**
 * Готовый SEO-заголовок из сегментов через вертикальную черту.
 * Оставляем столько сегментов слева, сколько влезает.
 */
export function trimSegments(title: string): string {
  const parts = title.split("|").map((s) => s.trim()).filter(Boolean);
  let out = parts[0] ?? title;
  for (const part of parts.slice(1)) {
    const next = `${out} | ${part}`;
    if (next.length > LIMIT) break;
    out = next;
  }
  return out.length <= LIMIT ? out : `${out.slice(0, LIMIT - 3).trim()}...`;
}
