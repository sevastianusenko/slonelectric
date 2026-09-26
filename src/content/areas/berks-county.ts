import type { Area } from "./types";

const area: Area = {
  slug: "berks-county",
  county: "Berks County",
  title: "Electrician in Berks County PA | Warehouse, Plant & Farm Work",
  h1: "Electrical service across Berks County",
  summary:
    "Commercial, industrial and agricultural electrical service across Berks County PA: warehouses, food plants, farms and fit outs. Call (717) 821-9166.",
  lead:
    "Berks County is the direction most of our commercial and warehouse work comes from. The corridor along I-78 and Route 222 has filled with distribution buildings and food production, and behind them the farm ground carries on exactly as it does on our side of the county line.",
  drive: "The western end is 15 to 25 minutes out. Reading and east of it runs 30 to 45.",

  hero: {
    src: "/photos/services/commercial-electrical-services.webp",
    alt: "Large commercial interior with linear lighting installed by Slon Electric",
  },

  towns: [
    {
      name: "Womelsdorf",
      note: "The closest Berks town to us. Farms, shops and small commercial work, often the same day it is called in.",
    },
    {
      name: "Robesonia",
      note: "Mixed farm and light industrial along 422, with pole buildings and equipment sheds behind most of it.",
    },
    {
      name: "Reading",
      note: "City commercial stock: older services, fit outs, restaurants and buildings on their third change of use.",
    },
    {
      name: "Wyomissing",
      note: "Offices, retail and medical suites, where the work happens outside trading hours more often than not.",
    },
    {
      name: "Hamburg",
      note: "Distribution and manufacturing off the I-78 interchange, plus farms up the valley behind it.",
    },
    {
      name: "Bernville",
      note: "Poultry and dairy country north of the Tulpehocken, with long service runs between buildings.",
    },
    {
      name: "Kutztown",
      note: "The northeastern end of the county, farm ground and small commercial, and about as far east as we usually go.",
    },
  ],

  sections: [
    {
      heading: "A county built around freight",
      body: [
        "I-78 and Route 222 turned this county into a distribution corridor, and warehouse work has its own electrical profile. High bay lighting over racking that blocks it from the side, dock power, conveyor and handling equipment, and a service that was sized for the building rather than for what ended up inside it.",
        "Lighting is the part people notice and the part most often done badly. A warehouse lit to a number on a spec sheet still has dark aisles, because the layout is a beam angle and spacing problem before it is a fixture problem. That reasoning is in [choosing and spacing high bay LED](/blog/high-bay-led-lighting), and a finished retrofit is in [the warehouse high bay job](/projects/warehouse-high-bay-lighting).",
      ],
    },
    {
      heading: "Food production, and what washdown does to wiring",
      body: [
        "Berks has a long run of food and snack production, and those plants are hard on electrical work in a specific way. Daily sanitation means water and chemicals at pressure, so the wiring method, the enclosure rating and the fittings have to suit the room rather than the price list.",
        "Equipment chosen from a general commercial catalogue survives an office for twenty years and a washdown area for two. What that looks like done properly is in [power for food processing equipment](/projects/food-plant-equipment-power), and the machine side is on [the control panels page](/control-panels-machine-wiring).",
      ],
    },
    {
      heading: "The farm ground behind it",
      body: [
        "West and north of Reading the county is still poultry, dairy and grain, and it is continuous with the farm country we work in every week. The same Article 547 requirements apply, the same ammonia eats the same fixtures, and the same yards grew one building at a time.",
        "None of that stops at the county line, so neither do we. The full agricultural picture is on [the farm page](/agricultural-electrical-services).",
      ],
    },
  ],

  demand: [
    {
      title: "Warehouse lighting",
      body:
        "High bay retrofits laid out to the racking rather than to an empty floor, usually with fewer fixtures than were there before.",
      service: "commercial-led-lighting",
    },
    {
      title: "Commercial fit outs",
      body:
        "From a landlord shell to opening day, coordinated around the ceiling date and the inspection sequence.",
      service: "commercial-electrical-services",
    },
    {
      title: "Plant and machine wiring",
      body:
        "Equipment connections, motor circuits and drives, in washdown rated methods where the area demands them.",
      service: "industrial-electrical-services",
    },
    {
      title: "Service upgrades",
      body:
        "Buildings that changed use and added load nobody recalculated, plus the utility conversation that comes with it.",
      service: "electrical-service-upgrades",
    },
    {
      title: "EV and fleet charging",
      body:
        "Depots and staff parking, where load management usually saves the cost of a service upgrade entirely.",
      service: "ev-charging-installation",
    },
    {
      title: "Farm work west of Reading",
      body:
        "Poultry, dairy and grain on the Lebanon side of the county, the same work we do at home.",
      service: "agricultural-electrical-services",
    },
  ],

  facilities: [
    "Distribution and fulfilment warehouses",
    "Food and snack production plants",
    "Light manufacturing and machine shops",
    "Retail units, offices and medical suites",
    "Poultry houses and dairy barns",
    "Pole buildings and equipment sheds",
    "Truck terminals and dock facilities",
  ],

  faq: [
    {
      q: "Do you cover all of Berks County?",
      a: "The western half is routine for us and Reading is a normal run. East of Kutztown and down towards Boyertown is a longer drive, so for small service calls out there we will say honestly whether somebody closer serves you better.",
    },
    {
      q: "Can you work outside our trading hours?",
      a: "Yes, and for anything that interrupts tills, refrigeration or shipping it is usually cheaper overall. Evening and weekend labour costs more per hour and still less than closing the doors.",
    },
    {
      q: "Our warehouse is dark in the aisles but bright on the floor. Can that be fixed?",
      a: "Usually, and often without more wattage. It is a beam angle and spacing problem, and the fix starts with readings taken vertically on the rack face rather than flat on the slab.",
    },
    {
      q: "Do you do washdown areas in food plants?",
      a: "Yes, with wiring methods and enclosures chosen for daily sanitation rather than from a general catalogue. That choice is most of what decides whether the installation lasts.",
    },
    {
      q: "Who handles permits and inspections in Berks?",
      a: "We do. Municipalities here use different third party agencies, so the application goes to whichever one covers your township or borough, and we book the stages against the build sequence.",
    },
  ],

  related: {
    projects: [
      "warehouse-high-bay-lighting",
      "food-plant-equipment-power",
      "commercial-panel-room-feeders",
      "parking-lot-lighting",
    ],
    articles: [
      "high-bay-led-lighting",
      "electrical-distribution-in-a-building",
      "what-is-switchgear",
    ],
  },

  neighbours: ["lebanon-county", "lancaster-county", "schuylkill-county", "chester-county"],

  keywords: [
    "electrician berks county pa",
    "commercial electrician reading pa",
    "industrial electrician berks county",
    "warehouse lighting berks county",
    "electrician reading pa",
  ],
};

export default area;
