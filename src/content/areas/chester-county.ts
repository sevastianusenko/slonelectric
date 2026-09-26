import type { Area } from "./types";

const area: Area = {
  slug: "chester-county",
  county: "Chester County",
  title: "Electrician in Chester County PA | Mushroom Houses, Farms & Plants",
  h1: "Electrical service across Chester County",
  summary:
    "Agricultural, commercial and industrial electrical service across Chester County PA: mushroom houses, farms, plants and commercial buildings. Call (717) 821-9166.",
  lead:
    "Chester County is the run southeast of us, and one kind of building there is the reason we know it well. The country's largest concentration of mushroom farms sits around Kennett Square, and a growing room is electrically much closer to a poultry house than to anything else: controlled climate, constant humidity, washdown, and a crop that does not survive a long outage.",
  drive: "Honey Brook and the western edge are 35 to 45 minutes. Kennett Square and the south are an hour or more.",

  hero: {
    src: "/photos/services/control-panels-machine-wiring.webp",
    alt: "Control panel built and wired by Slon Electric",
  },

  towns: [
    {
      name: "Honey Brook",
      note: "The closest part of the county to us, plain sect farm country continuous with eastern Lancaster.",
    },
    {
      name: "Parkesburg",
      note: "Small industrial units and farm ground, with older borough commercial stock in the middle.",
    },
    {
      name: "Coatesville",
      note: "Industrial history and the buildings left from it, now carrying uses they were never wired for.",
    },
    {
      name: "Downingtown",
      note: "Commercial and light industrial along the 30 corridor, plus fit outs and remodels through the borough.",
    },
    {
      name: "Oxford",
      note: "Dairy, poultry and mushroom operations in the southwest of the county.",
    },
    {
      name: "Kennett Square",
      note: "Mushroom growing rooms and the packing and cold storage that go with them.",
    },
    {
      name: "West Chester",
      note: "Offices, retail and restaurants, where work fits around trading hours rather than around a crew.",
    },
  ],

  sections: [
    {
      heading: "A mushroom house is a controlled environment building",
      body: [
        "Growing rooms run at high humidity with tight temperature control, get washed between crops, and depend on air handling that cannot simply stop. Everything difficult about wiring a poultry house applies here too, for the same physical reasons.",
        "That means enclosures and fittings selected for wet and corrosive conditions rather than from a general commercial catalogue, fixtures that can be washed and survive it, and controls wiring kept where moisture cannot reach the terminations. Equipment chosen on price lasts a couple of years in that air and then starts failing one unit at a time.",
        "The reasoning behind those choices is set out in [choosing a wiring method for agricultural buildings](/blog/barn-wiring-methods), and where livestock or dust bring Article 547 into it, [what that article requires](/blog/nec-547-agricultural-wiring) is worth reading first.",
      ],
    },
    {
      heading: "Air handling is the load that cannot wait",
      body: [
        "On a farm the critical list is short and specific, and it is what standby power should be sized around rather than the size of the service. In a growing operation it is air handling, circulation and whatever holds temperature, plus the cold storage on the packing side.",
        "Sizing from the service is how operations end up paying for a generator twice as large as they need. Sizing from running load alone is how they end up with one that will not start the fans. Both mistakes are avoided by writing the load list down first, which is the argument in [starting load against running load](/blog/generator-sizing-starting-vs-running).",
      ],
    },
    {
      heading: "Honey Brook and the farm ground either side of the line",
      body: [
        "The western edge of the county around Honey Brook is continuous with eastern Lancaster: the same dairy and poultry operations, a large plain sect population, and the same question about what any given operation uses and does not.",
        "That end is close enough to be an ordinary run for us, and it is continuous with [the work we do across Lancaster County](/service-area/lancaster-county). Further south and east the drive gets long, so we take planned work there rather than same day service calls, and we say which is which when you ring.",
      ],
    },
  ],

  demand: [
    {
      title: "Growing room and packing house wiring",
      body:
        "Air handling, circulation and control circuits, in methods and enclosures that survive humidity and washdown.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Standby power for air handling",
      body:
        "Sized from the loads that cannot stop, with automatic transfer and an alarm that reaches somebody at night.",
      service: "standby-generator-installation",
    },
    {
      title: "Controls and sensor wiring",
      body:
        "Temperature, humidity and airflow sensing, kept away from drive output and terminated where moisture cannot reach.",
      service: "low-voltage-structured-wiring",
    },
    {
      title: "Cold storage and refrigeration circuits",
      body:
        "Compressors, condensers and the monitoring that tells you a room is warming before the crop does.",
      service: "commercial-electrical-services",
    },
    {
      title: "Motor control and drives",
      body:
        "Fans, pumps and handling equipment, with the overload sized to the nameplate rather than to the wire.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Farm work around Honey Brook",
      body:
        "Dairy and poultry on the Lancaster line, the same work we do every week on the other side of it.",
      service: "agricultural-electrical-services",
    },
  ],

  facilities: [
    "Mushroom growing and packing houses",
    "Cold storage and refrigerated rooms",
    "Dairy barns and poultry houses",
    "Light industrial and fabrication units",
    "Commercial units, offices and restaurants",
    "Pole buildings and equipment storage",
    "Older borough buildings changing use",
  ],

  faq: [
    {
      q: "Do you work on mushroom farms?",
      a: "Yes. Electrically a growing room has more in common with a poultry house than with a warehouse: controlled climate, constant humidity, washdown and air handling that cannot stop. That is work we do every week in another form.",
    },
    {
      q: "How far into Chester County do you go?",
      a: "Honey Brook and the western edge are an ordinary run. Kennett Square and the southern end are an hour or more, so those are planned jobs rather than same day service calls.",
    },
    {
      q: "Why do fixtures keep failing in our growing rooms?",
      a: "Almost always because they were chosen from a general catalogue. Humidity and washdown get into driver compartments and corrode terminations from the inside, so the fixture has to be selected for the room rather than the price.",
    },
    {
      q: "What should a generator cover on an operation like ours?",
      a: "The short list of loads that cost you something within the hour: air handling, circulation, whatever holds temperature and the cold storage. Everything else can usually wait, and leaving it off makes the set smaller and cheaper.",
    },
    {
      q: "Do you take emergency calls in Chester County?",
      a: "For customers we already work with, yes. For a first call an hour away in the middle of the night, somebody local will reach you sooner and we will tell you that rather than let you wait on us.",
    },
  ],

  related: {
    projects: [
      "poultry-house-ventilation-power",
      "farm-standby-generator",
      "grain-system-power-controls",
      "machine-connection-motor-control",
    ],
    articles: [
      "barn-wiring-methods",
      "generator-sizing-starting-vs-running",
      "nec-547-agricultural-wiring",
    ],
  },

  neighbours: ["lancaster-county", "berks-county"],

  keywords: [
    "electrician chester county pa",
    "mushroom farm electrician",
    "agricultural electrician chester county",
    "commercial electrician west chester pa",
    "electrician kennett square pa",
  ],
};

export default area;
