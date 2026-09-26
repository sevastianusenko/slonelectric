import type { Project } from "./types";

const project: Project = {
  slug: "ev-charging-commercial-site",
  title: "EV charging on a commercial site, planned around the service",
  category: "Commercial",
  location: "Lebanon County, PA",
  summary:
    "Commercial and fleet EV charging: load calculation first, why the panel is the constraint, level 2 against DC fast, load management, stub ups and siting.",
  lead:
    "Charger hardware is the easy part of an EV project and usually the cheapest. What decides whether a site can have two chargers or ten is the existing service, the room left in the panel and how the vehicles are actually used. Every job starts with those numbers rather than with a product.",

  photos: [
    {
      src: "/photos/projects/ev-charging-commercial-site-1.webp",
      alt: "Wall mounted EV charger installed on a block wall",
    },
    {
      src: "/photos/projects/ev-charging-commercial-site-2.webp",
      alt: "Second view of the EV charger installation and its supply",
    },
  ],

  sections: [
    {
      heading: "Load calculation before anything is promised",
      body: [
        "Charging is a continuous load, which means the circuit and the supply have to be sized at a hundred and twenty five percent of the charger rating. Two forty amp chargers are not eighty amps of capacity, they are a hundred, and that is before anything else in the building is counted.",
        "For an existing building the code allows the current load to be established from recorded demand data rather than a calculation on paper. Twelve months of utility peak demand, or a metered recording over a month where that data does not exist, gives a defensible figure to add charging to. That one step separates a site that can take chargers today from one that cannot.",
        "It is worth doing before any quote is given. A promise made from a photograph of a panel is how sites end up with chargers that trip the main under a summer cooling load, and it is why we treat the calculation as the first item on an [EV charging installation](/ev-charging-installation) rather than a formality.",
      ],
    },
    {
      heading: "The panel is usually the constraint, not the charger",
      body: [
        "Three things stop most commercial EV projects, and none of them is the charger. The first is physical space, since a lineup of twin pole breakers needs real estate in a panel that is often already full. The second is the bus rating, because a panel can be full long before its main breaker is loaded. The third is the feeder back to the service, which was sized for the building as it was, not as it is.",
        "Where the panel is the problem, a dedicated EV subpanel fed from a correctly sized feeder is usually cleaner and cheaper than trying to squeeze breakers into existing gear. It also gives one place to isolate the whole charging installation, which matters for maintenance and for the fire department.",
        "Where the service is the problem, the conversation moves to the utility, and utility lead times set the programme rather than our schedule. That is the same path as any other [electrical service upgrade](/electrical-service-upgrades), and the same reason the distribution side gets reviewed at the same time, as in [the panel room and feeder work](/projects/commercial-panel-room-feeders).",
      ],
    },
    {
      heading: "Level 2 against DC fast",
      body: [
        "Level 2 covers the great majority of commercial installations. Running at two hundred and eight or two hundred and forty volts and typically drawing thirty two to eighty amps, it adds roughly twenty to forty miles of range per hour. For staff parking, customer parking or any fleet that sits overnight that is more than enough, and it is what an ordinary commercial service can usually support.",
        "DC fast charging is a different class of installation. It works at four hundred and eighty volts three phase, draws from fifty kilowatts to several hundred, and often needs its own transformer, a pad, bollards and a utility upgrade with a lead time in months. It is the right answer for a public site on a travel corridor or a fleet that has to turn vehicles around during the day, and an expensive answer for anything else.",
        "The honest question is dwell time. If a vehicle sits for eight hours, level 2 is the cheaper and more reliable choice. If it sits for forty minutes between runs, nothing else will do.",
      ],
    },
    {
      heading: "Load management instead of a service upgrade",
      body: [
        "The code recognises energy management systems and allows the supply to be sized for the maximum the system will actually permit rather than the sum of the charger ratings. In practice that means a site can install more charging points than its service could otherwise carry, with the system sharing the available capacity between them.",
        "For a fleet yard this is often the whole answer. Vehicles that return in the evening and leave in the morning have eight or ten hours to share, so there is no reason for every port to draw full current at once. Staggering them also keeps the site off a new demand peak, which matters because commercial demand charges are set by the worst fifteen minutes of the month.",
        "The trade is complexity. A managed system is a controls installation as well as an electrical one, with communication between the chargers and something that has to keep working. It needs commissioning, documentation and somebody who understands it, in the same way as any [control panel or machine wiring](/control-panels-machine-wiring) job.",
      ],
      bullets: [
        "Recorded demand data rather than nameplate assumptions as the starting point",
        "Charging circuits sized at a hundred and twenty five percent of the charger rating",
        "A dedicated EV subpanel so the whole installation has one point of isolation",
        "Load management where the service is the limit and dwell time is long",
        "Commissioning notes and settings left with the building, not in a truck",
      ],
    },
    {
      heading: "Building for the chargers you have not bought yet",
      body: [
        "Almost every site that installs chargers adds more within a few years. The cost of the second phase is decided during the first, because the expensive part of an outdoor charger is the trench, the conduit and the surface that has to be cut and patched.",
        "So the sensible approach is to trench once. Spare conduits to the far side of the lot, stub ups capped at future charger locations, a pull box where circuits split, and a subpanel with spare spaces and a feeder sized beyond today's count. Recording where those stub ups are, and marking them, is what makes them useful in three years instead of forgotten.",
        "The same logic applies to anything else going under the lot. If [site and parking lot lighting](/projects/parking-lot-lighting) is being installed or replaced, the charger conduits go in on the same dig, and the lighting circuits and charger feeders share one properly planned route rather than two sets of saw cuts.",
      ],
    },
    {
      heading: "Siting: cable reach, snow and protection",
      body: [
        "Charger position is decided by the cable, not by the wall. A cord is limited in length by code, and a charger mounted where it looks tidy can easily leave the cable unable to reach a connector on the opposite side of a vehicle. Working out where each vehicle will park, and which side its port is on, avoids the extension cord improvisations that follow a bad layout.",
        "Outdoor equipment has its own rules on mounting height above grade, and the practical reasons behind them are drainage, snow and vehicles. A charger at the head of a parking space needs bollards or a wheel stop, and the pedestal should not be sitting where the lot gets plowed into a pile every winter.",
        "The rest is ordinary commercial site work: accessible spaces and the aisles beside them, enough light at the stalls to use the equipment after dark, signage so the spaces stay for charging, and a record of the installation left with the building.",
      ],
    },
  ],

  services: [
    { label: "EV charging installation", href: "/ev-charging-installation" },
    { label: "Electrical service upgrades", href: "/electrical-service-upgrades" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
  ],

  related: ["parking-lot-lighting", "commercial-panel-room-feeders", "three-phase-distribution-upgrade"],

  keywords: [
    "commercial ev charger installation",
    "ev charger installation",
    "level 2 charger installation",
    "ev charging station installation companies",
    "electrical service upgrade",
  ],
};

export default project;
