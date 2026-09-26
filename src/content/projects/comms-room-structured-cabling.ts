import type { Project } from "./types";

const project: Project = {
  slug: "comms-room-structured-cabling",
  title: "Untangling a comms room and putting structured cabling back in",
  category: "Commercial",
  location: "Lancaster County, PA",
  summary:
    "A comms room that grew one cable at a time: why it becomes unworkable, how structured cabling is actually laid out, and what it costs to keep ignoring it.",
  lead:
    "The photograph is a comms room in the state most of them reach after about eight years. Patch cables running in every direction, three generations of switch stacked on one shelf, a phone system nobody has touched since it was installed, and no way to trace a single circuit without unplugging it and watching what breaks. Nothing here is unsafe. It is simply unmaintainable, and that has a real cost.",

  facts: [
    { label: "How it happens", value: "One cable at a time, each added by someone in a hurry" },
    { label: "Real cost", value: "Every fault takes hours to trace instead of minutes" },
    { label: "Governing article", value: "NEC Article 725 for class 2 circuits, plus plenum ratings where required" },
    { label: "Separation", value: "Data kept away from parallel power runs, crossings at right angles" },
    { label: "Bend radius", value: "Twisted pair is ruined by tight bends and overtightened ties long before it fails" },
    { label: "What makes it last", value: "Labelling at both ends and a record somebody can actually find" },
  ],

  photos: [
    {
      src: "/photos/projects/comms-room-structured-cabling-1.webp",
      alt: "Comms room with patch panels, network switches and dense unmanaged cabling",
    },
    {
      src: "/photos/projects/comms-room-structured-cabling-2.webp",
      alt: "Occupancy sensor switch held in front of its mounting box",
    },
  ],

  sections: [
    {
      heading: "Why low voltage is the part that gets neglected",
      body: [
        "Power wiring is inspected. Somebody signs it off, and if it is wrong there are consequences that are easy to understand. Low voltage cabling mostly is not, and the result is that it becomes the one system in a building that nobody owns.",
        "It also fails differently. A bad power connection eventually announces itself with heat or a trip. A bad data connection just makes things slow and intermittent, and the blame lands on the software, the internet provider, the switch, anything except the cable. We have been called to plenty of network problems that were a cable stapled too tight or a run laid along a fluorescent ballast for twenty feet.",
        "The third reason is that it is genuinely cheap to do badly and only slightly more expensive to do properly, so it is the easiest corner to cut when a project runs long. That is also why a rebuild pays for itself faster than people expect.",
      ],
    },
    {
      heading: "What structured actually means",
      body: [
        "Structured cabling is not a brand or a product. It is a layout discipline. Every outlet in the building runs back to one place. Nothing is daisy chained. Nothing is spliced in a ceiling. Every run is terminated on a patch panel at the room end and a jack at the outlet end, and the only thing you ever touch afterwards is a patch cable.",
        "The reason that matters is not neatness. It is that a fault becomes a bounded problem. If a socket is dead you know exactly which port it lands on, you can swap a patch lead in ten seconds to prove where the fault is, and you have not disturbed anything else in the process.",
        "In the room itself the same logic applies vertically. Patch panels and switches alternate so patch leads run short distances. Horizontal managers take the slack. Power and data are separated. Nothing sits on the floor. None of this is expensive at the time it is being built, and all of it is expensive to retrofit.",
      ],
      bullets: [
        "Every outlet home runs to one room, no daisy chains and no mid span splices",
        "Terminated on patch panels at one end and jacks at the other",
        "Switches and panels interleaved so patch leads stay short",
        "Power and data separated, crossing at right angles where they must meet",
        "Both ends of every cable labelled with the same identifier",
      ],
    },
    {
      heading: "The physical rules that get broken most",
      body: [
        "Twisted pair cable performs because the pairs are twisted at a controlled rate and held in a controlled geometry. Everything that deforms that geometry costs performance, and the damage is usually done during installation rather than later.",
        "Bend radius is the first. A cable pulled hard around a sharp corner or bent tight into a box is degraded permanently even though it still tests as connected. Cable ties are the second. Anything tight enough to indent the jacket has already compressed the pairs underneath it. Velcro exists for this reason and costs almost nothing.",
        "Pull tension is the third and least visible. Pulling a bundle through a long run with too much force stretches the cable and changes its characteristics along its whole length. The failure mode from all three is the same: it works, it passes a basic continuity check, and it produces intermittent errors under load that nobody ever traces back to the day it was installed.",
        "Separation from power is the fourth. Running data parallel to a power circuit for a long distance, particularly near anything with a drive on it, injects noise. The practical rule is to keep them apart and cross at right angles when you cannot. In a plant that becomes a much bigger issue, because the drives themselves are the noise source, which is covered in [instrument racks and process signal wiring](/projects/instrument-racks-process-wiring) and in our [control panel and machine wiring work](/control-panels-machine-wiring).",
      ],
    },
    {
      heading: "What else lives on this cabling now",
      body: [
        "A comms room in 2026 is not just computers. Cameras, door access, wireless access points, thermostats, occupancy sensors, audio, time clocks and increasingly the building controls all run over the same infrastructure, and most of them are powered over it as well.",
        "Power over Ethernet changed the requirements in a way a lot of older installations never accounted for. A bundle carrying current in every cable heats up in the middle of the bundle, and heat raises resistance and reduces the length a run can support. Large tightly packed bundles of PoE cable in an unventilated space are a real problem rather than a theoretical one.",
        "The second photograph is the other end of the same system: a sensor at an outlet position. Occupancy sensing, daylight control and scheduled lighting all depend on low voltage wiring being right, and a lighting control scheme that misbehaves is nearly always a wiring or commissioning problem rather than a product problem. That side of it connects directly to [office remodel power and lighting](/projects/office-remodel-power-lighting).",
      ],
    },
    {
      heading: "Doing the rebuild without stopping the business",
      body: [
        "Nobody can switch a working building off for a week, so a comms room rebuild is done in overlapping stages. New panels and managers go in alongside the old ones. Runs are re terminated in groups, tested, labelled and cut over a few at a time, usually outside working hours. The old equipment comes out last.",
        "The single most valuable part of the work is the part with no visible result: labelling both ends of every cable with the same identifier and leaving a record of what lands where. A room that is beautifully dressed but unlabelled will be back to a tangle within two years, because the next person to add something will have no way to do it correctly.",
        "The same staging logic applies to any work in a building that cannot stop, and it is the same discipline as [working inside a planned production shutdown](/projects/plant-wiring-during-shutdown), only spread over several evenings instead of one weekend.",
      ],
    },
    {
      heading: "Where this work applies",
      body: [
        "Offices are the obvious case, but the fastest growing demand is on farms and in plants. A modern poultry house is full of controllers, sensors and alarm circuits that have to reach somewhere, and that network is as critical as the power feeding the fans. The reasoning there is set out in [poultry house ventilation and controller power](/projects/poultry-house-ventilation-power).",
        "Warehouses need coverage for scanners and cameras across a large area with a lot of steel in the way. Plants need reliable signal paths in electrically hostile environments. Retail needs point of sale and cameras that do not drop during trading.",
        "In every case the pattern is the same. The cabling is a small fraction of the cost of the systems that depend on it, and it is the layer that everything else fails through. Our [low voltage, controls and monitoring work](/low-voltage-structured-wiring) exists because doing it properly once is much cheaper than diagnosing it forever.",
      ],
    },
  ],

  faq: [
    {
      q: "My network is slow. Is that really the cabling?",
      a: "Sometimes, and it is worth eliminating early because it is cheap to test. Intermittent faults, ports that only work at reduced speed and problems that get worse when a machine nearby starts are all classic cabling symptoms. Consistent slowness across everything usually is not.",
    },
    {
      q: "Can you work on this without taking us offline?",
      a: "Yes. The rebuild is staged so the new and old run side by side and circuits are cut over in small groups, mostly outside working hours. The only unavoidable interruptions are short and planned with you.",
    },
    {
      q: "Do you do the network equipment as well, or only the cabling?",
      a: "We install and terminate the cabling, mount and power the racks, and get everything labelled and tested. Configuration of switches and firewalls is usually your IT provider's work, and we are happy to coordinate directly with them.",
    },
    {
      q: "Is this worth doing on a farm?",
      a: "Increasingly yes. Controllers, alarms and cameras on a modern operation depend on it, and a controller that cannot raise an alarm at 3am is the same problem as a fan that will not start. It is worth doing properly for the same reason [the ventilation power](/projects/poultry-house-ventilation-power) is.",
    },
    {
      q: "What makes it stay tidy afterwards?",
      a: "Labelling at both ends and a record somebody can find. Cable management holds for a while on its own, but the thing that actually prevents the next tangle is the next person being able to see where a spare port goes without guessing.",
    },
  ],

  services: [
    { label: "Low voltage, controls and monitoring", href: "/low-voltage-structured-wiring" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
  ],

  related: ["instrument-racks-process-wiring", "office-remodel-power-lighting", "poultry-house-ventilation-power"],

  keywords: [
    "low voltage wiring installation",
    "structured cabling",
    "low voltage electrician",
    "low voltage wiring near me",
    "network cabling",
    "commercial electrician",
  ],
};

export default project;
