import type { Article } from "./types";

const article: Article = {
  slug: "voltage-drop-long-farm-runs",
  question: "The compressor in the far shed will not start on a hot day. Is the wire too small?",
  title: "Voltage drop on long farm runs: why a wire that is big enough still is not big enough",
  category: "Agricultural",
  summary:
    "Why a farm feeder sized only for amps starves a motor 800 feet away: the 3 and 5 percent notes, a worked drop calculation, and what to do while the trench is still open.",
  answer:
    "Probably, but not for the reason most people assume. A conductor can be big enough to carry the current safely and still lose so much voltage over the distance that the motor never gets what it needs to break away, and a hot day makes it worse because the compressor is starting against higher head pressure. Ampacity and voltage drop are two separate calculations, and usually only the first one gets done. Past a few hundred feet, size the conductor for the drop rather than for the breaker, and check the number at starting current instead of running current.",
  lead:
    "Long runs are normal on a farm. The shed is where the shed is, the trench goes where the trench can go, and the wire that gets pulled is whatever satisfies the breaker. A breaker only cares about heat in the conductor. The motor at the far end cares about volts, and 800 feet out there may not be enough of them left.",

  photos: [
    {
      src: "/photos/blog/voltage-drop-1.webp",
      alt: "Open trench along a farm building with conduit laid in",
      caption: "The cheapest hour to fix voltage drop is the hour before this gets backfilled.",
    },
    {
      src: "/photos/blog/ext-meter-service.webp",
      alt: "Historical illustration of an electrical service installation",
      caption:
        "An electrical service as drawn in a trade journal of 1904. The arithmetic has not changed since. Image via",
      credit: {
        author: "Internet Archive Book Images",
        href: "https://commons.wikimedia.org/wiki/File:Electrical_world_(1904)_(14598208620).jpg",
        license: "No restrictions",
      },
    },
    {
      src: "/photos/blog/voltage-drop-2.webp",
      alt: "Large feeder conductors terminated and marked with phase tape",
      caption: "Feeder conductors sized for the distance rather than for the breaker.",
    },
    {
      src: "/photos/blog/ext-emt-conduit.webp",
      alt: "Training panel showing EMT conduit bends and fittings",
      caption: "Raceway size matters as much as conductor size once a run gets long. Photo by",
      credit: {
        author: "Jcmorris2",
        href: "https://commons.wikimedia.org/wiki/File:Training_panel_for_EMT_conduit_J._Morris_CC_BY-SA-3.0.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "Two calculations, and most jobs only do one",
      body: [
        "Ampacity is a heat question. Table 310.16 says how much current a conductor can carry continuously without cooking its own insulation, and that is what the breaker and the inspector look at. A 6 AWG copper conductor in the 75 degree column is good for 65 amps, so a 28 amp compressor circuit sails through without anybody thinking twice.",
        "Voltage drop is a separate question. Copper has resistance, resistance times current is volts, and every foot of the run takes a little more. Over 40 feet the loss is invisible. Over 800 feet on that same 6 AWG it is close to a tenth of your supply voltage, and nothing in the ampacity table warns you, because the wire is not getting hot.",
        "So the wire is legal, the breaker holds, the lights in the shed work, and the motor will not start. It turns up on a good share of the [agricultural service calls](/agricultural-electrical-services) that begin with the words far building.",
      ],
    },
    {
      heading: "Three percent and five percent: what the code actually says",
      body: [
        "The NEC does not require you to design ordinary circuits around voltage drop. It suggests it. Informational notes attached to 210.19 for branch circuits and 215.2 for feeders recommend roughly 3 percent on the branch circuit and no more than 5 percent on feeder and branch combined. Those notes are advisory rather than enforceable, which is why they get skipped.",
        "They are still the right target, and the reason is margin. Five percent of 240 volts is 12 volts, leaving 228 at the load. NEMA MG-1 allows a standard motor to run within plus or minus 10 percent of nameplate, so designing to 5 percent leaves room for the utility to sit low and for the farm to add load later.",
        "[The EC&M write up of the basics](https://www.ecmweb.com/national-electrical-code/code-basics/article/20892807/dont-let-voltage-drop-get-your-system-down) says it plainly: these are performance recommendations, not safety rules. Nobody fails an inspection over a 9 percent drop. The compressor fails instead, on the hottest afternoon of the year.",
      ],
    },
    {
      heading: "Why the motor is always the first casualty",
      body: [
        "Resistive load does not complain much: a water heater element at 218 volts instead of 240 gives about 17 percent less heat, and nobody notices. A motor is different, in two ways that stack up.",
        "An across the line motor draws five to seven times its full load current at the instant of start, so whatever drop you measure while it runs is several times larger at the moment that matters. And torque falls with the square of the applied voltage: at 80 percent voltage a motor makes 64 percent of its torque, at 65 percent about 42 percent.",
        "On a mild day there is margin for that. On a hot day the compressor starts against higher head pressure, needs more breakaway torque and does not get it. It sits on locked rotor, heats up and trips the overload. It runs fine that evening when the farm is quiet, and everyone agrees the motor is getting tired.",
        "[IAEI Magazine sets out the standard method](https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/) and the constants. The figures below treat the stalled motor as a plain resistance, which is a first approximation rather than an exact model.",
      ],
      callout: {
        title: "Worked example: 5 hp compressor, 800 feet from the panel",
        lines: [
          "Load: 5 hp single phase on 240 volts. NEC Table 430.248 gives 28 amps full load, and locked rotor is about six times that, so the stalled motor looks like roughly 1.4 ohms. Run: 800 feet one way, 1600 feet of conductor.",
          "Single phase drop = 2 x K x I x L divided by circular mils, K being 12.9 for copper. Chapter 9 Table 8 gives the same answer from ohms per 1000 feet.",
          "6 AWG copper, 0.491 ohms per 1000 feet, 0.79 ohms round trip. Running: 28 x 0.79 = 22 volts lost, or 9.2 percent, on a conductor rated 65 amps and loaded to 28.",
          "6 AWG at start: the 1.4 ohm motor and the 0.79 ohm wire divide 240 volts between them. The motor keeps about 155 volts, or 65 percent, which is about 42 percent of rated starting torque. It will not break away.",
          "1/0 copper, 0.122 ohms per 1000 feet, 0.20 ohms round trip: 5.5 volts running, 2.3 percent, and about 211 volts at the motor during start. Near 77 percent of torque, so it starts.",
          "The same run in aluminum: 2/0 lands just under 3 percent, 4/0 at about 1.9 percent. That is why long farm feeders end up as 4/0 URD.",
        ],
      },
    },
    {
      heading: "The 800 foot shed with two coops in between",
      body: [
        "The question shows up on the trade forums almost word for word: how do I feed a shed 800 feet out when there are two poultry houses and a hog barn along the way. The answer changes the conductor size for every building on the place.",
        "Chaining them looks cheaper: one trench, one set of conductors, tap off at each building. But the first section then carries everything, so it has to be sized for the whole farm, and the shed at the end sits at the bottom of a stack of drops. Run the ventilation in both houses on a July afternoon and the shed lives on what is left.",
        "What works is a distribution point near the electrical center of the load, with a separate feeder to each building sized for its own load over its own distance. For livestock housing that is what the code expects anyway, and we go through it in [the piece on farm distribution points](/blog/farm-distribution-point). In one pass it is a single trench day instead of three, which is the argument for [running the yard feeders together](/projects/underground-feeders-farm-yard).",
      ],
    },
    {
      heading: "Single phase or three phase over distance",
      body: [
        "If three phase is available at the road, distance is a much smaller problem, and it is worth knowing why.",
        "For the same load in kilowatts, a three phase circuit carries about 58 percent of the current a single phase circuit carries, and the drop formula uses a multiplier of 1.732 instead of 2. Multiply those together and the drop comes out at half the single phase figure on the same conductor. The 6 AWG run above would sit near 4.5 percent instead of 9.2 percent for the same load.",
        "Plenty of farms in Lebanon and Berks counties have no three phase at the pole, and bringing it in is a utility conversation with a number attached. The alternatives are a rotary converter for a shop full of machines or a drive for one machine, which we set out in [three phase against single phase](/blog/three-phase-vs-single-phase).",
      ],
    },
    {
      heading: "Going up a size while the trench is open",
      body: [
        "Conductor is a small fraction of the cost of a long run. The trench, the machine and operator, the restoration and the bore under the lane are the money, and all of it gets paid twice if the wire turns out too small in three years, with a crop standing in the way the second time.",
        "Going from 2 AWG aluminum to 4/0 on that 800 foot run roughly triples the metal in the ground and takes the drop from about 6 percent to under 2. Set against the cost of opening the ground twice, it is one of the few places on a farm job where spending more is plainly cheaper.",
        "Farms also grow. The shed with a compressor in it today has a welder, a cooler or a grain leg in it five years from now. Sizing feeder and raceway for what a building will be asked to do is why a [load study before the drawings](/projects/load-study-and-drawings) pays for itself.",
      ],
      bullets: [
        "Size for voltage drop first, then confirm the conductor also clears ampacity. On a long run it always does.",
        "Wherever there is a motor, check the drop at starting current and not only at running current.",
        "Upsize the raceway beyond what the conductors need. Pulling a bigger cable later is cheap. Digging is not.",
      ],
    },
  ],

  faq: [
    {
      q: "How far is too far before I run the numbers?",
      a: "Past about 100 feet at a real load it is worth checking, and past 300 feet it needs checking. Current and distance work together: a small lighting circuit at 400 feet can be fine while a 30 amp motor circuit at 150 feet is not.",
    },
    {
      q: "Can I just fit a larger breaker?",
      a: "No, and it makes matters worse. A breaker protects the conductor from overheating, so a larger one on the same wire removes protection without adding a volt at the far end. Only conductor size, current and length change the drop.",
    },
    {
      q: "Would a buck boost transformer fix it?",
      a: "It helps a load that simply sits low all the time, because it lifts the whole supply. It does much less for a starting problem, since the sag is proportional to starting current. If the complaint is starting rather than running, the conductor is the answer.",
    },
    {
      q: "Is aluminum acceptable for a farm feeder?",
      a: "Yes, and direct burial aluminum is the normal choice for long yard runs on price alone. What matters is the terminations: correctly rated lugs, antioxidant compound, and torque to the printed value. Aluminum fails at connections far more often than mid run.",
    },
    {
      q: "The lights in the shed work fine. Is the wire big enough?",
      a: "No. Lighting draws almost nothing and tolerates a poor supply without visible complaint, so it proves only that the circuit is connected. The test is what the voltage does at the equipment while the biggest motor on the feeder starts.",
    },
  ],

  sources: [
    {
      label: "EC&M: Don't Let Voltage Drop Get Your System Down",
      href: "https://www.ecmweb.com/national-electrical-code/code-basics/article/20892807/dont-let-voltage-drop-get-your-system-down",
      note: "The 3 and 5 percent recommendations, the formulas, and why they are advisory rather than mandatory.",
    },
    {
      label: "IAEI Magazine: Voltage Drop Calculations",
      href: "https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/",
      note: "Worked calculations from the inspectors' association, including the K constants for copper and aluminum.",
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
  ],

  related: ["farm-distribution-point", "three-phase-vs-single-phase", "nec-547-agricultural-wiring"],

  closing:
    "Long underground feeders, farm distribution points and motor circuits that have to start reliably in July are ordinary weekly work for us across Lebanon, Lancaster and Berks counties. If a building at the end of a long run is giving trouble, the useful first step is a measurement taken at the equipment while the biggest motor on it is starting, not a guess back at the panel.",

  keywords: [
    "voltage drop calculation",
    "long run voltage drop",
    "farm electrical",
    "three phase",
    "agricultural electrician",
  ],
};

export default article;
