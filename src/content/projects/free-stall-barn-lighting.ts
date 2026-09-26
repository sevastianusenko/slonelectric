import type { Project } from "./types";

const project: Project = {
  slug: "free-stall-barn-lighting",
  title: "Free stall barn lighting, rebuilt for a long day schedule",
  category: "Agricultural",
  location: "Lebanon County, PA",
  summary:
    "Relighting a free stall dairy barn for long day lighting: fixture layout, wet location ratings, controls and why barn light is a production decision, not a comfort one.",
  lead:
    "A free stall barn is one of the few buildings where the lighting is part of the production system rather than a convenience. Cows respond to day length, and a barn that is dim for half the year is quietly costing the operation milk. This job replaced an aging fixture layout with one built around a long day schedule.",

  photos: [
    {
      src: "/photos/projects/free-stall-barn-lighting-1.webp",
      alt: "Lit free stall dairy barn with cows at the feed alley",
    },
    {
      src: "/photos/projects/free-stall-barn-lighting-2.webp",
      alt: "Row of electrical panels along a barn wall",
    },
  ],

  sections: [
    {
      heading: "What the barn had before",
      body: [
        "Most of the older free stall barns around Lebanon and Lancaster counties were lit the same way: a line of high pressure sodium or metal halide fixtures down the centre of the alley, spaced for the building rather than for the cows. They were bright enough to walk through at night and that was the whole specification.",
        "The problem shows up after about ten years. Discharge lamps lose output steadily rather than failing outright, so nobody notices. A fixture that started at fourteen thousand lumens is putting out half of that and still looks like it is working. Add a layer of dust and a hazy lens and the light actually landing on the stall bed is a fraction of what the barn was designed for.",
        "The second problem is the alley layout itself. Light in the middle of the building leaves the outside rows of stalls and the feed bunk in shadow, which is exactly where the cows spend their time.",
      ],
    },
    {
      heading: "Why light in a dairy barn is a production decision",
      body: [
        "Dairy extension research on long day lighting is consistent and has been for decades. Holsteins held on roughly sixteen hours of light followed by eight hours of darkness produce more milk than the same cows on a short or irregular day. The commonly published figure is an increase of around five to eight percent, and it comes from the effect of day length on melatonin and on the hormones that drive lactation.",
        "The important detail is that the light has to be measured at the cow, not at the ceiling. Guidance sits in the range of roughly 160 to 200 lux at stall height for the lactating herd. That is a figure most older barns miss badly once the lamps have aged.",
        "The dark period matters just as much. Sixteen hours of light only works if the other eight are genuinely dark, which means the night lighting has to be a separate, dimmer circuit rather than the same fixtures left on. Dry cows are the opposite case again: they do better on a short day, so a barn that houses both groups needs its lighting zoned, not switched as one block.",
      ],
    },
    {
      heading: "What went in",
      body: [
        "The rebuild used sealed LED fixtures laid out in two rows rather than one, positioned over the stall rows and the feed alley instead of the drive alley. That change alone does more for the light at cow level than any increase in fixture output.",
        "Fixture selection in a barn is not the same as in a warehouse. The inside of a dairy barn is a wet, corrosive, ammonia loaded environment with constant dust and a wash down schedule. Fixtures need a proper ingress rating, gasketed housings and hardware that will not rust out in three winters. We also keep drivers accessible, because a sealed fixture that cannot be serviced becomes a full replacement when one component fails.",
        "Wiring methods matter for the same reason. Agricultural buildings fall under Article 547 of the National Electrical Code, which exists precisely because barns are harder on wiring than almost any other occupancy. That drives decisions about raceway type, fittings, bonding and equipotential planes, and it is the part that gets skipped most often by crews that do not work on farms regularly. It is the same body of rules that governs the rest of our [agricultural electrical work](/agricultural-electrical-services).",
      ],
      bullets: [
        "Two fixture rows over the stalls rather than one down the drive alley",
        "Sealed, gasketed LED fixtures rated for wet and corrosive locations",
        "Separate night lighting circuit so the dark period is genuinely dark",
        "Zoned control so the dry cow area can run a different schedule",
        "Wiring methods and bonding to the agricultural requirements of the code",
      ],
    },
    {
      heading: "The failures we design around",
      body: [
        "Ammonia is the quiet killer in a dairy barn. It attacks aluminium housings, corrodes terminals and finds its way into anything that is not properly sealed. A fixture chosen off a general commercial catalogue will often last two or three years in a barn and then start failing one at a time.",
        "Moisture is the second. Between wash down, condensation and the humidity a herd generates, water gets into every enclosure that was not built to keep it out. We see the result constantly: corroded connections, nuisance tripping and eventually a ground fault that takes out a circuit at the worst possible hour.",
        "Vibration and rodents finish the list. Ventilation fans shake a building continuously, and barn wiring that relies on a connection staying tight under vibration will eventually loosen. Rodents chew anything soft that is within reach. Both are solvable with the right raceway and the right routing, and both are expensive to fix after the fact.",
      ],
    },
    {
      heading: "Where the same approach applies",
      body: [
        "The lighting logic is specific to dairy, but almost everything else on this job transfers to any agricultural building. Poultry houses run their own lighting programs with dimming curves tied to bird age, and the fixture and wiring requirements are the same or harsher. We cover that side of it in [poultry house ventilation and controller power](/projects/poultry-house-ventilation-power).",
        "Pole barns, equipment sheds and farm shops are the easier version of the same problem. They are usually underlit, usually still running old discharge fixtures, and usually the cheapest lighting job on the farm to put right. If the service feeding those buildings is undersized, that gets addressed first, which is the work described in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
        "On the commercial side the same fixture and layout thinking shows up in warehouses and shops, where the aim is light on the work surface rather than on the floor. Our [commercial and agricultural LED lighting](/commercial-led-lighting) page covers those.",
      ],
    },
    {
      heading: "What it changes day to day",
      body: [
        "The first thing anyone notices is that the barn is easier to work in at four in the morning. Heat detection, treatment and general observation all get easier when the light reaches the animals rather than the concrete.",
        "The second is the electricity bill, which drops even though the barn is brighter and running longer hours. Replacing aged discharge fixtures with LED usually cuts lighting load by more than half, and in a building that runs sixteen hours a day that is a real number.",
        "The third only shows up over the following season, in the bulk tank. A barn on a proper long day schedule is a herd management change as much as an electrical one, which is why it is worth doing properly rather than just replacing lamps like for like.",
      ],
    },
  ],

  services: [
    { label: "Commercial and agricultural LED lighting", href: "/commercial-led-lighting" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["poultry-house-ventilation-power", "farm-service-entrance-upgrade", "dairy-parlour-bulk-tank-wiring"],

  keywords: [
    "dairy barn lighting",
    "free stall barn lighting",
    "dairy barn led lighting",
    "barn electrical",
    "pole barn lighting",
    "agricultural electrician",
  ],
};

export default project;
