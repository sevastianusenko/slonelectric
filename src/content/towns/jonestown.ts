import type { Town } from "./types";

const town: Town = {
  slug: "jonestown",
  town: "Jonestown",
  county: "lebanon-county",
  title: "Electrician in Jonestown PA | Distribution, Farm & Shop Work",
  h1: "Electrical service in Jonestown",
  summary:
    "Electrician for Jonestown PA and the I-78 and I-81 interchange: distribution buildings, truck facilities, and farm ground on every side of them.",
  lead:
    "Jonestown is where I-78 meets I-81, and that interchange put distribution buildings and truck facilities on ground that was farmland. Both are still here, often across the road from each other, and we work both.",
  drive: "Fifteen to twenty minutes from Myerstown, up the 22 or across on the 72.",

  hero: {
    src: "/photos/services/industrial-electrical-services.webp",
    alt: "Crews working on processing equipment inside a Pennsylvania plant",
  },

  sections: [
    {
      heading: "Buildings measured in acres",
      body: [
        "Distribution buildings at an interchange are big enough that ordinary assumptions stop working. A lighting layout that is right for a forty thousand square foot warehouse is not simply repeated four times for one four times the size, because racking, aisle direction and mounting height change what lands where.",
        "The same goes for what they hold. A building leased by one tenant for pallets and by the next for automated handling is electrically a different building, with conveyor power, equipment charging and a load nobody recalculated. That conversation starts with [a load study](/projects/load-study-and-drawings).",
      ],
    },
    {
      heading: "Truck facilities and equipment charging",
      body: [
        "Terminals and maintenance shops around the interchange run fleets, and fleets increasingly mean charging. Four chargers at forty eight amps is two hundred and forty amps of continuous demand, which is more spare capacity than many buildings have once lighting and handling equipment are counted.",
        "Load management is usually the answer rather than a service upgrade, because vehicles that sit overnight do not care how fast they were filled. The arithmetic is on [the EV charging page](/ev-charging-installation).",
      ],
    },
  ],

  landmarks: [
    "The I-78 and I-81 interchange",
    "Distribution and fulfilment buildings",
    "Truck terminals and maintenance shops",
    "Route 22 and 72 corridors",
    "Union and Swatara Township farm ground",
    "Fort Indiantown Gap approach",
  ],

  demand: [
    {
      title: "High bay laid out to the racking",
      body: "Lighting set out from the rack plan rather than a grid, because a grid over racking lights the tops of shelves.",
      service: "commercial-led-lighting",
    },
    {
      title: "Charging banks for lift trucks",
      body: "A charging room draws for hours rather than minutes, so it is designed as a continuous load and not as receptacles.",
      service: "ev-charging-installation",
    },
    {
      title: "Conveyor and handling equipment",
      body: "Machine connections, motor circuits and drives, with the drive cable and bonding done the way a drive needs.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Distribution across a long floor",
      body: "Sub panels and switchgear placed into the building, so the far end is not fed from a board at the opposite wall.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Farm work around the interchange",
      body: "Dairy, grain and pole buildings through Union and Swatara townships, right next to the distribution ground.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Planned maintenance",
      body: "Infrared surveys under load on switchgear and motor control centres, on a booked yearly interval.",
      service: "electrical-preventive-maintenance",
    },
  ],

  faq: [
    {
      q: "How many chargers will our service take?",
      a: "That comes from measured demand rather than the size of the service. Two buildings with identical services often have very different answers, and a recording meter on the main for a month settles it.",
    },
    {
      q: "Can lighting work happen around a shift operation?",
      a: "Yes, a zone at a time with temporary lighting where it is needed. In a shift operation the work usually follows the quietest part of the day rather than the calendar.",
    },
    {
      q: "Is Jonestown a quick run for you?",
      a: "Yes, fifteen to twenty minutes. That matters for an unplanned call where a line or a cooler is down.",
    },
    {
      q: "Do you do the farms out this way too?",
      a: "Yes. The ground around the interchange is still dairy and grain, and that work is ordinary weekly work for us.",
    },
  ],

  related: {
    projects: ["warehouse-high-bay-lighting", "ev-charging-commercial-site", "load-study-and-drawings", "three-phase-distribution-upgrade"],
    articles: ["high-bay-led-lighting", "service-load-calculation", "three-phase-vs-single-phase"],
  },

  nearby: ["lebanon", "annville", "richland"],

  keywords: [
    "electrician jonestown pa",
    "warehouse electrician jonestown pennsylvania",
    "commercial electrician jonestown pa",
    "industrial electrician jonestown",
  ],
};

export default town;
