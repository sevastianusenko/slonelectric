import type { Town } from "./types";

const town: Town = {
  slug: "new-holland",
  town: "New Holland",
  county: "lancaster-county",
  title: "Electrician in New Holland PA | Farm & Machine Wiring",
  h1: "Electrical service in New Holland",
  summary:
    "Agricultural and industrial electrician for New Holland PA: dense farm country, equipment manufacturing and the machine wiring that goes with both.",
  lead:
    "New Holland sits in the middle of some of the densest farmland in the county, and it gave its name to a machinery brand that started here in 1895 as a two man repair shop. Both of those things describe our work here: farms on every road out of town, and machines that have to be connected, started and proved.",
  drive: "Around thirty minutes from Myerstown, out through Blue Ball.",

  hero: {
    src: "/photos/services/control-panels-machine-wiring.webp",
    alt: "Control panel built and wired by Slon Electric",
  },

  sections: [
    {
      heading: "Machines arrive with a drawing that stops at the terminal block",
      body: [
        "Equipment manufacturing and equipment dealing are both part of the economy here, and the electrical job that comes with a machine is always the same shape. The manual describes the machine. It rarely tells you the fault current the panel has to handle, the lug size the incoming conductors land on, what the control transformer taps are set for, or whether the drawing in the box matches the machine that shipped.",
        "Sorting that out on site is most of the work of connecting a machine, and it is exactly what a quote written from the manual misses. Two examples are [connecting a machine to motor control](/projects/machine-connection-motor-control) and [instrument racks and process wiring](/projects/instrument-racks-process-wiring).",
      ],
    },
    {
      heading: "Plain sect farms and what changes on them",
      body: [
        "A large share of the farms around New Holland, Blue Ball and out toward Intercourse are Old Order. Some have no utility connection at all, some take power only in specific buildings, and many run equipment from diesel, hydraulic or air systems instead. What any given operation permits is decided by its own church district, not by a rule we can look up.",
        "So the first conversation is about what the operation actually uses and what it does not, and then we work to that. Generators, inverters and 12 volt systems are ordinary here rather than unusual.",
      ],
    },
  ],

  landmarks: [
    "Main Street and the borough commercial core",
    "Equipment manufacturing and dealerships",
    "Earl Township farm ground",
    "Blue Ball and the 322 and 23 junction",
    "Plain sect farms toward Intercourse and Bird in Hand",
    "Machine and fabrication shops around the borough",
  ],

  demand: [
    {
      title: "Machine connection and start up",
      body: "New equipment taken from the vendor drawing to the terminal block, started, rotation proved and handed over running.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Overloads sized to the nameplate",
      body: "The device that actually protects a winding is not the breaker, which is why most cooked motors were cooked.",
      service: "control-panels-machine-wiring",
    },
    {
      title: "Dairy and poultry wiring",
      body: "Parlour and bulk tank circuits, ventilation and controllers, scheduled around milking rather than around us.",
      service: "agricultural-electrical-services",
    },
    {
      title: "Service entrances rebuilt round a yard",
      body: "A yard fed by taps off whichever panel happened to be nearest, put back onto one distribution point.",
      service: "electrical-service-upgrades",
    },
    {
      title: "Shop and pole building wiring",
      body: "Welder receptacles, compressor circuits and lighting, wired from the empty shell or added to what is there.",
      service: "commercial-electrical-services",
    },
    {
      title: "Generators for shops and yards",
      body: "Sized around what genuinely cannot stop on the yard, then proved by opening the supply rather than by a start button.",
      service: "standby-generator-installation",
    },
  ],

  faq: [
    {
      q: "Do you work on Old Order farms?",
      a: "Yes, and the first thing we ask is what the operation uses and what it does not, because that varies by district rather than by a rule anybody can look up. Generator, inverter and 12 volt work is ordinary for us.",
    },
    {
      q: "We have a machine on order. When should we call?",
      a: "Before it ships. Lug sizes, fault current, disconnect location and any three phase supply question are all cheaper to answer while the slab is still clear.",
    },
    {
      q: "A motor keeps burning out on one machine. Is the motor the problem?",
      a: "Usually not. It is normally the overload, which is a different device from the breaker and sized from the nameplate rather than the wire. That mismatch is behind most of the cooked windings we are asked to look at.",
    },
    {
      q: "Can you bring three phase to a shop out here?",
      a: "Whether three phase is available is the utility's decision and it depends on what is at the road. We do the load calculation, have that conversation with them and tell you honestly what it would take.",
    },
  ],

  related: {
    projects: ["machine-connection-motor-control", "dairy-parlour-bulk-tank-wiring", "pole-barn-from-the-shell", "farm-service-entrance-upgrade"],
    articles: ["three-phase-motor-wont-start", "three-phase-vs-single-phase", "what-is-a-vfd"],
  },

  nearby: ["ephrata", "lancaster", "denver"],

  keywords: [
    "electrician new holland pa",
    "farm electrician new holland",
    "machine wiring new holland pa",
    "industrial electrician new holland pennsylvania",
  ],
};

export default town;
