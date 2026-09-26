import type { Article } from "./types";

const article: Article = {
  slug: "what-is-switchgear",
  question: "The engineer says we need switchgear, not another panel. What is the difference?",
  title: "Switchgear, switchboards and panelboards: what separates them and when a building needs the real thing",
  category: "Power distribution",
  summary:
    "Panelboard, switchboard or switchgear: how each is built, what interrupting rating and SCCR actually mean, and the point where a building outgrows panels.",
  answer:
    "All three split incoming power into smaller circuits, but they are built to different standards and survive very different fault currents. A panelboard is built to UL 67, mounts in a wall cabinet, is worked on from the front only and tops out near 1200 amps. A switchboard is built to UL 891, stands on the floor and carries service entrance duty into the thousands of amps. Switchgear is built to UL 1558 and IEEE C37.20.1: each breaker sits in its own compartment behind grounded barriers and racks out, so one section can be serviced while the rest of the lineup stays live. What forces the choice is usually not ampacity, it is the fault current available at that point in the system.",
  lead:
    "The word switchgear gets used loosely on site, normally to mean any large grey thing full of breakers. It has a specific meaning, and when an engineer writes it onto a drawing instead of a distribution panel the cost of the electrical room roughly doubles. Sometimes that engineer is being cautious, and sometimes the building genuinely cannot be fed any other way.",

  photos: [
    {
      src: "/photos/blog/switchgear-1.webp",
      alt: "Switchgear and distribution lineup inside a plant electrical room",
      caption: "A distribution lineup in a plant. Sections bolt together, and each one can be isolated on its own.",
    },
    {
      src: "/photos/blog/ext-switchgear.webp",
      alt: "Electrical switchgear assembly",
      caption: "Compartmented construction is the defining feature, not the size of the cabinet. Photo by",
      credit: {
        author: "P199",
        href: "https://commons.wikimedia.org/wiki/File:Electrical_switchgear.JPG",
        license: "Public domain",
      },
    },
    {
      src: "/photos/blog/switchgear-2.webp",
      alt: "Electrical room with labelled distribution panels",
      caption: "Labelling is not decoration. It is what lets the next person work on one section without killing the building.",
    },
    {
      src: "/photos/blog/ext-switchgear-2.webp",
      alt: "High voltage switchgear lineup",
      caption: "Drawout construction is why switchgear gets maintained rather than replaced. Photo by",
      credit: {
        author: "Novoklimov",
        href: "https://commons.wikimedia.org/wiki/File:High-voltage_switchgear_01.jpg",
        license: "CC BY 4.0",
      },
    },
  ],

  sections: [
    {
      heading: "The three things people call a panel",
      body: [
        "All three do the same job: power arrives on one set of conductors and leaves on several smaller ones, each with its own overcurrent device. What separates them is construction, the test standard, and what happens when a fault lands on the bus.",
        "A panelboard is built to UL 67 and, by the Article 100 definition, is accessible from the front only. Breakers clip onto a bus, the practical ceiling is about 1200 amps, and there is one way in, so work on one usually means the whole panel goes dead. A switchboard is built to UL 891, stands on the floor, is normally front and rear accessible, and carries service or main distribution duty into the thousands of amps.",
        "Switchgear is built to UL 1558 and IEEE C37.20.1. Every breaker sits in its own compartment behind grounded metal barriers, and the breakers are drawout power circuit breakers rather than moulded case devices. If it is not yet settled whether the building needs three phase at all, [start with single phase versus three phase](/blog/three-phase-vs-single-phase).",
      ],
      bullets: [
        "Panelboard: UL 67, wall mounted, front access only, typically to 1200 A",
        "Switchboard: UL 891, floor standing, front and rear access, service and main distribution",
        "Switchgear: UL 1558 and IEEE C37.20.1, compartmented, drawout breakers, serviceable section by section",
      ],
    },
    {
      heading: "Short circuit current rating is the number that actually decides",
      body: [
        "Ampacity is the number everyone quotes and it is almost never the number that forces switchgear. The one that does is the fault current available at the terminals, and two separate ratings describe it.",
        "Interrupting rating belongs to the device: the highest current at rated voltage that breaker or fuse can actually break, and NEC 110.9 requires it to be at least the current available at the line terminals. Short circuit current rating, SCCR, belongs to the assembly: what the bus, the bracing and the enclosure can take without coming apart while the device clears. [The IAEI write up on short circuit current ratings](https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/) sets out the difference and the marking rules in 110.10, 110.24, 409.110 and 430.8.",
        "A moulded case panelboard is readily available at 22 kA or 65 kA. Above that the choices narrow and the price per circuit climbs. A plant close to a large service transformer, or a site where the utility has recently upsized the transformer feeding the yard, can have 40 kA at the main and 25 kA still available two levels down. Ask the utility for that figure in writing and have a short circuit study done from there down. Until somebody has the number, the argument is a guess.",
      ],
    },
    {
      heading: "Drawout breakers, and why maintainability is the real argument",
      body: [
        "In a panelboard a breaker bolts or clips on. To change one you kill the panel, or you work it energised, which in a commercial or industrial building means a work permit and the right protective equipment. The bus sits directly behind the device you are removing, so there is no third option.",
        "In switchgear the breaker racks out. It rolls on a carriage, the primary disconnects separate, shutters drop over the live stabs, and the breaker comes out with the bus still energised. It can be tested, serviced or swapped for a spare of the same frame while the rest of the lineup stays up. For a plant that cannot be shut down, that is the whole argument.",
        "It shows up again years later. Under the reconditioning rules behind NEC 110.21(A)(2), power circuit breakers, switchboards and switchgear may be reconditioned and recertified. Moulded case breakers and panelboards may not. A panelboard with a discontinued breaker line is a replacement, while switchgear of the same age is a maintenance item, as in [the commercial panel room and feeder work](/projects/commercial-panel-room-feeders).",
      ],
    },
    {
      heading: "When a building genuinely outgrows panelboards",
      body: [
        "Most buildings never need switchgear and should not be sold it. A 400 amp commercial service with a main panel and three subpanels is a panelboard job, and adding a fourth panel is the right answer.",
        "It is rarely one thing that tips it. It is normally available fault current, what an unplanned outage of the whole board costs, and how often somebody will need to open that equipment. On the sites covered by our [industrial electrical work](/industrial-electrical-services) the later questions decide it more often than the first. Where the answer is switchgear, it usually arrives inside a larger change like [the three phase distribution upgrade](/projects/three-phase-distribution-upgrade).",
      ],
      callout: {
        title: "Does the building actually need switchgear? Work through it in this order",
        lines: [
          "1. Get the available fault current at the service point in writing from the utility, then a short circuit study for each level of distribution. Nothing below means anything without that number.",
          "2. If that fault current fits a standard assembly rating, commonly 22 kA, 42 kA or 65 kA, and a listed panelboard or switchboard carries it, that is the answer. Stop here.",
          "3. Above roughly 1200 A, or where rear access is needed, a panelboard is out on construction grounds alone. The next step is a switchboard, not switchgear.",
          "4. Put a figure on one hour of unplanned outage across the whole board. Production lines, livestock ventilation and refrigeration are where drawout breakers begin to pay for themselves.",
          "5. Count the planned interventions over twenty years. One breaker added per decade does not justify switchgear. Process equipment that changes yearly does.",
          "6. Check what selective coordination the occupancy requires. Emergency and legally required standby circuits can settle the class on their own.",
          "7. Price both including the room. Switchgear needs more depth, more clearance under NEC 110.26, often rear access and a heavier floor.",
        ],
      },
    },
    {
      heading: "Coordination: making the nearest breaker trip and nothing else",
      body: [
        "A fault on one machine should open the breaker feeding that machine and nothing upstream. When a 30 amp branch breaker, a 400 amp feeder and a 2000 amp main all see the same fault current at the same instant, the fastest opens first. On inexpensive equipment that is very often the main, and one failed motor lead takes the whole building dark.",
        "With moulded case breakers there is little to work with: the instantaneous trip is fixed or barely adjustable, and below about 0.01 seconds the curves of two devices in series simply overlap. Power circuit breakers carry electronic trip units with adjustable long time, short time, instantaneous and ground fault settings, plus a short time withstand rating that lets the upstream device hold while the downstream one clears.",
        "The NEC treats this as a requirement rather than good practice on some systems: 700.32 for emergency, 701.32 for legally required standby and 708.54 for critical operations power. A load study and a set of distribution drawings costs very little next to buying the wrong board.",
      ],
    },
    {
      heading: "Arc flash: the consequence of higher fault current",
      body: [
        "Higher available fault current is not only an equipment rating problem. It is a personnel problem, because the energy released in an arcing fault rises with it and with how long the upstream device takes to clear.",
        "Incident energy is calculated, not estimated. [IEEE Std 1584, the guide for performing arc flash hazard calculations](https://standards.ieee.org/standard/1584-2018.html), gives the models used for three phase systems from 208 V to 15 kV, and the 2018 edition moved results enough that older studies are worth redoing. The inputs that shift the answer most are available fault current and clearing time, which is why coordination and arc flash are one conversation rather than two.",
        "On the floor that means NEC 110.16 labelling and NFPA 70E governing what happens before anyone opens an energised enclosure. It is also why we would rather survey equipment closed than open it to look: [the infrared survey of a switchboard](/projects/infrared-survey-switchboard) was done through inspection windows with the board under normal load.",
      ],
    },
  ],

  faq: [
    {
      q: "Is switchgear always three phase?",
      a: "In practice yes, for the low voltage class discussed here. Metal enclosed switchgear is built around three phase power circuit breakers, and the standards behind it assume three phase systems. A single phase building that needs capacity is looking at a larger service.",
    },
    {
      q: "Can we add a switchgear section to an existing switchboard lineup?",
      a: "Not as a mixed lineup. They are different listed assemblies with different bus construction and short circuit ratings, so they cannot be bolted together. You can feed new switchgear from the existing board, or replace the board and keep the downstream panels.",
    },
    {
      q: "Roughly how much more does switchgear cost than a switchboard?",
      a: "Enough that the room design changes, not just the invoice. The equipment is normally several times the price per circuit, and the deeper footprint, the clearance under NEC 110.26 and often a rear aisle add building cost. We do not publish a multiplier: the spread between a basic lineup and an arc resistant one is enormous.",
    },
    {
      q: "What is a series rated system, and is it acceptable?",
      a: "A tested combination where an upstream device with a high interrupting rating protects a downstream device with a lower one, so the assembly can be applied above the downstream rating. It is legal where listed and marked. What it gives up is coordination, because the upstream device is expected to operate on a serious downstream fault.",
    },
    {
      q: "Do we need a short circuit study if nothing in the building is changing?",
      a: "If the utility changes the transformer feeding you, or a neighbouring load joins the same circuit, your available fault current changes without anything in your building changing. Equipment correctly rated in 2005 can be under rated today through no fault of yours.",
    },
  ],

  sources: [
    {
      label: "IAEI Magazine: NEC Requirements for Short-Circuit Current Ratings",
      href: "https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/",
      note: "Interrupting rating versus SCCR, and the marking rules in 110.9, 110.10, 110.24, 409.110 and 430.8.",
    },
    {
      label: "IEEE Std 1584-2018: Guide for Performing Arc-Flash Hazard Calculations",
      href: "https://standards.ieee.org/standard/1584-2018.html",
      note: "The calculation models behind incident energy and arc flash boundary for 208 V to 15 kV three phase systems.",
    },
  ],

  services: [
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["three-phase-vs-single-phase", "signs-your-panel-needs-replacing", "cost-to-replace-electrical-panel"],

  closing:
    "We install and maintain distribution equipment on farms, commercial buildings and plants across Lebanon, Lancaster and Berks counties, which means we spend as much time telling people they do not need switchgear as we do installing it. If it has been specified and you want a second read on whether the fault current numbers support it, that conversation is worth having before the equipment is ordered.",

  keywords: [
    "switchgear",
    "electrical distribution",
    "switchboard vs panelboard",
    "short circuit current rating",
    "industrial electrical contractor",
  ],
};

export default article;
