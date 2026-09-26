import type { Project } from "./types";

const project: Project = {
  slug: "preventive-maintenance-arc-flash",
  title: "Planned electrical maintenance program and arc flash study",
  category: "Maintenance",
  location: "Berks County, PA",
  summary:
    "Planned electrical maintenance and arc flash studies under NFPA 70B: data collection, fault current, incident energy, labelling, torque and insulation testing.",
  lead:
    "Electrical equipment fails on a schedule of its own unless somebody imposes one. This is the work of turning reactive repair into a maintenance program, and of producing the arc flash study that tells the people on site what they are standing in front of when they open a door.",

  photos: [
    {
      src: "/photos/projects/preventive-maintenance-arc-flash-1.webp",
      alt: "Insulation resistance tester connected to a panel during electrical testing",
    },
    {
      src: "/photos/projects/preventive-maintenance-arc-flash-2.webp",
      alt: "Clamp meter in use taking a reading at electrical equipment",
    },
  ],

  sections: [
    {
      heading: "What changed when NFPA 70B became a standard",
      body: [
        "For decades NFPA 70B was a recommended practice. It described what good electrical maintenance looked like, and nobody was obliged to follow any of it. In its 2023 edition it became a standard written in mandatory language, and that changes the conversation with an owner considerably.",
        "The practical effect is that a documented electrical maintenance program is now the baseline expectation rather than an upgrade somebody buys. The standard works on condition based intervals: equipment in a clean, dry, lightly loaded room needs attention less often than identical equipment in a dusty plant running near its rating, and the program has to be written down rather than carried in somebody's head.",
        "It also connects straight to safety. The arc flash calculations under NFPA 70E assume the equipment has been maintained, because a breaker that no longer clears in its rated time changes the incident energy at that point dramatically. An unmaintained breaker makes the label on the door optimistic.",
      ],
    },
    {
      heading: "What an arc flash study actually is",
      body: [
        "An arc flash study is not a survey and not a label printing exercise. It is an engineering study with a fixed sequence, and that sequence is worth describing honestly to anybody asking what they are paying for.",
        "It begins with data collection, which is the heavy part: every piece of equipment from the utility transformer down, conductor sizes and lengths, transformer ratings and impedances, breaker and fuse types, and the protective device settings as they are actually set rather than as they were specified. Then the calculations, and only at the end the labels.",
      ],
      bullets: [
        "Data collection: one line, conductors, transformers, protective devices and real settings",
        "Short circuit study to establish available fault current at each point",
        "Coordination study, so the device nearest the fault is the one that clears it",
        "Incident energy calculation, normally to IEEE 1584",
        "Labels on the equipment and a report explaining how the numbers were reached",
      ],
    },
    {
      heading: "Available fault current is not a constant",
      body: [
        "The number everything else rests on is the available fault current, and it moves. If the utility replaces a transformer with a larger one, or shortens the run to the building, available fault current at the service goes up. Add a second service, a new transformer or a generator and the picture changes again.",
        "The code requires service equipment to be field marked with the maximum available fault current and requires that marking to be maintained when a modification changes it. A study carried out before a service upgrade describes a building that no longer exists, and the interrupting ratings it relied on may no longer be adequate.",
        "So the study gets tied to the work rather than bought separately. A [service or distribution upgrade](/electrical-service-upgrades) is the natural moment to recalculate, and the same applies after [feeder and distribution changes](/projects/three-phase-distribution-upgrade) inside the building.",
      ],
    },
    {
      heading: "Torque checks and insulation resistance testing",
      body: [
        "The two field tests carrying most of the weight are torque verification and insulation resistance, and both are simple to do and easy to skip. A connection torqued to the manufacturer value on installation day and never touched again is behind a large share of the thermal findings we see in the field.",
        "Insulation resistance testing covers the other half. Applying a DC test voltage across insulation and measuring the leakage reveals moisture ingress, contamination and degradation long before anything faults. What matters is the trend across years on the same equipment rather than a single reading, and results are corrected to a reference temperature because insulation resistance changes sharply with it.",
        "Around those sit the unglamorous items: cleaning, checking ventilation and filters, exercising breakers that have sat closed for years, verifying settings against the study, and confirming the grounding system still matches the drawings. We run them alongside [infrared surveys](/projects/infrared-survey-switchboard), because the two methods find different faults.",
      ],
    },
    {
      heading: "Reactive repair against a maintenance interval",
      body: [
        "Reactive maintenance has an obvious appeal: nothing is spent until something breaks. What it hides is that the failure picks its own timing, and electrical failures pick production hours, because that is when the equipment is loaded and hot.",
        "A maintenance interval converts an unplanned outage into a planned one. The work happens in a shutdown window, parts are on hand, and the plant chooses when it stops. That is the entire argument, and it is the same reason we prefer to do plant work during [a scheduled shutdown](/projects/plant-wiring-during-shutdown) rather than under emergency conditions.",
        "The interval itself should follow condition rather than the calendar alone. A clean control room and a dusty grinding area do not need the same frequency. Equipment age, loading, environment and the consequence of a failure set the schedule, and the schedule gets reviewed as those change.",
      ],
    },
    {
      heading: "From the study to the label to the decision at the door",
      body: [
        "The output people actually use is the label on the equipment. It carries the nominal voltage, the arc flash boundary, the incident energy at the working distance along with that distance, or a PPE category, plus the date and the study behind it.",
        "That label decides what somebody wears and whether they open the door at all. High incident energy at a point is a signal to work de-energised, to operate remotely, or to change the protection so the energy comes down. Labelling a hazard is not the same thing as accepting it.",
        "The rest is process: an energised work permit where work genuinely cannot be done dead, a qualified person doing the task, and somebody who owns the program. We build that alongside routine [preventive maintenance](/electrical-preventive-maintenance) and the [panel and machine control work](/control-panels-machine-wiring) on the same sites, because the settings in the study and the equipment on the floor have to stay in agreement with each other.",
      ],
    },
  ],

  services: [
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
  ],

  related: ["infrared-survey-switchboard", "plant-wiring-during-shutdown", "three-phase-distribution-upgrade"],

  keywords: [
    "arc flash study",
    "arc flash analysis",
    "nfpa 70e",
    "electrical preventive maintenance services",
    "electrical testing services",
  ],
};

export default project;
