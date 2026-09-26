import type { Project } from "./types";

const project: Project = {
  slug: "commercial-panel-room-feeders",
  title: "The electrical room and the feeders that leave it",
  category: "Commercial",
  location: "Lancaster County, PA",
  summary:
    "Electrical room work in a commercial building: panel schedules, working clearance, feeder routing and support, labelling, arc flash and life safety separation.",
  lead:
    "Every commercial building has one room that decides how quickly anything electrical can be fixed. If the panels are labelled, the clearances are clear and the feeders are identified at both ends, a fault is an hour. If the room has become a store cupboard with a wall of unlabelled breakers, the same fault is a day.",

  photos: [
    {
      src: "/photos/projects/commercial-panel-room-feeders-1.webp",
      alt: "Electrical room with a lineup of labelled panels including the elevator supply",
    },
    {
      src: "/photos/projects/commercial-panel-room-feeders-2.webp",
      alt: "Commercial interior served by the panel room installation",
    },
  ],

  sections: [
    {
      heading: "The panel schedule is a deliverable, not paperwork",
      body: [
        "The code requires every circuit to be legibly identified as to its purpose, and it requires the identification to be specific enough to be useful. It also requires each panel to be marked with the source that supplies it. Neither of those is satisfied by a directory that says lights, lights, lights and receptacles in pencil.",
        "A schedule that is worth having names the room or the equipment, distinguishes a spare breaker from an empty space, and is updated the day a circuit changes rather than at the end of the project. It takes an extra hour on a new panel and it saves that hour back the first time somebody has to trace a circuit in an occupied building.",
        "The same applies at the top of the building. A single line diagram showing the service, the distribution and where each feeder goes, posted in the room and kept with the building file, is the document a maintenance electrician or an outside contractor will look for first. It is also what makes the next [service or panel upgrade](/electrical-service-upgrades) a priced job rather than a guess.",
      ],
    },
    {
      heading: "Working clearance, and why the room fills with boxes",
      body: [
        "The code sets a clear working space in front of electrical equipment: a depth that starts at three feet and increases with voltage and with what is on the opposite wall, a width of at least thirty inches or the width of the equipment, and headroom of at least six and a half feet. It also requires a dedicated space above the equipment kept free of foreign piping and ducts, adequate illumination and, on larger equipment, a second means of egress from the room.",
        "None of that survives contact with a building that is short of storage. Electrical rooms fill up with boxes, ladders, Christmas decorations and mop buckets, and the clearance disappears within a year of handover. The consequence is not theoretical: an electrician who cannot stand square in front of a panel cannot get clear of it either.",
        "The practical fixes are simple and they work. Mark the floor, fit a sign, keep the room locked and give the cleaner somewhere else to put the buckets. A room that stays clear is also a room where an infrared survey can actually be carried out, and that survey is only possible while the equipment is energised and accessible.",
      ],
      bullets: [
        "Clearance depth, width and headroom kept in front of every panel",
        "Dedicated space above equipment free of piping and ductwork",
        "Floor marking and signage so the space stays clear after handover",
        "Room illumination and, where required, a second way out",
        "No storage, and a lock so the room is not treated as a cupboard",
      ],
    },
    {
      heading: "Feeders: routing, support and heat",
      body: [
        "Feeders leaving a room are the part of the installation that is hardest to change later, so they are worth routing deliberately. That means racking conduit or tray on a planned line, supporting it from the building structure at the intervals the code requires, and not hanging it from sprinkler pipe, ductwork or another trade's rods.",
        "Heat is the constraint people forget. Bundling several current carrying conductors in one raceway means derating them, and a room without ventilation runs hotter than the ambient the tables assume. Both effects are real and both show up as a conductor running warm for years before anything fails.",
        "Vertical runs, firestopping at every penetration and support of conductors in tall risers all belong in the same review. A feeder that is properly supported, correctly derated and firestopped where it leaves the room is invisible for the life of the building, which is the whole point. The same discipline applies to a [three phase distribution upgrade](/projects/three-phase-distribution-upgrade) where new feeders share an existing route.",
      ],
    },
    {
      heading: "Labelling and arc flash",
      body: [
        "Switchboards and panelboards likely to be examined or serviced while energised have to carry an arc flash warning label, and service equipment has to be marked with the available fault current and the date that figure was determined. Those markings are not decoration. They are what tells the next person what they are opening.",
        "A proper arc flash study goes further and puts incident energy, boundaries and required protective equipment on each piece of gear. Buildings that carry out their own maintenance need that study, and it needs revisiting when the service changes, because a larger transformer or a shorter feeder changes the numbers. That is part of the work covered in our [preventive maintenance and arc flash](/projects/preventive-maintenance-arc-flash) programme.",
        "Feeder identification is the cheap half. Every feeder tagged at both ends, every disconnect marked with what it controls, and labels that are durable enough for the environment. In a room with twenty identical conduits leaving the top of a switchboard, tags at both ends are the difference between a safe isolation and an educated guess.",
      ],
    },
    {
      heading: "Keeping life safety and elevator supplies separate",
      body: [
        "Some feeders are not allowed to share. An elevator needs a dedicated supply and a disconnect the mechanic can see from the controller, with no other loads riding along, plus its own arrangements for the machine room lighting and receptacle. Where sprinklers are present in the shaft, the shunt trip arrangement has to be coordinated with the fire alarm contractor rather than assumed.",
        "Emergency and standby systems are stricter still. Emergency circuits are kept independent of normal wiring, fire pump supplies have their own rules, and none of it may be fed through a panel that somebody can switch off during a remodel. Getting that separation right at the room is what keeps it right for the life of the building.",
        "The related question is what happens when the utility fails. A building with a [standby generator and transfer switch](/projects/standby-generator-transfer-switch) needs its life safety, elevator and essential loads sorted onto the correct side of the transfer, and that decision is made in this room, on paper, before anything is wired.",
      ],
    },
    {
      heading: "When the building has outgrown its room",
      body: [
        "Older commercial buildings were given an electrical room sized for the load of their day. Add a tenant with three phase equipment, a kitchen, a data room and a bank of chargers, and the room runs out of space before the service runs out of capacity.",
        "The first move is measurement rather than assumption. Metering the existing service over a month gives a real maximum demand, and the code allows an existing load to be established that way instead of adding up nameplates that never all run at once. Very often the service is adequate and only the distribution is full.",
        "From there the options are distribution rather than demolition: a subpanel closer to the new load, a second distribution point fed from a properly sized feeder, or outdoor rated gear where the room genuinely cannot grow. Where the service itself is the limit, it becomes a planned [commercial electrical](/commercial-electrical-services) project with the utility involved early, because their lead time sets the programme.",
      ],
    },
  ],

  services: [
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical service upgrades", href: "/electrical-service-upgrades" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["three-phase-distribution-upgrade", "infrared-survey-switchboard", "preventive-maintenance-arc-flash"],

  keywords: [
    "commercial panel upgrade",
    "electrical panel upgrade",
    "commercial electrical contractor",
    "electrical service upgrade",
    "arc flash",
  ],
};

export default project;
