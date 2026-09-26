import type { Project } from "./types";

const project: Project = {
  slug: "surge-protection-service",
  title: "Whole building surge protection, fitted at the service and backed up inside",
  category: "Service and panels",
  location: "Lebanon County, PA",
  summary:
    "Whole building surge protection at the service: where surges come from, Type 1 and Type 2 devices, lead length and bonding, and what is worth protecting.",
  lead:
    "Most people picture a lightning strike when they think about surge protection. Lightning is the dramatic case and the rare one. The damage that actually accumulates in a farm building or a plant is generated inside it, thousands of times a year, every time a motor or a contactor switches off.",

  photos: [
    {
      src: "/photos/projects/surge-protection-service-1.webp",
      alt: "Surge protective device installed at a service with status indicators",
    },
    {
      src: "/photos/projects/surge-protection-service-2.webp",
      alt: "Service equipment mounted outdoors at a rural property",
    },
  ],

  sections: [
    {
      heading: "Where surges actually come from",
      body: [
        "A surge is a voltage spike lasting microseconds. The external ones come from lightning, either a direct strike or a nearby one inducing a spike into the utility line, and from switching out on the distribution system, capacitor banks and cleared faults. Those are the large events and not the common ones.",
        "The majority of surges are made inside the building. Every time an inductive load switches off, the collapsing magnetic field produces a spike on the circuit. Motors, contactors, solenoid valves, welders, compressors, ventilation fans, augers, refrigeration. On a farm or in a plant that happens continuously, all day, every day of the year.",
        "That is why the damage looks like early failure rather than an explosion. Control boards, variable frequency drives, ventilation controllers, scales, sensor inputs and LED drivers rarely die in one event. They take thousands of small hits and fail years before they should, and the failure gets blamed on the manufacturer.",
      ],
    },
    {
      heading: "Type 1 and Type 2 devices, and where each one belongs",
      body: [
        "The code divides surge protective devices by where they are permitted to be connected. A Type 1 device is listed for the line side of the service disconnect, ahead of the main. A Type 2 device goes on the load side, in or beside a panel, and it is the more common of the two.",
        "The practical difference is exposure. A Type 1 device sees whatever arrives from the utility with nothing in front of it, so it is built to take that. It is the right choice at services fed overhead, sitting in open country, or feeding a building with a lot of connected equipment, which describes a great many farms across Lebanon, Lancaster and Berks counties. A Type 2 at the main panel then handles what gets past it plus what the building generates itself.",
        "Ratings are worth reading rather than comparing on the headline figure. Two numbers matter: the surge current rating in kA, and the voltage protection rating, which is what the device actually lets through to the equipment. A moderate kA rating with a low let through voltage protects electronics better than a very large kA number that clamps high.",
      ],
    },
    {
      heading: "A surge device is only as good as its leads and its bonding",
      body: [
        "This is the part that gets installations wrong more often than device selection does. A surge protective device works by diverting current away to the grounding system, and the voltage that reaches the equipment is the device's clamping voltage plus whatever the connecting wires add during the event.",
        "Conductors have inductance and a surge is a very fast event, so every extra inch of lead adds voltage while it is happening. The rule across the industry is to keep leads as short and straight as the enclosure allows, with no sharp bends and no coils of spare wire. The effect is not marginal. Long, looped leads can roughly double the voltage the protected equipment sees.",
        "Bonding is the other half. The device has to put that energy somewhere, so a service with a corroded single ground rod or a loose bonding connection gives it nowhere to go. Fitting a surge device to a service like that is spending money at the wrong end of the problem, which is why it is normally done alongside [a service upgrade](/electrical-service-upgrades).",
      ],
    },
    {
      heading: "The second layer, control and low voltage systems",
      body: [
        "Protection at the service stops what arrives on the power conductors. It does nothing about everything else that enters the building. Data lines, telephone, control cable run between buildings, sensor wiring, camera feeds and antenna leads are all paths into exactly the same equipment.",
        "On a farm that is the usual failure route. A ventilation controller in one building is wired to sensors and alarms in another, the run between the two picks up an induced spike, and the spike walks into the controller through the signal terminals while the power side sits fully protected and entirely irrelevant.",
        "The answer is layered: the service device takes the bulk of the energy, local Type 2 devices sit at panels feeding sensitive gear, and protection goes on each signal path where it enters an enclosure. That work sits alongside [low voltage and structured wiring](/low-voltage-structured-wiring) and shows up again in [instrument racks and process wiring](/projects/instrument-racks-process-wiring).",
      ],
    },
    {
      heading: "The indicator light that nobody checks",
      body: [
        "Surge devices wear out. Each event consumes a little of the internal capacity, and once enough has been used the device stops protecting anything. Most have a status indicator on the front, many have an audible alarm, and better ones have a dry contact that can be wired out to a monitoring system or an alarm panel.",
        "Almost nobody looks at them. A device fitted five years ago in a panel room that gets opened twice a year may well have been showing a fault light for most of that time, with the building carrying on as though it is protected. That is worse than having no device at all, because the risk was believed to be handled.",
        "So it goes on the checklist rather than in someone's memory. Every scheduled visit includes checking the indicators and testing the alarm contact along with everything else on an [electrical preventive maintenance](/electrical-preventive-maintenance) round, and a site that already has monitoring gets the dry contact wired into it.",
      ],
    },
    {
      heading: "What is actually worth protecting",
      body: [
        "Not everything needs it. Lighting circuits, resistance heaters and plain across the line motors are hard to kill with a surge. The list that matters is the electronics, and on a farm or in a plant it is longer than most owners expect.",
        "The reason this is worth doing on a farm is not the replacement cost of a controller. It is what happens during the hours the controller is dead. A ventilation failure in a poultry house on a hot afternoon is a loss measured in birds, which is why the power and control side of that work is treated the way it is in [poultry house ventilation power](/projects/poultry-house-ventilation-power).",
        "In a plant the equivalent currency is downtime. A drive that fails takes a line with it, and the replacement is rarely sitting on a shelf. Against that, surge protection at the service and at the control panels is one of the cheapest pieces of insurance in the building, and one of the few that also pays back in equipment lasting longer.",
      ],
      bullets: [
        "Ventilation controllers, thermostats and alarm systems in livestock buildings",
        "Variable frequency drives and soft starters on fans, augers and pumps",
        "PLCs, HMIs and anything else living inside a control panel",
        "Milk cooling, refrigeration and compressor controls",
        "Scales, moisture meters and grain system controls",
        "LED drivers across a large lighting installation",
      ],
    },
  ],

  services: [
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Low voltage and structured wiring", href: "/low-voltage-structured-wiring" },
  ],

  related: ["preventive-maintenance-arc-flash", "infrared-survey-switchboard", "panel-upgrade-myerstown"],

  keywords: [
    "surge protection",
    "whole building surge protector",
    "electrical service upgrade",
    "electrical panel upgrade",
    "preventive maintenance",
  ],
};

export default project;
