import type { Service } from "./types";

const service: Service = {
  slug: "low-voltage-structured-wiring",
  kind: "service",
  title: "Low Voltage & Structured Wiring | Data, Cameras, Controls | Lancaster & Lebanon County PA",
  h1: "Low voltage wiring for data, controls and monitoring",
  summary:
    "Structured cabling, camera and access control wiring, and controls cabling for plants, offices and farms across Lebanon, Lancaster and Berks counties in Pennsylvania.",
  lead:
    "Low voltage is the layer of a building that nobody owns. The network vendor did the switches, the camera company did the cameras, the controls supplier did the controller, and the cable between all of it was run by whoever was closest to a ladder. That is why it works on day one and misbehaves for years afterwards. We treat the cabling as its own installation with its own rules.",

  hero: {
    src: "/photos/services/low-voltage-structured-wiring.webp",
    alt: "Comms room with patch panels and network cabling",
  },

  sections: [
    {
      heading: "Structured is a layout, not a cable type",
      body: [
        "Structured means every outlet in the building runs back to one place, and only that place. No daisy chains, no couplers hidden above a ceiling tile, no switch sitting on a shelf in a closet because the run was too long. Each drop is a permanent link from a patch panel to an outlet, and everything after that is a patch cord you can replace in a minute.",
        "The industry standard that governs it, TIA-568, sets the limit that shapes the whole design: 90 metres of solid cable in the wall plus up to 10 metres of patch cords, 100 metres end to end. That single number decides where the rack goes, and the rack position decides the cost of the job. Getting it wrong means a second closet nobody budgeted for. The comms room in [our structured cabling job](/projects/comms-room-structured-cabling) was placed for exactly that reason.",
      ],
    },
    {
      heading: "It fails differently from power",
      body: [
        "Power fails loudly. A breaker trips, a motor stops, someone calls. Low voltage fails quietly and intermittently, which is worse, because the symptom appears somewhere far from the cause and the cable is the last thing anyone suspects.",
        "The pattern is familiar. Cameras that drop only at night, when a bad termination cools and contracts. A controller that loses its sensor on hot afternoons. A network port that renegotiates to 100 megabit and stays there, quietly halving throughput while everybody blames the software. An alarm that never comes because the pair feeding it was nicked by a staple two years earlier.",
        "None of these show up on a toner. They show up on a certification test, which is why we test every link and hand over the results rather than saying it works.",
      ],
    },
    {
      heading: "The physical rules that get broken",
      body: [
        "Almost every fault we chase in existing cabling comes from one of a short list of installation mistakes. They are all avoidable and they all happen during the pull, which is the one part of the job nobody watches.",
      ],
      bullets: [
        "Bend radius. Four times the cable diameter for four pair cable, and a sharp bend behind a patch panel undoes everything else",
        "Pull tension. Around 25 pounds for a four pair cable, and a hard yank stretches the twists out permanently",
        "Cable ties cinched tight. Hook and loop wrap, snug but not deforming the jacket",
        "Untwisting at the jack. Half an inch at most on Cat 6, which is a limit most installers exceed without noticing",
        "Separation from power. Article 725 keeps class 2 circuits out of raceways and boxes with power conductors unless a barrier separates them",
        "Independent support. Article 300.11 means the cable cannot ride on the ceiling grid wires, the sprinkler pipe or the conduit it happens to run beside",
      ],
    },
    {
      heading: "What rides on this cabling now",
      body: [
        "It is no longer just computers. Cameras, door controllers and card readers, wireless access points, intercoms, building controls, scales and the network side of drives all live on the same kind of cable, and increasingly on the same pathway. Signal wiring for process instruments belongs in the same discipline, as in [the instrument rack job](/projects/instrument-racks-process-wiring). Chargers are on it too, since a commercial charger needs a network drop to bill anything, as in [the commercial EV charging site](/projects/ev-charging-commercial-site).",
        "On a farm the stakes are higher than on an office floor. A poultry controller reads its temperature probes over low voltage cable, decides what the fans do, and calls the alarm dialer over another pair. If either run fails the building does not stop, which is the problem. It keeps running on the wrong information. We keep that cable in conduit, away from drive output, and terminated where ammonia cannot reach it, for the same reasons set out in [choosing a wiring method for agricultural buildings](/blog/barn-wiring-methods) and in [the poultry house ventilation and power job](/projects/poultry-house-ventilation-power).",
      ],
    },
    {
      heading: "Power over Ethernet heats the bundle",
      body: [
        "PoE changed what this cable does. The original standard delivered 15.4 watts at the source, the next 30, and the current one up to 90 watts. That power is carried by the same thin conductors that carry the data, and the losses turn into heat.",
        "One cable is fine. A bundle of a hundred cables in the middle of a tray is not, because the cables in the centre cannot shed heat and the whole bundle rises in temperature. Warm cable has higher insertion loss, so the link that certified at 20 degrees can fail at 45. Article 725 has tables limiting current per conductor by bundle size for exactly this reason.",
        "The fix is not exotic. Smaller bundles, 23 AWG rather than 24, Cat 6A where the PoE load is high, and pathways sized for what will hang off them in five years rather than what is being installed today.",
      ],
    },
  ],

  scope: [
    {
      group: "Structured cabling",
      note: "Every outlet back to one place, and nowhere else.",
      items: [
        "Cat 6 and Cat 6A horizontal cabling",
        "Fibre backbone between buildings and floors",
        "Patch panels, racks and cabinet installation",
        "Rack build out, cable management and elevations",
        "Certification testing of every link",
        "Labelling schemes matched to the patch panel",
        "Moves, adds and changes to existing cabling",
        "Documentation and drop lists handed over",
      ],
    },
    {
      group: "Pathways and containment",
      note: "The part that decides how the next ten years go.",
      items: [
        "Conduit, sleeves and stub ups for cabling",
        "Cable tray and basket installation",
        "J hook systems at proper spacing",
        "Listed firestop through rated walls and floors",
        "Independent support under Article 300.11",
        "Separation from power under Article 725",
        "Underground and building to building runs",
        "Pathway sizing for what will be added later",
      ],
    },
    {
      group: "Cameras and access",
      note: "Everything that watches a door or a yard.",
      items: [
        "IP camera cabling and mounting",
        "PoE injector, switch and midspan power",
        "Yard, gate and perimeter camera runs",
        "Door controllers, readers and strikes",
        "Intercom and entry station wiring",
        "Gate operator power and control cabling",
        "NVR and recorder rack provision",
        "Weatherproof terminations outdoors",
      ],
    },
    {
      group: "Controls and sensors",
      note: "The wiring a building makes decisions from.",
      items: [
        "Poultry and livestock controller sensor wiring",
        "Temperature, humidity and static pressure probes",
        "Level, moisture and flow sensor runs",
        "Alarm dialer and autodialer circuits",
        "Thermostat, damper and actuator cabling",
        "Process instrument and loop wiring",
        "Shielding and single point grounding",
        "Signal runs kept clear of drive output cable",
      ],
    },
    {
      group: "Wireless, audio and the rest",
      note: "Everything else that now rides on the same cable.",
      items: [
        "Wireless access point drops and mounting",
        "Point to point wireless links between buildings",
        "Paging, intercom and bell systems",
        "Background music and speaker wiring",
        "Display, signage and menu board drops",
        "Time clock and scale connections",
        "Network drops for EV chargers and equipment",
        "Guest and segregated network cabling",
      ],
    },
    {
      group: "Fault finding and repair",
      note: "Where most of this work actually starts.",
      items: [
        "Certification testing of existing links",
        "Intermittent and marginal link diagnosis",
        "Re termination of failed jacks and panels",
        "Tracing and labelling undocumented cabling",
        "Removal of daisy chains and hidden couplers",
        "PoE bundle heat and loading review",
        "Damage repair from staples, rodents and digging",
        "Tidy up and rebuild of overcrowded racks",
      ],
    },
  ],

  facilities: [
    "Comms rooms, racks and IDF closets",
    "Offices, retail and showroom fit outs",
    "Warehouses and distribution buildings",
    "Manufacturing floors and plant networks",
    "Poultry and dairy control rooms",
    "Yards, gates and perimeters with cameras",
    "Grain sites with remote sensors and alarms",
  ],

  audience: [
    {
      title: "Farms whose controller is only as good as its probes",
      body:
        "A house controller reads temperature over low voltage cable and decides what the fans do. If that run fails the building does not stop, which is the problem. It keeps running confidently on wrong information.",
    },
    {
      title: "Businesses fitting out a new space",
      body:
        "The cheapest moment to do this properly is while the walls are open, which is why it belongs in the same conversation as [the rest of the fit out](/commercial-electrical-services). Deciding where the rack lives against the 90 metre limit, before the studs go up, is worth more than any other decision on the job.",
    },
    {
      title: "Anyone chasing a fault that only happens sometimes",
      body:
        "Cameras that drop at night, a port that quietly renegotiated to 100 megabit, a sensor that misbehaves on hot afternoons. None of these show on a toner, and all of them show on a certification test.",
    },
    {
      title: "Plants putting equipment on the network",
      body:
        "Drives, scales, instruments and panels that now expect a drop. That cable has to stay out of the raceway carrying drive output, which is a rule broken constantly and blamed on the software afterwards.",
    },
    {
      title: "Owners adding cameras to a yard",
      body:
        "Long outdoor runs, PoE budgets, weatherproof terminations and surge exposure. Very different from an office drop, and the failures are all in the parts that sit outside.",
    },
    {
      title: "IT providers who need a tested plant",
      body:
        "We install and certify the cabling and hand over documented ports and results. The boundary between us is usually clean, and where it is not we would rather agree it before the work than after.",
    },
  ],

  process: {
    title: "How a cabling job runs",
    lines: [
      "Agree where the rack lives, measured against the 90 metre limit rather than guessed.",
      "Count the drops per location and add the spares now, because a second visit costs more than a second cable.",
      "Pathway first: conduit, tray or J hooks at proper spacing, with sleeves and listed firestop through rated walls.",
      "Pull, terminate and label both ends to a scheme that matches the patch panel.",
      "Certify every link with a tester that measures wire map, length, insertion loss and crosstalk.",
      "Hand over the test results as a file, with a rack elevation and a drop list.",
    ],
  },

  whyUs: [
    {
      title: "Every link is certified, not just toned out",
      body:
        "A tester that measures wire map, length, insertion loss and crosstalk, with the results handed over as a file. Saying it works is not the same as showing that it meets the standard it was sold as.",
    },
    {
      title: "The rack position is calculated, not guessed",
      body:
        "Ninety metres of solid cable plus patch cords, one hundred end to end. That number decides where the room goes, and getting it wrong means a second closet nobody budgeted for.",
    },
    {
      title: "We treat the pull as the critical part",
      body:
        "Bend radius, pull tension, hook and loop instead of cinched ties, half an inch of untwist at most. All of the faults we later chase were created during the pull, which is the one part of the job nobody watches.",
    },
    {
      title: "Separation from power is not optional here",
      body:
        "Article 725 keeps class 2 circuits out of raceways and boxes shared with power conductors, and Article 300.11 means the cable does not ride on grid wires or sprinkler pipe. Both get ignored constantly and both cause years of quiet trouble.",
    },
    {
      title: "We plan pathways for PoE loads that grow",
      body:
        "Modern PoE puts real power through thin conductors, and the bundle in the middle of a tray cannot shed heat. Smaller bundles and pathways sized for five years out is the cheap version of a problem that is expensive later.",
    },
    {
      title: "The same people do your power",
      body:
        "Which means nobody is arguing about whose cable is in whose tray, and the controller wiring is installed by the same people who did [the panel feeding it](/electrical-service-upgrades).",
    },
  ],

  faq: [
    {
      q: "Cat 6 or Cat 6A?",
      a: "Cat 6A if the run carries high wattage PoE, if you want 10 gigabit to 100 metres, or if the cable is going somewhere you will not open again for fifteen years. Cat 6 is honest value for a short office run. The cost difference is mostly labour, which is why the decision is worth five minutes up front.",
    },
    {
      q: "Can data share a tray with power?",
      a: "Not in the same raceway or box without a barrier, under Article 725. In a shared tray a divider and separation is the usual answer. Running data alongside a VFD output is the worst version of this, and why it matters is in [chasing a ground fault trip on a VFD](/blog/vfd-ground-fault-troubleshooting).",
    },
    {
      q: "Our cameras only drop out at night.",
      a: "That points at a termination or a marginal link rather than at the cameras. A certification test on those runs usually finds it in an hour, and the fix is normally one jack.",
    },
    {
      q: "Do you run this in barns and poultry houses?",
      a: "Yes, and it is a large part of the work. The wiring method has to suit the building, which Article 547 governs and which we cover in [what the code requires in a barn](/blog/nec-547-agricultural-wiring).",
    },
    {
      q: "Can you work with our IT provider or integrator?",
      a: "Yes. We install and certify the cabling and hand them a tested plant with documented ports. The split is usually clean, and where it is not we would rather agree the boundary before the work than after.",
    },
    {
      q: "Can you label and document cabling somebody else installed?",
      a: "Yes, and it is worth doing once. Tracing an undocumented plant, testing what is there, labelling both ends and handing over a drop list turns every future fault from an afternoon of guessing into a five minute job.",
    },
    {
      q: "How many drops should we put in each location?",
      a: "More than you need today, because the second visit costs more than the second cable. The cable is a small part of the price and the labour is most of it, so pulling a spare at the same time is close to free.",
    },
  ],

  related: {
    projects: [
      "comms-room-structured-cabling",
      "poultry-house-ventilation-power",
      "instrument-racks-process-wiring",
      "ev-charging-commercial-site",
      "office-remodel-power-lighting",
      "retail-fit-out-wiring",
      "grain-system-power-controls",
      "machine-connection-motor-control",
    ],
    articles: [
      "electrical-distribution-in-a-building",
      "nec-547-agricultural-wiring",
      "barn-wiring-methods",
      "vfd-ground-fault-troubleshooting",
      "what-is-a-vfd",
    ],
  },

  seeAlso: [
    "commercial-electrical-services",
    "control-panels-machine-wiring",
    "industrial-electrical-services",
    "agricultural-electrical-services",
    "ev-charging-installation",
  ],

  keywords: [
    "low voltage wiring installation",
    "structured cabling",
    "low voltage electrician",
    "low voltage wiring",
    "network cabling",
    "controls wiring",
  ],
};

export default service;
