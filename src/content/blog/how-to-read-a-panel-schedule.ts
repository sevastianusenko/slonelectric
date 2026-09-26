import type { Article } from "./types";

const article: Article = {
  slug: "how-to-read-a-panel-schedule",
  question: "The panel directory says kitchen and there is no kitchen. How do I fix this?",
  title: "How to read a panel schedule, and why yours does not match the building",
  category: "Service and panels",
  summary:
    "What the numbering on a panel actually means, why schedules drift out of date, how to re identify circuits safely, and what a schedule has to say to be worth anything.",
  answer:
    "Circuit numbers in a panel run in a fixed pattern: odd numbers down the left, even down the right, and each number corresponds to one physical position on the bus. A schedule is worth something only if it names what each circuit actually serves, in language somebody unfamiliar with the building would understand. Almost every schedule older than a few years is wrong, because circuits get added and reused and nobody updates the card. Re identifying them is a morning of work and it pays for itself the first time something trips.",
  lead:
    "This comes up on nearly every service call. Something has tripped, the directory says laundry or kitchen in faded pencil, and the building it describes has not existed for fifteen years. Here is what the numbering actually means, how to put it right, and what a useful schedule looks like when it is finished.",

  photos: [
    {
      src: "/photos/blog/panel-schedule-1.webp",
      alt: "Panelboard interior with breakers and circuit numbering",
      caption: "Odd numbers down one side, even down the other. The numbering is a physical map of the bus, not a list.",
    },
    {
      src: "/photos/blog/ext-panel-open.webp",
      alt: "Open circuit breaker panel showing breakers and wiring",
      caption: "A panel with room left in it and terminations you can actually see. Photo by",
      credit: {
        author: "BrokenSphere",
        href: "https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: "/photos/blog/panel-schedule-2.webp",
      alt: "Newly installed panel with clean terminations",
      caption: "A new panel is the cheapest moment to get the schedule right. After the cover goes on it is a separate job.",
    },
    {
      src: "/photos/blog/ext-distribution.webp",
      alt: "Detail of an electrical distribution panel",
      caption: "Older distribution equipment, photographed for the Historic American Engineering Record. Photo by",
      credit: {
        author: "Lowe, Jet",
        href: "https://commons.wikimedia.org/wiki/File:DETAIL_OF_ELECTRICAL_PANEL._-_Lightship_116,_Pier_3,_Inner_Harbor,_Baltimore,_Independent_City,_MD_HAER_MD-133-16.tif",
        license: "Public domain",
      },
    },
  ],

  sections: [
    {
      heading: "What the numbers mean",
      body: [
        "The numbering in a panelboard is not arbitrary and it is not a list in the order things were installed. It is a map of physical positions on the bus. Odd numbers run down the left hand column, even numbers down the right, starting at the top. Position one and position two are side by side at the top, three and four below them, and so on.",
        "That layout exists because of how the bus is built. In a single phase panel the bus bars alternate, so consecutive positions down one column land on opposite legs. In a three phase panel the pattern repeats every three positions, so 1, 7 and 13 are on the same phase.",
        "This is why a two pole breaker occupies two positions in the same column rather than one on each side, and why a three phase breaker takes three. It also explains why balancing a panel means moving circuits between positions rather than just counting breakers.",
      ],
    },
    {
      heading: "Why yours is wrong",
      body: [
        "Schedules drift for four reasons and all of them are ordinary.",
        "Circuits get added. Somebody needs power for a new machine, there is a spare way, and the breaker goes in. Writing on the card is the last step and it is the one that gets skipped when the job runs late.",
        "Circuits get reused. A circuit that fed something removed years ago is still live and still labelled for the thing that is gone. The next person assumes the label is right and works on the wrong circuit.",
        "Buildings change use. A schedule written for an office describes rooms that have since become a workshop. The wiring did not move, the words just stopped meaning anything.",
        "And panels get replaced without the schedule being carried over properly. That is the worst version, because the numbering changes and the old descriptions get copied across positions they no longer match. The discipline that avoids it is the same one described in [what replacing a panel actually costs](/blog/cost-to-replace-electrical-panel), where re identification is a real line in the work rather than an afterthought.",
      ],
    },
    {
      heading: "What a useful schedule says",
      body: [
        "A description is useful when somebody who has never been in the building could find what it refers to. Receptacles is not useful. Receptacles, north wall of the shop, including the compressor outlet is useful.",
        "Three things make the difference. Name a location, not a function, because functions change and locations do not. Name the specific equipment where a circuit serves one thing, because that is the circuit somebody will need to isolate. And say where it is fed from, because the next person may be standing at a sub panel with no idea what feeds it.",
        "A schedule should also record the things people forget: which circuits are on a shared neutral, which feed anything that must not be switched off casually such as a bulk tank or a ventilation controller, and which are spare rather than simply unused. A circuit that is labelled spare and is actually live is a genuine hazard.",
      ],
      bullets: [
        "Locations rather than functions, because functions change",
        "Specific equipment named where a circuit serves one thing",
        "What feeds this panel, written on the panel",
        "Shared neutrals flagged, because they matter when working on one circuit",
        "Loads that must not be switched off casually marked as such",
        "Spare ways marked spare, and dead ways marked dead, never left blank",
      ],
    },
    {
      heading: "Re identifying circuits without breaking anything",
      body: [
        "The brute force method is to switch a breaker off and walk the building. It works, it is slow, and on a farm or a plant it is unacceptable because half the things you would switch off cannot be switched off.",
        "A circuit tracer solves most of it. A transmitter is put on the circuit and a receiver follows the conductor, which lets you identify circuits without interrupting them. For anything critical that is the only reasonable approach.",
        "The rest is discipline. Work one panel at a time, write as you go rather than at the end, photograph the panel with the cover off before you start, and leave the finished schedule inside the door rather than on a clipboard that will be lost.",
      ],
      callout: {
        title: "A re identification that will still be right in five years",
        lines: [
          "Photograph the panel interior and the existing directory before touching anything, so there is a record of what it looked like.",
          "Write the panel name and what feeds it at the top of the new schedule. Most schedules never say this and it is the first thing anybody needs.",
          "Work position by position in numerical order, not breaker by breaker as you find them.",
          "Identify with a tracer where the load cannot be interrupted. Switch only what can safely be switched.",
          "Record location, equipment and anything unusual such as a shared neutral, in that order.",
          "Mark genuine spares as spare and dead positions as dead. Never leave a line blank, because blank reads as unknown.",
          "Print it, put it inside the door, and keep a copy off site. Paper inside a panel does not survive a flood.",
        ],
      },
    },
    {
      heading: "The other numbers on the panel",
      body: [
        "While the cover is off there are two labels worth reading that have nothing to do with the circuit list.",
        "The first is the panel rating: the main bus ampacity and the voltage and phase configuration. That tells you what the panel can carry, which is not the same as the size of the breaker feeding it. The second is the short circuit current rating, which says how much fault current the panel can withstand. That one matters because it changes when the service changes, and equipment that was correctly rated can quietly stop being so. The [IAEI material on short circuit current ratings](https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/) explains where that gets checked.",
        "There is also a manufacturing label that decides one practical question people ask constantly: whether a damaged panel can be rebuilt. Since the 2020 edition of the code, panelboards may not be reconditioned, which the [UL guide to reconditioned equipment](https://www.ul.com/news/reconditioned-electrical-equipment-2020-nec-guide) sets out along with the rest of the list. That single fact settles a lot of arguments about repair against replacement, and the other signs are covered in [when a panel is finished](/blog/signs-your-panel-needs-replacing).",
      ],
    },
    {
      heading: "Why this is worth a morning",
      body: [
        "The return shows up in three places. Fault finding stops being archaeology, which matters most at the times you can least afford it, and it is the single thing that shortens an [after hours call](/emergency-electrician) more than any other. Anybody working on the building, including a contractor who has never been there, can isolate the right circuit rather than guessing. And you find out what is actually in the panel, which regularly turns up circuits nobody knew were live.",
        "It also tells you whether the panel has any room left, which is the question behind most upgrade conversations. A panel that looks half empty is often full once you count doubled terminations and two pole breakers properly.",
        "On a farm the schedule matters more than in an office, because the things that must not be switched off are the things animals depend on. Knowing which breaker is the bulk tank without looking is worth having written down, and it connects directly to the circuits described in [the dairy parlour and bulk tank work](/projects/dairy-parlour-bulk-tank-wiring) and to how the whole yard is fed in [the distribution point article](/blog/farm-distribution-point).",
      ],
    },
  ],

  faq: [
    {
      q: "Why are odd and even numbers on opposite sides?",
      a: "Because the numbering maps physical positions on the bus rather than listing circuits in order. Odd down the left, even down the right, starting at the top. It is also why a two pole breaker takes two positions in the same column.",
    },
    {
      q: "Can I re identify circuits myself?",
      a: "You can do a good deal of it safely with the cover on: switching a breaker and seeing what goes off, then writing it down properly. Where a load cannot be interrupted you need a tracer, and anything requiring the cover off is not a job to do without the right equipment.",
    },
    {
      q: "Is a handwritten schedule acceptable?",
      a: "Legibility matters more than how it was produced. A clear handwritten card beats a printed one that was never updated. What is not acceptable is pencil that has faded to nothing, which is most of what we find.",
    },
    {
      q: "What does it mean when two circuits share a neutral?",
      a: "It means two circuits on different phases return through one conductor, which is a legitimate arrangement. It also means switching off one circuit does not make the shared neutral safe to work on, which is why it belongs on the schedule.",
    },
    {
      q: "Should the schedule live in the panel or in a file?",
      a: "Both. Inside the door is where somebody standing at the panel will look. A copy somewhere dry and off site is what survives the flood, the fire or the person who retired.",
    },
  ],

  sources: [
    {
      label: "UL: Reconditioned electrical equipment and the 2020 NEC",
      href: "https://www.ul.com/news/reconditioned-electrical-equipment-2020-nec-guide",
      note: "What may and may not be reconditioned, including the prohibition on reconditioning panelboards.",
    },
    {
      label: "IAEI Magazine: NEC requirements for short circuit current ratings",
      href: "https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/",
      note: "The other label on the panel, and why a service change can leave it wrong.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
  ],

  related: ["signs-your-panel-needs-replacing", "electrical-distribution-in-a-building", "cost-to-replace-electrical-panel"],

  closing:
    "We re identify panels as part of most service and upgrade work, because a building nobody can trace is a building that costs more to maintain. If your directory describes a room that no longer exists, that is a morning well spent rather than a big project.",

  keywords: [
    "panel schedule",
    "panel directory",
    "circuit panel breaker",
    "panel breaker",
    "electrical panel labelling",
    "circuit identification",
  ],
};

export default article;
