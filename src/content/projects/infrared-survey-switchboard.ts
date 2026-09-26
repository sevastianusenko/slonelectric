import type { Project } from "./types";

const project: Project = {
  slug: "infrared-survey-switchboard",
  title: "Infrared survey of a switchboard and the panels fed from it",
  category: "Maintenance",
  location: "Lancaster County, PA",
  summary:
    "Infrared thermographic survey of switchgear and panels: why load matters, opening live gear safely, reading temperature rise and the report an insurer wants.",
  lead:
    "Electrical connections rarely fail without warning. They heat up first, usually for months, and a thermal camera finds them while the building is still running. This is a thermographic survey of a switchboard and the distribution panels downstream of it.",

  photos: [
    {
      src: "/photos/projects/infrared-survey-switchboard-1.webp",
      alt: "Thermal imaging camera in use during an electrical survey of live gear",
    },
    {
      src: "/photos/projects/infrared-survey-switchboard-2.webp",
      alt: "FLIR thermal camera in its case with accessories",
    },
  ],

  sections: [
    {
      heading: "Why a bad connection heats up long before it fails",
      body: [
        "Every connection has resistance. A properly torqued lug on clean metal has almost none, so the heat it makes at full load is negligible. Let that joint loosen, corrode or oxidise and resistance climbs, and the heat produced rises with the square of the current passing through it.",
        "Once it starts it accelerates. Heat oxidises the contact surface, the oxide raises resistance, higher resistance makes more heat. Aluminium makes it worse, because it creeps under load cycling and because its oxide is an insulator rather than a conductor. The joint that looked fine at installation is the joint that burns three years later.",
        "The useful part for a facility is the timeline. That whole process takes months. A camera pointed at the gear once a year catches it in the middle, when the fix is a torque wrench and twenty minutes, instead of at the end, when it is a burned bus, a replacement section and an outage nobody planned.",
      ],
    },
    {
      heading: "The survey is worthless without load",
      body: [
        "This is the point most people miss. Infrared finds heat, and heat only exists where current is flowing. A panel surveyed on a quiet Sunday with the plant shut down tells you nothing, and a clean report written from that survey is worse than no report at all, because it creates confidence nobody earned.",
        "General practice is to have equipment carrying a meaningful fraction of its normal load during the survey, commonly quoted as at least forty percent, and more is better. Where a circuit cannot be loaded on the day, the honest thing is to record it as not surveyed rather than as no exception found.",
        "It also means scheduling the visit while the building is working: production hours, a milking, a full shift. That is inconvenient for everybody involved, and it is the entire difference between a document for the insurance file and a document that actually protects the equipment.",
      ],
    },
    {
      heading: "Opening live gear safely",
      body: [
        "To see the connections the covers have to come off, and removing a cover from energised switchgear is an arc flash exposure. NFPA 70E treats that as work for a qualified person, with the task assessed beforehand and the protective equipment chosen from that assessment. It is not a job for a camera operator with no electrical background.",
        "The practical approach is to reduce what has to be opened at all. Infrared windows fitted into the doors of the main gear let the survey happen with everything closed, which removes the exposure and makes every future survey quicker. Where no windows exist the work is planned: who opens, who shoots, what equipment is worn, where the boundary sits, and what happens if something looks wrong once the cover is off.",
        "All of that depends on knowing the incident energy at each piece of gear, which is the output of the study covered in [planned maintenance and arc flash studies](/projects/preventive-maintenance-arc-flash). A site that has those numbers can plan a survey properly. A site without them is guessing at its own risk.",
      ],
    },
    {
      heading: "Reading the image rather than the number",
      body: [
        "A temperature on its own means very little. A busbar at 55 degrees C is unremarkable in a hot room at full load and alarming in a cool room carrying half of it. Thermography works by comparison, and there are three comparisons worth making on every image.",
        "Phase to phase on the same circuit is the strongest of them, because three phases carrying similar current should sit at similar temperature. A clear difference between otherwise identical connections is a finding whatever the absolute reading says. Then comes comparison against ambient, and comparison against the same equipment in last year's images, which is the reason those images get kept.",
        "Published guidance puts small differences over similar components in the monitor and repair at the next outage range, and differences of tens of degrees into the correct immediately range. Emissivity, reflections off polished bus and the fact that load can change between two shots all move the reading, so severity is a judgement rather than a lookup.",
      ],
      bullets: [
        "Compare phase to phase before comparing against any absolute number",
        "Record the load at the time, or the image cannot be read later",
        "Watch for reflections and low emissivity on shiny copper and painted steel",
        "Note ambient and enclosure temperature with every image",
        "Keep the images so next year is a comparison, not a fresh start",
      ],
    },
    {
      heading: "What turns up most often",
      body: [
        "Loose lugs, at the breaker and at the top of the panel, usually on the feeder side and usually on aluminium. Terminations torqued once at installation and never checked since. That is the single most common finding and the cheapest one to put right.",
        "Then overloaded neutrals. A three phase panel feeding a lot of single phase electronics, LED drivers, drives and switch mode supplies puts harmonic current on the neutral that does not cancel, and a neutral running hotter than the phases it serves is how that shows up. After that come breakers themselves, which heat when the mechanism has aged or the contacts have degraded.",
        "The rest of the list is unbalanced phase loading, undersized conductors left over from some past change, and motor terminations at the connection box. Findings at the machine end on [industrial sites](/industrial-electrical-services) usually point back to [machine connections and motor control](/projects/machine-connection-motor-control) rather than to anything in the panel room.",
      ],
    },
    {
      heading: "The report, and what an insurer asks for",
      body: [
        "The report is the deliverable. Insurers who ask for thermography generally want the same set of things for each finding: the thermal image, a matching visible light photo, the equipment identification and location, the load at the time, ambient temperature, the measured rise, a severity classification and a recommended action.",
        "A list of hot spots with no load data and no repeat images is not that. Neither is a clean report on gear that was surveyed dead. Written properly the survey becomes evidence that the facility runs an [electrical preventive maintenance](/electrical-preventive-maintenance) program rather than having bought a one off inspection.",
        "The last part is follow up. A finding that gets logged and never corrected is worse than no survey, because the file now shows the owner knew. We re-shoot corrected joints under load to prove the repair worked, and roll the results into the next round on the same site, the way we do around [distribution and feeder upgrades](/projects/three-phase-distribution-upgrade).",
      ],
    },
  ],

  services: [
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
  ],

  related: ["preventive-maintenance-arc-flash", "three-phase-distribution-upgrade", "commercial-panel-room-feeders"],

  keywords: [
    "thermal imaging electrical",
    "infrared electrical inspection",
    "electrical preventive maintenance",
    "electrical testing services",
    "arc flash",
  ],
};

export default project;
