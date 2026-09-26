import type { Project } from "./types";

const project: Project = {
  slug: "parking-lot-lighting",
  title: "Parking lot lighting, from the pole base up",
  category: "Commercial",
  location: "Lebanon County, PA",
  summary:
    "Parking lot and site lighting done properly: pole foundations, underground feeders, voltage drop, photocell control, light trespass, uniformity, cameras.",
  lead:
    "Site lighting looks like the simplest job on a commercial property and it is the one we get called back to most often. Poles lean, bases crack, circuits trip after the first wet autumn and half the lot is dark. Almost all of it traces back to what happened below grade before anyone set a pole.",

  photos: [
    {
      src: "/photos/projects/parking-lot-lighting-1.webp",
      alt: "Concrete lighting pole base on a parking lot",
    },
    {
      src: "/photos/projects/parking-lot-lighting-2.webp",
      alt: "Decorative street lighting pole lit at dusk",
    },
  ],

  sections: [
    {
      heading: "The base is the part that fails",
      body: [
        "A pole base is a small piece of structural concrete carrying a long lever arm in wind, and it decides whether the installation lasts twenty years or two. Diameter, depth and reinforcement come from the pole manufacturer's requirements read against the actual soil, not from what the last contractor poured. In Pennsylvania the base also has to get below the frost line, or freeze and thaw will do the work for you.",
        "The anchor bolt pattern and the conduit sweeps have to be set before the pour and held square while it cures. A template and a few minutes of care at that stage save a pole that never quite stands straight. Bringing the top of the base above grade keeps the plate out of standing water and road salt, which is what eats anchor bolts.",
        "Grounding belongs in the same pour. A pole is a tall metal object in an open lot and needs a proper equipment ground back to the source, usually with a rod at the base. After setting, the nuts get a grout pad that still lets water drain rather than a full ring that traps it.",
      ],
      bullets: [
        "Base sized from the pole and the soil, and taken below frost depth",
        "Anchor bolt template set square and held during the pour",
        "Conduit sweeps placed inside the cage, not chased in afterwards",
        "Base top above grade to keep the plate out of water and salt",
        "Equipment ground carried through, with a rod at the base",
        "Bollards or curbing where a pole sits in a traffic path",
      ],
    },
    {
      heading: "Getting power across the lot",
      body: [
        "Feeders to site lighting run underground and the code sets a minimum cover for each wiring method, with the deeper figure applying under driveways and parking areas because that is where vehicle loads and future digging both live. Warning tape above the run, sweeps rather than tight bends at each pole and a hand hole where circuits split are small costs now and large ones later.",
        "The single most valuable thing on a site job is to sleeve under paving before it goes down. Once a lot is surfaced, every future circuit means a saw cut and a patch that never matches, so spare conduit across the drive lanes pays for itself the first time anything changes. That includes capacity for [EV charging](/projects/ev-charging-commercial-site), which almost every commercial lot ends up adding.",
        "Splices belong in accessible hand holes, not buried in a trench, and conductors need to be identified at each pole so a fault can be isolated without opening the whole lot. This is the same discipline as any other [underground feeder](/projects/underground-feeders-farm-yard) work, and it is what makes a lot serviceable years later.",
      ],
    },
    {
      heading: "Voltage drop over long runs",
      body: [
        "Site circuits are long by nature. A run from an electrical room to the far corner of a lot can be several hundred feet, and a conductor sized only by ampacity leaves the last pole dimmer than the first. The usual design target keeps the drop near three percent on a branch circuit and five percent overall, which on site lighting means going up a size or two in conductor.",
        "Where a building has a three phase service available, running site lighting at the higher voltage solves the problem outright. The same load at 277 volts draws less current than at 120, which means smaller conductors over long distances and fewer circuits back at the panel.",
        "The layout helps too. Splitting the lot into several circuits from a single point rather than daisy chaining every pole on one run keeps the drop manageable, and it means a fault takes out a section of the lot instead of all of it. Where the existing service will not support the new load, that becomes an [electrical service upgrade](/electrical-service-upgrades) conversation before the trench is dug.",
      ],
    },
    {
      heading: "Uniformity beats brightness",
      body: [
        "The complaint we hear is almost never that a lot is too dim on average. It is that there are bright pools under the poles and dark gaps between them. The eye adapts to the brightest thing in view, so a lot with hot spots feels less safe than one lit evenly to a lower level.",
        "That is why parking lot design is written around ratios rather than a single number. Typical guidance holds the average to minimum ratio near four to one for a general lot, with tighter figures where security matters. Achieving it is mostly pole height against spacing, since a taller pole covers more ground evenly while a short pole at the same spacing leaves gaps.",
        "Fixture distribution does the rest. The right optic for a pole at the edge of a lot is not the one for a pole on a centre island, and choosing correctly keeps light on pavement rather than on grass and building walls.",
      ],
    },
    {
      heading: "Control, trespass and the neighbours",
      body: [
        "Most lots run on a photocell, and most should run on a photocell plus a time control. The photocell decides when it is dark and the time control decides how late the lot stays at full output, which is where the saving is. Splitting the lot so a security level stays on overnight while general lighting steps back is simple when planned, and impossible when every pole is on one contactor.",
        "Light trespass is the other half. A neighbour with light in a bedroom window, or a township with a limit written into its zoning ordinance, will bring the job back regardless of how good the lot looks. Full cutoff fixtures with proper backlight control aim light down and forward, and house side shields deal with poles that sit close to a boundary.",
        "Colour temperature matters more here than people expect. Warmer sources, around three thousand kelvin and below, are far less objectionable to neighbours and to wildlife than the blue white sources sold on efficiency figures alone. The same fixture families and controls show up in our [commercial LED lighting](/commercial-led-lighting) work indoors.",
      ],
    },
    {
      heading: "What an insurer and a camera each want",
      body: [
        "An insurer or a risk assessor asks one question after an incident: was the lot lit to a recognised level and was it maintained. That is a documentation question as much as a lighting one, so a photometric layout and a record of what was installed belong in the building file.",
        "A camera wants something different. Cameras see contrast, not lumens, so a lot with glare and deep shadow produces footage where a face is a silhouette. What helps is even light, light on vertical surfaces at head height rather than only on pavement, and no fixture aimed into a lens. Getting whoever installs the cameras to compare notes before poles are set costs nothing and is rarely done.",
        "After that it is maintenance. Lenses haze, drivers fail and a lot quietly loses a third of its light without anyone noticing, which is exactly the argument for including site lighting in the yearly [preventive maintenance](/electrical-preventive-maintenance) round rather than waiting for a complaint.",
      ],
    },
  ],

  services: [
    { label: "Commercial LED lighting", href: "/commercial-led-lighting" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical service upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["ev-charging-commercial-site", "warehouse-high-bay-lighting", "underground-feeders-farm-yard"],

  keywords: [
    "parking lot lighting installation",
    "outdoor lighting contractor",
    "commercial lighting installation",
    "led lighting retrofit",
    "underground feeder",
  ],
};

export default project;
