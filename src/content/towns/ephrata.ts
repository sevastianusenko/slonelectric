import type { Town } from "./types";

const town: Town = {
  slug: "ephrata",
  town: "Ephrata",
  county: "lancaster-county",
  title: "Electrician in Ephrata PA | Farm, Commercial & Industrial",
  h1: "Electrical service in Ephrata",
  summary:
    "Electrician for Ephrata PA: poultry and dairy on every side of town, light industrial along Route 322, and the commercial buildings in between.",
  lead:
    "Ephrata is one of the places we are called to most, and the reason is geography. The borough has a working commercial core and a run of light industrial along 322, and the moment you leave it in any direction you are in poultry and dairy country. Both kinds of work are twenty minutes from our shop.",
  drive: "About fifteen to twenty minutes from Myerstown, straight down the 322 or through Reinholds.",

  hero: {
    src: "/photos/services/agricultural-electrical-services.webp",
    alt: "Free stall dairy barn lit by Slon Electric",
  },

  sections: [
    {
      heading: "Farm country starts at the borough line",
      body: [
        "The townships around Ephrata, Clay, Ephrata Township and out toward Hinkletown and Akron, hold some of the densest poultry and dairy ground in Lancaster County. That is the work that fills most of our weeks here: ventilation and controller circuits, alarms, lighting programs, standby power and the service entrances feeding whole yards.",
        "These are not buildings a general electrician can treat like any other. Article 547 restricts what may be used where livestock are housed, and ammonia destroys fixtures chosen from a general catalogue in two or three years. We go through what the article actually requires in [plain language](/blog/nec-547-agricultural-wiring).",
      ],
    },
    {
      heading: "The borough itself is a different job",
      body: [
        "Inside Ephrata the stock is older and mixed: retail along Main and State, offices, medical and small industrial along the 322 corridor and out toward the Route 272 interchange. A lot of it has changed use once or twice, which is where capacity runs out and where panel directories stop matching the building.",
        "We re identify circuits as we work rather than trusting a directory somebody filled in with a pencil, for the reasons in [why your panel schedule does not match the building](/blog/how-to-read-a-panel-schedule).",
      ],
    },
  ],

  landmarks: [
    "Main Street and State Street commercial core",
    "Route 322 light industrial corridor",
    "Route 272 and the turnpike approach",
    "Clay and Ephrata Township farm ground",
    "Akron and Hinkletown poultry country",
    "Medical and professional offices around the hospital",
  ],

  demand: [
    {
      title: "Poultry houses and their controllers",
      body: "Ventilation and controller circuits, alarms that reach a phone at night, light programs and the standby power under all of it.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Sets sized from what cannot stop",
      body: "The list of loads that genuinely cannot wait is shorter than people expect, and a shorter list is a cheaper set.",
      service: "standby-generator-installation",
    },
    {
      title: "Borough buildings on their third use",
      body: "Premises that have been three different businesses and are still carrying the service the first of them was given.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Fit outs on and off Main Street",
      body: "Retail, offices and medical suites, staged around trading hours and around when an inspector can actually attend.",
      service: "commercial-electrical-services",
    },
    {
      title: "Barn and shop lighting",
      body: "Fixtures chosen for ammonia and washdown rather than from a price list, laid out for the way the building is used.",
      service: "commercial-led-lighting",
    },
    {
      title: "Emergency calls",
      body: "Ephrata is close enough that a night call here gets a truck quickly. Ventilation, a lost phase, a panel running hot.",
      service: "emergency-electrician",
    },
  ],

  faq: [
    {
      q: "How quickly can you get to Ephrata?",
      a: "It is one of the shorter runs we make, fifteen to twenty minutes in normal traffic. For a night call in an occupied livestock building that matters, and you get a real time of arrival on the phone rather than an optimistic one.",
    },
    {
      q: "Do you work on the plain sect farms around Ephrata and Hinkletown?",
      a: "Yes, and the first thing we ask is what the operation uses and what it does not, because that is decided by the district rather than by a rule anybody can look up. Generator, inverter and 12 volt work is ordinary for us.",
    },
    {
      q: "Can you work between flocks?",
      a: "That is the normal way farm work gets scheduled here. Tell us the window when you call and we will scope the job to fit it, or split it into stages that each finish cleanly.",
    },
    {
      q: "Who inspects work in Ephrata?",
      a: "The borough and the surrounding townships use third party agencies, and which one depends on your address. We make the application, book the stages and meet the inspector.",
    },
  ],

  related: {
    projects: ["poultry-house-ventilation-power", "free-stall-barn-lighting", "farm-service-entrance-upgrade", "retail-fit-out-wiring"],
    articles: ["nec-547-agricultural-wiring", "barn-wiring-methods", "farm-distribution-point"],
  },

  nearby: ["denver", "lititz", "new-holland"],

  keywords: [
    "electrician ephrata pa",
    "electrician in ephrata pennsylvania",
    "farm electrician ephrata",
    "commercial electrician ephrata pa",
  ],
};

export default town;
