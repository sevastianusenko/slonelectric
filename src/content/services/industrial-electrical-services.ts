import type { Service } from "./types";

const service: Service = {
  slug: "industrial-electrical-services",
  kind: "market",
  title: "Industrial Electrical Contractor | Plant & Machine Power | Lancaster & Lebanon County PA",
  h1: "Industrial electrical services for Pennsylvania plants",
  summary:
    "Industrial electrical contracting for plants in Lebanon, Lancaster and Berks counties: distribution, machine connection, motor control, drives and shutdown work.",
  lead:
    "Electrical work for plants, processing facilities and the equipment that runs them, serving Lebanon, Lancaster and Berks counties in Central Pennsylvania. From plant distribution and machine connections to motors, drives, controls and shutdown work, Slon Electric builds and maintains the electrical systems a plant depends on.",

  hero: {
    src: "/photos/services/industrial-electrical-services.webp",
    alt: "Crews working on food processing equipment inside a Pennsylvania plant",
  },

  sections: [
    {
      heading: "From the incoming service to the terminal block",
      body: [
        "Plant work covers everything from the incoming service to the terminal block on a machine, and the jobs at either end of that range look nothing alike. One is switchgear, feeders and a load study. The other is three conductors, a gland and a drive parameter that has to be right the first time.",
        "A plant does not measure electrical work in hours of labour. It measures it in hours of production lost, and that number is usually larger than the whole invoice. Siemens put unplanned downtime across Fortune Global 500 industrial companies at 11 percent of annual turnover in [its True Cost of Downtime study](https://blog.siemens.com/2023/04/the-true-cost-of-downtime/), and every plant manager we meet already knows their own figure per hour. So the parts of this work that matter most are scheduling and preparation, not the wiring itself.",
        "This region runs on food processing, feed and grain handling, packaging and light manufacturing, so most of what we see is 480V three phase, motors between a few horsepower and a few hundred, and equipment that arrives from a vendor with a wiring diagram in another language.",
        "The vendor diagram is worth saying more about, because it is where a lot of jobs go wrong quietly. It shows the machine, not the building. It assumes a supply voltage, a grounding arrangement and a disconnect location that may or may not match what is actually there, and it very rarely mentions the lead length between the drive and the motor. Reading it against the room before anything is ordered is a cheap hour.",
      ],
    },
    {
      heading: "Working inside a window",
      body: [
        "Most real plant work happens in a window somebody else defined: a changeover weekend, a holiday shutdown, a night between shifts. The window does not move. That single fact changes how the job has to be built.",
        "What makes a window hold is the work done before it opens. Conduit racks bent and assembled in the shop. Wire cut to measured lengths and labelled at both ends. Gear staged in the building, not on a truck somewhere. A written sequence that says what is isolated when, who holds the keys and what gets energised in which order. If the plan starts with unloading material on Saturday morning, the window is already lost.",
        "It also means being honest about what cannot be prefabricated. Machine connections that depend on where the equipment actually lands are measured on the day, and that time gets planned in rather than discovered. [How a shutdown job is put together](/projects/plant-wiring-during-shutdown) walks through a full window from the prep to the restart.",
      ],
    },
    {
      heading: "Machine connection and motor control",
      body: [
        "A machine connection is simple work with expensive failure modes. Article 430 governs it: conductor sizing from the motor full load current table rather than the nameplate, overload protection sized to the nameplate and service factor, short circuit protection sized separately, and a disconnecting means in sight of the motor unless the alternative under 430.102(B) is properly applied. Most of the burned up motors we are called to look at were protected by a breaker that was correct for the conductors and useless for the motor.",
        "Motor control centres age in a predictable way. Buckets get warm, stabs oxidise, contactors weld, and the labelling stops matching the line after the second rebuild. When a plant asks us to look at a nuisance trip on one machine, the answer is often in the bucket rather than the machine, which is where [our machine connection and motor control write up](/projects/machine-connection-motor-control) starts. For new equipment and the panels that run it, see [control panels and machine wiring](/control-panels-machine-wiring).",
      ],
    },
    {
      heading: "Drives, and the faults they invent",
      body: [
        "Variable frequency drives changed what a plant can do with a motor, and they also created a class of fault that did not exist before. A drive output is not a sine wave, it is a train of pulses switched at several kilohertz, so an ordinary meter on the output reads a number that means nothing. Cable capacitance to ground charges and discharges on every one of those pulses, which is why a drive can trip on ground fault with a motor that meggers perfectly. We go through the search order in [why a VFD trips on ground fault](/blog/vfd-ground-fault-troubleshooting).",
        "Long motor leads are the other common trap. With a 480V drive, reflected wave effects can nearly double the voltage seen at the motor terminals once the lead length passes a few dozen feet, which is why NEMA MG1 Part 31 inverter duty insulation exists and why the cable type is not a detail. What a drive does and where it is the wrong answer is covered in [what a VFD actually does](/blog/what-is-a-vfd), the single phase supply case is in [running a drive from single phase](/blog/vfd-single-phase-input), and when the motor simply will not turn, [the order to check a three phase motor in](/blog/three-phase-motor-wont-start) saves a lot of guessing.",
      ],
    },
    {
      heading: "What happens between the shutdowns",
      body: [
        "Almost every emergency call into a plant was visible beforehand. A loose lug runs warm, oxidises, runs warmer, and fails on the day the line is fully loaded. A thermal survey of the switchboard and the motor control centres under load finds those months ahead, which is what [an infrared survey looks like in practice](/projects/infrared-survey-switchboard) shows.",
        "NFPA 70E requires an arc flash risk assessment and a review of the incident energy study at intervals not exceeding five years. Plants that keep to that get two things out of it: labels their own maintenance people can work to, and a current picture of what is actually connected where. Those are the same drawings that make the next shutdown go quickly. The programme side is on [the preventive maintenance page](/electrical-preventive-maintenance) and in [this arc flash and maintenance job](/projects/preventive-maintenance-arc-flash).",
      ],
    },
  ],

  scope: [
    {
      group: "Plant distribution",
      note: "From the incoming service down to the last sub panel.",
      items: [
        "Switchboard and switchgear installation and replacement",
        "Feeder runs, cable tray and busway taps",
        "Sub panels and distribution boards on the floor",
        "Dry type transformers and step down installations",
        "480V and 208V three phase distribution",
        "Utility coordination and service capacity work",
        "Grounding grids, bonding and equipment grounding",
        "Power quality and harmonic investigation",
      ],
    },
    {
      group: "Machine connection",
      note: "The last few feet, where most expensive mistakes live.",
      items: [
        "New equipment connection from the vendor drawing",
        "Disconnects, plugs and local isolation under Article 430",
        "Machine relocation, line moves and re commissioning",
        "Decommissioning and safe removal of dead equipment",
        "Flexible connections, cord drops and festoon systems",
        "Washdown rated wiring methods for food areas",
        "Conveyor, packaging and filling line power",
        "Rotation checks, first run and handover to operators",
      ],
    },
    {
      group: "Motors, drives and control",
      note: "Everything that makes a motor start, stop and behave.",
      items: [
        "Motor control centre work, buckets and starters",
        "Variable frequency drive installation and replacement",
        "Drive parameter setup and commissioning",
        "Soft starters and reduced voltage starting",
        "Overload sizing to nameplate and service factor",
        "Inverter duty cable and long lead corrections",
        "Motor troubleshooting, winding and insulation tests",
        "Contactors, relays, interlocks and safety circuits",
      ],
    },
    {
      group: "Process and instrumentation",
      note: "The wiring that carries information rather than power.",
      items: [
        "Sensor, transmitter and loop wiring",
        "Instrument racks and junction box layouts",
        "Shielding and single point grounding practice",
        "Separation of signal wiring from power runs",
        "Level, flow, pressure and temperature devices",
        "PLC and remote input output panel wiring",
        "Network and fieldbus cabling on the plant floor",
        "Loop checks and point to point verification",
      ],
    },
    {
      group: "Shutdown and outage work",
      note: "Work built around a window somebody else set.",
      items: [
        "Prefabricated conduit racks and cut to length wire",
        "Written switching and isolation sequences",
        "Lockout and tagout coordination with your people",
        "Staged material delivery before the window opens",
        "Temporary power and rollback plans",
        "Phased energisation and supervised restart",
        "Night, weekend and holiday scheduling",
        "As built drawing updates after the window closes",
      ],
    },
    {
      group: "Plant maintenance and testing",
      note: "What keeps the next outage from being unplanned.",
      items: [
        "Infrared thermal surveys under real load",
        "Torque checks and connection tightening programmes",
        "Arc flash risk assessment and label updates",
        "Breaker and protective device testing",
        "Fault finding on intermittent and nuisance trips",
        "Panel schedule and single line drawing updates",
        "Emergency and standby system testing",
        "Spare parts review for critical equipment",
      ],
    },
  ],

  facilities: [
    "Food and beverage processing plants",
    "Feed mills and grain handling facilities",
    "Packaging, filling and bottling lines",
    "Light manufacturing and fabrication shops",
    "Woodworking and millwork plants",
    "Warehouses with conveyors and automated handling",
    "Machine shops and welding bays",
  ],

  audience: [
    {
      title: "Maintenance managers carrying a window",
      body:
        "You have a changeover weekend and a list that is longer than the weekend. What you need from a contractor is an honest estimate of what fits, prefabrication done beforehand, and nobody unloading material on Saturday morning.",
    },
    {
      title: "Plants installing equipment from a vendor",
      body:
        "A machine arrives with a diagram, a lead time and an installer who is not an electrician. We take it from the disconnect to the terminal block, set the drive, prove rotation and hand it over running.",
    },
    {
      title: "Food processors with washdown areas",
      body:
        "Wiring methods and enclosures that survive daily sanitation, done to the requirements of the area rather than to a general catalogue. How that looks on the floor is in [power for food processing equipment](/projects/food-plant-equipment-power).",
    },
    {
      title: "Operations chasing an intermittent fault",
      body:
        "A trip that happens once a shift and never while anybody is watching. That is a measurement problem more than a wiring one, and it usually ends in the bucket, the drive cable or a connection that only misbehaves warm.",
    },
    {
      title: "Plants expanding a line or a building",
      body:
        "Added load against a service nobody has calculated since the plant was built. The first honest step is a load study of what is really connected, not an assumption based on the nameplate on the door.",
    },
    {
      title: "Companies with an arc flash obligation",
      body:
        "NFPA 70E expects the study reviewed at intervals not exceeding five years, and most plants find the labels out of date because the plant changed. Bringing that current also brings the drawings current, which pays back at the next outage.",
    },
  ],

  process: {
    title: "How a plant job runs",
    lines: [
      "A walk through the area with your maintenance people, because they know which machine is really the problem.",
      "Drawings, nameplates and the existing distribution recorded as found, not as the old prints claim. See [the load study write up](/projects/load-study-and-drawings).",
      "A written scope, a price and a realistic length for the window, including the restart and the checks inside it.",
      "Prefabrication: racks built, conduit bent, wire cut and labelled, gear delivered and staged before the shutdown starts.",
      "A switching and isolation sequence agreed with your people, with lockout responsibilities named rather than assumed.",
      "The work, then energisation, rotation checks, drive parameters and a supervised first run.",
      "Updated schedules, labels and a marked set of drawings handed over, which is what makes the next window cheaper.",
    ],
  },

  whyUs: [
    {
      title: "We build the job before the window opens",
      body:
        "Racks bent, wire cut and labelled at both ends, gear staged inside the building. A window is won in the two weeks before it, and lost by anybody who plans to start with a delivery.",
    },
    {
      title: "Article 430 is sized properly, every time",
      body:
        "Conductors from the full load current tables, overloads from the nameplate and service factor, short circuit protection sized separately. Most burned motors we are called to look at were protected by a breaker that was right for the wire and useless for the motor.",
    },
    {
      title: "We understand what a drive output really is",
      body:
        "A pulse train, not a sine wave, with cable capacitance and reflected wave effects that invent faults in perfectly good motors. That is why we ask about lead length and cable type before anybody reaches for a megger.",
    },
    {
      title: "Your people stay in control of isolation",
      body:
        "The switching sequence is written, agreed and named. Nobody on our crew decides on the day what gets locked out, and nothing is energised without your maintenance people knowing it is about to be.",
    },
    {
      title: "We leave the drawings better than we found them",
      body:
        "Marked up single lines, corrected schedules and labels that match. Every outage after ours costs less because of it, which is the only maintenance argument that survives a budget meeting.",
    },
    {
      title: "Small enough to answer, experienced enough to trust",
      body:
        "One crew, one person quoting and running the work, and a phone covered around the clock for the night a line goes down between shutdowns.",
    },
  ],

  faq: [
    {
      q: "Can you work in our shutdown window, including nights and weekends?",
      a: "Yes, and that is when most of this work gets done. Tell us the window early enough that material and prefabrication can be ready before it opens, because that is what decides whether it holds.",
    },
    {
      q: "A drive keeps tripping on ground fault. Is the motor bad?",
      a: "Often not. Drives commonly trip on a small percentage of imbalance, and the leakage current through the cable to ground can get there on its own without a fault in the motor. The order we work through is in [troubleshooting a VFD ground fault](/blog/vfd-ground-fault-troubleshooting), and it starts with the cable and the lead length, not the megger.",
    },
    {
      q: "Do you build control panels?",
      a: "We wire, modify and connect control panels and machines. Where the installation calls for a listed industrial control panel under Article 409, that assembly has to come from a shop carrying the listing, and we will tell you that rather than work around it. See [control panels and machine wiring](/control-panels-machine-wiring).",
    },
    {
      q: "Our plant is 480V three phase. Is that a problem?",
      a: "No, it is most of what we do. Feeders, transformers, motor circuits and distribution at 480V are routine here. If you are deciding what a new area should be fed at, [three phase against single phase](/blog/three-phase-vs-single-phase) and [when a panel is no longer enough and you need switchgear](/blog/what-is-switchgear) cover the reasoning.",
    },
    {
      q: "Can you handle process and instrument wiring as well as power?",
      a: "Yes. Sensor, transmitter and control wiring, separation from power circuits, shielding and grounding done at one end only, and racks laid out so a technician can trace a loop at two in the morning. [Instrument racks and process wiring](/projects/instrument-racks-process-wiring) shows how we lay that out.",
    },
    {
      q: "Can you get to us between shutdowns if a line goes down?",
      a: "Yes, the phone is covered around the clock. What we can do on an unplanned call depends heavily on whether we have been in the building before, which is one of the quieter arguments for a maintenance agreement.",
    },
    {
      q: "Who is responsible for lockout on your work?",
      a: "Your programme governs the plant, and we work inside it. Before anything is isolated we agree a written sequence that names who holds which lock and what gets re energised in which order, so nobody is making that decision on the floor at midnight.",
    },
  ],

  related: {
    projects: [
      "plant-wiring-during-shutdown",
      "machine-connection-motor-control",
      "food-plant-equipment-power",
      "instrument-racks-process-wiring",
      "three-phase-distribution-upgrade",
      "infrared-survey-switchboard",
      "preventive-maintenance-arc-flash",
      "commercial-panel-room-feeders",
    ],
    articles: [
      "what-is-a-vfd",
      "vfd-ground-fault-troubleshooting",
      "three-phase-motor-wont-start",
      "what-is-switchgear",
      "three-phase-vs-single-phase",
    ],
  },

  seeAlso: [
    "control-panels-machine-wiring",
    "electrical-preventive-maintenance",
    "electrical-service-upgrades",
    "standby-generator-installation",
    "low-voltage-structured-wiring",
  ],

  keywords: [
    "industrial electrical contractor",
    "industrial electrical services",
    "industrial electrician",
    "plant electrician",
    "manufacturing electrician",
    "industrial electrical repair",
  ],
};

export default service;
