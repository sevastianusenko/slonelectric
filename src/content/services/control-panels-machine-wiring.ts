import type { Service } from "./types";

const service: Service = {
  slug: "control-panels-machine-wiring",
  kind: "service",
  title: "Industrial Control Panels & Machine Wiring | PLC & VFD | Lancaster & Lebanon County PA",
  h1: "Control panels and machine wiring",
  summary:
    "Control panel building, machine wiring, motor control, PLC and VFD work for plants and farms across Lebanon, Lancaster and Berks counties in Pennsylvania.",
  lead:
    "A control panel is the part of a plant that gets opened at two in the morning by somebody who did not build it. That one fact should decide how it is laid out, wired and labelled. Most of what makes a panel good is invisible while it runs and obvious the first time it stops.",

  hero: {
    src: "/photos/services/control-panels-machine-wiring.webp",
    alt: "Custom control panel built and wired by Slon Electric",
  },

  sections: [
    {
      heading: "Building and wiring the panel",
      body: [
        "Layout comes first. Power on one side, control on the other, heat producing parts where the heat can leave, wire duct sized so the cover still closes after the second revision. Terminal groups get a spare block or two, because there is always a later addition and nobody wants it on a doubled up terminal.",
        "Article 409 of the National Electrical Code governs industrial control panels, and the forgotten requirement is the marking: the panel carries a short circuit current rating, and that rating has to be at least the available fault current where it is installed. A panel rated 5 kA fed from a 500 kVA transformer is not a problem you can label your way out of, so we establish fault current before the panel is designed.",
        "NFPA 79 covers the electrical side of industrial machinery, and its wire colours are worth following even where nobody is checking: black for ungrounded power, red for AC control, blue for DC control, orange for circuits that stay live when the machine disconnect is off. That last colour has saved more people than any warning label.",
        "Where a listed assembly is required rather than field wiring, that panel has to come from a shop carrying the listing. We say so when that is the case instead of quietly working around it, and we do the field side, the connection and the commissioning around whatever is supplied.",
      ],
    },
    {
      heading: "Motor control and what Article 430 asks for",
      body: [
        "What trips people up in motor circuits is that overload protection and short circuit protection are two different jobs done by two different devices. Article 430 separates them deliberately. The overload element is sized from motor nameplate full load amps, usually at 115 or 125 percent depending on service factor, and it protects the winding over minutes. The branch circuit device is sized far higher because it has to let the motor start, and it clears a fault in milliseconds.",
        "Confuse the two and you get either a motor that cooks quietly or a circuit that cannot start. Article 430 also wants a disconnect in sight of the motor and the driven machinery, a rule usually broken by whoever moved the machine and left the disconnect behind a wall. When one will not start, the order of the checks matters more than the meter, and that order is in [why a three phase motor will not start](/blog/three-phase-motor-wont-start).",
      ],
    },
    {
      heading: "Drives want cable and grounding a starter never did",
      body: [
        "A variable frequency drive does not put out a sine wave. It puts out a train of pulses, typically switching between 2 and 12 kHz with very fast rise times, and everything difficult about drives follows from that. On a 480 volt system with long motor leads the pulse reflects at the motor terminals and can nearly double the voltage there, which is what kills winding insulation on drives installed like starters.",
        "So the drive output gets shielded VFD cable with symmetrical ground conductors, bonded 360 degrees at both ends rather than pigtailed. Control and signal wiring stays out of that raceway. Where leads are long, a load reactor or a dv/dt filter goes in. Where the motor is large, a shaft grounding ring keeps those currents from pitting the bearings.",
        "The same physics is why a clamp meter on a drive output reads nonsense, and why drives nuisance trip on ground fault as capacitive current through the cable shield rises. That is a common call, and the diagnosis is in [chasing a ground fault trip on a VFD](/blog/vfd-ground-fault-troubleshooting). For a drive running three phase equipment from a single phase service the limits are real, and they are in [running a VFD from single phase input](/blog/vfd-single-phase-input). For when a drive is the wrong tool, start with [what a VFD actually does](/blog/what-is-a-vfd).",
      ],
    },
    {
      heading: "What the machine builder's manual leaves out",
      body: [
        "Equipment arrives with a manual that describes the machine and stops at the terminal block. What it rarely tells you is the fault current the panel has to handle, the lug size the incoming conductors land on, whether the control transformer taps are set for 480 or 400 volts, what happens on a phase loss, or whether the drawing in the box matches the machine that shipped.",
        "Imported machinery adds more: 50 hertz ratings, a different colour code, control voltages that assume a supply nobody here has. Sorting that out on site is most of the work of connecting a machine, and it is what a quote written from the manual misses. Two examples are [connecting a machine to motor control](/projects/machine-connection-motor-control) and [powering equipment in a food plant](/projects/food-plant-equipment-power).",
      ],
    },
    {
      heading: "Safety circuits and labels that survive you",
      body: [
        "An e stop string is not an ordinary control circuit and should not be wired like one. NFPA 79 describes stop categories, and the difference matters: a category 0 stop removes power immediately, a category 1 brings the machine to a controlled stop first. Which one a machine needs depends on what it does when power disappears, since some are more dangerous stopped instantly.",
        "Either way the safety function belongs in a safety relay or a safety rated controller with monitored dual channel contacts, not in a rung of ordinary PLC logic that a program change can quietly break. Guard switches, light curtains and pull cords end at the same place.",
        "Then the labelling. Every conductor numbered at both ends, every device tagged to match the drawing, a schematic in the door pocket and a true schedule in the panel that feeds it. The reason is the one behind [keeping a panel schedule true](/blog/how-to-read-a-panel-schedule): the person troubleshooting at 2am may not be us. The same goes for instrument work, as in [the instrument rack job](/projects/instrument-racks-process-wiring).",
      ],
    },
  ],

  scope: [
    {
      group: "Control panels",
      note: "Built from a drawing, on the bench or in place.",
      items: [
        "New control panel assembly and wiring",
        "Panel rebuilds where nothing matches the drawing",
        "Enclosure selection and environmental rating",
        "Layout, wire duct and terminal planning",
        "Short circuit current rating under Article 409",
        "Control transformers and tap settings",
        "Panel modifications and added circuits",
        "Relocation of existing panels",
      ],
    },
    {
      group: "Motor control",
      note: "Everything that starts, stops and protects a motor.",
      items: [
        "Across the line and combination starters",
        "Motor control centre buckets and rebuilds",
        "Overload sizing to nameplate and service factor",
        "Branch circuit protection sized under Article 430",
        "Disconnects in sight of the motor and machinery",
        "Reversing, two speed and part winding starting",
        "Contactor, relay and pilot device replacement",
        "Motor troubleshooting and rotation checks",
      ],
    },
    {
      group: "Drives and soft starters",
      note: "Where a pulse train replaces a sine wave.",
      items: [
        "Variable frequency drive installation and replacement",
        "Drive parameter setup and commissioning",
        "Shielded VFD cable and 360 degree bonding",
        "Load reactors and dv/dt filters for long leads",
        "Shaft grounding rings on larger motors",
        "Soft starters and reduced voltage starting",
        "Line side protection and drive disconnects",
        "Ground fault and nuisance trip diagnosis",
      ],
    },
    {
      group: "From the vendor drawing to your building",
      note: "The gap nobody quoted, between the manual and the terminal block.",
      items: [
        "New machine connection and start up",
        "Imported equipment voltage and frequency issues",
        "Incoming lug sizing and conductor termination",
        "Cord drops, festoon and flexible connections",
        "Junction boxes and field wiring to devices",
        "Machine relocation and reconnection",
        "Washdown rated methods for food areas",
        "Phase loss and phase monitor protection",
      ],
    },
    {
      group: "Safety and interlocks",
      note: "Circuits that must work when everything else has failed.",
      items: [
        "Emergency stop strings and stop categories",
        "Safety relays and dual channel monitored circuits",
        "Guard switches, gate switches and pull cords",
        "Light curtains and presence sensing",
        "Interlocks between machines in a line",
        "Lockout and isolation point provisions",
        "Warning, running and fault indication",
        "Function testing of every device one at a time",
      ],
    },
    {
      group: "Controls and instrumentation",
      note: "The information side of the panel.",
      items: [
        "PLC and remote input output panel wiring",
        "Input and output checks against the list",
        "Sensor, transmitter and loop wiring",
        "Operator interfaces and pushbutton stations",
        "Network and fieldbus cabling to the panel",
        "Alarm outputs and remote signalling",
        "Wire numbering at both ends and device tagging",
        "Schematics left in the door pocket",
      ],
    },
  ],

  facilities: [
    "Food processing and packing lines",
    "Feed mills, grain dryers and handling systems",
    "Plastics, woodworking and light manufacturing",
    "Pump, blower and fan systems",
    "Poultry and dairy equipment rooms",
    "Machine shops and OEM equipment installs",
    "Water and waste treatment plant equipment",
  ],

  audience: [
    {
      title: "Plants taking delivery of new equipment",
      body:
        "A machine arrives with a manual that stops at the terminal block. Everything between your distribution and that block is the part nobody quoted, and it is the part that decides whether the start up date holds.",
    },
    {
      title: "Maintenance teams living with a panel that grew",
      body:
        "Three revisions, two contractors and a drawing that stopped being true years ago. Tracing it once properly and redrawing it is slow work that pays back on every fault after.",
    },
    {
      title: "Anyone importing machinery",
      body:
        "50 hertz ratings, a different wire colour code and control voltages that assume a supply nobody here has. Sorting that out is most of the work of connecting the machine, and it is invisible in a quote written from the manual.",
    },
    {
      title: "Operations with a drive that keeps tripping",
      body:
        "Usually a cable, shielding and lead length problem rather than a failed motor. The physics of a drive output is different enough from a starter that installing one like the other is a common and expensive mistake.",
    },
    {
      title: "Farms with equipment rooms full of controls",
      body:
        "Feed systems, dryers, ventilation and pumps all sequenced together. The same panel discipline applies, with the added problem that the room is dusty and nobody wants to be in it at three in the morning.",
    },
    {
      title: "Plants that need a safety circuit done properly",
      body:
        "An emergency stop belongs in a monitored safety relay rather than a rung of ordinary logic that a program change can quietly break. If your e stop string has never been tested device by device, it has not been tested.",
    },
  ],

  process: {
    title: "How a panel or machine job runs",
    lines: [
      "A look at the machine or process, with motor data read off nameplates, not a spec sheet.",
      "Available fault current from the utility or transformer, since the panel rating has to exceed it.",
      "A drawing before anything is cut: one line, power, control and an input and output list.",
      "Build, on the bench where that is possible and in place where it is not.",
      "Field wiring, drive parameters and motor rotation confirmed before couplings go back on.",
      "Function testing, every e stop and interlock exercised one at a time.",
      "Labels, wire numbers and drawings left with the panel. Shutdown work is scheduled the way [plant wiring during a shutdown](/projects/plant-wiring-during-shutdown) was.",
    ],
  },

  whyUs: [
    {
      title: "We establish fault current before designing",
      body:
        "A panel carries a short circuit current rating and that rating has to be at least the available fault current where it lands. A 5 kA panel fed from a large transformer is not a problem anybody can label their way out of.",
    },
    {
      title: "Wire colours and numbering follow a standard",
      body:
        "Black for ungrounded power, red for AC control, blue for DC control and orange for anything that stays live with the machine disconnect off. That last colour has prevented more injuries than any warning sticker.",
    },
    {
      title: "Drives get the cable and grounding they need",
      body:
        "Shielded VFD cable bonded 360 degrees at both ends, signal wiring kept out of that raceway, reactors where leads are long. Installing a drive like a starter is what kills winding insulation on 480 volt systems.",
    },
    {
      title: "Every device is tested one at a time",
      body:
        "Each e stop, guard switch and interlock exercised individually rather than assumed to work because the machine runs. That is a slow afternoon and the cheapest insurance on the job.",
    },
    {
      title: "The panel is built for the person who opens it at 2am",
      body:
        "Numbered conductors at both ends, tagged devices matching the drawing and a schematic in the door pocket. That person may not be us, and the panel should not depend on it being us.",
    },
    {
      title: "We say when a listed assembly is required",
      body:
        "Where Article 409 calls for a listed industrial control panel, that has to come from a shop carrying the listing. We tell you that instead of quietly field building something that will not pass.",
    },
  ],

  faq: [
    {
      q: "Do you program PLCs or only wire them?",
      a: "We wire panels, set drive parameters and check every input and output against the list. On program work, tell us the platform and what needs changing when you call, because the answer depends on whether the existing program is available.",
    },
    {
      q: "Can you rebuild a panel that no longer matches its drawing?",
      a: "Yes, and it is common work. We trace what is there, redraw it, then rebuild to the new drawing. The tracing is the slow part and worth doing once properly.",
    },
    {
      q: "Our drive trips on ground fault but the motor megs fine.",
      a: "That is usually cable and shielding rather than a failed motor, and the drive trip setting is often part of it. The diagnosis is in [chasing a ground fault trip on a VFD](/blog/vfd-ground-fault-troubleshooting).",
    },
    {
      q: "We have a machine on order. When should we call?",
      a: "Before it ships. Lug sizes, fault current, disconnect location and any three phase supply question are cheaper to answer while the slab is clear. What that can involve is in [the three phase distribution upgrade job](/projects/three-phase-distribution-upgrade).",
    },
    {
      q: "Can the work happen during a shutdown week?",
      a: "Yes, and that is when most of it should happen. Tell us the window early, because ordering and prefabrication have to finish first.",
    },
    {
      q: "A motor keeps burning out on one machine. Is the motor the problem?",
      a: "Usually not. It is normally the overload, which is a different device from the breaker and sized from the nameplate rather than the wire. A breaker that is correct for the conductors will protect a motor from almost nothing, and that mismatch is behind most of the cooked windings we are asked to look at.",
    },
    {
      q: "Can you work from our drawings, or do you need to redraw?",
      a: "Whichever is true. If the drawing still matches the panel we work to it. If it stopped matching two revisions ago, tracing and redrawing first is cheaper than troubleshooting against fiction for the next ten years.",
    },
  ],

  related: {
    projects: [
      "machine-connection-motor-control",
      "food-plant-equipment-power",
      "instrument-racks-process-wiring",
      "grain-system-power-controls",
      "plant-wiring-during-shutdown",
      "three-phase-distribution-upgrade",
      "poultry-house-ventilation-power",
      "preventive-maintenance-arc-flash",
    ],
    articles: [
      "what-is-a-vfd",
      "vfd-ground-fault-troubleshooting",
      "three-phase-motor-wont-start",
      "vfd-single-phase-input",
      "three-phase-vs-single-phase",
    ],
  },

  seeAlso: [
    "industrial-electrical-services",
    "low-voltage-structured-wiring",
    "electrical-preventive-maintenance",
    "agricultural-electrical-services",
    "electrical-service-upgrades",
  ],

  keywords: [
    "control panel wiring",
    "machine wiring",
    "motor control center",
    "vfd installation",
    "plc programming",
    "industrial control panel",
  ],
};

export default service;
