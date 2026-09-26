import type { Town } from "./types";

import lancaster from "./lancaster";
import ephrata from "./ephrata";
import lititz from "./lititz";
import newHolland from "./new-holland";
import denver from "./denver";
import manheim from "./manheim";
import elizabethtown from "./elizabethtown";

import lebanon from "./lebanon";
import palmyra from "./palmyra";
import annville from "./annville";
import jonestown from "./jonestown";
import richland from "./richland";
import schaefferstown from "./schaefferstown";

/**
 * Города. Майерстаун сюда не входит: это база, её закрывают главная
 * страница и карточка Google, и отдельная страница конкурировала бы
 * с собственной главной. Решение зафиксировано в docs/site-map.md.
 */
export const townList: Town[] = [
  // Lebanon County, по близости
  lebanon,
  annville,
  palmyra,
  richland,
  schaefferstown,
  jonestown,

  // Lancaster County, по близости
  ephrata,
  denver,
  lititz,
  manheim,
  newHolland,
  lancaster,
  elizabethtown,
];

export const townMap: Record<string, Town> = Object.fromEntries(
  townList.map((t) => [t.slug, t]),
);

/** Города конкретного округа, в порядке из townList. */
export const townsByCounty = (county: string) => townList.filter((t) => t.county === county);

/**
 * Ищет страницу города по названию из реестра округов. Возвращает undefined
 * там, где страницы нет: у Майерстауна её нет намеренно, и у городов,
 * перечисленных в округах без собственной страницы, тоже.
 */
export const townByName = (county: string, name: string) =>
  townList.find((t) => t.county === county && t.town === name);
