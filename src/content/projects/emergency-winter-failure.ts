import type { Project } from "./types";

const project: Project = {
  slug: "emergency-winter-failure",
  title: "A winter failure call, and what it actually takes to get power back",
  category: "Emergency",
  location: "Lebanon County, PA",
  summary:
    "What happens on an after hours winter callout: finding the fault in the cold, what can be made safe at 2am, and what has to wait for daylight and parts.",
  lead:
    "The photograph at the top of this page is what an emergency call looks like in February. An enclosure open to the weather, snow inside it, components pulled apart on a tarp, and somebody working with bare hands because you cannot feel a terminal through a glove. This is a write up of how that kind of call runs, because the part people ask about afterwards is never the repair itself. It is the decision making.",

  facts: [
    { label: "Typical call time", value: "Between 10pm and 5am, most often in a cold snap or after a storm" },
    { label: "First job on arrival", value: "Establish what is dead, what is live, and what is unsafe" },
    { label: "Most common cause", value: "A connection that has been loosening for years, finished off by thermal cycling" },
    { label: "Hardest constraint", value: "Parts counters are closed, so the fix has to come out of the van" },
    { label: "What we aim for overnight", value: "Safe and running on the critical loads, not a finished job" },
    { label: "Hours", value: "Phone answered 24 hours, every day of the year" },
  ],

  photos: [
    {
      src: "/photos/projects/emergency-winter-failure-1.webp",
      alt: "Electrical enclosure opened up in the snow during an after hours repair",
    },
    {
      src: "/photos/projects/emergency-winter-failure-2.webp",
      alt: "Labelled transfer switches with an arc flash warning label",
    },
  ],

  sections: [
    {
      heading: "Why so many failures happen in the cold",
      body: [
        "Electrical faults are not evenly spread across the year. They cluster in the first hard freeze and in the first real heat, and the reason is the same in both cases. Metal moves. Every connection in a panel expands and contracts with load and with ambient temperature, and a lug that was left slightly under torque years ago works itself a little looser every cycle.",
        "For a long time nothing visible happens. Resistance at the joint creeps up, the joint runs warmer than its neighbours, the heat oxidises the contact surface, and the oxide raises the resistance further. It is a loop that feeds itself. Then one night the load goes up because every heater in the building is running, and the joint that has been quietly degrading for eight winters finally lets go.",
        "That is why the single highest value thing a farm or a plant can do is have the gear looked at with a thermal camera while it is under load, which is exactly what an [infrared survey of a switchboard](/projects/infrared-survey-switchboard) is for. Almost every emergency we attend was visible months earlier as a warm spot.",
      ],
    },
    {
      heading: "The first twenty minutes",
      body: [
        "Nobody who calls at two in the morning knows what is wrong. They know the milk pump is not running, or the office is dark, or the breaker will not stay in. So the first job is not repair, it is triage.",
        "The order is always the same. Find out what is actually dead and what only appears to be. Confirm whether the utility is present and balanced at the service, because roughly a third of the time the problem is upstream and belongs to the power company rather than to the customer. Look for anything unsafe: smoke damage, water in gear, a conductor that has let go and is still energised. Make that safe before touching anything else.",
        "Only then does the diagnosis start, and it starts by asking what changed. New equipment, a recent storm, work done by somebody else, a breaker that has been resetting more often for a fortnight. People almost always know the answer and almost never volunteer it unprompted.",
      ],
      bullets: [
        "What is dead, what is live, what is unsafe, in that order",
        "Voltage and balance at the service before anything downstream",
        "Anything that could re energise unexpectedly gets locked out",
        "What changed recently, asked directly, because it is usually the answer",
      ],
    },
    {
      heading: "What can be fixed at night and what cannot",
      body: [
        "An honest answer matters more at 2am than at 2pm. Some things are genuinely a night repair: a failed breaker of a common frame size, a burned lug that can be remade, a control circuit that can be jumped temporarily under supervision, a transfer switch that has not picked up and needs to be operated manually.",
        "Other things cannot be finished overnight and it is not useful to pretend otherwise. A main breaker in an obsolete frame, a damaged meter socket that the utility has to release, a section of switchgear with water in it, a feeder that needs to be pulled. For those the overnight goal changes: get the critical loads running on something, make the rest safe, and come back with the right parts.",
        "On a farm the critical load list is short and non negotiable. Ventilation first, because a poultry house without air movement starts losing birds inside the hour. Then milk cooling, then water. Everything else can wait until morning. That prioritisation is the same logic behind sizing [a farm standby generator](/projects/farm-standby-generator), and a farm that has one turns most of these calls into a scheduled repair instead of an emergency.",
      ],
    },
    {
      heading: "Working on live gear in the dark and the cold",
      body: [
        "The conditions in the photograph are the real hazard, more than the electricity. Snow melting into an open enclosure puts water where it should not be. Cold makes insulation brittle and hands clumsy. A head torch gives you a bright circle and destroys your night vision everywhere outside it.",
        "NFPA 70E does not have a clause that relaxes because it is late and somebody is losing product. The requirement to establish an electrically safe working condition, and to treat anything energised as a shock and arc flash hazard, is the same at 2am as at noon. In practice that means the temptation to work it live to save an hour is exactly the temptation to refuse.",
        "It also means the boring preparation earns its keep at night. Gear that is labelled, panels that have an accurate schedule, an arc flash label that tells you the incident energy at that point. None of that helps on the day it is installed. It helps on the worst night of the year. That is most of the argument for [a planned maintenance program and arc flash study](/projects/preventive-maintenance-arc-flash).",
      ],
    },
    {
      heading: "What the callout tells you about the building",
      body: [
        "An emergency is a diagnostic about more than the failed component. A single failed lug in otherwise tidy gear is bad luck. A failed lug in a panel where three other terminations are discoloured is a building that is going to call again in six weeks.",
        "So the write up that goes back to the customer afterwards is not just what was replaced. It is what else was found while the covers were off: the double lugged neutral, the breaker that is no longer manufactured, the panel with no spare capacity, the feeder that is warm along its whole length. Those notes are what turn a repair into a plan.",
        "Often the plan is a [service and panel upgrade](/electrical-service-upgrades), because the real problem is that the building has quietly doubled its load since the service was sized. Sometimes it is simpler than that and the answer is a proper maintenance interval. Either way the customer gets to decide with information rather than after the next failure.",
      ],
    },
    {
      heading: "Where the same call comes from",
      body: [
        "The pattern repeats across all three of the markets we work in. On farms it is ventilation, milk cooling and grain drying, and the clock is measured in animals. In plants it is a line that has stopped and a shift standing idle, where the cost is measured per hour and the pressure to rush is enormous. That is the same environment as [working inside a planned shutdown](/projects/plant-wiring-during-shutdown), except with none of the planning.",
        "In commercial buildings it is usually life safety, refrigeration or a tenant with no power, and the complication is that the responsible party is often three phone calls away at midnight.",
        "What does not change is the method. Find out what is true, make it safe, restore what matters most, and be straight about what has to wait. Our [24 hour emergency work](/emergency-electrician) is built around that order, and the round the clock hours on our listing are not a marketing line. They are how the phone is actually covered.",
      ],
    },
  ],

  faq: [
    {
      q: "How quickly can somebody get here?",
      a: "It depends on where you are and what is already running. We are based in Myerstown and cover Lebanon County and the farm country around it into Lancaster and Berks. Call and you will get a straight answer about timing rather than an optimistic one.",
    },
    {
      q: "Is it more expensive at night?",
      a: "After hours work costs more than scheduled work, and any electrician telling you otherwise is building it in somewhere else. What we will do is tell you on the phone whether it genuinely needs to be tonight, because sometimes the honest answer is that it can safely wait until morning and cost you less.",
    },
    {
      q: "The power is off but my neighbours have theirs. Is that my problem or the utility's?",
      a: "Either. The dividing line is usually the meter, but a failed service drop, a damaged mast or a lost phase on the utility side all look exactly like a customer fault from inside the building. Checking which side it is on is the first thing we do, and if it is theirs we will tell you so rather than charge you to find out.",
    },
    {
      q: "Can you get a poultry house running if the power is out for a long time?",
      a: "That depends entirely on what standby capacity is already installed. If there is a generator and a transfer switch, we can usually get it carrying the ventilation load. If there is nothing, the options at 2am are very limited, which is the argument for sorting [standby power](/standby-generator-installation) before the season rather than during it.",
    },
    {
      q: "Do I need to be there?",
      a: "Someone who can grant access and answer questions about what changed recently is worth a great deal. If that is not possible, tell us on the phone how to get in and where the gear is, and make sure we can reach you if a decision is needed.",
    },
  ],

  services: [
    { label: "24/7 emergency electrician", href: "/emergency-electrician" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
  ],

  related: ["infrared-survey-switchboard", "farm-standby-generator", "preventive-maintenance-arc-flash"],

  keywords: [
    "emergency electrician near me",
    "24 hour electrician",
    "after hours electrician",
    "same day electrician",
    "emergency commercial electrician",
    "power outage electrician",
  ],
};

export default project;
