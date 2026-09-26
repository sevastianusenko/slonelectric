import type { Project } from "./types";

const project: Project = {
  slug: "poultry-house-ventilation-power",
  title: "Ventilation power and controller wiring for a poultry house",
  category: "Agricultural",
  location: "Lancaster County, PA",
  summary:
    "Powering poultry house ventilation: minimum and tunnel fan loads, controller and sensor wiring, alarms, generator interlock and NEC 547 wiring methods.",
  lead:
    "Ventilation is the one system in a poultry house that the birds cannot live without for long. On a hot day a house that loses air movement starts losing birds inside the hour, which puts the fan circuits, the controller and the alarm in a different category from the rest of the wiring. This is the power and control side of that system.",

  photos: [
    {
      src: "/photos/projects/poultry-house-ventilation-power-1.webp",
      alt: "Long poultry house interior with new lighting running the length of the building",
    },
    {
      src: "/photos/projects/poultry-house-ventilation-power-2.webp",
      alt: "Empty agricultural building under construction with timber walls and conduit runs",
    },
  ],

  sections: [
    {
      heading: "Why ventilation is the circuit that cannot fail",
      body: [
        "Lancaster County sits near the top of the national poultry numbers, and the houses here are long, tight and completely dependent on mechanical ventilation. A modern house is a sealed box. Air comes in through inlets a machine opens and leaves through fans a machine starts, and if that chain stops on a July afternoon the inside temperature climbs faster than most people outside the industry expect.",
        "That changes how the wiring gets designed. A feed auger that trips on a Sunday is an inconvenience. A bank of tunnel fans that trips on a Sunday is the whole house. What follows is dedicated circuits instead of shared ones, conductor sizing with headroom, a controller fed from a source that survives an outage, and an alarm that reaches a phone rather than a light on a wall. We treat it as the core of the [agricultural electrical work](/agricultural-electrical-services) on the farm, not as one more load on the barn panel.",
      ],
    },
    {
      heading: "Minimum ventilation and tunnel are two different loads",
      body: [
        "A house runs two ventilation modes and they ask different things of the electrical system. Minimum ventilation is the cold weather mode: a few exhaust fans on a timer or a static pressure setpoint, cycling on and off constantly to exchange air without dumping house temperature. Those fans start and stop many times an hour, every hour, for months. Contactors and starters in that duty wear out on a cycle count rather than on age, and they should be chosen on that basis.",
        "Tunnel is the opposite problem. In hot weather the house pulls air end to end through a wall of fans and every fan in the building can be running at once. That is the peak the service, the feeders and the overcurrent protection have to carry, and it is the number that gets underestimated on older houses where fans were added over the years without anyone going back to the panel. Stir fans, inlet machines, cool cell pumps and curtain motors sit between the two modes, small on their own and a real load together.",
      ],
    },
    {
      heading: "Sizing for fan motors, inrush and voltage drop",
      body: [
        "A ventilation panel does not get sized on nameplate running amps. A motor drawing a handful of amps in normal operation pulls several times that on start, commonly six to eight times full load current for a fraction of a second. Article 430 of the National Electrical Code handles this by sizing the branch circuit short circuit and ground fault device well above the running load while a separate overload device protects the motor itself.",
        "Get that split wrong and the symptom is nuisance tripping. When the controller stages several fans on in the same second the inrush currents stack, and protection sized on running amps drops out on the hottest afternoon of the year. The answer is staging the starts in the controller, not fitting a larger breaker and hoping.",
        "Voltage drop is the other half. Houses here run five hundred feet or more, so the fans at the far end sit at the end of a long run. A motor fed at low voltage draws more current, runs hotter and dies early. Holding the drop inside the three percent commonly used on branch circuits costs one conductor size and saves the motor.",
      ],
    },
    {
      heading: "The controller, its sensors and the low voltage side",
      body: [
        "The controller is the brain of the house and the weakest point when it is wired as an afterthought. It takes a mains supply and sends low voltage signals out through the building: temperature probes at bird level and at the ceiling, static pressure, humidity, inlet and curtain position feedback, water meters and relay outputs back to every fan stage.",
        "Those signal cables have to be kept away from the motor circuits. A probe lead run in the same raceway as a fan feeder picks up noise, and noise on a temperature input shows up as a controller making decisions on a reading that was never real. Separate raceways, shielded cable where the manufacturer calls for it, and shields landed at one end only. That is ordinary [control panel and machine wiring](/control-panels-machine-wiring) practice and it applies here unchanged.",
        "Sensor placement is worth as much as the cable. Probes belong where the birds are and where the air actually moves, not where the run was convenient. A house with all of its sensing at one end ventilates to a temperature that does not exist in the other half of the building.",
      ],
    },
    {
      heading: "Alarms, dialers and losing the utility at two in the morning",
      body: [
        "An alarm is not an accessory here. The normal package is high and low temperature, power failure and static pressure, wired to a dialer or a cellular unit that works down a list of numbers until somebody acknowledges it. The alarm needs a supply independent of the circuits it is watching plus a battery, or the first fault takes the alarm out with it.",
        "Backup power is the other half of the same answer. A standby set on a poultry farm exists to keep fans turning. That means a transfer switch rated for the job, an interlock so the set can never be paralleled with the utility, and a load plan agreed in advance. Sizing and equipment sit on our [standby generator installation](/standby-generator-installation) page, and the farm version is worked through in [a farm standby generator job](/projects/farm-standby-generator).",
      ],
      bullets: [
        "Temperature alarms fed independently of the circuits they watch",
        "Power failure alarm with a battery so the dialer survives the outage",
        "Static pressure alarm to catch a blocked inlet before the house heats",
        "Interlocked transfer switch so the set can never backfeed the utility",
        "A written plan for what runs on generator and what is shed",
      ],
    },
    {
      heading: "Dust, ammonia and the reason Article 547 reads the way it does",
      body: [
        "Article 547 of the code covers agricultural buildings and poultry houses are much of the reason it exists. Litter dust is combustible and gets everywhere, ammonia sits high enough to attack aluminium and copper within a flock cycle, and washdown puts water into anything not built to keep it out. The article drives wiring method, box and fitting selection, bonding and equipotential requirements, and it is the part missed by crews who do not work on farms often.",
        "In practice that means gasketed enclosures, corrosion resistant fittings, no open knockouts, and terminations that can be opened and inspected without taking half the house apart. Dust on and inside gear is a heat problem as much as an ignition one, so enclosures get located where they can be blown down.",
        "The same methods carry across the farm. House lighting runs its own dimming program tied to bird age and needs fixtures chosen for these conditions, which is the thinking behind [the barn relighting work](/projects/free-stall-barn-lighting). When a house is added to an existing yard the supply is the first thing to look at, and that is [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
      ],
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
  ],

  related: ["farm-standby-generator", "free-stall-barn-lighting", "farm-service-entrance-upgrade"],

  keywords: [
    "poultry house ventilation",
    "poultry house wiring",
    "agricultural electrician",
    "poultry house lighting",
    "poultry farm generator",
  ],
};

export default project;
