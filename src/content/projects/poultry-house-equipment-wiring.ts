import type { Project } from "./types";

const project: Project = {
  slug: "poultry-house-equipment-wiring",
  title: "Connecting the drive motors inside a poultry house",
  category: "Agricultural",
  location: "Lebanon County, PA",
  summary:
    "Wiring the machines inside a poultry house: cage and feed drive motors, curtain machines, disconnects, overload protection sized for a jam, not just a run.",
  lead:
    "A poultry house runs on more motors than the fans on the wall. Cage and egg conveyance chain drives, curtain machines that raise and lower the sidewall, and feed delivery augers all tie back to the same panel, and each one fails in its own way if the wiring treats it as an afterthought. This is the equipment side of the house, the machines nobody notices until the day one of them stops.",

  photos: [
    {
      src: "/photos/projects/poultry-house-equipment-wiring-1.webp",
      alt: "Curtain machine wiring along the ceiling of a poultry house aisle, cable tied and connected",
    },
    {
      src: "/photos/projects/poultry-house-equipment-wiring-2.webp",
      alt: "Chain drive motor mechanism for cage and conveyance equipment inside a poultry house",
    },
    {
      src: "/photos/projects/poultry-house-equipment-wiring-3.webp",
      alt: "Conduit and junction boxes running along the ceiling above a poultry house cage aisle",
    },
  ],

  sections: [
    {
      heading: "The equipment nobody wires like it matters, until it stops",
      body: [
        "Ask about a poultry house and the fans get all the attention, for good reason: lose ventilation and the clock starts running in minutes. But a house full of running fans still fails the flock if the cage system stops conveying, the curtain machine sticks half open in a cold snap, or the feed auger trips and nobody notices for a shift. [Ventilation power and controller wiring for a poultry house](/projects/poultry-house-ventilation-power) covers the fan side in depth. This is the rest of the panel, the machines that move feed, eggs and air inlets rather than exhaust air.",
        "Each of those systems is a motor, a drive mechanism and a control signal, and each fails on its own schedule and in its own way. Treating them as a handful of extra breakers on the barn panel, rather than as equipment with real starting, overload and disconnect requirements, is how a house ends up with nuisance trips nobody can explain and a drive motor that burns out a season early. On a working farm this equipment is as much a part of the [agricultural electrical services](/agricultural-electrical-services) we provide as the service entrance or the fan bank, not a side job tacked onto either.",
      ],
    },
    {
      heading: "A disconnect within sight of every drive",
      body: [
        "Code requires a disconnecting means within sight of fixed equipment, or a lockable disconnect where sight line is not practical, and in a four or five hundred foot aisle that is not a formality. A chain drive that jams on litter or debris gets worked on by someone standing at the drive itself, and the last thing they want is a walk back to a panel at the far end of the building to kill power, with no way to be sure somebody else has not already switched it back on.",
        "The chain and sprocket drive that moves cage and conveyance equipment is a case in point. It sits at height, it is accessed with tools in hand, and the local disconnect next to it is what makes clearing a jam a five minute job instead of one that starts with a long walk.",
      ],
    },
    {
      heading: "Overload protection sized for a jam, not just a run",
      body: [
        "A ventilation fan that is blocked just spins against less load. A chain drive or an auger that jams does the opposite: the motor keeps trying to turn a mechanism that has stopped, current climbs, and heat builds fast. Article 430 of the National Electrical Code covers overload protection separately from short circuit protection for exactly this reason, and on equipment that can bind mechanically it is the overload device, sized to the motor nameplate rather than to the breaker frame, that actually protects the winding.",
        "Manual reset overloads are worth specifying on this equipment rather than an automatic reset relay. An automatic reset that quietly restarts a jammed drive every few minutes does not fix the jam. It just runs the motor into the same fault repeatedly until something gives, usually the motor, sometimes the mechanism it is trying to turn. A manual reset forces someone to walk out, find the jam and clear it, which is the whole point of the alarm in the first place.",
      ],
      bullets: [
        "Local disconnect within sight of every chain, auger and curtain drive",
        "Overload relays sized to the motor nameplate, not the breaker frame",
        "Manual reset on equipment that can jam mechanically rather than just stall",
        "Conductors and connections rated for the dust and moisture around feed equipment",
        "Spare capacity at the panel for the next piece of equipment the integrator adds",
      ],
    },
    {
      heading: "Curtain machines are a motor and a control signal in the same run",
      body: [
        "Curtain machines raise and lower the sidewall inlet curtain on a signal from the ventilation controller, which puts a power circuit and a low voltage control signal working toward the same piece of equipment. Running both in the same raceway invites noise onto the control side, and a curtain machine that gets a false signal either runs when it should not or does not run when the house needs it to.",
        "Keeping the power and control runs separate, and landing shields correctly where the manufacturer calls for shielded cable, is the same discipline covered on the sensor side in the ventilation controller work, applied here to a machine that physically moves rather than one that only reports a reading. The curtain motor itself sits near the sidewall opening, exposed to more weather than equipment mounted mid-building, so the enclosure and connections get chosen for that spot specifically rather than reused from an interior location.",
      ],
    },
    {
      heading: "Labeling for the person walking the aisle at two in the morning",
      body: [
        "An alarm dialer that calls a cell phone at two in the morning is only useful if the person who answers can find the right breaker fast. Every drive, every curtain machine circuit and every feed motor gets a permanent label that matches the panel directory, written for someone working by a headlamp rather than for whoever happened to be on site the day it was installed.",
        "That discipline matters more on equipment circuits than it does on lighting, because a lighting fault is an inconvenience and a stuck curtain machine in a cold snap is a flock in trouble within hours. The same labeling and documentation standard carries over to [control panel and machine wiring](/control-panels-machine-wiring) on commercial and industrial equipment, where the person troubleshooting a fault at night is just as often a contractor seeing the panel for the first time.",
      ],
    },
    {
      heading: "Dust and washdown decide the enclosure, every time",
      body: [
        "Litter dust and ammonia are part of daily operating conditions in a poultry house, not an occasional hazard, and feed and conveyance equipment sits closer to the source of both than almost anything else in the building. Article 547 drives the enclosure and fitting choices here the same way it does on the ventilation side: gasketed boxes, corrosion resistant fittings, no open knockouts, and terminations that can be inspected without pulling the drive apart.",
        "Getting that right at installation is what keeps a jam from becoming a corroded terminal and a corroded terminal from becoming an unplanned call. The equipment on a new build gets specified this way from day one, which is the rough-in side of the same job, covered in [wiring a new poultry house built on precast concrete](/projects/poultry-house-new-construction).",
      ],
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["poultry-house-ventilation-power", "machine-connection-motor-control", "poultry-house-new-construction"],

  keywords: [
    "poultry house motor wiring",
    "poultry equipment electrician",
    "agricultural motor control",
    "poultry house electrical",
    "farm equipment wiring",
  ],
};

export default project;
