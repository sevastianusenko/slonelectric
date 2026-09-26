import type { Town } from "./types";

const town: Town = {
  slug: "lancaster",
  town: "Lancaster",
  county: "lancaster-county",
  title: "Electrician in Lancaster PA | Commercial & Industrial Service",
  h1: "Electrical service in Lancaster",
  summary:
    "Commercial and industrial electrician for Lancaster PA: fit outs, restaurants, older city services that ran out of room, and the plants around the city.",
  lead:
    "Lancaster is city work, and city work here means old buildings. The commercial stock downtown and along the arterials has usually been something else first, sometimes twice, and the electrical system is a record of all of it. That history decides more about a job than the square footage does.",
  drive: "Around thirty minutes from Myerstown, longer at the end of the working day.",

  hero: {
    src: "/photos/services/commercial-electrical-services.webp",
    alt: "Large commercial interior with linear lighting installed by Slon Electric",
  },

  sections: [
    {
      heading: "Buildings on their third use",
      body: [
        "A downtown unit that was a shop, then an office, then a restaurant carries three generations of wiring and a directory nobody has updated since the second one. The recurring problem is not the wiring so much as the record of it: no drawings, a sub panel fed from a sub panel, and nobody left who can say what each breaker feeds.",
        "That turns every isolation into a hunt, and somebody's till or walk in cooler goes dark by accident. We re identify circuits as we work and leave a schedule that matches the building, which is the argument in [how to read a panel schedule](/blog/how-to-read-a-panel-schedule).",
      ],
    },
    {
      heading: "Change of use is where capacity runs out",
      body: [
        "The job that most often brings us into the city is a change of use. A retail unit becoming a restaurant, an office floor taking on equipment, a warehouse bay turning into something that actually draws current. The original service was calculated for none of it.",
        "The honest starting point is an Article 220 calculation rather than an opinion, and for an existing building there is a better route than adding nameplates up. That is explained in [what size electrical service you actually need](/blog/service-load-calculation). Sometimes the answer is that the distribution needs rearranging and no extra amperes are required at all.",
      ],
    },
    {
      heading: "Kitchens are the demanding end of it",
      body: [
        "Lancaster has a lot of restaurants, and a commercial kitchen is the most demanding space in ordinary commercial work. Circuits sized to the real equipment schedule rather than the brochure, GFCI where Article 210.8(B) now requires it, wiring methods that survive washdown and grease, and a hood wired so the fans and the suppression system behave correctly together.",
        "Send that equipment schedule early. The connection details decide the rough in, and finding them out in week nine costs a great deal more than finding them out in week one.",
      ],
    },
  ],

  landmarks: [
    "Downtown commercial core and the surrounding blocks",
    "Restaurants and hospitality through the city centre",
    "Older mixed use buildings along the arterials",
    "Light industrial and flex space toward the edges",
    "Offices and professional suites",
    "Warehouse and distribution space out along 283 and 30",
  ],

  demand: [
    {
      title: "Fit outs and remodels",
      body: "From a landlord shell to opening day, coordinated around the ceiling date and the inspection stages rather than around us.",
      service: "commercial-electrical-services",
    },
    {
      title: "Service and panel replacement",
      body: "Older city services that ran out of room, including boards that are a replacement rather than a repair.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Restaurant and kitchen circuits",
      body: "Real connected loads, GFCI where the current code requires it, washdown rated methods and hood interlocks that work.",
      service: "commercial-electrical-services",
    },
    {
      title: "Interior and exterior lighting",
      body: "Retail and office lighting, plus the lot and facade work that gets noticed in January at five in the afternoon.",
      service: "commercial-led-lighting",
    },
    {
      title: "EV charging",
      body: "Staff and customer parking, with the load calculation done before anybody orders equipment.",
      service: "ev-charging-installation",
    },
    {
      title: "Service calls after handover",
      body: "Fault finding, breaker and fixture failures, extra circuits and the work that follows an equipment change.",
      service: "electrical-preventive-maintenance",
    },
  ],

  faq: [
    {
      q: "Is Lancaster too far for a small service call?",
      a: "For planned work it is a normal run. For a single tripped breaker at midnight there are electricians much closer to you than we are, and we will say so on the phone rather than charge you for the drive.",
    },
    {
      q: "Can you work outside our trading hours?",
      a: "Yes, and for anything that interrupts tills, refrigeration or shipping it is usually cheaper overall. Evening and weekend labour costs more per hour and far less than closing the doors.",
    },
    {
      q: "Do you pull the permit in the city?",
      a: "Yes. City work is inspected under the Uniform Construction Code through whichever agency applies to the address, and we apply, book the stages and meet the inspector.",
    },
    {
      q: "Our building has no drawings. Where does that start?",
      a: "With finding out what is actually there. Tracing and re labelling is unglamorous and it is the only honest starting point, because nothing can be planned around a record that is wrong.",
    },
  ],

  related: {
    projects: ["retail-fit-out-wiring", "office-remodel-power-lighting", "commercial-panel-room-feeders", "parking-lot-lighting"],
    articles: ["how-to-read-a-panel-schedule", "service-load-calculation", "signs-your-panel-needs-replacing"],
  },

  nearby: ["lititz", "manheim", "new-holland"],

  keywords: [
    "electrician lancaster pa",
    "commercial electrician lancaster pa",
    "electrical contractor lancaster pennsylvania",
    "restaurant electrician lancaster",
  ],
};

export default town;
