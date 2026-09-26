import type { Area } from "./types";

const area: Area = {
  slug: "schuylkill-county",
  county: "Schuylkill County",
  title: "Electrician in Schuylkill County PA | Farm, Plant & Service Work",
  h1: "Electrical service across Schuylkill County",
  summary:
    "Agricultural, commercial and industrial electrical service across Schuylkill County PA: farms, plants, warehouses and service upgrades. Call (717) 821-9166.",
  lead:
    "Schuylkill County is our run north, over the mountain from Lebanon. Two things shape the work here more than anywhere else we go: the age of the building stock left over from the coal era, and the distance between buildings once you are off the main roads.",
  drive: "Pine Grove is about 30 minutes. Pottsville and the northern boroughs run 45 to 60.",

  hero: {
    src: "/photos/services/standby-generator-installation.webp",
    alt: "Standby generator and transfer equipment installed at a building",
  },

  towns: [
    {
      name: "Pine Grove",
      note: "The closest end of the county to us. Farms, shops and the distribution buildings off the I-81 interchange.",
    },
    {
      name: "Schuylkill Haven",
      note: "Small commercial and light industrial along the river, much of it in buildings older than the wiring rules.",
    },
    {
      name: "Pottsville",
      note: "The commercial centre of the county, with a lot of stock that has changed use two or three times.",
    },
    {
      name: "Orwigsburg",
      note: "Mixed commercial and residential edge with farm ground behind it, and a steady run of service work.",
    },
    {
      name: "Minersville",
      note: "Older borough buildings and small industrial units, where the service is usually the first thing to look at.",
    },
    {
      name: "Frackville",
      note: "Distribution and manufacturing near the interstate, plus shops and garages through the borough.",
    },
    {
      name: "Tamaqua",
      note: "The far northeastern end of our range, industrial history and the wiring that came with it.",
    },
  ],

  sections: [
    {
      heading: "Old stock, and what it hides",
      body: [
        "A great deal of the commercial and industrial property here was built for something that no longer happens in it. The building outlives the industry, the service stays where it was, and each new use gets added to whatever was left behind.",
        "What that produces is predictable: panels with no space and no available breakers, sub panels fed from sub panels, grounding that was never brought up to a modern arrangement, and equipment from manufacturers who stopped trading decades ago. Some of those boards are a replacement rather than a repair, and the difference is set out in [when a panel is finished](/blog/signs-your-panel-needs-replacing).",
        "None of that is a reason to condemn a building. It is a reason to find out what is really there before anybody promises what can be added to it.",
      ],
    },
    {
      heading: "Distance is a design problem here",
      body: [
        "Off the main roads the buildings are far apart, and that changes the electrical answer rather than just the drive. A run that is big enough to carry the current can still drop enough voltage along the way that a motor at the far end will not start on a cold morning.",
        "That is not a fault anybody can find with a meter at the panel, because at the panel everything reads correctly. The arithmetic is worked through in [voltage drop on long runs](/blog/voltage-drop-long-farm-runs), and the usual fix is a distribution point closer to the load rather than a bigger service at the house.",
      ],
    },
    {
      heading: "Standby power counts for more up here",
      body: [
        "Weather takes lines down in this county more often than it does south of the mountain, and restoration in the rural parts takes longer. For a building with livestock, refrigeration or a process in it, that combination is exactly the case standby power exists for.",
        "The sizing conversation is the same everywhere and gets it wrong the same way everywhere: sets chosen from the size of the service instead of from the list of loads that genuinely cannot stop. That arithmetic is in [starting load against running load](/blog/generator-sizing-starting-vs-running), and a finished installation is in [this generator and transfer switch job](/projects/standby-generator-transfer-switch).",
      ],
    },
  ],

  demand: [
    {
      title: "Standby generators and transfer switches",
      body:
        "Where outages last longer, the set has to actually start and transfer. Proved with a real outage, not a start button.",
      service: "standby-generator-installation",
    },
    {
      title: "Obsolete panels and old services",
      body:
        "Boards from makers who stopped trading decades ago, and services that three changes of use ago stopped being enough.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Long feeder runs between buildings",
      body:
        "Underground and overhead runs sized for the voltage drop rather than only for the current they carry.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Plant and machine work",
      body:
        "Motor circuits, drives and equipment connections in buildings that were built for a different process.",
      service: "industrial-electrical-services",
    },
    {
      title: "Warehouse and shop lighting",
      body:
        "Retrofits in high buildings, chosen so that replacing one fixture in six years is not a day with a lift.",
      service: "commercial-led-lighting",
    },
    {
      title: "Infrared surveys",
      body:
        "On old gear this finds the connection that would otherwise let go on the coldest night of the year.",
      service: "electrical-preventive-maintenance",
    },
  ],

  facilities: [
    "Farms and livestock buildings",
    "Distribution buildings along I-81",
    "Older industrial and mill buildings",
    "Borough commercial and retail units",
    "Shops, garages and service bays",
    "Pole buildings and equipment storage",
    "Water and pumping installations",
  ],

  faq: [
    {
      q: "Is Schuylkill County outside your normal range?",
      a: "The southern end around Pine Grove is a normal run. Pottsville and north is further than we usually go for small work, so we take planned jobs there rather than same day service calls, and we say so when you ring.",
    },
    {
      q: "Our panel is an obsolete make. Can it be repaired?",
      a: "Sometimes, if breakers are still obtainable and the board is otherwise sound. Where it has been through a fault, a fire or water, it is a replacement, because the Code does not recognise reconditioning a panelboard.",
    },
    {
      q: "A motor at the far end of the property will not start. Is the wire too small?",
      a: "Often the wire is big enough for the current and still too small for the distance. Voltage drop across a long run is the usual cause, and the answer is either larger conductors or a distribution point closer to the load.",
    },
    {
      q: "We lose power often. Is a generator worth it?",
      a: "It depends entirely on what is in the building when the power goes. If something is alive, cold or part way through a process, the answer is usually yes, and the set should be sized from that short list rather than from the service.",
    },
    {
      q: "Do you travel this far for emergency work?",
      a: "For customers we already work with, yes. For a first call at three in the morning an hour away, we will be honest that somebody local will get there sooner, and we would rather say that than take the job.",
    },
  ],

  related: {
    projects: [
      "standby-generator-transfer-switch",
      "underground-feeders-farm-yard",
      "service-pole-overhead-drop",
      "panel-upgrade-myerstown",
    ],
    articles: [
      "voltage-drop-long-farm-runs",
      "generator-sizing-starting-vs-running",
      "transfer-switch-types",
    ],
  },

  neighbours: ["lebanon-county", "berks-county", "dauphin-county"],

  keywords: [
    "electrician schuylkill county pa",
    "electrician pottsville pa",
    "commercial electrician schuylkill county",
    "generator installation schuylkill county",
    "electrician pine grove pa",
  ],
};

export default area;
