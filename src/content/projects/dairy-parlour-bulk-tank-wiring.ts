import type { Project } from "./types";

const project: Project = {
  slug: "dairy-parlour-bulk-tank-wiring",
  title: "Milking parlour and bulk tank wiring, done between milkings",
  category: "Agricultural",
  location: "Lancaster County, PA",
  summary:
    "Milking parlour and milkhouse circuits: vacuum and compressor loads, protecting the bulk tank, washdown rated wiring, equipotential planes and stray voltage.",
  lead:
    "A milking parlour is the highest value room on a dairy and the least forgiving one to work in. Everything in it is wet, everything in it is on a schedule, and the tank next door holds product that cannot be replaced if the cooling stops. The electrical work has to respect all three of those facts at once.",

  photos: [
    {
      src: "/photos/projects/dairy-parlour-bulk-tank-wiring-1.webp",
      alt: "Hand terminating cable at a bulk tank installation",
    },
    {
      src: "/photos/projects/dairy-parlour-bulk-tank-wiring-2.webp",
      alt: "Two farm silos against the sky",
    },
  ],

  sections: [
    {
      heading: "The parlour is a factory that runs twice a day",
      body: [
        "Everything else on a dairy can wait a few hours. The parlour cannot. Cows are milked on a fixed interval, and the electrical system in that building either supports the schedule or gets in its way. That is a different brief from a barn or a shop, where an outage is annoying rather than costly.",
        "The equipment list is short and demanding: a vacuum pump, a milk pump, a plate cooler and its water pump, a compressor and condensing unit for the tank, a wash system with heating, compressed air for gates and detachers, lighting, and increasingly a controller running identification and metering over data cable. Because the parlour is where the dairy earns, it usually justifies a dedicated panel rather than sharing with the yard. Where the wider supply is not up to that, the service comes first, which is the work in [rebuilding a farm service entrance](/projects/farm-service-entrance-upgrade).",
      ],
    },
    {
      heading: "Vacuum pump, compressor and the loads that set the panel",
      body: [
        "The vacuum pump is the heart of the parlour and usually the largest motor in the room. It runs continuously through milking and again through wash, so it is a long duty load rather than an intermittent one and conductors and overload protection should be selected on that basis. Many parlours now run variable speed vacuum, which cuts energy and starting current but adds a drive that needs correct grounding and cable practice to keep noise out of everything else.",
        "The refrigeration compressor is the other significant motor. It cycles hard, draws heavy starting current, and usually sits outside or in a side room where the wiring sees weather. Sizing follows Article 430 of the code, with branch circuit protection sized to allow starting and overload protection sized for the motor.",
        "The part that gets missed is the interaction. When the compressor cuts in during wash while the vacuum pump is running and the water heater element is on, the panel sees all of it at once. That combination, not any single load, is what the feeder has to carry.",
      ],
    },
    {
      heading: "The bulk tank is the one load that cannot lose power",
      body: [
        "Milk has to be cooled to storage temperature within a set time after milking and held there. A tank that loses its compressor at the wrong point in the day puts an entire pickup at risk, and that loss is not recoverable. It is the single circuit on a dairy that deserves the most protection.",
        "In practice the tank and its condensing unit go on dedicated circuits, not shared with anything else in the milkhouse, and the agitator and wash controls are wired so a fault in one does not take the other down. Labelling matters as much as the wiring, because the most common cause of a warm tank is somebody switching off the wrong thing.",
        "It also means backup power. A dairy is one of the clearest cases for a standby set anywhere in agriculture, since the parlour and the tank both stop the moment the utility does. Sizing means deciding in advance what runs: tank, vacuum, milk pump and parlour lighting at minimum, with the rest of the yard shed if necessary. That is covered on our [standby generator installation](/standby-generator-installation) page and in [a farm standby generator job](/projects/farm-standby-generator).",
      ],
    },
    {
      heading: "Wash water, heating and wiring in a room that gets hosed",
      body: [
        "The wash system is the biggest steady load in the milkhouse. Hot water means one or more large heating elements running on a timer or controller, and unlike motors these are resistive load at full value for the whole cycle. They belong on their own circuits sized for continuous duty.",
        "Everything in the parlour then gets washed down, including the parts nobody intended to wash. Water arrives under pressure at ceiling level and finds any enclosure that was not properly rated, so wiring methods here assume direct water contact rather than incidental moisture.",
      ],
      bullets: [
        "Enclosures and fittings rated for wet and washdown locations, not damp",
        "Corrosion resistant hardware, because chlorine and acid wash attack steel quickly",
        "Devices and boxes mounted clear of the hose line and clear of the gutter",
        "Dedicated continuous duty circuits for water heating",
        "Terminations accessible for inspection without cutting into the building",
      ],
    },
    {
      heading: "Stray voltage, equipotential planes and why cows feel it first",
      body: [
        "A cow standing on wet concrete with her muzzle on a steel waterer is a far better conductor than a person in rubber boots. Potential differences nobody working in the parlour would notice, often under two volts, are enough to change how a herd behaves. The signs show up as production problems before anyone suspects electricity: reluctance to enter, stepping and kicking, uneven milkout, cows leaving water.",
        "The structural answer is the equipotential plane. Article 547 of the code requires wire mesh or reinforcing steel in the concrete where livestock stand, bonded to every piece of metal an animal can contact and to the building grounding system. The purpose is not fault current. It is to hold everything an animal touches at the same potential so there is nothing to feel, and it has to be planned before concrete goes in, because retrofitting is far harder than doing it at the pour.",
        "The rest of the answer is ordinary grounding and bonding done correctly. Neutrals bonded to ground where they should be isolated, missing electrodes, corroded connections and shared neutrals between buildings are all common on older dairies and all put current where it does not belong. Fixing those usually removes most of the on farm contribution before any measuring starts.",
      ],
    },
    {
      heading: "Working between milkings, and where the same approach applies",
      body: [
        "The practical constraint on every parlour job is time. The room is in use twice a day and the window between is not generous once wash is accounted for. That changes how the work is planned rather than how it is done: materials staged before the window opens, noisy or dusty work scheduled when the cows are out, and circuits cut over one at a time so the parlour is never in a state where it cannot milk.",
        "It also means being honest about what cannot be finished in one window. A job needing six hours of dead time gets split into three sessions rather than run long and hold up a milking. That is the part which separates crews who work on dairies regularly from those who do not.",
        "Everything here carries over to the rest of the buildings. The same wet location fixture and wiring logic drives [barn lighting work](/projects/free-stall-barn-lighting), and the same bonding discipline underpins our [agricultural electrical work](/agricultural-electrical-services) generally. A parlour done well is a fair indication of how the rest of the farm should be built.",
      ],
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["farm-service-entrance-upgrade", "farm-standby-generator", "free-stall-barn-lighting"],

  keywords: [
    "milking parlour electrical",
    "dairy barn wiring",
    "bulk tank",
    "stray voltage testing",
    "agricultural electrician",
  ],
};

export default project;
