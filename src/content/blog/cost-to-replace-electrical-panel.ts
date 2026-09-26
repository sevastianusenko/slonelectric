import type { Article } from "./types";

const article: Article = {
  slug: "cost-to-replace-electrical-panel",
  question: "What does replacing an electrical panel actually cost, and why is every quote different?",
  title: "What a panel replacement really costs: the components of the price and why three quotes never match",
  category: "Service and panels",
  summary:
    "Panel replacement priced honestly: what each component of the job costs, which parts vary and why, and the questions that explain a quote far below the others.",
  answer:
    "There is no single price, because the words panel replacement cover between three and seven separate jobs depending on what is behind the cover. A like for like swap, where the panel sits next to the meter, the circuits are long enough to reach the new enclosure and the breaker line is still made, is the cheap end. Once the service entrance conductors, the meter socket, the grounding electrode system or the utility connection have to change, it becomes a service change, which is a different scope with a different price. On farm and commercial work the equipment is often not the biggest line at all: how long the power is off, and whether that means evening or weekend hours, usually moves the total more than the board does. The only sensible way to compare quotes is component by component rather than by the number at the bottom. On a farm or a plant that cannot simply stop, the same planning applies as on any [job done inside a production shutdown](/projects/plant-wiring-during-shutdown), and it is why the changeover gets scheduled rather than improvised.",
  lead:
    "Ask three contractors to price a panel replacement on a commercial building and you can get three numbers that are nowhere near each other. That is rarely somebody being greedy or somebody being cheap. It is that each of them has decided a different amount of the surrounding work is included, and none of the quotes says so out loud. This is what the job actually breaks into.",

  photos: [
    {
      src: "/photos/blog/panel-cost-1.webp",
      alt: "Electrical panel upgrade work in progress at a building in Myerstown",
      caption: "Panel work at a building in Myerstown. Most of the cost sits in what is around the panel, not in the panel.",
    },
    {
      src: "/photos/blog/ext-panel-open.webp",
      alt: "Circuit breaker panel with the cover removed",
      caption: "Nothing about a quote is reliable until somebody has had the cover off. Photo by",
      credit: {
        author: "BrokenSphere",
        href: "https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: "/photos/blog/panel-cost-2.webp",
      alt: "Newly installed electrical panel with neat terminations",
      caption: "Terminations and labelling are where the labour hours go, and they are the first thing cut from a cheap quote.",
    },
    {
      src: "/photos/blog/ext-panel-old.webp",
      alt: "Interior of an obsolete circuit breaker panel",
      caption: "A discontinued breaker line turns a repair into a replacement. Photo by",
      credit: {
        author: "Repeater-reclaim",
        href: "https://commons.wikimedia.org/wiki/File:Stab-Lok_circuit_breaker_panel_interior_.jpg",
        license: "CC BY-SA 4.0",
      },
    },
  ],

  sections: [
    {
      heading: "A panel change and a service change are different jobs",
      body: [
        "The first thing to settle is what is actually being replaced, because the same phrase covers jobs that differ by a factor of three. A panel change replaces the enclosure, the bus and the breakers and leaves the conductors feeding it alone. A service change replaces what comes in: entrance conductors, mast or lateral, meter socket and often the main disconnect, which brings both the utility and the inspector into the job.",
        "The code treats them differently as well. A straight swap lives mostly in NEC Article 408 and Article 250. Once the entrance conductors move you are into Article 230, and clearances, conductor sizing and disconnect location all get re examined against the current code rather than the code the building was wired under. That is where quotes start to diverge.",
        "Worth saying plainly: a farm or commercial panel is not a house panel with a bigger number on it. Three phase, 208Y/120 or 480Y/277, higher available fault current, motor loads and a board full of feeders rather than branch circuits is a different scope entirely. If it is not yet settled that the panel needs replacing at all, [the signs that a panel is finished](/blog/signs-your-panel-needs-replacing) is the earlier question.",
      ],
    },
    {
      heading: "Where the money actually goes",
      body: [
        "The useful way to read a quote is to split it into components and ask which ones each contractor has included. Most of the spread between three quotes sits in two or three lines rather than spread evenly across all of them.",
        "As an order of magnitude: a straightforward commercial panel change where nothing upstream moves is usually a low four figure job. A farm or commercial service change with new entrance conductors, a new meter socket and utility coordination is usually mid to high four figures. A three phase distribution board with a fault current study behind it can sit well past that. Those figures are there to sanity check a quote, not as a price list, because [service and panel upgrade work](/electrical-service-upgrades) is priced per building after somebody has looked inside.",
      ],
      callout: {
        title: "The components of a panel replacement price, and which ones move",
        lines: [
          "Panel or board and breakers. Varies enormously. A 200 A commercial panel with a full set of breakers is a four figure material cost on its own, and a 400 A three phase board with a higher short circuit rating is several times that.",
          "Labour for the swap itself. Fairly predictable. Two electricians for most of a day on a straightforward change, longer if the enclosure footprint is different.",
          "Service entrance conductors, mast, weatherhead and meter socket. Either zero or a large number. This single line is what separates a panel change from a service change, and it is the most common reason two quotes differ.",
          "Grounding electrode system. Small but almost never zero. Old electrode conductors rarely meet current NEC 250 requirements, and a supplemental electrode plus water and gas bonding is routine on this work.",
          "Utility disconnect and reconnect. Not a contractor line, but it sets the schedule and decides whether the job runs one day or two.",
          "Permit and inspection. Fixed and usually the smallest line on the page. In Pennsylvania this is a Uniform Construction Code permit through the municipality or the state.",
          "Circuit extensions and re identification. Varies. If the new enclosure is a different size, every conductor that no longer reaches needs a box and splices. Budget roughly an hour per circuit extended.",
          "Out of hours or phased working. The multiplier. Evening and weekend hours, temporary generator power, or splitting the job so half the building stays live.",
          "What is found once the cover is off. Keep a reserve. Aluminium conductors needing proper terminations, a corroded meter socket, asbestos in the wall behind the panel, a bonding screw that was never fitted.",
        ],
      },
    },
    {
      heading: "The power being off is usually the biggest variable",
      body: [
        "In a house the power goes off for four hours and somebody reads a book. On a dairy, a cold store or a production line, the outage is the expensive part of the job and everything else gets arranged around it.",
        "That is where the price separates. Normal hours with a full shutdown is the cheapest version by a long way. A Sunday, or a window between milkings, or a generator carrying refrigeration while we work, or doing the board in two halves so the building is never fully dark, all cost more, and all of them are sometimes the only option available. A quote that assumes a weekday shutdown and a quote that assumes weekend work on a live building are not comparable, and neither one is wrong.",
        "This is the question to ask before anybody talks about equipment. On a service that had grown by addition for decades, described in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade), working out the sequence of what stayed live took more planning than the installation did.",
      ],
    },
    {
      heading: "Permits, inspection and the utility",
      body: [
        "Two parties outside the contract can move both your date and your price. The first is the code official. In Pennsylvania electrical work sits under the Uniform Construction Code, and permits are issued by the municipality or, where a municipality has opted out, by the Department of Labor and Industry. [The state sets out what plan review and inspection involve](https://www.pa.gov/agencies/dli/programs-services/labor-management-relations/bureau-of-occupational-and-industrial-safety/uniform-construction-code-home/historic-buildings/plan-review-and-inspection-requirements), and on commercial work the permit and the inspection are not optional extras.",
        "The second is the utility. Anything touching the meter or the service conductors needs them to disconnect and reconnect, and their scheduling window is not something a contractor controls. On overhead services they may also want the mast height, the drip loop or the point of attachment brought to current standards while they are there, which is a genuine cost that turns up late in the job. [The meter and service upgrade in Womelsdorf](/projects/meter-service-upgrade-womelsdorf) is a typical version of that.",
      ],
    },
    {
      heading: "What is behind the cover, and whether the breakers can be reused",
      body: [
        "Almost every awkward line on a panel quote comes from something nobody could see beforehand. Conductors cut short by whoever wired it, so a taller enclosure means a junction box and splices on half the circuits. Aluminium feeders needing the right terminations and antioxidant. A circuit directory that was never written, so every circuit has to be traced and labelled. Asbestos in the wall the panel is mounted on. A panel in a corner you cannot get a ladder into.",
        "Reusing the existing breakers is the question people ask most, because breakers are a real share of the material cost. Occasionally they can be kept, where the new enclosure takes the same line. Usually they cannot, and reconditioning is not a way around it: [UL sets out that moulded case circuit breakers and panelboards are not permitted to be reconditioned](https://www.ul.com/news/reconditioned-electrical-equipment-2020-nec-guide) under the current code. A discontinued breaker line therefore means new breakers, and often a new panel to take them.",
      ],
    },
    {
      heading: "Reading a quote that is far below the others",
      body: [
        "A quote well under the others is usually neither a mistake nor a bargain. It is a different scope, and the difference is normally one of four things.",
      ],
      bullets: [
        "The service entrance, mast and meter are excluded, so a panel swap is being compared against a service change",
        "Circuit extensions are excluded and will appear as extras once the cover is off",
        "Permit and inspection are left for you to arrange and pay for",
        "Weekday hours and a full building shutdown are assumed",
      ],
      callout: {
        title: "Four questions that make three quotes comparable",
        lines: [
          "Does this price include the service entrance conductors, the mast and the meter socket, or does it stop at the panel?",
          "Who arranges the utility disconnect and reconnect, and what happens if their window slips?",
          "Who pulls the permit and pays for the inspection?",
          "What is assumed about working hours and how long the building is without power?",
        ],
      },
    },
  ],

  faq: [
    {
      q: "Is it cheaper to do the panel and the service at the same time?",
      a: "Per unit of work, yes, and by a wide margin. The utility outage, the permit, the inspection and the mobilisation are paid for once instead of twice. Replacing a panel now and the service in three years means paying for all of that twice, and the second job often disturbs the first.",
    },
    {
      q: "Can you reuse my existing breakers?",
      a: "Sometimes, if the replacement enclosure accepts the same breaker line and the breakers are in good condition. More often the line has been discontinued, which is usually why the panel is being replaced in the first place. Reconditioned moulded case breakers are not a permitted substitute under the current code.",
    },
    {
      q: "How long will the power be off?",
      a: "For a straightforward panel change, most of a working day. For a service change, it depends on the utility rather than on us, because their disconnect and reconnect bracket the work. If the building cannot lose power for that long, say so before anyone quotes, because it changes the method and the number.",
    },
    {
      q: "Do I need a permit to replace a panel in Pennsylvania?",
      a: "For commercial and agricultural buildings under the Uniform Construction Code, yes. It is issued by the municipality, or by the Department of Labor and Industry where the municipality has opted out of enforcement. The permit is usually the smallest line on the quote and the one most often left out of a cheap one.",
    },
    {
      q: "The panel is full. Is adding a subpanel cheaper than replacing it?",
      a: "Often yes, if the existing panel and its feed are sound and there is capacity in the service. It is a poor answer if the panel itself is the problem, or if a load calculation shows the service is already close to its limit. A load calculation before that decision costs very little and settles it.",
    },
  ],

  sources: [
    {
      label: "Pennsylvania Department of Labor and Industry: Plan Review and Inspection Requirements",
      href: "https://www.pa.gov/agencies/dli/programs-services/labor-management-relations/bureau-of-occupational-and-industrial-safety/uniform-construction-code-home/historic-buildings/plan-review-and-inspection-requirements",
      note: "How UCC permits, plan review and inspection work in Pennsylvania, including opt out municipalities.",
    },
    {
      label: "UL Solutions: Reconditioned electrical equipment, a 2020 NEC Guide",
      href: "https://www.ul.com/news/reconditioned-electrical-equipment-2020-nec-guide",
      note: "Which equipment may and may not be reconditioned, including moulded case breakers and panelboards.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
  ],

  related: ["signs-your-panel-needs-replacing", "what-is-switchgear", "three-phase-vs-single-phase"],

  closing:
    "We price panel and service work in Lebanon, Lancaster and Berks counties the same way every time: look inside, write down what is included and what is not, and say which lines are estimates. If you have quotes in front of you that do not agree, the fastest way forward is usually to put the four questions above to all three.",

  keywords: [
    "cost of replacing electrical panel",
    "cost to replace breaker panel",
    "replacing a breaker panel",
    "electrical panel upgrade",
    "panel replacement",
  ],
};

export default article;
