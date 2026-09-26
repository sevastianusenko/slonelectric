import type { Town } from "./types";

const town: Town = {
  slug: "lititz",
  town: "Lititz",
  county: "lancaster-county",
  title: "Electrician in Lititz PA | Food Plants, Retail & Farm Work",
  h1: "Electrical service in Lititz",
  summary:
    "Commercial, industrial and agricultural electrician for Lititz PA: food production, retail and office fit outs in the borough, and farm work outside it.",
  lead:
    "Lititz has two electrical lives. Inside the borough it is retail, restaurants and offices in a compact centre that visitors walk through. A few minutes out it is food production and farm ground, and that is where the larger jobs are.",
  drive: "Twenty to twenty five minutes from Myerstown, through Brickerville or Ephrata.",

  hero: {
    src: "/photos/services/commercial-led-lighting.webp",
    alt: "Large commercial space with new linear LED lighting",
  },

  sections: [
    {
      heading: "Food production and what washdown does to wiring",
      body: [
        "Lititz has a long run of food and confectionery manufacturing, and those plants are hard on electrical work in one specific way. Daily sanitation means water and chemicals at pressure, so the wiring method, the enclosure rating and the fittings have to suit the room rather than the price list.",
        "Equipment chosen from a general commercial catalogue survives an office for twenty years and a washdown area for two. What it looks like done properly is in [power for food processing equipment](/projects/food-plant-equipment-power), and the machine side is on [the control panels page](/control-panels-machine-wiring).",
      ],
    },
    {
      heading: "A borough centre people look at",
      body: [
        "The commercial core here is walked rather than driven past, and that changes what a lighting job is asked to do. Colour rendering decides whether product looks right in a shop window, and a dark facade at five in the afternoon in January is a wasted evening of trade.",
        "It also changes when work happens. Most of what we do in the borough is early, late or on a quiet day, with temporary supplies wherever a circuit has to be out for longer than a shift.",
      ],
    },
  ],

  landmarks: [
    "Broad Street and the borough commercial core",
    "Food and confectionery production",
    "Light industrial along the 501 corridor",
    "Warwick Township farm ground",
    "Rothsville and Brickerville approaches",
    "Offices and professional suites around the centre",
  ],

  demand: [
    {
      title: "Plant and machine wiring",
      body: "Equipment connections, motor circuits and drives, in washdown rated methods where the area demands them.",
      service: "industrial-electrical-services",
    },
    {
      title: "Retail and hospitality fit outs",
      body: "Shops, restaurants and offices in a walked centre, where how the place looks is part of the job.",
      service: "commercial-electrical-services",
    },
    {
      title: "Lighting that flatters the product",
      body: "Colour rendering and layout chosen for what is on display, plus facade and sign circuits for the dark half of the year.",
      service: "commercial-led-lighting",
    },
    {
      title: "Service upgrades",
      body: "Older borough buildings that have taken on equipment nobody recalculated the service for.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Farm work outside the borough",
      body: "Dairy, poultry and pole buildings through Warwick Township, the same work we do at home.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Low voltage and controls",
      body: "Data, cameras and sensor wiring, kept out of the raceways carrying drive output where it matters.",
      service: "low-voltage-structured-wiring",
    },
  ],

  faq: [
    {
      q: "Can you work in a plant without stopping production?",
      a: "Much of it, yes, a zone at a time. What cannot be done live goes into a shutdown window, and what decides whether that window holds is the two weeks before it, not the weekend itself.",
    },
    {
      q: "We are a shop on Broad Street. Can you work around opening hours?",
      a: "That is how most borough work gets done. Early mornings, evenings, quiet days, with temporary supplies where a circuit has to be out longer than a shift.",
    },
    {
      q: "Do you do washdown areas?",
      a: "Yes, with wiring methods and enclosures chosen for daily sanitation rather than from a general catalogue. That choice is most of what decides whether the installation lasts.",
    },
    {
      q: "How far outside Lititz do you go?",
      a: "Warwick Township, Rothsville, Brickerville and the farm ground between them are all normal runs for us, and Ephrata is next door.",
    },
  ],

  related: {
    projects: ["food-plant-equipment-power", "retail-fit-out-wiring", "warehouse-high-bay-lighting", "machine-connection-motor-control"],
    articles: ["high-bay-led-lighting", "what-is-a-vfd", "electrical-distribution-in-a-building"],
  },

  nearby: ["ephrata", "manheim", "lancaster"],

  keywords: [
    "electrician lititz pa",
    "commercial electrician lititz",
    "industrial electrician lititz pa",
    "electrical contractor lititz pennsylvania",
  ],
};

export default town;
