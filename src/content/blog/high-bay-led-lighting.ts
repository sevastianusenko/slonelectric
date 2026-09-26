import type { Article } from "./types";

const article: Article = {
  slug: "high-bay-led-lighting",
  question: "The warehouse is lit and people still say it is dark. What is wrong?",
  title: "High bay LED lighting: why brighter fixtures usually do not fix a dark building",
  category: "Lighting",
  summary:
    "Why a warehouse or shop can be well lit on paper and dark where people work, how mounting height and beam angle decide the layout, and what actually pays back on a retrofit.",
  answer:
    "A building feels dark when the light is on the floor instead of on the work. In a warehouse that usually means the fixtures were laid out on a grid without regard to where the racking runs, so the aisles are in shadow while the open floor is over lit. The fix is layout and beam angle before it is lumens: fixtures aligned with the aisles, beam spread matched to the mounting height, and light levels chosen for the task rather than for the square footage. Adding brighter fixtures to a bad layout mostly adds glare and cost.",
  lead:
    "This complaint arrives in almost the same words every time. The lights were replaced two years ago, the bill went down, and people still say it is dark. Both things are usually true at once, and the reason is almost always the layout rather than the fixture.",

  photos: [
    {
      src: "/photos/blog/high-bay-1.webp",
      alt: "Warehouse interior with racking and guard rails",
      caption: "The building the lighting has to serve. Where the racking runs decides where the light has to go.",
    },
    {
      src: "/photos/blog/ext-highbay.webp",
      alt: "Industrial LED high bay luminaire",
      caption: "A high bay luminaire of the kind used at these mounting heights. Photo by",
      credit: {
        author: "Martin Dreyer",
        href: "https://commons.wikimedia.org/wiki/File:Dialight_LED_DuroSite_LED_HighBay_industrieller_Hallenstrahler.jpeg",
        license: "CC BY-SA 3.0 de",
      },
    },
    {
      src: "/photos/blog/high-bay-2.webp",
      alt: "Large commercial space with linear LED lighting",
      caption: "Linear fixtures run along the aisles rather than across them. The difference at floor level is large.",
    },
    {
      src: "/photos/blog/ext-emt-conduit.webp",
      alt: "EMT conduit installation on a training panel",
      caption: "The other half of a retrofit is the wiring that feeds it. Photo by",
      credit: {
        author: "Jcmorris2",
        href: "https://commons.wikimedia.org/wiki/File:Training_panel_for_EMT_conduit_J._Morris_CC_BY-SA-3.0.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "Lighting the racking, not the floor",
      body: [
        "A warehouse is not an open space, it is a set of corridors with walls of product on both sides. Racking blocks light from the side, so a fixture positioned between two aisles lights the tops of the racks and very little else. The person picking at waist height in the aisle is standing in a slot that almost nothing reaches.",
        "The fix is orientation. Linear fixtures running along the aisle rather than across it put light down the corridor where people work. Round high bays get positioned over aisles rather than on a uniform grid. Neither change costs more than doing it wrong, and both make a larger difference than adding output.",
        "There is a related mistake in shops and barns. Fixtures down the centre of the building light the drive lane and leave the benches and stalls in shadow, which is exactly the problem described in [the free stall barn relight](/projects/free-stall-barn-lighting). The principle transfers directly: put the light where the work happens.",
      ],
    },
    {
      heading: "Mounting height decides the beam",
      body: [
        "The second variable is beam angle, and it is chosen by mounting height. A wide beam from forty feet spreads light thinly over a large area and gives poor levels everywhere. A narrow beam from fifteen feet produces bright pools and dark gaps between them.",
        "The rough working rule is that higher mounting wants a narrower beam and lower mounting wants a wider one. Aisle lighting between racking is a special case that wants a narrow distribution regardless of height, because the point is to get light down into the slot rather than across the top.",
        "Spacing follows from the same decision. Fixtures spaced further apart than the mounting height allows will produce visible scalloping on the floor, and that pattern is what people mean when they say a building looks patchy even though a meter reading at one point looks fine.",
      ],
      bullets: [
        "Higher mounting, narrower beam. Lower mounting, wider beam",
        "Aisles want narrow distribution at any height",
        "Spacing tied to mounting height, or you get scalloping",
        "Linear along the aisle, not across it",
        "Levels chosen for the task, not for the floor area",
      ],
    },
    {
      heading: "What the numbers on the box actually mean",
      body: [
        "Three figures matter and only one of them is on the front of the carton.",
        "Lumens is total light output, which tells you nothing about where it goes. Efficacy, in lumens per watt, is the useful efficiency number: the Department of Energy notes that LED efficacy now reaches [up to 150 lumens per watt or more](https://www.energy.gov/cmei/ssl/led-basics), which is why the electricity saving on a retrofit is real even when the light levels go up.",
        "The third is lifetime, and it is more subtle than it looks. LEDs rarely fail outright. They fade, and the industry measures useful life as the point at which output has dropped to 70 percent of the original. DOE puts quality white LED products in the range of 30,000 to 50,000 hours on that basis. A building running twelve hours a day reaches that in roughly a decade, which is the honest planning horizon rather than the headline number.",
        "Colour temperature is a preference rather than a performance figure, but it changes how a space is judged. Cooler light reads as brighter at the same measured level, which is why a retrofit sometimes gets praised for brightness when the real change was colour.",
      ],
    },
    {
      heading: "Controls, and the saving people leave on the table",
      body: [
        "Most of the money in a lighting retrofit comes from the fixture change. Most of the money left behind afterwards is in controls.",
        "Aisle by aisle occupancy sensing is the obvious one in a warehouse, because aisles are empty most of the time. Fixtures drop to a low level when nobody is there and come up when somebody enters. In a building with thirty aisles that is a large share of the running hours removed without anybody noticing the lighting at all.",
        "Daylight harvesting matters wherever there are roof lights or a glazed wall, and it is the control most often installed and then left uncommissioned. A daylight sensor that was never set up is worse than none, because people disable the whole system after it misbehaves once.",
        "Time control is the crude version and still worth having in a building with fixed hours. The wiring for all of this is low voltage and it is the part most often done carelessly, which is covered in [our piece on comms rooms and structured cabling](/projects/comms-room-structured-cabling).",
      ],
      callout: {
        title: "What to check before anybody quotes a retrofit",
        lines: [
          "Measure at the work plane in the aisles, not in the open floor. That is where the complaint comes from.",
          "Note the mounting height and whether fixtures can be moved or only replaced in place.",
          "Note which way the racking runs and whether it is likely to be reconfigured.",
          "Count the existing circuits and check the panel. A retrofit usually reduces load, but added controls need their own wiring.",
          "Ask what access is available. At thirty feet the lift is a real line in the cost and it decides whether the job is done at night.",
          "Ask about the existing fixtures: metal halide ballasts and lamps are hazardous waste in quantity and disposal is part of the job.",
        ],
      },
    },
    {
      heading: "What actually pays back",
      body: [
        "The energy saving is the part everyone counts and it is usually the smaller half. Replacing aged discharge fixtures with LED typically removes more than half the lighting load, and in a building running long hours that is a real number on the bill.",
        "The part that is rarely counted is maintenance. A lamp change at thirty feet needs a lift, an operator and often an out of hours slot. In a building with a hundred fixtures on discharge lamps, that is a recurring cost that quietly disappears with the retrofit. On a farm or in a plant it disappears along with the safety exposure of working at height over machinery.",
        "The third piece is the one that pays back without appearing anywhere: people can see what they are doing. Picking errors, damage and near misses all track with how well the working plane is lit, and none of them show up in an energy model. That is the argument behind most of our [commercial and agricultural LED lighting work](/commercial-led-lighting) and behind [the warehouse high bay retrofit](/projects/warehouse-high-bay-lighting).",
      ],
    },
    {
      heading: "Where this applies beyond warehouses",
      body: [
        "The same reasoning covers any tall building with tall contents. Manufacturing bays where the work is at a bench rather than on the floor. Equipment sheds and shops where the interesting surface is a vehicle at head height. Poultry and livestock buildings, where the requirement is not visibility for people at all but a controlled level for the animals, which is a different calculation again.",
        "Outdoor is the other relative. A parking lot has the same problem inverted: uniformity matters more than peak brightness, because the eye adapts to the brightest thing it can see and everything dimmer becomes a dark patch. That is set out in [the parking lot lighting write up](/projects/parking-lot-lighting).",
        "The common thread is that lighting design is about distribution, not output. A building with half the lumens in the right places will be judged brighter than one with twice as many in the wrong ones. Product selection guidance such as the [ENERGY STAR material on certified fixtures](https://www.energystar.gov/products/light_fixtures) is useful once the layout question is settled, and close to useless before it.",
      ],
    },
  ],

  faq: [
    {
      q: "Can I just swap lamps instead of replacing fixtures?",
      a: "Retrofit lamps exist and they work, with two caveats. The optics stay whatever the old fixture had, so a bad distribution stays bad. And the interaction with the existing ballast has to be right, or you get early failures. Where the layout is already correct, a lamp swap is a reasonable cheaper option.",
    },
    {
      q: "How bright should a warehouse be?",
      a: "It depends on the task rather than the building. Bulk storage where a forklift moves pallets needs far less than an area where people read small labels. The useful question is what people actually do in each zone, and the answer is usually that different zones need different levels.",
    },
    {
      q: "Will new lighting really cut the bill in half?",
      a: "Replacing aged discharge fixtures usually removes more than half the lighting load, yes. What that means on the total bill depends on how much of your consumption is lighting, which in a building full of motors may be a modest share.",
    },
    {
      q: "Do LED fixtures work in a cold store or an unheated shed?",
      a: "Better than the alternatives. LEDs perform well in cold conditions, which is the opposite of fluorescent behaviour. The thing to check is the driver rating rather than the LED itself.",
    },
    {
      q: "What about barns and poultry houses?",
      a: "Same technology, different specification. Those buildings need sealed fixtures rated for a wet, dusty and corrosive environment, and in poultry the dimming curve matters as much as the level. A general commercial fixture will not last there.",
    },
  ],

  sources: [
    {
      label: "US Department of Energy: LED basics",
      href: "https://www.energy.gov/cmei/ssl/led-basics",
      note: "Efficacy figures, and the definition of useful life as the point where output falls to 70 percent.",
    },
    {
      label: "ENERGY STAR: Light fixtures",
      href: "https://www.energystar.gov/products/light_fixtures",
      note: "Certification criteria, colour temperature ranges and dimmer compatibility, useful once the layout is decided.",
    },
  ],

  services: [
    { label: "Commercial and agricultural LED lighting", href: "/commercial-led-lighting" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Low voltage, controls and monitoring", href: "/low-voltage-structured-wiring" },
  ],

  related: ["electrical-distribution-in-a-building", "how-to-read-a-panel-schedule", "nec-547-agricultural-wiring"],

  closing:
    "We lay out and install lighting for warehouses, shops, barns and lots across Lebanon, Lancaster and Berks counties, and the first thing we do is walk the building and ask where people actually work. If yours was relamped recently and still feels dark, that walk is usually where the answer is.",

  keywords: [
    "led lighting high bay",
    "high bay lighting",
    "warehouse lighting installation",
    "led lighting retrofit",
    "commercial lighting installation",
    "outdoor lighting contractor",
  ],
};

export default article;
