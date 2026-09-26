import type { Project } from "./types";

const project: Project = {
  slug: "retail-fit-out-wiring",
  title: "Retail fit out wiring, from landlord shell to opening day",
  category: "Commercial",
  location: "Lebanon County, PA",
  summary:
    "Wiring a retail fit out: what a landlord shell really provides, coordinating with the shopfitter, lighting layers, point of sale, signage and inspection order.",
  lead:
    "A retail fit out is an electrical job with a fixed opening date, which changes how every decision gets made. The wiring itself is straightforward. Getting power and light to land where the fixtures and the counter actually end up, and getting inspected in the right order, is the part that decides whether the doors open on time.",

  photos: [
    {
      src: "/photos/projects/retail-fit-out-wiring-1.webp",
      alt: "Retail store interior with product displays and overhead lighting",
    },
    {
      src: "/photos/projects/retail-fit-out-wiring-2.webp",
      alt: "Commercial space with dark ceiling and linear lighting during fit out",
    },
  ],

  sections: [
    {
      heading: "What the landlord shell actually gives you",
      body: [
        "A vanilla shell usually means four walls, a floor, a demised space and a capped electrical feed somewhere near the back. Sometimes there is a panel already set and metered. Sometimes there is a spare breaker in a house panel and a run of empty conduit. The lease work letter is the document that settles which, and it is worth reading before pricing anything, because the difference between the two is often the largest single line in the quote.",
        "The second thing to confirm is capacity rather than presence. A two hundred amp tenant panel sounds generous until the tenant turns out to be a coffee shop with three espresso machines, a rotisserie or a salon with a bank of dryers. Adding up the connected load against what the landlord provided is a half hour of arithmetic that prevents a very expensive surprise in week three.",
        "Metering, service disconnect location and whether the tenant gets their own meter all belong to the same conversation. If the answer is an upgrade, that goes to the utility early, because their scheduling is the one thing on the job nobody can accelerate. The route through that is our [electrical service upgrade](/electrical-service-upgrades) work.",
      ],
    },
    {
      heading: "Coordinating with the shopfitter before rough in",
      body: [
        "The fixture plan and the power plan are almost never drawn by the same person, and they rarely agree. Gondolas, wall bays, fitting rooms and the cash desk all move during design, and each move relocates a circuit. Getting the shopfitter to sign off a final fixture layout before the walls close is the single most useful thing an electrician can do on a retail job.",
        "Floor boxes are the unforgiving part. Once the floor covering is down, a missed box under the cash desk means either a surface raceway across a sales floor or cutting a new slot in finished concrete. Both look like an electrician's mistake to the tenant, whichever drawing it came from.",
        "Millwork power needs the same treatment. Lit shelving, backlit signage in a wall bay and under counter equipment all need a supply routed inside the joinery, which means the electrician and the joiner agree a knockout position before anything is built. The same discipline applies to an [office remodel](/projects/office-remodel-power-lighting), where the furniture arrives with the same assumptions.",
      ],
    },
    {
      heading: "Lighting in layers, not in a grid",
      body: [
        "Retail lighting has jobs to do that a uniform ceiling grid cannot. General light keeps the circulation space comfortable and safe. Accent light, usually track or adjustable heads, puts three or four times that level on the merchandise so the eye goes where the tenant wants it. Feature lighting at the window and the fitting rooms does the selling.",
        "Consistency of colour matters more here than in almost any other building. Mixing colour temperatures across a sales floor makes stock look wrong, and two fixtures from different production runs can be visibly different even at the same nominal temperature. Colour rendering in the nineties is worth paying for wherever fabric, paint or food is on display.",
        "Dimming and zoning finish it. Window and accent circuits usually want separate control from general light, both for the energy code and because a shop at opening, mid afternoon and close is three different rooms. The same layered approach drives our [commercial LED lighting](/commercial-led-lighting) work in restaurants and showrooms.",
      ],
      bullets: [
        "General, accent and feature lighting on separate circuits and controls",
        "One colour temperature and one colour rendering spec across the sales floor",
        "Track positioned over merchandise runs rather than centred on the ceiling",
        "Emergency and exit lighting coordinated with the final partition layout",
        "Fitting room and window lighting treated as their own zones",
      ],
    },
    {
      heading: "Point of sale, data and the back of house",
      body: [
        "Every till position needs clean power, a data drop and somewhere to put the network gear. Point of sale, card terminals, receipt printers and scanners all end up in the same small space, so the practical answer is a dedicated circuit to the counter and enough receptacles that nobody plugs in a power strip on day two.",
        "Structured cabling belongs in the rough in, not after. Cable to the counter, to the wireless access points, to the security panel and to the back office rack has to be pulled while the ceiling is open, kept clear of power runs and supported on its own hangers. Retrofitting a single data drop in a finished shop costs more than pulling four during rough in, which is the argument behind our [low voltage and structured wiring](/low-voltage-structured-wiring) work.",
        "Back of house gets forgotten because nobody sees it. Stock room lighting, the water heater, the HVAC disconnect, the alarm panel and the cleaner's receptacle all need circuits, and the receptacles serving a sink or a prep area need ground fault protection under the code rules for commercial spaces.",
      ],
    },
    {
      heading: "Signage, exterior and time control",
      body: [
        "The code requires an accessible outlet for sign or outline lighting at each tenant space that has ground floor pedestrian access, and it requires a disconnect that a sign technician can see from where they work. Both get missed on fit outs, and both are cheap during rough in and awkward afterwards.",
        "Landlords usually control what can go on the sign band and when it may be lit. That normally means the sign circuit runs on a time clock or a photocell with a time clock, set to the centre hours rather than left on all night. Getting that control device in an accessible spot, rather than above the ceiling over a stock rack, saves everyone a call later.",
        "Exterior work often comes with the same package: a rear door light, a light over the service entrance and sometimes a share of the [lot lighting](/projects/parking-lot-lighting). Those circuits belong to the tenant panel or the house panel depending on the lease, so it is worth settling in writing which one before the trench is open.",
      ],
    },
    {
      heading: "Inspection order, so the date holds",
      body: [
        "Fit outs fail on sequence far more often than on workmanship. Rough in has to be inspected before the ceiling and the walls close, which means the electrical rough has to be finished ahead of the drywall crew rather than alongside them. One day of slippage there costs a week later.",
        "The fire alarm and the life safety side run on their own timetable and usually their own inspection, and in most jurisdictions occupancy will not be signed off without them. Energy code compliance now generally requires documented functional testing of the lighting controls, so somebody has to be on site with the settings and the paperwork before final.",
        "The practical approach is to work backwards from the opening date and book the inspections first, then plan our own sequence and the trades that follow us around those dates. Where a programme is tighter still, night and weekend work is what keeps it, which is how we handle an [industrial shutdown](/projects/plant-wiring-during-shutdown) as well.",
      ],
    },
  ],

  services: [
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Commercial LED lighting", href: "/commercial-led-lighting" },
    { label: "Low voltage and structured wiring", href: "/low-voltage-structured-wiring" },
  ],

  related: ["office-remodel-power-lighting", "parking-lot-lighting", "commercial-panel-room-feeders"],

  keywords: [
    "commercial electrical installation",
    "commercial electrician",
    "restaurant electrician",
    "fit out",
    "commercial electrical services",
  ],
};

export default project;
