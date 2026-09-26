import type { Project } from "./types";

const project: Project = {
  slug: "farm-standby-generator",
  title: "Farm standby generator, sized for the worst hour rather than the average one",
  category: "Standby power",
  location: "Lebanon County, PA",
  summary:
    "Standby power on a livestock farm: which loads are life critical, PTO against fixed sets, sizing for fan starting, transfer equipment, fuel and testing.",
  lead:
    "On a livestock farm the generator is not a convenience. When the line drops on a hot afternoon a poultry house without ventilation starts losing birds within the hour, and a dairy still has a herd to milk and milk to keep cold. This is standby power built around those loads rather than around the size of the service.",

  photos: [
    {
      src: "/photos/projects/farm-standby-generator-1.webp",
      alt: "Diesel generator set with batteries and exhaust connected in a farm generator room",
    },
    {
      src: "/photos/projects/farm-standby-generator-2.webp",
      alt: "Trenching across a farm yard for the generator supply",
    },
  ],

  sections: [
    {
      heading: "What an outage actually costs on a livestock farm",
      body: [
        "A tunnel ventilated poultry house is a sealed building. The birds inside produce heat and moisture continuously and the fans are the only thing removing either. Lose the fans on a hot day and the inside temperature climbs quickly. The losses start well inside an hour and none of it is recoverable.",
        "A dairy runs on a slower clock with the same arithmetic. Cows have to be milked on schedule, the vacuum pump and milk pump need power, and the bulk tank has to hold temperature or the load is dumped. A few hours without the compressor is a tank of milk and a wash cycle that never ran.",
        "Grain drying and feed handling sit a step below that. Nothing dies, but a wet bin does not wait politely for the line to come back. This is why standby power is the one piece of [agricultural electrical work](/agricultural-electrical-services) we treat as life safety rather than as production equipment.",
      ],
    },
    {
      heading: "Which loads are genuinely life critical",
      body: [
        "The temptation on a farm is to back up the whole place. That buys a set nobody can afford and nobody ends up testing. The better exercise is to write down what has to keep running with everybody asleep and nobody available to switch anything by hand.",
        "On poultry that is ventilation first, then the house controller and its alarm, then water. On a dairy it is the vacuum pump, the milk pump and plate cooler, the bulk tank compressor, the well pump and enough light in the parlour to work safely. Nearly everything else, including shop loads, yard lighting and the grain system, can either wait or be switched on by hand once the critical block is running steadily.",
      ],
      bullets: [
        "Tunnel and stir fans, with the curtain or inlet machines that work with them",
        "House controller, its backup and the alarm that wakes somebody up",
        "Well pump and water lines to the birds or the herd",
        "Vacuum pump, milk pump and bulk tank compressor in the parlour",
        "Enough parlour and walkway light to work at night",
      ],
    },
    {
      heading: "PTO sets against fixed standby sets",
      body: [
        "A tractor driven PTO generator is a real answer and plenty of farms across Lebanon and Lancaster counties run one. It costs less per kilowatt than a fixed set, it has no engine of its own to maintain, and the farm already owns the tractor. What it does not have is autonomy. Somebody has to be there, hook it up, bring the tractor to speed and hold it there for the length of the outage.",
        "That works for grain drying and for daytime outages. It is a poor fit for ventilation, because the failure that kills birds happens at three in the morning while everybody is asleep. It also ties up a tractor that has to stay at the right engine speed to hold frequency, which means fuel, hours and constant attention.",
        "A fixed set with an automatic transfer switch is what the critical block wants. Plenty of farms end up with both: an automatic set covering the houses or the parlour, and a PTO unit for the rest of the yard. The sizing and transfer thinking is the same as on the [commercial standby and transfer switch work](/projects/standby-generator-transfer-switch) we do.",
      ],
    },
    {
      heading: "Sizing for starting, not for running",
      body: [
        "Farm loads are almost all motors, and motors are sized by how they start. A bank of tunnel fans has a running load that looks harmless and a starting demand several times larger. Add a compressor and a well pump that can cut in at any moment and the peak the set has to survive has little to do with the running total.",
        "So the sizing is done against the worst combination the system can present rather than the average. Where the fans run on variable frequency drives the picture improves, because a drive ramps a motor up instead of slamming it across the line. Where fans start direct across the line, staging matters: time delays so they come on in groups.",
        "The related detail is voltage dip. A deep dip at start can drop or reset the house controller, which on a poultry farm means the ventilation program stops managing the building at the exact moment it matters. That is worth checking rather than assuming, and it is why we look at [ventilation power and controller supplies](/projects/poultry-house-ventilation-power) as part of the same job.",
      ],
    },
    {
      heading: "Transfer equipment and keeping the farm off the utility line",
      body: [
        "Whatever the set is, it must be impossible for it to feed back onto the utility. Back feed kills linemen working to restore the line. That is the whole reason a suicide cord or an unswitched connection is never acceptable, however carefully the owner intends to use it.",
        "There are two legitimate answers. A transfer switch, manual or automatic, which physically cannot connect both sources at once. Or a mechanical interlock kit at the panel, where the main breaker and the generator breaker cannot both be on because the hardware will not permit it. Both work, and both are cheap next to what they prevent.",
        "The rest of the transfer decision is neutral and bonding, which follows the same rules on a farm as anywhere else, on top of the grounding and bonding requirements Article 547 puts on agricultural buildings. Where the set sits away from the houses, the feeder between them is its own piece of work and often triggers [a service or panel upgrade](/electrical-service-upgrades) as well as the sort of buried run described in [underground feeders across a farm yard](/projects/underground-feeders-farm-yard).",
      ],
    },
    {
      heading: "Fuel on hand and testing before the season",
      body: [
        "A generator is not a piece of equipment you want to learn about during an outage. Diesel ages, batteries die quietly, block heaters fail and rodents nest in warm enclosures. The set that started fine last October is not guaranteed to start this July.",
        "The habit worth building is simple. Exercise it under load on a schedule, check it before the hot months and again before the winter storms, and keep enough fuel on hand for the length of outage the farm can realistically face. A tank that is full on the day of the storm is a tank somebody checked in advance. Every [standby generator installation](/standby-generator-installation) we do on a farm gets handed over with that routine written down.",
      ],
      bullets: [
        "Exercise under real load, not an unloaded idle run",
        "Batteries and terminals checked, dated, replaced on age not on failure",
        "Fuel level, fuel age and filters on a schedule",
        "Block heater and coolant confirmed before cold weather",
        "Autostart and transfer proved by actually opening the utility breaker",
      ],
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
  ],

  related: ["standby-generator-transfer-switch", "poultry-house-ventilation-power", "farm-service-entrance-upgrade"],

  keywords: [
    "farm generator",
    "poultry farm generator",
    "generator for farm use",
    "standby generator installation",
    "automatic transfer switch",
  ],
};

export default project;
