/** Контракт проектного поста. Все посты лежат в src/content/projects/{slug}.ts */

export type ProjectSection = {
  /** H2 внутри поста. */
  heading: string;
  /** Абзацы. Внутри можно ставить ссылки в виде [текст](/путь). */
  body: string[];
  /** Необязательный список с оранжевыми слешами. */
  bullets?: string[];
};

export type ProjectCategory =
  | "Agricultural"
  | "Commercial"
  | "Industrial"
  | "Service and panels"
  | "Standby power"
  | "Maintenance"
  | "Emergency";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Город и штат, если работа привязана к месту. */
  location?: string;
  /** 150–160 символов, идёт в meta description. */
  summary: string;
  /** Два-три предложения под заголовком. */
  lead: string;
  photos: { src: string; alt: string }[];
  sections: ProjectSection[];
  /** Ссылки на страницы услуг, две или три. */
  services: { label: string; href: string }[];
  /** Слаги других проектов, два или три. */
  related: string[];
  /**
   * Короткая сводка «на один взгляд». Нужна не для красоты: исследование
   * показало, что AI Overview показывается на объяснительных запросах,
   * а туда попадают короткие фактические блоки, а не абзацы.
   */
  facts?: { label: string; value: string }[];
  /** Вопросы и ответы. Дают разметку FAQPage и длинный хвост запросов. */
  faq?: { q: string; a: string }[];
  /** Ключи, под которые написан пост. На странице не выводятся. */
  keywords: string[];
};
