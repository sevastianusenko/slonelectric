import type { Project } from "./types";

const project: Project = {
  slug: "pole-barn-from-the-shell",
  title: "Wiring a pole barn from the empty shell",
  category: "Agricultural",
  location: "Lebanon County, PA",
  summary:
    "Wiring a new pole building before the walls close: where the conduit goes, how to light a workshop properly, and the spare capacity worth putting in on day one.",
  lead:
    "The first photograph is the best moment to wire a pole building: bare steel ceiling, open timber framing, conduit already dropping down a post, and nothing in the way. Everything is easy at this stage and most of it becomes difficult a month later. This is what we put in while the shell is still open, and why.",

  facts: [
    { label: "Best time to wire", value: "Before insulation and liner panel, while every post and purlin is reachable" },
    { label: "Governing article", value: "NEC Article 547 where livestock are housed, general rules where they are not" },
    { label: "Usual mistake", value: "Sizing the feed for a storage shed that becomes a workshop within two years" },
    { label: "Lighting target", value: "Even light on the work surface, not a bright patch in the middle of the floor" },
    { label: "Worth doing once", value: "Spare conduit from the panel to each end of the building" },
    { label: "Biggest single upgrade", value: "Three phase if it is available, for anything with a real motor load" },
  ],

  photos: [
    {
      src: "/photos/projects/pole-barn-from-the-shell-1.webp",
      alt: "Interior of a new pole building with steel ceiling, timber framing and conduit runs on a post",
    },
    {
      src: "/photos/projects/pole-barn-from-the-shell-2.webp",
      alt: "Concrete footing and pad poured for a new farm building",
    },
  ],

  sections: [
    {
      heading: "Wire it for what it becomes, not what it is called",
      body: [
        "Pole buildings get described as storage when they are being built and almost never stay that way. The shed becomes a workshop, then a workshop with a compressor, then a workshop with a compressor and a welder and a lift, and at some point somebody parks a tractor in it and wants a heater.",
        "That progression is so predictable that it should be designed for from the start. The cost difference between feeding a building for lighting and a few receptacles and feeding it for a real workshop is mostly conductor size and panel size, and both are cheap while the trench is open and the walls are off.",
        "The expensive version is the other order. A building fed with a small sub panel on a light feeder, then a compressor added, then a welder, then a second sub panel hung off the first, and eventually the whole feed replaced anyway. We see that sequence constantly, and the original saving is always smaller than the eventual cost. The same reasoning drives [the load study that should happen first](/projects/load-study-and-drawings).",
      ],
    },
    {
      heading: "What goes in while the walls are open",
      body: [
        "The photograph shows the window of opportunity. Steel ceiling up, framing exposed, nothing insulated or lined. Every post is a free route from floor to ceiling and every purlin is a free support. A month later the same run means fishing through insulation or surface mounting everything.",
        "So the work at this stage is deliberately more than the minimum. Conduit dropped at every position where anything might ever plug in, not just where something plugs in today. Runs to both ends of the building rather than one. Boxes set for lighting on a layout worked out in advance. A spare raceway from the panel to each end with a string left in it.",
        "It is also the only easy moment to deal with the outside of the building: exterior lighting, a receptacle at the door, a feed to a future lean to, and the conduit for a camera or a sensor. All of those cost a fraction now of what they cost through a finished wall.",
      ],
      bullets: [
        "Conduit at every plausible future position, not only the current ones",
        "Spare raceway from the panel to each end of the building, with a pull string",
        "Lighting boxes set to a planned layout before the liner goes up",
        "Exterior lights, door receptacle and a route for cameras or sensors",
        "Feed sized for a workshop even if it is being called a shed",
      ],
    },
    {
      heading: "Lighting a working building properly",
      body: [
        "The default pole barn lighting job is a row of fixtures down the centre. It produces a bright strip in the middle of the floor and shadows everywhere people actually work, which is against the walls and over a bench.",
        "A better layout puts light where the work is. Two rows rather than one on any building wide enough to matter, fixtures positioned relative to the bench and the door rather than to the centreline, and separate switching so you can light one end without lighting the whole building. In a building with a loft or a mezzanine, that upper level needs its own consideration entirely.",
        "Fixture choice depends on what the building actually is. A clean, heated workshop will take ordinary commercial fixtures. A building with livestock in it, or one that gets washed down, or one full of dust from grain or feed, needs sealed fixtures with a proper ingress rating and corrosion resistant hardware. That is the same specification logic as [the free stall barn relight](/projects/free-stall-barn-lighting), where the environment rather than the lumen figure drives the choice.",
      ],
    },
    {
      heading: "The code changes depending on what lives in it",
      body: [
        "This is the part that gets missed most often by crews who do not work on farms. Article 547 of the National Electrical Code applies to agricultural buildings where livestock are housed or where excessive dust and corrosive atmosphere are present, and it is meaningfully stricter than the general rules.",
        "It affects wiring methods, fitting selection, the requirement for equipotential bonding where animals stand, and how a site with several buildings is fed and grounded. A pole barn used purely as a dry equipment store is not in that category. The same building with calves in one end is.",
        "It matters because the decision is made when the building is wired and is very expensive to revisit. A building wired to general commercial standards and then used for livestock has to be brought up to the agricultural requirements, and that usually means a rewire rather than an adjustment. Asking what is going to live in the building is not a formality, and it connects directly to how the whole yard is supplied in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
      ],
    },
    {
      heading: "Getting power to it in the first place",
      body: [
        "A new pole building is rarely near the existing panel, so half of this job is the feed. The choice is a trench from an existing building or a supply from a pole, and it comes down to distance, what drives across the route and how exposed an overhead span would be.",
        "Whichever route it takes, voltage drop is the calculation that decides the conductor size on a farm, not ampacity. Over a long run the conductor that can safely carry the current will still deliver poor voltage at the far end, and the first thing to suffer is motor starting. A compressor that will not start on a hot day at the end of a long undersized feed is a voltage drop problem, not a compressor problem.",
        "The practical detail from the second photograph is that the concrete is the deadline. Anything that needs to pass under the pad, into the pad or through the footing has to be in before the pour. There is no second chance at that, and it is worth a site visit at that exact stage rather than a phone call afterwards. The trenching side of it is covered in [underground feeders between farm buildings](/projects/underground-feeders-farm-yard).",
      ],
    },
    {
      heading: "What this applies to beyond the farm",
      body: [
        "The same building shows up everywhere in this part of Pennsylvania under different names. Equipment sheds, contractor shops, small commercial warehouses, storage for a business run from a property. The construction is identical and so is the pattern of growth.",
        "The commercial version tends to reach the same problem faster because the loads arrive sooner: a lift, a paint booth, a compressor, racking with its own lighting requirements. At that point the building has the same needs as a small industrial unit, which is the territory covered by [warehouse high bay lighting](/projects/warehouse-high-bay-lighting).",
        "The advice is the same in every case. The cheapest capacity you will ever buy is the capacity you put in while the walls are open. Our [agricultural electrical work](/agricultural-electrical-services) and our [lighting work](/commercial-led-lighting) both start from that, because a building wired once and wired generously is the one nobody has to think about again.",
      ],
    },
  ],

  faq: [
    {
      q: "When should I call you during a pole barn build?",
      a: "Twice. Once before the concrete is poured, because anything passing under or through it has to be in first, and once when the shell is up but before insulation and liner panel. The second visit is when almost all of the work happens.",
    },
    {
      q: "How big should the feed to a new shed be?",
      a: "Bigger than the shed needs, because it will not stay a shed. The honest answer comes from a short conversation about what might end up in there. A compressor, a welder or a heater each change the number substantially.",
    },
    {
      q: "Do I need three phase?",
      a: "If the building will run anything with a serious motor load, and three phase is available at the road, it is usually worth asking the utility what it would take. Motors are cheaper, start better and last longer on three phase. If it is not available, the answer is to size the single phase feed generously.",
    },
    {
      q: "Does it matter if I keep animals in part of it?",
      a: "It matters a great deal. Livestock brings the building under the agricultural requirements of the code, which change the wiring methods and add equipotential bonding where the animals stand. Tell us at the start, because retrofitting that is close to a rewire.",
    },
    {
      q: "What do people regret not doing?",
      a: "Spare conduit, more lighting circuits so one end can be lit on its own, and an exterior receptacle by the main door. All three are trivial while the walls are open and awkward afterwards.",
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Commercial and agricultural LED lighting", href: "/commercial-led-lighting" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["free-stall-barn-lighting", "underground-feeders-farm-yard", "farm-service-entrance-upgrade"],

  keywords: [
    "pole barn lighting",
    "pole barn electrical wiring",
    "pole barn electrical code",
    "lighting for pole barn",
    "barn electrical",
    "agricultural electrician",
  ],
};

export default project;
