import type { Area } from "./types";

import lebanon from "./lebanon-county";
import lancaster from "./lancaster-county";
import berks from "./berks-county";
import dauphin from "./dauphin-county";
import schuylkill from "./schuylkill-county";
import cumberland from "./cumberland-county";
import york from "./york-county";
import chester from "./chester-county";

/** Порядок по досягаемости, а не по объёму запросов: локальная выдача считает от адреса. */
export const areaList: Area[] = [
  lebanon,
  lancaster,
  berks,
  dauphin,
  schuylkill,
  cumberland,
  york,
  chester,
];

export const areaMap: Record<string, Area> = Object.fromEntries(
  areaList.map((a) => [a.slug, a]),
);
