import type { Article } from "./types";

const article: Article = {
  slug: "service-load-calculation",
  question: "How do we know what size electrical service the building actually needs?",
  title: "What size electrical service do you need: how the calculation works and why 200 amps is usually a guess",
  category: "Service and panels",
  summary:
    "How a load calculation decides service size: Article 220, the 220.87 measured demand route, why connected load is the wrong number, and what that means for a quote.",
  answer:
    "It comes from a calculation, not from the size of the building or what the neighbour installed. For a new building Article 220 adds up the loads and applies demand factors, because not everything runs at once. For an existing building there is a better route: section 220.87 lets you use the maximum demand actually recorded over the past year, or over a thirty day period with a recording meter, take 125 percent of it and add the new load. That turns the argument into a measurement, and it very often shows the existing service has more room than anybody thought.",
  lead:
    "This question usually arrives attached to something else. A shop is adding a welder, a farm is putting up another building, a restaurant is replacing the kitchen, somebody wants EV charging. The honest answer is never a number off the top of anybody's head, and the reason it is not is worth understanding before you buy a service you did not need.",

  photos: [
    {
      src: "/photos/projects/load-study-and-drawings-1.webp",
      alt: "Dimensioned workshop floor plan with lighting and outlet positions marked",
      caption: "The drawing is where a load calculation becomes a decision rather than an opinion.",
    },
    {
      src: "/photos/blog/ext-meter-service.webp",
      alt: "Historical illustration of electrical service metering equipment",
      caption: "Metered demand has been the honest way to size a service for a very long time. Illustration from",
      credit: {
        author: "Internet Archive Book Images",
        href: "https://commons.wikimedia.org/wiki/File:Electrical_world_(1904)_(14598208620).jpg",
        license: "No restrictions",
      },
    },
    {
      src: "/photos/projects/meter-service-upgrade-womelsdorf-1.webp",
      alt: "Building exterior with a newly installed meter and service equipment in Womelsdorf",
      caption: "When the calculation does say the service has to grow, the utility's schedule sets the date.",
    },
    {
      src: "/photos/blog/ext-distribution.webp",
      alt: "Detail of an electrical distribution panel",
      caption: "What matters is not how full the board looks, it is what the loads actually draw. Photo by",
      credit: {
        author: "Lowe, Jet",
        href: "https://commons.wikimedia.org/wiki/File:DETAIL_OF_ELECTRICAL_PANEL._-_Lightship_116,_Pier_3,_Inner_Harbor,_Baltimore,_Independent_City,_MD_HAER_MD-133-16.tif",
        license: "Public domain",
      },
    },
  ],

  sections: [
    {
      heading: "Connected load is not the number you want",
      body: [
        "If you add up the nameplate rating of everything in a building you get the connected load, and it is almost always far larger than anything the building has ever drawn. A shop with a welder, a compressor, a dust collector and a heater has all four on the nameplate list and has probably never had all four running at full output in the same minute.",
        "That is what demand factors exist for. Article 220 lets a calculated load come out below the connected load wherever the Code accepts that things do not all run together, with specific tables for lighting, kitchen equipment, motors and so on. EC&M's piece on [getting demand factors right](https://www.ecmweb.com/national-electrical-code/article/55269591/ensuring-accuracy-in-demand-factors-with-the-nec) is a good summary of where people misapply them, including the common error of applying the 125 percent continuous load factor twice.",
        "So a calculation is not just addition. It is addition plus a set of rules about which things realistically coincide, and getting those rules right is most of the difference between a service that is correct and one that is expensively oversized.",
      ],
    },
    {
      heading: "For an existing building, measure instead of guessing",
      body: [
        "This is the part most owners do not know exists, and it saves the most money. Section 220.87 permits the calculation for an existing installation to be based on actual maximum demand rather than a paper total, provided a few conditions are met.",
        "The preferred input is a year of maximum demand data, which many commercial customers already have sitting in their utility billing. Where that is not available, the Code accepts the maximum power demand over a fifteen minute interval, continuously recorded for at least thirty days with a recording ammeter or power meter on the highest loaded phase. That figure gets multiplied by 125 percent, the new load is added, and the total has to stay within the rating of the service.",
        "Mike Holt works through the arithmetic with a worked example in [EC&M's Q and A on feeder and service loads](https://www.ecmweb.com/national-electrical-code/qa/article/20899437/code-qa-calculating-feeder-or-service-loads). The practical effect is that a building which looks maxed out on paper frequently turns out to have real headroom, and a recording meter left on the main for a month costs a fraction of a service upgrade.",
      ],
      callout: {
        title: "A worked example, roughly the shape we see on a shop",
        lines: [
          "Existing service: 200 A, 240 V single phase.",
          "Recorded peak over thirty days on the highest loaded phase: 96 A.",
          "96 A at 125 percent: 120 A of existing demand to carry forward.",
          "New load: a 60 A welder circuit, continuous rated, counted at its full 60 A.",
          "Total: 180 A against a 200 A service. It fits, and no upgrade is needed.",
          "Had the peak been 130 A instead, the same arithmetic gives 222 A and the answer is the opposite.",
        ],
      },
    },
    {
      heading: "What changes the answer more than square footage",
      body: [
        "Floor area is a poor predictor outside of general lighting. What actually moves a service size is a short list, and most of it is motors and heat.",
        "Motors matter twice over. They carry a starting current several times their running current, and the largest motor in the building gets special treatment in the calculation. Heating and cooling matter because the Code lets you count the larger of the two rather than both, which is why a building with a big heating load and a big cooling load is not the sum of them.",
        "Then there are the loads people forget to mention until late. Welders, kilns, compressors with hard starting, grain dryers, walk in refrigeration, and increasingly vehicle charging. Any of those can move a service size by a step on their own, which is why we ask for the equipment schedule early rather than at quoting stage.",
        "On a farm the question is often not the size of the service but where the power goes once it arrives. A yard fed through three generations of additions can be short of usable capacity at the far end while the main is barely working, and that is a different problem with a different fix, described in [the distribution point on a farm](/blog/farm-distribution-point) and in [voltage drop on long runs](/blog/voltage-drop-long-farm-runs).",
      ],
      bullets: [
        "The largest motor and how it starts",
        "Heating against cooling, counted as the larger of the two",
        "Welders, compressors, kilns and anything with a hard start",
        "Refrigeration, which runs far more of the year than people assume",
        "Vehicle and equipment charging, which the Code treats as continuous",
        "Any equipment on order that nobody has mentioned yet",
      ],
    },
    {
      heading: "Why 200 amps became the default answer",
      body: [
        "Two hundred amps is the standard residential service, and the number has leaked into commercial and agricultural conversations where it often does not belong. Plenty of small commercial buildings are genuinely fine on 200 amps. A farm yard feeding several buildings, a shop with a welder and a compressor, or a restaurant with a real kitchen schedule frequently are not, and the right answer is 400, 600 or a move to three phase.",
        "The opposite mistake is just as common and costs more. Buildings get upgraded to a larger service when the actual problem was distribution: not enough circuits, feeders that were sized for one building and now carry four, or a panel with no space left. More amperes at the meter does nothing for any of those. What helps is set out in [how distribution works in a building](/blog/electrical-distribution-in-a-building), and the point at which panels stop being the right answer is covered in [switchgear against switchboards and panelboards](/blog/what-is-switchgear).",
      ],
    },
    {
      heading: "What a calculation gets you besides a number",
      body: [
        "A load calculation is the cheapest hour on the whole project, and it produces more than a service size. It tells the utility what to plan for, which matters because transformer capacity is their decision and it has its own lead time. It tells you whether a change of use is going to need electrical work before anything else can be booked. It gives an inspector something to look at. And it gives you a written basis for the price rather than a number somebody felt was about right.",
        "It also settles arguments about what is possible later. When somebody asks whether the building can take a charger or a new machine in two years, the answer is a calculation update rather than a site visit and a shrug. That is the argument behind doing the drawing properly, which we go through in [the load study write up](/projects/load-study-and-drawings).",
        "If the answer does turn out to be a bigger service, what that involves and what the utility controls is on [the service upgrades page](/electrical-service-upgrades).",
      ],
    },
  ],

  sources: [
    {
      label: "EC&M: Code Q&A, Calculating Feeder or Service Loads",
      href: "https://www.ecmweb.com/national-electrical-code/qa/article/20899437/code-qa-calculating-feeder-or-service-loads",
      note: "Mike Holt on 220.87: the one year demand data, the thirty day recording alternative and the 125 percent multiplier.",
    },
    {
      label: "EC&M: Ensuring Accuracy in Demand Factors with the NEC",
      href: "https://www.ecmweb.com/national-electrical-code/article/55269591/ensuring-accuracy-in-demand-factors-with-the-nec",
      note: "Jennifer Kuether on why calculated load differs from connected load, and the mistakes that inflate it.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "EV charging installation", href: "/ev-charging-installation" },
  ],

  related: ["electrical-distribution-in-a-building", "cost-to-replace-electrical-panel", "what-is-switchgear"],

  faq: [
    {
      q: "How long does a load calculation take?",
      a: "For a straightforward building, a site visit and a day or so. Where we want measured demand instead of a paper total, a recording meter sits on the service for thirty days first, and that wait is usually worth it.",
    },
    {
      q: "Can you do it from the drawings without visiting?",
      a: "For a new building, often yes. For an existing one, no. The drawings describe what was intended, and what is actually connected after twenty years of additions is a different list.",
    },
    {
      q: "Our panel is full. Does that mean we need a bigger service?",
      a: "Not necessarily. A full panel is a space problem, and the service behind it may be barely loaded. The two questions are separate, and the signs that the board itself is finished are in [when a panel needs replacing](/blog/signs-your-panel-needs-replacing).",
    },
    {
      q: "Does adding EV charging always mean an upgrade?",
      a: "No, and assuming it does is expensive. Chargers can be managed so the group never exceeds a set limit, which the Code recognises, and that frequently avoids an upgrade entirely.",
    },
    {
      q: "Who decides if the utility transformer can handle it?",
      a: "The utility does, and it is worth asking in week one rather than after the gear is ordered. Their transformer work has its own schedule and it is the item most likely to move your date.",
    },
  ],

  closing:
    "We do this calculation before quoting anything larger than a service call, because guessing at a load or a service size over the phone helps nobody. If you are planning an addition, new equipment or a change of use around Lebanon, Lancaster or Berks counties, the measurement is the cheap part and it decides everything after it.",

  keywords: [
    "electrical load calculation",
    "what size electrical service do i need",
    "nec 220.87 existing load",
    "service size calculation commercial",
    "200 amp service enough",
  ],
};

export default article;
