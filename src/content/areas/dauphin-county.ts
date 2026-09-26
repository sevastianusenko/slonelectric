import type { Area } from "./types";

const area: Area = {
  slug: "dauphin-county",
  county: "Dauphin County",
  title: "Electrician in Dauphin County PA | Commercial & Industrial Service",
  h1: "Electrical service across Dauphin County",
  summary:
    "Commercial, industrial and agricultural electrical service across Dauphin County PA: Harrisburg, Hershey, Hummelstown and the river towns. Call (717) 821-9166.",
  lead:
    "Dauphin County is our western run, and it splits cleanly in two. The southern end is commercial and industrial: Harrisburg, the food manufacturing around Hershey, and the buildings that serve both. North of that the county turns rural fast, and the work looks like the farm work we do at home.",
  drive: "Hershey and Hummelstown are 25 to 35 minutes. Harrisburg runs 35 to 50 depending on the hour.",

  hero: {
    src: "/photos/services/electrical-service-upgrades.webp",
    alt: "Distribution switchboard installed in a commercial building",
  },

  towns: [
    {
      name: "Hershey",
      note: "Food manufacturing, hospitality and medical buildings, where production schedules decide when we can be in the room.",
    },
    {
      name: "Hummelstown",
      note: "Small commercial and older stock along the 322 corridor, with farm ground starting just outside it.",
    },
    {
      name: "Harrisburg",
      note: "City commercial: offices, restaurants, retail and services that have been added to for decades.",
    },
    {
      name: "Middletown",
      note: "Industrial and logistics along the river and the airport, plus older buildings changing use.",
    },
    {
      name: "Steelton",
      note: "Heavy industrial history and the wiring that came with it, much of it now feeding something different.",
    },
    {
      name: "Millersburg",
      note: "The rural north of the county: farms, shops and long runs between buildings.",
    },
    {
      name: "Elizabethville",
      note: "Poultry, dairy and grain in the upper end of the county, the furthest we usually go in this direction.",
    },
  ],

  sections: [
    {
      heading: "Two counties in one set of lines",
      body: [
        "The southern third of Dauphin is dense and commercial. The northern two thirds is farm ground with small boroughs in it. An electrician working only in Harrisburg and an electrician working only above Millersburg would barely recognise each other's week.",
        "We work both, and we would rather say plainly which one you are in when you call. A restaurant fit out in the city and [a grain dryer](/projects/grain-system-power-controls) above Elizabethville are different jobs with different constraints, and the only thing they share is that somebody needs a straight answer about what it takes.",
      ],
    },
    {
      heading: "Food manufacturing and the window it gives you",
      body: [
        "The production around Hershey follows the same rule as every other plant we work in: the electrical work is not measured in hours of labour, it is measured in hours of production lost. That makes scheduling and preparation more important than the wiring itself.",
        "A window holds when the work is built before it opens: conduit racks prefabricated, wire cut and labelled at both ends, gear staged inside the building rather than on a truck somewhere. What that looks like start to finish is in [plant wiring during a shutdown](/projects/plant-wiring-during-shutdown).",
      ],
    },
    {
      heading: "Older city buildings and their services",
      body: [
        "Harrisburg and the river boroughs have a lot of stock that has been added to over many decades. The recurring problem is not the wiring so much as the record of it: a directory written in pencil, a sub panel fed from a sub panel, and nobody left who can say what each breaker feeds.",
        "That turns every isolation into a hunt and somebody's freezer goes dark by accident. We re identify circuits as we work and leave a schedule that matches the building, for the reasons set out in [how to read a panel schedule](/blog/how-to-read-a-panel-schedule). Where the board itself is finished rather than just full, [the signs of that](/blog/signs-your-panel-needs-replacing) are worth reading first.",
      ],
    },
  ],

  demand: [
    {
      title: "Commercial fit outs and remodels",
      body:
        "Offices, retail and restaurants, staged around trading hours and the inspection sequence rather than around us.",
      service: "commercial-electrical-services",
    },
    {
      title: "Plant and production work",
      body:
        "Machine connections, motor circuits and drives, built beforehand so the shutdown window actually holds.",
      service: "industrial-electrical-services",
    },
    {
      title: "Service and panel replacement",
      body:
        "Older city services that ran out of room, including boards that are a replacement rather than a repair.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Preventive maintenance",
      body:
        "Infrared surveys under load and the insurer ready report that comes out of them, on a yearly interval.",
      service: "electrical-preventive-maintenance",
    },
    {
      title: "Farm work in the north",
      body:
        "Poultry, dairy and grain above Millersburg, with the same Article 547 requirements as anywhere else.",
      service: "agricultural-electrical-services",
    },
    {
      title: "EV charging",
      body:
        "Staff, fleet and customer parking, with the load calculation done before anybody orders equipment.",
      service: "ev-charging-installation",
    },
  ],

  facilities: [
    "Food manufacturing and packaging plants",
    "Offices, retail and restaurants",
    "Medical and institutional buildings",
    "Warehouses and logistics facilities",
    "Older borough buildings changing use",
    "Poultry, dairy and grain farms in the north",
    "Shops, garages and service bays",
  ],

  faq: [
    {
      q: "Is Harrisburg too far for a service call?",
      a: "Not for planned work, and not for anything larger. For a small fault call in the city there are electricians much closer than us, and we will say so rather than charge you for the drive.",
    },
    {
      q: "Do you work north of Harrisburg?",
      a: "Yes, up through Millersburg and Elizabethville, mostly on farm and shop work. That end of the county is a long run, so those jobs get scheduled rather than treated as same day.",
    },
    {
      q: "Can you work around production at a plant?",
      a: "That is how this work should be done. Give us the window early enough that material and prefabrication finish before it opens, because a job that starts by unloading a truck has already lost the weekend.",
    },
    {
      q: "Our building has no drawings and a wrong directory. Where does that start?",
      a: "With finding out what is actually there. Tracing and re labelling is unglamorous and it is the only honest starting point, because nothing can be planned around a record that is wrong.",
    },
    {
      q: "Do you handle the permit in Dauphin County?",
      a: "Yes. The city and the townships use different inspection arrangements, so we apply to whichever one covers the address, book the stages and meet the inspector on site.",
    },
  ],

  related: {
    projects: [
      "plant-wiring-during-shutdown",
      "office-remodel-power-lighting",
      "commercial-panel-room-feeders",
      "infrared-survey-switchboard",
    ],
    articles: [
      "how-to-read-a-panel-schedule",
      "signs-your-panel-needs-replacing",
      "cost-to-replace-electrical-panel",
    ],
  },

  neighbours: ["lebanon-county", "lancaster-county", "cumberland-county", "schuylkill-county", "york-county"],

  keywords: [
    "electrician dauphin county pa",
    "commercial electrician harrisburg pa",
    "industrial electrician harrisburg",
    "electrician hershey pa",
    "electrician hummelstown pa",
  ],
};

export default area;
