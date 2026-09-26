import type { Article } from "./types";

const article: Article = {
  slug: "stray-voltage-on-dairy-farms",
  question: "The cows are holding back in the parlour. Could it be stray voltage?",
  title: "Stray voltage on a dairy farm: what it is, how it is measured, and whose fault it usually is",
  category: "Agricultural",
  summary:
    "Stray voltage explained for dairy farmers: what the cows feel, the level that starts costing milk, how it is measured properly, and whether the source is yours or the utility's.",
  answer:
    "Stray voltage is a small voltage, normally under 10 volts, between two points an animal can touch at the same time. The most sensitive cows show mild responses at around 2 milliamps through the animal and start actively avoiding contact at around 5 milliamps, which is well below anything a person would feel. USDA guidance is to keep cow contact voltage under roughly 2 to 4 volts. The source can be on the farm or on the utility side, so the first job is not to fix anything. It is to measure properly and find out which.",
  lead:
    "Almost every stray voltage call starts the same way. Milk is down, the cows are reluctant in the parlour, somebody is stepping or kicking off, and a neighbour has mentioned stray voltage. Sometimes that is exactly what it is. Often it is not, and the money gets spent in the wrong place. This is what is actually going on and how to find out where you stand.",

  photos: [
    {
      src: "/photos/blog/ext-milking-parlour.webp",
      alt: "Milking parlour on a Pennsylvania dairy farm",
      caption: "A milking parlour at Wanner's Farm in Narvon, Lancaster County. Photo by",
      credit: {
        author: "Beyond My Ken",
        href: "https://commons.wikimedia.org/wiki/File:Wanner%27s_Farm_Narvon_Pennsylvania_milking_parlour.jpg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/blog/stray-voltage-1.webp",
      alt: "Cable being terminated at farm equipment",
      caption: "Most on farm sources are ordinary: a worn cable, a heater element breaking down, a loose neutral.",
    },
    {
      src: "/photos/blog/ext-ground-rod.webp",
      alt: "Grounding electrode rod being installed",
      caption: "Adding ground rods is the most common wrong answer. Photo by",
      credit: {
        author: "Anibal Maysonet",
        href: "https://commons.wikimedia.org/wiki/File:Ground_rod_installation.jpg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/blog/stray-voltage-2.webp",
      alt: "Insulation resistance tester connected to farm electrical equipment",
      caption: "Testing has to happen with the farm running normally, not with everything switched off.",
    },
  ],

  sections: [
    {
      heading: "What the cow is actually feeling",
      body: [
        "A cow is a far better conductor than a person standing in the same spot. She has no shoes, four contact points instead of two, wet concrete underfoot and often a metal stall or waterer at her nose. Current that a person would never notice passes through her easily, and it passes through her chest rather than down one arm.",
        "That is why the numbers sound so small. The [Merck Veterinary Manual entry on stray voltage in animal housing](https://www.merckvetmanual.com/nervous-system/stray-voltage-in-animal-housing/stray-voltage-in-animal-housing) puts mild behavioural responses in the most sensitive animals at around 2 milliamps and avoidance at around 5 milliamps, with USDA guidance to keep contact voltage below roughly 2 to 4 volts. That is well under the level a person notices. The underlying USDA reference is Agriculture Handbook 696, known in the trade as the Red Book, and it is still what state commissions lean on.",
        "What changes at that level is not dramatic. She becomes reluctant to put her head in the same place twice, she steps more, she drinks less because the waterer is where she feels it, and milk letdown becomes incomplete. Lower intake and incomplete milking then show up as lower production and often as higher cell counts. Nothing about it looks electrical, which is exactly why it goes on for months and why it is worth having the farm surveyed as part of [routine electrical maintenance](/electrical-preventive-maintenance) rather than only once production has dropped.",
      ],
    },
    {
      heading: "Where it comes from, and why that matters so much",
      body: [
        "There are only two places stray voltage can come from and the difference decides who pays for the fix.",
        "On farm sources are the ones you own. Unbalanced loads on the neutral, a failing heater element in a waterer, a worn cable on a scraper or a fan, a motor with breaking down insulation, poor bonding between metal that animals touch, or a neutral connection that has loosened over the years. These are ordinary faults and they are usually fixable in a day once they are found.",
        "Off farm sources come in on the utility primary neutral, which is deliberately connected to earth in many places along its length. Unbalanced load on the distribution circuit, an undersized or corroded neutral, or a fault further up the line can all put voltage on the earth around your buildings. You cannot fix that from inside the barn, and the utility will not act on a complaint without measurements.",
        "Both sources produce identical symptoms in the herd, and both are common. Utilities publish their own material on this precisely because the question of whose problem it is comes up so often: [Lyon-Lincoln Electric Cooperative sets out the split](https://www.llec.coop/stray-voltage) and, like most cooperatives, offers a free investigation of their side. That is worth taking up, but note that it answers their question rather than yours.",
      ],
    },
    {
      heading: "How a real measurement is done",
      body: [
        "This is where most of the money gets wasted. Somebody puts a meter between a pipe and the floor, reads a number, and a decision gets made on it. That reading means almost nothing on its own.",
        "A meaningful measurement has three properties. It is taken between the two points the animal actually contacts, not between whatever is convenient. It is taken through a resistor that represents the animal rather than through a high impedance meter, because a meter reads voltage that cannot deliver any current. And it is taken while the farm is running the way it normally runs, with the parlour going and the loads on, because switching everything off removes the thing you are trying to measure.",
      ],
      callout: {
        title: "What a proper stray voltage survey involves",
        lines: [
          "True RMS meter across a resistor in the range of 500 ohms, which represents the animal rather than the meter.",
          "Readings taken at real cow contact points: front feet to rear feet, nose to feet at the waterer, muzzle to stall metal.",
          "Taken with the farm operating normally, then repeated with sections of load switched out one at a time.",
          "An on farm versus off farm test: disconnect the farm from the utility neutral momentarily under controlled conditions and see whether the reading follows.",
          "Everything logged, because the utility will want numbers and so will you if the case goes anywhere.",
        ],
      },
    },
    {
      heading: "The fix that usually is not the fix",
      body: [
        "The instinct when somebody says the word voltage is to drive more ground rods. It is cheap, it feels like doing something, and on a stray voltage problem it very rarely helps. In some situations it makes things worse, because a better connection to earth can pull more current from the utility neutral through your yard rather than less.",
        "What genuinely works falls into three groups, in this order. First, find and fix the actual fault: the waterer element, the worn cable, the loose neutral. Second, get the bonding right so that everything the animal can touch at the same time sits at the same potential. That is the equipotential plane requirement in the agricultural section of the code, and it exists precisely for this. We go through that side of it in [our plain language write up of Article 547](/blog/nec-547-agricultural-wiring).",
        "Third, if the measurements point off farm and the utility will not or cannot reduce it at source, an isolation device between the farm and the utility neutral is the remaining option. It is not a first move. It is what you do after the on farm work is done and the numbers still say the source is upstream.",
      ],
      bullets: [
        "Find and repair the actual on farm fault before anything else",
        "Get bonding and the equipotential plane right where animals stand",
        "Only then consider neutral isolation, and only with measurements behind it",
        "Do not start by adding ground rods, it is the most common wasted spend",
      ],
    },
    {
      heading: "What to check before you call anyone",
      body: [
        "A few things are worth eliminating yourself, because they cost nothing and they account for a surprising share of calls.",
        "Note whether the behaviour is in one place or everywhere. A problem at one waterer and nowhere else is almost always that waterer. Note whether it changes with the time of day or with a particular machine running, because that is your fault finding done for you. Note whether it started after work was done, after a storm, or after new equipment arrived.",
        "Look at the obvious mechanical things too. Scraper cables get dragged. Fan cords get chewed. Waterer heaters sit in water by design and fail from the inside. None of this needs a meter to spot, and any of it will produce the symptoms you are seeing. Wiring method matters here as well, because a cable that was never suitable for a wet corrosive building fails this way first, which is the subject of [our piece on barn wiring methods](/blog/barn-wiring-methods).",
      ],
      callout: {
        title: "Worth writing down before the visit",
        lines: [
          "Which animals, in which building, at which point in the routine.",
          "Whether it is worse at a particular time of day or when a particular machine runs.",
          "What changed recently: new equipment, electrical work, a storm, a utility outage.",
          "Whether milk, intake or cell counts moved, and roughly when.",
        ],
      },
    },
    {
      heading: "Why this keeps happening on older farms",
      body: [
        "Most dairy operations in Lebanon and Lancaster counties have grown by addition rather than by design. A parlour extended, a heifer barn added, a shop wired off the back of something else, and the service upgraded once in nineteen ninety something. Every one of those additions is a new set of bonds and a new opportunity for one piece of metal to sit at a different potential from the one next to it.",
        "The other half of it is age. Bonding conductors corrode where they enter concrete. Neutrals loosen over thirty winters of thermal cycling. Equipment that was fine when it was installed degrades slowly. None of it announces itself, and all of it shows up as a herd that is quietly underperforming.",
        "That is why stray voltage work and service work end up being the same conversation more often than not. When we rebuilt a farm service that had grown for forty years, described in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade), bonding was a larger part of the job than the service itself. The same is true of the parlour and bulk tank circuits covered in [the dairy parlour write up](/projects/dairy-parlour-bulk-tank-wiring).",
      ],
    },
  ],

  faq: [
    {
      q: "Can I measure it myself with a multimeter?",
      a: "You can get an indication, but not a number anybody will act on. A standard meter has very high input impedance, so it reads voltages that cannot push any current through an animal. Without a resistor representing the cow and readings at real contact points, the figure does not tell you whether the herd can feel it.",
    },
    {
      q: "How much milk does stray voltage actually cost?",
      a: "There is no single figure, and anyone quoting one precisely is guessing. Research is actually quite cautious here: the Merck Veterinary Manual notes that no studies support voltages up to 8 volts increasing mastitis or somatic cell counts on their own. What is documented is the behavioural mechanism, reduced water intake and incomplete letdown, and the production loss follows from those rather than from the voltage directly.",
    },
    {
      q: "The utility tested and said it is fine. Is that the end of it?",
      a: "Not necessarily. Utility testing usually establishes whether their neutral is contributing, which is a narrower question than whether your herd is being affected. On farm sources produce the same symptoms and are not their responsibility to find. It is worth having the farm side surveyed independently.",
    },
    {
      q: "Will an isolation transformer solve it?",
      a: "Only if the measurements say the source is off farm, and only after the on farm faults are fixed. Installed as a first move it can mask a fault you still own, and it is an expensive way to not solve a problem.",
    },
    {
      q: "Does this affect anything other than dairy cows?",
      a: "Dairy cattle are the most studied and the most sensitive because of the parlour routine and the contact points, but swine and poultry are affected too. The mechanism is the same wherever animals stand on a conductive floor and touch metal.",
    },
  ],

  sources: [
    {
      label: "Lyon-Lincoln Electric Cooperative: Stray Voltage",
      href: "https://www.llec.coop/stray-voltage",
      note: "A utility's own account of causes, testing and where their responsibility ends. Most cooperatives will investigate their side free of charge.",
    },
    {
      label: "Merck Veterinary Manual: Stray Voltage in Animal Housing",
      href: "https://www.merckvetmanual.com/nervous-system/stray-voltage-in-animal-housing/stray-voltage-in-animal-housing",
      note: "The animal health side: what exposure does to behaviour, intake and production.",
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["nec-547-agricultural-wiring", "farm-distribution-point", "barn-wiring-methods"],

  closing:
    "We work on dairy and poultry operations across Lebanon and Lancaster counties, which means bonding, equipotential planes and farm service work are ordinary weekly jobs here rather than something we read about. If your herd is telling you something and nobody has measured it properly yet, that is the place to start.",

  keywords: [
    "stray voltage",
    "stray voltage cows",
    "stray voltage testing",
    "what is stray voltage",
    "dairy farm stray voltage",
    "agricultural electrician",
  ],
};

export default article;
