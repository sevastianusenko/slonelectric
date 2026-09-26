import type { Town } from "./types";

const town: Town = {
  slug: "elizabethtown",
  town: "Elizabethtown",
  county: "lancaster-county",
  title: "Electrician in Elizabethtown PA | Farm, Campus & Commercial",
  h1: "Electrical service in Elizabethtown",
  summary:
    "Electrician for Elizabethtown PA: farm work in the townships, campus and institutional buildings, and commercial along the 230 and 283 corridors.",
  lead:
    "Elizabethtown sits on the western edge of Lancaster County, close enough to the Dauphin line that a lot of what we do here is on the way to somewhere else in the same day. It mixes farm ground, a college and retirement campus, and commercial strung along the 230 and 283 corridors.",
  drive: "Thirty to forty minutes from Myerstown, and next door to our Dauphin County work.",

  hero: {
    src: "/photos/services/electrical-service-upgrades.webp",
    alt: "Distribution switchboard installed in a commercial building",
  },

  sections: [
    {
      heading: "Campus buildings and how they get worked on",
      body: [
        "Institutional campuses have a rhythm nothing else has. There are weeks when a building is empty and weeks when it cannot be touched, and the electrical work gets planned around the calendar rather than around the crew.",
        "They also tend to have long service histories and distribution that grew as the campus did: feeders sized for one era carrying another, and panel schedules that stopped matching two renovations ago. That is a tracing job before it is a wiring job, and [a schedule that matches the building](/blog/how-to-read-a-panel-schedule) is what it produces.",
      ],
    },
    {
      heading: "On the county line, which matters more than it sounds",
      body: [
        "Elizabethtown is closer to Hershey and Middletown than it is to Lancaster city, so work here often sits alongside jobs in [Dauphin County](/service-area/dauphin-county). For a customer that is useful: a crew already working nearby costs less to get to you than one dispatched specially.",
        "It also means the utility, the inspection agency and sometimes the available supply differ from what applies twenty minutes east. We check which set of answers applies to your address rather than assuming.",
      ],
    },
  ],

  landmarks: [
    "Route 230 and 283 commercial corridors",
    "College and retirement campus buildings",
    "Mount Joy and West Donegal Township farm ground",
    "Borough commercial core along Market Street",
    "Light industrial toward the 283 interchange",
    "The Dauphin County line and the Hershey approach",
  ],

  demand: [
    {
      title: "Service and panel upgrades",
      body: "Buildings whose distribution grew as the site did, with feeders sized for an earlier era.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Work booked into the empty weeks",
      body: "A campus has weeks when a building is empty and weeks when it cannot be touched, and that is the real constraint.",
      service: "commercial-electrical-services",
    },
    {
      title: "Farm work in the townships",
      body: "Dairy, grain and pole buildings through Mount Joy and West Donegal, the same work we do at home.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Lighting across a whole site",
      body: "Halls, walkways and car parks done as one scheme, so the site stops being lit by four decades of separate decisions.",
      service: "commercial-led-lighting",
    },
    {
      title: "Infrared on older switchgear",
      body: "Surveyed under load, with the report an insurer will accept, on gear that predates most of what it now feeds.",
      service: "electrical-preventive-maintenance",
    },
    {
      title: "Standby power",
      body: "Generators and transfer switches for buildings where an outage empties the place rather than just darkens it.",
      service: "standby-generator-installation",
    },
  ],

  faq: [
    {
      q: "Can you work during a term break or a shutdown week?",
      a: "That is when this work should happen. Give us the window early enough that material and prefabrication finish before it opens, because a job that starts by unloading a truck has already lost the week.",
    },
    {
      q: "Is Elizabethtown at the edge of your range?",
      a: "It is a normal run, and it sits next to our Dauphin County work, so there is often a crew nearby already.",
    },
    {
      q: "Our panel schedules do not match anything. Is that normal?",
      a: "On a site that grew over decades, yes. Tracing and re labelling is unglamorous and it is the only honest starting point, because nothing can be planned around a record that is wrong.",
    },
    {
      q: "Who inspects work here?",
      a: "Whichever third party agency the borough or township uses, and it varies by address. We make the application, book the stages and meet the inspector.",
    },
  ],

  related: {
    projects: ["commercial-panel-room-feeders", "office-remodel-power-lighting", "infrared-survey-switchboard", "200-amp-service-upgrade"],
    articles: ["how-to-read-a-panel-schedule", "infrared-electrical-survey", "electrical-distribution-in-a-building"],
  },

  nearby: ["manheim", "lancaster", "palmyra"],

  keywords: [
    "electrician elizabethtown pa",
    "commercial electrician elizabethtown pennsylvania",
    "electrical contractor elizabethtown pa",
    "farm electrician elizabethtown",
  ],
};

export default town;
