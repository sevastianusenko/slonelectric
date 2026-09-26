/** Контракт страницы услуги. Файлы в src/content/services/{slug}.ts */

export type ServiceSection = {
  heading: string;
  /** Абзацы. Ссылки в виде [текст](/путь). */
  body: string[];
  bullets?: string[];
};

/**
 * Группа подуслуг. Смысл блока в том, чтобы человек нашёл свою работу
 * словами, которыми он сам её называет, а не нашей формулировкой.
 */
export type ScopeGroup = {
  group: string;
  /** Одна строка про то, что объединяет группу. */
  note?: string;
  items: string[];
};

/** Для кого. Не «наши клиенты», а чья именно боль тут решается. */
export type Audience = {
  title: string;
  body: string;
};

/** Почему мы. Конкретика этой услуги, а не общие слова про качество. */
export type Reason = {
  title: string;
  body: string;
};

export type Service = {
  /** Верхнеуровневый адрес: /{slug} */
  slug: string;
  /** Рынок это «кто мы», услуга это «что делаем». Влияет на подачу. */
  kind: "market" | "service";
  /** <title> страницы. */
  title: string;
  h1: string;
  /** 150–180 символов в meta description. */
  summary: string;
  lead: string;
  hero: { src: string; alt: string };
  sections: ServiceSection[];
  /** Полный перечень подуслуг, сгруппированный. Ядро лендинга. */
  scope: ScopeGroup[];
  /** Типы объектов, где эта услуга применяется. */
  facilities?: string[];
  /** Для кого мы это делаем. */
  audience: Audience[];
  /** Как идёт работа: шаги. */
  process?: { title: string; lines: string[] };
  /** Почему стоит выбрать нас именно на этой работе. */
  whyUs: Reason[];
  faq: { q: string; a: string }[];
  /** Слаги проектов и статей для перелинковки. */
  related: { projects: string[]; articles: string[] };
  /** Другие страницы услуг. */
  seeAlso: string[];
  keywords: string[];
};
