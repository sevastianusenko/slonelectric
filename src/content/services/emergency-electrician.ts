import type { Service } from "./types";

const service: Service = {
  slug: "emergency-electrician",
  kind: "service",
  title: "24/7 Emergency Electrician | 24 Hour Electrical Service | Lancaster & Lebanon County PA",
  h1: "Emergency electrical service, 24 hours",
  summary:
    "24 hour emergency electrician for farms, plants and businesses in Lebanon, Lancaster and Berks counties. Ventilation failures, lost phases, burned services and storm damage.",
  lead:
    "Emergency work is judged on two things: whether somebody competent picks up, and whether they tell you the truth about what happens next. Our phone is answered 24 hours because a ventilation failure at two in the morning does not wait until Monday. Some of what gets called an emergency genuinely is one, and some of it can safely wait until daylight at a fraction of the cost. We will say which on the call.",

  hero: {
    src: "/photos/services/emergency-electrician.webp",
    alt: "Electrical enclosure opened up in the snow during an after hours repair",
  },

  sections: [
    {
      heading: "What counts as an emergency",
      body: [
        "The test is simple. Is something unsafe right now, or is something losing money or livestock every hour it stays off? If either is true, call at whatever hour it is. If neither is, morning is usually the better answer for everybody.",
      ],
      bullets: [
        "Ventilation, milk cooling or heating that has stopped in an occupied livestock building",
        "Burning smell, scorch marks, smoke or a hot panel cover",
        "Water in a panel, a flooded pit or a submerged disconnect",
        "A breaker that will not reset, or that trips again immediately",
        "Half the building dark, motors humming and equipment cutting out, which usually means a lost phase or a lost leg",
        "A production line or a walk in cooler down with product in it",
        "Storm damage, a pulled service mast, a downed overhead drop or a struck panel",
      ],
    },
    {
      heading: "When the air stops moving",
      body: [
        "On a farm the clock is not measured in hours of lost trading, it is measured in animals. A tunnel ventilated poultry house on a hot afternoon has very little thermal margin once the fans stop, and extension guidance on emergency power for poultry production is consistent on the point: losses begin in minutes, not hours. A dairy has more time, but a parlour that cannot run still has a herd waiting and milk that has to stay cold.",
        "So a ventilation call is handled differently from a lighting call. We ask what has curtains, what can be opened, what the alarm did and whether the standby set tried to start. The useful thing to know meanwhile is that the fault is usually upstream of the fans: a controller, a contactor, a lost phase or a transfer switch that sat still. [Ventilation and controller power in a poultry house](/projects/poultry-house-ventilation-power) covers the arrangement, and the wider farm side is on [the agricultural page](/agricultural-electrical-services).",
        "After a night like that the conversation is about standby power and alarms rather than about the fault, because a generator sized from the service instead of from the starting load will not pick the fans up. That arithmetic is in [why a generator that looks big enough still stalls](/blog/generator-sizing-starting-vs-running).",
      ],
    },
    {
      heading: "Made safe tonight, finished in daylight",
      body: [
        "A lot of night work splits into two halves. The first is making the situation safe and getting back whatever can be got back: isolating a faulted circuit, replacing a failed breaker or contactor from the van, re-terminating a burned lug, feeding the critical loads temporarily so the fans run and the cooler holds. That half we can usually do on the night.",
        "The second half often cannot be done at three in the morning, and pretending otherwise helps nobody. Meter equipment and service conductors mean the utility has to be involved. A burned panel is a replacement rather than a repair, which is a scheduled job with a permit and an inspection, as [when a panel needs replacing rather than repairing](/blog/signs-your-panel-needs-replacing) explains. Mast work in ice or wind waits for weather. Anything we leave temporary is written down as temporary, with what remains outstanding.",
        "After hours labour costs more than daytime labour. That is true of every electrician and we would rather say it than bury it. It is also why we will tell you on the phone when something can safely wait, and what to switch off so that it can.",
      ],
    },
    {
      heading: "Lost phases, burned services and storms",
      body: [
        "Three failures make up most commercial and farm emergency calls. The first is a lost phase or a lost leg, which shows up as half a building working, single phase motors running and three phase motors humming, getting hot and stalling. Damage accumulates immediately, so isolating the motors is the first thing to do while help is on the way, and the diagnosis order is in [why a three phase motor will not start](/blog/three-phase-motor-wont-start).",
        "The second is the service entrance itself: a burned lug, a corroded meter socket, a mast pulled loose by ice or a branch. That work is coordinated with the utility, sometimes on the night and sometimes at first light, as in [rebuilding an overhead drop and service pole](/projects/service-pole-overhead-drop). The third is a storm. Lightning rarely destroys everything at once. It takes out a controller here, a drive there and a board in the dryer, and the failures surface over the following week. That is the argument for [surge protection at the service](/projects/surge-protection-service), which is cheap next to one controller.",
      ],
    },
    {
      heading: "Most of these were visible months earlier",
      body: [
        "A loose or oxidised connection does not fail suddenly. It runs a few degrees warm, oxidises a little more, runs warmer, then lets go on the coldest night or the hottest afternoon, because that is when the load is highest. Under a thermal camera it is obvious long before it is obvious to anyone else, which is the whole point of [a scanned switchboard](/projects/infrared-survey-switchboard) and why a yearly survey costs less than one call out.",
        "The same is true of standby equipment. Generators that are not exercised do not start, and transfer switches that have not moved in three years do not transfer. What that inspection involves is on [the preventive maintenance page](/electrical-preventive-maintenance), and [an account of one winter failure](/projects/emergency-winter-failure) describes the night when none of it was done.",
      ],
    },
  ],

  scope: [
    {
      group: "Power loss and partial outages",
      note: "The building is dark, or worse, half dark.",
      items: [
        "Total loss of power to a building or yard",
        "Lost phase and lost leg diagnosis",
        "Main breaker and main disconnect failures",
        "Service entrance and meter socket faults",
        "Utility side confirmation before we touch anything",
        "Temporary supplies to critical loads",
        "Generator connection to keep a building running",
        "Restoring circuits in priority order",
      ],
    },
    {
      group: "Burning, heat and water",
      note: "Anything that is unsafe right now rather than inconvenient.",
      items: [
        "Burning smell, scorch marks or smoke at a panel",
        "Hot breakers, hot covers and melted insulation",
        "Burned lugs, busbars and terminations",
        "Arcing, flashing and audible buzzing in gear",
        "Water in panels, pits and disconnects",
        "Flood damaged equipment assessment",
        "Making equipment safe and isolating it",
        "Damaged cable and conduit made safe",
      ],
    },
    {
      group: "Livestock building failures",
      note: "Where the clock is measured in animals rather than hours.",
      items: [
        "Ventilation and tunnel fan failures",
        "House controller lockups and power loss",
        "Contactor, starter and relay failures",
        "Milk cooling, compressor and bulk tank faults",
        "Heater, brooder and waterer circuit failures",
        "Feed line, auger and motor faults",
        "Alarm and dialer systems that did not raise anybody",
        "Standby generator that failed to pick up the load",
      ],
    },
    {
      group: "Plant and commercial breakdowns",
      note: "Down time with a per hour number attached.",
      items: [
        "Production line and conveyor stoppages",
        "Motor, starter and drive failures",
        "VFD faults and nuisance trips",
        "Walk in cooler and freezer power loss",
        "Kitchen equipment and hood circuit failures",
        "Control circuit and interlock faults",
        "Breaker replacement from stock where available",
        "Temporary rigging to finish a shift or a run",
      ],
    },
    {
      group: "Storm and impact damage",
      note: "Weather, vehicles and lightning.",
      items: [
        "Pulled or damaged service masts",
        "Downed overhead drops and damaged weatherheads",
        "Lightning damage to controllers and boards",
        "Surge damage assessment across a site",
        "Poles, yard lights and fixtures struck or fallen",
        "Underground feeder damage from digging",
        "Coordination with the utility on their portion",
        "Insurance documentation of what failed and why",
      ],
    },
    {
      group: "After the call is over",
      note: "Closing out what was left temporary.",
      items: [
        "Written record of temporary and permanent work",
        "Permanent repair scheduled in daylight",
        "Panel or service replacement where a repair is not honest",
        "Surge protection fitted at the service",
        "Alarm and monitoring added to the critical loads",
        "Infrared survey to find the next one early",
        "Generator and transfer switch testing",
        "Standing arrangement for the next call",
      ],
    },
  ],

  facilities: [
    "Poultry houses and livestock barns",
    "Dairy parlours, bulk tank and milk rooms",
    "Food processing plants and packing lines",
    "Retail units, restaurants and offices",
    "Warehouses and cold storage",
    "Farm service entrances and yard distribution",
    "Workshops and light industrial units",
  ],

  audience: [
    {
      title: "Growers whose fans have stopped",
      body:
        "The call that cannot wait for morning. We ask what has curtains, what can be opened and whether the standby set tried to start, because the first ten minutes are yours and they matter more than our drive time.",
    },
    {
      title: "Dairies that cannot milk or cannot cool",
      body:
        "A parlour down with a herd waiting, or a bulk tank that has stopped holding. Both have a deadline attached, and both are usually a contactor, a control circuit or a lost leg rather than the equipment itself.",
    },
    {
      title: "Plants with a line stopped mid run",
      body:
        "Product part way through a process and a shift standing in it. We would rather get you finishing the run tonight and do the permanent repair properly in a planned window.",
    },
    {
      title: "Businesses with refrigeration and stock at risk",
      body:
        "Restaurants, stores and cold storage where the loss is in the walk in rather than in the till. Getting refrigeration back on a temporary feed is usually the first move, and we say plainly that it is temporary.",
    },
    {
      title: "Anyone who can smell something burning",
      body:
        "This is the call we would rather have too early than too late. Switch it off at the main if you can do so safely, then call. Nothing about a hot panel improves by waiting to see.",
    },
    {
      title: "Property owners after a storm",
      body:
        "A mast pulled loose, a drop down in a field, equipment that died in a strike. Some of it is ours, some of it is the utility's, and the first useful thing we can do is tell you which is which.",
    },
  ],

  process: {
    title: "What happens after you call",
    lines: [
      "The phone is answered by somebody who does this work, not a call centre taking a message for the morning.",
      "A few questions: what stopped, what is still on, what it smells like, what the breaker did and what changed recently.",
      "Immediate advice on what to isolate or open up, because the first ten minutes are yours.",
      "An honest time of arrival, based on where the truck is and what county you are in, rather than a number that sounds good.",
      "On site: make it safe first, then find the fault, then restore what can be restored tonight.",
      "A clear statement of what is temporary, what is permanent and what still needs the utility, a part or daylight.",
      "A follow up to close out the temporary work and, where it applies, [a maintenance check so it does not repeat](/electrical-preventive-maintenance).",
    ],
  },

  whyUs: [
    {
      title: "A person who does this work answers",
      body:
        "Not an answering service taking a message for the morning. The person on the phone is the person deciding what happens next, which is why the advice in the first two minutes is usually worth something.",
    },
    {
      title: "We tell you when it can wait",
      body:
        "Night labour costs more, here as anywhere. The honest version of that is saying which faults are safe until daylight and what to switch off so they are, rather than billing a call out for something that could have waited.",
    },
    {
      title: "Farm failures are familiar, not unusual",
      body:
        "A ventilation call at two in the morning is a kind of job we have done many times, not an unusual one. That shows in the questions asked on the phone and in what is already on the truck.",
    },
    {
      title: "Temporary work is labelled as temporary",
      body:
        "If something is rigged to get you through the night, you get it in writing along with what remains outstanding. Nothing is quietly left in place to be discovered by the next electrician.",
    },
    {
      title: "We know when it is the utility's problem",
      body:
        "A fast, correct answer about where the fault sits saves hours. If neighbouring properties are dark or the conductors are theirs, we will say so immediately instead of billing you to find out.",
    },
    {
      title: "We close the loop afterwards",
      body:
        "The follow up conversation is about why it happened: an exercise schedule nobody kept, missing surge protection, a connection that had been running warm for a year. Most emergency calls are a maintenance conversation that arrived late.",
    },
  ],

  faq: [
    {
      q: "Do you actually answer at night?",
      a: "Yes. Our hours on Google are listed as open 24 hours because that is how the phone is really covered. Anatoly runs the crew and takes the calls, so the person you speak to is the person deciding what happens next.",
    },
    {
      q: "How fast can you get there?",
      a: "It depends where you are and what is already running. We cover Lebanon, Lancaster and Berks counties, and you get a real answer on the call rather than a promise that cannot be kept. If somebody closer would get you back faster, we will say so.",
    },
    {
      q: "Does after hours work cost more?",
      a: "Yes. Night, weekend and holiday labour carries a higher rate, as it does with any contractor. What we do about it is tell you honestly when a fault can wait until morning, and what to turn off so that it can.",
    },
    {
      q: "The whole road is dark. Should I call you or the utility?",
      a: "Call the utility first if neighbouring properties are out too, because the fault is theirs and we cannot work on their conductors. If your building is the only one out, or only part of it is out, that is ours. A downed line is always a call to the utility and to 911, and nobody should go near it.",
    },
    {
      q: "Our standby generator did not start. Can you get it running?",
      a: "Often yes, on the night. The usual causes are a battery, a fuel or coolant condition, or a controller left in the wrong position after a service. The reason it was not noticed sooner is almost always a missed exercise schedule, which is covered in [what a generator needs and how often](/blog/generator-maintenance-schedule).",
    },
    {
      q: "What should I do before you arrive?",
      a: "If anything is hot, smoking or smells of burning, switch it off at the main if you can reach it safely and leave it off. In a livestock building, open what can be opened and start whatever alternative air movement exists. If three phase motors are humming or stalling, isolate them, because they are being damaged every minute they sit like that.",
    },
    {
      q: "Will you come out for a small problem?",
      a: "Yes, but we will also tell you on the phone if it is one. A tripped circuit in an office at midnight usually costs less to leave until morning, and that advice is free.",
    },
  ],

  related: {
    projects: [
      "emergency-winter-failure",
      "poultry-house-ventilation-power",
      "infrared-survey-switchboard",
      "service-pole-overhead-drop",
      "surge-protection-service",
      "panel-upgrade-myerstown",
      "farm-standby-generator",
      "machine-connection-motor-control",
    ],
    articles: [
      "three-phase-motor-wont-start",
      "signs-your-panel-needs-replacing",
      "generator-maintenance-schedule",
      "vfd-ground-fault-troubleshooting",
      "how-to-read-a-panel-schedule",
    ],
  },

  seeAlso: [
    "standby-generator-installation",
    "electrical-preventive-maintenance",
    "electrical-service-upgrades",
    "agricultural-electrical-services",
    "control-panels-machine-wiring",
  ],

  keywords: [
    "emergency electrician",
    "24 hour electrician",
    "after hours electrician",
    "same day electrician",
    "emergency electrical contractor",
    "emergency commercial electrician",
  ],
};

export default service;
