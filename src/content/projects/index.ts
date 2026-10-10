import type { Project } from "./types";

import freeStallBarnLighting from "./free-stall-barn-lighting";
import poultryHouseVentilationPower from "./poultry-house-ventilation-power";
import poultryHouseNewConstruction from "./poultry-house-new-construction";
import poultryHouseEquipmentWiring from "./poultry-house-equipment-wiring";
import grainSystemPowerControls from "./grain-system-power-controls";
import farmServiceEntranceUpgrade from "./farm-service-entrance-upgrade";
import dairyParlourBulkTankWiring from "./dairy-parlour-bulk-tank-wiring";
import undergroundFeedersFarmYard from "./underground-feeders-farm-yard";

import warehouseHighBayLighting from "./warehouse-high-bay-lighting";
import retailFitOutWiring from "./retail-fit-out-wiring";
import officeRemodelPowerLighting from "./office-remodel-power-lighting";
import parkingLotLighting from "./parking-lot-lighting";
import commercialPanelRoomFeeders from "./commercial-panel-room-feeders";
import evChargingCommercialSite from "./ev-charging-commercial-site";

import plantWiringDuringShutdown from "./plant-wiring-during-shutdown";
import machineConnectionMotorControl from "./machine-connection-motor-control";
import foodPlantEquipmentPower from "./food-plant-equipment-power";
import instrumentRacksProcessWiring from "./instrument-racks-process-wiring";
import threePhaseDistributionUpgrade from "./three-phase-distribution-upgrade";

import panelUpgradeMyerstown from "./panel-upgrade-myerstown";
import meterServiceUpgradeWomelsdorf from "./meter-service-upgrade-womelsdorf";
import serviceUpgrade200Amp from "./200-amp-service-upgrade";
import surgeProtectionService from "./surge-protection-service";

import standbyGeneratorTransferSwitch from "./standby-generator-transfer-switch";
import farmStandbyGenerator from "./farm-standby-generator";

import infraredSurveySwitchboard from "./infrared-survey-switchboard";

import poleBarnFromTheShell from "./pole-barn-from-the-shell";
import servicePoleOverheadDrop from "./service-pole-overhead-drop";
import commsRoomStructuredCabling from "./comms-room-structured-cabling";
import loadStudyAndDrawings from "./load-study-and-drawings";
import emergencyWinterFailure from "./emergency-winter-failure";
import preventiveMaintenanceArcFlash from "./preventive-maintenance-arc-flash";

export const projectList: Project[] = [
  freeStallBarnLighting,
  poultryHouseVentilationPower,
  poultryHouseNewConstruction,
  poultryHouseEquipmentWiring,
  grainSystemPowerControls,
  farmServiceEntranceUpgrade,
  dairyParlourBulkTankWiring,
  undergroundFeedersFarmYard,
  poleBarnFromTheShell,

  plantWiringDuringShutdown,
  machineConnectionMotorControl,
  foodPlantEquipmentPower,
  instrumentRacksProcessWiring,
  threePhaseDistributionUpgrade,

  warehouseHighBayLighting,
  retailFitOutWiring,
  officeRemodelPowerLighting,
  parkingLotLighting,
  commercialPanelRoomFeeders,
  evChargingCommercialSite,
  commsRoomStructuredCabling,

  panelUpgradeMyerstown,
  meterServiceUpgradeWomelsdorf,
  serviceUpgrade200Amp,
  surgeProtectionService,
  servicePoleOverheadDrop,
  loadStudyAndDrawings,

  standbyGeneratorTransferSwitch,
  farmStandbyGenerator,

  infraredSurveySwitchboard,
  preventiveMaintenanceArcFlash,

  emergencyWinterFailure,
];

export const projectMap: Record<string, Project> = Object.fromEntries(
  projectList.map((p) => [p.slug, p]),
);
