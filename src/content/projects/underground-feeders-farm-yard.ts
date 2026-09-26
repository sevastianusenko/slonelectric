import type { Project } from "./types";

const project: Project = {
  slug: "underground-feeders-farm-yard",
  title: "Underground feeders between farm buildings, trenched and pulled in",
  category: "Agricultural",
  location: "Lebanon County, PA",
  summary:
    "Replacing overhead farm runs with buried feeders: burial depth and cover, conduit against direct burial, voltage drop, locating services and spare capacity.",
  lead:
    "Overhead wire across a farm yard is one of those things that works until the day it does not. Equipment has got taller, spans have got longer, and runs that were fine in the seventies are now in the way. Putting those feeders underground is straightforward work that goes wrong in predictable ways, so it is worth setting out how it should be done.",

  photos: [
    {
      src: "/photos/projects/underground-feeders-farm-yard-1.webp",
      alt: "Open trench running along a farm building with conduit laid in",
    },
    {
      src: "/photos/projects/underground-feeders-farm-yard-2.webp",
      alt: "Crew working in an open trench alongside a farm building",
    },
    {
      src: "/photos/projects/underground-feeders-farm-yard-3.webp",
      alt: "Farm construction site with a silo and machinery",
    },
  ],

  sections: [
    {
      heading: "Why farms end up with overhead runs that have to go",
      body: [
        "Overhead was the cheap way to get power across a yard and for a long time it was the only practical way. A pole, a span of triplex, a hook on a barn gable, and the shed at the far end had lights. Nobody was doing anything wrong at the time.",
        "Three things caught up with it. Equipment got bigger, so a span that cleared a wagon does not clear a modern chopper with the boom up. Loads grew, so a conductor sized for a few lights now feeds a grain setup or a second barn. And the hardware aged. The trigger is usually a near miss with a machine, a building project that needs the span gone, or a voltage complaint at the far end of the yard, and it often comes alongside a wider [electrical service upgrade](/electrical-service-upgrades), because once the service is being rebuilt the distribution to the buildings is the next question.",
      ],
    },
    {
      heading: "Depth, cover and what the code actually asks for",
      body: [
        "Burial depth is not one number. Table 300.5 of the National Electrical Code sets minimum cover by wiring method and by what sits above the run. Direct buried cable takes the deepest cover, rigid metal and intermediate metal conduit take the shallowest, and rigid nonmetallic conduit sits between them. Anything running under a lane, a driveway or a parking area goes deeper again, and the code is specific about that because a farm lane carries loads no residential driveway ever sees.",
        "Cover is measured from the top of the raceway to finished grade, which matters on a farm where grade moves. A run buried to minimum cover in a yard that gets scraped every spring is not at minimum cover three years later. Where a trench crosses ground that is worked or scraped, extra depth is cheap while the machine is already there.",
      ],
      bullets: [
        "Cover taken from Table 300.5 for the actual wiring method, not from memory",
        "Deeper cover under lanes, yards and anywhere equipment turns",
        "Sand or screened bedding under and over the run where the soil is stony",
        "Warning tape above the run so the next excavator finds it before the bucket does",
        "A sketch of the route kept with the farm records rather than in somebody's head",
      ],
    },
    {
      heading: "Conduit or direct burial",
      body: [
        "Direct burial cable is quicker and cheaper to install. Conduit costs more in materials and labour and is almost always the better decision on a farm. The reason is not protection so much as the future: a feeder in conduit can be pulled out and replaced without opening the trench again, and a spare conduit costs almost nothing while the ditch is open.",
        "Direct burial also has a specific weakness in farm ground. Worked, stony soil full of old drainage tile moves, and cable nicked on installation or stressed by settlement fails years later at a point nobody can find without digging.",
        "Where conduit is used the details matter. Schedule 40 rigid nonmetallic conduit is the normal choice below ground, with Schedule 80 or metal where it comes out of the ground and is exposed to damage. Expansion fittings where the exposed length justifies them, bushings on every end, and generous bends, because a pull that fights the installer is a pull that damages insulation.",
      ],
    },
    {
      heading: "Voltage drop is the calculation that gets skipped",
      body: [
        "Farm runs are long. Four hundred, six hundred, a thousand feet from the distribution point to a far building is ordinary, and at those distances the conductor size that satisfies the ampacity table is often not the conductor size the load needs.",
        "The code treats voltage drop as a recommendation rather than a requirement, with informational notes suggesting around three percent on a branch circuit and five percent overall. Those are the right numbers to design to, and the reason is motors. Almost everything at the far end of a farm feeder is a motor, and a motor at reduced voltage draws more current, makes less torque and runs hotter. A fan or a pump on an undersized long run does not fail immediately. It fails two years early, and nobody connects the two events.",
        "Running the calculation takes a few minutes and usually means going up one or two conductor sizes. That is small money inside a trenching job and an expensive retrofit afterwards. The same reasoning governs long runs inside a building, which is why it comes up again in [poultry house ventilation power](/projects/poultry-house-ventilation-power).",
      ],
    },
    {
      heading: "Digging on a working farm",
      body: [
        "Before a machine touches the ground, everything already buried has to be located. Pennsylvania One Call covers the utility side and that call is a legal requirement, but on a farm the utilities are the smaller half of the problem. Private water lines, manure lines, gas to a dryer, abandoned direct buried feeders, drainage tile and lagoon piping are all invisible and none of them show up in a locate. That means asking the farmer, who usually knows more than any record, and potholing where the answer is uncertain. Cutting a tile line is worse than cutting a cable, because the damage appears as a wet field the following spring.",
        "Route selection then works around the farm rather than the other way round. Trenches get kept out of turning areas, off the line traffic takes between buildings, and away from where water runs. A trench that follows a natural drainage line becomes a french drain, and a feeder sitting in water year round has a limited life. Backfill matters too: a poorly compacted trench across a lane settles into a rut and then gets driven on until the run is shallower than it was designed to be.",
      ],
    },
    {
      heading: "Pulling in spare capacity while the trench is open",
      body: [
        "The trench is the expensive part of the job. Conduit, conductors and the labour to pull them are a fraction of the cost of opening and closing the ground, so the only sensible time to think about the next ten years is while the ditch is still open.",
        "That means two things in practice. Size the feeder for what the building might carry rather than what it carries today, because a larger conductor in the same trench costs a small percentage more and a second trench costs everything again. And lay a spare conduit alongside. It will get used. Farms add loads constantly, and a spare raceway between two buildings turns a future project from an excavation into an afternoon.",
        "The same applies to everything that is not power. Data between buildings, camera runs, alarm and dialer circuits, bin level signals and controller networks all want their own pathway kept clear of the power conductors, and a conduit put in for that now is the cheapest [low voltage and structured wiring](/low-voltage-structured-wiring) anyone will ever install. Done this way the job becomes the distribution backbone for the farm rather than a repair. It is the natural companion to [rebuilding the farm service entrance](/projects/farm-service-entrance-upgrade), and it makes later work such as [grain system power and controls](/projects/grain-system-power-controls) straightforward rather than another patch.",
      ],
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Low voltage and structured wiring", href: "/low-voltage-structured-wiring" },
  ],

  related: ["farm-service-entrance-upgrade", "grain-system-power-controls", "poultry-house-ventilation-power"],

  keywords: [
    "underground feeder",
    "farm electrical",
    "trenching",
    "voltage drop",
    "agricultural electrician",
  ],
};

export default project;
