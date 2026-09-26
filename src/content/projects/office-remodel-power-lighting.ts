import type { Project } from "./types";

const project: Project = {
  slug: "office-remodel-power-lighting",
  title: "Office remodel power and lighting, with the floor still in use",
  category: "Commercial",
  location: "Berks County, PA",
  summary:
    "Power and lighting for an office remodel: surveying above the ceiling, circuit density, glare on screens, controls people use, data coordination and phasing.",
  lead:
    "An office remodel is rarely a blank sheet. There is an existing ceiling with twenty years of wiring above it, a tenant who needs to keep working, and a set of loads that looks nothing like the ones the building was wired for. The electrical scope is decided by what the survey finds, not by what the drawings show.",

  photos: [
    {
      src: "/photos/projects/office-remodel-power-lighting-1.webp",
      alt: "Finished office reception area with recessed lighting",
    },
    {
      src: "/photos/projects/office-remodel-power-lighting-2.webp",
      alt: "Office interior with linear ceiling lighting during remodel work",
    },
  ],

  sections: [
    {
      heading: "Lift the ceiling tiles before anyone prices the job",
      body: [
        "Every honest quote for an office remodel starts with a ladder and a flashlight. What is above the grid decides most of the cost: whether there is room to route new circuits, whether the existing wiring method can be extended, whether ductwork and structure block the runs the drawings assume, and how much abandoned cable is sitting on top of the tiles.",
        "Abandoned cable is worth a mention of its own. Older offices carry layers of dead phone, coax and data cable that nobody removed, and the code requires accessible cable that is not terminated and not tagged for future use to be taken out. That removal is real labour and belongs in the price rather than in a change order.",
        "The survey also settles how the existing circuits are shared. In a space reconfigured two or three times, one twenty amp circuit can wander across three departments, so demolishing a wall kills receptacles two rooms away. Finding that during survey is cheap. Finding it on the first morning of demolition is not.",
      ],
    },
    {
      heading: "Circuit density for how offices actually load",
      body: [
        "Office load has changed shape rather than size. A workstation draws less than it did, since a laptop and a monitor replaced a tower and a CRT, but there are more devices per desk and more of them charging at once. The printers, the coffee point and the conference room AV have become the real peaks.",
        "For general purpose receptacles the code has a straightforward calculation basis, and the usual practical result is a handful of workstations per twenty amp circuit rather than as many as will physically fit. Anything with a motor or a heating element, from the copier to the dishwasher to the point of use water heater, gets its own circuit. Break room counter receptacles and anything within reach of a sink need ground fault protection.",
        "Furniture systems bring their own rules. Modular partitions are fed by a whip to a fixed outlet and the number of circuits inside the partition run is set by the manufacturer, so the layout has to be agreed with the furniture supplier before the walls are closed. Where the load count outgrows the existing panel, the answer is a new subpanel or an [electrical service upgrade](/electrical-service-upgrades) rather than a double lugged breaker.",
      ],
    },
    {
      heading: "Lighting quality, not just lighting levels",
      body: [
        "Offices are screen environments, so the fixture that looks brightest in the showroom is often the worst one to sit under. A flat panel with a high luminance face throws a visible reflection onto every monitor in the room and creates the glare people describe as the room being too bright while their desk is too dark.",
        "Common design guidance puts general office work in the thirty to fifty foot candle range on the work plane, with the emphasis on even distribution rather than peak levels. Linear indirect runs and recessed units with a low brightness lens both solve the same problem, which is getting light onto the desk without putting it into people's eyes.",
        "Colour temperature and flicker round it out. Neutral white, usually in the three thousand five hundred to four thousand kelvin range, reads as daylight without going blue, and a driver with low flicker matters in a room where people sit for eight hours. Where fixtures are simply being swapped, the same thinking applies as in our [LED lighting retrofit](/commercial-led-lighting) work in warehouses and shops.",
      ],
    },
    {
      heading: "Controls people will actually use",
      body: [
        "The energy code now requires automatic shut off and multi level control in most office spaces, so occupancy sensing and dimming are going in whether or not anyone asks for them. Whether they stay in working order depends entirely on how they are set up.",
        "The most common complaint is lights coming on by themselves in a room somebody walked past. Manual on with automatic off solves that and keeps the code requirement satisfied. The second complaint is lights going off while people are sitting still in a meeting, which is a sensor coverage and time delay problem rather than a product problem.",
        "Switch placement is the unglamorous half of this. A switch inside the door, on the handle side, controlling the zone a person can see, is worth more than any control system. Open plan areas want their perimeter separated from their core so the daylit zone can dim on its own. Anything driven by the building system needs labelling and a written record of the settings, in the same way we label a [panel room and its feeders](/projects/commercial-panel-room-feeders).",
      ],
    },
    {
      heading: "Data and low voltage in the same pass",
      body: [
        "Cabling wants to be pulled while the ceiling is open, and it wants its own pathway. J hooks and tray carried on the structure keep cable off the ceiling grid wires and out of the way of the next trade. Keeping a sensible separation from power runs and crossing at right angles where they must meet avoids the intermittent faults that are impossible to find afterwards.",
        "The rack is the part that gets under specified. It needs a dedicated circuit, a proper ground, ventilation and enough room to work behind. Wireless access points need cable in the ceiling at locations the network designer picks, not wherever is convenient, and conference rooms need pathways for display and camera cable before the walls are skimmed.",
        "Doing power and [structured cabling](/low-voltage-structured-wiring) in one pass is cheaper than two mobilisations and produces a tidier ceiling, which matters the next time somebody is up there. Retail jobs run the same way, as in this [retail fit out](/projects/retail-fit-out-wiring).",
      ],
      bullets: [
        "Cable pathways carried on structure, never on ceiling grid wires",
        "Separation from power runs, with crossings at right angles",
        "Plenum rated cable where the ceiling void is used for return air",
        "Dedicated circuit, ground and ventilation at the rack",
        "Access point and conference room drops located before the ceiling closes",
      ],
    },
    {
      heading: "Phasing so half the floor keeps working",
      body: [
        "Most office remodels happen around people. That means the floor gets split into zones, and each zone has to be left safe and functional at the end of every shift. Temporary circuits, temporary lighting and a clear boundary between the working side and the construction side are part of the electrical scope even though they appear on no drawing.",
        "Egress lighting and exit signs are the constraint that decides a lot of the sequence. They have to remain in service in the occupied part of the floor throughout, which often means re-feeding them early so the construction zone can be isolated without going dark. Fire alarm devices in the work area need to be handled with the alarm contractor rather than around them.",
        "The rest is scheduling. Panel work, circuit tracing and anything needing a shutdown happens in the evening or at a weekend, and the tenant is told exactly which circuits go off and for how long. That is the difference between a remodel that is an inconvenience and one that costs real working days.",
      ],
    },
  ],

  services: [
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Low voltage and structured wiring", href: "/low-voltage-structured-wiring" },
    { label: "Commercial LED lighting", href: "/commercial-led-lighting" },
  ],

  related: ["retail-fit-out-wiring", "commercial-panel-room-feeders", "warehouse-high-bay-lighting"],

  keywords: [
    "office electrician",
    "commercial electrical services",
    "commercial electrician near me",
    "led lighting retrofit",
    "low voltage wiring",
  ],
};

export default project;
