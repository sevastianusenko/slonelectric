import type { Project } from "./types";

const project: Project = {
  slug: "farm-service-entrance-upgrade",
  title: "Rebuilding a farm service entrance that grew for forty years",
  category: "Agricultural",
  location: "Lebanon County, PA",
  summary:
    "Upgrading a farm service: load calculation across buildings, single phase against three phase, a proper distribution point, bonding and stray voltage.",
  lead:
    "Almost every farm service in this county was sized for a smaller farm than the one standing on it today. Buildings were added, loads were added, and the supply got extended rather than rebuilt. This is what it takes to put a farm service back on a proper footing instead of hanging one more subpanel off the end of it.",

  photos: [
    {
      src: "/photos/projects/farm-service-entrance-upgrade-1.webp",
      alt: "Row of older electrical panels along a barn wall",
    },
    {
      src: "/photos/projects/farm-service-entrance-upgrade-2.webp",
      alt: "Dim older farm building interior with aged wiring",
    },
  ],

  sections: [
    {
      heading: "How farm services end up the way they do",
      body: [
        "The pattern repeats farm after farm. A service went in decades ago to feed a house, a barn and a shop. A second barn went up and was fed from the first one. A grain setup arrived and was fed from the shop. Then a shed, a well pump, a manure pit and a compressor. Nothing was wrong on the day it was installed. It simply accumulated.",
        "What that leaves is a full main panel, a row of subpanels chained one from another, feeders undersized for what now hangs off them, and no single place where the farm can be shut off. Voltage sags when a large motor starts. Breakers trip for reasons nobody has traced. Isolating one building means shutting down two. The other consequence is that nobody can tell you what the farm actually draws, and that is the first thing to fix, because every other decision in an [electrical service upgrade](/electrical-service-upgrades) depends on the number.",
      ],
    },
    {
      heading: "The load calculation nobody did",
      body: [
        "Article 220 of the National Electrical Code has a specific method for farms, and it exists because a farm behaves differently from a building with the same connected load. Not everything runs at once. A dryer fan, a silo unloader and a milking parlour are not simultaneous loads in any normal week, and the code allows demand factors that recognise it.",
        "The calculation runs building by building. Each building gets its own load with its own demand factors, then the buildings are combined with a further set of factors, the largest load taken at full value, the second at a reduced percentage and the rest lower again. The farm dwelling is calculated separately and added. Done properly it gives a defensible service size rather than a guess, and it usually shows one of two things: either the service is genuinely undersized, or it is adequate and the real problem is distribution. It is worth running the numbers on the farm you expect in ten years, because adding capacity now is cheap and adding it later means doing the service twice.",
      ],
    },
    {
      heading: "Single phase or three phase, and when the utility will bring it",
      body: [
        "Most older farms here are single phase. That works until the motors get big. A single phase motor above roughly ten horsepower is an awkward thing: heavy starting current, a utility that does not love it, and a narrow equipment choice. Grain dryers, large fans, compressors and modern parlour equipment are all happier on three phase.",
        "Whether three phase is available comes down to where the nearest three phase line runs. If it is on the road the conversation is usually reasonable. If it is half a mile away the utility will quote a line extension and that number decides the project, so it is worth asking before designing anything.",
        "Where three phase is not practical, the alternatives are a rotary phase converter or variable frequency drives fed from single phase. Both work, both have limits, and both need the system designed around them rather than bolted on afterwards. It is the same decision we work through on the commercial side in [a three phase distribution upgrade](/projects/three-phase-distribution-upgrade), where the driver is machinery rather than grain.",
      ],
    },
    {
      heading: "One service, or a distribution point",
      body: [
        "The most useful change on a spread out farm is usually a distribution point. Instead of feeding every building from whichever building is closest, the service lands at one location, typically a yard pole or a purpose built rack, and each building gets its own feeder and its own disconnect from there.",
        "Article 547 recognises this arrangement explicitly, and it solves several problems at once. Any building can be isolated without touching another. Feeders are sized for the building they serve rather than for everything downstream. Fault current paths are short and predictable. Grounding and bonding can be done correctly, which is difficult when buildings are daisy chained. It also makes the farm safer to work on, because one disconnect takes the yard dead instead of leaving power arriving at a building from two directions.",
      ],
      bullets: [
        "Service and metering at one distribution point rather than on a building wall",
        "A separate feeder and disconnect per building, sized for that building",
        "A grounding electrode system at each building, neutral kept separate from ground downstream",
        "Room left in the distribution equipment for the next building",
        "Labels that mean something, so the next person is not guessing",
      ],
    },
    {
      heading: "Equipotential bonding where livestock stand",
      body: [
        "Livestock buildings carry a bonding requirement no other occupancy has. Where animals stand on concrete and contact metal, the code requires an equipotential plane: wire mesh or reinforcing bar in the concrete, bonded to every piece of metal an animal can touch and to the building grounding system. The point is not to carry fault current. The point is to hold everything an animal can touch at the same potential, so there is no voltage across the animal.",
        "That work has to be coordinated with the concrete. Retrofitting a plane into an existing floor is possible but it is a different and far more expensive job than bonding mesh before the pour. Any time concrete is going in near livestock, the bonding conversation belongs in that week. The bonding conductor then gets protected where it leaves the concrete and terminated where it can be inspected.",
      ],
    },
    {
      heading: "Stray voltage, and why it is usually a grounding problem",
      body: [
        "Stray voltage is a small potential difference between two points an animal can contact, usually a volt or two. People do not feel it. Dairy cattle do, because their contact is through wet mouths and four wet hooves on concrete. The signs are behavioural before they are electrical: reluctance to enter the parlour, uneven milkout, restlessness at the waterer.",
        "Some of it comes from the utility side and some from on farm wiring, but a large share of the farm portion traces back to grounding and bonding that were never right. Neutrals bonded to ground in subpanels, missing or corroded electrodes and shared neutrals between buildings all put current where it does not belong. A rebuild with a distribution point, isolated neutrals downstream and a real electrode system at each building removes most of the on farm sources before anyone starts measuring.",
        "Where it persists the next step is measurement rather than guesswork, taken across the animal contact points over time rather than as one reading. The parlour is where it matters most, which is why the subject comes up again in [milking parlour and bulk tank wiring](/projects/dairy-parlour-bulk-tank-wiring). The yard side of the same rebuild, replacing overhead runs with buried feeders, is [underground feeders across a farm yard](/projects/underground-feeders-farm-yard), and all of it sits inside our [agricultural electrical work](/agricultural-electrical-services).",
      ],
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
  ],

  related: ["dairy-parlour-bulk-tank-wiring", "underground-feeders-farm-yard", "three-phase-distribution-upgrade"],

  keywords: [
    "farm service entrance",
    "three phase",
    "agricultural electrician",
    "electrical service upgrade",
    "stray voltage",
  ],
};

export default project;
