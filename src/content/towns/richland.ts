import type { Town } from "./types";

const town: Town = {
  slug: "richland",
  town: "Richland",
  county: "lebanon-county",
  title: "Electrician in Richland PA | Poultry House & Farm Electrical",
  h1: "Electrical service in Richland",
  summary:
    "Poultry and farm electrician for Richland PA: ventilation and controller circuits, alarms, standby power and farm services on the Lancaster line.",
  lead:
    "Richland is small and the work here is not. This corner of Lebanon County, down on the Lancaster line, is dense poultry country, and poultry is the work this business was built around. Most of what we do here is ventilation, controllers, alarms and the standby power behind them.",
  drive: "Ten minutes from Myerstown. Along with Lebanon, the closest ground we cover.",

  hero: {
    src: "/photos/poultry-house.webp",
    alt: "Long agricultural building with new lighting",
  },

  sections: [
    {
      heading: "The clock here is measured in birds",
      body: [
        "A tunnel ventilated house is a sealed building, and that design is exactly why it performs and exactly why it has so little margin when the fans stop. Extension guidance is blunt about it: birds survive only twenty to thirty minutes above ninety seven degrees in still air.",
        "That is not a drive time. It is barely enough to find the problem, which is why the plan cannot be built around anybody arriving. It has to be built around the generator starting by itself, carrying the fan motors, and an alarm that wakes somebody. The whole arithmetic is in [how long a poultry house really has](/blog/poultry-house-power-outage).",
      ],
    },
    {
      heading: "Ten minutes matters, and it is still not the plan",
      body: [
        "Being ten minutes away is worth something on a night call, and we would rather be honest that it is the second line of defence, not the first. The first is a standby system that works while nobody is standing there.",
        "That means automatic transfer rather than a handle somebody has to throw at four in the morning, a set sized from [starting load rather than running load](/blog/generator-sizing-starting-vs-running), and an alarm independent of the controller. A controller that has locked up is exactly the thing that will not report its own failure.",
      ],
    },
  ],

  landmarks: [
    "Broiler and layer houses through the township",
    "Route 419 and the Lancaster County line",
    "Newmanstown and Sheridan approaches",
    "Millcreek Township farm ground",
    "Feed and grain handling",
    "Pole buildings, shops and equipment sheds",
  ],

  demand: [
    {
      title: "Ventilation and controller circuits",
      body: "Tunnel and minimum ventilation fans, house controllers, sensors, curtains and inlets.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Standby generators and transfer",
      body: "Sized from the loads that cannot stop, with automatic transfer and a set that can actually start the fans.",
      service: "standby-generator-installation",
    },
    {
      title: "Alarms that reach a person",
      body: "Battery backed power failure alarms and dialers, independent of the controller they are watching.",
      service: "low-voltage-structured-wiring",
    },
    {
      title: "Services sized for the whole yard",
      body: "Houses added one at a time to a service calculated for the first of them, rebuilt around a real distribution point.",
      service: "electrical-service-upgrades",
    },
    {
      title: "House lighting programs",
      body: "Fixtures that dim smoothly without flicker, chosen for ammonia rather than from a general catalogue.",
      service: "commercial-led-lighting",
    },
    {
      title: "Night calls",
      body: "Ten minutes away. The first questions on the phone are what has curtains and what the alarm did.",
      service: "emergency-electrician",
    },
  ],

  faq: [
    {
      q: "Our generator runs every week. Is that enough of a test?",
      a: "Better than nothing and not a real test. A weekly exercise with no load proves the engine starts. What matters is whether it carries the house, and that means running it under load and practising the transfer, ideally between flocks.",
    },
    {
      q: "The set starts but stalls when the fans come on.",
      a: "That is starting load, not a fault. Sequencing the starts or putting soft starters on the largest motors often solves it for a fraction of the cost of a larger alternator.",
    },
    {
      q: "Should the alarm be part of the controller?",
      a: "No, separate and battery backed. A controller that has locked up is exactly the thing that will not raise the alarm about itself.",
    },
    {
      q: "Can you work between flocks?",
      a: "That is the normal way this work gets scheduled. Tell us the window when you call and we will scope the job to fit it.",
    },
  ],

  related: {
    projects: ["poultry-house-ventilation-power", "farm-standby-generator", "farm-service-entrance-upgrade", "emergency-winter-failure"],
    articles: ["poultry-house-power-outage", "generator-sizing-starting-vs-running", "transfer-switch-types"],
  },

  nearby: ["lebanon", "denver", "schaefferstown"],

  keywords: [
    "electrician richland pa",
    "poultry house electrician lebanon county",
    "farm electrician richland pennsylvania",
    "poultry farm generator richland pa",
  ],
};

export default town;
