import type { Article } from "./types";

const article: Article = {
  slug: "surge-protection-explained",
  question: "Lightning took out three controllers and nothing else. Would surge protection have stopped it?",
  title: "Surge protection: what an SPD actually stops, what it does not, and why one device at the service is not enough",
  category: "Power distribution",
  summary:
    "How surge protective devices work, the difference between Type 1, 2 and 3, why lead length matters more than the price of the device, and what surges they cannot stop.",
  answer:
    "Probably, and probably not with one device. A surge protective device diverts a transient to ground and clamps what gets past it to a level the equipment can survive, but it cannot clamp all the way down to normal voltage. A single unit at the service knocks a large strike down to something manageable and still lets through more than a sensitive controller wants to see. The arrangement that works is layered: a Type 1 or Type 2 device at the service, then Type 2 devices at the panels feeding the equipment that matters, with short, straight leads. Most of the damage we are called to look at was survivable with the second layer in place.",
  lead:
    "The pattern is familiar enough that we can usually guess it before arriving. A storm goes through, the lights blink, everything seems fine. Then over the following week a controller locks up, a drive throws a fault it has never thrown before, and the board in the grain dryer stops answering. Nothing looks burned. That is what a surge does, and it is why the damage often gets blamed on age rather than weather.",

  photos: [
    {
      src: "/photos/projects/surge-protection-service-1.webp",
      alt: "Surge protective device installed at a service with status indicators",
      caption: "A device at the service is the first layer. On its own it is rarely the whole answer.",
    },
    {
      src: "/photos/blog/ext-ground-rod.webp",
      alt: "Ground rod being installed in the earth",
      caption: "An SPD works by diverting energy to ground, so the grounding system is half the installation. Photo by",
      credit: {
        author: "Anibal Maysonet",
        href: "https://commons.wikimedia.org/wiki/File:Ground_rod_installation.jpg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/projects/service-pole-overhead-drop-1.webp",
      alt: "Newly set galvanised steel service pole in open ground with a bucket truck alongside",
      caption: "Overhead services in open country are the ones that collect induced surges from nearby strikes.",
    },
    {
      src: "/photos/blog/ext-panel-open.webp",
      alt: "Circuit breaker panel with the cover removed",
      caption: "The second layer goes at the board feeding whatever you cannot afford to lose. Photo by",
      credit: {
        author: "BrokenSphere",
        href: "https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "What a surge actually is",
      body: [
        "A surge is a very short overvoltage, measured in microseconds rather than cycles. The textbook test waveform rises to its peak in about eight microseconds and decays over about twenty. Your meter will never see one, and neither will anybody standing in the room.",
        "The dramatic source is lightning, and a direct strike on the building is not the common case. Far more often it is a strike somewhere nearby that induces a transient into the overhead line, or a strike to ground that raises the potential of the earth around it for an instant. On a farm with long overhead runs between buildings, there is a lot of wire available to collect that.",
        "The unglamorous source is the building itself. Utility capacitor bank switching, large motors starting and stopping, contactors opening under load, and drives switching at several kilohertz all put transients onto the system. These are smaller than lightning and they happen constantly, which is why equipment that has never seen a storm still dies of surge damage eventually.",
      ],
    },
    {
      heading: "Type 1, Type 2 and Type 3",
      body: [
        "The numbering describes where a device is allowed to be installed, not how good it is. A Type 1 device is permitted on the supply side of the service disconnect, between the utility transformer and the main. Its job is the big external event. A Type 2 device goes on the load side of the service disconnect, which includes branch panels, and handles residual lightning energy plus everything the building generates internally. A Type 3 device is a point of use unit and has to sit at least ten metres of conductor away from the service.",
        "EC&M's [SPD Basics](https://www.ecmweb.com/power-quality-reliability/article/21125777/spd-basics) sets the split out clearly, and makes the point that a single plug strip is not protection. The Code side moved in 2020, when Article 242 replaced the older Articles 280 and 285 and gathered surge arresters and SPDs into one place, which Mike Holt covers in [the overvoltage protection requirements](https://www.ecmweb.com/national-electrical-code/code-basics/article/21260858/nec-requirements-for-overvoltage-protection).",
        "What the layering buys you is arithmetic. A big device at the service takes a large event down to a few thousand volts, which saves the wiring and the panels. A Type 2 at the board feeding a controller takes that down again to something the controller's own input protection can absorb. Skip the second layer and the first one has done its job while your equipment still dies.",
      ],
      bullets: [
        "Type 1: supply side of the service disconnect, sized for external events",
        "Type 2: load side, at the service and again at panels feeding sensitive loads",
        "Type 3: point of use, at least ten metres downstream, never the only measure",
        "Type 4: component level, built into equipment by its manufacturer",
      ],
    },
    {
      heading: "Lead length beats price",
      body: [
        "This is the part that gets installations wrong far more often than the choice of device. An SPD does not stop a surge, it diverts it, and the conductors carrying that diverted current have inductance. During an event with an extremely fast rise time, a surprisingly short length of wire develops a substantial voltage of its own, and that voltage adds to whatever the device let through.",
        "The practical rule is to keep the conductors as short and as straight as possible, under three feet, with no sharp bends and no neat loops of spare cable. EC&M notes that twisting the conductors together and keeping them inside a foot can cut the let through voltage by around three quarters. That is a bigger improvement than most people get from buying a more expensive device.",
        "It follows that an SPD mounted a metre away on a tidy bracket with a graceful loop of cable is a worse installation than a cheaper one bolted directly to the panel. We would rather sacrifice how it looks.",
      ],
      callout: {
        title: "What we look at before quoting surge protection",
        lines: [
          "Is the service overhead or underground, and how long are the runs between buildings.",
          "What is already grounded and bonded, because a diverted surge has to have somewhere to go.",
          "Which equipment has actually failed before, and on which panel it sits.",
          "Whether there is room to mount a device within a foot or two of the bus.",
          "Whether the controllers have their own signal and data lines coming in from outside, because power is only one path.",
          "Whether the existing device, if there is one, still has a green light on it.",
        ],
      },
    },
    {
      heading: "What surge protection does not do",
      body: [
        "It does not stop a direct lightning strike to the building from doing structural and mechanical damage. Nothing at the panel is going to help with that.",
        "It does not protect against everything arriving over a wire. Data lines, telephone lines, camera runs, sensor cable and the connection to a controller all provide their own paths into equipment, and on a farm those cables often run between buildings outdoors. Protecting only the power side leaves the other half open, which is a common reason equipment fails despite having an SPD upstream of it. The physical rules that keep those runs out of trouble in the first place are in [low voltage wiring done properly](/low-voltage-structured-wiring).",
        "It does not last forever. The metal oxide varistors inside an SPD degrade every time they work, and a device that has absorbed a large event or many small ones may still be sitting there with its indicator dark. That indicator is the whole reason to walk past it occasionally, and it is on the list during [a preventive maintenance visit](/electrical-preventive-maintenance).",
        "And it does not fix a grounding system that was never right. The device needs a low impedance path to earth to work at all, so on older farm yards where the bonding between buildings has never been traced, surge protection is the second job and the grounding is the first. That is the same underlying problem behind most stray voltage complaints, which we go through in [stray voltage on a dairy farm](/blog/stray-voltage-on-dairy-farms).",
      ],
    },
    {
      heading: "When it is worth fitting and when it is not",
      body: [
        "The calculation is simple enough to do on the back of an envelope. Add up what one storm would cost you in controllers, drives and boards, then compare it with the installed cost of a service device plus one or two panel devices. On a poultry operation with house controllers, on a dairy with a parlour full of electronics, or in a plant with drives on every motor, the answer is obvious and the payback is one event.",
        "In a small commercial building with little more than lighting and receptacles, it is a reasonable thing to decline. Nothing in there is expensive to replace and nothing stops the business if it fails.",
        "The cheapest moment to fit it is while the service is open for other reasons. A new service, a panel replacement or a meter change all put an electrician in exactly the right place with the cover already off, which is why it appears as a line on so many of our service upgrade quotes and why [the surge protection job](/projects/surge-protection-service) was done alongside other work. If your board is due for replacement anyway, the [signs that a panel is finished](/blog/signs-your-panel-needs-replacing) are worth reading first.",
      ],
    },
  ],

  sources: [
    {
      label: "EC&M: SPD Basics",
      href: "https://www.ecmweb.com/power-quality-reliability/article/21125777/spd-basics",
      note: "Bryan Glenn on SPD types, how MOVs work, lead length and why a layered approach is necessary.",
    },
    {
      label: "EC&M: NEC Requirements for Overvoltage Protection",
      href: "https://www.ecmweb.com/national-electrical-code/code-basics/article/21260858/nec-requirements-for-overvoltage-protection",
      note: "Mike Holt on Article 242, where each SPD type may be connected and the installation rules.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Preventive maintenance and infrared surveys", href: "/electrical-preventive-maintenance" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
  ],

  related: ["signs-your-panel-needs-replacing", "stray-voltage-on-dairy-farms", "electrical-distribution-in-a-building"],

  faq: [
    {
      q: "We already have a device at the meter. Is that enough?",
      a: "It is the right first layer and it is rarely the whole answer. It protects the wiring and the panels from a large event, and what it lets through is still more than a controller or a drive wants to see. The second device belongs at the board feeding that equipment.",
    },
    {
      q: "How do we know if ours is still working?",
      a: "Look at the indicator. Almost every unit has a light or a flag showing whether the internal protection is still intact, and a device that has done its job may look completely normal otherwise. It is a five second check and almost nobody makes it.",
    },
    {
      q: "Will it stop nuisance tripping?",
      a: "No. Nuisance tripping is a different problem with different causes, and on drives it is usually the cable and the lead length rather than anything transient. That diagnosis is in [chasing a VFD ground fault](/blog/vfd-ground-fault-troubleshooting).",
    },
    {
      q: "Do we need it on every panel?",
      a: "No, and doing so is a waste. It belongs at the service and then at the boards feeding equipment you cannot afford to lose. A lighting panel in a warehouse does not need one.",
    },
    {
      q: "Does it help with brownouts and voltage sags?",
      a: "No. An SPD handles microsecond overvoltages. A sag lasting several cycles is a different event and the answer there is either a different piece of equipment or the standby power conversation in [starting load against running load](/blog/generator-sizing-starting-vs-running).",
    },
  ],

  closing:
    "We fit surge protection most often on farms with long overhead runs and on plants full of drives, usually alongside work that already has the service open. If a storm has recently cost you controllers or boards and nobody has looked at what is protecting them, that is a short visit and an easy thing to put right.",

  keywords: [
    "surge protection electrical panel",
    "spd type 1 type 2",
    "whole building surge protector",
    "lightning damage controllers farm",
    "surge protective device installation",
  ],
};

export default article;
