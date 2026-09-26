import type { Article } from "./types";

const article: Article = {
  slug: "farm-distribution-point",
  question: "Should every building have its own panel, or should everything come off one?",
  title: "The distribution point on a farm, and why most yards get it wrong by accident",
  category: "Agricultural",
  summary:
    "Why a farm with several buildings should be fed from one distribution point rather than daisy chained off the house, and what the wrong arrangement costs in bonding, faults and bills.",
  answer:
    "On a farm with more than one building, power should be split at a single distribution point close to where it enters the property, and each building should be fed from there. The common alternative, where each new building is hung off whichever building was nearest at the time, creates long undersized runs, a grounding arrangement nobody can follow, and a yard where a fault in one shed shows up as a problem in another. Fixing it is usually a service job rather than a wiring job, and it is worth doing at the point where the service is being upgraded anyway.",
  lead:
    "Almost no farm in Lebanon or Lancaster County was wired to a plan. It was wired to a sequence. The house, then the barn off the house, then the shop off the barn, then the new heifer barn off the shop because that was the nearest live panel in 2009. Every one of those decisions was reasonable on the day. The result thirty years later is the single most common electrical problem we find on a farm.",

  photos: [
    {
      src: "/photos/blog/distribution-point-1.webp",
      alt: "Row of older electrical panels along a farm building wall",
      caption: "What a yard wired by addition looks like from the inside: one panel per decade, all fed from each other.",
    },
    {
      src: "/photos/blog/ext-barn-interior.webp",
      alt: "Interior of a cattle barn",
      caption: "Buildings that house livestock bring extra grounding and bonding requirements with them. Photo by",
      credit: {
        author: "Swampyank",
        href: "https://commons.wikimedia.org/wiki/File:Interior_of_Red_Barn_for_cattle_at_Drumlin_Farm_Wildlife_Sanctuary_of_Audubon_Society_in_Lincoln_Massachusetts.jpg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/blog/distribution-point-2.webp",
      alt: "Open trench across a farm yard for underground feeders",
      caption: "Rebuilding the distribution is mostly trenching. It is cheapest done once, with spare capacity in the ground.",
    },
    {
      src: "/photos/blog/ext-meter-service.webp",
      alt: "Historical illustration of electrical service equipment",
      caption: "Metering arrangements decide part of this too. Illustration from",
      credit: {
        author: "Internet Archive Book Images",
        href: "https://commons.wikimedia.org/wiki/File:Electrical_world_(1904)_(14598208620).jpg",
        license: "No restrictions",
      },
    },
  ],

  sections: [
    {
      heading: "What a distribution point actually is",
      body: [
        "A distribution point is a single place where the incoming supply is split and each building is fed from it, rather than each building being fed from the one before it. On a farm it is usually a pole or a small outdoor enclosure somewhere central, close to the meter, with a set of feeders leaving it in different directions.",
        "The code treats farms as a special case for exactly this reason. Because a farm is several buildings under one ownership, sharing ground and often sharing metal that animals touch, there are provisions about where the service disconnecting means sits, how each building is grounded and bonded, and how the whole arrangement hangs together. Article 547 of the National Electrical Code carries most of that, and it exists because agricultural yards behave differently from a row of separate houses.",
        "The practical test is simple. Stand at the meter and ask how many buildings you would have to walk through to trace power to the far shed. If the answer is more than none, the yard is daisy chained.",
      ],
    },
    {
      heading: "Why daisy chaining causes trouble years later",
      body: [
        "The first problem is capacity. Each link in the chain was sized for the building it was feeding at the time, not for everything that got hung off it afterwards. The feeder to the barn was fine when the barn was a barn. It is not fine now that the barn also feeds a shop with a compressor and a heifer barn with fans.",
        "The second is voltage drop, which stacks. A run that drops two percent, feeding a run that drops another three, feeding a run that drops another three, leaves the far end well outside anything that will start a motor reliably on a hot afternoon. That arithmetic is worked through properly in [our piece on voltage drop over long farm runs](/blog/voltage-drop-long-farm-runs).",
        "The third is grounding and bonding, and it is the one that actually hurts. Every building on a farm needs its grounding electrode system and its bonding done correctly. When buildings are fed from each other through a chain, the neutral and ground arrangement becomes very hard to follow and very easy to get wrong. Small differences in potential between metal in different buildings are exactly the mechanism behind stray voltage, which we cover in [the stray voltage article](/blog/stray-voltage-on-dairy-farms).",
      ],
      bullets: [
        "Capacity sized for the first building, not the fourth",
        "Voltage drop that stacks along the chain",
        "A grounding and bonding arrangement nobody can trace",
        "One fault taking out three buildings because they share a feeder",
        "No way to isolate a building for work without shutting down the ones beyond it",
      ],
    },
    {
      heading: "What a proper distribution point looks like",
      body: [
        "A good arrangement has three properties. Power is split once, close to where it arrives. Each building has its own feeder, its own disconnecting means and its own grounding electrode system. And any building can be switched off for work without affecting the others.",
        "In practice that usually means a pole or a pedestal near the meter carrying a set of fused disconnects or breakers, with a feeder running underground to each building. The work described in [setting a service pole and taking the overhead drop](/projects/service-pole-overhead-drop) is often the same job, because the pole that takes the incoming service is the natural place to split it.",
        "The part worth spending on is capacity you do not need yet. Feeders sized one step up, a spare way in the distribution enclosure, and one spare conduit in the trench. All three are nearly free while the excavator is on site and expensive to add in three years.",
      ],
      callout: {
        title: "Deciding what your yard needs",
        lines: [
          "Count the buildings and list what each one runs, including anything planned. That is the load calculation.",
          "Walk the existing feed and write down which building feeds which. Most people are surprised.",
          "Check where the meter is and whether the utility is willing to move or add a service point.",
          "Decide the distribution location by trench length and access, not by where the old panel happens to be.",
          "Size each feeder on voltage drop over its own run, not on the total load of the yard.",
          "Put a spare conduit and a spare way in while the ground is open. It is the cheapest thing on the job.",
        ],
      },
    },
    {
      heading: "Metering, and the question people ask second",
      body: [
        "The second question is always whether each building can be metered separately. Usually it can, and usually the answer is that you do not want that. Multiple meters mean multiple standing charges and a more complicated relationship with the utility for very little benefit if everything belongs to one operation.",
        "Where separate metering genuinely earns its place is when part of the property is rented out, when a dwelling is involved, or when an enterprise has to account for its own power for grant or contract reasons. Those are real cases, and they are worth deciding before the distribution is built rather than after.",
        "What matters more than the number of meters is where the service disconnecting means sits and whether somebody arriving at the property in an emergency can find it and operate it. That is worth more at two in the morning than any billing arrangement.",
      ],
    },
    {
      heading: "When to do this work",
      body: [
        "Rebuilding the distribution on a working farm is disruptive and it is not something to do for its own sake. There are three moments when it is clearly worth it.",
        "The first is when the service is being upgraded anyway. If the utility is already involved and the meter is already coming off the wall, adding the distribution work costs a fraction of what it costs as a separate job. That is the situation described in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
        "The second is when a new building is going up. A new poultry house or a new shop is a new feeder either way, and it is the natural moment to stop extending the chain and start again from a proper split.",
        "The third is when something has already gone wrong: nuisance tripping, motors that will not start at the far end, or a stray voltage investigation that has traced back to bonding. At that point the rebuild is not an improvement, it is the repair. Our [agricultural electrical work](/agricultural-electrical-services) and our [service and panel upgrades](/electrical-service-upgrades) usually arrive at the same conclusion from those two directions.",
      ],
    },
    {
      heading: "What good looks like when it is finished",
      body: [
        "You should be able to stand at one place and see, on a label, which disconnect feeds which building. Each building should have a panel with its schedule filled in and spare ways in it. Nothing should be fed through anything else.",
        "Underground runs should be recorded, because the next person with an excavator will not remember where they went. A photograph of the open trench with a tape measure in it is worth more than a drawing nobody updates.",
        "And there should be spare capacity, both in the distribution enclosure and in the ground. Farms grow. The yards that cause us the least trouble are the ones where somebody spent slightly more than they needed to, once, at the right moment. A useful reference on the underlying code requirements is the [up.codes text on equipotential planes and bonding](https://up.codes/s/equipotential-planes-and-bonding-of-equipotential-planes), and the [NDSU material on farm standby power](https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators) is worth reading alongside it, because a distribution point is also where standby power gets connected.",
      ],
    },
  ],

  faq: [
    {
      q: "Can I just add a bigger panel in the barn instead?",
      a: "Sometimes, if the barn is genuinely where the power should be split and the feed to it is adequate. Often it is not, and a bigger panel at the wrong end of an undersized feeder solves nothing. The load calculation and the voltage drop over each run decide it, not the size of the panel.",
    },
    {
      q: "Does every building need its own ground rods?",
      a: "Each building supplied by a feeder needs its own grounding electrode system, yes. That is not optional and it is one of the things most commonly missing on a yard that grew by addition. Where livestock are housed there is bonding on top of that.",
    },
    {
      q: "How much of this can be done without shutting the farm down?",
      a: "More than people expect. New feeders and the new distribution point are built alongside the existing arrangement, and buildings are cut over one at a time. The unavoidable outage is at the service itself, and it is planned around milking or whatever else cannot move.",
    },
    {
      q: "Is three phase worth bringing in at the same time?",
      a: "If the utility can deliver it and the farm runs real motor loads, it is the cheapest moment to ask, because most of the trenching and the equipment is being touched anyway. Whether it is worth it is covered in [three phase against single phase](/blog/three-phase-vs-single-phase).",
    },
    {
      q: "What if the buildings are a long way apart?",
      a: "Distance pushes the answer towards a central distribution point rather than away from it, because the alternative is a chain of long runs each adding its own voltage drop. It also pushes conductor sizes up, which is why the calculation matters more the further apart things are.",
    },
  ],

  sources: [
    {
      label: "up.codes: Equipotential planes and bonding of equipotential planes",
      href: "https://up.codes/s/equipotential-planes-and-bonding-of-equipotential-planes",
      note: "The code text behind the bonding requirements in agricultural buildings, in a readable form.",
    },
    {
      label: "NDSU: Standby electric generators",
      href: "https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators",
      note: "Extension guidance on farm standby power, sizing and transfer. The distribution point is where this gets connected.",
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
  ],

  related: ["stray-voltage-on-dairy-farms", "voltage-drop-long-farm-runs", "nec-547-agricultural-wiring"],

  closing:
    "Rebuilding how a farm yard is fed is ordinary work for us rather than an unusual project, and it is usually the job underneath a stray voltage complaint or a motor that will not start at the far end. If your yard grew by addition and nobody has drawn it since, that is the place to start.",

  keywords: [
    "farm distribution point",
    "feeding outbuildings",
    "farm service entrance",
    "farm electrical",
    "agricultural electrician",
    "electrical service upgrade",
  ],
};

export default article;
