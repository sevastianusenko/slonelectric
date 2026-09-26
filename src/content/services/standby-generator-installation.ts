import type { Service } from "./types";

const service: Service = {
  slug: "standby-generator-installation",
  kind: "service",
  title: "Standby Generator Installation | Commercial & Farm Generators | Lancaster & Lebanon County PA",
  h1: "Standby generator installation for businesses and farms",
  summary:
    "Standby generator installation, transfer switches and generator service for farms, plants and businesses in Lebanon, Lancaster and Berks counties. Sized from a real load list.",
  lead:
    "Two mistakes account for almost every standby generator that disappoints its owner. The set was sized from the service rather than from the loads, and the starting load was never separated from the running load. Both are decided before anything is ordered, which makes the hour spent on the load list the most valuable hour in the whole project. The rest is installation work we do regularly on farms, plants and commercial buildings.",

  hero: {
    src: "/photos/services/standby-generator-installation.webp",
    alt: "Standby generator set with battery connections and exhaust in a generator room",
  },

  sections: [
    {
      heading: "Sizing begins with a load list",
      body: [
        "A 400A service does not mean you need 400A of generator. It means somebody sized a service for a building. What the generator has to carry is a much shorter list: the equipment that genuinely cannot be off, plus whatever has to move when it starts.",
        "So we walk the site and write that list down, item by item, with nameplate data rather than guesses. Motors get their full load current and their starting method recorded, because a motor started across the line draws roughly six times its full load current for the first moments, and the generator has to hold voltage and frequency through that. Heating elements, refrigeration, controls, well and transfer pumps, lighting, and anything with a compressor all get entered separately.",
        "That list does two jobs. It sets the size of the set, and it decides what goes on the emergency panel. Done properly it usually makes the generator smaller and cheaper than the number the owner had in their head, which is the point of [the load study write up](/projects/load-study-and-drawings).",
      ],
    },
    {
      heading: "Starting load against running load",
      body: [
        "Running load is the easy number. Starting load is the one that strands people. A set chosen to carry the running total of a poultry house will still stall when four tunnel fans and a well pump try to start at the same moment, because for a second or two the demand is several times the steady figure.",
        "There are three ways out, and they are worth comparing before spending money on a larger set. Sequence the starts so the loads come on in steps rather than together. Use soft starters or drives on the largest motors, which cuts the inrush substantially. Or accept the larger alternator. The arithmetic behind that choice is worked through in [why a generator that looks big enough still stalls](/blog/generator-sizing-starting-vs-running), and the cost side, including what actually drives the price, is in [what a standby generator costs](/blog/standby-generator-cost).",
      ],
    },
    {
      heading: "What goes on the emergency panel",
      body: [
        "Most installations here are optional standby systems under Article 702 rather than legally required systems, which means you choose what is backed up. That choice is where the money is saved or wasted. The honest version of the list is short, and everything on it earns its place.",
      ],
      bullets: [
        "Ventilation, and the controllers and alarms that run it",
        "Milk cooling, vacuum and the parlour, or refrigeration and freezers in a commercial building",
        "Well, water and transfer pumps",
        "Heating for young stock, and freeze protection on pipework",
        "Enough lighting to work safely, not every fixture in the building",
        "Controls, networking and whatever the alarm dialer runs on",
        "Deliberately left off: comfort cooling, yard lighting, welders, general receptacles and anything that can wait",
      ],
    },
    {
      heading: "Transfer switches and fuel",
      body: [
        "The transfer switch is not an accessory. It is the part that decides whether the system works while nobody is there, and it is the part that keeps your generator from backfeeding a line a utility worker is holding. Automatic switches sense the outage, start the set, transfer, and transfer back with a cooldown run afterwards. Manual switches cost less and are defensible where somebody is always on site, but on a livestock building the failure mode is obvious: the outage happens at four in the morning and nobody throws the handle. Service entrance rated, open transition and closed transition switches all have their place, and the differences are set out in [transfer switch types](/blog/transfer-switch-types). A completed installation is shown in [this generator and transfer switch job](/projects/standby-generator-transfer-switch).",
        "Fuel usually decides itself by what is at the road. Natural gas needs no storage and never goes stale, but much of the countryside here has no gas main, and sets are typically rated slightly lower on natural gas than on LP. LP means a tank, and the tank has to be sized for vaporisation in cold weather rather than just gallons, because a small tank in January cannot deliver what a large engine wants. Diesel stores energy densely and starts strongly, but fuel ages, so it needs treatment, testing and a tank you can actually fill in a storm.",
      ],
    },
    {
      heading: "The farm case, and the maintenance that keeps a set startable",
      body: [
        "On a farm, standby power is not about convenience. Ventilation is the load that decides whether the barn still has stock in it by morning, and that is a different level of urgency from a dark office. It also changes the specification: the set has to pick up fan motors, the transfer has to be automatic, and the alarm has to reach a person. [A farm standby installation](/projects/farm-standby-generator) and [the ventilation power arrangement behind it](/projects/poultry-house-ventilation-power) show how those pieces fit together.",
        "A generator that is not exercised is a decoration. Batteries are the most common single reason a standby set fails to start, followed by fuel condition and coolant. An automatic weekly exercise cycle, a battery checked rather than assumed, filters and fluids on a schedule, and a transfer switch that has actually moved this year are what separate a working system from an expensive one. The intervals are in [what a generator needs and how often](/blog/generator-maintenance-schedule), and it can sit inside [a wider maintenance programme](/electrical-preventive-maintenance). We also repair and service sets we did not install, including transfer switches that have stopped transferring.",
      ],
    },
  ],

  scope: [
    {
      group: "Sizing and design",
      note: "The part that decides whether the rest of the money is well spent.",
      items: [
        "Site survey and written load list from nameplates",
        "Starting against running load calculation",
        "Emergency panel contents agreed item by item",
        "Load shedding and step loading schemes",
        "Soft start and drive options to cut inrush",
        "Siting, clearances, noise and exhaust direction",
        "Fuel type comparison for the site",
        "Written proposal with the assumptions marked",
      ],
    },
    {
      group: "Generator installation",
      note: "Everything from the pad to the first supervised run.",
      items: [
        "Concrete pad and mounting preparation",
        "Air cooled and liquid cooled set installation",
        "Generator feeders, conduit and cable runs",
        "Grounding, bonding and neutral arrangement",
        "Battery, charger and block heater circuits",
        "Remote annunciator and status panel wiring",
        "Enclosure, weather and rodent protection details",
        "Commissioning under real load with a simulated outage",
      ],
    },
    {
      group: "Transfer equipment",
      note: "The part that works while nobody is standing there.",
      items: [
        "Automatic transfer switch installation",
        "Manual and roll up transfer switches",
        "Service entrance rated transfer equipment",
        "Open and closed transition switching",
        "Transfer switch replacement on existing sets",
        "Generator inlet boxes and interlock kits",
        "PTO generator connection points for farms",
        "Exercise timers, retransfer and cooldown settings",
      ],
    },
    {
      group: "Fuel and mechanical coordination",
      note: "Work we coordinate rather than do with a wrench.",
      items: [
        "Natural gas connection with the gas supplier",
        "LP tank sizing for cold weather vaporisation",
        "Diesel tank, fill point and containment coordination",
        "Fuel line routing and protection",
        "Exhaust routing and clearance checks",
        "Ventilation and cooling airflow for enclosed sets",
        "Sound attenuation where neighbours are close",
        "Permits and inspections for the installation",
      ],
    },
    {
      group: "Alarms and monitoring",
      note: "So a failure to start is known before it costs anything.",
      items: [
        "Power failure alarms and autodialers",
        "Generator running and fault signalling",
        "Low fuel, low battery and not in auto alarms",
        "High and low temperature alarms in livestock buildings",
        "Controller start signal wiring",
        "Remote monitoring and network connection",
        "Alarm testing and who it actually reaches",
        "Documentation of what each alarm means",
      ],
    },
    {
      group: "Service and repair",
      note: "Including sets we did not install.",
      items: [
        "Failure to start diagnosis and repair",
        "Battery, charger and starting circuit faults",
        "Transfer switch repair and contact replacement",
        "Controller faults and settings corrections",
        "Annual exercise, transfer and load testing",
        "Load bank testing where the set is oversized",
        "Filters, fluids and scheduled service intervals",
        "Retrofit of automatic transfer to an existing set",
      ],
    },
  ],

  facilities: [
    "Poultry houses and livestock barns",
    "Dairy parlours and milk cooling",
    "Grain dryers and handling systems",
    "Food processing plants and cold storage",
    "Restaurants and retail with refrigeration",
    "Offices, server and comms rooms",
    "Water, well and pumping stations",
  ],

  audience: [
    {
      title: "Poultry growers who cannot risk a still house",
      body:
        "Here the generator is not a convenience, it is whether the barn still has stock in it by morning. That changes the specification: it has to pick up fan motors, the transfer has to be automatic and the alarm has to reach a person who is asleep.",
    },
    {
      title: "Dairies protecting cooling and the parlour",
      body:
        "Milk that cannot be cooled is milk that cannot be sold, and a parlour that cannot run pushes the whole day. These usually need less generator than the owner expects once the list is honest about what is really critical.",
    },
    {
      title: "Plants measuring downtime by the hour",
      body:
        "Where the question is not whether to have standby power but which part of the plant it covers. We price the short list and the whole building where the choice is genuinely close, so the decision is made on numbers.",
    },
    {
      title: "Businesses with refrigeration or data to protect",
      body:
        "Restaurants, stores, cold storage and server rooms. Small sets, carefully chosen panels, and enough lighting to work safely rather than every fixture in the building.",
    },
    {
      title: "Owners who already have a set that disappointed them",
      body:
        "It stalls when the fans start, or it was never able to carry what they assumed. Often the fix is sequencing and soft starts rather than a bigger machine, and that costs a fraction of replacing it.",
    },
    {
      title: "Anyone whose generator failed to start when it mattered",
      body:
        "Almost always a battery, fuel condition or a controller left in the wrong position after somebody worked on it. We service and repair sets we did not install, and set an exercise schedule that makes the next outage boring.",
    },
  ],

  process: {
    title: "How a generator project runs",
    lines: [
      "A site visit and a written load list, taken from nameplates, with starting methods noted next to the motors.",
      "A size and a proposal, with the emergency panel contents agreed item by item so nothing is assumed.",
      "Location, clearances, exhaust direction, noise and how the fuel gets there, settled before ordering rather than after.",
      "Fuel and utility coordination: the gas supplier, the LP tank or the diesel tank, and the meter or service work if [the service itself needs upgrading](/electrical-service-upgrades).",
      "Installation: pad, set, feeders, transfer switch, grounding and bonding, controls and alarm wiring.",
      "Commissioning under real load, with a simulated outage, transfer, retransfer and cooldown watched from start to finish.",
      "Handover with the exercise schedule set, and a service interval agreed so it stays able to start.",
    ],
  },

  whyUs: [
    {
      title: "We size from the loads, not from the service",
      body:
        "A 400A service does not mean 400A of generator. It means somebody sized a service for a building. The list of what truly cannot be off is usually far shorter, and the set is usually smaller and cheaper than the number people arrive with.",
    },
    {
      title: "Starting load is treated as its own number",
      body:
        "A motor started across the line pulls roughly six times its full load current for the first moments. Ignore that and you buy a set that runs the building perfectly until the day four fans start together.",
    },
    {
      title: "We prove it with a real outage, not a start button",
      body:
        "Commissioning means opening the utility supply and watching the whole sequence: start, transfer, run under load, retransfer, cooldown. A set that has only ever been started on no load has not been tested.",
    },
    {
      title: "The alarm is treated as part of the system",
      body:
        "A generator that fails to start silently is the same as no generator. Not in auto, low battery, low fuel and failure to transfer all get signalled to something that will wake somebody up.",
    },
    {
      title: "We service sets other people installed",
      body:
        "Including transfer switches that have stopped transferring and controllers left in the wrong position. You do not have to have bought it from us to get it working again.",
    },
    {
      title: "We tell you what it will really cost to own",
      body:
        "Exercise cycles, batteries, fluids and a transfer that actually moves each year. Those numbers belong in the decision, not in a surprise three winters later.",
    },
  ],

  faq: [
    {
      q: "What size generator do we need?",
      a: "Nobody can answer that from the service size or the square footage. It comes from a list of the loads that must keep running, with the starting current of each motor included. That list is free to make and it decides everything else, including whether the answer is smaller than you expected.",
    },
    {
      q: "Do we need to back up the whole building?",
      a: "Rarely, and a whole building set costs a great deal more than a well chosen emergency panel. The exception is a plant or a farm where nearly everything is critical. We price both where the choice is genuinely close, so you can see the difference rather than take our word for it.",
    },
    {
      q: "Natural gas, LP or diesel?",
      a: "Natural gas if there is a main at the road, because there is nothing to refill and nothing to go stale. LP for most rural sites, with the tank sized for cold weather vaporisation rather than gallons alone. Diesel for larger sets and long outages, accepting that stored fuel needs treatment and testing.",
    },
    {
      q: "Can you install an automatic transfer switch on a generator we already own?",
      a: "Yes, and it is one of the more common jobs we do, usually on a farm where a manual switch has already been missed once at three in the morning. The choice between switch types is covered in [transfer switch types](/blog/transfer-switch-types).",
    },
    {
      q: "Do you service and repair generators as well as install them?",
      a: "Yes, including sets we did not install. Failures to start are usually battery, fuel or a controller left in the wrong position after somebody worked on it. If a set failed during an outage, [what happens on an emergency call](/emergency-electrician) describes how that night runs.",
    },
    {
      q: "How long does the whole project take?",
      a: "The electrical work is usually a few days. What sets the calendar is the lead time on the set and the transfer switch, plus the gas supplier or tank work and any utility involvement. We give you those three dates at proposal stage so nobody plans a winter around a guess.",
    },
    {
      q: "Our set stalls when the fans start. Do we need a bigger one?",
      a: "Not necessarily, and that is worth checking before spending. Sequencing the starts, or putting soft starters or drives on the largest motors, often solves it for a fraction of the cost of a larger alternator. The comparison is in [starting load against running load](/blog/generator-sizing-starting-vs-running).",
    },
  ],

  related: {
    projects: [
      "standby-generator-transfer-switch",
      "farm-standby-generator",
      "poultry-house-ventilation-power",
      "emergency-winter-failure",
      "load-study-and-drawings",
      "farm-service-entrance-upgrade",
      "dairy-parlour-bulk-tank-wiring",
      "surge-protection-service",
    ],
    articles: [
      "generator-sizing-starting-vs-running",
      "transfer-switch-types",
      "generator-maintenance-schedule",
      "standby-generator-cost",
      "three-phase-vs-single-phase",
    ],
  },

  seeAlso: [
    "emergency-electrician",
    "electrical-service-upgrades",
    "electrical-preventive-maintenance",
    "agricultural-electrical-services",
    "industrial-electrical-services",
  ],

  keywords: [
    "standby generator installation",
    "commercial generator installation",
    "generator installation",
    "automatic transfer switch installation",
    "farm generator",
    "generator repair",
  ],
};

export default service;
