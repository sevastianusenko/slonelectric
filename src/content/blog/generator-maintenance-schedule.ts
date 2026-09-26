import type { Article } from "./types";

const article: Article = {
  slug: "generator-maintenance-schedule",
  question: "What maintenance does a standby generator actually need, and how often?",
  title: "Standby generator maintenance: the real schedule, and why a set that sits is a set that fails",
  category: "Standby power",
  summary:
    "A working maintenance schedule for a standby generator: weekly checks, the monthly run under load, annual service, load bank testing, and the battery that causes most failures.",
  answer:
    "A standby generator needs a short visual check weekly, a run under load monthly, a full service annually, and a load bank test every few years or after major work. Almost nothing that kills a standby set is caused by running it. The failures come from sitting: a battery that has quietly aged out, fuel that has degraded in the tank, coolant that has lost its inhibitor, a block heater that stopped working last winter, and on diesels the unburned residue that light running leaves behind. The most common reason a set does not start when the lights go out is the starting battery, which is also the cheapest item on the machine.",
  lead:
    "A standby generator is a machine bought to work once every couple of years for two hours. That breaks the normal intuition that wear comes from use. Here almost all of it comes from standing still.",

  photos: [
    {
      src: "/photos/blog/gen-maintenance-1.webp",
      alt: "Diesel standby generator set with starting batteries and exhaust",
      caption: "Batteries, coolant, fuel and exhaust. Four of the five reasons a set does not start are in this frame.",
    },
    {
      src: "/photos/blog/ext-generator-2.webp",
      alt: "Technician performing preventive maintenance on a generator",
      caption: "Most of the work is inspection and replacement on a calendar, not repair. Photo by",
      credit: {
        author: "U.S. Air Force photo by Tech. Sgt. Maeson Elleman",
        href: "https://commons.wikimedia.org/wiki/File:Preventative_maintenance_key_to_reliable_power_(7141177).jpg",
        license: "Public domain",
      },
    },
    {
      src: "/photos/blog/gen-maintenance-2.webp",
      alt: "Clamp meter being used to take a reading during testing",
      caption: "A monthly run is only useful if somebody writes down what the set was actually doing.",
    },
    {
      src: "/photos/blog/ext-generator.webp",
      alt: "Enclosed diesel generator set outdoors",
      caption: "An enclosure keeps the weather out. It does nothing about what happens inside the fuel tank. Photo by",
      credit: {
        author: "Gregsedits",
        href: "https://commons.wikimedia.org/wiki/File:Caterpillar_(Olympian)_Generator_Set.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "Everything that kills a standby set is a consequence of sitting",
      body: [
        "A prime power engine in a quarry runs thousands of hours a year and is maintained on hours. A standby set might accumulate twenty hours in a year, most of it in five and ten minute pieces, and it still needs a schedule. Rings and bearings are barely touched. What degrades is everything that ages on a calendar rather than on an hour meter.",
        "Lead acid batteries lose capacity from the day they are filled. Rubber hardens. Coolant additives deplete whether the engine runs or not. Diesel oxidises and collects water as the tank breathes through a winter. Contacts that never move develop resistance, and rodents like a warm enclosure.",
        "None of this announces itself. A set can look immaculate, be enclosed, be under warranty, and still refuse to pick up the load, because everything that failed failed quietly. That is why standby power belongs inside [electrical preventive maintenance](/electrical-preventive-maintenance).",
      ],
    },
    {
      heading: "The exercise run, and what it is actually for",
      body: [
        "Most controllers have a built in exerciser set to run weekly or monthly for twenty to thirty minutes. It is not there to stop the engine seizing. It does four specific jobs: bring oil to every bearing surface, get the oil and coolant hot enough to drive off condensed water, put a charge cycle through the battery and prove the charger, and confirm that the controller, the fuel system and the starting circuit still work as a chain.",
        "How hard the rules bite depends on what the set serves. IAEI's overview of [emergency and standby power for commercial occupancies](https://iaeimagazine.org/electrical-inspections/emergency-and-standby-power-for-commercial-occupancies/) separates the three system types in the code: an Article 700 emergency system must be supplied within ten seconds, an Article 701 legally required standby system within sixty seconds, and an Article 702 optional standby system has no mandated response time. A farm or a warehouse is normally in that third category, so nobody will make you test it. The engine does not know that.",
        "What an exercise run cannot do on its own is put load on the engine. A set that starts, idles at no load for fifteen minutes and shuts down has proven the starting circuit and little else.",
      ],
    },
    {
      heading: "Wet stacking, and why an unloaded run is not enough",
      body: [
        "On a diesel, running at very light load is actively harmful. The cylinders never reach their design temperature, so part of the fuel passes through unburned and collects as a wet sooty residue in the exhaust, the turbo and around the valves. The trade name is wet stacking, and the sign is black oily deposit at the exhaust outlet.",
        "The working threshold is around thirty percent of nameplate. NFPA 110 reflects it directly: the monthly run is expected to be thirty minutes at a minimum of thirty percent of the nameplate kilowatt rating, or until the engine reaches the exhaust gas temperature the manufacturer specifies.",
        "This is where oversizing comes back to bite. A set chosen at double the load it will ever carry cannot reach thirty percent on the building it serves, so every exercise run makes it slightly worse. It is one of the practical arguments for sizing from a real load list, which is part of [why standby generator quotes differ so much](/blog/standby-generator-cost). Gas and propane sets do not wet stack the same way, but they still benefit from being loaded.",
      ],
    },
    {
      heading: "The schedule, item by item",
      body: [
        "A schedule works only if the weekly part is short enough that somebody does it and the annual part is thorough enough to catch what the weekly part cannot see. The intervals below are calendar based, which suits a set that rarely runs. Where one has carried real outages, the manufacturer's hour based intervals take priority, and oil and filters on a working diesel commonly fall due between 100 and 250 hours.",
      ],
      callout: {
        title: "A standby generator maintenance schedule",
        lines: [
          "Weekly, five minutes, by whoever is already on site: oil and coolant level, a look underneath for leaks, controller in AUTO with no alarm lit, charger showing charge, block heater warm, nothing stored against the enclosure.",
          "Monthly, thirty minutes, under load: run the set and transfer the building to it. Aim for at least thirty percent of nameplate for the full thirty minutes, or the manufacturer's exhaust gas temperature. Record voltage, frequency, oil pressure, coolant temperature, load and hours.",
          "Every six months: clean and torque battery terminals, test the battery with a conductance or load tester rather than by looking at it, check belt tension and air filter restriction, and operate the transfer switch in both directions.",
          "Annually: oil and oil filter, fuel filters and water separator, air filter, coolant tested for freeze point and inhibitor, belts and hoses inspected, battery load tested, controller time delays verified, fuel sampled, exhaust checked.",
          "Every two to three years: replace the starting batteries on age, not on failure. This is the cheapest insurance on the whole installation.",
          "Every four to six years: change the coolant and replace hoses and belts.",
          "Every three to five years, and after any major repair: a two hour load bank test. A common profile is thirty minutes at twenty five percent, thirty minutes at fifty percent, then sixty minutes at seventy five percent of nameplate.",
        ],
      },
    },
    {
      heading: "The battery causes more failed starts than everything else combined",
      body: [
        "If a standby set fails to start, look at the battery first and you will be right most of the time. A flooded lead acid starting battery lasts roughly three to five years in mild conditions, and less where it sits in an unheated enclosure through Pennsylvania winters. Capacity at freezing is a fraction of the rating at room temperature, and cranking a cold diesel is the hardest thing a battery is asked to do.",
        "The trap is that a tired battery passes the tests people casually do. It reads 12.6 volts at rest, runs the controller happily, and cranks the engine on a mild afternoon during the exercise run. Then it fails on the one January night when the oil is thick and the load is waiting. A conductance or load test tells you months in advance what a voltmeter never will.",
        "The charger deserves the same suspicion. One without temperature compensation overcharges in summer and undercharges in winter. Corroded terminals do the same job more slowly: resistance rises, charging current falls, and nothing reports it. That is why [the farm standby generator project](/projects/farm-standby-generator) put the battery, the charger and the block heater on the commissioning list.",
      ],
      bullets: [
        "Replace starting batteries on a two to three year cycle, not when they fail",
        "Test with a conductance or load tester, never with a voltmeter alone",
        "Clean and torque terminals at every service visit",
        "Confirm the charger has temperature compensation and is actually charging",
        "Keep the block heater working, because a cold engine is a battery problem",
      ],
    },
    {
      heading: "Fuel that sits, and the record somebody will ask for",
      body: [
        "Diesel is not stable over years. Untreated fuel in a vented tank begins to oxidise within roughly six to twelve months, and water accumulates from condensation as the tank breathes. Water supports microbial growth at the fuel and water interface, and the sludge blocks filters at the moment the engine is asked to work. Treated and kept full, diesel holds up for a few years; ignored in a half empty tank it can be unusable in two. Annual sampling, a water check, and polishing on larger tanks are the practical answers.",
        "The other half of a programme is paperwork, and it is the half most sites neglect. IAEI's summary of [how the code treats the integrity of life safety systems](https://iaeimagazine.org/issue/2021-january-february/maintaining-integrity-of-life-safety-systems/) notes that NEC 700.3 requires emergency systems to be tested on a schedule acceptable to the authority having jurisdiction, maintained to the manufacturer's instructions, and documented through written records kept by the owner. Even where your system is optional standby and none of that is enforceable, the log is what an insurer, an auditor or a food safety inspector asks for after an event.",
        "Keep it simple and keep it with the machine: date, who ran it, load, voltage, frequency, coolant temperature, oil pressure, hours, and anything odd. Three years of that says more than any single inspection. The same logic applies to the rest of the switchgear, which is why an [infrared survey of a switchboard](/projects/infrared-survey-switchboard) is worth repeating, and why the transfer equipment is exercised on the same visit as the engine, covered in [the comparison of transfer switch types](/blog/transfer-switch-types).",
      ],
    },
  ],

  faq: [
    {
      q: "Is the automatic exercise timer enough on its own?",
      a: "It covers the engine and nothing else. An unloaded run proves the battery, starter, fuel system and controller work in sequence. It does not prove the transfer switch will operate, that the set holds voltage and frequency with real load, or that the governor behaves when a motor starts.",
    },
    {
      q: "How long can we go between services if the generator never runs?",
      a: "One year is the outside limit, and usage does not change it. Oil absorbs combustion products and moisture, coolant inhibitors deplete on a calendar, filters absorb water, and rubber hardens whether the engine turns or not. An annual service on a set with twelve hours on it still finds things.",
    },
    {
      q: "Do we actually need a load bank test?",
      a: "It is worth it when the building cannot present at least thirty percent of nameplate, when the set is large, when it carries a critical process, or after any major repair. On a small set that carries most of its rating during outages, the outages do the job.",
    },
    {
      q: "The set started but tripped out under load. Where do we look first?",
      a: "Usually at the load rather than the engine. A set that runs fine unloaded but trips on transfer is normally seeing more starting current than it can supply, which points at sizing or at too many motors starting together. Fuel restriction and a blocked air filter give a similar symptom, so check filters and fuel quality at the same time.",
    },
    {
      q: "Who should do the work, the engine dealer or the electrical contractor?",
      a: "Both, and the split is usually clear. Engine, alternator, cooling and fuel go to whoever holds the parts and the warranty. Transfer equipment, feeders, grounding, controls and the interaction with the building distribution are electrical work. The failures nobody catches live exactly on that boundary.",
    },
  ],

  sources: [
    {
      label: "IAEI Magazine: Emergency and Standby Power for Commercial Occupancies",
      href: "https://iaeimagazine.org/electrical-inspections/emergency-and-standby-power-for-commercial-occupancies/",
      note: "How NEC Articles 700, 701 and 702 differ, including the ten second and sixty second supply requirements.",
    },
    {
      label: "IAEI Magazine: Maintaining Integrity of Life Safety Systems",
      href: "https://iaeimagazine.org/issue/2021-january-february/maintaining-integrity-of-life-safety-systems/",
      note: "NEC 700.3 testing and maintenance, and the written records the owner is expected to keep.",
    },
  ],

  services: [
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
  ],

  related: ["standby-generator-cost", "transfer-switch-types", "generator-sizing-starting-vs-running"],

  closing:
    "We service standby sets and transfer equipment on farms, food plants and commercial buildings across Lebanon, Lancaster and Berks counties, which means the engine, the switch and the distribution behind it get looked at on the same visit. If your set has a log with nothing in it for a few years, that is where to start.",

  keywords: [
    "electrical generator maintenance",
    "generator repair",
    "standby generator maintenance",
    "load bank test",
    "generator service",
  ],
};

export default article;
