import type { Project } from "./types";

const project: Project = {
  slug: "food-plant-equipment-power",
  title: "Power for food processing equipment, built for washdown",
  category: "Industrial",
  location: "Lebanon County, PA",
  summary:
    "Power for food processing equipment: washdown as the main constraint, stainless and sealed enclosures, hygienic conduit routing, corrosion and audit records.",
  lead:
    "In a food plant the electrical installation is judged by sanitation before it is judged by anything else. Everything gets washed down, often daily, with hot water and aggressive chemicals, and gear that would last twenty years in a warehouse can be scrap in two. That single fact drives almost every decision about enclosures, routing and materials.",

  photos: [
    {
      src: "/photos/projects/food-plant-equipment-power-1.webp",
      alt: "Food processing equipment with a control enclosure alongside",
    },
    {
      src: "/photos/projects/food-plant-equipment-power-2.webp",
      alt: "Stainless equipment and ductwork in a processing area",
    },
  ],

  sections: [
    {
      heading: "Washdown is the constraint everything else bends around",
      body: [
        "Sanitation in a processing area is not wiping surfaces. It is hot water at pressure, foamed chemical, a dwell period and a rinse, repeated at the end of every production day and sometimes between product changes. Anything mounted in that area is in the spray path whether it was meant to be or not.",
        "Sanitation crews are also working to a clock. They are not going to route around a poorly placed junction box, and they should not have to. If a device is in the way it gets hit directly, and if it traps water the plant finds out later through a nuisance trip or a corroded terminal.",
        "So the design question in a food plant is never only how to get power to the equipment. It is where the electrical work can live so that it survives cleaning and does not make cleaning harder. That is a different starting point from every other kind of [industrial electrical services](/industrial-electrical-services) work, and it is the part that contractors without food plant experience usually get wrong.",
      ],
    },
    {
      heading: "Why standard commercial gear fails fast here",
      body: [
        "A painted steel enclosure is a good product in the wrong place. Paint fails first at the knockouts and the bend radii, rust starts underneath and then bleeds down the wall, which is a sanitation finding on its own before it is an electrical problem. Screws and hinges go next.",
        "Gaskets are the second failure point. A gasket that seals against dust and drips is not the same as one that holds against direct spray, and every wash cycle heats the enclosure and then cools it, which pulls moisture past a seal that is merely adequate. Once water is inside a sealed enclosure it does not leave.",
        "Aluminium deserves a specific warning. It is common, it is easy to work with, and it does not tolerate the caustic cleaners used in food plants. Aluminium enclosures, fittings and flexible conduit jackets in a processing room will show visible attack quickly. The ratings that matter are the corrosion resistant ones, which in practice means enclosure types rated for hosedown and corrosive conditions rather than the general purpose or dust tight types that are perfectly fine in a dry warehouse.",
      ],
    },
    {
      heading: "What actually goes in",
      body: [
        "Material selection is most of the job. Stainless enclosures with sloped tops so water runs off rather than pooling, stainless hardware throughout, and mounting standoffs so nothing sits tight against a wall where water and product can collect behind it. Where chlorides are heavy, the higher grades of stainless hold up better than the common one, and fiberglass or moulded polymer enclosures are a legitimate answer in some rooms.",
        "The devices matter as much as the boxes. Push buttons, limit switches, photo eyes and disconnects all come in washdown rated versions, and a single general purpose device on an otherwise good installation becomes the failure point for the whole assembly.",
      ],
      bullets: [
        "Stainless enclosures with sloped tops and standoff mounting, not flat against the wall",
        "Corrosion resistant enclosure ratings rather than general purpose or dust tight types",
        "Stainless or polymer coated conduit and fittings, with liquidtight connectors rated for washdown",
        "Washdown rated push buttons, switches and sensors throughout, with no general purpose device left in the area",
        "Enclosure penetrations sealed from above, with drains and breathers where the plant allows them",
      ],
    },
    {
      heading: "Routing so the conduit is not a place for product to sit",
      body: [
        "Hygienic routing is the part that separates food plant work from ordinary plant work. A horizontal conduit run over an open product zone is a ledge, and a ledge collects dust, condensate and product residue that eventually falls. Runs get pushed out of product zones entirely where possible, and where they cannot be, they run vertically and get routed so nothing passes directly above open product.",
        "Details add up. Round conduit sheds better than strut and open channel, so supports are chosen with cleaning in mind rather than convenience. Runs are kept off walls and ceilings on standoffs so a cleaner can get behind them. Penetrations through walls and floors are sealed properly, because an unsealed penetration is a harbourage point and an audit finding.",
        "Dry ingredient handling adds another layer. Flour, sugar, starch and milk powder are combustible dusts, and the classified location requirements of the code apply to the equipment and wiring methods in those rooms. Getting that wrong is a far more serious problem than a corroded box, and it is a question worth settling before any equipment is connected. This is one of the areas where the [machine connection and motor control](/projects/machine-connection-motor-control) work has to be planned around the room rather than around the machine.",
      ],
    },
    {
      heading: "Chemicals, heat and corrosion",
      body: [
        "Plants rotate their chemistry deliberately, usually alternating caustic and acid cleaners with a sanitiser, because a single chemistry left in use allows resistant organisms to build up. Each of those attacks different materials, which is why an installation that survives one plant may corrode in another.",
        "Chlorides are the specific concern for stainless. Chlorinated sanitisers and salt heavy products cause pitting and, with enough stress and temperature, cracking in the more common stainless grades. Temperature accelerates everything, and washdown water is hot.",
        "The practical consequence is that corrosion inspection belongs in the plant maintenance routine rather than being treated as a surprise. Enclosures, fittings, supports and terminations in a washdown area should be looked at on a schedule, and that fits naturally into a wider [electrical preventive maintenance](/electrical-preventive-maintenance) program rather than being a separate exercise.",
      ],
    },
    {
      heading: "Documentation and the audit trail",
      body: [
        "Food plants live under inspection, from customers as much as from regulators, and the electrical work is part of what gets looked at. Auditors ask about the state of enclosures, about sealed penetrations, about how repairs are recorded and about whether anything in the room is a contamination risk. A temporary repair left in place for a year is a finding.",
        "That means the paperwork is part of the deliverable. As built drawings that match what is installed, panel schedules, a list of what was changed and when, and material information for the components that sit in product zones. Instrument calibration records belong with it, which connects this work directly to [instrument racks and process signal wiring](/projects/instrument-racks-process-wiring).",
        "It also means the work has to be scheduled around production and sanitation rather than dropped into the middle of a shift. Most food plant electrical work happens inside sanitation windows, weekend breaks or planned outages, and it gets planned the same way, as described in [plant wiring inside a shutdown window](/projects/plant-wiring-during-shutdown). Panel work is frequently built in the shop and brought in complete, which is how our [control panels and machine wiring](/control-panels-machine-wiring) work is set up.",
      ],
    },
  ],

  services: [
    { label: "Industrial electrical services", href: "/industrial-electrical-services" },
    { label: "Control panels and machine wiring", href: "/control-panels-machine-wiring" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["plant-wiring-during-shutdown", "machine-connection-motor-control", "instrument-racks-process-wiring"],

  keywords: [
    "food plant electrical",
    "industrial electrical services",
    "plant electrician",
    "washdown",
    "manufacturing electrician",
  ],
};

export default project;
