import type { Article } from "./types";

const article: Article = {
  slug: "vfd-single-phase-input",
  question: "Can I run a three phase machine from my single phase supply using a VFD?",
  title: "Running a three phase machine on single phase power with a drive: derating, current and limits",
  category: "Motors and controls",
  summary:
    "How a VFD runs a three phase motor from single phase power, why the drive has to be roughly double the motor, and the input current and breaker that follow from it.",
  answer:
    "Yes, for one machine, provided the drive is chosen for it. A drive rectifies the incoming supply to a DC bus and builds its own three phase output from that bus, so the inverter side does not care that only two of the six input diodes are working. What does care is the input stage: fed single phase, the bus ripple drops from 360 Hz to 120 Hz, the rectifier and the bus capacitors work far harder, and the drive has to be derated, in practice to roughly half of its three phase horsepower rating. Input current on the single phase side runs well over double the motor's three phase nameplate, so the supply conductors and the breaker are sized from the drive's single phase input rating, not from the motor.",
  lead:
    "This question comes up on every farm and in every one man shop that buys a good used three phase machine. The drive answer is real and it works, but it is not the cheap trick it looks like, because the drive has to be considerably larger than the motor and the supply side gets busier than people expect.",

  photos: [
    {
      src: "/photos/blog/vfd-single-phase-1.webp",
      alt: "Control equipment mounted in an enclosure",
      caption: "A drive fed single phase needs the enclosure space for a choke as well as the drive.",
    },
    {
      src: "/photos/blog/ext-vfd.webp",
      alt: "Variable frequency drive unit mounted on a wall",
      caption: "The same drive, fed two legs instead of three, is a much smaller drive. Photo by",
      credit: {
        author: "Suyash.dwivedi",
        href: "https://commons.wikimedia.org/wiki/File:Variable_Frequency_Drive_(VFD)_-_1.jpeg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/blog/vfd-single-phase-2.webp",
      alt: "Industrial machinery and pipework",
      caption: "One drive runs one motor. A machine with its own starters and pumps needs more thought.",
    },
    {
      src: "/photos/blog/ext-pwm.webp",
      alt: "Pulse width modulation waveform diagram",
      caption: "The output is built by pulse width modulation from the bus, whatever fed the bus. Diagram by",
      credit: {
        author: "CyrilB, vector by Krishnavedala",
        href: "https://commons.wikimedia.org/wiki/File:Pwm.svg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "Why the DC bus makes this possible at all",
      body: [
        "A drive has three stages: a diode bridge that rectifies the incoming supply, a bank of capacitors that holds the resulting DC bus, and transistors that switch that bus into a three phase output. The output is manufactured, not passed through, so it does not matter to the motor how many phases arrived at the front door. [What a drive does internally](/blog/what-is-a-vfd) goes through those stages in more detail.",
        "The front door is where it matters. On three phase input the bridge is fed six times per cycle and the bus ripples at 360 Hz, shallow and easy to smooth. On single phase input only one pair of diodes works, the bus is refilled twice per cycle at 120 Hz, and the dips between refills are far deeper. The capacitors have to supply the motor through each of those gaps.",
        "Yaskawa's [application note on applying drives to single phase input](https://www.yaskawa.com/delegate/getAttachment?documentId=AN.AFD.15&cmd=documents&documentName=AN.AFD.15.pdf) puts numbers on the cost of that. Input current distortion of 90 percent THD and above is expected on single phase against roughly 40 percent on three phase, overall power factor falls to about 0.7 even with the recommended DC link choke fitted, and the average bus voltage sits lower, which means less voltage available to the motor near base speed.",
      ],
    },
    {
      heading: "Derating, and why the drive ends up twice the motor",
      body: [
        "Because the rectifier and the capacitors are doing more work for the same shaft power, the drive's rating has to come down. The published tables land near a two to one step: the frame that carries a 10 horsepower motor on three phase input is the one listed for a 5 horsepower motor on single phase input. That is not a safety margin somebody invented, it is what keeps the bus capacitors and the diode bridge inside their ratings.",
        "Two further rules go with it. The drive has to meet or exceed both the motor nameplate horsepower and the motor nameplate full load amps, because meeting only one of them is how drives get undersized on paper and fail early in service. And overload capability shrinks: the usual allowance on single phase input is 120 percent of drive rated output current for 60 seconds, for starting only, which rules out cyclic overloads such as a rock crusher or a press.",
        "Drives sold specifically with single phase input ratings are a different matter, and where the horsepower exists they are the tidier answer. What you cannot do is pick a three phase drive at motor horsepower, feed it two legs, and defeat the input phase loss trip when it complains. That protection is what tells you the drive is undersized, and switching it off ends with a failed rectifier and a void warranty.",
      ],
    },
    {
      heading: "Sizing it properly, with real numbers",
      body: [
        "The worked example below is a common one on a farm shop: an existing 5 horsepower three phase machine and a 240 volt single phase service. Everything in it comes from the manufacturer's own single phase tables and from the standard motor current tables in Article 430 of the code.",
        "Read the last two lines carefully, because that is where most of the surprise lives. The supply side has to carry far more current than the motor nameplate suggests, and the available voltage window is tighter than for a three phase feed.",
      ],
      callout: {
        title: "Worked example: a 5 hp three phase motor on a 240 volt single phase supply",
        lines: [
          "Motor: 5 hp, 230 volt, three phase. NEC Table 430.250 gives 15.2 amps full load current.",
          "Drive: the frame rated 10 hp on three phase input, derated for single phase input to 5 hp and 17.0 amps output. Roughly a two to one step up from the motor.",
          "Check both figures: 17.0 amps output clears the motor's 15.2 amps with margin for a 1.15 service factor, and the horsepower rating matches. Both have to pass.",
          "Single phase input current for that same drive: 35.0 amps. More than double the motor's three phase full load current, and more than the 28 amps a 5 hp single phase motor would draw under Table 430.248.",
          "Supply conductors and protection from the maker's single phase table: 8 AWG, time delay fuse 60 amps maximum, inverse time breaker 80 amps maximum.",
          "A DC link choke is required on this frame size and is built in only on larger models. Leave it out and input distortion goes past 100 percent THD.",
          "Load on the service: 240 volts times 35 amps is 8.4 kVA for one machine, which is a real addition to a 200 amp single phase service and belongs in a load calculation before anything is ordered.",
          "Voltage window: single phase input tolerance tightens to plus 10 and minus 5 percent, so 228 volts is the floor on a 240 volt drive, and the motor then sees about 207 volts, costing torque near base speed.",
        ],
      },
    },
    {
      heading: "What this does to the supply side",
      body: [
        "The number that catches people is the input current. A 5 horsepower motor that would draw 15.2 amps per leg on a three phase service pulls 35 amps from a single phase one through the drive, because the same power is being taken through two conductors instead of three and at a poorer power factor. On an older farm or shop service, two or three machines converted this way add up quickly, and the honest answer is sometimes an [upgraded service](/electrical-service-upgrades) rather than another drive.",
        "Protection has to suit the equipment as well as the load. Industrial control panels and machinery carry a short circuit current rating, and the available fault current where the panel is installed must not exceed it. The [IAEI article on NEC requirements for short circuit current ratings](https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/) sets out where those markings are required, including 409.110 for industrial control panels, 430.8 for motor controllers and 670.3 for industrial machinery, and 110.24 for marking available fault current at the service.",
      ],
    },
    {
      heading: "Chokes, harmonics and the things that bite",
      body: [
        "A DC link choke is not optional on most single phase input applications. It limits bus ripple current, improves the power factor to something near 0.7 and keeps input distortion out of the range that overheats the rectifier. Larger frames come with one built in, smaller ones need an external choke wired to the bus terminals with the factory shorting bar removed, which means enclosure space and heat that the panel layout has to allow for.",
        "An AC line reactor is not a substitute here. On a single phase feed the voltage drop across a three phase line reactor eats into an already lower bus voltage, so the motor loses torque near base speed and draws more current for the same work. Where power quality genuinely demands a line reactor, the usual fix is a motor with a lower base voltage, a 208 volt motor on a 240 volt supply for example. Getting that layout right is ordinary [control panel and machine wiring work](/control-panels-machine-wiring).",
        "One more: generators. A drive is a non linear load, and a drive fed from a standby set pushes distortion back into the alternator. Generator sets driving drives are normally oversized for that reason, and the set manufacturer should see the load list before anybody commits.",
      ],
      bullets: [
        "Drive rated for single phase input, or a three phase drive derated near two to one",
        "Both nameplate horsepower and nameplate full load amps satisfied by the drive",
        "Supply and protection sized from the drive's single phase input current",
        "DC link choke fitted, and input phase loss protection left enabled",
        "Enclosure space and ventilation planned for the choke as well as the drive",
      ],
    },
    {
      heading: "When this is the right answer, and when it is not",
      body: [
        "One drive runs one motor. That is the boundary. You cannot take three phase off a drive output to feed a panel, a starter, a control transformer, a coolant pump or a welder, and a machine that has its own contactors and auxiliary motors usually needs a separate single phase control supply and some rework before a drive will run it.",
        "So the drive is the right answer for a single motor machine where variable speed is useful or at least harmless: a mill, a lathe, a fan, a pump, an auger. It is the wrong answer when several machines need three phase at once, when the horsepower is large enough that the derated drive and the service upgrade cost more than the alternatives, or when the equipment needs true three phase for its own controls. The supply side comparison, rotary and static converters against bringing in utility three phase, is covered in [the single phase and three phase write up](/blog/three-phase-vs-single-phase).",
        "On farms the decision usually turns on how many machines are involved and how far the transformer is. One grain leg or one shop machine is a drive job. A yard full of three phase equipment is a service conversation, and that is the one we tend to have on [agricultural electrical work](/agricultural-electrical-services) around Lebanon and Lancaster counties.",
      ],
    },
  ],

  faq: [
    {
      q: "Can I take three phase off the drive output for something else?",
      a: "No. The output is a switched waveform intended for one motor, and anything with a coil, a transformer or a rectifier on it will misbehave or be damaged. Opening a contactor between a running drive and its motor also destroys output transistors.",
    },
    {
      q: "My drive is already rated for single phase input. Do I still derate it?",
      a: "Not if the rating is published for single phase at the horsepower you need. Check the single phase input current figure anyway, because that is what the conductors and the breaker are sized from, and it is much higher than the three phase figure on the nameplate.",
    },
    {
      q: "What happens if I feed a three phase drive single phase without derating?",
      a: "Usually input phase loss faults at first, then shortened capacitor life and a failed rectifier. The phase loss trip is telling you the drive is undersized for the load, and disabling it converts a warning into permanent damage and a void warranty.",
    },
    {
      q: "Is a rotary phase converter better?",
      a: "For several machines, or where equipment needs real three phase for its own controls, usually yes. For one motor where speed control is useful, a drive is normally cheaper and quieter. The two are not really competing for the same job.",
    },
    {
      q: "Will the machine's own controls still work?",
      a: "Often not without changes. Machine control transformers and auxiliary motors are usually fed from the incoming three phase, which no longer exists, so they need a separate single phase feed and the start and stop circuit rewired to the drive inputs.",
    },
  ],

  sources: [
    {
      label: "Yaskawa: Applying Drives to Single-Phase Input Applications, application note AN.AFD.15",
      href: "https://www.yaskawa.com/delegate/getAttachment?documentId=AN.AFD.15&cmd=documents&documentName=AN.AFD.15.pdf",
      note: "Derating tables, single phase input current, 120 Hz bus ripple, THD and power factor figures, DC link choke requirements and branch circuit recommendations.",
    },
    {
      label: "IAEI Magazine: NEC Requirements for Short-Circuit Current Ratings",
      href: "https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/",
      note: "Where SCCR marking is required, including 409.110 for control panels, 430.8 for controllers, 670.3 for machinery and 110.24 for available fault current.",
    },
  ],

  services: [
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
  ],

  related: ["what-is-a-vfd", "three-phase-vs-single-phase", "vfd-ground-fault-troubleshooting"],

  closing:
    "We size and wire these conversions on farm and shop machines across Lebanon, Lancaster and Berks counties, and we also say when the sums point at a proper three phase service instead. Either way the decision starts with the motor nameplate and the existing service, not with the drive catalogue.",

  keywords: [
    "vfd single phase input",
    "vfd phase converter",
    "three phase from single phase",
    "variable frequency drive",
    "phase converter",
  ],
};

export default article;
