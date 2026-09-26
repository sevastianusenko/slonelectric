import type { Service } from "./types";

import agricultural from "./agricultural-electrical-services";
import commercial from "./commercial-electrical-services";
import industrial from "./industrial-electrical-services";
import emergency from "./emergency-electrician";
import generators from "./standby-generator-installation";
import serviceUpgrades from "./electrical-service-upgrades";
import lighting from "./commercial-led-lighting";
import controls from "./control-panels-machine-wiring";
import lowVoltage from "./low-voltage-structured-wiring";
import maintenance from "./electrical-preventive-maintenance";
import ev from "./ev-charging-installation";

/** Порядок важен: сначала рынки, потом услуги по убыванию ценности заявки. */
export const serviceList: Service[] = [
  agricultural,
  commercial,
  industrial,

  emergency,
  generators,
  serviceUpgrades,
  lighting,
  controls,
  lowVoltage,
  maintenance,
  ev,
];

export const serviceMap: Record<string, Service> = Object.fromEntries(
  serviceList.map((s) => [s.slug, s]),
);
