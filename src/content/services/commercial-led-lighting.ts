import type { Service } from "./types";

const service: Service = {
  slug: "commercial-led-lighting",
  kind: "service",
  title: "Commercial & Agricultural LED Lighting | Warehouse, Pole Barn & Parking Lot | PA",
  h1: "Commercial and agricultural LED lighting",
  summary:
    "LED lighting design and installation for warehouses, pole barns, poultry houses and parking lots across Lebanon, Lancaster and Berks counties, Pennsylvania.",
  lead:
    "Most lighting quotes are a fixture count and a price. That is not a design, and it is why so many retrofits end up bright over the floor and dim where people work. A warehouse lit to a number on a spec sheet can still have dark aisles. The useful part of this job happens before anything is ordered.",

  hero: {
    src: "/photos/services/commercial-led-lighting.webp",
    alt: "Large commercial space with new linear LED lighting",
  },

  sections: [
    {
      heading: "Layout and beam angle decide it, not lumens",
      body: [
        "A lumen figure tells you how much light leaves the fixture. It says nothing about where that light lands, and where it lands is the whole job. Two 22,000 lumen high bays hung at the same height, one with a 60 degree optic and one with 120, give you two different buildings. The narrow one puts light down the aisle and onto the rack faces. The wide one washes the floor and the tops of the shelving while the aisles stay dim.",
        "So the order of decisions is mounting height, then spacing, then beam angle, and fixture wattage comes last. A 30 foot deck wants narrower optics on wider spacing. An 18 foot deck with those same fixtures glares and leaves scallops of dark between them. Racking changes it again, because it blocks light from the side, and a layout drawn without the rack positions is a layout for an empty building.",
        "The reasoning is worked through in [choosing and spacing high bay fixtures](/blog/high-bay-led-lighting), and what it looks like in a real building is in [the warehouse high bay job](/projects/warehouse-high-bay-lighting).",
      ],
    },
    {
      heading: "Light the work plane, not the concrete",
      body: [
        "An illuminance target means nothing until you say at what height and on what surface. Bulk storage is usually designed around 10 foot candles at the floor. An aisle where people read labels and pick wants 20 to 30, measured vertically on the rack face rather than flat on the slab. A bench where somebody handles small parts wants 50 or more at about 30 inches.",
        "That is why one fixture type across a whole building is almost always wrong. A packing line, a storage bay and an office corridor are three different problems under one roof. Uniformity also beats average: a room at 30 foot candles with dark patches between fixtures reads worse than an even room at 20.",
      ],
      bullets: [
        "Ceiling height, and whether the deck is open steel or a white panel",
        "Rack height, aisle width and which direction the aisles run",
        "What people do at the work plane and at what height they do it",
        "Wall and floor colour, because a dark floor gives nothing back",
        "Daylight from skylights or translucent wall panels",
        "Colour temperature and colour rendering, which decide whether product looks right",
      ],
    },
    {
      heading: "A barn needs a different fixture than a warehouse",
      body: [
        "Ammonia is the first reason. In a poultry house or a bedded pack barn it attacks aluminium housings, creeps into the driver compartment and corrodes terminals from the inside. A high bay taken off a general commercial catalogue often lasts two or three years in that air and then starts failing one fixture at a time, which is the expensive way to find out.",
        "Washdown is the second. Article 547 of the National Electrical Code requires luminaires in these buildings to keep out dust and moisture, to be watertight where the space is washed for sanitation, and to be guarded where they can be struck. In practice that means a sealed gasketed fixture with an ingress rating you can point at, not a linear strip with open end caps. The article is covered in plain language in [what the code requires in a barn](/blog/nec-547-agricultural-wiring), and the wiring feeding those fixtures in [choosing a wiring method for agricultural buildings](/blog/barn-wiring-methods).",
        "The third difference is control. Poultry houses run a lighting program, so fixtures have to dim deeply and smoothly without flicker and the driver has to match what the controller puts out. Dairy is a different problem again, since a free stall barn is lit both for a long day program and for somebody walking the alley at two in the morning. Both are in [the free stall barn lighting job](/projects/free-stall-barn-lighting) and [the poultry house ventilation and power job](/projects/poultry-house-ventilation-power).",
      ],
    },
    {
      heading: "Controls are the saving people leave behind",
      body: [
        "Swapping a 400 watt metal halide high bay, which pulls closer to 460 watts once the ballast is counted, for a 150 watt LED is the headline number. The second saving is often larger across a year, and it gets dropped from the quote because it adds a little to day one.",
        "Warehouse aisles are empty most of the time. ASHRAE 90.1 already requires occupancy sensing in warehouse aisleways that cuts fixture power by at least half, and that requirement exists because the saving is real. Daylight zones under skylights can dim close to off on a bright afternoon. Outside, a photocell and a timeclock together beat a photocell alone, because a yard rarely needs full light at three in the morning.",
        "One warning on retrofits. When connected load drops by two thirds the old lighting circuits end up lightly loaded, and the panel schedule becomes even less accurate than it already was. We correct it on the way out, which sounds like a small thing until somebody has to find a circuit at night, as [how to read a panel schedule](/blog/how-to-read-a-panel-schedule) sets out.",
      ],
    },
    {
      heading: "The maintenance argument at height",
      body: [
        "The cost of a high bay is not the fixture. It is the lift, the aisle you clear to get the lift in, and two people working at 28 feet. That is true the first time and every time after, so fixtures should be chosen as though replacing one is expensive, because it is.",
        "LEDs rarely fail the way lamps did. Drivers fail, and they fail early when they run hot or when they were the cheapest part of a cheap fixture. That is the argument for a product with a driver you can still buy in six years and a warranty covering labour, not just a box on a shelf. Where the schedule allows we do the work in blocks during a shutdown, as in [plant wiring during a shutdown](/projects/plant-wiring-during-shutdown).",
      ],
    },
  ],

  scope: [
    {
      group: "Warehouse and high bay",
      note: "Big volumes where the aisle matters more than the average.",
      items: [
        "High bay and low bay LED installation",
        "Linear high bay for racked aisles",
        "Metal halide and fluorescent retrofit",
        "Aisle lighting laid out to the racking",
        "Loading dock and door area lighting",
        "Cold storage rated fixtures",
        "Mezzanine and pick module lighting",
        "Foot candle readings taken before and after",
      ],
    },
    {
      group: "Agricultural lighting",
      note: "Fixtures chosen for the air they will live in.",
      items: [
        "Poultry house lighting programs and dimming",
        "Free stall and tie stall barn lighting",
        "Long day lighting for dairy production",
        "Night and alley lighting for walking the barn",
        "Washdown and gasketed fixtures under Article 547",
        "Guarded fixtures where they can be struck",
        "Pole barn, shop and equipment shed lighting",
        "Grain and feed building fixtures",
      ],
    },
    {
      group: "Interior commercial",
      note: "Where light is part of how the space works.",
      items: [
        "Troffer, panel and downlight installation",
        "Linear suspended and surface fixtures",
        "Retail display, track and accent lighting",
        "Office and corridor lighting layouts",
        "Task and bench lighting at the work plane",
        "Colour temperature and rendering selection",
        "Emergency and exit lighting under Article 700",
        "Lighting for production and packing lines",
      ],
    },
    {
      group: "Exterior and site lighting",
      note: "The parts judged in January at five in the afternoon.",
      items: [
        "Parking lot poles, bases and underground feeders",
        "Wall packs, canopy and entrance lighting",
        "Yard, apron and loading area floodlighting",
        "Building facade and sign lighting",
        "Security and camera area lighting",
        "Shielded optics to keep light off neighbours",
        "Pole replacement after impact or storm damage",
        "Photocell and timeclock control outside",
      ],
    },
    {
      group: "Controls and dimming",
      note: "The saving most quotes leave on the table.",
      items: [
        "Occupancy and vacancy sensors in aisles",
        "High and low mode control for warehouse aisleways",
        "Daylight harvesting under skylights",
        "0 to 10 volt and DALI dimming systems",
        "Lighting control panels and contactors",
        "Time based schedules and overrides",
        "Controller driven programs in livestock buildings",
        "Sensor sensitivity and delays set on site",
      ],
    },
    {
      group: "Design and follow through",
      note: "The part that decides whether the rest works.",
      items: [
        "Site survey with readings at the work plane",
        "Mounting height, spacing and beam angle selection",
        "Photometric layout before anything is ordered",
        "Existing circuit and panel capacity review",
        "Utility rebate paperwork support",
        "Zone by zone installation around production",
        "Panel schedule correction after a retrofit",
        "Aiming, commissioning and a final walk through",
      ],
    },
  ],

  facilities: [
    "Warehouses, distribution and cold storage",
    "Pole buildings, shops and equipment sheds",
    "Free stall barns, poultry and swine housing",
    "Manufacturing floors and packing lines",
    "Parking lots, yards and loading areas",
    "Offices, retail and showroom fit outs",
    "Grain and feed handling buildings",
  ],

  audience: [
    {
      title: "Warehouses with dark aisles and a bright floor",
      body:
        "The classic symptom of a layout copied from the old metal halide spacing. It is fixable, and the fix is usually optics and spacing rather than more wattage.",
    },
    {
      title: "Poultry growers running a lighting program",
      body:
        "Where the fixture has to dim deeply and smoothly without flicker, and the driver has to match what the controller puts out. A dimming curve that steps or flickers is a bird behaviour problem, not just an annoyance.",
    },
    {
      title: "Dairies lighting for production and for people",
      body:
        "A free stall barn is lit twice: for a long day program and for somebody walking the alley at two in the morning. Those are different levels and often different circuits.",
    },
    {
      title: "Owners looking at the power bill",
      body:
        "Lighting is the easiest load to cut and the easiest saving to under claim. The fixtures are the headline and the controls are usually the larger number across a year.",
    },
    {
      title: "Businesses judged on how the place looks",
      body:
        "Retail, showrooms and restaurants where colour rendering decides whether product looks right. That is a specification question that costs nothing to get correct and a refit to get wrong.",
    },
    {
      title: "Properties with a dark lot",
      body:
        "A parking area is a liability question before it is a lighting one, and the poles want trenching before the asphalt gets sealed rather than after.",
    },
  ],

  process: {
    title: "How a lighting job runs",
    lines: [
      "A walk through with the lights on, then off, and readings taken at the work plane rather than at the floor.",
      "Mounting heights, rack positions and aisle directions measured.",
      "A layout: fixture, optic, spacing and the foot candle level to expect on the surface that matters.",
      "A look at the existing circuits and panel capacity, since a retrofit frees capacity and a new building has none yet. Background in [how distribution is arranged in a building](/blog/electrical-distribution-in-a-building).",
      "A written scope with fixture counts, controls and what stays as it is.",
      "Install, scheduled around production, a zone at a time.",
      "Aiming and commissioning. Sensor sensitivity and time delays get set on site, not left at the default.",
    ],
  },

  whyUs: [
    {
      title: "You get a layout, not a fixture count",
      body:
        "Mounting height, spacing, optic and the expected level on the surface that matters, worked out before anything is ordered. A price per fixture is not a design, and it is why so many retrofits disappoint.",
    },
    {
      title: "We measure at the work plane",
      body:
        "Readings taken where people actually read labels and handle parts, often vertically on a rack face rather than flat on the slab. An average over an empty floor is the number that flatters a bad layout.",
    },
    {
      title: "We know which fixture survives a barn",
      body:
        "Ammonia gets into driver compartments and corrodes terminals from the inside. A general commercial high bay in that air commonly fails one unit at a time after two or three years, and replacing them at height is where the money goes.",
    },
    {
      title: "Controls are quoted, not quietly dropped",
      body:
        "Occupancy sensing in aisles, daylight zones under skylights, photocell and timeclock together outside. They add a little on day one and are usually the larger saving over a year.",
    },
    {
      title: "We think about the second replacement",
      body:
        "The cost of a high bay is the lift and two people at height, not the box. So the driver has to be one you can still buy in six years, and the warranty should cover labour rather than just the fixture.",
    },
    {
      title: "The schedule gets corrected on the way out",
      body:
        "A retrofit that drops connected load by two thirds leaves the panel schedule even less accurate than it was. We fix it before we leave, which matters the first night somebody has to find a circuit.",
    },
  ],

  faq: [
    {
      q: "Can you reuse the existing fixture locations?",
      a: "Sometimes, and it is worth checking because it saves real money. But metal halide spacing was laid out around a different beam pattern, so reusing it often leaves the aisles dim. We measure before answering.",
    },
    {
      q: "Is a pole barn different from a warehouse?",
      a: "Yes. The structure gives fewer mounting points and longer spans, and if animals or bedding are in it the fixture has to suit that air. What changes is covered in [wiring a pole building from the shell](/projects/pole-barn-from-the-shell).",
    },
    {
      q: "Do you do parking lot and yard lighting?",
      a: "Yes, including poles, bases, underground feeders and controls. Shielded optics matter more outdoors than people expect, because light thrown onto a neighbour is paid for twice. See [the parking lot lighting job](/projects/parking-lot-lighting).",
    },
    {
      q: "Are there rebates in Pennsylvania?",
      a: "Most Pennsylvania utilities run commercial efficiency programs under Act 129 and lighting is usually on the list. Amounts and paperwork change year to year, so confirm the current figures with your utility before building a budget on them.",
    },
    {
      q: "Can it be done without shutting the building down?",
      a: "In nearly every case. We work a zone at a time with temporary lighting where it is needed, and circuits stay live outside the section being worked on.",
    },
    {
      q: "Will new lighting free up capacity in the panel?",
      a: "Usually a useful amount, because the connected load often drops by two thirds. That spare capacity is worth knowing about if you are also thinking about EV charging or new equipment, since it can change whether [a service upgrade](/electrical-service-upgrades) is needed at all.",
    },
    {
      q: "How much better will it actually be?",
      a: "We give you a target level on the surface that matters and we take readings afterwards to show whether it was met. Anybody who will only talk about lumens and wattage is describing the fixture rather than your building.",
    },
  ],

  related: {
    projects: [
      "warehouse-high-bay-lighting",
      "free-stall-barn-lighting",
      "parking-lot-lighting",
      "pole-barn-from-the-shell",
      "poultry-house-ventilation-power",
      "retail-fit-out-wiring",
      "office-remodel-power-lighting",
      "plant-wiring-during-shutdown",
    ],
    articles: [
      "high-bay-led-lighting",
      "barn-wiring-methods",
      "electrical-distribution-in-a-building",
      "nec-547-agricultural-wiring",
      "how-to-read-a-panel-schedule",
    ],
  },

  seeAlso: [
    "commercial-electrical-services",
    "agricultural-electrical-services",
    "electrical-service-upgrades",
    "low-voltage-structured-wiring",
    "electrical-preventive-maintenance",
  ],

  keywords: [
    "commercial led lighting",
    "warehouse lighting installation",
    "pole barn lighting",
    "high bay lighting",
    "led lighting retrofit",
    "parking lot lighting installation",
  ],
};

export default service;
