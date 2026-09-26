import type { Project } from "./types";

const project: Project = {
  slug: "grain-system-power-controls",
  title: "Power and controls for a grain dryer, leg and bin system",
  category: "Agricultural",
  location: "Lebanon County, PA",
  summary:
    "Wiring a grain system: dryer and leg motor loads, starting current, sequencing and interlocks, grain dust as a hazard, seasonal duty and emergency stops.",
  lead:
    "A grain system is a line of motors that only makes sense when they run in the right order. The electrical work is less about any single load than about making sure the leg is never carrying grain it cannot move, and that everything stops together when somebody hits a mushroom head.",

  photos: [
    {
      src: "/photos/projects/grain-system-power-controls-1.webp",
      alt: "Steel grain bins and an elevator leg seen from below",
    },
    {
      src: "/photos/projects/grain-system-power-controls-2.webp",
      alt: "Grain storage bin standing in a field",
    },
    {
      src: "/photos/projects/grain-system-power-controls-3.webp",
      alt: "Farm buildings and a grain leg in falling snow",
    },
  ],

  sections: [
    {
      heading: "What a grain system looks like electrically",
      body: [
        "From the panel out, a grain setup is a chain of motors with a dryer in the middle. A receiving pit auger takes grain off the truck, a leg lifts it, a distributor or a set of conveyors sends it to a bin, and bin fans hold it in condition. The dryer sits in the middle with its burner controls, its metering and unload augers and its fan, which is very often the largest single motor on the farm. Leg and fan motors commonly land in the ten to fifty horsepower range with augers and drags below that, all tied together by a control voltage system.",
        "That mix is why grain work belongs with the rest of the [agricultural electrical work](/agricultural-electrical-services) on a farm rather than being treated as a one off equipment hookup. The dryer manual covers the dryer. Nothing in it covers how the dryer shares a service with the shop, the bins and the house.",
      ],
    },
    {
      heading: "Motor loads and the current you never see on the nameplate",
      body: [
        "Grain motors are started across the line more often than not, and a motor started that way draws roughly six times its full load current while it comes up to speed. On a large dryer fan that is a serious number, and it lasts long enough to matter because a loaded fan takes several seconds to accelerate.",
        "Article 430 of the National Electrical Code is written around exactly this: branch circuit protection sized to let the motor start, a separate overload device protecting the windings, and conductors sized from the full load current tables rather than from a nameplate. Get that split wrong and you end up with either a breaker that trips on every dryer fan start or a motor that cooks quietly behind a breaker three sizes too large to notice.",
        "Starting current also sets the practical limit on what can run at once. Where the service is tight, soft starters or variable frequency drives on the big fans are worth more than a service upgrade. Where it is genuinely undersized, the honest answer is the service, which is the work in [rebuilding a farm service entrance](/projects/farm-service-entrance-upgrade).",
      ],
    },
    {
      heading: "Sequencing and interlocks, the part that saves the equipment",
      body: [
        "The controls are what turn a group of motors into a system. The rule in grain handling is that you start at the discharge end and work backwards, and you stop at the feed end and work forwards. The bin conveyor runs before the leg, the leg runs before the pit auger. If that order is not enforced by the control circuit, sooner or later somebody will run grain into a leg that is not turning.",
        "Enforcing it means permissive logic rather than a wall of individual start buttons. A downstream contactor auxiliary contact gives permission for the upstream starter to close. A zero speed or belt alignment switch on the leg drops everything feeding it. On a plugged leg, the difference between a control circuit that does this and one that does not is a boot full of grain, a burnt belt and a day lost at the worst point in the season.",
      ],
      bullets: [
        "Start at the discharge end, stop at the feed end, enforced in the control circuit",
        "Permissive contacts so nothing upstream can run into a stopped conveyor",
        "Zero speed and belt alignment switches dropping everything that feeds the leg",
        "Bin level and plugged chute switches wired as stops rather than as lights",
        "Hand, off and auto selection so a single leg can be run for cleanout",
      ],
    },
    {
      heading: "Grain dust changes the equipment you are allowed to use",
      body: [
        "Grain dust is combustible, and at the right concentration in a confined space it is explosive. That is not a theoretical concern in this business. It is why NFPA 61 exists and why grain handling is one of the few agricultural occupancies where classified areas are a routine part of the design.",
        "Practically, the wiring method and the equipment in and around a leg, a dryer or a bin get chosen for a dust environment: dust ignition proof or dust tight enclosures where the classification calls for it, sealed fittings, and motors selected for the location rather than whatever was on the shelf. Articles 500 and 502 set the rules for Class II locations and Article 547 adds the agricultural requirements on top. The installation either helps housekeeping or fights it, so gear goes where it can be blown down rather than where dust will pile on it and cook it.",
      ],
    },
    {
      heading: "Seasonal duty and gear that sits idle ten months a year",
      body: [
        "Grain equipment works hard for a few weeks and then sits. That duty cycle is hard on electrical gear in a way continuous operation is not. Condensation forms inside enclosures through every temperature swing of the off season, contacts oxidise, rodents move into anything warm and dry, and the first hard start of the season finds all of it at once.",
        "The answers are ordinary but have to be designed in: enclosures rated for the location with drains or breathers where condensation is expected, heaters in outdoor panels where they earn their place, and terminations that can be retorqued without dismantling the panel. Running the system up before harvest rather than on the first load is where scheduled [electrical preventive maintenance](/electrical-preventive-maintenance) pays for itself on a farm as much as in a plant.",
        "Outdoor runs between bins, dryer and shop take the same beating, and where they are still overhead or buried shallow they are worth redoing while a trench is open anyway, which is [underground feeders across a farm yard](/projects/underground-feeders-farm-yard).",
      ],
    },
    {
      heading: "Emergency stops and where this work turns up elsewhere",
      body: [
        "Every grain system needs a way to stop everything from wherever a person is standing. That means emergency stops at the pit, at the leg base, at the dryer and at the panel, wired so any one of them drops the whole chain and so nothing restarts on its own when the button is pulled back out. Restart has to be a deliberate act at the panel. Pull cords along conveyors do the same job over a length rather than at a point.",
        "The wiring detail is the important part in both cases. Stop functions are wired to open the circuit, never to close it, so a broken wire stops the system rather than quietly disabling the stop.",
        "None of this is unique to grain. The same sequencing, interlock and stop logic runs feed mills, packing lines and process equipment in the plants around Lebanon and Lancaster, which is the ground covered by our [control panel and machine wiring](/control-panels-machine-wiring) work and by [motor control and machine connection](/projects/machine-connection-motor-control). A farm grain system is a small industrial plant standing in a field, and it deserves to be wired like one.",
      ],
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["farm-service-entrance-upgrade", "machine-connection-motor-control", "underground-feeders-farm-yard"],

  keywords: [
    "electric grain dryer",
    "grain bin wiring",
    "grain handling electrical",
    "agricultural electrician",
    "barn electrical",
  ],
};

export default project;
