import type { Article } from "./types";

const article: Article = {
  slug: "electrical-distribution-in-a-building",
  question: "Where does the power actually go between the meter and the machine?",
  title: "How electrical distribution in a building works, from the service to the last outlet",
  category: "Power distribution",
  summary:
    "The path power takes through a commercial or farm building: service, main, feeders, sub panels and branch circuits, and why knowing the chain makes every fault easier to find.",
  answer:
    "Power enters at the service, passes through one main disconnecting means, and is then split into feeders. Each feeder supplies a panelboard, and each panelboard splits again into branch circuits that reach the actual equipment. Every step down that chain gets a smaller overcurrent device than the one above it, so a fault should trip the nearest device and leave everything upstream running. When a fault takes out the whole building instead of one circuit, that is almost always where the problem is.",
  lead:
    "Most people who work in a building know where the panel is and nothing else. That is usually enough until something trips, at which point the difference between knowing the chain and not knowing it is an afternoon. This is the whole path, described the way we would walk it with you on site.",

  photos: [
    {
      src: "/photos/blog/distribution-1.webp",
      alt: "Electrical room with a lineup of labelled panelboards",
      caption: "An electrical room doing its job: panels labelled, feeders identified, space to work in front of them.",
    },
    {
      src: "/photos/blog/ext-distribution.webp",
      alt: "Detail of an electrical distribution panel",
      caption: "Distribution equipment, photographed for the Historic American Engineering Record. Photo by",
      credit: {
        author: "Lowe, Jet",
        href: "https://commons.wikimedia.org/wiki/File:DETAIL_OF_ELECTRICAL_PANEL._-_Lightship_116,_Pier_3,_Inner_Harbor,_Baltimore,_Independent_City,_MD_HAER_MD-133-16.tif",
        license: "Public domain",
      },
    },
    {
      src: "/photos/blog/distribution-2.webp",
      alt: "Distribution switchboard in a commercial building",
      caption: "A switchboard is where the split happens in a larger building, before the panelboards.",
    },
    {
      src: "/photos/blog/ext-switchgear.webp",
      alt: "Electrical switchgear lineup",
      caption: "At the top end the same job is done by switchgear. Photo by",
      credit: {
        author: "P199",
        href: "https://commons.wikimedia.org/wiki/File:Electrical_switchgear.JPG",
        license: "Public domain",
      },
    },
  ],

  sections: [
    {
      heading: "The chain, in order",
      body: [
        "Every building follows the same sequence, whether it is a milking parlour or a packaging plant. The utility brings a service to the building. The service entrance conductors run to a service disconnecting means, which is the one switch that kills everything downstream. That disconnect and its overcurrent device are the top of the chain.",
        "From there the supply is split. In a small building it is split straight into branch circuits inside a single panelboard. In anything larger it is split first into feeders, each feeding a panelboard somewhere else in the building, and those panelboards split again into branch circuits.",
        "The word that matters at each step is smaller. The main might be 400 amps, the feeder to the shop panel 100, the branch circuit to a receptacle 20. That descending order is what makes selective operation possible, and it is the whole point of the arrangement.",
      ],
      bullets: [
        "Service: what the utility delivers, up to the meter",
        "Service entrance and main disconnect: your equipment, one switch that kills everything",
        "Feeders: from the main to each panelboard",
        "Panelboards: where feeders split into branch circuits",
        "Branch circuits: the last overcurrent device before the equipment",
      ],
    },
    {
      heading: "Why a fault should only take out one circuit",
      body: [
        "When a fault happens, more than one protective device sees it. A short at a machine is seen by the branch breaker, by the feeder breaker upstream and by the main. All three could operate. Only the branch breaker should.",
        "Getting that right is called coordination, and it is done by choosing devices whose operating characteristics are separated enough that the nearest one always wins. In a small building this happens more or less automatically because the device sizes are so different. In a larger building it is a study, and it has to be redone when equipment changes.",
        "The practical test is one everybody already knows. When something trips, does the rest of the building stay up. If a fault at one machine puts a whole plant in the dark, the coordination is wrong and it is costing money every time it happens. That is one of the reasons buildings move from panelboards to switchgear as they grow, which is set out in [our piece on what switchgear actually is](/blog/what-is-switchgear).",
      ],
    },
    {
      heading: "The number that decides what equipment can go where",
      body: [
        "There is a second number on every piece of distribution equipment besides its ampere rating, and it is the one people miss. It is the short circuit current rating, which says how much fault current the equipment can withstand and interrupt without failing dangerously.",
        "Available fault current is not a property of your building alone. It comes from the utility transformer, the impedance of the service conductors and the length of the run. Change any of those and it changes. A service upgrade that puts in a larger transformer raises the fault current available at the panel, and equipment that was correctly rated before can be under rated afterwards.",
        "This is why an upgrade is never just a bigger panel. The [IAEI material on NEC requirements for short circuit current ratings](https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/) goes through how the requirement works and where it gets checked. It also feeds straight into arc flash, because the same fault current drives the incident energy on the labels, which is covered in [the preventive maintenance and arc flash write up](/projects/preventive-maintenance-arc-flash).",
      ],
    },
    {
      heading: "Feeders, and the thing that gets undersized",
      body: [
        "A feeder has two constraints and most people only apply the first. It has to carry the current without overheating, which is ampacity, and it has to deliver usable voltage at the far end, which is voltage drop. Ampacity is what the tables give you. Voltage drop is what actually decides the size on any long run.",
        "In a compact commercial building this rarely bites. On a farm or a spread out site it bites constantly, because feeders run hundreds of feet between buildings and the drop accumulates. The formulas and the copper and aluminium constants are laid out in the [IAEI article on voltage drop calculations](https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/), and we work a farm example through in [our piece on voltage drop over long runs](/blog/voltage-drop-long-farm-runs).",
        "The other feeder decision that gets made badly is where the split happens. A building or a yard fed by a chain of sub panels hanging off each other is much harder to work on and much harder to fault find than one fed from a single distribution point. On a farm that is the single most common layout problem, and it is the subject of [the distribution point article](/blog/farm-distribution-point).",
      ],
      callout: {
        title: "Tracing a circuit when nothing is labelled",
        lines: [
          "Start at the equipment and work upstream, not from the panel down. The chain only branches in one direction.",
          "Identify the branch device first: which panel, which breaker number. If the schedule is wrong, prove it rather than trusting it.",
          "Then the feeder: which panel feeds that panel, and what size is the device at the top of it.",
          "Then the main and the service. Note the ampere rating and, if it is marked, the short circuit current rating.",
          "Write it down as you go and leave it in the panel. The next person, possibly you at two in the morning, will need it.",
          "Do not pull covers to do this. Panel schedules, labels and a clamp meter on accessible conductors get you most of the way.",
        ],
      },
    },
    {
      heading: "Where farm and plant buildings differ from offices",
      body: [
        "An office building is designed once and changes slowly. A farm or a plant changes continuously, and the distribution is what absorbs that change. Every new machine is a new branch circuit, every new building is a new feeder, and after a decade the arrangement reflects the order things arrived in rather than any plan.",
        "The two consequences are always the same. Panels fill up, so circuits get doubled onto terminals never designed for two conductors. And loads grow past what the feeder was sized for, so the feeder becomes the constraint without anybody noticing until a hot afternoon.",
        "That is why we look at the whole chain when somebody asks for one more circuit. Sometimes the answer really is one more circuit. Often the honest answer is that the panel is full and the feeder is at its limit, which is the situation behind [the panel upgrade in Myerstown](/projects/panel-upgrade-myerstown) and a good share of our [service and panel upgrade work](/electrical-service-upgrades).",
      ],
    },
    {
      heading: "What a well arranged building looks like",
      body: [
        "You can tell in about two minutes. There is a clear working space in front of every panel, not a pallet stack. Every panel has a schedule on the door that matches reality. Feeders are identified at both ends, so you know what a cable is without tracing it. The main disconnect is findable by somebody who has never been in the building.",
        "Equipment is rated for the fault current actually available at that point, and there is a record of what that is. Where the rating matters, the label is legible rather than sun bleached.",
        "And there is spare capacity, both in ways and in feeder size. Buildings grow. The ones that give the least trouble are the ones where somebody, once, spent slightly more than the job needed. Reading and maintaining that record is most of what [our piece on panel schedules](/blog/how-to-read-a-panel-schedule) is about.",
      ],
    },
  ],

  faq: [
    {
      q: "What is the difference between a feeder and a branch circuit?",
      a: "A branch circuit is the last one, between the final overcurrent device and the equipment. A feeder is anything between the service and that final device, typically running from the main to a panelboard. The distinction matters because the code sizes and protects them differently.",
    },
    {
      q: "Why does my whole building go dark when one machine faults?",
      a: "Because the protective devices are not coordinated, so an upstream device operates before the nearest one. Sometimes that is a design problem, sometimes it is a breaker that has aged and now trips early. Either way it is worth fixing, because it turns a small fault into a shutdown.",
    },
    {
      q: "Can I just add a sub panel when I run out of breaker spaces?",
      a: "Sometimes. It works when the existing panel and its feeder both have capacity left and you simply need more ways. It does not work when the feeder is already at its limit, because then you have added spaces without adding capacity.",
    },
    {
      q: "What is short circuit current rating and why do I care?",
      a: "It is how much fault current a piece of equipment can take without failing dangerously. You care because it is not fixed by your building alone: a utility transformer change or a service upgrade can raise the fault current available and leave existing equipment under rated.",
    },
    {
      q: "How do I find the main disconnect in a building I do not know?",
      a: "Start at the meter and follow the conductors to the first switch or breaker inside. In a larger building it may be in a dedicated electrical room. If nobody in the building can point at it, that is worth fixing before it is needed in an emergency.",
    },
  ],

  sources: [
    {
      label: "IAEI Magazine: NEC requirements for short circuit current ratings",
      href: "https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/",
      note: "How the rating requirement works and why a service change can leave existing equipment under rated.",
    },
    {
      label: "IAEI Magazine: Voltage drop calculations",
      href: "https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/",
      note: "Formulas, constants and worked examples for sizing feeders on drop rather than ampacity alone.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
  ],

  related: ["what-is-switchgear", "how-to-read-a-panel-schedule", "voltage-drop-long-farm-runs"],

  closing:
    "Most of the work we do on farms and in plants starts by tracing this chain, because the fault somebody called about is usually a symptom of where the building outgrew its distribution. If nobody has drawn yours since it was built, that is where we would start too.",

  keywords: [
    "electrical distribution",
    "circuit breaker distribution panel",
    "feeder vs branch circuit",
    "short circuit current rating",
    "electrical service upgrade",
    "panelboard",
  ],
};

export default article;
