import type { Area } from "./types";

const area: Area = {
  slug: "lebanon-county",
  county: "Lebanon County",
  title: "Electrician in Lebanon County PA | Farm, Commercial & Industrial",
  h1: "Electrical service across Lebanon County",
  summary:
    "Agricultural, commercial and industrial electrical service across Lebanon County PA: poultry, dairy, food plants and shops. Call (717) 821-9166, answered 24 hours.",
  lead:
    "Lebanon County is the county we cover most densely, and the one where a call in the morning usually means a truck the same day. It is farm country with a meat and food processing industry sitting on top of it, which makes for a particular mix: poultry houses and parlours on one road, a plant with a washdown floor on the next.",
  drive: "Anywhere in the county is inside half an hour, and most of it is well under that.",

  hero: {
    src: "/photos/services/emergency-electrician.webp",
    alt: "Electrical enclosure opened during an after hours repair",
  },

  towns: [
    {
      name: "Lebanon",
      note: "The commercial centre of the county: shops, offices, restaurants and older buildings whose services ran out of room.",
    },
    {
      name: "Palmyra",
      note: "Commercial along 422 and farm ground behind it, with Hershey close enough that the work overlaps.",
    },
    {
      name: "Myerstown",
      note: "Poultry, dairy and pole buildings, plus the light industrial units along the 501 and 422 corridor.",
    },
    {
      name: "Annville",
      note: "Farms, the college and a steady run of small commercial jobs through the middle of the county.",
    },
    {
      name: "Jonestown",
      note: "Distribution and truck traffic off the I-78 and I-81 interchange, with farms on every side of it.",
    },
    {
      name: "Richland",
      note: "Dense poultry country on the Lancaster line, where ventilation and standby power are most of the work.",
    },
    {
      name: "Schaefferstown",
      note: "Dairy and grain in the hills east of Lebanon, with long service runs between buildings.",
    },
  ],

  sections: [
    {
      heading: "Farms and food plants on the same road",
      body: [
        "Lebanon County grows a lot of what it also processes. Poultry and dairy come off farms around Richland and Schaefferstown and go into plants a few miles away in Lebanon and Myerstown, which means we work both ends of that chain and often in the same week.",
        "The two ends ask for different things. On the farm the constraint is biological: ventilation, cooling and the clock those put you on. In the plant it is production: a washdown environment, motor circuits, drives and a shutdown window somebody else set. What that window demands is described in [plant wiring during a shutdown](/projects/plant-wiring-during-shutdown), and the washdown side in [power for food processing equipment](/projects/food-plant-equipment-power).",
      ],
    },
    {
      heading: "Why the response is quicker here",
      body: [
        "We are not going to pretend distance does not matter. A ventilation failure in this county gets a faster answer than the same failure an hour away, simply because of where the trucks are and where the parts are.",
        "That matters most at night. Our listing says open 24 hours because that is how the phone is covered, and what an after hours call actually looks like is written up in [a winter failure](/projects/emergency-winter-failure). If you are in Lebanon County and something has stopped in an occupied building, call at whatever hour it is.",
      ],
    },
    {
      heading: "Buildings that grew without a plan",
      body: [
        "A lot of the yards around Jonestown and Annville were wired in sequence rather than to a drawing: the house, then the barn off the house, then the shop off the barn. Feeders sized for one building end up carrying four, voltage drops along the chain, and the grounding becomes impossible to trace.",
        "Rebuilding how a yard is fed is usually the job underneath the complaint rather than the complaint itself. [Rebuilding a farm service entrance](/projects/farm-service-entrance-upgrade) is one of those, and the reasoning behind the arrangement is in [voltage drop on long runs](/blog/voltage-drop-long-farm-runs).",
      ],
    },
  ],

  demand: [
    {
      title: "Emergency calls, day or night",
      body:
        "The county where we get to you quickest. Ventilation, a lost phase, a hot panel or a cooler that has stopped holding.",
      service: "emergency-electrician",
    },
    {
      title: "Farm service entrances",
      body:
        "Yards that outgrew their service three buildings ago, rebuilt around a proper distribution point instead of another tap.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Poultry and dairy wiring",
      body:
        "Ventilation, controllers, parlour and bulk tank circuits, scheduled around flocks and milkings rather than around us.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Food plant and machine work",
      body:
        "Washdown rated methods, motor circuits, drives and equipment connections inside the window you are given.",
      service: "industrial-electrical-services",
    },
    {
      title: "Standby power",
      body:
        "Generators and transfer switches sized around the loads that cannot stop, then proved with a real outage.",
      service: "standby-generator-installation",
    },
    {
      title: "Shops and pole buildings",
      body:
        "Welder receptacles, compressor circuits and lighting, wired from the empty shell or added to what is there.",
      service: "commercial-electrical-services",
    },
  ],

  facilities: [
    "Poultry houses and livestock barns",
    "Dairy parlours and bulk tank rooms",
    "Meat and food processing plants",
    "Pole buildings, shops and equipment sheds",
    "Distribution and trucking facilities",
    "Retail units, offices and restaurants",
    "Grain handling and feed systems",
  ],

  faq: [
    {
      q: "How quickly can you get to us in Lebanon County?",
      a: "Quicker than anywhere else we cover, though the honest answer still depends on where the truck is and what is already running. You get a real time of arrival on the call rather than a number that sounds good.",
    },
    {
      q: "Do you answer at night here?",
      a: "Yes, around the clock. In an occupied livestock building the clock is measured in animals rather than hours, so call at whatever time it is and we will tell you on the phone what to isolate or open up while we are on the way.",
    },
    {
      q: "Do you take small service calls, or only large jobs?",
      a: "Both. A breaker that keeps tripping, a fixture that failed, a circuit for new equipment. In this county a small job is not a long drive, so it is worth doing properly rather than putting off.",
    },
    {
      q: "Can you do work for a plant on a shutdown weekend?",
      a: "Yes, and that is when most plant work should happen. Tell us the window early enough that material and prefabrication are finished before it opens, because that is what decides whether it holds.",
    },
    {
      q: "Who inspects the work here?",
      a: "It depends on the municipality. Townships and boroughs in the county use different third party agencies, so we apply to whichever one covers your address, pull the permit and meet the inspector.",
    },
  ],

  related: {
    projects: [
      "emergency-winter-failure",
      "farm-service-entrance-upgrade",
      "panel-upgrade-myerstown",
      "food-plant-equipment-power",
    ],
    articles: [
      "voltage-drop-long-farm-runs",
      "signs-your-panel-needs-replacing",
      "generator-maintenance-schedule",
    ],
  },

  neighbours: ["lancaster-county", "berks-county", "dauphin-county", "schuylkill-county"],

  keywords: [
    "electrician lebanon county pa",
    "electrician lebanon pa",
    "commercial electrician lebanon county",
    "farm electrician lebanon county pa",
    "emergency electrician lebanon pa",
  ],
};

export default area;
