import type { Article } from "./types";

import strayVoltage from "./stray-voltage-on-dairy-farms";
import voltageDrop from "./voltage-drop-long-farm-runs";
import nec547 from "./nec-547-agricultural-wiring";
import distributionPoint from "./farm-distribution-point";
import barnWiringMethods from "./barn-wiring-methods";
import whatIsAVfd from "./what-is-a-vfd";
import threePhase from "./three-phase-vs-single-phase";
import switchgear from "./what-is-switchgear";
import panelCost from "./cost-to-replace-electrical-panel";
import panelSigns from "./signs-your-panel-needs-replacing";

import generatorCost from "./standby-generator-cost";
import generatorMaintenance from "./generator-maintenance-schedule";
import generatorSizing from "./generator-sizing-starting-vs-running";
import transferSwitch from "./transfer-switch-types";
import vfdGroundFault from "./vfd-ground-fault-troubleshooting";
import motorWontStart from "./three-phase-motor-wont-start";
import vfdSinglePhase from "./vfd-single-phase-input";
import buildingDistribution from "./electrical-distribution-in-a-building";
import panelSchedule from "./how-to-read-a-panel-schedule";
import highBay from "./high-bay-led-lighting";

import highLegDelta from "./high-leg-delta";
import loadCalculation from "./service-load-calculation";
import surgeProtection from "./surge-protection-explained";
import infraredSurvey from "./infrared-electrical-survey";
import poultryOutage from "./poultry-house-power-outage";

export const articleList: Article[] = [
  strayVoltage,
  voltageDrop,
  nec547,
  distributionPoint,
  barnWiringMethods,

  whatIsAVfd,
  vfdGroundFault,
  vfdSinglePhase,
  motorWontStart,

  threePhase,
  switchgear,
  buildingDistribution,

  panelCost,
  panelSigns,
  panelSchedule,

  generatorCost,
  generatorSizing,
  generatorMaintenance,
  transferSwitch,

  highBay,

  poultryOutage,
  surgeProtection,
  infraredSurvey,
  loadCalculation,
  highLegDelta,
];

export const articleMap: Record<string, Article> = Object.fromEntries(
  articleList.map((a) => [a.slug, a]),
);
