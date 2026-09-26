import type { Area } from "./types";

const area: Area = {
  slug: "york-county",
  county: "York County",
  title: "Electrician in York County PA | Manufacturing, Plant & Farm Work",
  h1: "Electrical service across York County",
  summary:
    "Industrial, commercial and agricultural electrical service across York County PA: manufacturing, food plants, warehouses and farms. Call (717) 821-9166.",
  lead:
    "York County is a planned run for us, and what brings us there is mostly machinery. This is a manufacturing county with a long history of it, and the electrical work reflects that: motor circuits, drives, machine connections and plants that measure downtime by the hour rather than by the invoice.",
  drive: "York itself is around an hour. Southern and western parts of the county are longer.",

  hero: {
    src: "/photos/services/industrial-electrical-services.webp",
    alt: "Crews working on processing equipment inside a Pennsylvania plant",
  },

  towns: [
    {
      name: "York",
      note: "Manufacturing, machine shops and a commercial core with buildings of every vintage in it.",
    },
    {
      name: "Hanover",
      note: "Food and snack production on a scale that makes shutdown windows the whole conversation.",
    },
    {
      name: "Dover",
      note: "Light industrial and farm ground together, with pole buildings and shops through the township.",
    },
    {
      name: "Red Lion",
      note: "Manufacturing and fabrication units, plus older borough commercial stock.",
    },
    {
      name: "Dallastown",
      note: "Small manufacturing and commercial work, with agriculture starting immediately outside the borough.",
    },
    {
      name: "Spring Grove",
      note: "Heavy process industry and the electrical demands that come with continuous production.",
    },
    {
      name: "Wrightsville",
      note: "The river end of the county, industrial and commercial, and the shortest hop back into Lancaster.",
    },
  ],

  sections: [
    {
      heading: "A county that runs on machinery",
      body: [
        "Manufacturing here is not one industry but many: fabrication in York and Red Lion, food and snack production around Hanover, process industry at Spring Grove, and a long tail of machine shops in between. What they have in common electrically is motors, and motors are where the expensive mistakes live.",
        "The most common one we are called to correct is protection. Overload protection and short circuit protection are two different jobs done by two different devices, and Article 430 separates them on purpose. A breaker sized correctly for the conductors will protect a motor from almost nothing, which is why most cooked windings we look at were behind a perfectly correct breaker.",
        "The order to work through when one will not turn is in [why a three phase motor will not start](/blog/three-phase-motor-wont-start).",
      ],
    },
    {
      heading: "Drives, and the faults they invent",
      body: [
        "Variable frequency drives are everywhere in these plants, and they created a class of fault that did not exist before. A drive output is not a sine wave, it is a train of pulses switched at several kilohertz, and cable capacitance to ground charges and discharges on each one.",
        "That is why a drive can trip on ground fault with a motor that meggers perfectly, and why a clamp meter on the output reads a number that means nothing. The search order is in [chasing a VFD ground fault](/blog/vfd-ground-fault-troubleshooting), and the installation requirements that prevent it are on [the control panels page](/control-panels-machine-wiring).",
      ],
    },
    {
      heading: "Farm country in the south",
      body: [
        "Below Dallastown the county turns agricultural, with dairy, grain and the pole buildings that go with them. It is continuous with the farm work we do in Lancaster, and the requirements do not change: Article 547 wiring methods, fixtures that survive ammonia, and yards that were wired one building at a time.",
        "That is a long drive from us for a small job, and we will say so. For [a service rebuild](/electrical-service-upgrades), a generator or a controls job it is a normal day.",
      ],
    },
  ],

  demand: [
    {
      title: "Machine connection and motor control",
      body:
        "New equipment taken from the vendor drawing to the terminal block, started, proved and handed over running.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Shutdown and outage work",
      body:
        "Prefabricated beforehand so the window holds, with a written switching sequence agreed with your people.",
      service: "industrial-electrical-services",
    },
    {
      title: "Drive installation and faults",
      body:
        "Shielded cable, correct bonding and reactors where leads are long, plus diagnosis when one keeps tripping.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Plant distribution",
      body:
        "Switchboards, feeders and transformers for buildings adding load the original design never allowed for.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Arc flash studies and maintenance",
      body:
        "Incident energy analysis, labels your own people can work to, and infrared surveys on a booked interval.",
      service: "electrical-preventive-maintenance",
    },
    {
      title: "Farm work in the south",
      body:
        "Dairy, grain and pole buildings below York, the same work we do at home in Lebanon and Lancaster.",
      service: "agricultural-electrical-services",
    },
  ],

  facilities: [
    "Manufacturing and fabrication plants",
    "Food and snack production facilities",
    "Machine shops and welding bays",
    "Warehouses and distribution buildings",
    "Process industry and continuous production",
    "Dairy and grain farms in the south",
    "Commercial units and borough stock",
  ],

  faq: [
    {
      q: "Is York County within your service area?",
      a: "For planned work, yes. It is around an hour each way, so we take shutdown work, machine installations, controls jobs and larger projects there rather than small same day service calls.",
    },
    {
      q: "Can you work a shutdown weekend?",
      a: "That is when most of this work should happen. What decides whether a window holds is the two weeks before it: racks bent, wire cut and labelled, gear staged inside the building rather than on a truck.",
    },
    {
      q: "Our drive trips on ground fault but the motor tests fine.",
      a: "That is usually the cable, the shielding and the lead length rather than the motor, and the drive's own trip setting is often part of it. We start there before anybody reaches for a megger.",
    },
    {
      q: "Do you build control panels?",
      a: "We wire, modify and connect panels and machines. Where the installation calls for a listed industrial control panel under Article 409, that assembly has to come from a shop carrying the listing, and we will tell you that rather than work around it.",
    },
    {
      q: "Who handles lockout on your work?",
      a: "Your programme governs the plant and we work inside it. Before anything is isolated we agree a written sequence naming who holds which lock and what gets energised in which order.",
    },
  ],

  related: {
    projects: [
      "machine-connection-motor-control",
      "plant-wiring-during-shutdown",
      "instrument-racks-process-wiring",
      "preventive-maintenance-arc-flash",
    ],
    articles: [
      "three-phase-motor-wont-start",
      "vfd-ground-fault-troubleshooting",
      "what-is-a-vfd",
    ],
  },

  neighbours: ["lancaster-county", "dauphin-county", "cumberland-county"],

  keywords: [
    "electrician york county pa",
    "industrial electrician york pa",
    "commercial electrician york pa",
    "plant electrician york county",
    "electrician hanover pa",
  ],
};

export default area;
