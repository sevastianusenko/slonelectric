import type { Project } from "./types";

const project: Project = {
  slug: "standby-generator-transfer-switch",
  title: "Standby generator and automatic transfer switch for a commercial building",
  category: "Standby power",
  location: "Lebanon County, PA",
  summary:
    "Commercial standby generator and automatic transfer switch work: sizing from a real load list, emergency panel choices, neutral switching, fuel and testing.",
  lead:
    "A standby set only earns its keep in the hour the utility is down, and every decision that decides whether it works in that hour is made long before it. This was a commercial standby generator with an automatic transfer switch, sized from a load list rather than from the size of the incoming service. The wiring is the straightforward part. Deciding what has to stay alive, and for how long, is the job.",

  photos: [
    {
      src: "/photos/projects/standby-generator-transfer-switch-1.webp",
      alt: "Kohler standby generator enclosure with its transfer equipment alongside a commercial building",
    },
    {
      src: "/photos/projects/standby-generator-transfer-switch-2.webp",
      alt: "Labelled automatic transfer switches with an arc flash warning label",
    },
  ],

  sections: [
    {
      heading: "Sizing from the load list, not from the size of the service",
      body: [
        "The common way to get a standby job wrong is to size the generator to the service. A building with an 800 amp service rarely needs 800 amps of generator. The service is sized for everything that could ever be connected plus room to grow, while the set only has to carry what the owner cannot afford to lose.",
        "So the work starts with a load list. Walk the panels, read the schedules, check what is actually connected rather than what somebody wrote on the card years ago, and put a number against each item: lighting, refrigeration, heat, fire alarm, access control, the network closet, sump and lift pumps, and any process equipment the business stops without.",
        "Then the loads sort into must run, useful, and can wait. Only the first group drives the sizing. Done honestly this usually lands on a smaller set than the owner expected, and the money that would have bought unused capacity goes into transfer equipment, fuel and [the feeders and panel room work](/projects/commercial-panel-room-feeders) that the emergency system depends on.",
      ],
    },
    {
      heading: "What goes on the emergency panel and what does not",
      body: [
        "A standby system is only as disciplined as its emergency panel. Everything fed from it runs on the generator, so every circuit added to it is a permanent claim on capacity. That panel gets built deliberately, with a schedule somebody can still read in ten years.",
        "Life safety comes first and is not negotiable: egress and exit lighting, the fire alarm and its notification appliances, elevator recall where there is an elevator, smoke control. The code treats legally required standby and optional standby differently, and that changes wiring separation and transfer requirements, so it pays to be clear from the start which system is being built.",
        "After that it is a business decision, and it is the conversation worth having before anything is ordered on a [commercial electrical project](/commercial-electrical-services). Refrigeration, boiler or furnace controls, the server rack, security, one lift pump rather than three. What usually does not belong on it is comfort cooling for the whole building, electric heat, and the shop loads that can wait until morning.",
      ],
    },
    {
      heading: "Motor loads and step loading",
      body: [
        "Running watts are not the problem. Starting is. A motor drawing full load current in normal service can pull six to eight times that on an across the line start, and on a generator that shows up as a voltage and frequency dip rather than as a tripped breaker, because the engine needs a moment to find the extra power.",
        "A deep dip resets electronics, drops contactors and faults out drives. Sizing therefore has to account for the largest motor, how it starts, and what is already online when it starts. A soft starter or a variable frequency drive changes that picture and can let a smaller set carry a load it would otherwise stumble on.",
        "With several motors the answer is step loading: bring the set up, let it stabilise, then add blocks in sequence. Time delays in the transfer switch and in the motor controls do this without special equipment. The same logic drives [farm standby work](/projects/farm-standby-generator), where a bank of ventilation fans all starting together is the hardest thing a set ever faces.",
      ],
      bullets: [
        "Size for the largest motor start, not for the sum of running loads",
        "Check what is already online at the moment that motor starts",
        "Use time delays so load arrives in blocks rather than all at once",
        "Soft starters and drives cut the starting demand on the set",
        "Confirm the dip is acceptable to the electronics on the same system",
      ],
    },
    {
      heading: "Automatic or manual transfer, and the neutral question",
      body: [
        "An automatic transfer switch senses the utility, starts the engine, waits for voltage and frequency, transfers the load, then transfers back and runs the engine down to cool once the utility has been stable for a set time. A manual switch does none of that and needs somebody on site who knows the sequence. Manual is honest, cheap and fine where an hour of delay costs nothing. It is the wrong answer for refrigeration, for a data closet, or for any building left unattended at night.",
        "The neutral question gets missed more often. A transfer switch is either three pole with a solid neutral or four pole with a switched neutral, and which one is correct follows from where the system is bonded. If the generator carries its own neutral to ground bond it is a separately derived system and the neutral has to be switched. Leave it solid in that case and there are two bond points, return current travelling on the grounding conductor and the building steel, and ground fault protection reading something that is not real.",
        "That mistake is invisible on the day of the install. It surfaces later as nuisance ground fault tripping, as stray voltage, or as a failed inspection. Which is why the generator, the switch and the bonding get settled together at the drawing stage on any [standby generator installation](/standby-generator-installation) rather than bought as three separate items.",
      ],
    },
    {
      heading: "Fuel, run time and where the set sits",
      body: [
        "Natural gas means no tank to fill and no fuel to go stale, but it leans on a utility that can also be interrupted, and gas sets generally accept load in smaller steps than diesel. Diesel gives larger block loading and fuel you control, in exchange for a tank, fuel that ages and a habit of checking it.",
        "Run time is a decision rather than a specification. A base tank good for eight hours is a different building from one good for seventy two. Where storm outages run into days, the honest question is how long the business can be down and who is bringing fuel if it goes past that.",
        "Placement matters more than it looks. The set needs air in and air out, an exhaust route clear of any intake, clearance for service, and an ambient the block heater can hold. Indoor rooms need real ventilation and a hard look at the feeder route back to the switch, which is often the most expensive part of the installation.",
      ],
    },
    {
      heading: "Exercise, load bank testing and the maintenance that keeps it starting",
      body: [
        "Standby sets do not fail dramatically. They fail to start. Batteries lead the list by a wide margin, then fuel problems, a coolant heater that quit, and a control switch somebody left in the off position after a service call.",
        "A monthly exercise run under load keeps the engine healthy and proves the transfer sequence still works. Running a diesel lightly loaded for years causes wet stacking, where unburned fuel collects in the exhaust. A load bank test answers that: put real load on the set, hold it there, and watch temperatures, pressures and voltage while it works.",
        "Between runs the checks are short and unglamorous. Battery condition and terminals, coolant and heater, fuel, oil, belts, the air intake, and the annunciator for stored alarms. We fold these into the same [preventive maintenance](/electrical-preventive-maintenance) rounds as switchgear checks and [infrared surveys](/projects/infrared-survey-switchboard).",
      ],
    },
  ],

  services: [
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["farm-standby-generator", "commercial-panel-room-feeders", "preventive-maintenance-arc-flash"],

  keywords: [
    "standby generator installation",
    "automatic transfer switch installation",
    "commercial generator installation",
    "generator installation near me",
    "generator repair",
  ],
};

export default project;
