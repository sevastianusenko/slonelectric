import type { Project } from "./types";

const project: Project = {
  slug: "warehouse-high-bay-lighting",
  title: "Warehouse high bay retrofit, laid out for the aisles",
  category: "Commercial",
  location: "Lancaster County, PA",
  summary:
    "High bay LED retrofit in a warehouse: fixture layout against the racking, beam angle, light levels for picking and bulk storage, aisle controls, maintenance.",
  lead:
    "A warehouse is not lit for the floor. It is lit for the faces of the racking, for the labels people read at eye level and above it, and for the aisles where the work actually happens. Most high bay retrofits we get called into have the fixtures in the wrong place, which is why the building still feels dark after somebody has already spent money on it.",

  photos: [
    {
      src: "/photos/projects/warehouse-high-bay-lighting-1.webp",
      alt: "Warehouse interior with pallet racking and yellow guard rails",
    },
    {
      src: "/photos/projects/warehouse-high-bay-lighting-2.webp",
      alt: "Overhead conduit and sprinkler pipework under a warehouse roof deck",
    },
  ],

  sections: [
    {
      heading: "Lighting the floor instead of the racking",
      body: [
        "The quickest way to waste a lighting budget in a warehouse is to lay fixtures out on a grid that suits the roof steel. It looks tidy on a drawing and it produces an even carpet of light on a slab that nobody is looking at. Once racking goes in, those fixtures sit over the tops of the racks, and the light meant for the aisle is stopped by the beams, the pallets and the load itself.",
        "With twenty five foot racking and fixtures at thirty five or forty feet, an aisle is a deep, narrow canyon. Light arriving at an angle lands on the top of the rack and goes no further, so the lower shelves, usually where the slow moving stock and the worn labels live, end up the darkest part of the building.",
        "The first question on a retrofit is therefore not how many lumens. It is where the aisles run, how tall the racking is, and whether either of those will change.",
      ],
    },
    {
      heading: "Beam angle, mounting height and fixture choice",
      body: [
        "Mounting height and aisle width together decide the optic. A wide beam fixture, in the region of a hundred and twenty degrees, is right over open floor, staging areas and shipping doors where nothing blocks the spread. Put the same fixture over a narrow aisle at forty feet and most of its output lands on rack tops. Aisles want a narrow distribution, roughly sixty degrees or tighter, or a linear aisle optic that throws along the run rather than across it.",
        "Fixture shape matters as much as wattage. Round high bays are efficient over open areas and easy to lay out. Linear high bays mounted with their length along the aisle give a far more even run of light down a picking lane and put more of it on the vertical rack face, which is the surface people are actually reading.",
        "Mounting height sets sensible spacing as well. In an open bay it runs at roughly one to one and a half times that height, tightened where racking is tall. Fewer, brighter fixtures save on count and cost you uniformity.",
      ],
      bullets: [
        "Rows centred on the aisles, not on the roof bays",
        "Narrow or linear optics over racking, wide optics over open floor",
        "Linear fixtures oriented along the aisle run rather than across it",
        "Spacing set from mounting height, not from the structural grid",
        "Fixtures kept clear of forklift masts, sprinkler heads and rack uprights",
      ],
    },
    {
      heading: "How much light, and where it gets measured",
      body: [
        "Published guidance separates storage by how much work happens in it. Inactive bulk storage, where a lift truck moves whole pallets and nobody reads anything small, is commonly designed around five foot candles, and active storage with larger items sits nearer ten. Small item picking generally lands in the twenty to thirty foot candle band, and loading docks are usually treated the same.",
        "The number that gets missed is the vertical one. Horizontal foot candles on the floor of an aisle say almost nothing about whether a picker can read a label at shoulder height or scan a barcode on the top shelf. Vertical illuminance on the rack face is the useful measure in a picking aisle, and it is exactly what a floor based layout fails to deliver.",
        "Transitions matter too. Coming off a bright dock apron into a dim building, or the other way at night, the eye takes time to adjust, and that adjustment happens while a lift truck is moving. Keeping the step between adjacent zones modest is a safety decision, and it carries straight over to the [site and parking lot lighting](/projects/parking-lot-lighting) outside the doors.",
      ],
    },
    {
      heading: "Controls that follow the work",
      body: [
        "Warehouse aisles are empty most of the time, which makes them the best possible case for occupancy sensing. Fixture integrated sensors that hold an aisle low and bring it to full when somebody enters cut a large share of the lighting energy. Current energy codes call for automatic reduction in aisle and open storage areas, so on most jobs this is no longer optional.",
        "Daylight harvesting belongs in the same conversation wherever there are skylights or clerestory glazing. Fixtures under the daylit zone need their own control group, because one sensor averaging a bright bay with a dark interior bay satisfies neither.",
        "What decides whether controls survive is commissioning. Time delays, low level settings and daylight set points need to be set for the building rather than left on factory defaults, and written down where the facilities manager can find them. A sensor that drops an aisle to a quarter output while a picker is still in it gets taped over within a week. We set this up as part of the [commercial LED lighting](/commercial-led-lighting) work rather than leaving it to somebody else.",
      ],
    },
    {
      heading: "Getting power to the deck properly",
      body: [
        "Most of a retrofit happens above the racking rather than in it. Circuits run at deck level in conduit or plug in busway, with drops or whips to each fixture. Busway earns its keep where the layout will change, because a fixture can be moved a bay over without anyone cutting into a raceway.",
        "Support is where corners get cut. Raceway has to be carried by the building structure, not hung off sprinkler piping, ductwork or another trade's hangers, and the code is explicit about it. A sprinkler line loaded with somebody else's conduit is a life safety problem, not a housekeeping one.",
        "Circuiting deserves a minute of thought. Alternating adjacent fixtures between two circuits leaves an aisle at half light instead of dark when a breaker trips, which matters at three in the morning with a lift truck moving. If the panel feeding all of this is full or unlabelled, that gets sorted first, which is the work described in [the electrical room and feeder job](/projects/commercial-panel-room-feeders).",
      ],
    },
    {
      heading: "The maintenance case at forty feet",
      body: [
        "The strongest argument for LED in a high bay has little to do with the energy bill. Every lamp change at forty feet needs a lift, a clear path for that lift, and usually a shift when the aisle is empty. In a full building that means weekend work and moving stock before anyone touches a fixture.",
        "Two things decide how long that reprieve lasts. The first is heat, because air under a metal roof deck in July is far hotter than air at the floor and driver life falls off quickly at elevated ambient temperature. The second is surge, since lighting circuits see every switching transient on the service and protection at the panel is cheap next to a lift and a crew, which is the reasoning behind [surge protection at the service](/projects/surge-protection-service).",
        "Keeping a few spare fixtures and drivers on site finishes the job, because product lines change every couple of years. A yearly look at the lighting alongside the rest of the [electrical preventive maintenance](/electrical-preventive-maintenance) catches failures while a lift is already in the building.",
      ],
    },
  ],

  services: [
    { label: "Commercial LED lighting", href: "/commercial-led-lighting" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["parking-lot-lighting", "commercial-panel-room-feeders", "surge-protection-service"],

  keywords: [
    "warehouse lighting installation",
    "high bay lighting",
    "led lighting retrofit",
    "commercial lighting installation",
    "outdoor lighting contractor",
  ],
};

export default project;
