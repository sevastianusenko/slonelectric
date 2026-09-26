import type { Project } from "./types";

const project: Project = {
  slug: "200-amp-service-upgrade",
  title: "Stepping a building up to a 200 amp service",
  category: "Service and panels",
  location: "Lebanon County, PA",
  summary:
    "Upgrading a building to a 200 amp service in Lebanon County, PA: load calculation, conductor sizing, disconnect location, bonding, and when 400A is the answer.",
  lead:
    "Two hundred amps has become the default answer for a service upgrade, and often it is the right one. It is also the size that gets guessed at more than any other number on a job. The calculation that decides it takes an hour and it is the only thing standing between a good service and one that has to be done twice.",

  photos: [
    {
      src: "/photos/projects/200-amp-service-upgrade-1.webp",
      alt: "Exterior meter and disconnect equipment on a building wall",
    },
    {
      src: "/photos/projects/200-amp-service-upgrade-2.webp",
      alt: "Service equipment on the outside of a building",
    },
  ],

  sections: [
    {
      heading: "The load calculation that decides whether 200 amps is enough",
      body: [
        "Article 220 of the code sets out how a service is sized. For anything that is not a dwelling the method is a straight addition of connected load with the demand factors the article allows: lighting, receptacles, fixed appliances, motors, heating and cooling with the larger of the two counted, welders, compressors, and anything continuous carried at 125 percent.",
        "For a building already in service there is a second and better method. Where there is a year of metered data, existing demand can be taken from the highest recorded fifteen or thirty minute peak and the new load added on top. The code allows that and it is more honest than a paper total, because it counts how the building is actually used.",
        "The part that gets missed is the future. A shop adding a second machine next year, a farm putting in a dryer, a site that will want [EV charging](/ev-charging-installation) within a few seasons. All of that belongs in the calculation now, while the conduit is open and the trench is still a trench.",
      ],
    },
    {
      heading: "Why guessing the size is the most expensive mistake on the job",
      body: [
        "Undersizing a service is not a small error you correct later with a bigger breaker. The conductors, the conduit, the meter socket, the disconnect, the panel and sometimes the utility's own transformer are all sized together as one decision. Changing the answer afterwards means doing the same job twice and paying for the same trench twice.",
        "The failure is rarely dramatic, which is why it goes unaddressed for years. The main does not trip. Instead the building runs near its ceiling, everything runs warm, voltage sags every time the largest motor starts, and the owner gets told the flicker when the compressor kicks in is normal. It is not normal, and it shortens the life of every motor and control board on the site.",
        "Oversizing carries a cost too, but a much smaller one. Larger conductors, a larger socket, occasionally a utility charge for bigger equipment. The price gap between 200 and 400 amps at installation is a fraction of the cost of installing 200 and then needing 400.",
      ],
    },
    {
      heading: "Conductor sizing and the temperature rating that governs it",
      body: [
        "Service conductors are sized from the ampacity tables, but the column that applies is not always the highest one. Terminations govern. Equipment rated for 75 degree terminations, which covers most modern gear, means the 75 degree column counts no matter what the cable insulation is rated for. Sizing off the 90 degree column because the conductor allows it is a common and serious error.",
        "In practice a 200 amp service usually lands on 2/0 copper or 4/0 aluminium for the entrance conductors, with the grounded conductor sized under its own rules and the grounding electrode conductor sized separately again. Aluminium is common and perfectly sound when the terminations are made properly, with the right lug, the right compound and the specified torque.",
        "Ambient temperature and conduit fill both reduce what a conductor can carry. A run through an unventilated attic, or along the south wall of a metal building in July, is not in the conditions the table assumes. Length matters as well, and voltage drop on a long run is the usual reason a conductor ends up one size larger than ampacity alone would demand.",
      ],
    },
    {
      heading: "The main disconnect and where it is allowed to sit",
      body: [
        "Service conductors are only protected at their far end, which is why the code is strict about how far they may travel inside a building before reaching a disconnect. The requirement is the nearest readily accessible point after entry, and inspectors read it tightly. A long run of unprotected service conductors across a ceiling to a panel at the back of a building is one of the most common findings on older work.",
        "The clean answer on most buildings is a disconnect outside, at or beside the meter, with a feeder running from there to the panel inside. Once those conductors are a feeder rather than a service they are protected at their origin, and they can go wherever the building needs them. It also gives the fire service one obvious point outside to kill the power.",
        "Working space in front of the equipment is the other half of this. Three feet of clear depth, the width of the equipment or thirty inches whichever is greater, and clear full height. Storage in front of a panel is not a small problem. It is the reason a disconnect does not get opened in an emergency, and it turns up on every [preventive maintenance and arc flash review](/projects/preventive-maintenance-arc-flash) we carry out.",
      ],
    },
    {
      heading: "Bonding and grounding at the new service",
      body: [
        "The service is the one place in the system where the grounded conductor and the equipment grounding are deliberately tied together, through the main bonding jumper. Everywhere downstream they stay separate. Getting that wrong puts normal load current onto the grounding system and into anything metal bonded to it, which is a shock hazard that gives no warning.",
        "The grounding electrode conductor is sized from the service conductors and has to reach every electrode the building has: water pipe, footing steel, rods, building frame. The connections matter as much as the conductor. Listed clamps, accessible where the code requires, and protected wherever equipment or livestock can reach them.",
        "On agricultural sites this goes further again, because step and touch potential around animals is a genuine problem and the bonding has to account for it. That is the difference between a service that is compliant on paper and one that works on a farm, and it runs through all of our [electrical service upgrades](/electrical-service-upgrades) on rural properties.",
      ],
    },
    {
      heading: "When 200 amps is the wrong answer",
      body: [
        "Single phase 200 amps suits a shop, an office, a small commercial building or a farmstead with modest motor load. It runs out quickly once real machinery arrives, and the signs that it will run out are consistent enough to list.",
        "Where those apply the honest answer is 400 amps, a 320 amp meter arrangement, or three phase where the utility has it available at the road. It is a harder conversation at quoting stage and a much easier one five years later.",
        "Three phase changes the whole picture rather than just the size. Motors get smaller and cheaper for the same output, starting current drops, and equipment that is only built in three phase becomes an option at all. Where it can be had it is worth the discussion, and it is the route taken in [a three phase distribution upgrade](/projects/three-phase-distribution-upgrade) and on most [industrial electrical work](/industrial-electrical-services).",
      ],
      bullets: [
        "More than one motor above a few horsepower on the same building",
        "Electric heating rather than fuel fired heating",
        "Welding, refrigeration, grain drying or air compressor load",
        "Equipment that is only manufactured in three phase",
        "A second building or an expansion already being planned",
      ],
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
  ],

  related: ["panel-upgrade-myerstown", "meter-service-upgrade-womelsdorf", "three-phase-distribution-upgrade"],

  keywords: [
    "200 amp service upgrade",
    "electrical service upgrade",
    "400 amp service upgrade",
    "electrical panel upgrade",
    "electrical service",
  ],
};

export default project;
