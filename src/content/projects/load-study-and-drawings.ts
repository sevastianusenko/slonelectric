import type { Project } from "./types";

const project: Project = {
  slug: "load-study-and-drawings",
  title: "The load study and the drawing, before anybody pulls wire",
  category: "Service and panels",
  location: "Lebanon County, PA",
  summary:
    "Why the cheapest hour on an electrical job is the one spent on the load calculation and the layout, and what a usable drawing has on it that a sketch does not.",
  lead:
    "The two pictures on this page are the least photogenic part of any job and the part that decides how the rest of it goes. One is a dimensioned plan of a workshop with the outlets and fixtures placed on it. The other is a hand drawn riser worked out on paper. Between them they represent maybe a day of work, and they are the difference between a building that gets wired once and a building that gets wired twice.",

  facts: [
    { label: "Governing article", value: "NEC Article 220 for load calculation, with the demand factors that apply to the occupancy" },
    { label: "Cheapest change", value: "Moving an outlet on paper. It costs nothing" },
    { label: "Most expensive change", value: "Discovering the service is too small after the walls are closed" },
    { label: "What a sketch misses", value: "Circuit numbers, conductor sizes, panel location and anything the inspector needs" },
    { label: "Always oversize", value: "Raceway and spare capacity, because both are nearly free at the start" },
    { label: "Never guess", value: "Service size. It is the one decision you cannot walk back cheaply" },
  ],

  photos: [
    {
      src: "/photos/projects/load-study-and-drawings-1.webp",
      alt: "Dimensioned workshop floor plan with lighting and outlet positions marked",
    },
    {
      src: "/photos/projects/load-study-and-drawings-2.webp",
      alt: "Hand drawn electrical riser diagram on paper",
    },
  ],

  sections: [
    {
      heading: "The question that has to be answered first",
      body: [
        "Every electrical job comes down to one number early on: how much power does this building actually need. Get it right and everything downstream is straightforward. Get it wrong low and you are back in two years replacing the service you just installed. Get it wrong high and the customer paid for capacity nobody will ever use.",
        "Article 220 of the National Electrical Code exists to answer that question in a way that is repeatable rather than intuitive. It sets out how to count general lighting and receptacle load by area, how to add fixed appliances, motors and specific equipment, and critically where demand factors apply, because not everything in a building runs at once.",
        "The demand factors are where experience shows. On a farm, for example, the code recognises that the loads in separate buildings do not all peak together and allows that to be reflected in the calculation. Somebody who does not work on farms will either not apply it and oversize everything, or apply it wrongly and undersize the service. That is the reasoning behind [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
      ],
    },
    {
      heading: "What the customer is actually asked",
      body: [
        "A load calculation is only as good as the list it is built from, and the list comes from a conversation rather than a form. The useful questions are specific and they are about the future, not the present.",
        "What machines are going in. What is the largest motor and how does it start. Is there a compressor, a welder, a dryer, a lift. Are you going to add a second building off this service. Is there any chance of a charger for a vehicle in the next five years. What runs at the same time as everything else on the worst day of the year.",
        "That last question is the one that matters most and the one nobody volunteers. A workshop with a ten horsepower compressor, a welder and a heater is a very different service depending on whether they can run together. The answer changes the size, and the size changes the cost of everything else.",
      ],
      bullets: [
        "Largest motor and its starting characteristics, not just its running load",
        "What genuinely runs simultaneously on the worst day",
        "Anything planned within five years, including a second building or a charger",
        "Any load that cannot be interrupted, which drives the standby decision separately",
      ],
    },
    {
      heading: "What makes a drawing usable",
      body: [
        "The workshop plan in the first photograph is a real example of the minimum useful standard. It is dimensioned, so positions can be set out on site without guessing. It shows the room split and the loft above. It puts fixtures and outlets in specific places rather than indicating them generally.",
        "What turns that into something a crew can build from is the layer that gets added to it: circuit numbers against every device, conductor and raceway sizes on every run, the panel location and its schedule, and the service entrance details. Without those it is a wish list. With them it is a set of instructions, and two different electricians will build the same thing from it.",
        "The riser in the second photograph does the other half of the job. A plan shows where things are horizontally. A riser shows how power gets from the utility to the panel to the sub panels, what size each stage is, and where the grounding and bonding happen. It is usually the drawing an inspector wants to see first and the one most small jobs never produce.",
      ],
    },
    {
      heading: "Why the drawing saves money in the field",
      body: [
        "The obvious saving is rework. An outlet in the wrong place costs nothing to move on paper and costs a wall repair to move afterwards. A panel positioned where a door was later added has to be relocated entirely.",
        "The less obvious saving is procurement. A complete drawing means the material list is complete, which means one delivery instead of four trips, and it means long lead items are identified while there is still time to order them rather than on the day they are needed.",
        "The largest saving is coordination. On any building with other trades, the electrical route competes for the same ceiling space as ductwork, sprinklers and plumbing, and whoever arrives without a plan loses. Having the runs agreed in advance is the difference between a clean installation and a set of compromises. That constraint is at its most extreme inside [a planned production shutdown](/projects/plant-wiring-during-shutdown), where there is no time to work anything out on site.",
      ],
    },
    {
      heading: "The decisions that are hard to undo",
      body: [
        "Some choices on an electrical job can be revisited cheaply. Fixture selection, device colour, the exact position of a switch. Others are effectively permanent once the building is finished, and those are the ones the planning stage exists to get right.",
        "Service size is first. Changing it later means new conductors, usually new equipment, utility involvement and an outage. Panel location is second, because everything is measured from it and a panel in a bad spot creates long runs forever. Raceway routing and fill is third: a conduit that was filled to the limit on day one cannot take the circuit you need in year three.",
        "The cheap insurance against all three is spare capacity, and it is nearly free at the planning stage. Spare ways in the panel, one more conduit than you need, a service one size up when the calculation lands close to a boundary. Every one of those is a small cost now and a large saving later, which is the same argument made in [the 200 amp service upgrade](/projects/200-amp-service-upgrade).",
      ],
    },
    {
      heading: "When a full design is worth it and when it is not",
      body: [
        "Not every job needs a drawing set. A like for like replacement, a single circuit, a service call: the calculation is in your head and putting it on paper adds nothing.",
        "The threshold is roughly this. If the building is new or being substantially changed, if more than one trade is working in the same space, if the service size is in question, or if anybody other than the person who designed it will be building it, then it needs to be drawn. On any farm or plant job the answer is almost always yes, because those buildings grow over decades and the next person needs to understand what is already there.",
        "For anything smaller, the useful middle ground is exactly what the second photograph shows: a riser and a marked up plan, done properly, that takes an hour. That hour is reliably the highest return hour on the whole job. Our [service and panel upgrade work](/electrical-service-upgrades) and our [industrial work](/industrial-electrical-services) both start there rather than at the van.",
      ],
    },
  ],

  faq: [
    {
      q: "Do you charge for the load calculation and drawing?",
      a: "For a straightforward job it is part of quoting and it is not billed separately. For a design that will be issued for permit or built by somebody else, it is a piece of work in its own right and it is priced as one. We will tell you which it is before starting.",
    },
    {
      q: "I already have an architect's drawing. Is that enough?",
      a: "Usually not on its own. An architectural plan shows the building and often indicates where devices go, but it will not carry circuit numbers, conductor sizes, panel schedules or the riser. Those are what turn it into something buildable and inspectable.",
    },
    {
      q: "How do I know if my service is big enough for what I want to add?",
      a: "It is a calculation, not a guess, and it takes an inventory of what you run rather than a look at the panel. If the answer comes back close to the limit, that is usually the moment to go a size up rather than to squeeze in.",
    },
    {
      q: "Can you work from a hand sketch I did?",
      a: "Yes, and it genuinely helps. A sketch of what you want and where tells us more in five minutes than a long conversation. We will turn it into something dimensioned and circuited before anybody starts work.",
    },
    {
      q: "What is the one thing worth spending extra on at this stage?",
      a: "Spare capacity. Extra ways in the panel, one more conduit than the job needs, and a service sized for the building you will have rather than the one you have today. All three cost very little now and are expensive to add later.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
  ],

  related: ["farm-service-entrance-upgrade", "200-amp-service-upgrade", "plant-wiring-during-shutdown"],

  keywords: [
    "electrical load calculation",
    "electrical design",
    "electrical service upgrade",
    "electrical riser diagram",
    "panel schedule",
    "commercial electrical contractor",
  ],
};

export default project;
