import type { Article } from "./types";

const article: Article = {
  slug: "high-leg-delta",
  question: "One leg of our three phase service reads 208 volts to ground. Is something wrong?",
  title: "High leg delta: why one phase reads 208 volts to ground and what must never be landed on it",
  category: "Power distribution",
  summary:
    "The wild leg explained: why B phase measures 208 volts to ground on a four wire delta, what the orange marking means, and the mistake that destroys equipment.",
  answer:
    "Nothing is wrong. On a four wire delta service the midpoint of one transformer winding is grounded to give you 120 volts, and that grounding puts the remaining phase about 208 volts away from ground rather than 120. That conductor is called the high leg or the wild leg, and the Code requires it to be marked orange and, since 1975, landed on the B phase of a panelboard. It is perfectly usable for three phase loads. What it must never feed is a 120 volt circuit, because that circuit will see 208 volts and whatever is plugged into it will not survive the experience.",
  lead:
    "This is one of the few electrical surprises that still catches experienced people, usually in an older shop or farm building where somebody added a circuit to whichever breaker space was free. The meter reads 240 volts between any two phases, which looks normal, and then one phase to neutral reads 208 instead of 120. The service is not faulty. It was built that way on purpose, for a reason that made sense when it was installed.",

  photos: [
    {
      src: "/photos/blog/high-leg-1.webp",
      alt: "Service conductors landed on lugs with coloured phase tape inside a distribution enclosure",
      caption: "Phase taping at a service termination. Colour is how the next person knows what they are holding.",
    },
    {
      src: "/photos/blog/ext-panel-open.webp",
      alt: "Circuit breaker panel with the cover removed",
      caption: "The middle position in a panelboard is where a high leg belongs. Photo by",
      credit: {
        author: "BrokenSphere",
        href: "https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: "/photos/svc-panels.webp",
      alt: "Distribution switchboard installed in a commercial building",
      caption: "On newer services the question does not arise, because the utility supplies a wye system instead.",
    },
    {
      src: "/photos/blog/ext-switchgear.webp",
      alt: "Electrical switchgear assembly",
      caption: "Marking and labelling requirements apply at every point where a connection is made. Photo by",
      credit: {
        author: "P199",
        href: "https://commons.wikimedia.org/wiki/File:Electrical_switchgear.JPG",
        license: "Public domain",
      },
    },
  ],

  sections: [
    {
      heading: "Where the 208 volts comes from",
      body: [
        "A delta secondary has three windings joined end to end in a triangle. Take the voltage across any one winding and you get 240 volts, which is why every phase to phase reading on this service is the same and looks unremarkable.",
        "The problem with a plain delta is that it gives you no neutral and therefore no 120 volts for lighting and receptacles. The traditional answer was to tap the exact midpoint of one winding and ground it. Now the two ends of that winding sit 120 volts either side of ground, and you have your lighting supply without a second transformer.",
        "The third phase does not sit on that winding at all. Geometrically it is at the opposite corner of the triangle from the tapped midpoint, and the distance from there to ground works out at 240 multiplied by the square root of three divided by two. That is 207.8 volts, which everybody rounds to 208. Nothing has gone wrong and nothing is leaking. It is simply where that corner of the triangle ends up once you decide to ground the middle of one side.",
        "If the underlying question is whether your building should be on three phase at all, [single phase against three phase](/blog/three-phase-vs-single-phase) covers that decision separately.",
      ],
      bullets: [
        "Any two phases: 240 volts, on all three combinations",
        "The two phases on the tapped winding: 120 volts to ground each",
        "The remaining phase: about 208 volts to ground, and it is meant to be",
      ],
    },
    {
      heading: "Orange means two completely different things",
      body: [
        "Section 110.15 of the Code requires the high leg to be durably and permanently marked with an orange outer finish or by other effective means, at every point in the system where a connection is made and the neutral is present. That is the rule most people half remember, and it produces a dangerous habit: orange gets read as high leg.",
        "It is not that simple. On a 480Y/277 volt system the common convention is brown, orange and yellow for the three phases, and there the orange conductor is nothing more than B phase at 277 volts to ground. That convention is industry practice rather than a Code requirement, because outside of the grounded conductor, the equipment grounding conductor and this one high leg rule, the Code does not assign colours to ungrounded conductors at all.",
        "So orange on a 240 volt four wire delta means 208 volts to ground and a hazard to anything expecting 120. Orange on a 480 volt system means an ordinary phase conductor. The colour alone does not tell you which building you are standing in. The voltage reading does.",
        "This is one reason we re identify circuits as we work rather than trusting what is on the insulation, the same argument as in [why your panel schedule does not match the building](/blog/how-to-read-a-panel-schedule).",
      ],
    },
    {
      heading: "B phase, and the 1975 change that still bites",
      body: [
        "Section 408.3(E) requires the high leg to terminate on the B phase of a panelboard or switchboard, which is the middle position. There is a narrow exception where the meter sits in the same section. The board also has to carry a permanent field marking to the effect that B phase has 208 volts to ground, and it cannot be a handwritten note.",
        "The trap is history. Before 1975 the requirement was the opposite: the high leg went on C phase. Plenty of buildings around here were wired before that change and have never been altered since. Their high leg sits on the right hand stab, exactly where a modern electrician would not expect it.",
        "Which is how the accident happens. Somebody replaces a panel interior, wires it the way the current Code reads, and every 120 volt circuit that used to be safely on A or B is now fed from a conductor at 208 volts. Mike Holt puts it plainly in [EC&M's write up of the identification rules](https://www.ecmweb.com/national-electrical-code/qa/article/20898041/stumped-by-the-code-requirements-for-identifying-the-high-leg-of-a-3-phase-4-wire-connected-system): when equipment is replaced in an existing facility, the high leg has to go back where it was.",
      ],
      callout: {
        title: "What to do before touching an unfamiliar four wire delta panel",
        lines: [
          "Measure every phase to ground before anything else. The one reading about 208 is the high leg, whatever colour it is.",
          "Write down which stab it lands on. Left, middle or right, not just a colour.",
          "Check the existing 120 volt circuits. If any of them are on the high leg, that is an immediate problem, not a later one.",
          "If the panel interior is being replaced, put the high leg back on the same stab it came off, then label the board.",
          "Where a circuit has to move, move the load, not the marking.",
        ],
      },
    },
    {
      heading: "What can and cannot be fed from it",
      body: [
        "The high leg is a perfectly good conductor. Three phase motors do not care, because a motor sees only the phase to phase voltages and those are all 240. Three phase heating, compressors, welders and machine tools are all fine. Grain equipment, ventilation fans, shop compressors and mill motors run happily on this service all over this part of Pennsylvania.",
        "What cannot be fed from it is anything expecting 120 volts to neutral. A lighting circuit, a receptacle, a control transformer primary rated 120, a well pump controller, a poultry house controller, an alarm dialer. Put any of those between the high leg and neutral and they see 208 volts. Most will fail immediately, some will fail slowly and expensively, and the failure mode is not always obvious from the outside.",
        "Two phase loads, meaning a single phase load across two conductors rather than to neutral, are a different matter. A 240 volt single phase load taken from the high leg to either other phase is fine, because that is still 240. It is the connection to neutral that is the problem.",
        "One more practical point. Single pole breakers in the high leg position are a frequent source of accidental 120 volt connections, so on many of these boards we simply leave that column for three pole devices and nothing else. If the panel is short of space and this is the reason, that is usually a sign the building has outgrown the board rather than the layout, and [the signs a panel is finished](/blog/signs-your-panel-needs-replacing) is the next thing to read.",
      ],
    },
    {
      heading: "Why anybody still has one",
      body: [
        "Four wire delta services were common where a building needed a lot of three phase power and only a little 120 volt lighting load. Farms, shops, mills and small industrial buildings fit that description exactly, which is why so many of them in Lebanon and Lancaster counties are still fed this way.",
        "Utilities rarely install them new now. The modern answer for a mixed load is a 208Y/120 volt wye service, where all three phases sit 120 volts from ground and there is no odd one out. If you are having a service replaced, this is worth raising, because a changeover removes the hazard permanently rather than labelling it. The cost side of that decision is in [what a panel replacement really costs](/blog/cost-to-replace-electrical-panel), and how the distribution is arranged afterwards is in [how distribution works in a building](/blog/electrical-distribution-in-a-building).",
        "Until then the system is safe if it is marked, labelled and respected. EC&M's summary of [the switchboard and panelboard rules](https://www.ecmweb.com/national-electrical-code/code-basics/article/20901037/switchboards-switchgear-and-panelboards) is blunt about the alternative: connecting a 120 volt circuit to the 208 volt high leg will almost certainly be disastrous.",
      ],
    },
  ],

  sources: [
    {
      label: "EC&M: Requirements for Identifying the High-Leg of a 3-Phase, 4-Wire System",
      href: "https://www.ecmweb.com/national-electrical-code/qa/article/20898041/stumped-by-the-code-requirements-for-identifying-the-high-leg-of-a-3-phase-4-wire-connected-system",
      note: "Mike Holt on 110.15, the orange marking and why the high leg must go back where it was.",
    },
    {
      label: "EC&M: Switchboards, Switchgear, and Panelboards",
      href: "https://www.ecmweb.com/national-electrical-code/code-basics/article/20901037/switchboards-switchgear-and-panelboards",
      note: "Covers 408.3(E), the B phase requirement and the field marking that has to go on the board.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
  ],

  related: ["three-phase-vs-single-phase", "electrical-distribution-in-a-building", "how-to-read-a-panel-schedule"],

  faq: [
    {
      q: "Is a high leg delta service dangerous?",
      a: "Not in itself. It is dangerous when it is unmarked or when somebody assumes every phase is 120 volts to ground. Marked, labelled and understood, it runs three phase equipment perfectly well.",
    },
    {
      q: "Can we just convert it to 208Y/120?",
      a: "That is the utility's transformer, so it is their decision and it depends on what is available at your road. It is worth asking when a service is being replaced anyway, because the changeover removes the problem instead of managing it.",
    },
    {
      q: "Our high leg is on C phase. Do we have to move it?",
      a: "Moving the conductor without moving the loads is the worst possible outcome, because every 120 volt circuit on the old B position would then be fed at 208. If the board is being replaced, the safe approach is to keep the high leg where the building expects it and label the panel accordingly.",
    },
    {
      q: "Why did a 120 volt controller fail right after we added a circuit?",
      a: "That is the classic symptom. Measure the circuit to neutral. If it reads about 208 rather than 120, the breaker went into the high leg position and the controller saw nearly twice the voltage it was built for.",
    },
    {
      q: "Does this affect motors?",
      a: "No. A three phase motor sees only the phase to phase voltages, and on this service those are all 240. If a motor is misbehaving the cause is elsewhere, and [the order to check a three phase motor in](/blog/three-phase-motor-wont-start) is the place to start.",
    },
  ],

  closing:
    "We work on four wire delta services regularly, mostly in older farm and shop buildings around Lebanon and Lancaster counties where they were the sensible choice at the time. If you have one and nobody is certain which conductor is which, measuring and labelling it properly is a short visit and it removes a genuine hazard.",

  keywords: [
    "high leg delta",
    "wild leg 208 volts",
    "four wire delta service",
    "208 volts to ground",
    "orange conductor high leg",
  ],
};

export default article;
