import type { Area } from "./types";

const area: Area = {
  slug: "cumberland-county",
  county: "Cumberland County",
  title: "Electrician in Cumberland County PA | Warehouse & Plant Service",
  h1: "Electrical service across Cumberland County",
  summary:
    "Commercial and industrial electrical service across Cumberland County PA: warehouses along I-81, plants, fit outs and farm work in the valley. Call (717) 821-9166.",
  lead:
    "Cumberland County is a planned run for us rather than a same day one, and the work that brings us there is specific. The I-81 corridor through Carlisle and Mechanicsburg holds one of the heaviest concentrations of distribution buildings in the east, and behind them the Cumberland Valley is still farm ground.",
  drive: "Mechanicsburg is around 50 minutes. Carlisle and west of it is an hour or more.",

  hero: {
    src: "/photos/services/commercial-led-lighting.webp",
    alt: "Large commercial space with new linear LED lighting",
  },

  towns: [
    {
      name: "Mechanicsburg",
      note: "Distribution buildings, commercial fit outs and the offices that go with them, the closest part of the county to us.",
    },
    {
      name: "Camp Hill",
      note: "Retail, offices and medical suites, where work has to fit around opening hours rather than around a crew.",
    },
    {
      name: "New Cumberland",
      note: "Logistics and light industrial near the river crossings, with older stock in the borough itself.",
    },
    {
      name: "Carlisle",
      note: "The centre of the warehouse corridor, plus manufacturing and a commercial core with buildings of every age.",
    },
    {
      name: "Boiling Springs",
      note: "Smaller commercial and farm work south of the turnpike, quieter than the corridor either side of it.",
    },
    {
      name: "Newville",
      note: "Dairy, grain and pole buildings in the valley, the kind of work we do at home every week.",
    },
    {
      name: "Shippensburg",
      note: "The far western end of our range: distribution, light manufacturing and farms around it.",
    },
  ],

  sections: [
    {
      heading: "Buildings measured in acres",
      body: [
        "The distribution buildings along this corridor are big enough that ordinary assumptions stop working. A lighting layout that is correct for a 40,000 square foot warehouse is not simply repeated for one four times that size, because racking, aisle direction and mounting height change what lands where.",
        "The same goes for what they hold. A building leased by one tenant for pallets and by the next for automated handling is electrically a different building, with conveyor power, charging areas for equipment and a load nobody recalculated. That conversation starts with [a load study](/projects/load-study-and-drawings) rather than with a guess at the service.",
      ],
    },
    {
      heading: "Equipment charging is the load that surprises people",
      body: [
        "Distribution sites run fleets of electric lift trucks and increasingly electric vehicles, and both are continuous loads in the way the Code means it. Four chargers at 48 amps is 240 amps of continuous demand, which is more spare capacity than many buildings have once lighting and handling equipment are counted.",
        "Load management is usually the answer rather than a service upgrade, because vehicles that sit overnight do not care how fast they were filled. The arithmetic and what the Code permits is set out on [the EV charging page](/ev-charging-installation), and a finished site is in [this commercial charging job](/projects/ev-charging-commercial-site).",
      ],
    },
    {
      heading: "The valley behind the corridor",
      body: [
        "South and west of the interstate the county is farm ground: dairy, grain and the pole buildings that go with them. It is the same work we do in Lebanon and Lancaster, with the same Article 547 requirements and the same long runs between buildings.",
        "We are honest that distance makes us the wrong call for a small fault out here. For a planned job, [a service rebuild](/electrical-service-upgrades) or a generator, an hour each way is a normal part of the day and it does not change the price of the work itself.",
      ],
    },
  ],

  demand: [
    {
      title: "Warehouse lighting and controls",
      body:
        "High bay layouts worked to the racking, with aisle sensing that pays for itself across a year of running.",
      service: "commercial-led-lighting",
    },
    {
      title: "Fleet and equipment charging",
      body:
        "Lift truck and vehicle charging, sized with load management so the service usually does not have to grow.",
      service: "ev-charging-installation",
    },
    {
      title: "Capacity and distribution work",
      body:
        "Feeders, sub panels and switchgear for buildings whose use changed without the electrical design changing.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Conveyor and handling equipment",
      body:
        "Machine connections, motor circuits and drives, with the drive cable and grounding done the way a drive needs.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Planned maintenance",
      body:
        "Infrared surveys under load on switchgear and motor control centres, on a booked yearly interval.",
      service: "electrical-preventive-maintenance",
    },
    {
      title: "Farm work in the valley",
      body:
        "Dairy, grain and pole buildings west of the corridor, the same work we do at home.",
      service: "agricultural-electrical-services",
    },
  ],

  facilities: [
    "Distribution and fulfilment centres",
    "Cold storage and food warehousing",
    "Light manufacturing and assembly",
    "Offices, retail and medical suites",
    "Truck terminals and maintenance shops",
    "Dairy and grain farms in the valley",
    "Pole buildings and equipment storage",
  ],

  faq: [
    {
      q: "Are you too far away to be useful in Cumberland County?",
      a: "For emergency work, usually yes, and we will say so rather than let you wait. For planned work, a lighting retrofit, a charging installation or plant work in a shutdown, the drive is a normal part of the day.",
    },
    {
      q: "How many chargers will our service take?",
      a: "That comes from measured demand rather than from the size of the service. Two buildings with identical services often have very different answers, and a recording meter on the main for a month settles it.",
    },
    {
      q: "Can you do a lighting retrofit without stopping operations?",
      a: "Yes, a zone at a time with temporary lighting where it is needed. Circuits outside the section being worked on stay live, and in a shift operation the work usually follows the quietest part of the day.",
    },
    {
      q: "Do you take on new construction here?",
      a: "For the right job, yes, usually as a subcontractor where the electrical scope suits what we do. The honest limit is that a long daily commute makes us uncompetitive on jobs that need a crew there every day for months.",
    },
    {
      q: "Who inspects work in Cumberland County?",
      a: "Whichever third party agency the municipality uses, and it varies by township and borough. We make the application, book the stages and meet the inspector.",
    },
  ],

  related: {
    projects: [
      "warehouse-high-bay-lighting",
      "ev-charging-commercial-site",
      "load-study-and-drawings",
      "three-phase-distribution-upgrade",
    ],
    articles: [
      "high-bay-led-lighting",
      "electrical-distribution-in-a-building",
      "three-phase-vs-single-phase",
    ],
  },

  neighbours: ["dauphin-county", "york-county", "lebanon-county"],

  keywords: [
    "electrician cumberland county pa",
    "commercial electrician carlisle pa",
    "electrician mechanicsburg pa",
    "warehouse electrician cumberland county",
    "industrial electrician carlisle pa",
  ],
};

export default area;
