import type { Town } from "./types";

const town: Town = {
  slug: "manheim",
  town: "Manheim",
  county: "lancaster-county",
  title: "Electrician in Manheim PA | Dairy, Grain & Commercial Work",
  h1: "Electrical service in Manheim",
  summary:
    "Electrician for Manheim PA: dairy and grain handling through Rapho and Penn townships, lot and site lighting, and commercial work along Route 72.",
  lead:
    "Manheim is dairy and grain country with a lot of traffic passing through it. The auto auction south of the borough is the largest wholesale auction in the world and covers six hundred acres, which tells you something about the scale of site lighting and outdoor power in this area.",
  drive: "Twenty five to thirty minutes from Myerstown, down the 72 or through Penryn.",

  hero: {
    src: "/photos/grain-bins.webp",
    alt: "Grain storage bins served by Slon Electric",
  },

  sections: [
    {
      heading: "Grain handling is a sequencing job",
      body: [
        "Dryers, legs, augers and bin fans are not independent machines. They have to start and stop in an order, and the interlocks between them are what stop a plugged leg or a running auger with nothing feeding it.",
        "So this work is as much about starters, overloads and control wiring as it is about power. A real example is [power and controls for a grain dryer, leg and bin system](/projects/grain-system-power-controls).",
      ],
    },
    {
      heading: "Large outdoor sites and what they need",
      body: [
        "Anywhere with acres of surface rather than a building has a different electrical profile: pole bases, underground feeders, photocell and timeclock control, and shielded optics so light lands on your ground rather than a neighbour's.",
        "The expensive part of outdoor work is the trench, which is why we put spare conduit and a pull string in whenever we open one. Opening the same surface twice is the most avoidable cost there is, and [the parking lot lighting job](/projects/parking-lot-lighting) shows how that goes.",
      ],
    },
  ],

  landmarks: [
    "Route 72 commercial corridor",
    "The wholesale auto auction south of the borough",
    "Rapho and Penn Township dairy ground",
    "Grain handling and feed facilities",
    "Penryn and Mount Joy approaches",
    "Borough commercial core around Market Square",
  ],

  demand: [
    {
      title: "Grain dryers, legs and bins",
      body: "Motor circuits, starters and the interlocks that make a system sequence instead of fight itself.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Dairy parlour and bulk tank",
      body: "Cooling, vacuum and parlour circuits, staged between milkings because the herd does not wait for us.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Site and lot lighting",
      body: "Poles, bases, underground feeders and shielded optics, with spare conduit left in every trench we open.",
      service: "commercial-led-lighting",
    },
    {
      title: "Underground feeders",
      body: "Runs between buildings and across yards, sized for the voltage drop rather than only for the current.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Motor control and drives",
      body: "Handling equipment and fans, with overloads sized from the nameplate and drive cable done the way a drive needs.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Backup for milk cooling",
      body: "What keeps the tank and the parlour going when the line drops, sized from that short list rather than the service.",
      service: "standby-generator-installation",
    },
  ],

  faq: [
    {
      q: "A motor at the far end of the property will not start. Is the wire too small?",
      a: "Often the wire is big enough for the current and still too small for the distance. Voltage drop across a long run is the usual cause, and the answer is either larger conductors or a distribution point closer to the load.",
    },
    {
      q: "Can you work around harvest?",
      a: "That is the normal way grain work gets scheduled. Tell us the window when you call and we will scope the job to fit it, or split it into stages that each finish cleanly.",
    },
    {
      q: "Do you do pole bases and trenching yourself?",
      a: "We do the electrical work and coordinate the excavation. What matters most is that the trench gets opened once, with spare conduit and a pull string left in for whatever comes next.",
    },
    {
      q: "Why do lot lights keep failing on one circuit?",
      a: "On outdoor runs it is usually water finding a termination or a connection that has been running warm for a while. Both are visible on a thermal survey long before they fail outright.",
    },
  ],

  related: {
    projects: ["grain-system-power-controls", "dairy-parlour-bulk-tank-wiring", "parking-lot-lighting", "underground-feeders-farm-yard"],
    articles: ["voltage-drop-long-farm-runs", "farm-distribution-point", "three-phase-motor-wont-start"],
  },

  nearby: ["lititz", "lancaster", "elizabethtown"],

  keywords: [
    "electrician manheim pa",
    "farm electrician manheim pennsylvania",
    "grain system electrician manheim",
    "commercial electrician manheim pa",
  ],
};

export default town;
