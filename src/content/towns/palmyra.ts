import type { Town } from "./types";

const town: Town = {
  slug: "palmyra",
  town: "Palmyra",
  county: "lebanon-county",
  title: "Electrician in Palmyra PA | Commercial & Farm Electrical",
  h1: "Electrical service in Palmyra",
  summary:
    "Electrician for Palmyra PA: commercial work along the 422 corridor, farm ground behind it, and jobs that often sit alongside our work around Hershey.",
  lead:
    "Palmyra sits on the 422 between Lebanon and Hershey, and that position decides its electrical character. Commercial strung along the corridor, farm ground immediately behind it, and a steady overlap with the food manufacturing and medical work a few minutes west.",
  drive: "Fifteen to twenty minutes from Myerstown, straight down the 422.",

  hero: {
    src: "/photos/mosaic/commercial-hall.webp",
    alt: "Commercial interior with linear lighting installed",
  },

  sections: [
    {
      heading: "Corridor commercial and what it asks for",
      body: [
        "Buildings along a through road have a particular profile: they are visible from a car at forty miles an hour, they trade during the day, and a lot of them have taken on equipment the original service was never calculated for.",
        "So the work splits between the outside of the building, where signage, facade and lot lighting decide whether anybody notices you after dark, and the inside, where a change of use has quietly outgrown the panel. The second one starts with an honest calculation rather than an opinion, as [what size service you actually need](/blog/service-load-calculation) sets out.",
      ],
    },
    {
      heading: "Next door to Hershey, which is useful",
      body: [
        "Palmyra is minutes from the food manufacturing and medical buildings around Hershey, so work here regularly sits alongside jobs in [Dauphin County](/service-area/dauphin-county). For a customer that means a crew already in the area rather than one dispatched specially.",
        "It also means plant scheduling habits carry over. Where production sets the window, the job gets built before the window opens rather than during it.",
      ],
    },
  ],

  landmarks: [
    "Route 422 commercial corridor",
    "Borough centre along Main Street",
    "North Londonderry and South Londonderry farm ground",
    "Light industrial toward the Hershey line",
    "Campbelltown and the 117 approach",
    "Shops, garages and service bays along the corridor",
  ],

  demand: [
    {
      title: "Commercial fit outs and remodels",
      body: "Shops, offices and restaurants along the corridor, staged around trading hours rather than around us.",
      service: "commercial-electrical-services",
    },
    {
      title: "Sign, facade and lot lighting",
      body: "The parts of a corridor building that decide whether anybody notices it between November and February.",
      service: "commercial-led-lighting",
    },
    {
      title: "Capacity for a change of use",
      body: "A unit that became something else and quietly outgrew its panel, plus the utility conversation that follows.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Farm work behind the corridor",
      body: "Dairy, poultry and pole buildings through the Londonderry townships, the same work we do at home.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Plant and equipment connections",
      body: "Machine circuits and drives where production sets the window and the job is built before it opens.",
      service: "industrial-electrical-services",
    },
    {
      title: "Charging on a corridor lot",
      body: "Parking that is visible from the road, with the calculation done before anybody orders equipment for it.",
      service: "ev-charging-installation",
    },
  ],

  faq: [
    {
      q: "Can you work outside our opening hours?",
      a: "Yes, and for anything that interrupts tills or refrigeration it is usually cheaper overall. Evening and weekend labour costs more per hour and less than closing.",
    },
    {
      q: "Is Palmyra a quick run for you?",
      a: "Yes, fifteen to twenty minutes straight down the 422. For a night call that matters, and you get a real time of arrival rather than an optimistic one.",
    },
    {
      q: "Do we need a service upgrade or will a sub panel do?",
      a: "It depends on the calculated load against the existing service, not on how full the panel looks. Plenty of buildings only need a sub panel fed from spare capacity.",
    },
    {
      q: "Do you do the farm work behind the corridor too?",
      a: "Yes. Ventilation, parlour and bulk tank circuits, standby power and farm service entrances through both Londonderry townships.",
    },
  ],

  related: {
    projects: ["retail-fit-out-wiring", "parking-lot-lighting", "200-amp-service-upgrade", "dairy-parlour-bulk-tank-wiring"],
    articles: ["service-load-calculation", "cost-to-replace-electrical-panel", "high-bay-led-lighting"],
  },

  nearby: ["lebanon", "annville", "elizabethtown"],

  keywords: [
    "electrician palmyra pa",
    "commercial electrician palmyra pennsylvania",
    "electrical contractor palmyra pa",
    "farm electrician palmyra",
  ],
};

export default town;
