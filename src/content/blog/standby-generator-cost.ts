import type { Article } from "./types";

const article: Article = {
  slug: "standby-generator-cost",
  question: "What does a standby generator actually cost, and why are the quotes so far apart?",
  title: "What a standby generator costs: the components of the price and why two quotes are never the same",
  category: "Standby power",
  summary:
    "Standby generator pricing broken into components: why the set is often under half the bill, what scales with size and distance, and why sizing decides the total.",
  answer:
    "On commercial and agricultural work the generator set itself is usually less than half of what the job costs. The rest is the transfer equipment, a pad, the fuel supply, the conductors between the set and the building, any distribution work needed to separate what has to run from what can wait, the permit and the commissioning. As an order of magnitude, a small air cooled set close to the building lands in the mid five figures installed, and anything with a bulk fuel tank and service entrance rated switchgear goes well past that. The largest lever on the total is whether the size came from a real load list or from the amp rating stamped on the service.",
  lead:
    "Two contractors can quote the same building for the same thing and be twenty thousand dollars apart without either of them being dishonest. Standby power is a job where the equipment is easy to price and everything around it is where the money lives.",

  photos: [
    {
      src: "/photos/blog/gen-cost-1.webp",
      alt: "Standby generator set installed beside a building with transfer equipment",
      caption: "The set is the line everybody prices. It is rarely the line that decides the total.",
    },
    {
      src: "/photos/blog/ext-generator.webp",
      alt: "Diesel generator set in an outdoor enclosure",
      caption: "Enclosure, pad, fuel and conductors are all separate lines behind a single kilowatt number. Photo by",
      credit: {
        author: "Gregsedits",
        href: "https://commons.wikimedia.org/wiki/File:Caterpillar_(Olympian)_Generator_Set.jpg",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: "/photos/blog/gen-cost-2.webp",
      alt: "Labelled automatic transfer switches with arc flash warning label",
      caption: "Transfer equipment scales with amps and with rating, not with the size of the engine.",
    },
    {
      src: "/photos/blog/ext-transfer.webp",
      alt: "Generator transfer switch mounted on a wall",
      caption: "A small switch on a short run and a service entrance rated switch with bypass are different brackets. Photo by",
      credit: {
        author: "Robert.Harker",
        href: "https://commons.wikimedia.org/wiki/File:Generator_Transfer_Switch.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "The set is the part everyone prices, and it is not the big number",
      body: [
        "Almost every enquiry opens with a kilowatt figure and a request for a price. The set is the one item with a catalogue number, so it feels like the thing being bought. On a finished installation it commonly lands between a third and a half of the total.",
        "The rest is site work, and site work has no catalogue number. Concrete, trenching, conductors, the transfer switch, the fuel supply, the distribution changes inside the building, the permit, and the day spent commissioning the set under load. None of that is visible in a kilowatt price, which is why two quotes for the same machine differ by double. A price found online plus a guess at labour is not the installed cost, and the gap is not markup. A [standby generator installation](/standby-generator-installation) is a construction job with an engine in it.",
      ],
    },
    {
      heading: "The components of the price, and which ones scale",
      body: [
        "The only sensible way to compare two quotes is line by line, asking which components each contractor put inside the number. Most of the spread sits in two or three lines rather than spread evenly.",
        "Some lines are close to fixed for a size band: the pad, the permit, the commissioning. Others scale with kilowatts, with amps, or with distance. If the transfer equipment is still an open question, [the differences between transfer switch types](/blog/transfer-switch-types) will move that line more than most people expect.",
      ],
      callout: {
        title: "Where the money goes on a commercial or farm standby installation",
        lines: [
          "Generator set. Scales hard with kilowatts. An air cooled set of 20 to 25 kW is a low five figure item, a 100 kW three phase diesel is mid five figures, and 400 kW and above is six figures before installation.",
          "Transfer equipment. Scales with amps and with rating. A 200 A automatic transfer switch is a four figure line; an 800 A service entrance rated switch with bypass isolation is several times that.",
          "Concrete pad. Roughly fixed inside a size band. A reinforced pad 4 to 6 inches thick for a mid size set is a low four figure line, more if the ground has to be built up or frost depth dictates footings.",
          "Conductors and raceway between set and building. Scales with distance. At 200 feet you are into a trench, a possible bore under a lane, and conductors sized for voltage drop rather than the breaker.",
          "Fuel supply. Diesel: the base tank is often in the set, a bulk tank is not. Natural gas: the gas run and often a meter change, which is a utility project with its own lead time. Propane: tank, pad and regulator set.",
          "Distribution work inside the building. Either zero or the largest line on the page, because splitting a building into generator loads and the rest means a separate board, feeders to it, and every circuit traced.",
          "Permit and inspection. Fixed and small. In Pennsylvania this is a Uniform Construction Code permit through the municipality, or through Labor and Industry where it has opted out.",
          "Commissioning and load bank test. Half a day to a day on site, and above about 100 kW it is the only proof the set carries what it was sold to carry.",
          "Reserve for what is found on site. Ten to fifteen percent on an existing building: an undersized gas line, a grounding electrode system that never met Article 250, no room for the feeder.",
        ],
      },
    },
    {
      heading: "Sizing from a load list, not from the size of the service",
      body: [
        "The most expensive mistake in standby power is sizing the set to the service instead of to the load. A farm with an 800 amp service does not need 800 amps of generator. It needs what the equipment that must keep running draws, plus headroom to start the largest motor.",
        "[The NDSU material on standby electric generators](https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators) puts the first step plainly: decide what you must keep running. It separates full load systems carrying the whole farmstead from part load systems carrying only essential equipment, and that gap is a whole price bracket. The same page notes that tractor driven units run at roughly half the cost of engine driven sets.",
        "Oversizing costs twice, at purchase and every month afterwards, because a diesel that lives at ten percent of nameplate does not stay healthy. Undersizing costs once, at the moment the building needs it. The way out of both is a load list with running and starting figures, which is [why a generator that looks big enough still stalls](/blog/generator-sizing-starting-vs-running).",
      ],
    },
    {
      heading: "Diesel, natural gas or propane",
      body: [
        "Diesel is the default above about 100 kW. The sets are cheaper per kilowatt at size, they accept block load quickly, and the fuel is already on site. The cost is that you now own fuel: a tank, containment, a fill contract, and a product that degrades if it sits.",
        "Natural gas removes the tank and the fuel management entirely, which is why it dominates commercial buildings inside a service area. The catch is upstream. A gas run sized for a generator is nothing like the run feeding a unit heater, and the meter or regulator frequently has to change, which is a utility project with a lead time and a bill outside the electrical contract.",
        "Propane sits between the two. No utility dependency and no diesel storage problem, but propane carries less energy per gallon, so the tank is bigger for the same run time and the tank, pad and regulator are a line of their own. On a farm already running propane for brooders or grain drying it is often the sensible answer.",
      ],
    },
    {
      heading: "Distance, conductors and the trench nobody quoted",
      body: [
        "Where the generator goes decides a large slice of the price. Beside the service, on existing hardstanding, with a short run into the switchgear is the cheap version. Two hundred feet across a yard, because that is the only spot that satisfies the setbacks and keeps exhaust away from a fresh air intake, is a different job with a trench in it.",
        "Conductors over distance are not sized by ampacity alone. They are sized so the voltage at the far end still starts what has to start, and that matters more on a generator feeder because the source impedance is already higher. The IAEI [walk through of voltage drop calculations](https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/) sets out the arithmetic and the general five percent guidance, and on a long run the conductor that satisfies it can be two or three sizes above what the overcurrent device needs.",
        "Then there is the boundary between what runs and what does not. If the whole building is not going on the generator, somebody has to build that boundary: a separate board, feeders to it, and every circuit traced and moved across. On older buildings this is often the largest single line on the quote, and it belongs with [service and distribution upgrade work](/electrical-service-upgrades).",
      ],
    },
    {
      heading: "Why a farm quote and a commercial quote are not the same job",
      body: [
        "On a commercial building the standby scope is usually well bounded. A load list exists or can be built in an afternoon, the equipment room has space, the pad goes on the parking side, and the argument is about how much of the building stays lit.",
        "On a farm almost none of that holds. The loads sit across several buildings, each with its own feed, and the critical load is not the office but ventilation, water and milk cooling, spread over acres. The generator often serves a distribution point rather than a single panel, so the runs are long and the conductors large. Outages here arrive with ice on the lines while the utility crew is already out, which pushes the specification towards fuel on site and automatic start. That is why a farm job gets priced after a walk round rather than over the phone, and [the farm standby generator project](/projects/farm-standby-generator) is a fair picture of the scope.",
      ],
      bullets: [
        "Loads spread across several buildings instead of one panel",
        "Ventilation, water and cooling as the critical load, not lighting and computers",
        "Fuel on site, because the same storm takes the road as well as the line",
        "Long runs from the set to what it feeds, which drives conductor size and trenching",
      ],
    },
  ],

  faq: [
    {
      q: "Is a used generator worth considering?",
      a: "Sometimes, on a farm or a shop where a manual start is acceptable. The saving is real but it is only on the set, and every other line stays the same. Ask for hours, a recent oil sample, and proof the alternator and controller are still supported. On anything that has to start by itself at three in the morning, the saving usually buys a service call list.",
    },
    {
      q: "How much does the transfer switch add?",
      a: "More than people expect, because it scales with amperage and rating rather than with engine size. A small automatic switch serving a subset of loads is a four figure line. A service entrance rated switch sized for the whole building, with bypass isolation so it can be maintained live, can approach the cost of a mid size generator.",
    },
    {
      q: "What does it cost to run once it is installed?",
      a: "Fuel during outages, the exercise runs, and service. Fuel burn is roughly proportional to load, so an oversized set burns more for the same work. Annual service with oil, filters, a coolant check and a battery test is a predictable yearly line. A load bank test, where warranted, is separate.",
    },
    {
      q: "Do I need a permit for a standby generator in Pennsylvania?",
      a: "Yes on any permanent installation. Electrical work falls under the Uniform Construction Code, with permits issued by the municipality or by the Department of Labor and Industry where a municipality has opted out. Expect zoning setbacks and noise limits too, and for larger fuel storage a separate fire code review.",
    },
    {
      q: "Why is a load bank test on the quote when the building already has load?",
      a: "Because the building rarely presents enough load to prove the set. A load bank runs the engine up in steps to full nameplate, testing the cooling, the governor, the voltage regulator and the exhaust under conditions that otherwise only occur during a real outage. On a diesel it also burns off what light running leaves behind.",
    },
  ],

  sources: [
    {
      label: "NDSU: Standby Electric Generators",
      href: "https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators",
      note: "Extension guidance on deciding what must keep running, full load against part load systems, and tractor driven against engine driven sets.",
    },
    {
      label: "IAEI Magazine: Voltage Drop Calculations",
      href: "https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/",
      note: "The arithmetic behind conductor sizing over distance, including k factors and the general five percent guidance.",
    },
  ],

  services: [
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["generator-sizing-starting-vs-running", "transfer-switch-types", "generator-maintenance-schedule"],

  closing:
    "We install and maintain standby power on farms, food plants and commercial buildings across Lebanon, Lancaster and Berks counties, so the load list, the trench and the transfer equipment are part of one conversation rather than three separate contractors. If you want a number that holds up, the honest route is a walk round and a list of what has to stay running.",

  keywords: [
    "standby generator cost",
    "generator installation cost",
    "commercial generator installation",
    "standby generator installer",
    "generator installation",
  ],
};

export default article;
