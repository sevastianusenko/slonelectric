import type { Project } from "./types";

const project: Project = {
  slug: "panel-upgrade-myerstown",
  title: "Panel upgrade in Myerstown, when a board runs out of room and out of parts",
  category: "Service and panels",
  location: "Myerstown, PA",
  summary:
    "Replacing an outgrown or obsolete panel in Myerstown, PA: reading the signs, dead breaker lines, bus and lug damage, labelling, shutdown planning, inspection.",
  lead:
    "A panel rarely announces that it is finished. It carries a building for years while the bus slowly cooks under load, the breaker line goes out of production and the schedule on the door stops matching anything inside. Replacing an outgrown or obsolete panel is straightforward work, but almost all of it is decided before the cover comes off.",

  photos: [
    {
      src: "/photos/projects/panel-upgrade-myerstown-1.webp",
      alt: "Panel upgrade work at a building in Myerstown",
    },
    {
      src: "/photos/projects/panel-upgrade-myerstown-2.webp",
      alt: "Newly installed panel with breakers and clean terminations",
    },
  ],

  sections: [
    {
      heading: "How to tell a panel has reached the end of its life",
      body: [
        "There is rarely one moment where a panel fails. What turns up instead is a list of small things pointing the same way: discoloured plastic around a breaker stab, a breaker that trips on a load it carried for years, a warm deadfront on a cool morning, rust inside the can from a leaking conduit.",
        "The other half of the list is about how the board has been used. Neutrals doubled under one lug, grounds and neutrals sharing a bar, circuits added by three different people with no record of any of it, tandem breakers in a panel never rated for them. None of that is a fault on its own. Together they say the board has been asked to do more than it was bought for.",
        "Age by itself is a weak argument and we do not use it. A forty year old board with a clean bus, tight lugs and spare spaces can stay. A newer board with a pitted bus and a dead breaker line is finished.",
      ],
    },
    {
      heading: "Obsolete breaker lines, and why availability alone forces the issue",
      body: [
        "Panels are listed as assemblies. The breaker has to be one the manufacturer marked as acceptable for that enclosure, and a breaker that merely fits is not the same thing. That matters in Myerstown more than it might elsewhere. The borough sits in Lebanon County farm country along the Route 422 corridor, and much of its commercial and light industrial stock is brick and block put up long before anyone planned for the loads a modern shop or farm building carries.",
        "Availability becomes the practical problem long before listing does. If the only replacement for a 100 amp branch breaker is a used one of unknown history off an auction site, or a six week order at a price close to new gear, the building has no realistic spare.",
        "Classified breakers, sold as fitting several makes of panel, are a repair rather than a plan. They have a place in a one breaker emergency and they are not a reason to keep a board that cannot be sourced.",
      ],
    },
    {
      heading: "Bus, lugs and what years of heat leave behind",
      body: [
        "The bus is the part nobody sees and the part that decides whether a panel is worth keeping. Every load cycle heats and cools the contact between a breaker clip and the bus stab. Over enough cycles, with a clip that has lost tension, that contact pits and burns. A new breaker fitted onto a pitted stab runs hot from the first day.",
        "Lugs fail the same way, usually because of torque. A lug that was never brought up to the value the manufacturer specifies, or one that was overtightened and has cold flowed, runs warm and gets worse. The code now expects torque values to be applied with a proper tool rather than by feel.",
        "This is exactly what shows up on [an infrared survey of a switchboard](/projects/infrared-survey-switchboard). A thermal scan under real load finds a hot stab or a loose lug while it is still a repair, which is most of the reason we push [electrical preventive maintenance](/electrical-preventive-maintenance) on buildings that cannot absorb an unplanned outage.",
      ],
    },
    {
      heading: "Breaker spaces, actual load, and a schedule someone can use",
      body: [
        "A full panel and an overloaded panel are different problems. A board can be out of spaces while sitting at a third of its rating, and it can be half empty while the main runs close to its limit. Telling them apart takes a load calculation and, on a building that has been running a while, a metered demand reading across a normal working week.",
        "That decides the shape of the job. Sometimes the answer is a larger panel. Sometimes it is the existing panel with a subpanel fed from it to serve a new area. Sometimes the main itself is the constraint and the work becomes a service upgrade rather than a panel swap.",
        "Labelling is the part that gets left for later and then never happens. A circuit directory has to identify each circuit by its clear purpose, specific enough that somebody who did not install it can find the right breaker at two in the morning.",
      ],
      bullets: [
        "Every circuit described by what it feeds and where, not by room number alone",
        "Spares marked as spare, blanks left blank, nothing left to guesswork",
        "Directory printed and fixed inside the door, not pencilled on the cover",
        "Arc flash warning label fitted to the equipment as the code requires",
      ],
    },
    {
      heading: "The shutdown window, and keeping the critical loads alive",
      body: [
        "Swapping a panel means the building is dead from that board down for as long as the work takes. On a small commercial panel that is a few hours. On a board feeding production it is a planned event, and the planning matters more than the wiring.",
        "Some loads will not tolerate the window at all. Ventilation in a livestock building is the obvious one, with refrigeration and milk cooling close behind. The usual answer is a temporary feed for those circuits, or a generator with a proper connection point rather than a cord run through a window. Where a site already has standby power the change can often be made with the building running on the generator, one of the genuine arguments for [a standby generator and transfer switch](/standby-generator-installation).",
        "In plants the answer is normally timing. The work goes into a scheduled outage with every part staged in advance, the same discipline described in [plant wiring during a shutdown](/projects/plant-wiring-during-shutdown).",
      ],
    },
    {
      heading: "Permits, inspection and getting the power back on",
      body: [
        "Electrical work in Pennsylvania falls under the Uniform Construction Code. In most boroughs and townships around Lebanon County the permit comes from the municipality and the inspection is carried out by a third party agency it has appointed, so the name on the certificate changes from one township to the next.",
        "The order matters. Permit first, work second, inspection third. If the service conductors or the meter are disturbed, the utility will not reconnect without the inspector's approval in hand, the sequence covered in [the meter and service entrance upgrade](/projects/meter-service-upgrade-womelsdorf).",
        "Skipping the permit is a false economy. It surfaces at the worst moment, usually during a property sale or an insurance claim after a fire. All of our [service and panel upgrade work](/electrical-service-upgrades) goes through inspection for that reason.",
      ],
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["meter-service-upgrade-womelsdorf", "200-amp-service-upgrade", "commercial-panel-room-feeders"],

  keywords: [
    "electrical panel upgrade",
    "panel replacement",
    "electrician myerstown pa",
    "electrical service upgrade",
    "commercial panel upgrade",
  ],
};

export default project;
