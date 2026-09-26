import type { Article } from "./types";

const article: Article = {
  slug: "infrared-electrical-survey",
  question: "Our insurer wants a thermographic report. What does an infrared survey actually find?",
  title: "Infrared electrical surveys: why the load matters more than the camera, and what the temperatures mean",
  category: "Maintenance",
  summary:
    "What a thermographic survey finds and misses, why 40 percent load is the threshold, how findings are graded by temperature rise, and what an insurer ready report contains.",
  answer:
    "It finds connections that are running warmer than they should, months before they fail. A loose or corroded termination has extra resistance, resistance makes heat, and heat is visible to a thermal camera long before it is visible to anybody else. What decides whether the survey is worth doing is the load at the time: NFPA 70B points at a minimum of 40 percent of design load, and the higher the better, because heat at a bad joint rises with the square of the current. A scan of an idle building is a photograph of a wall.",
  lead:
    "Thermography has a reputation problem, because it is easy to do badly and the bad version looks identical to the good one. Somebody walks the building with a camera, takes forty orange pictures and emails a PDF. Whether that document is worth anything depends almost entirely on things that are not in the pictures: what the equipment was carrying at the time, whether the covers were off, and what the temperatures were compared against.",

  photos: [
    {
      src: "/photos/projects/infrared-survey-switchboard-1.webp",
      alt: "Thermal imaging camera in use during an electrical survey of live gear",
      caption: "The camera is the easy part. Getting the building to be busy while you use it is the work.",
    },
    {
      src: "/photos/blog/ext-switchgear-2.webp",
      alt: "High voltage switchgear lineup",
      caption: "Lineups like this are where a survey earns its money, because a failure takes everything downstream. Photo by",
      credit: {
        author: "Novoklimov",
        href: "https://commons.wikimedia.org/wiki/File:High-voltage_switchgear_01.jpg",
        license: "CC BY 4.0",
      },
    },
    {
      src: "/photos/projects/infrared-survey-switchboard-2.webp",
      alt: "Switchboard and downstream panels opened for a thermographic survey",
      caption: "Covers off, under load. A closed metal door is opaque to the camera.",
    },
    {
      src: "/photos/blog/ext-distribution.webp",
      alt: "Detail of an electrical distribution panel",
      caption: "Most findings are terminations rather than equipment, and most are cheap to correct. Photo by",
      credit: {
        author: "Lowe, Jet",
        href: "https://commons.wikimedia.org/wiki/File:DETAIL_OF_ELECTRICAL_PANEL._-_Lightship_116,_Pier_3,_Inner_Harbor,_Baltimore,_Independent_City,_MD_HAER_MD-133-16.tif",
        license: "Public domain",
      },
    },
  ],

  sections: [
    {
      heading: "What is actually being measured",
      body: [
        "A bad connection is a resistance in series with the load, and power dissipated in it goes up with the square of the current. Double the load and the heat at that joint goes up four times. That single relationship explains everything else about how these surveys have to be done.",
        "It explains why the load threshold matters. EC&M's overview of the practice, [Beat the Heat](https://www.ecmweb.com/content/article/20891868/beat-the-heat), cites NFPA 70B's minimum of 40 percent of design load and notes that higher is better. Below that, a joint that will be alarming at full production barely registers, and the report comes back clean on a building that is quietly cooking a lug.",
        "It also explains the failure timeline. A joint runs slightly warm, the warmth accelerates oxidation, oxidation increases resistance, and resistance makes more heat. The process is self feeding and slow, which is why the failure lands on the coldest evening or the hottest afternoon of the year, when the load is highest. That is the same story as [the winter failure call](/projects/emergency-winter-failure), from the other end.",
      ],
    },
    {
      heading: "Covers off, and the argument about windows",
      body: [
        "Infrared does not see through metal. A closed panel door shows you the temperature of the door, which tells you almost nothing, because a serious hot spot inside may raise the surface a degree or two while a minor one raises it the same amount.",
        "So a real survey means covers removed on energised equipment, which is not a trivial thing to ask for. It is live work, it needs the right PPE and an assessment of the risk, and it needs somebody qualified to open the gear. That is a large part of why a proper survey costs more than a walk around with a camera.",
        "Infrared windows are the alternative: a permanently fitted port with a lens that passes infrared, letting the scan happen with the door closed. They cost money up front and pay it back on every survey afterwards, and on equipment that is genuinely awkward to open they are the difference between a survey happening annually and a survey happening once.",
      ],
    },
    {
      heading: "How a finding gets graded",
      body: [
        "The number that matters is not the absolute temperature, it is the difference. A phase running hot is compared against the other phases carrying similar current, or against a similar component elsewhere in the same gear. Ambient temperature, load at the moment of the image and the emissivity of the surface all have to be recorded for the comparison to mean anything.",
        "The grading that follows comes from the maintenance testing standards rather than from the camera. A small rise over a matching component is a note for the file. A larger one is scheduled work. A difference of around 15 degrees Celsius over a similar component under similar load is the point at which EC&M reports NETA's recommendation as immediate repair.",
        "Without that structure you get a folder of orange pictures and no decisions. With it you get a priority list, which is the thing an owner, a maintenance manager or an insurer can actually act on.",
      ],
      callout: {
        title: "What a usable report contains for every finding",
        lines: [
          "A thermal image and an ordinary photograph of the same component, so somebody can find it again.",
          "The equipment identified by tag or panel and circuit, not by description.",
          "The load at the moment of the image, read at the time rather than assumed.",
          "Ambient temperature, and the reference component the rise is measured against.",
          "A severity grade and a recommended action with a timeframe.",
          "After the repair, a retest image proving the temperature came back down.",
        ],
      },
    },
    {
      heading: "What it will not find",
      body: [
        "Infrared finds heat, so it finds problems that produce heat under load. That covers loose and corroded terminations, overloaded conductors, failing breakers, unbalanced phases, failing capacitors and motor bearings on their way out. It is very good at all of those.",
        "It will not find a fault that only appears when a particular machine starts. It will not find insulation that has degraded but is not yet leaking enough to warm up, which is what insulation resistance testing is for. It will not find a grounding or bonding problem, because those show up as voltage rather than heat and need a different approach entirely, as described in [stray voltage on a dairy farm](/blog/stray-voltage-on-dairy-farms). And it will not find anything in gear that was lightly loaded on the day.",
        "That is why thermography sits inside a maintenance programme rather than replacing one. The de energised visit with a torque wrench and a test set covers what the camera cannot see, and the two together produce a picture neither gives on its own.",
      ],
    },
    {
      heading: "The rule change that moved this from optional to expected",
      body: [
        "NFPA 70B was a Recommended Practice for decades. Everybody cited it and nobody was bound by it. The 2023 edition made it a Standard written in mandatory language, which IAEI's summary of [what that change means](https://iaeimagazine.org/electrical-safety/nfpa-70b-what-the-change-means-for-maintenance-operations-and-safety/) describes as moving from what maintenance should be to what it shall be.",
        "Two practical things follow. The standard sets out what a maintenance programme has to contain and ties intervals to the condition and criticality of the equipment rather than to a fixed calendar, so a clean dry switchboard and a corroded one in a dusty room do not get the same schedule. And anybody writing a contract or an insurance policy now has a document they can point at when they ask what your programme is.",
        "That is the real reason thermographic reports started appearing in renewal conditions. What an insurer wants is narrower than people expect: images with temperature rise, the equipment identified, the load at the time, and evidence the findings were corrected. The full programme side is on [the preventive maintenance page](/electrical-preventive-maintenance), and what it looks like as a package alongside an arc flash study is in [this maintenance and arc flash job](/projects/preventive-maintenance-arc-flash).",
      ],
    },
  ],

  sources: [
    {
      label: "EC&M: Beat the Heat",
      href: "https://www.ecmweb.com/content/article/20891868/beat-the-heat",
      note: "John Pratten III on the 40 percent load minimum from NFPA 70B, covers off scanning and the NETA 15 degree threshold.",
    },
    {
      label: "IAEI: NFPA 70B, What the Change Means for Maintenance, Operations and Safety",
      href: "https://iaeimagazine.org/electrical-safety/nfpa-70b-what-the-change-means-for-maintenance-operations-and-safety/",
      note: "On the 2023 move from recommended practice to standard, and how intervals follow equipment condition.",
    },
  ],

  services: [
    { label: "Preventive maintenance and infrared surveys", href: "/electrical-preventive-maintenance" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Emergency electrical service", href: "/emergency-electrician" },
  ],

  related: ["signs-your-panel-needs-replacing", "what-is-switchgear", "how-to-read-a-panel-schedule"],

  faq: [
    {
      q: "Do we have to shut down for this?",
      a: "The opposite. The equipment needs to be running under load for the survey to mean anything, ideally at 40 percent of design load or better. The de energised part of a maintenance programme is separate and that one does need an outage.",
    },
    {
      q: "How often should a building be surveyed?",
      a: "Annually suits most facilities, and more often where gear runs near its rating or sits in dust and heat. NFPA 70B ties the interval to the condition and criticality of the equipment, so it is a judgement rather than a fixed number.",
    },
    {
      q: "Can you repair what you find, or is this just a report?",
      a: "We repair it, usually on the same visit for anything straightforward and on a scheduled one for the rest, then retest to prove the temperature came down. A report from somebody who cannot do the work leaves you managing two contractors over one loose lug.",
    },
    {
      q: "Is this worth doing on a farm?",
      a: "Wherever the service carries something that cannot stop, yes. A farm main and yard distribution point sit outdoors in corrosive air and feed every building, which is a harder life than most commercial gear has.",
    },
    {
      q: "What does a hot breaker actually mean?",
      a: "Usually a loose connection at the lug rather than a faulty breaker, and it is cheap to correct at that stage. If the board itself is obsolete or has been through a fault, the question becomes replacement instead, and [the signs of that](/blog/signs-your-panel-needs-replacing) are worth reading.",
    },
  ],

  closing:
    "We run these surveys on plants, warehouses and farm services across Lebanon, Lancaster and Berks counties, scheduled for a working day because that is the only way the results mean anything. If an insurer has asked for a thermographic report, the format they want is the one described above and it is a straightforward thing to arrange.",

  keywords: [
    "infrared electrical inspection",
    "thermal imaging electrical panel",
    "thermographic survey insurer",
    "nfpa 70b infrared",
    "electrical preventive maintenance survey",
  ],
};

export default article;
