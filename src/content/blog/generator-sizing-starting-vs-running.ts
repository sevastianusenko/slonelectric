import type { Article } from "./types";

const article: Article = {
  slug: "generator-sizing-starting-vs-running",
  question: "The generator is rated well above our load, so why does it stall when the compressor starts?",
  title: "Starting load against running load: why a generator that looks big enough still stalls",
  category: "Standby power",
  summary:
    "Why generators stall on motor starting: the four to one rule, the loads that restart together after an outage, and a worked sizing example for a ventilated farm building.",
  answer:
    "Because a motor draws far more power to start than it does to run, and the generator has to supply the larger figure. The commonly published rule of thumb is that an electric motor needs roughly four times its running power to start, so a 5 hp compressor drawing about 5 kW while running wants something near 20 kW for the second or two it takes to reach speed. A set sized to the running total has no margin for that, so voltage and frequency sag, the motor cannot develop torque, and the set stalls or trips. The design case is almost never the running load. It is the largest starting step, and where several motors restart together that step can be three times the running total.",
  lead:
    "The nameplate says more kilowatts than the building draws, the meter agrees, and yet the moment the compressor or the fan bank comes on the lights dip and the set drops out. Nothing is faulty. The set was sized against the wrong number.",

  photos: [
    {
      src: "/photos/blog/gen-sizing-1.webp",
      alt: "Long agricultural building with ventilation fans and interior lighting",
      caption: "A ventilated building is not one load. It is a dozen motors that all want to start in the same ten seconds.",
    },
    {
      src: "/photos/blog/ext-motor.webp",
      alt: "Industrial electric motor coupled to driven equipment",
      caption: "The number on a motor nameplate is the running figure. Starting is a separate question. Photo by",
      credit: {
        author: "LJamesCPH",
        href: "https://commons.wikimedia.org/wiki/File:Industrial_Electric_Motor_and_Drive_Mechanism.jpg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/blog/gen-sizing-2.webp",
      alt: "Industrial drive and shaft equipment in a plant",
      caption: "A drive or a soft starter turns the worst step into a gentle one, and it is cheaper than a bigger set.",
    },
    {
      src: "/photos/blog/ext-generator.webp",
      alt: "Enclosed standby generator set",
      caption: "The engine is usually not the limit. The alternator and the voltage regulator are. Photo by",
      credit: {
        author: "Gregsedits",
        href: "https://commons.wikimedia.org/wiki/File:Caterpillar_(Olympian)_Generator_Set.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "Two numbers, not one",
      body: [
        "Every motor has two power figures attached to it. The running figure is what it draws once it is turning at speed with its normal load on, and that is the number on the nameplate. The starting figure is what it pulls in the first fraction of a second, with the rotor still. That is locked rotor current, and on an ordinary induction motor it is six to eight times full load current.",
        "On a utility supply nobody notices, because the transformer on the pole has enormous short term capacity relative to one motor. A generator has none of that. Its short term capacity is set by how much current the alternator can push before the voltage collapses, and by how fast the governor recovers engine speed when load lands on it.",
        "Two things sag during a start, voltage and frequency, and both hurt, because motor torque falls roughly with the square of voltage. A motor starting at eighty percent voltage develops around sixty four percent of its normal starting torque, which on a loaded compressor or an auger full of feed may not be enough to break away. It then sits drawing locked rotor current until something trips.",
      ],
    },
    {
      heading: "Where the four to one figure comes from",
      body: [
        "The rule of thumb most sizing starts from is that a motor needs about four times its running power to start. [NDSU puts numbers on it](https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators) in its guidance on standby generators for farms: approximately 4,000 watts to start and 1,000 watts to run for every horsepower of output. It is a coarse figure and meant to be, but it gets you within range quickly, and it is better than the number people otherwise use, which is zero.",
        "Where more precision is needed, the motor nameplate carries a NEMA code letter that maps to a locked rotor kVA per horsepower band, and sizing software takes that plus the starting method and the acceptable voltage dip. Most sets are specified to hold the dip inside fifteen percent, and that limit, not the engine, usually sets the size.",
        "Two load types break the rule in opposite directions. Loaded reciprocating compressors and augers that start under feed need more than four times and take longer to reach speed. Drives and soft starters need far less, sometimes barely above their running figure. A list that treats everything as four times is safe but expensive.",
      ],
    },
    {
      heading: "The real design case is what starts at the same moment",
      body: [
        "Sizing for the largest single motor is the textbook answer, and on many commercial buildings it is right, because HVAC and pumps are staggered by their own controls and rarely coincide. On a farm it is the wrong answer, and the reason is what happens at the end of an outage.",
        "Picture a poultry house when the power fails. Every fan controller drops out, the augers stop, the water pump stops. The generator starts and transfers, and all of those loads call at once, because each controller wakes with its thermostat still demanding and nothing tells it to wait its turn. It is every motor on the building starting together, which on a bank of ten fans is three or four times the running total.",
        "It is also the worst moment to stall. Ventilation is what standby power exists for on a poultry or swine building, house temperature climbs fast once air movement stops, and a set that trips on overload and waits for somebody to reset it has failed in the only two minutes that mattered. The [poultry house ventilation power project](/projects/poultry-house-ventilation-power) is the shape of that work: restart behaviour is the design problem, not the kilowatt total.",
      ],
    },
    {
      heading: "A worked example",
      body: [
        "The arithmetic below uses the coarse four to one figure throughout, because that is what you can do standing in a building with a clipboard. The same building gives three different answers depending on which question you ask.",
      ],
      callout: {
        title: "Sizing a set for a ventilated poultry house",
        lines: [
          "Ten tunnel fans, 1 hp each. Running about 10 kW in total, starting about 4 kW each.",
          "Well pump, 3 hp. Running about 3 kW, starting about 12 kW.",
          "Two feed augers, 2 hp each. Running about 4 kW in total, starting about 8 kW each.",
          "Lighting, controls and electronic loads, about 6 kW running, with no starting surge worth counting.",
          "Running load with everything on: 23 kW. Size on that alone and you buy a 25 kW set that will never start the house.",
          "Largest motor starting into a running house: 20 kW of other load still running plus 12 kW for the pump, so a 32 kW step.",
          "Everything restarting together after an outage, which is what actually happens: 40 kW of fan starting plus 12 kW pump plus 16 kW augers plus 6 kW lighting, so 74 kW, pointing at an 80 kW set.",
          "The same house with a sequencer bringing the fans on in groups of three at ten second intervals: the worst step becomes the pump starting against roughly 20 kW already running, so 32 kW. A 40 kW set covers it.",
          "The sequencer costs a fraction of the difference between a 40 kW and an 80 kW set, and it leaves the smaller set at about 58 percent of nameplate rather than 29 percent, a far healthier place for a diesel.",
        ],
      },
    },
    {
      heading: "Sequencing, soft starters and drives",
      body: [
        "There are only two ways to close the gap between a 74 kW starting demand and a 40 kW machine. Buy the bigger machine, or stop the loads starting together. The second is almost always cheaper.",
        "Step loading is the simplest version. A sequencing relay or the generator controller brings loads on in blocks with a delay between them, so the set sees a series of modest steps instead of one enormous one. Ten seconds between groups is plenty, since a small motor is up to speed in a second or two. On most sites the sequence is written into the control panel rather than bought as a product, which is ordinary [control panel and machine wiring work](/control-panels-machine-wiring).",
        "Soft starters and variable frequency drives attack the same problem from the motor end, ramping voltage or frequency so the motor never draws locked rotor current at all. A drive on a fan bank brings the starting demand down close to the running figure and gives speed control as a side effect. The trade is cost, panel space, harmonics and another item to maintain, discussed further in [what a VFD actually does](/blog/what-is-a-vfd).",
      ],
      bullets: [
        "Sequence the loads so the set sees several small steps instead of one big one",
        "Start the largest motor first, while the set is otherwise unloaded",
        "Soft start or drive the worst offenders rather than sizing the whole set around them",
        "Check the controls restart in a sensible order after an outage, not all at once",
      ],
    },
    {
      heading: "Why sizing from the service size is the expensive answer",
      body: [
        "The shortcut everybody reaches for is the amp rating of the service. It is written on the panel and it produces a number without any work. It also produces a set often twice the size it needs to be, because a service is sized for future growth, for diversity across a site, and for margins that have nothing to do with what must run during an outage.",
        "The code does not ask for the service size either. NEC 702.5 requires an optional standby source to have adequate capacity and rating for the load it is intended to carry, with that load determined by an Article 220 calculation or other approved means. IAEI's review of [transfer equipment used in optional standby systems](https://iaeimagazine.org/2009/july2009/transfer-equipment-used-in-optional-standby-systems-for-commercial-applications-part-ii-transfer-equipment-options/) traces how the requirement was clarified, and the practical effect is that the load you choose to carry is the load you size for.",
        "Oversizing is not harmless. It costs at purchase, in the pad, the fuel system and the conductors, and afterwards because a diesel that never sees thirty percent of nameplate accumulates unburned residue every time it exercises. On long sites there is a third cost: a set at the end of a long run must deliver starting current through that run, and the drop during the start adds to the generator's own dip, which is the subject of [voltage drop on long farm runs](/blog/voltage-drop-long-farm-runs). The honest sequence is a load list, a decision about what runs, a starting analysis, then a model number, which is how a [standby generator installation](/standby-generator-installation) gets specified.",
      ],
    },
  ],

  faq: [
    {
      q: "Can I just add up the nameplate watts and add twenty percent?",
      a: "Only if nothing on the list has a motor in it. Adding a percentage works for heating, lighting and electronics, where starting demand is negligible. With motors, the starting figure is not a percentage of the running figure, it is a multiple of it, and twenty percent will not cover a single 3 hp pump.",
    },
    {
      q: "Does the kW rating or the kVA rating matter for starting?",
      a: "For starting, kVA. The surge is mostly reactive current at a poor power factor, so it loads the alternator and the voltage regulator rather than the engine. That is why sets often run out of alternator before they run out of engine, and why sizing software asks for the acceptable voltage dip rather than just the kilowatts.",
    },
    {
      q: "Our set handles everything when we test it. Why would an outage be different?",
      a: "Because a test usually starts from a building that is already running and simply transfers it. A real outage starts from a building that has stopped, where every control has dropped out and every motor restarts at once. That is a much larger step, and it is why a set can pass every monthly exercise and still fail the night it is needed.",
    },
    {
      q: "Will a soft starter let me buy a smaller generator?",
      a: "Usually yes, and it is generally better value. A soft starter or drive on the worst one or two loads can cut the peak starting step enough to drop a whole size band off the set, and the saving on the generator, pad, fuel system and feeders is normally larger than the cost of the starters. Confirm it against the actual load list.",
    },
    {
      q: "What size generator does a poultry house need?",
      a: "There is no per house figure worth quoting. It depends on the fan count, the horsepower of each, whether a well pump sits on the same set, and whether the loads restart together or in sequence. Two houses of the same length can be a size band apart.",
    },
  ],

  sources: [
    {
      label: "NDSU: Standby Electric Generators",
      href: "https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators",
      note: "The four to one starting figure, and the working numbers of 4,000 watts to start and 1,000 watts to run per horsepower.",
    },
    {
      label: "IAEI Magazine: Transfer Equipment Used in Optional Standby Systems, Part II",
      href: "https://iaeimagazine.org/2009/july2009/transfer-equipment-used-in-optional-standby-systems-for-commercial-applications-part-ii-transfer-equipment-options/",
      note: "Transfer equipment options and the NEC 702.5 requirement that the source be rated for the load it is intended to carry.",
    },
  ],

  services: [
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
  ],

  related: ["standby-generator-cost", "transfer-switch-types", "generator-maintenance-schedule"],

  closing:
    "We size standby sets from a load list and a starting analysis rather than from the amp rating on the panel, and on farm work that means looking hard at how the ventilation restarts. If a set you already own drops out when the fans come on, the fix is often a sequencer and a control change rather than a bigger machine.",

  keywords: [
    "generator sizing",
    "starting watts running watts",
    "standby generator installation",
    "farm generator",
    "motor starting current",
  ],
};

export default article;
