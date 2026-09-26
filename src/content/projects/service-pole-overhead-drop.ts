import type { Project } from "./types";

const project: Project = {
  slug: "service-pole-overhead-drop",
  title: "Setting a service pole and taking the overhead drop",
  category: "Service and panels",
  location: "Lebanon County, PA",
  summary:
    "Setting a steel service pole in open ground: depth and backfill, where the meter goes, working with the utility, and why the drop is the part that ages fastest.",
  lead:
    "A building set back from the road needs power brought to it, and on a farm or an open commercial lot that usually means a pole rather than a trench. The steel pole in the photograph is freshly set with the soil still open around the base, the conductor already run to it and the bucket truck still on site. This is what goes into that, and into the overhead drop that lands on it.",

  facts: [
    { label: "Why a pole", value: "Cheaper than trenching across open ground, and easier to extend later" },
    { label: "Ownership line", value: "The utility owns the drop to a defined point, the customer owns everything past it" },
    { label: "Sets the height", value: "Clearance over driveways, fields and anywhere equipment travels" },
    { label: "Fails first", value: "The drop hardware and the connectors at the splice, not the pole" },
    { label: "Steel or wood", value: "Steel for a customer owned service pole, wood where the utility sets its own" },
    { label: "Worth doing once", value: "Size the pole and the raceway for the load you will have, not the load you have" },
  ],

  photos: [
    {
      src: "/photos/projects/service-pole-overhead-drop-1.webp",
      alt: "Newly set galvanised steel service pole in open ground with a bucket truck alongside",
    },
    {
      src: "/photos/projects/service-pole-overhead-drop-2.webp",
      alt: "Utility pole with overhead conductors and a service drop splice",
    },
    {
      src: "/photos/projects/service-pole-overhead-drop-3.webp",
      alt: "Pole replacement work beside a road in winter",
    },
  ],

  sections: [
    {
      heading: "When a pole beats a trench",
      body: [
        "The default assumption is that underground is better, and for a short run inside a yard it usually is. The moment the distance grows, the arithmetic changes. Trenching across two hundred metres of field means excavation, conduit, cover, backfill, restoration and a permanent obstacle you have to remember every time you dig again.",
        "A pole and an overhead span put the same conductors in the air for a fraction of the ground work. On a farm there is a second argument that matters more than cost: an overhead run can be seen. When something goes wrong you can look at it, and when a fault develops it is usually visible rather than buried under a lane.",
        "The case for going underground instead is exposure. Overhead spans are what storms take out, and in a yard with tall equipment moving around they are a strike risk. Where the run is short and the traffic is heavy, we would rather put it in the ground, which is the work described in [underground feeders between farm buildings](/projects/underground-feeders-farm-yard). Storm damage to a span is also one of the more common reasons for [an after hours call](/emergency-electrician).",
      ],
    },
    {
      heading: "What goes into the ground before anything goes up",
      body: [
        "The part of the job that decides whether the pole is still straight in ten years happens before the pole is standing. Depth is the first thing. A pole is held up by the soil it displaces, so the rule of thumb of burying roughly a tenth of the length plus a margin exists for a reason, and it gets deeper in soft or wet ground rather than shallower.",
        "Backfill matters as much as depth. Loose spoil shovelled back in and left to settle will let a pole lean within a season. It has to go back in layers and be compacted as it goes, and in poor ground it gets concrete instead. The photograph shows the ground still open because that stage had just been finished.",
        "Direction of pull is the other consideration. A pole with a span leaving it in one direction is being pulled over, permanently. Either it is raked slightly against the pull when it is set, so it comes upright under tension, or it needs a guy. A pole set perfectly plumb with a heavy span on one side will not stay plumb.",
      ],
      bullets: [
        "Depth set by pole length and soil, deeper in soft or wet ground",
        "Backfill compacted in layers, not shovelled back loose",
        "Raked against the direction of pull, or guyed",
        "Locate before digging, every time, including private services nobody recorded",
      ],
    },
    {
      heading: "Where the utility stops and you start",
      body: [
        "Every overhead service has a point where responsibility changes hands, and most disputes about a failed service come from nobody being clear about where it is. Broadly the utility owns the drop from their pole to the attachment, and the customer owns the attachment, the mast or pole, the meter socket, the service entrance conductors and everything beyond.",
        "That means the work has to be coordinated rather than just done. The utility has to agree the attachment point and the route of the span, they have to be available to make the final connection, and they will not energise until the local inspection has passed. Scheduling that sequence properly is most of what makes a service job run smoothly or badly.",
        "The same coordination applies when the existing service is being replaced rather than added. That is covered in more detail in [the meter and service upgrade](/projects/meter-service-upgrade-womelsdorf), where the constraint is how long the building can be without power during the changeover.",
      ],
    },
    {
      heading: "The drop is what ages, not the pole",
      body: [
        "A galvanised steel pole set properly will outlast most of the equipment on it. The parts that fail are at the two ends of the span, and they fail from a combination of movement and weather.",
        "At the attachment, the dead end hardware and the insulator take the whole mechanical load of the span, which changes with temperature, ice and wind. At the splice, the connectors joining the drop to the service entrance conductors sit in the open and cycle between hot and cold every single day. The second photograph shows exactly that arrangement, and it is the most common point of failure on an overhead service.",
        "Ice is the specific enemy here. A conductor with a radial coating of ice weighs several times what it weighs bare, and that load is transferred straight into the hardware and the pole. A span that was adequate in still summer air can be badly overloaded in a freezing rain event, which is why an overhead service is worth looking at after a hard winter rather than only when it stops working.",
      ],
    },
    {
      heading: "Sizing the pole for the building you are going to have",
      body: [
        "The mistake that costs the most is sizing the pole and the raceway on it for today. A service pole is not an expensive item compared with the work of setting it, and the difference between a pole that carries one service and a pole that could carry a second feed and a security light is almost nothing at the time and enormous afterwards.",
        "The same applies to the raceway and the conductors coming off it. Pulling one spare conduit down the pole while the excavator is still on site is trivial. Adding it two years later means digging around a live service.",
        "That is the same argument as doing a proper load calculation before the size is chosen rather than after, which is the point of [a load study and drawings](/projects/load-study-and-drawings). On a farm it also feeds into how the whole yard is fed, because a pole is often the natural distribution point from which several buildings are supplied. The reasoning behind that layout is in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
      ],
    },
    {
      heading: "What this applies to beyond farms",
      body: [
        "Any building set back from the road faces the same question. Shops and equipment sheds, site offices, pump houses, well heads, grain facilities, remote lighting on a commercial lot. The decision between a pole and a trench is about distance, exposure and what is going to drive across the route.",
        "Site lighting is the most common commercial version of this, where the poles are carrying fixtures rather than a service but the foundation and the underground feed present exactly the same problems. That is covered in [parking lot and site lighting](/projects/parking-lot-lighting).",
        "The common thread is that the visible part of the job is the smallest part. What determines whether it lasts is the depth, the backfill, the hardware at the ends of the span and whether anybody thought about the next building before the hole was filled in. Our [electrical service and panel upgrade work](/electrical-service-upgrades) starts from that assumption.",
      ],
    },
  ],

  faq: [
    {
      q: "Do I need the utility involved, or can you just do it?",
      a: "The utility has to be involved. They set the attachment point, they make the final connection and they will not energise before the inspection has passed. What we do is handle that coordination so you are not the one chasing three parties.",
    },
    {
      q: "How long will I be without power?",
      a: "On a new pole to a new building, not at all, because nothing is live yet. On a replacement it depends on the changeover and how much can be prepared in advance. We plan that with you rather than surprising you on the day.",
    },
    {
      q: "Steel or wood?",
      a: "Where the pole belongs to the customer we generally use steel. It is straight, it does not rot at the ground line, and it takes hardware cleanly. Wood is what the utility mostly sets on its own side of the line.",
    },
    {
      q: "My overhead service looks old. How do I know if it is a problem?",
      a: "Look at the ends rather than the middle. Discoloured or corroded connectors at the splice, a leaning pole, a mast pulling away from the building, a drop hanging noticeably lower than it used to. Any of those is worth a look before winter rather than during it.",
    },
    {
      q: "Can you add a second building off the same pole later?",
      a: "If the pole and the service were sized with that in mind, easily. If they were sized exactly for the first building, it usually means going back to the utility. That is the whole argument for spending slightly more at the start.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
  ],

  related: ["farm-service-entrance-upgrade", "meter-service-upgrade-womelsdorf", "underground-feeders-farm-yard"],

  keywords: [
    "service pole installation",
    "overhead service drop",
    "electrical service upgrade",
    "utility connection",
    "farm service entrance",
    "meter upgrade",
  ],
};

export default project;
