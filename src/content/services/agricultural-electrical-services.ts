import type { Service } from "./types";

const service: Service = {
  slug: "agricultural-electrical-services",
  kind: "market",
  title: "Agricultural Electrician | Poultry, Dairy & Grain | Lancaster & Lebanon County PA",
  h1: "Agricultural electrical services for poultry, dairy and grain operations",
  summary:
    "Electrical work for poultry houses, dairy barns and grain systems across Lebanon, Lancaster and Berks counties: ventilation, controls, standby power and farm services.",
  lead:
    "Electrical work for poultry houses, dairy barns, grain and feed systems, and the farm buildings around them, serving Lebanon, Lancaster and Berks counties in Central Pennsylvania. From new builds and service upgrades to ventilation, controls, motors and standby power, Slon Electric builds and maintains the electrical systems a working farm depends on.",

  hero: {
    src: "/photos/services/agricultural-electrical-services.webp",
    alt: "Lit free stall dairy barn wired by Slon Electric",
  },

  sections: [
    {
      heading: "Three layers of it, and the one people forget",
      body: [
        "The work splits into three groups. There is the power itself: the service entrance, the distribution across the yard, the feeders to each building. There is the equipment side: ventilation, controllers, augers, dryers, milking and cooling. And there is the layer most people only think about after an outage, which is standby power and the alarms that tell you something has stopped.",
        "All three are ordinary weekly work here rather than something we do occasionally. Lebanon and Lancaster counties run on poultry, dairy and grain, and the buildings in them have specific requirements that a crew working mostly in offices will not know to apply.",
        "The third layer is the one that gets cut from budgets and then gets bought twice. A farm that has a generator but no alarm still loses the house, because the failure that matters is rarely the one that takes the whole yard dark. It is the single contactor, the one dropped phase, the controller that locked up while everything around it kept humming.",
      ],
    },
    {
      heading: "Why the code is stricter in a barn",
      body: [
        "Agricultural buildings where livestock are housed, or where dust and a corrosive atmosphere are normal, fall under Article 547 of the National Electrical Code. It restricts wiring methods, requires enclosures and fittings that keep dust and washdown out, and in the areas where animals stand it requires an equipotential plane bonded into the concrete.",
        "That last one is the part that gets missed most often and costs most to correct, because it is decided at the concrete stage rather than the wiring stage. We go through the whole article in plain language in [what the code actually requires in a barn](/blog/nec-547-agricultural-wiring).",
        "The other thing a farm brings is ammonia. It corrodes aluminium, attacks terminals and finds its way into anything not properly sealed. Fixtures and enclosures chosen from a general commercial catalogue commonly last two or three years in a poultry house and then start failing one at a time. Choosing for the environment rather than the price list is most of what makes a farm installation last, and we set out the reasoning in [choosing a wiring method for agricultural buildings](/blog/barn-wiring-methods).",
      ],
    },
    {
      heading: "The loads that cannot wait",
      body: [
        "Every farm has a short list of circuits where an outage costs something immediately. On a poultry operation it is ventilation, and the clock is measured in birds. On a dairy it is milk cooling and the parlour. On a grain operation it is whatever is loaded and turning when the power drops.",
        "That list is what standby power should be sized around, not the size of the service. Sizing from the service is how farms end up paying for a generator twice as large as they need, and sizing from running load alone is how they end up with one that will not start the fans. The arithmetic is worked through in [why a generator that looks big enough still stalls](/blog/generator-sizing-starting-vs-running).",
        "The same list should decide what is alarmed and what that alarm reaches. A controller that cannot raise somebody at three in the morning is the same problem as a fan that will not start.",
      ],
    },
    {
      heading: "Yards that grew by addition",
      body: [
        "Almost no farm around here was wired to a plan. It was wired to a sequence: the house, then the barn off the house, then the shop off the barn, then the new heifer barn off whichever panel was nearest in 2009.",
        "That arrangement causes three problems that all show up years later. Feeders sized for the first building carry four. Voltage drop stacks along the chain until motors will not start at the far end. And the grounding and bonding become impossible to trace, which is the mechanism behind most stray voltage complaints.",
        "Rebuilding how a yard is fed is usually the job underneath a complaint rather than the complaint itself. We explain the arrangement that works in [the distribution point on a farm](/blog/farm-distribution-point), and what it took on a real yard in [rebuilding a farm service entrance](/projects/farm-service-entrance-upgrade).",
      ],
    },
  ],

  scope: [
    {
      group: "Poultry houses",
      note: "Broiler, layer and pullet houses, plus the equipment rooms behind them.",
      items: [
        "Tunnel and minimum ventilation fan circuits",
        "Variable speed fan wiring and drive replacement",
        "House controller power, sensor and probe wiring",
        "Curtain, inlet and actuator machine wiring",
        "Feed line, auger and bin motor circuits",
        "Water line, medicator and cool cell pump power",
        "Brooder and heater control circuits",
        "Dimmable lighting programs and fixture replacement",
        "Alarm, dialer and generator start signal wiring",
      ],
    },
    {
      group: "Dairy barns and parlours",
      note: "Free stall, tie stall, parlour and bulk tank rooms.",
      items: [
        "Milking parlour power and equipment connections",
        "Vacuum pump and milk pump motor circuits",
        "Bulk tank, compressor and plate cooler wiring",
        "Free stall and holding area lighting",
        "Long day lighting programs and controls",
        "Stray voltage measurement and correction work",
        "Equipotential plane bonding under Article 547",
        "Manure pump, scraper and alley equipment power",
        "Waterer, fan and sprinkler circuits",
      ],
    },
    {
      group: "Grain and feed handling",
      note: "Dryers, legs, bins and the controls that sequence them.",
      items: [
        "Grain dryer power and control wiring",
        "Bucket elevator and leg motor circuits",
        "Auger, conveyor and drag connections",
        "Bin fan, stirator and aeration controls",
        "Roller mill and feed mixer machine wiring",
        "Motor starters, overloads and disconnects",
        "Interlocks and sequencing between machines",
        "Level, moisture and temperature sensor wiring",
      ],
    },
    {
      group: "Farm power and distribution",
      note: "Everything between the utility and the building panels.",
      items: [
        "Farm service entrance replacement and upsizing",
        "Meter socket, main disconnect and CT cabinet work",
        "Three phase service and utility coordination",
        "Yard distribution points and subpanels",
        "Underground feeders and directional boring runs",
        "Overhead spans, service poles and weatherheads",
        "Grounding, bonding and ground ring work",
        "Surge protection at the service and at equipment",
        "Load calculations and as built panel schedules",
      ],
    },
    {
      group: "Standby power and alarms",
      note: "What keeps the critical list running when the line drops.",
      items: [
        "Standby generator sizing, siting and installation",
        "Automatic and manual transfer switch installation",
        "PTO generator connections and interlock kits",
        "Load shedding so the critical loads start first",
        "Generator start signal wiring from controllers",
        "High and low temperature alarm circuits",
        "Power failure alarms and autodialer wiring",
        "Annual load bank and transfer testing",
      ],
    },
    {
      group: "Shops, sheds and farm buildings",
      note: "The buildings that are not livestock but still on the yard.",
      items: [
        "Pole barn wiring from the empty shell",
        "Shop power, welder receptacles and compressor circuits",
        "Equipment storage and machinery shed lighting",
        "Farm office, break room and bathroom circuits",
        "Yard, driveway and security lighting",
        "Well pump, irrigation and pressure system power",
        "Heated waterer and stock tank circuits",
        "EV and equipment charging points",
      ],
    },
  ],

  facilities: [
    "Broiler and layer houses",
    "Free stall and tie stall dairy barns",
    "Milking parlours and bulk tank rooms",
    "Grain dryers, legs and bin systems",
    "Swine finishing and farrowing",
    "Pole buildings, shops and equipment sheds",
  ],

  audience: [
    {
      title: "Contract growers with a schedule they did not set",
      body:
        "When the integrator sets placement dates, the electrical work has to fit between flocks rather than the other way round. We plan around the down time you actually have, and we would rather do a smaller job properly in that window than start something we cannot close.",
    },
    {
      title: "Dairies where the herd decides the clock",
      body:
        "Milking happens twice or three times a day regardless of what we are doing. Work in the parlour gets staged between milkings, which is how we did the job written up in [a parlour and bulk tank rewire](/projects/dairy-parlour-bulk-tank-wiring).",
    },
    {
      title: "Family operations adding a building",
      body:
        "A new heifer barn, a second shop or another bin looks like a small job until you ask what is left in the service. This is the point where a load calculation is worth more than an opinion, and where the honest answer is sometimes that the service has to come first.",
    },
    {
      title: "Farms that bought a place with old wiring",
      body:
        "Forty years of additions, three generations of wiring methods and no drawings anywhere. We start by working out what is actually there and what is carrying what, because nothing else can be planned until that is known.",
    },
    {
      title: "Growers who have already had the failure",
      body:
        "The call usually comes after the first bad night. What we can do then is find the real cause rather than the symptom, and make sure the same failure raises somebody next time before it costs anything.",
    },
    {
      title: "Custom operators and equipment dealers",
      body:
        "Grain systems, feed equipment and handling machinery arriving on site with a wiring diagram and no electrician booked. We connect, start and prove it, and we would rather be in the conversation before the concrete goes in.",
    },
  ],

  process: {
    title: "How a farm job usually runs",
    lines: [
      "A call, and a few questions about what the building runs and what has changed recently.",
      "A visit. On anything larger than a service call we come and look before quoting, because guessing at a load or a service size on the phone helps nobody.",
      "A load calculation and, where the job needs it, a drawing. That is the cheapest hour on the whole job, as we argue in [the load study write up](/projects/load-study-and-drawings).",
      "A written scope and price, with the things that are assumptions clearly marked as assumptions.",
      "Equipment ordered and staged before we start, so the building is not opened up waiting on a part.",
      "The work, scheduled around milking, loading or whatever else cannot move.",
      "Testing under load: fans started, transfer proved, alarms made to actually ring a phone.",
      "Labels, a panel schedule and a record of what went where, left in the panel rather than in a van.",
    ],
  },

  whyUs: [
    {
      title: "Farm work is the main thing here, not a sideline",
      body:
        "Plenty of electricians will take a barn job. Fewer have spent enough weeks in them to know which fixture survives ammonia, why the far end of a run will not start a motor, or what a controller is really telling you. That knowledge only comes from doing it constantly.",
    },
    {
      title: "We know which circuits are the expensive ones",
      body:
        "On every farm there is a short list where an outage costs money within the hour. We ask for that list first and design the standby power, the alarms and the repair priority around it.",
    },
    {
      title: "The phone is answered at night",
      body:
        "Our Google listing says open 24 hours because that is how the phone is covered, not as a marketing line. What that actually looks like is described in [a winter failure call](/projects/emergency-winter-failure).",
    },
    {
      title: "One crew and one person responsible",
      body:
        "Anatoly quotes the job and his crew does it. Nothing is handed to a subcontractor you have never met, and the person who answers when you call afterwards is the person who did the work.",
    },
    {
      title: "We work to Article 547, not around it",
      body:
        "Equipotential planes, sealed fittings, corrosion resistant enclosures and the right wiring method for the room. It costs a little more on the day and it is the difference between an installation that lasts fifteen years and one that starts failing in three.",
    },
    {
      title: "Rated 5.0 on Google",
      body:
        "Reviewed by the people who paid the invoices, mostly for generator work, service upgrades and farm wiring. We would rather point at that than at adjectives about ourselves.",
    },
  ],

  faq: [
    {
      q: "Do you work on poultry houses specifically?",
      a: "Yes, and it is a large share of what we do. Ventilation and controller wiring, alarm and dialer circuits, lighting programs and dimming, standby power and the service entrance feeding it all. A recent example is [ventilation power and controller wiring for a poultry house](/projects/poultry-house-ventilation-power).",
    },
    {
      q: "Something has stopped and it is the middle of the night. Do you answer?",
      a: "Yes. Our hours on Google are listed as open 24 hours because that is how the phone is actually covered. What happens on that call is described in [our write up of a winter failure](/projects/emergency-winter-failure).",
    },
    {
      q: "My cows are behaving oddly in the parlour. Can you check for stray voltage?",
      a: "Yes, and the important part is measuring it properly rather than putting a meter between a pipe and the floor. What a real survey involves is set out in [the stray voltage article](/blog/stray-voltage-on-dairy-farms).",
    },
    {
      q: "Can you bring three phase to the farm?",
      a: "Whether three phase is available is the utility's decision and it depends on what is at the road. We will do the load calculation, have that conversation with them on your behalf and tell you honestly what it would take. The alternatives if the answer is no are covered in [three phase against single phase](/blog/three-phase-vs-single-phase).",
    },
    {
      q: "Can you work between flocks or between milkings?",
      a: "That is the normal way we schedule farm work. Tell us the window when we first talk and we will scope the job to fit it, or split it into stages that each close cleanly.",
    },
    {
      q: "Do you buy the equipment or do we?",
      a: "We do, unless you would rather supply it. Panels, fixtures, generators, controllers and gear all come through us, which means one person is responsible when something arrives wrong or late.",
    },
    {
      q: "Do you do residential work?",
      a: "Our website is about agricultural, commercial and industrial work because that is what the business is built around. If you are a farm customer with a question about the house, ask when you call.",
    },
  ],

  related: {
    projects: [
      "poultry-house-ventilation-power",
      "dairy-parlour-bulk-tank-wiring",
      "grain-system-power-controls",
      "farm-service-entrance-upgrade",
      "free-stall-barn-lighting",
      "underground-feeders-farm-yard",
      "pole-barn-from-the-shell",
      "farm-standby-generator",
    ],
    articles: [
      "nec-547-agricultural-wiring",
      "stray-voltage-on-dairy-farms",
      "farm-distribution-point",
      "barn-wiring-methods",
      "voltage-drop-long-farm-runs",
    ],
  },

  seeAlso: [
    "standby-generator-installation",
    "electrical-service-upgrades",
    "commercial-led-lighting",
    "control-panels-machine-wiring",
    "emergency-electrician",
  ],

  /**
   * Девять карточек сразу после героя: категории фермерской работы
   * (проекты) и сквозные услуги сайта (панели, генераторы, освещение,
   * щиты, аварийка) сведены в один список без дублей. "Farm power and
   * distribution" и "Standby power and alarms" раньше были одновременно
   * и категорией, и отдельной карточкой услуги — теперь это по одной
   * объединённой карточке на каждую тему, ведущей на страницу услуги.
   */
  highlightCards: [
    {
      title: "Poultry houses",
      body: "Broiler, layer and pullet houses, plus the equipment rooms behind them.",
      href: "/projects/poultry-house-ventilation-power",
      photoProject: "poultry-house-ventilation-power",
    },
    {
      title: "Dairy barns and parlours",
      body: "Free stall, tie stall, parlour and bulk tank rooms.",
      href: "/projects/dairy-parlour-bulk-tank-wiring",
      photoProject: "free-stall-barn-lighting",
    },
    {
      title: "Grain and feed handling",
      body: "Dryers, legs, bins and the controls that sequence them.",
      href: "/projects/grain-system-power-controls",
      photoProject: "grain-system-power-controls",
    },
    {
      title: "Shops, sheds and farm buildings",
      body: "The buildings that are not livestock but still on the yard.",
      href: "/projects/pole-barn-from-the-shell",
      photoProject: "pole-barn-from-the-shell",
    },
    {
      title: "Farm power, panels and service upgrades",
      body:
        "Everything between the utility and the building panels, sized from an honest load calculation rather than habit.",
      href: "/electrical-service-upgrades",
      photoProject: "farm-service-entrance-upgrade",
    },
    {
      title: "Standby power, generators and alarms",
      body:
        "What keeps the critical list running when the line drops: the fans, the pumps and the alarm that calls you.",
      href: "/standby-generator-installation",
      photoProject: "farm-standby-generator",
    },
    {
      title: "Farm and barn lighting",
      body:
        "Fewer fixtures than you had, placed where the work actually happens, with a bill that drops the month after.",
      href: "/commercial-led-lighting",
      photoProject: "poultry-house-new-construction",
      photoIndex: 1,
    },
    {
      title: "Control panels for farm equipment",
      body: "Built and wired for the person who opens it at two in the morning without having built it.",
      href: "/control-panels-machine-wiring",
      photoProject: "poultry-house-equipment-wiring",
    },
    {
      title: "24 hour farm emergency service",
      body: "A ventilation failure at two in the morning does not wait until Monday. Answered around the clock.",
      href: "/emergency-electrician",
    },
  ],

  keywords: [
    "agricultural electrician",
    "agricultural electrical services",
    "farm electrician",
    "barn electrical",
    "poultry house ventilation",
    "agricultural electrician near me",
  ],
};

export default service;
