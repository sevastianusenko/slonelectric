import type { Area } from "./types";

const area: Area = {
  slug: "lancaster-county",
  county: "Lancaster County",
  title: "Electrician in Lancaster County PA | Farm, Commercial & Industrial",
  h1: "Electrical service across Lancaster County",
  summary:
    "Agricultural, commercial and industrial electrical service across Lancaster County PA: poultry houses, dairy barns, plants and fit outs. Call (717) 821-9166.",
  lead:
    "Lancaster County is where most of our agricultural work happens, and it is the reason this business is shaped the way it is. More poultry farms sit here than in any other county in Pennsylvania, and the county leads the state for milk production as well. Those buildings do not tolerate an electrician who learned the trade in offices.",
  drive: "Most of the county is 20 to 40 minutes out, and the northern end is closer than that.",

  hero: {
    src: "/photos/services/agricultural-electrical-services.webp",
    alt: "Free stall dairy barn lit by Slon Electric",
  },

  towns: [
    {
      name: "Ephrata",
      note: "Poultry and dairy on every side of it, plus light industrial along 322. One of the places we are called to most.",
    },
    {
      name: "Lititz",
      note: "Food manufacturing, snack production and commercial fit outs, with farm work starting the moment you leave town.",
    },
    {
      name: "New Holland",
      note: "Equipment manufacturing and some of the densest farmland in the county, much of it plain sect.",
    },
    {
      name: "Denver",
      note: "Warehousing and distribution off the turnpike interchange, with poultry houses on the roads behind it.",
    },
    {
      name: "Manheim",
      note: "Dairy, grain handling and the auction traffic that comes with them, plus commercial work along 72.",
    },
    {
      name: "Lancaster",
      note: "City work: retail fit outs, restaurants, offices and older buildings with services that ran out of room decades ago.",
    },
    {
      name: "Elizabethtown",
      note: "The western end of the county, mixed farm and commercial, and the shortest hop into Dauphin.",
    },
  ],

  sections: [
    {
      heading: "The county that decided what we do",
      body: [
        "Lancaster County ranks first in Pennsylvania for poultry and for milk, and roughly a quarter of the state's poultry farms are inside its lines. That concentration changes what an electrician gets asked for here. In most of the country a farm call is an occasional job. Here it is the week.",
        "It also means the buildings have been wired, rewired and extended by a lot of different hands over a long time. Very little of it was designed. A house gets a controller upgrade, a barn gets an addition, a second shop goes up off whichever panel was closest, and twenty years later somebody asks why a motor at the far end will not start on a cold morning.",
        "That is usually a distribution problem rather than a fault, and the arrangement that fixes it is described in [the distribution point on a farm](/blog/farm-distribution-point).",
      ],
    },
    {
      heading: "Plain sect farms, and what changes on them",
      body: [
        "A large share of the farms in the eastern half of the county are Old Order. Some have no utility connection at all, some take power only in specific buildings, and many run equipment from diesel, hydraulic or air systems instead. What any given operation permits is decided by its own church district, not by a rule we can look up.",
        "So the first conversation is about what the operation actually uses and what it does not, and then we work to that. Generators, inverters and 12 volt systems are ordinary here rather than unusual, and so are buildings where the only wiring is in the milk house.",
        "Nobody should be quoting that work from a template, and nobody should be arriving to find out. We ask first.",
      ],
    },
    {
      heading: "The other half of the county",
      body: [
        "Away from the farms this is a busy commercial county: distribution off the turnpike at Denver and Adamstown, food manufacturing around Lititz, retail and restaurants through Lancaster city, and a long list of older buildings that have changed use two or three times.",
        "Change of use is where capacity runs out. A retail unit becoming a restaurant or a warehouse taking a production line adds load that the original service was never calculated for, which is worked through on [the service upgrades page](/electrical-service-upgrades). What a fit out involves from the landlord shell onward is in [the retail fit out write up](/projects/retail-fit-out-wiring).",
      ],
    },
  ],

  demand: [
    {
      title: "Poultry house work",
      body:
        "Ventilation and controller circuits, alarms that actually reach a phone, lighting programs and the standby power behind them.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Parlour and bulk tank wiring",
      body:
        "Staged between milkings, because the herd does not wait for us. Cooling and vacuum are the circuits that decide the day.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Standby generators",
      body:
        "Sized from the loads that cannot stop rather than from the size of the service, which usually makes the set smaller than expected.",
      service: "standby-generator-installation",
    },
    {
      title: "Service and panel upgrades",
      body:
        "Yards that grew one building at a time, and commercial buildings on their third use with the original service.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Barn and warehouse lighting",
      body:
        "Fixtures chosen for ammonia and washdown rather than from a general catalogue, and laid out to the aisles.",
      service: "commercial-led-lighting",
    },
    {
      title: "Emergency calls at night",
      body:
        "Ventilation stopped, a phase down, a cooler warming. The phone is covered around the clock across the county.",
      service: "emergency-electrician",
    },
  ],

  facilities: [
    "Broiler, layer and pullet houses",
    "Free stall and tie stall dairy barns",
    "Milking parlours and bulk tank rooms",
    "Grain dryers, legs and bin systems",
    "Food manufacturing and packing plants",
    "Distribution warehouses off the turnpike",
    "Retail units, restaurants and offices",
  ],

  faq: [
    {
      q: "How far into Lancaster County do you actually go?",
      a: "All of it, and the northern half is close enough that we are there regularly. Quarryville and the southern end are a longer run, so for a small service call down there we will tell you honestly whether somebody closer makes more sense.",
    },
    {
      q: "Do you work on Old Order farms?",
      a: "Yes, and the first thing we ask is what the operation uses and what it does not, because that varies by district rather than by a rule anybody can look up. Generator, inverter and 12 volt work is ordinary for us.",
    },
    {
      q: "Can you work between flocks or between milkings?",
      a: "That is the normal way farm work gets scheduled here. Tell us the window when you call and we will scope the job to fit it, or split it into stages that each finish cleanly.",
    },
    {
      q: "We are a commercial building in Lancaster city. Is that different?",
      a: "Different problems, same crew. Older stock, services that ran out of room, panel directories written in pencil by somebody who left years ago. We re identify circuits as we work, for the reasons in [how to read a panel schedule](/blog/how-to-read-a-panel-schedule).",
    },
    {
      q: "Do you pull permits in Lancaster County?",
      a: "Yes. Municipalities here use different third party inspection agencies, so the application goes to whichever one covers your township. We handle that and book the inspections against the build sequence.",
    },
  ],

  related: {
    projects: [
      "free-stall-barn-lighting",
      "poultry-house-ventilation-power",
      "dairy-parlour-bulk-tank-wiring",
      "retail-fit-out-wiring",
    ],
    articles: [
      "nec-547-agricultural-wiring",
      "stray-voltage-on-dairy-farms",
      "farm-distribution-point",
    ],
  },

  neighbours: ["lebanon-county", "berks-county", "chester-county", "dauphin-county", "york-county"],

  keywords: [
    "electrician lancaster county pa",
    "commercial electrician lancaster pa",
    "agricultural electrician lancaster county",
    "farm electrician lancaster pa",
    "industrial electrician lancaster county",
  ],
};

export default area;
