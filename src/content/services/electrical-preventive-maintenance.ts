import type { Service } from "./types";

const service: Service = {
  slug: "electrical-preventive-maintenance",
  kind: "service",
  title: "Electrical Preventive Maintenance, Infrared Surveys & Arc Flash Studies | PA",
  h1: "Preventive maintenance, infrared surveys and arc flash studies",
  summary:
    "Infrared thermographic surveys, torque and insulation testing, and arc flash studies for plants and farms across Lebanon, Lancaster and Berks counties in Pennsylvania.",
  lead:
    "Electrical equipment gives a long warning before it fails, and almost nobody is listening. A connection that will drop a plant in February has been running warm every winter for years. The point of this work is to find those, put a number on them, and fix them while the building is still running.",

  hero: {
    src: "/photos/services/electrical-preventive-maintenance.webp",
    alt: "Thermal imaging camera in use during an electrical survey",
  },

  sections: [
    {
      heading: "An infrared survey means nothing without load",
      body: [
        "A thermal image of a switchboard at ten percent load is a photograph of a wall. Heat at a bad connection rises with the square of the current, so a joint that will be alarming at full production barely registers when the plant is idle. The equipment wants to be at forty percent of rated load or better before a survey is worth doing, which makes scheduling half the job.",
        "So we survey on a production day, with covers off or through infrared windows, because a closed metal door is opaque to the camera and hides what you came to see. Each image is recorded with the load read at that moment on a clamp meter, since a delta of 20 degrees at half load is a different finding from the same delta at full load.",
        "Findings get graded rather than described. A rise of 1 to 3 degrees Celsius over a matching phase is worth a note. Four to fifteen is a probable fault to schedule. Over fifteen is repaired now. Those thresholds come from the NETA maintenance testing tables, and they are what makes a report actionable instead of a folder of orange pictures. [Our infrared survey of a switchboard](/projects/infrared-survey-switchboard) shows it in practice.",
      ],
    },
    {
      heading: "What a loose connection does over eight winters",
      body: [
        "Name the failure and the case for maintenance makes itself. A lug is tightened by hand on a Friday and left slightly loose. Every load cycle warms it and every night cools it, so the conductor creeps under the screw. Contact area shrinks, resistance rises, and higher resistance makes more heat, which accelerates the same process.",
        "Meanwhile the heat is cooking the insulation beside it. The rule of thumb across insulation engineering is that every 10 degrees Celsius above rating roughly halves remaining life, which is why a joint running 40 degrees warm does not fail in a decade, it fails in a few years. Then one cold evening at peak load it opens and takes the phase with it, at the worst possible hour, which is what [the winter failure call](/projects/emergency-winter-failure) describes.",
      ],
    },
    {
      heading: "Torque, resistance and tests that produce numbers",
      body: [
        "Infrared finds what is already wrong. The de energised visit is what stops the next one starting. Article 110.14 of the National Electrical Code requires terminations to be tightened to the manufacturer's specified torque using a calibrated tool, which means a torque wrench and a table, not a feel and a grunt.",
        "Alongside that: cleaning and inspecting bus and breakers, exercising breakers that have not moved in years, and insulation resistance testing on feeders and motor windings. Readings get written down and compared visit to visit, because the trend across three years says more than any single number. Where the gear is switchgear rather than a panelboard the scope grows, for the reasons in [what switchgear is](/blog/what-is-switchgear).",
        "IEEE 43 covers the winding side, including the polarisation index, the ratio of the ten minute reading to the one minute reading, where a result above 2 is generally accepted and a falling result over years is the warning. All of it goes in the report against the equipment tag, so the next visit has something to compare with.",
      ],
    },
    {
      heading: "NFPA 70B stopped being a suggestion",
      body: [
        "For decades NFPA 70B was a Recommended Practice: everybody cited it and nobody was bound by it. The 2023 edition made it a Standard, written in mandatory language. That matters for two reasons.",
        "The first is that it now sets out what an electrical maintenance program has to contain, with maintenance intervals driven by the condition of the equipment rather than by a fixed calendar. The second is that insurers, and anyone writing a contract, now have a document they can point at when they ask what your program is.",
        "It also connects to NFPA 70E, which assumes equipment is in a normal operating condition before certain work can be justified. Equipment that has never been maintained cannot honestly be called that, so the maintenance program and the safety program are the same conversation.",
        "In practice the change is smaller than it sounds for anyone already doing the work, and larger than it sounds for anyone who has been relying on a habit. The difference is documentation: an equipment list, stated intervals, recorded results and evidence that findings were corrected. That is what an insurer or a contract can actually be shown.",
      ],
    },
    {
      heading: "What an arc flash study is, and what the labels are for",
      body: [
        "An arc flash study is an engineering calculation, not a sticker order. It models the system from the utility transformer down: available fault current at every point, the arcing current that would actually flow, how long each protective device takes to clear it, and from those the incident energy in calories per square centimetre at a working distance. IEEE 1584 is the method.",
        "The result is two things. A label on each piece of gear stating nominal voltage, the arc flash boundary, the incident energy or required PPE level and the shock approach boundaries, so the person opening the door knows what they are facing. And a report that often shows the settings on an upstream breaker are what makes a downstream panel dangerous, which is frequently fixable without buying anything.",
        "NFPA 70E requires the assessment to be reviewed at least every five years, and sooner when the system changes. A study also needs a correct one line, and where one does not exist we build it, which is what [the load study and drawings job](/projects/load-study-and-drawings) covers. The work as a package is in [the preventive maintenance and arc flash job](/projects/preventive-maintenance-arc-flash).",
      ],
    },
  ],

  scope: [
    {
      group: "Infrared thermography",
      note: "Done under load, or it is a photograph of a wall.",
      items: [
        "Switchboard and switchgear surveys under load",
        "Panelboard and distribution board scanning",
        "Motor control centre and starter bucket surveys",
        "Transformer, disconnect and busway inspection",
        "Feeder termination and lug scanning",
        "Load readings recorded beside every image",
        "Findings graded against NETA thresholds",
        "Retest after repair to prove the fix",
      ],
    },
    {
      group: "De energised testing",
      note: "The visit that stops the next fault starting.",
      items: [
        "Torque verification to manufacturer specification",
        "Insulation resistance testing on feeders",
        "Motor winding tests and polarisation index",
        "Breaker exercising and mechanism checks",
        "Bus cleaning and contact inspection",
        "Ground resistance and bonding verification",
        "Protective device settings recorded and checked",
        "Trended readings compared visit to visit",
      ],
    },
    {
      group: "Arc flash and safety",
      note: "An engineering calculation, not a sticker order.",
      items: [
        "Incident energy analysis under IEEE 1584",
        "Available fault current data gathering",
        "Protective device coordination review",
        "Arc flash and shock boundary labelling",
        "Five year review of an existing study",
        "One line drawing creation where none exists",
        "Equipment condition assessment for NFPA 70E",
        "Recommendations that reduce energy without new gear",
      ],
    },
    {
      group: "Maintenance programmes",
      note: "The documented version, which is what NFPA 70B now expects.",
      items: [
        "Equipment inventory and criticality ranking",
        "Intervals set by equipment condition",
        "Scheduled visits booked a year ahead",
        "Written reports in an insurer ready format",
        "Priority lists with findings costed",
        "Records kept so the history is visible",
        "Spare parts review for critical gear",
        "Contractor and staff responsibilities defined",
      ],
    },
    {
      group: "Standby and emergency systems",
      note: "Equipment that only matters on the day it is needed.",
      items: [
        "Generator exercise and load testing",
        "Transfer switch operation and contact inspection",
        "Battery, charger and starting system checks",
        "Emergency and exit lighting testing",
        "Alarm and dialer function verification",
        "Surge protective device status checks",
        "UPS and battery room inspection",
        "Documented test results for each system",
      ],
    },
    {
      group: "Documentation and correction",
      note: "What turns a report into something useful.",
      items: [
        "Panel schedule correction and circuit identification",
        "Single line drawing updates as found",
        "Equipment labelling and tagging",
        "Repair of findings during the same visit where possible",
        "Scheduled follow up for larger corrections",
        "Working space corrections under Article 110.26",
        "Removal of abandoned and unidentified wiring",
        "Handover pack for your own maintenance staff",
      ],
    },
  ],

  facilities: [
    "Food processing and packing plants",
    "Light manufacturing and machine shops",
    "Warehouses and distribution centres",
    "Feed mills, dryers and grain sites",
    "Poultry and dairy operations with their own service",
    "Water and waste pumping stations",
    "Commercial buildings with a main switchboard",
  ],

  audience: [
    {
      title: "Plants that have already had the unplanned outage",
      body:
        "Almost every [emergency call](/emergency-electrician) was visible months earlier as a few degrees of extra heat. The conversation after a bad night is usually this one, and it is cheaper held before.",
    },
    {
      title: "Operations answering to an insurer",
      body:
        "Thermographic reports are increasingly asked for, and what is wanted is specific: images, temperature rise, load at the time, equipment identified and evidence the findings were corrected. That is the format we report in.",
    },
    {
      title: "Facilities with equipment nobody has opened",
      body:
        "Breakers that have not moved in years do not always move when you need them to, and the same is true of [a standby set nobody exercises](/standby-generator-installation). Exercising gear is unglamorous work that turns up problems while there is still time to order parts.",
    },
    {
      title: "Sites with no drawings and no history",
      body:
        "You cannot maintain what nobody has mapped. The first visit often produces the one line and the equipment list as much as it produces findings, and everything after that is cheaper.",
    },
    {
      title: "Employers with an arc flash obligation",
      body:
        "NFPA 70E expects the assessment reviewed at intervals not exceeding five years and sooner when the system changes. Most plants find their labels out of date because the plant changed and the study did not.",
    },
    {
      title: "Farms with a service worth protecting",
      body:
        "A farm main and its distribution point carry everything, often outdoors, often in corrosive air. An annual look under load costs far less than the night a lug lets go with a house full of birds.",
    },
  ],

  process: {
    title: "How a maintenance visit runs",
    lines: [
      "An equipment list and a one line drawing, or we produce one if there is none.",
      "The survey scheduled for a working day, because load is what makes it meaningful.",
      "Infrared on energised gear with covers off or through windows, with load recorded beside each image.",
      "A separate de energised visit for torque checks, cleaning, breaker exercise and insulation testing.",
      "A written report: images, temperature rise, load at the time, and a priority list you can hand to an insurer.",
      "Repairs, then a retest of anything that was found hot.",
      "A date for the next visit, set against the interval the equipment condition justifies.",
    ],
  },

  whyUs: [
    {
      title: "We survey when the plant is busy",
      body:
        "Heat at a bad connection rises with the square of the current, so a joint that will be alarming at full production barely registers when the building is idle. Scheduling the survey on a working day is half the value of it.",
    },
    {
      title: "Findings are graded, not just photographed",
      body:
        "A few degrees over a matching phase is a note. Four to fifteen is scheduled work. Over fifteen is repaired now. Thresholds from the NETA tables are what turn a folder of orange pictures into a list somebody can act on.",
    },
    {
      title: "Torque comes from a wrench and a table",
      body:
        "Article 110.14 asks for the manufacturer's specified torque applied with a calibrated tool. A feel and a grunt is how the loose connection got there in the first place.",
    },
    {
      title: "Numbers get trended, not filed",
      body:
        "Insulation readings and polarisation index compared across visits tell you far more than any single measurement. A result that is falling year on year is a warning; the same number in isolation is not.",
    },
    {
      title: "We are honest about label methods",
      body:
        "The PPE category table in NFPA 70E is allowed within its limits, and it is not an incident energy analysis. If you want real numbers on the label, that is a study, and we will say so rather than sell stickers.",
    },
    {
      title: "We fix what we find",
      body:
        "A report from somebody who cannot then do the repairs leaves you managing two contractors. Most findings get corrected on the same visit or the next scheduled one, and then retested to prove it.",
    },
  ],

  faq: [
    {
      q: "How often should this be done?",
      a: "Annually for infrared on most facilities, more often on gear that runs near its rating or in dust and heat. De energised testing runs on a longer cycle. NFPA 70B ties the interval to the equipment condition, so a clean dry switchboard and a corroded one do not get the same schedule.",
    },
    {
      q: "Do we have to shut down?",
      a: "Not for the infrared survey. The opposite, in fact, since we need the plant running under load. Torque checks and insulation testing need the gear dead, and that part is normally scheduled for a shutdown or a weekend.",
    },
    {
      q: "Our insurer asked for a thermographic report. Is that what this is?",
      a: "Yes. They want images with temperature rise, load at the time, the equipment identified, and evidence the findings were corrected. That is the format we report in.",
    },
    {
      q: "What do you need from us for an arc flash study?",
      a: "A one line drawing, available fault current from the utility, and the make, model and settings of the protective devices. Where those are missing we gather them on site. Panel documentation usually needs attention first, which is why [reading a panel schedule](/blog/how-to-read-a-panel-schedule) matters more than it sounds.",
    },
    {
      q: "Our labels say Category 2. Is that a study?",
      a: "No. That is the PPE category table method in NFPA 70E, which is allowed within its stated limits but is not an incident energy analysis, and the two methods cannot be mixed on the same equipment. If you want numbers on the label, that is a study.",
    },
    {
      q: "Is this worth it on a farm, or only in a plant?",
      a: "Worth it anywhere the service carries something that cannot stop. A farm main and yard distribution point sit outdoors in corrosive air and carry every building, so an annual look under load is cheap next to one bad night. The wider farm picture is on [the agricultural page](/agricultural-electrical-services).",
    },
    {
      q: "Can you repair what you find, or do we need another contractor?",
      a: "We repair it. Most findings are corrected on the same visit or the next scheduled one, then retested to confirm the temperature came down. A report from somebody who cannot do the work leaves you coordinating two companies over one loose lug.",
    },
  ],

  related: {
    projects: [
      "infrared-survey-switchboard",
      "preventive-maintenance-arc-flash",
      "load-study-and-drawings",
      "emergency-winter-failure",
      "commercial-panel-room-feeders",
      "surge-protection-service",
      "three-phase-distribution-upgrade",
      "plant-wiring-during-shutdown",
    ],
    articles: [
      "what-is-switchgear",
      "how-to-read-a-panel-schedule",
      "electrical-distribution-in-a-building",
      "signs-your-panel-needs-replacing",
      "generator-maintenance-schedule",
    ],
  },

  seeAlso: [
    "industrial-electrical-services",
    "commercial-electrical-services",
    "emergency-electrician",
    "standby-generator-installation",
    "electrical-service-upgrades",
  ],

  keywords: [
    "electrical preventive maintenance",
    "infrared electrical inspection",
    "thermal imaging electrical",
    "arc flash study",
    "nfpa 70e",
    "electrical testing services",
  ],
};

export default service;
