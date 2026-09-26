/** Контракт статьи. Файлы лежат в src/content/blog/{slug}.ts */

export type ArticleSection = {
  heading: string;
  /** Абзацы. Внутри можно ставить ссылки в виде [текст](/путь) и на внешние адреса. */
  body: string[];
  bullets?: string[];
  /** Врезка: разобранный пример, расчёт, порядок действий. */
  callout?: { title: string; lines: string[] };
};

/** Кредит для чужой иллюстрации. Без него чужие снимки не ставим. */
export type PhotoCredit = { author: string; href: string; license: string };

export type ArticlePhoto = {
  src: string;
  alt: string;
  caption?: string;
  /** Есть только у заимствованных изображений. Наши кадры идут без него. */
  credit?: PhotoCredit;
};

export type Article = {
  slug: string;
  /** Заголовок страницы. */
  title: string;
  /** Вопрос читателя, на который статья отвечает. Выводится над заголовком. */
  question: string;
  category: string;
  /** 150–180 символов, идёт в meta description. */
  summary: string;
  /**
   * Короткий ответ в первых строках. Правило из docs/content-plan.md:
   * человек пришёл с вопросом, ответ должен быть на первом экране.
   */
  answer: string;
  lead: string;
  photos: ArticlePhoto[];
  sections: ArticleSection[];
  /** Две внешние авторитетные ссылки: код, университет, ведомство, стандарт. */
  sources: { label: string; href: string; note?: string }[];
  /** Страницы услуг, на которые ведёт статья. */
  services: { label: string; href: string }[];
  /** Слаги других статей. */
  related: string[];
  faq?: { q: string; a: string }[];
  /** Одно-два предложения, связывающие тему с тем, что делаем мы. */
  closing: string;
  keywords: string[];
};
