import type { Town } from "./types";

const town: Town = {
  slug: "annville",
  town: "Annville",
  county: "lebanon-county",
  title: "Electrician in Annville PA | Farm, Campus & Small Commercial",
  h1: "Electrical service in Annville",
  summary:
    "Electrician for Annville PA: farm ground through the townships, college and institutional buildings, and small commercial along Main Street.",
  lead:
    "Annville is the middle of Lebanon County in every sense. Farm ground on both sides, a college campus in the centre, and a run of small commercial along Main Street. None of those are large jobs individually, and together they are a steady part of our week.",
  drive: "Fifteen minutes from Myerstown, straight along the 422.",

  hero: {
    src: "/photos/hero-dairy-barn.webp",
    alt: "Lit free stall dairy barn wired by Slon Electric",
  },

  sections: [
    {
      heading: "Small jobs done properly",
      body: [
        "A lot of what we do in Annville would be called a service call: a circuit for new equipment, a failed fixture, a breaker that keeps tripping, a panel with no space left. These are the jobs that get put off, and they are also the ones where a fifteen minute drive changes the arithmetic.",
        "They are worth doing properly rather than quickly. A circuit added without checking what the panel is already carrying is how a building ends up with a service that trips under load and nobody knowing why, which is the argument in [what size service you actually need](/blog/service-load-calculation).",
      ],
    },
    {
      heading: "Campus and institutional buildings",
      body: [
        "Institutional buildings here have long service histories and distribution that grew with the site. Feeders sized for one era carry another, and panel schedules stopped matching two renovations ago.",
        "That makes tracing the first job rather than the wiring, for the reasons in [how to read a panel schedule](/blog/how-to-read-a-panel-schedule), and it makes the calendar the constraint: there are weeks when a building is empty and weeks when it cannot be touched. We plan around that rather than around our own schedule.",
      ],
    },
  ],

  landmarks: [
    "Main Street commercial core",
    "College campus buildings",
    "North and South Annville Township farm ground",
    "Route 422 and 934 junction",
    "Cleona and the approach to Lebanon",
    "Shops, offices and service businesses through the borough",
  ],

  demand: [
    {
      title: "Service calls and added circuits",
      body: "The jobs that get put off. A fifteen minute drive changes whether they are worth doing now or later.",
      service: "emergency-electrician",
    },
    {
      title: "Panel and service upgrades",
      body: "Buildings that ran out of space rather than out of amperes, and buildings where both happened at once.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Dairy and grain work",
      body: "Parlour, bulk tank and handling circuits through both Annville townships, scheduled around milking.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Institutional and campus work",
      body: "Planned around the academic calendar, in stages that each finish cleanly rather than leaving a building open.",
      service: "commercial-electrical-services",
    },
    {
      title: "Lighting retrofits",
      body: "Corridors, halls, shops and lots, usually with fewer fixtures than were there and controls that were never fitted.",
      service: "commercial-led-lighting",
    },
    {
      title: "Preventive maintenance",
      body: "Infrared surveys under load on older gear, which is where most of the surprises in an old building are hiding.",
      service: "electrical-preventive-maintenance",
    },
  ],

  faq: [
    {
      q: "Will you come out for one circuit?",
      a: "Yes. Annville is fifteen minutes away, so a small job is not a long drive. We will also tell you on the phone if what you describe can safely wait until we are next nearby.",
    },
    {
      q: "Our panel is full. Does that mean a bigger service?",
      a: "Not necessarily. A full panel is a space problem, and the service behind it may be barely loaded. The two questions are separate and the answer to the second one comes from a calculation.",
    },
    {
      q: "Can you work during a term break?",
      a: "That is when campus work should happen. Give us the window early enough that material arrives before it opens, because a job that starts by unloading a truck has already lost the week.",
    },
    {
      q: "Do you work the farms either side of the borough?",
      a: "Yes, through both Annville townships and out toward Cleona. Dairy, grain and pole buildings are ordinary weekly work for us.",
    },
  ],

  related: {
    projects: ["panel-upgrade-myerstown", "dairy-parlour-bulk-tank-wiring", "load-study-and-drawings", "infrared-survey-switchboard"],
    articles: ["signs-your-panel-needs-replacing", "service-load-calculation", "how-to-read-a-panel-schedule"],
  },

  nearby: ["lebanon", "palmyra", "jonestown"],

  keywords: [
    "electrician annville pa",
    "electrical contractor annville pennsylvania",
    "farm electrician annville",
    "commercial electrician annville pa",
  ],
};

export default town;
