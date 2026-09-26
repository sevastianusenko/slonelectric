import type { Town } from "./types";

const town: Town = {
  slug: "lebanon",
  town: "Lebanon",
  county: "lebanon-county",
  title: "Electrician in Lebanon PA | Commercial, Plant & Service Work",
  h1: "Electrical service in Lebanon",
  summary:
    "Electrician for Lebanon PA: commercial buildings in the city, meat and food processing plants, older services that ran out of room, and same day calls.",
  lead:
    "Lebanon is the county seat and it is ten minutes from our shop, which makes it the place we reach fastest. The city has an older commercial core, a run of food and meat processing that the town is genuinely known for, and a lot of buildings whose electrical systems record every change of use they have been through.",
  drive: "Ten to fifteen minutes from Myerstown. The quickest run we make.",

  hero: {
    src: "/photos/services/emergency-electrician.webp",
    alt: "Electrical enclosure opened during an after hours repair",
  },

  sections: [
    {
      heading: "Food processing, which this town is named for",
      body: [
        "Lebanon bologna was developed by the Pennsylvania Dutch of this county and has been made here since well before the 1800s. The descendants of that trade are ordinary customers for us: meat and food processing where daily sanitation decides what wiring method survives, where motor circuits run the line, and where an hour of downtime costs more than the repair.",
        "Washdown rated methods, enclosures chosen for the room rather than the price list, and machine connections done from the real equipment schedule. What that looks like is in [power for food processing equipment](/projects/food-plant-equipment-power).",
      ],
    },
    {
      heading: "Why the response here is quicker",
      body: [
        "We are not going to pretend distance does not matter. A call in Lebanon gets a faster answer than the same call an hour away, simply because of where the trucks and the parts are.",
        "That matters most at night. Our listing says open 24 hours because that is how the phone is covered, and what an after hours call actually looks like is written up in [a winter failure](/projects/emergency-winter-failure).",
      ],
    },
    {
      heading: "Older city stock",
      body: [
        "The commercial buildings through the city have mostly been something else first. Panels with no space and no available breakers, sub panels fed from sub panels, and directories written in pencil by somebody who left years ago.",
        "Some of those boards are a replacement rather than a repair, and the difference is worth knowing before anybody quotes. [The signs a panel is finished](/blog/signs-your-panel-needs-replacing) sets them out.",
      ],
    },
  ],

  landmarks: [
    "Cumberland Street and the city commercial core",
    "Meat and food processing plants",
    "Light industrial around the city edges",
    "Route 422 and 72 corridors",
    "Older mixed use buildings through the city",
    "Shops, garages and service bays",
  ],

  demand: [
    {
      title: "Same day service calls",
      body: "The place we reach quickest. Fault finding, breakers, fixtures and the work that follows an equipment change.",
      service: "emergency-electrician",
    },
    {
      title: "Plant and machine work",
      body: "Washdown rated methods, motor circuits, drives and equipment connections inside the window you are given.",
      service: "industrial-electrical-services",
    },
    {
      title: "Panels at the end of their life",
      body: "Older city services with no room left, including the boards the Code does not permit anyone to recondition.",
      service: "electrical-service-upgrades",
    },
    {
      title: "City centre fit outs",
      body: "Shops, offices and restaurants in buildings that were something else first, usually more than once.",
      service: "commercial-electrical-services",
    },
    {
      title: "Infrared surveys on plant gear",
      body: "Scanned under production load, because that is the only state in which a failing joint on a line shows itself.",
      service: "electrical-preventive-maintenance",
    },
    {
      title: "Backup for refrigeration and process",
      body: "Coolers, freezers and lines that cannot go dark while there is product sitting inside them.",
      service: "standby-generator-installation",
    },
  ],

  faq: [
    {
      q: "How quickly can you get to us in Lebanon?",
      a: "Quicker than anywhere else we cover. The honest answer still depends on where the truck is and what is already running, and you get a real time of arrival on the call rather than a number that sounds good.",
    },
    {
      q: "Do you take small jobs in the city?",
      a: "Yes. A breaker that keeps tripping, a failed fixture, a circuit for new equipment. In this city a small job is not a long drive, so it is worth doing properly rather than putting off.",
    },
    {
      q: "Can you work a plant shutdown weekend?",
      a: "Yes, and that is when most plant work should happen. Tell us the window early enough that material and prefabrication are finished before it opens.",
    },
    {
      q: "Our damaged panel: repair or replace?",
      a: "If it has been through a fire, a flood or a serious fault, it is a replacement. Section 408.8 permits switchboards, switchgear and motor control centres to be reconditioned, but not panelboards.",
    },
  ],

  related: {
    projects: ["emergency-winter-failure", "food-plant-equipment-power", "panel-upgrade-myerstown", "infrared-survey-switchboard"],
    articles: ["signs-your-panel-needs-replacing", "cost-to-replace-electrical-panel", "infrared-electrical-survey"],
  },

  nearby: ["palmyra", "annville", "jonestown"],

  keywords: [
    "electrician lebanon pa",
    "commercial electrician lebanon pennsylvania",
    "emergency electrician lebanon pa",
    "industrial electrician lebanon pa",
  ],
};

export default town;
