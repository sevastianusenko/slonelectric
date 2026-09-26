/**
 * Контракт городской страницы. Файлы в src/content/towns/{slug}.ts
 *
 * Правило из docs/site-map.md действует здесь жёстче всего: если название
 * города можно подменить и текст останется верным, страница не нужна.
 * Поэтому у каждой обязательны реальные ориентиры, местные производства
 * и своё объяснение, чем работа здесь отличается от соседнего города.
 *
 * Майерстаун отдельной страницей не делается: это база, её закрывают
 * главная страница и карточка Google.
 */

export type TownSection = {
  heading: string;
  /** Абзацы. Ссылки в виде [текст](/путь). */
  body: string[];
};

/** Что здесь заказывают чаще всего, со ссылкой на услугу. */
export type TownDemand = {
  title: string;
  body: string;
  /** Слаг страницы услуги. */
  service: string;
};

export type Town = {
  /** Адрес: /service-area/{county}/{slug} */
  slug: string;
  /** «Ephrata» */
  town: string;
  /** Слаг округа из src/content/areas. */
  county: string;
  /** <title> страницы. */
  title: string;
  h1: string;
  /** 140–175 символов в meta description. */
  summary: string;
  lead: string;
  /** Время в пути от базы, честно. */
  drive: string;
  hero: { src: string; alt: string };
  /** Чем работа здесь отличается. Два или три раздела. */
  sections: TownSection[];
  /** Настоящие ориентиры: дороги, промзоны, районы, производства. */
  landmarks: string[];
  /** Что в этом городе заказывают. */
  demand: TownDemand[];
  faq: { q: string; a: string }[];
  /** Слаги проектов и статей для перелинковки. */
  related: { projects: string[]; articles: string[] };
  /** Слаги соседних городов из этой же папки. */
  nearby: string[];
  keywords: string[];
};
