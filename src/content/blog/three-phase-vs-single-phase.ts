import type { Article } from "./types";

const article: Article = {
  slug: "three-phase-vs-single-phase",
  question: "Is it worth bringing three phase to the building?",
  title: "Three phase against single phase: what changes, what it costs you to go without, and when the answer is no",
  category: "Power distribution",
  summary:
    "What three phase actually gives you, why motors are smaller and start better on it, what the utility needs before they will bring it, and the alternatives when they will not.",
  answer:
    "Three phase delivers power continuously rather than in pulses, which means motors are smaller, cheaper, start better and last longer, and the same job can be done with roughly 58 percent of the current per conductor. If your building runs real motor loads, three phase is almost always the better answer. The catch is that it is the utility's decision, not yours, and if the line at the road is single phase the cost of bringing it in can be large. Where that is the case, a phase converter or a drive is the usual way round it.",
  lead:
    "This question usually arrives attached to a piece of equipment. Somebody has found a machine they want, it is three phase, and the building is not. What follows is a conversation about the utility, the cost of a line extension, and whether there is a way round it. Here is what actually matters in that decision.",

  photos: [
    {
      src: "/photos/blog/three-phase-1.webp",
      alt: "Three phase distribution switchboard in a plant",
      caption: "A three phase distribution lineup. Three conductors carrying the same power a single phase system needs much heavier wire for.",
    },
    {
      src: "/photos/blog/ext-3ph-waveform.webp",
      alt: "Diagram of three phase alternating current waveforms",
      caption: "Three waveforms 120 degrees apart. Where one is at zero the other two are not, which is the whole point. Diagram by",
      credit: {
        author: "J JMesserly, after SiriusA",
        href: "https://commons.wikimedia.org/wiki/File:3_phase_AC_waveform.svg",
        license: "Public domain",
      },
    },
    {
      src: "/photos/blog/three-phase-2.webp",
      alt: "Instrumentation and control equipment on a rack",
      caption: "Most industrial equipment assumes three phase. Single phase versions exist but are larger and more expensive.",
    },
    {
      src: "/photos/blog/ext-3ph-alt.webp",
      alt: "Illustration of three phase electrical supply",
      caption: "Another view of the same idea. Illustration by",
      credit: {
        author: "H Padleckas, after SiriusA",
        href: "https://commons.wikimedia.org/wiki/File:Trifaz%C4%97_Elektra.png",
        license: "CC BY 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "What the difference physically is",
      body: [
        "Single phase power arrives as one alternating waveform. It rises, falls through zero, goes negative, and passes through zero again, one hundred and twenty times a second. At every one of those zero crossings the instantaneous power being delivered is nothing.",
        "Three phase is three of those waveforms, offset from each other by 120 degrees. When one is at zero the other two are not, so the total power delivered is essentially constant rather than pulsing. That single fact is behind almost every practical advantage that follows.",
        "For a motor it means the magnetic field rotates smoothly on its own. A three phase motor does not need a start winding, a capacitor or a centrifugal switch, because the supply itself produces a rotating field. A single phase motor has to fake that with extra components, and those components are the parts that fail.",
      ],
    },
    {
      heading: "What it means in the building",
      body: [
        "The first thing you notice is conductor size. For the same power, three phase carries less current per conductor. The relationship comes out of the square root of three in the power formula, and the practical effect is that three phase needs roughly 58 percent of the current that single phase does for the same load.",
        "That matters most over distance, because voltage drop follows current. A run that needs an expensive conductor on single phase often needs a much smaller one on three phase, and on a farm or a large site that difference alone can pay for a good part of the work. The arithmetic behind it is set out in [our piece on voltage drop over long runs](/blog/voltage-drop-long-farm-runs), and the [IAEI article on voltage drop calculations](https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/) gives the formulas and the copper and aluminium constants if you want to work it yourself.",
        "The second thing is the motors. Three phase motors are physically smaller for the same output, cost less, start under load far better, and have no start components to fail. On equipment that runs all day, that difference compounds. Starting demand is the part people underestimate: the [NDSU extension guidance on farm standby power](https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators) puts it at roughly four times the running power for an electric motor, which is why a supply that looks adequate on paper still will not start a compressor.",
      ],
      callout: {
        title: "The same 10 horsepower motor, two ways",
        lines: [
          "Ten horsepower is roughly 7.5 kilowatts of mechanical output. Allow for efficiency and it is drawing something over 8 kW from the supply.",
          "On 240 volt single phase that is in the region of 50 amps running, and a starting surge several times that.",
          "On 240 volt three phase the same load is in the region of 28 amps per conductor, because the current is shared across three.",
          "On 480 volt three phase it drops again to around 14 amps per conductor.",
          "Over a 300 foot run those three cases need very different conductor sizes, and the single phase version is the one that will not start on a hot day if somebody economised.",
          "Figures here are typical nameplate ranges for illustration. Always size from the actual nameplate, not from a rule of thumb.",
        ],
      },
    },
    {
      heading: "The voltages you will meet around here",
      body: [
        "In this part of Pennsylvania most small buildings are 120/240 volt single phase. Commercial and industrial buildings are usually 120/208 volt three phase for lighting and small power, or 277/480 volt three phase where there are serious motor loads, with a transformer stepping down to 120/208 for receptacles and lighting.",
        "Farms sit awkwardly between the two. A dairy or poultry operation often has enough motor load to justify three phase but sits on a rural single phase line, which is exactly where this question gets expensive.",
        "There is also an older arrangement still found on farms and in small industrial buildings: the high leg delta, sometimes called a wild leg. It gives 240 volt three phase and 120 volt single phase from the same transformer bank, but one of the three legs sits at about 208 volts to neutral instead of 120. Connecting a 120 volt load to that leg destroys it. The high leg has to be identified in orange and it catches people out regularly.",
      ],
    },
    {
      heading: "Whether the utility will actually bring it",
      body: [
        "This is the part nobody can answer from inside the building. Whether three phase is available depends on what is on the poles at the road, how far away the nearest three phase line is, and what the utility's policy is on contributing to a line extension.",
        "If three phase is already at the road, the job is usually straightforward and the cost is mostly on your side of the meter. If the nearest three phase is a mile away, the line extension can run into serious money, and utilities generally expect the customer to carry a large part of that.",
        "The only way to find out is to ask them, with a load figure in hand. That is one of the reasons a proper load calculation comes before the conversation rather than after, which is the argument made in [the load study and drawings write up](/projects/load-study-and-drawings). The other reason is that the answer changes the whole design, and redesigning after the utility says no is expensive.",
      ],
    },
    {
      heading: "What to do when the answer is no",
      body: [
        "There are three usual ways round it and they are not equivalent.",
        "A rotary phase converter uses an idler motor to generate a third leg. It handles starting loads reasonably and will run several machines, but it is a machine in its own right with its own maintenance and its own noise.",
        "A static phase converter is cheaper and helps a motor start, then drops out. The motor then runs on two legs at reduced output. It is acceptable for occasional light duty and a poor idea for anything running continuously.",
        "A variable frequency drive is usually the best answer for a single machine. Many drives will accept single phase input and put out true three phase to the motor, with the penalty that the drive has to be derated because its input stage is working harder. That, plus everything else a drive brings, is covered in [our article on what a VFD actually does](/blog/what-is-a-vfd). For a single large motor it is often cheaper and better than a converter, and it gives you speed control you did not have before.",
      ],
      bullets: [
        "Rotary converter: handles several machines and real starting loads, but is another machine to maintain",
        "Static converter: cheap, reduced output, only sensible for occasional light duty",
        "VFD on single phase input: usually best for one machine, must be derated, adds speed control",
        "None of them make the building three phase. They make one machine work.",
      ],
    },
    {
      heading: "When three phase is not worth chasing",
      body: [
        "If the building runs lighting, receptacles, a small compressor and not much else, three phase adds cost and complexity for very little. Single phase is perfectly adequate for a great many farm and commercial buildings and there is no prize for having three wires instead of two.",
        "It is also not worth chasing if the load is going to be mostly electronic or resistive. Heaters, lighting and computers do not care. It is motors that care, and specifically motors that start under load or run continuously.",
        "The honest test is to add up the motor load and ask how much of it runs at once. If the answer is a handful of horsepower, stay single phase and size the service properly. If the answer is tens of horsepower, or you are planning a plant, the question is worth asking the utility seriously. That is the situation behind [the three phase distribution upgrade](/projects/three-phase-distribution-upgrade), and it is the sort of thing our [industrial electrical work](/industrial-electrical-services) is usually built around.",
      ],
    },
  ],

  faq: [
    {
      q: "Can I convert my single phase service to three phase myself?",
      a: "No. What arrives at the meter is the utility's decision and their equipment. What you can do is change what happens after the meter, which is where converters and drives come in, and they make a machine work rather than making the building three phase.",
    },
    {
      q: "Will a three phase motor run on two legs if one fails?",
      a: "It will keep turning under light load and it will overheat and fail doing it. Single phasing is one of the most common ways three phase motors die, which is why proper overload protection matters more than people assume.",
    },
    {
      q: "What is the high leg and why does it matter?",
      a: "On a high leg delta arrangement one of the three legs sits at around 208 volts to neutral rather than 120. It is identified in orange for that reason. Putting a 120 volt load on it destroys the load, and it is a genuinely common mistake in older farm and industrial buildings.",
    },
    {
      q: "Is 480 volt worth it over 208?",
      a: "For a building with substantial motor load, usually yes, because the current halves again and the conductors get much smaller. It brings higher arc flash energy with it and a transformer for the small power, so it is a decision for buildings with real load rather than a default.",
    },
    {
      q: "How do I find out what the utility would charge?",
      a: "Call them with a load figure and the address. They will tell you what is on the poles and what a line extension would involve. Doing that before the design is fixed saves redoing the design later.",
    },
  ],

  sources: [
    {
      label: "IAEI Magazine: Voltage drop calculations",
      href: "https://iaeimagazine.org/2019/2019september/voltage-drop-calculations/",
      note: "Formulas, copper and aluminium constants and worked examples, including the factor that changes between single and three phase.",
    },
    {
      label: "NDSU: Standby electric generators",
      href: "https://www.ndsu.edu/agriculture/ag-hub/ag-topics/ag-technology/machinery/standby-electric-generators",
      note: "Useful on motor starting demand, including the rule of thumb that a motor needs several times its running power to start.",
    },
  ],

  services: [
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
  ],

  related: ["what-is-a-vfd", "what-is-switchgear", "voltage-drop-long-farm-runs"],

  closing:
    "We size services, deal with the utility and build the distribution behind three phase equipment across farms and plants in Lebanon, Lancaster and Berks counties. If you have a machine in mind and no idea whether the building can take it, that is a short conversation and worth having before you buy it.",

  keywords: [
    "three phase vs single phase",
    "three-phase power",
    "3 phase electric",
    "high leg delta",
    "480v",
    "phase converter",
  ],
};

export default article;
