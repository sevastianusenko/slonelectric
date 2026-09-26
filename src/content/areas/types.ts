/**
 * Контракт страницы округа. Файлы в src/content/areas/{slug}.ts
 *
 * Страница отвечает на вопрос «вы работаете у нас?», а не «где вы сидите».
 * Адрес компании живёт на /contact и в карточке Google, сюда он не идёт.
 */

export type AreaSection = {
  heading: string;
  /** Абзацы. Ссылки в виде [текст](/путь). */
  body: string[];
};

/** Город и то, что мы в нём делаем. Голый список городов запрещён. */
export type Town = {
  name: string;
  /** Одна строка: что здесь за объекты и какая работа. */
  note: string;
};

/** Что в этом округе заказывают чаще всего, со ссылкой на услугу. */
export type Demand = {
  title: string;
  body: string;
  /** Слаг страницы услуги. */
  service: string;
};

export type Area = {
  /** Адрес: /service-area/{slug} */
  slug: string;
  /** «Lancaster County» */
  county: string;
  /** <title> страницы. */
  title: string;
  h1: string;
  /** 140–175 символов в meta description. */
  summary: string;
  lead: string;
  /** Время в пути, честно и без обещаний. */
  drive: string;
  hero: { src: string; alt: string };
  /** Ровно семь городов округа. */
  towns: Town[];
  /** Чем работа в этом округе отличается от соседнего. */
  sections: AreaSection[];
  /** Что здесь заказывают чаще всего. */
  demand: Demand[];
  /** Типы объектов именно этого округа. */
  facilities: string[];
  faq: { q: string; a: string }[];
  /** Слаги проектов и статей для перелинковки. */
  related: { projects: string[]; articles: string[] };
  /** Соседние округа: слаги из этой же папки. */
  neighbours: string[];
  keywords: string[];
};
