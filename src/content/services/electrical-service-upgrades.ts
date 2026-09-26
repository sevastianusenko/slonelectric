import type { Service } from "./types";

const service: Service = {
  slug: "electrical-service-upgrades",
  kind: "service",
  title: "Electrical Service & Panel Upgrades | Commercial & Farm | Lancaster & Lebanon County PA",
  h1: "Electrical service and panel upgrades",
  summary:
    "Electrical service and panel upgrades for farms, plants and businesses in Lebanon, Lancaster and Berks counties. Load calculation, utility coordination and a clean changeover.",
  lead:
    "A service upgrade is one of the few electrical jobs where the decision matters more than the labour. Size it from a calculation and it lasts twenty years. Size it from habit and you pay twice, because the second upgrade costs more than the difference would have. This page covers how the size gets decided, what the utility controls, and what actually happens on the day the power goes off.",

  hero: {
    src: "/photos/services/electrical-service-upgrades.webp",
    alt: "Distribution switchboard installed in a commercial building",
  },

  sections: [
    {
      heading: "How to tell a service has been outgrown",
      body: [
        "Most buildings do not announce it. The symptoms arrive one at a time over several years, each treated as its own small problem, until somebody adds them up.",
      ],
      bullets: [
        "The main breaker trips under load, or the utility fuse has blown more than once",
        "Lights dim when a compressor, dryer or large motor starts",
        "No spare space, and the last few circuits went in as tandem breakers or a tapped lug",
        "A sub panel fed from another sub panel, fed from a third",
        "Conductors or terminations discoloured, and the panel cover warm",
        "Equipment added since the service was sized: a kitchen, a line, a dryer, a shop, EV charging or a generator",
        "A discontinued panel with a known breaker failure history, such as Federal Pacific Stab-Lok or Zinsco",
      ],
    },
    {
      heading: "The calculation that decides the size",
      body: [
        "The size comes from Article 220, not from what the neighbour installed. For an existing building there is a better route than adding nameplates up: 220.87 lets the calculation use the maximum demand recorded over the previous twelve months, taken at 125 percent, plus the new load. Utility demand data, or a recording meter left on the service for a month, turns a guess into a measurement. That is the argument in [the load study write up](/projects/load-study-and-drawings).",
        "It is also what stops 200A being the automatic answer. Two hundred amps is a residential reflex. On a farm yard feeding several buildings, in a shop with a welder and a compressor, or in a restaurant, it is often too small and the right answer is 400A, 600A or three phase, as in [this three phase distribution upgrade](/projects/three-phase-distribution-upgrade). Plenty of other buildings need no more amperes at all. They need the distribution rearranged, because the problem is where the power goes rather than how much arrives, which is the subject of [how distribution is arranged in a building](/blog/electrical-distribution-in-a-building) and of [when a panel is no longer enough](/blog/what-is-switchgear).",
      ],
    },
    {
      heading: "What the utility controls, and what we do",
      body: [
        "The ownership line runs through the meter. The utility owns the transformer, the drop or lateral and the metering. The service entrance conductors, the meter socket, the main and everything downstream are yours. That split is why an upgrade always has two schedules running at once, and why theirs decides your date.",
        "We make the application, submit the load calculation, agree the point of attachment and book the cut in and the inspection in the right order. Two questions are worth asking early. Whether the existing transformer can carry the new load, because if it cannot, that is a utility job with its own lead time. And whether three phase is available at the road, which depends on what is already on the poles, and whose consequences are set out in [three phase against single phase](/blog/three-phase-vs-single-phase). Overhead work often takes in the mast and the drop too, as in [rebuilding a service pole](/projects/service-pole-overhead-drop).",
      ],
    },
    {
      heading: "Changeover day",
      body: [
        "Most of a service upgrade happens with the power on. The new panel or switchboard is set, the service conductors are run, the grounding electrodes are driven and the feeders are prepared while the old service keeps feeding the building. Only the changeover needs an outage.",
        "On a panel replacement where the branch circuits can be reused, the power is typically off for a working day, sometimes less. Where the meter, the mast or the point of attachment move, the outage has to line up with the utility crew and the inspector, so it is a scheduled window rather than an afternoon. Where a building cannot go dark at all, the new service is energised alongside the old and the loads move across in stages. On a farm that is planned around milking and feeding rather than around us, which is what [this farm service entrance upgrade](/projects/farm-service-entrance-upgrade) describes, while [a meter and service upgrade in Womelsdorf](/projects/meter-service-upgrade-womelsdorf) shows the commercial version.",
      ],
    },
    {
      heading: "Grounding, bonding, and why a damaged panel is a replacement",
      body: [
        "A new service is the one chance to get the grounding right, and in an older building it usually is not right. Article 250 requires every electrode present at the building to be used and bonded together: the metal underground water pipe, a concrete encased electrode where one is accessible, and rods where required. The neutral and the equipment grounds separate at the first disconnect and stay separated downstream, which is the most common error we find in buildings that grew a sub panel at a time. On farms the bonding between buildings matters more still, because it is the mechanism behind most stray voltage complaints.",
        "One point catches people out on damaged gear. Since the 2020 edition the Code has drawn a line at 408.8: switchboards, switchgear and motor control centres may be reconditioned, panelboards may not. A panel that has been through a fire, a flood or a serious fault is therefore a replacement, and anyone offering to recondition one is offering something the Code does not recognise. The signs are in [when a panel needs replacing rather than repairing](/blog/signs-your-panel-needs-replacing), and the price drivers in [what it costs to replace a panel](/blog/cost-to-replace-electrical-panel). An open new service is also the cheapest moment to fit [surge protection](/projects/surge-protection-service).",
      ],
    },
  ],

  scope: [
    {
      group: "Service entrance work",
      note: "Everything between the utility connection and the main.",
      items: [
        "Overhead service entrance replacement",
        "Underground service lateral installation",
        "Service mast, weatherhead and point of attachment",
        "Meter socket and meter base replacement",
        "CT cabinets and current transformer metering",
        "Main disconnects and service rated equipment",
        "Service relocation to a better position",
        "Temporary services for construction",
      ],
    },
    {
      group: "Panels and switchgear",
      note: "The boards themselves and what feeds them.",
      items: [
        "Panelboard replacement reusing branch circuits",
        "Switchboard and switchgear installation",
        "Obsolete panel replacement, including Federal Pacific and Zinsco",
        "Sub panel installation and feeder runs",
        "Load centre relocation out of a bad position",
        "Breaker replacement and panel interior work",
        "Tandem breaker and overfilled panel correction",
        "Working space corrections under Article 110.26",
      ],
    },
    {
      group: "Capacity and calculation",
      note: "Deciding the size with arithmetic instead of habit.",
      items: [
        "Article 220 load calculations",
        "Existing building demand studies under 220.87",
        "Recording meter left on the service for a month",
        "Utility demand data review",
        "Three phase feasibility and utility enquiry",
        "Future load allowance for EV, generators and equipment",
        "Single line drawings and as built documentation",
        "Written recommendation with the reasoning shown",
      ],
    },
    {
      group: "Grounding and bonding",
      note: "The part of a new service most often got wrong.",
      items: [
        "Grounding electrode system under Article 250",
        "Ground rod installation and testing",
        "Water pipe and concrete encased electrode bonding",
        "Neutral and ground separation at the first disconnect",
        "Building to building bonding on farm yards",
        "Equipment grounding conductor corrections",
        "Intersystem bonding for phone, data and cable",
        "Ground ring and supplemental electrode work",
      ],
    },
    {
      group: "Utility and permits",
      note: "The schedule you do not control, managed for you.",
      items: [
        "Utility service application and load submission",
        "Point of attachment and connection agreement",
        "Transformer capacity enquiry with the utility",
        "Municipal permit applications",
        "Underground, rough and final inspection scheduling",
        "Meeting the inspector and closing out corrections",
        "Coordination of the cut in with the utility crew",
        "Documentation pack handed over at the end",
      ],
    },
    {
      group: "Changeover and protection",
      note: "The day itself, and what gets fitted while it is open.",
      items: [
        "Staged transfer for buildings that cannot go dark",
        "Temporary supplies to critical loads during the cut over",
        "Out of hours and weekend changeovers",
        "Circuit identification and re labelling",
        "Filled in panel directories left in the board",
        "Whole building surge protection at the service",
        "Branch circuit surge devices at sensitive equipment",
        "Infrared check of the new terminations under load",
      ],
    },
  ],

  facilities: [
    "Farm service entrances and yard distribution points",
    "Shops, offices and retail units",
    "Restaurants after a kitchen change",
    "Warehouses and light manufacturing",
    "Pole buildings, workshops and equipment sheds",
    "Buildings adding EV charging or standby power",
    "Older buildings with obsolete or failing panels",
  ],

  audience: [
    {
      title: "Farms that have added four buildings to one service",
      body:
        "The house, then the barn off the house, then the shop off the barn. At some point the arithmetic stops working, and the fix is usually a proper distribution point rather than simply more amperes.",
    },
    {
      title: "Buildings changing use",
      body:
        "A retail unit becoming a restaurant, a warehouse taking a production line, a shop adding a welder and a compressor. New connected load against a service nobody has recalculated since it was installed.",
    },
    {
      title: "Owners of a panel with a bad reputation",
      body:
        "Federal Pacific Stab-Lok, Zinsco and similar boards with a known breaker failure history. Insurers increasingly ask, and replacement is a planned job at a sensible price rather than an emergency at a bad one.",
    },
    {
      title: "Anyone adding EV charging or a generator",
      body:
        "Both are loads that embarrass a service already near its limit, and both are far cheaper to allow for at design stage than to retrofit afterwards. The calculation should happen before the equipment is ordered.",
    },
    {
      title: "Buildings that cannot go dark",
      body:
        "Cold storage, plants mid run, farms with stock in the buildings. The new service gets energised alongside the old one and the loads move across in stages, which costs more in labour and nothing in production.",
    },
    {
      title: "People told they need 200 amps",
      body:
        "Sometimes true and often a reflex. We would rather do the calculation and tell you the honest answer, including when it is that the distribution needs rearranging and no extra amperes are required at all.",
    },
  ],

  process: {
    title: "How a service upgrade runs",
    lines: [
      "A visit to see the existing service, the panel, the meter position and how the building is actually fed today.",
      "A load calculation under Article 220, using recorded demand where the building already exists, plus whatever is being added.",
      "A recommendation with the reasoning shown, including the case for a size you did not expect, as in [this 200A upgrade](/projects/200-amp-service-upgrade).",
      "The utility application and the permit, with the transformer and lead time questions asked at the start.",
      "Preparation with the power on: gear set, conductors run, electrodes driven, feeders made ready.",
      "The changeover and the inspection, in a window agreed around milking, trading or production.",
      "Labels and a filled in directory left in the building, because [a schedule that matches reality](/blog/how-to-read-a-panel-schedule) makes the next job quick.",
    ],
  },

  whyUs: [
    {
      title: "The size comes from a measurement",
      body:
        "For an existing building, 220.87 lets the calculation use recorded demand rather than a pile of nameplates. A recording meter on the service for a month turns an argument into a number, and it often saves the cost of the meter several times over.",
    },
    {
      title: "We ask the transformer question first",
      body:
        "Whether the utility's transformer can carry the new load decides your date more than anything we do. Asking it in week one is the difference between a scheduled job and a project that stalls after the gear arrives.",
    },
    {
      title: "Most of the work happens with the power on",
      body:
        "Gear set, conductors run, electrodes driven and feeders prepared while the old service keeps feeding the building. Only the changeover itself needs an outage, and that is where the planning goes.",
    },
    {
      title: "Grounding gets done properly while it is open",
      body:
        "Every electrode present bonded together, neutral and ground separated at the first disconnect and kept separated. It is the one chance to fix what a building accumulated over decades, and it is invisible afterwards, so nobody else charges for doing it right.",
    },
    {
      title: "We are straight about reconditioning",
      body:
        "Since the 2020 Code, section 408.8 allows switchboards, switchgear and motor control centres to be reconditioned but not panelboards. If somebody has offered to recondition your damaged panel, they are offering something the Code does not recognise.",
    },
    {
      title: "The building leaves documented",
      body:
        "Labels, a filled in directory and a schedule that matches what is actually connected. Every future job in that building is faster and cheaper because of an hour spent at the end of ours.",
    },
  ],

  faq: [
    {
      q: "How long will the power be off?",
      a: "For a panel replacement reusing the existing branch circuits, usually a working day. If the meter, the mast or the service position moves, the outage is set by the utility crew and the inspector, so it becomes a scheduled window. Where a building cannot go dark, we plan a temporary supply or a staged transfer instead.",
    },
    {
      q: "Is 200 amps enough?",
      a: "For many small commercial buildings, yes. For a farm yard feeding several buildings, a shop with a welder and compressor, a restaurant, or anywhere adding EV charging, often not. It stays the wrong question until the load calculation is done.",
    },
    {
      q: "Can our damaged panel be repaired instead of replaced?",
      a: "If it has been through a fire, a flood or a serious fault, no. Section 408.8 of the 2020 Code permits switchboards, switchgear and motor control centres to be reconditioned, but not panelboards. Individual breakers and lugs on an otherwise sound panel are a different matter and are often replaceable.",
    },
    {
      q: "Do you handle the utility and the permit?",
      a: "Yes. We make the utility application with the load calculation attached, agree the connection point, pull the permit and book the inspections in sequence. The one thing outside our control is the utility's own schedule for transformer work, which is why we ask about it first.",
    },
    {
      q: "What does a service upgrade cost?",
      a: "It turns on a short list: panel only against a full service, overhead against underground, whether the meter or mast moves, the distance to the utility connection, whether the branch circuits can be reused, and single phase against three phase. [What it costs to replace a panel](/blog/cost-to-replace-electrical-panel) sets out the ranges and what moves them. We quote in writing after seeing the building, with assumptions marked as assumptions.",
    },
    {
      q: "Can you move the panel somewhere more sensible?",
      a: "Usually yes, and it is often worth doing while everything is open. The two things that decide it are the working space the new position gives you under Article 110.26 and how far the existing branch circuits will reach, which sometimes means a junction box and extensions rather than a rewire.",
    },
    {
      q: "Our problem is voltage drop at the far end, not the main. Does an upgrade fix that?",
      a: "Not on its own. More amperes at the service does nothing for a long run that is dropping volts along the way. That is a feeder and distribution problem, and the reasoning is in [voltage drop on long runs](/blog/voltage-drop-long-farm-runs). Sometimes the answer is a distribution point closer to the load rather than a bigger service.",
    },
  ],

  related: {
    projects: [
      "200-amp-service-upgrade",
      "farm-service-entrance-upgrade",
      "meter-service-upgrade-womelsdorf",
      "panel-upgrade-myerstown",
      "commercial-panel-room-feeders",
      "three-phase-distribution-upgrade",
      "service-pole-overhead-drop",
      "load-study-and-drawings",
    ],
    articles: [
      "cost-to-replace-electrical-panel",
      "signs-your-panel-needs-replacing",
      "electrical-distribution-in-a-building",
      "what-is-switchgear",
      "how-to-read-a-panel-schedule",
    ],
  },

  seeAlso: [
    "commercial-electrical-services",
    "standby-generator-installation",
    "electrical-preventive-maintenance",
    "agricultural-electrical-services",
    "ev-charging-installation",
  ],

  keywords: [
    "electrical service upgrade",
    "electrical panel upgrade",
    "200 amp service upgrade",
    "panel replacement",
    "electrical service",
    "commercial panel upgrade",
  ],
};

export default service;
