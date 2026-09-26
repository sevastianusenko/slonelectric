import type { Town } from "./types";

const town: Town = {
  slug: "schaefferstown",
  town: "Schaefferstown",
  county: "lebanon-county",
  title: "Electrician in Schaefferstown PA | Dairy, Grain & Long Runs",
  h1: "Electrical service in Schaefferstown",
  summary:
    "Farm electrician for Schaefferstown PA: dairy and grain in the hills, long service runs between buildings, and the voltage drop that comes with them.",
  lead:
    "Schaefferstown is a village with a lot of farm ground around it, and the thing that shapes the electrical work here is distance. Buildings sit far apart on rolling ground, and a run that is long enough changes the answer rather than just the drive.",
  drive: "Ten to fifteen minutes from Myerstown, down the 501 or across on the 897.",

  hero: {
    src: "/photos/projects/underground-feeders-farm-yard-1.webp",
    alt: "Open trench running along a farm building with conduit laid in",
  },

  sections: [
    {
      heading: "Distance is a design problem, not a driving problem",
      body: [
        "A conductor big enough to carry the current can still drop enough voltage along the way that a motor at the far end will not start on a cold morning. That is not a fault anybody finds with a meter at the panel, because at the panel everything reads correctly.",
        "The arithmetic is worked through in [voltage drop on long runs](/blog/voltage-drop-long-farm-runs), and the usual fix is a distribution point closer to the load rather than a larger service back at the house. How that arrangement works is in [the distribution point on a farm](/blog/farm-distribution-point).",
      ],
    },
    {
      heading: "Yards that grew by addition",
      body: [
        "Almost no farm out here was wired to a plan. It was wired to a sequence: the house, then the barn off the house, then the shop off the barn, then whatever came next off whichever panel was nearest at the time.",
        "That causes three problems that all appear years later. Feeders sized for the first building carry four. Voltage drop stacks along the chain. And the grounding and bonding become impossible to trace, which is the mechanism behind most stray voltage complaints. What that rebuild involves is in [rebuilding a farm service entrance](/projects/farm-service-entrance-upgrade).",
      ],
    },
  ],

  landmarks: [
    "Route 501 and 897 through the village",
    "Heidelberg Township dairy ground",
    "Grain handling and feed systems",
    "Newmanstown and Womelsdorf approaches",
    "Long overhead and underground spans between buildings",
    "Hill ground where the far end of a run is a long way down",
  ],

  demand: [
    {
      title: "Long feeder runs between buildings",
      body: "Overhead and underground runs sized for the voltage drop rather than only for the current they carry.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Farm service entrances and distribution points",
      body: "Rebuilding how a yard is fed, which is usually the job underneath the complaint rather than the complaint itself.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Parlour work between milkings",
      body: "Cooling, vacuum and pipeline circuits fitted into the gap the herd leaves, not the gap that would suit us.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Stray voltage work",
      body: "Measured properly rather than with a meter between a pipe and the floor, and usually a bonding problem underneath.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Backup where the line comes back late",
      body: "Out here an outage runs longer than it does in town, which changes what the set has to carry and for how long.",
      service: "standby-generator-installation",
    },
    {
      title: "Lighting that survives the air",
      body: "Ammonia works into driver compartments and corrodes terminals from the inside, so the fixture is picked for the room.",
      service: "commercial-led-lighting",
    },
  ],

  faq: [
    {
      q: "A motor at the far end of the yard will not start. Is the wire too small?",
      a: "Often the wire is big enough for the current and still too small for the distance. Voltage drop is the usual cause, and the answer is either larger conductors or a distribution point closer to the load.",
    },
    {
      q: "My cows are behaving oddly in the parlour. Is that stray voltage?",
      a: "It might be, and the important part is measuring it properly rather than putting a meter between a pipe and the floor. What a real survey involves is set out in [the stray voltage article](/blog/stray-voltage-on-dairy-farms).",
    },
    {
      q: "Is a bigger service the answer to power problems at the far end?",
      a: "Usually not. More amperes at the meter does nothing for a long run that is dropping volts along the way. That is a feeder and distribution problem with a different fix.",
    },
    {
      q: "How quickly can you get out here?",
      a: "Ten to fifteen minutes. This is close ground for us, which matters on a night call in an occupied building.",
    },
  ],

  related: {
    projects: ["underground-feeders-farm-yard", "farm-service-entrance-upgrade", "dairy-parlour-bulk-tank-wiring", "service-pole-overhead-drop"],
    articles: ["voltage-drop-long-farm-runs", "farm-distribution-point", "stray-voltage-on-dairy-farms"],
  },

  nearby: ["richland", "lebanon", "annville"],

  keywords: [
    "electrician schaefferstown pa",
    "farm electrician schaefferstown pennsylvania",
    "dairy farm electrician lebanon county",
    "voltage drop farm schaefferstown",
  ],
};

export default town;
