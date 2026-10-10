import type { Service } from "./types";

const service: Service = {
  slug: "commercial-electrical-services",
  kind: "market",
  title: "Commercial Electrician | Fit Outs, Panels & Lighting | Lancaster & Lebanon County PA",
  h1: "Commercial electrical contracting",
  summary:
    "Commercial electrical contracting across Lebanon, Lancaster and Berks counties: fit outs, remodels, service and panel upgrades, lighting, parking lots and EV charging.",
  lead:
    "Electrical work for offices, retail, restaurants and the commercial buildings around them, serving Lebanon, Lancaster and Berks counties in Central Pennsylvania. From tenant fit outs and service upgrades to interior and exterior lighting, equipment connections and the service calls that follow, Slon Electric builds and maintains the electrical systems a commercial building depends on.",

  hero: {
    src: "/photos/services/commercial-electrical-services.webp",
    alt: "Large commercial interior with new linear lighting installed by Slon Electric",
  },

  sections: [
    {
      heading: "What commercial work covers here",
      body: [
        "The work falls into three groups. There is capacity: the service entrance, the panels and the feeders. There is the build itself: fit outs, remodels, additions, lighting, equipment connections and the outside of the property. And there is service work after everyone has moved in, which is where most of our longest relationships started.",
        "The commercial stock in this region is not office towers. It is retail units, small offices, warehouses, restaurants, workshops and light industrial bays, very often in a building that was something else first. That history matters more than the square footage. A shell from the seventies with an addition from the nineties holds three generations of wiring, no drawings and a directory written in pencil by somebody who left years ago.",
        "Which of the three you are in changes what matters. On capacity work the long pole is the utility and the lead time on gear. On a build it is the other trades and the inspection sequence. On service work it is how fast somebody can tell you what is actually wrong, which usually depends on whether the last electrician left a record.",
      ],
    },
    {
      heading: "Coordination is most of the job",
      body: [
        "On a fit out the electrician is first in and last out. Conduit and boxes go in before the walls close, the ceiling has to be roughed before the grid goes up, and trim cannot start until the finishes are done. In between, the mechanical contractor, the sprinkler fitter and the data installer all want the same six inches above that ceiling. Losing that argument in week two costs a week in month two.",
        "So we plan around the other trades rather than around ourselves: equipment schedules and a marked up plan before the first day, a walk with the general contractor at rough stage, and a straight answer on who provides what for kitchen equipment, signage and tenant fixtures. How that runs in practice is set out in [the retail fit out write up](/projects/retail-fit-out-wiring) and in [an office remodel done in phases](/projects/office-remodel-power-lighting).",
        "An opening date is a promise somebody already made to a landlord or a payroll, so we would rather tell you in week one that a lead time on gear will not make your date than find it out together in week nine.",
      ],
    },
    {
      heading: "Working while the doors are open",
      body: [
        "A remodel inside a trading business is a different problem from an empty shell. The store still opens at nine and the warehouse still ships, so most of that work gets done early, late or on a Sunday, with temporary supplies wherever a circuit has to come out for longer than a shift.",
        "What actually decides how disruptive it is has nothing to do with skill. It is whether anybody knows what each breaker feeds. In an older commercial building the directory is usually wrong, so every isolation turns into a hunt and somebody's till or walk in freezer goes dark by accident. We re-identify circuits as we go and leave a schedule that matches reality, for the reasons set out in [why your panel schedule does not match the building](/blog/how-to-read-a-panel-schedule). If nobody can explain how the building is fed any more, [how distribution is arranged in a building](/blog/electrical-distribution-in-a-building) is the place to start.",
      ],
    },
    {
      heading: "Inspection sequencing",
      body: [
        "Commercial work in Pennsylvania is inspected in stages under the Uniform Construction Code, by whichever agency the municipality uses. The stages are what matter: underground before the slab, rough before anything is covered, then final. An inspection missed at rough stage is not a paperwork problem, it is drywall coming back off.",
        "The items that hold up a final are consistent year after year. Working space in front of panels under Article 110.26, which means 36 inches of depth and a clear width nobody is allowed to stack boxes in. GFCI protection in the locations Article 210.8(B) now lists, which covers far more of a commercial building than most owners expect. Emergency and exit lighting under Article 700. Labelling, the fault current marking and a directory that is filled in. We pull the permit, book the inspections and sequence the work around them rather than the other way round.",
      ],
    },
    {
      heading: "Capacity, lighting and the outside of the building",
      body: [
        "A change of use is where capacity runs out. A retail unit that becomes a restaurant, or a warehouse that takes on a production line, adds load the original service was never calculated for. The answer starts with an Article 220 load calculation, and it may be a sub panel, a new feeder or a whole new service. That decision is worked through on [the service upgrades page](/electrical-service-upgrades), and what a panel room rebuild involves is shown in [this feeder and panel room job](/projects/commercial-panel-room-feeders).",
        "Lighting is the part of a building people judge without knowing why. A warehouse is a layout problem before it is a fixture problem, because aisle racking turns a good lumen package into shadows, which is the point of [choosing and laying out high bay LED](/blog/high-bay-led-lighting) and of [this warehouse retrofit](/projects/warehouse-high-bay-lighting). Outside, a dark lot is a liability question as much as a lighting one, and the poles need trenching before the asphalt is sealed, as in [the parking lot lighting job](/projects/parking-lot-lighting).",
        "EV charging is now a routine line item on a fit out, for a fleet or as an amenity. It is also the load most likely to embarrass a service that was already near its limit, so it belongs in the load calculation at design stage rather than after the equipment arrives. The practical side is on [the EV charging page](/ev-charging-installation).",
      ],
    },
  ],

  scope: [
    {
      group: "Fit outs and remodels",
      note: "From a landlord shell or an existing space that is changing use.",
      items: [
        "Tenant fit out wiring from the empty shell",
        "Demolition and safe removal of abandoned wiring",
        "Rough in: conduit, boxes, feeders and branch circuits",
        "Ceiling grid coordination with mechanical and sprinkler",
        "Trim, devices, plates and fixture hanging",
        "Equipment connections from the supplied schedule",
        "Temporary power and lighting during the build",
        "Permit applications and inspection scheduling",
      ],
    },
    {
      group: "Capacity and distribution",
      note: "Everything that decides whether the building can take more.",
      items: [
        "Article 220 load calculations before design",
        "Service entrance upgrades and utility coordination",
        "Panelboard and switchboard replacement",
        "New feeders, sub panels and distribution boards",
        "Three phase distribution and transformer work",
        "Meter stacks and tenant metering",
        "Circuit identification and panel schedules",
        "Whole building surge protection",
      ],
    },
    {
      group: "Interior lighting",
      note: "New layouts and retrofits of what is already there.",
      items: [
        "LED troffer, downlight and linear fixture installation",
        "High bay and aisle lighting for warehouse space",
        "Retail display, track and accent lighting",
        "Emergency and exit lighting under Article 700",
        "Occupancy sensors, daylight harvesting and timers",
        "Dimming systems and lighting control panels",
        "Existing fixture retrofit and ballast to driver conversion",
        "Lighting layouts worked to the racking or the fixtures",
      ],
    },
    {
      group: "Outside the building",
      note: "The parts that get noticed at night and in winter.",
      items: [
        "Parking lot pole lighting and pole base work",
        "Wall packs, canopy and entrance lighting",
        "Sign and facade lighting circuits",
        "Underground trenching and site feeders",
        "Bollards, walkway and landscape circuits",
        "Snow melt, gutter and downspout heat trace",
        "Exterior receptacles and weatherproof provisions",
        "Camera, gate and access control power",
      ],
    },
    {
      group: "Equipment and specialist rooms",
      note: "The rooms with a schedule attached to them.",
      items: [
        "Commercial kitchen and hood equipment connections",
        "Walk in cooler and freezer refrigeration circuits",
        "Rooftop unit, condenser and mechanical connections",
        "Server and comms room power and cooling circuits",
        "Compressor, lift and shop equipment wiring",
        "Laundry, salon and medical equipment circuits",
        "Dedicated and isolated ground circuits",
        "Motor circuits, starters and disconnects",
      ],
    },
    {
      group: "Service work after handover",
      note: "What buildings actually call about once they are open.",
      items: [
        "Fault finding and intermittent trip diagnosis",
        "Breaker, device and fixture replacement",
        "Added circuits for new equipment",
        "Infrared surveys of panels and switchgear",
        "Code correction and inspection punch lists",
        "GFCI and AFCI additions under Article 210.8",
        "Data, camera and low voltage additions",
        "Planned maintenance visits on a schedule",
      ],
    },
  ],

  facilities: [
    "Retail units and storefronts",
    "Offices and professional suites",
    "Warehouses and distribution space",
    "Restaurants and commercial kitchens",
    "Workshops, garages and service bays",
    "Light industrial and flex units",
    "Churches, halls and municipal buildings",
  ],

  audience: [
    {
      title: "General contractors who need a date kept",
      body:
        "On a fit out you are buying a programme as much as a scope. We give you equipment lead times in week one, turn up at rough when the grid crew needs us gone, and tell you early when something will not make the date rather than at the point it stops the job.",
    },
    {
      title: "Tenants taking a shell they have never wired",
      body:
        "A landlord shell arrives with a panel, a stub of conduit and a lot of assumptions. We work out what the lease actually gives you, what your equipment schedule really needs, and where the gap between those two is going to cost money.",
    },
    {
      title: "Owners remodelling a building that stays open",
      body:
        "The store opens at nine whatever we are doing. Work gets staged early, late or on a Sunday, with temporary supplies wherever a circuit has to be out for longer than a shift, the way it ran in [an office remodel done in phases](/projects/office-remodel-power-lighting).",
    },
    {
      title: "Facilities managers with a building nobody documented",
      body:
        "Three generations of wiring, a directory in pencil and no drawings. We re identify circuits as we work and leave a schedule that matches the building, which turns every future isolation from a hunt into a five minute job.",
    },
    {
      title: "Restaurants and kitchens with an equipment schedule",
      body:
        "The most demanding commercial space there is: real connected loads rather than brochure figures, GFCI where Article 210.8(B) now requires it, washdown rated methods and a hood that behaves correctly with the suppression system.",
    },
    {
      title: "Churches, halls and municipal buildings",
      body:
        "Old buildings, committee budgets and a calendar full of dates the work has to miss. These jobs go best in defined stages that each finish cleanly, so the building is never left half done between them.",
    },
  ],

  process: {
    title: "How a commercial job runs",
    lines: [
      "A site visit and a look at the drawings, the equipment schedule and what the existing panels are really feeding.",
      "A load calculation wherever the job adds load, and a drawing where the inspector or landlord wants one. See [the load study write up](/projects/load-study-and-drawings).",
      "A written scope and price, with long lead items flagged separately because they drive the programme more than labour does.",
      "Permit and inspection applications, booked against the build sequence instead of left to the end.",
      "Rough in, coordinated with the other trades and with whatever hours the business needs to keep.",
      "Trim, testing and final inspection, then labels and a panel schedule left in the building.",
    ],
  },

  whyUs: [
    {
      title: "We read the programme, not just the drawing",
      body:
        "Most commercial jobs are lost in the calendar rather than in the conduit. We plan around the ceiling date, the inspection stages and the opening, and we raise a lead time problem while it is still solvable.",
    },
    {
      title: "Gear is ordered before we open the building up",
      body:
        "Panels, switchgear and fixtures are bought and staged before demolition starts, so the space is not sitting open waiting on a delivery. On long lead items we say so in the quote rather than in month three.",
    },
    {
      title: "We leave the building documented",
      body:
        "A filled in directory, labelled circuits and a panel schedule that matches reality. It costs us an hour and saves whoever comes next a day, every time, for the reasons in [how to read a panel schedule](/blog/how-to-read-a-panel-schedule).",
    },
    {
      title: "Permits and inspectors are our job, not yours",
      body:
        "We pull the permit, book the stages and meet the inspector. An owner should not be learning the Uniform Construction Code inspection sequence in the middle of their own fit out.",
    },
    {
      title: "Out of hours work is normal here",
      body:
        "Evenings, early mornings and Sundays are how most occupied buildings get rewired. It costs more per hour than daytime labour and far less than closing the doors.",
    },
    {
      title: "The same crew comes back afterwards",
      body:
        "The people who wired the building are the people who answer the service call two years later, and they still know where everything runs.",
    },
  ],

  faq: [
    {
      q: "Do you work for general contractors or direct for owners?",
      a: "Both. On a fit out we are usually a subcontractor to the general contractor. On a remodel, a lighting retrofit or a service upgrade the owner or facilities manager calls us directly and we handle the permit and the inspector.",
    },
    {
      q: "Can you work outside our trading hours?",
      a: "Yes. For anything that interrupts tills, refrigeration or shipping it is usually cheaper overall. Evening and weekend labour costs more per hour, and still less than closing.",
    },
    {
      q: "We are fitting out a restaurant. Is a kitchen different?",
      a: "It is the most demanding commercial space there is. Circuits sized to the real equipment schedule rather than the brochure, GFCI protection under Article 210.8(B), wiring methods that survive washdown and grease, and the hood wired so the fans and the suppression system behave correctly together. Send that schedule early, because the connection details decide the rough in.",
    },
    {
      q: "Do we need a service upgrade or will a sub panel do?",
      a: "It depends on the calculated load against the existing service, not on how full the panel looks. Plenty of buildings only need a sub panel fed from spare capacity. Others are already at the limit, where adding makes things worse. The signs are in [when a panel needs replacing rather than repairing](/blog/signs-your-panel-needs-replacing).",
    },
    {
      q: "Do you take on service calls and small jobs?",
      a: "Yes. Fault finding, breaker and fixture failures, extra circuits and the work that follows an equipment change. A building generating several of those a year is usually better off with a scheduled visit, which is the argument behind [preventive maintenance](/electrical-preventive-maintenance).",
    },
    {
      q: "Who pulls the permit, us or you?",
      a: "We do, on our own work. We apply, book the underground, rough and final inspections against the build sequence and meet the inspector on site. If the general contractor holds a single permit for the whole job we work to that instead.",
    },
    {
      q: "How long does a fit out usually take?",
      a: "The electrical labour is rarely what sets it. Lead times on switchgear, the utility's own schedule where a service changes, and the inspection stages are what move a date. We put those three on the table in week one so nobody is planning an opening around a guess.",
    },
  ],

  related: {
    projects: [
      "retail-fit-out-wiring",
      "office-remodel-power-lighting",
      "warehouse-high-bay-lighting",
      "commercial-panel-room-feeders",
      "parking-lot-lighting",
      "ev-charging-commercial-site",
      "comms-room-structured-cabling",
      "200-amp-service-upgrade",
    ],
    articles: [
      "electrical-distribution-in-a-building",
      "how-to-read-a-panel-schedule",
      "high-bay-led-lighting",
      "cost-to-replace-electrical-panel",
      "what-is-switchgear",
    ],
  },

  seeAlso: [
    "commercial-led-lighting",
    "electrical-service-upgrades",
    "ev-charging-installation",
    "low-voltage-structured-wiring",
    "electrical-preventive-maintenance",
  ],

  keywords: [
    "commercial electrician",
    "commercial electrical services",
    "commercial electrical contractor",
    "commercial electrical installation",
    "restaurant electrician",
    "office electrician",
  ],
};

export default service;
