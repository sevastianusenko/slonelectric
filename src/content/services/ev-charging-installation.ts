import type { Service } from "./types";

const service: Service = {
  slug: "ev-charging-installation",
  kind: "service",
  title: "Commercial EV Charger Installation | Fleet & Level 2 | Lancaster & Lebanon County PA",
  h1: "Commercial and fleet EV charging installation",
  summary:
    "Commercial EV charger installation, load calculations, load management and conduit for future stalls across Lebanon, Lancaster and Berks counties in Pennsylvania.",
  lead:
    "Buying the charger is the easy part, and it is usually the part that has already happened by the time we get the call. The hard question is whether the building can feed it. Almost every difficult EV job is a distribution problem wearing a charger as a disguise.",

  hero: {
    src: "/photos/services/ev-charging-installation.webp",
    alt: "Wall mounted EV charger installed at a commercial site",
  },

  sections: [
    {
      heading: "The panel is the constraint, not the charger",
      body: [
        "A single 48 amp Level 2 charger is a 60 amp continuous circuit. Four of them is 240 amps of continuous load, which is more than many commercial buildings have spare after the lighting, the HVAC and whatever is on the shop floor. The charger is a box on a wall. The capacity behind it is the project.",
        "That is why the first visit is spent at the switchgear and not at the parking stall. Service size, main breaker rating, spare spaces, the condition of the panel and whether the existing feeders have any room left. Sometimes the answer is good news and the work is a day. Sometimes the panel was full a decade ago, which is the conversation in [the signs a panel needs replacing](/blog/signs-your-panel-needs-replacing).",
      ],
    },
    {
      heading: "Load calculation before anything is promised",
      body: [
        "Anybody can say the service will take four chargers. Article 220 of the National Electrical Code is how you find out. The calculation takes the existing demand, which for an occupied building is best measured rather than estimated, and adds the charging load, which the code treats as continuous, so it is counted at 125 percent of its rating.",
        "Where a building has a year of utility bills or we can log the service with a recording meter, the measured peak is the honest starting point and it is often lower than the paper calculation suggests. That difference is sometimes what makes the difference between adding chargers and rebuilding a service. The drawing side of that is covered in [the load study and drawings job](/projects/load-study-and-drawings).",
        "The calculation is also where the future gets decided. If the plan is two chargers now and six in three years, that has to be in the arithmetic today, because the feeder, the raceway and the panel space are all far cheaper to get right once than to redo. Two stalls installed without that thought is how a site ends up paying for the same trench twice.",
      ],
    },
    {
      heading: "Level 2, DC fast, and what each asks of the service",
      body: [
        "Level 2 runs on 208 or 240 volts, typically 32 to 48 amps, and puts back roughly 20 to 30 miles of range an hour. For a vehicle that sits for hours, whether a staff car park or a fleet parked overnight, it is almost always the right answer and the cheapest one.",
        "DC fast charging is a different category of work. A 150 kW unit needs three phase at 480 volts, a concrete pad, a substantial feeder and often a transformer, and it will change your demand charges because the utility bills on peak kW as well as kWh. It makes sense where vehicles turn around in twenty minutes and nowhere else. Whether three phase is even at your road is the utility's answer, not ours, and the alternatives are in [three phase against single phase](/blog/three-phase-vs-single-phase).",
      ],
    },
    {
      heading: "Load management instead of a service upgrade",
      body: [
        "This is the part that saves the most money and gets mentioned the least. Chargers that talk to each other, or to an energy management system, can share a circuit and throttle so the group never exceeds a set limit. The code recognises this: Article 750 covers energy management systems, and Article 625 allows a charger controlled by one to be calculated at its managed maximum rather than its nameplate.",
        "The arithmetic is usually kind. Eight vans that each need 60 kWh overnight need 480 kWh delivered, and across a ten hour window that is an average of 48 kW. Eight unmanaged 19.2 kW chargers demand 154 kW. The vehicles do not care which way they were filled by six in the morning, and the difference between those two numbers is frequently the difference between a day of work and [a three phase distribution upgrade](/projects/three-phase-distribution-upgrade).",
      ],
    },
    {
      heading: "Conduit now, chargers later, and where to put them",
      body: [
        "The expensive part of an outdoor charger is the trench. Opening the same asphalt twice is the most avoidable cost in this work, so when we trench we put in spare conduit with a pull string to the stalls that are not being built yet, and size the raceway for the feeder a later stage will want rather than the one today needs. Stub ups get capped and located on a drawing. If the lot is being lit at the same time, both sets of underground work share one trench, as in [the parking lot lighting job](/projects/parking-lot-lighting).",
        "Siting is a practical problem more than an electrical one. Cables reach about 18 to 25 feet, so a charger placed to serve two stalls has to reach both without lying across a driving lane. Bollards or wheel stops keep a delivery truck off the unit. Snow gets pushed somewhere every winter, and the somewhere is usually the edge of the lot where the cheapest charger location was. The code sets a minimum mounting height for the connector, higher outdoors than indoors, for exactly that reason. What this looks like finished is in [the commercial EV charging site](/projects/ev-charging-commercial-site).",
      ],
    },
  ],

  scope: [
    {
      group: "Level 2 charging",
      note: "What almost every site actually needs.",
      items: [
        "Wall mounted Level 2 charger installation",
        "Pedestal and dual port unit installation",
        "Hardwired and plug in unit circuits",
        "32, 40 and 48 amp continuous circuits",
        "Dual stall units positioned to reach both",
        "Fleet overnight charging layouts",
        "Staff and visitor parking installations",
        "Commissioning tested with a vehicle",
      ],
    },
    {
      group: "DC fast charging",
      note: "A different category of work, and of bill.",
      items: [
        "480 volt three phase feeder installation",
        "Concrete pad and equipment base work",
        "Transformer and switchgear coordination",
        "Utility application for the added demand",
        "Demand charge impact explained before you commit",
        "Cable management and pull through arrangements",
        "Site layout for turnaround rather than parking",
        "Coordination with the equipment vendor",
      ],
    },
    {
      group: "Capacity and load management",
      note: "Usually the difference between a day and a project.",
      items: [
        "Article 220 load calculations with EV as continuous load",
        "Recording meter left on the service to measure real demand",
        "Utility bill review for peak demand history",
        "Energy management systems under Article 750",
        "Managed maximum calculation under Article 625",
        "Circuit sharing between grouped chargers",
        "Schedules that fill vehicles overnight at lower demand",
        "Service or panel upgrade only where it is genuinely needed",
      ],
    },
    {
      group: "Site and underground work",
      note: "The expensive part is the trench, not the box.",
      items: [
        "Trenching and directional boring to the stalls",
        "Spare conduit and pull strings for future stages",
        "Stub ups capped and recorded on a drawing",
        "Bollards, wheel stops and impact protection",
        "Pedestal bases and mounting heights for outdoors",
        "Shared trenching with parking lot lighting",
        "Surface reinstatement and asphalt patching",
        "Snow clearance and drainage considered in the siting",
      ],
    },
    {
      group: "Networking and billing",
      note: "What makes a charger more than a socket.",
      items: [
        "Network drops or wireless links to each unit",
        "Cellular and wifi connectivity setup",
        "Access control, RFID and app enrolment",
        "Billing and reimbursement configuration",
        "Reporting and usage data setup",
        "Integration with existing building systems",
        "Firmware updates and commissioning checks",
        "Handover training for whoever manages it",
      ],
    },
    {
      group: "Service and additions",
      note: "After the first stage is in.",
      items: [
        "Adding stalls to an existing installation",
        "Charger replacement and upgrade",
        "Fault finding on units that stop charging",
        "Connector and cable replacement after damage",
        "Circuit and breaker faults on charging loads",
        "Surge protection for outdoor equipment",
        "Annual inspection of connections and enclosures",
        "Panel schedule updates as stalls are added",
      ],
    },
  ],

  facilities: [
    "Offices, business parks and industrial units",
    "Fleet yards, service garages and depots",
    "Retail, restaurants and hospitality car parks",
    "Warehouses and distribution sites",
    "Municipal and institutional lots",
    "Multi tenant commercial parking",
    "Farm shops adding a charger for a truck or van",
  ],

  audience: [
    {
      title: "Fleets parking vehicles overnight",
      body:
        "The best case in this work, because ten hours of standing time turns a hard capacity problem into an easy one. Load management usually gets a whole yard charged on a service that looks far too small on paper.",
    },
    {
      title: "Employers adding charging as a benefit",
      body:
        "A handful of stalls for staff, often in a lot that also needs lighting. Doing both in one trench is the single biggest saving available on this kind of job.",
    },
    {
      title: "Retail and hospitality wanting people to stay",
      body:
        "Here the charger is a reason to park rather than a utility. Siting, signage and something that reliably works matter more than raw speed, and Level 2 is almost always the right answer.",
    },
    {
      title: "Sites that already bought the equipment",
      body:
        "The call usually arrives with a charger in a box. We will fit what you have where the ratings work, and we will say plainly when a hardwired unit and a plug in one lead to different circuits and different costs.",
    },
    {
      title: "Anyone told they need a service upgrade",
      body:
        "Sometimes true. Often it is a load management conversation instead, and worth an honest calculation before committing to a utility project with its own timeline.",
    },
    {
      title: "Farms and shops charging a truck or a van",
      body:
        "A single unit on a yard where the service is already carrying a lot. The question is the same as everywhere else: what is actually spare, measured rather than assumed.",
    },
  ],

  process: {
    title: "How an EV charging job runs",
    lines: [
      "What vehicles, how many, and how long they sit. That drives the design more than the charger model does.",
      "A look at the service and panel, plus a year of utility bills or a recording meter on the main.",
      "A load calculation to Article 220 with the charging load added as continuous.",
      "An honest answer in one of three forms: it fits, it fits with load management, or the service has to grow.",
      "Trenching, conduit, stub ups for the stalls you are not building yet, and bases or mounts.",
      "Install, commission and test with a vehicle rather than only with a meter.",
      "Labels, a panel schedule that reflects reality, and the network set up if the chargers bill or report.",
    ],
  },

  whyUs: [
    {
      title: "We start at the switchgear, not the parking stall",
      body:
        "Almost every difficult EV job is a distribution problem wearing a charger as a disguise. Four 48 amp units is 240 amps of continuous load, which is more than many buildings have spare once everything else is counted.",
    },
    {
      title: "Demand gets measured rather than estimated",
      body:
        "A year of utility bills or a recording meter on the main gives a real peak, and it is frequently lower than the paper calculation. That gap is often what decides whether you need a service upgrade at all.",
    },
    {
      title: "We raise load management before selling you copper",
      body:
        "Article 750 and 625 let a managed charger be calculated at its throttled maximum. Eight vans needing 60 kWh overnight is 48 kW averaged across ten hours, against 154 kW unmanaged. The vehicles are equally full at six in the morning.",
    },
    {
      title: "We trench once",
      body:
        "Spare conduit with a pull string to the stalls that are not built yet, raceway sized for the later feeder, stub ups capped and recorded on a drawing. Opening the same asphalt twice is the most avoidable cost in this work.",
    },
    {
      title: "Siting is treated as a practical problem",
      body:
        "Cables reach about eighteen to twenty five feet, snow gets pushed to the edge of the lot every winter, and delivery trucks find the unprotected unit eventually. Bollards and mounting height are cheaper than a replacement connector.",
    },
    {
      title: "It is commissioned with a vehicle",
      body:
        "A meter proves the circuit. A car proves the installation, including the handshake, the network connection and whatever billing was supposed to happen. We would rather find that out than have you find it out.",
    },
  ],

  faq: [
    {
      q: "How many chargers will my service take?",
      a: "That depends on your measured demand, not on the service size alone. Two buildings with the same 400 amp service can have very different answers. A load calculation gives you a real number in a day or so.",
    },
    {
      q: "Do I need a service upgrade?",
      a: "Often not, and load management is the reason. Where an upgrade genuinely is needed we say so early and price it separately, because it is a utility conversation with its own timeline. What one involves is in [the 200 amp service upgrade](/projects/200-amp-service-upgrade).",
    },
    {
      q: "Can you install a charger we already bought?",
      a: "Yes, provided the unit is listed for the location and the ratings work. Send us the model before you buy if you still can, because the difference between a hardwired 48 amp unit and a plug in one changes the circuit and sometimes the cost.",
    },
    {
      q: "Level 2 or DC fast for a fleet?",
      a: "Level 2 overnight for anything parked overnight, almost without exception. DC fast only where a vehicle has to be back out in under an hour, because of what it costs to feed and what it does to your demand charges.",
    },
    {
      q: "Are there grants or tax credits for this?",
      a: "There have been federal and state programs for charging equipment, and they change often, with some expiring. We will tell you what paperwork an installer normally has to supply, but confirm the current rules before you build a budget around them.",
    },
    {
      q: "We want two now and more later. Does that change anything?",
      a: "It changes the feeder, the raceway and the panel space, all of which are far cheaper to get right once. Tell us the five year picture at the first visit and the second stage becomes a day of work instead of a second trench.",
    },
    {
      q: "Can the lot lighting and the chargers be done together?",
      a: "Yes, and it is worth asking for. Both need underground work to roughly the same places, and sharing one trench and one reinstatement is the largest single saving available on this kind of job. What the lighting side involves is on [the LED lighting page](/commercial-led-lighting).",
    },
  ],

  related: {
    projects: [
      "ev-charging-commercial-site",
      "three-phase-distribution-upgrade",
      "load-study-and-drawings",
      "parking-lot-lighting",
      "200-amp-service-upgrade",
      "commercial-panel-room-feeders",
      "underground-feeders-farm-yard",
      "retail-fit-out-wiring",
    ],
    articles: [
      "three-phase-vs-single-phase",
      "signs-your-panel-needs-replacing",
      "electrical-distribution-in-a-building",
      "cost-to-replace-electrical-panel",
      "how-to-read-a-panel-schedule",
    ],
  },

  seeAlso: [
    "commercial-electrical-services",
    "electrical-service-upgrades",
    "commercial-led-lighting",
    "low-voltage-structured-wiring",
    "industrial-electrical-services",
  ],

  keywords: [
    "commercial ev charger installation",
    "ev charger installation",
    "level 2 charger installation",
    "ev charging station installation",
    "fleet ev charging",
    "ev charger installer",
  ],
};

export default service;
