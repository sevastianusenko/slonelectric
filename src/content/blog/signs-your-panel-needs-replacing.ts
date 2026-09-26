import type { Article } from "./types";

const article: Article = {
  slug: "signs-your-panel-needs-replacing",
  question: "How do I know if the panel needs replacing or just repairing?",
  title: "Signs an electrical panel is finished, and the ones that only look serious",
  category: "Service and panels",
  summary:
    "How to tell a panel that needs replacing from one that needs a repair: obsolete breaker lines, heat damage, water, no spare ways, and what the code now says about reconditioning.",
  answer:
    "A panel needs replacing rather than repairing when you cannot buy breakers for it, when there is heat or arc damage on the bus, when water has been in it, or when it is so full that nothing can be added safely. Individual failed breakers, a loose lug or a missing label are repairs. One detail settles a lot of arguments: the 2020 National Electrical Code does not allow panelboards to be reconditioned, so a damaged panelboard is a replacement by definition rather than a rebuild.",
  lead:
    "This question usually comes up for one of two reasons. Something has just failed and somebody is deciding how far to go with the repair, or an insurer or a buyer has asked about the panel. Both deserve a straight answer rather than a quote, so here is how we actually make that call on a farm or a commercial building.",

  photos: [
    {
      src: "/photos/blog/panel-warning-signs-1.webp",
      alt: "Electrical enclosure opened up in winter conditions during a repair",
      caption: "Most of these decisions get made with the cover off, in bad conditions, after something has already failed.",
    },
    {
      src: "/photos/blog/ext-panel-old.webp",
      alt: "Interior of an older circuit breaker panel",
      caption: "An older panel interior. Breaker availability alone can decide the question. Photo by",
      credit: {
        author: "Repeater-reclaim",
        href: "https://commons.wikimedia.org/wiki/File:Stab-Lok_circuit_breaker_panel_interior_.jpg",
        license: "CC BY-SA 4.0",
      },
    },
    {
      src: "/photos/blog/panel-warning-signs-2.webp",
      alt: "Exterior meter and disconnect equipment on a building",
      caption: "Outdoor equipment ages faster. Water and corrosion are the two things that end a panel early.",
    },
    {
      src: "/photos/blog/ext-panel-open.webp",
      alt: "Open circuit breaker panel showing breakers and wiring",
      caption: "A panel with spare ways and room to work in. Photo by",
      credit: {
        author: "BrokenSphere",
        href: "https://commons.wikimedia.org/wiki/File:Eaton_circuit_breaker_panel_open.JPG",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "The signs that genuinely mean replace",
      body: [
        "Start with the one that ends the argument fastest: you cannot buy the breakers. Several manufacturers and several lines are long out of production. When a breaker fails in one of those panels, the options are a used breaker of unknown history, a third party equivalent that may not be listed for that panel, or a new panel. Only one of those is a real answer.",
        "Next is heat and arc damage on the bus. Discolouration, pitting or a breaker that has welded itself to the bus stab means the bus is compromised, and the bus is not a part you replace. A panel with a damaged bus is finished regardless of how new it looks from the front.",
        "Then water. Any panel that has had water running through it is suspect from that moment. Corrosion continues after the water has gone, it works into the breaker mechanisms and onto the bus, and it does not announce itself. Outdoor and farm panels are the usual victims.",
        "And finally, a panel that is physically full, with no spare ways and breakers already doubled up on terminals that were never designed for two conductors. That is not a repairable condition, it is a panel that has been asked to do more than it was built for.",
      ],
      bullets: [
        "Breakers for it are no longer manufactured or are only available used",
        "Heat, pitting or arc damage on the bus or the stabs",
        "Water has been through it, even once",
        "No spare ways, with conductors doubled onto single terminals",
        "Rust through the enclosure, or a door and cover that no longer close properly",
      ],
    },
    {
      heading: "The code detail that settles a lot of arguments",
      body: [
        "There is a common assumption that a damaged panel can simply be rebuilt with new parts. Since the 2020 edition, the National Electrical Code has been explicit about what may and may not be reconditioned, and panelboards are on the prohibited list under 408.8(A).",
        "That is not an arbitrary rule. The same list prohibits reconditioning molded case circuit breakers, ground fault and arc fault devices, fuses, receptacles and transfer switches, precisely because these are the components whose whole job is to operate correctly once, under fault conditions, possibly years after installation. The [UL guide to reconditioned equipment under the 2020 NEC](https://www.ul.com/news/reconditioned-electrical-equipment-2020-nec-guide) sets out what is and is not permitted and is worth reading if somebody has offered you a rebuilt panel.",
        "Switchboards and switchgear are treated differently and may be reconditioned and field labelled, which is one of several reasons larger buildings end up with switchgear rather than panelboards. That difference is covered in [our piece on what switchgear actually is](/blog/what-is-switchgear).",
      ],
    },
    {
      heading: "The things that only look serious",
      body: [
        "Plenty of what worries people is a repair rather than a replacement, and it is worth knowing which is which before anybody quotes.",
        "A single breaker that trips repeatedly is usually doing its job. Something on that circuit is drawing more than it should, or there is a fault, and the answer is to find it rather than to replace the panel. A breaker that will not reset at all is often just a failed breaker.",
        "No labelling looks alarming and is genuinely a problem, but it is a problem you solve with a morning of circuit tracing and a new schedule, not with new equipment. The same goes for a missing knockout plug, a cover screw that has gone missing, or a panel that is simply dusty.",
        "Even a loose or discoloured lug is often a repair, provided the damage has not reached the bus. That is exactly the kind of thing a thermal survey finds while it is still fixable, which is the argument made in [the infrared survey write up](/projects/infrared-survey-switchboard).",
      ],
    },
    {
      heading: "What you can check yourself, and what to leave alone",
      body: [
        "There is a useful amount you can establish without opening anything, and a hard line past which you should not go. The cover of a panel is not a door. Behind it there are parts that remain live even with the main breaker off, and on a commercial or farm service the available fault energy is high enough that opening it is a job for somebody in the right protective equipment.",
        "So the checklist below is deliberately limited to what is safe. If any of it points somewhere bad, that is the point to call rather than to investigate further.",
      ],
      callout: {
        title: "A safe walk round, with the cover left on",
        lines: [
          "Look at the outside: rust, staining running down from the top, a door that will not close, anything mounted where it blocks access.",
          "Check clearance. There should be a clear working space in front of the panel. Stored pallets and shelving in front of a panel are both a code problem and a sign nobody has looked at it in years.",
          "Read the label on the door. Is there a schedule, is it legible, does it match reality.",
          "Smell. A persistent hot plastic or fishy smell near a panel is never nothing.",
          "Listen. Buzzing or crackling that changes when load changes is worth a call the same day.",
          "Feel the cover with the back of your hand. Warm is worth mentioning. Hot is a call now.",
          "Do not remove the cover. Do not pull breakers to look behind them. Do not tighten anything.",
        ],
      },
    },
    {
      heading: "Why farm and commercial panels are a different conversation",
      body: [
        "Most advice written about panels is written about houses, and it does not transfer cleanly. A farm panel lives in a wet, dusty, ammonia loaded building and ages several times faster than the same panel in a utility room. A commercial panel is often part of a system where a failure stops trading rather than inconveniencing a family.",
        "The load picture is different too. Farms and commercial buildings add equipment continuously, so the panel that was adequate at installation is frequently the constraint five years later. That is the situation behind [the panel upgrade in Myerstown](/projects/panel-upgrade-myerstown) and behind a good share of our [service and panel upgrade work](/electrical-service-upgrades).",
        "The other difference is that the decision is rarely just about the panel. Once the cover is off, the question becomes whether the service feeding it is still the right size, which is a bigger and more useful question. What that costs and why quotes vary so much is broken down in [what replacing a panel actually costs](/blog/cost-to-replace-electrical-panel).",
      ],
    },
    {
      heading: "How we actually decide",
      body: [
        "In practice the decision takes about twenty minutes with the cover off and a camera. We look at the bus and the stabs first, because that is the part that cannot be replaced. Then the breakers, both their condition and whether they are still available. Then the terminations, the neutral and ground bars, and whether anything has been doubled where it should not be.",
        "Then the enclosure itself: corrosion, water path, whether the door and cover still seal. And finally capacity, both spare ways and whether the panel is anywhere near its rating.",
        "If the bus is sound, breakers are available and there is room to work, it is a repair, and we will say so even when a replacement would be a larger invoice. If two or more of those are wrong, it is a replacement, and dragging it out costs more than doing it. A good general orientation to what the code now expects of equipment like this is in the [IAEI material on short circuit current ratings](https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/), because a panel that is fine mechanically can still be wrong for the fault current available at that point in the building.",
      ],
    },
  ],

  faq: [
    {
      q: "My insurer asked about the panel. What are they looking for?",
      a: "Usually the manufacturer and the type, because a few older lines have a poor reputation and insurers keep lists. Beyond that they are interested in condition and in whether the installation is current. A photograph of the panel and its label is normally enough to start the conversation.",
    },
    {
      q: "Can I just add a sub panel instead of replacing?",
      a: "Sometimes, and it can be the right answer when the existing panel is sound but full and the service has capacity. It is the wrong answer when the panel itself is damaged or the service is already at its limit, because it moves the problem rather than solving it.",
    },
    {
      q: "Is a used breaker acceptable if the line is discontinued?",
      a: "We do not fit them. A breaker is a safety device whose entire value is that it will operate correctly under fault conditions possibly years from now, and a used one has an unknown history. The code position on reconditioning molded case breakers points the same way.",
    },
    {
      q: "The panel buzzes. Is that normal?",
      a: "A faint hum from a transformer nearby can be normal. Buzzing or crackling from the panel itself, particularly if it changes with load, is not. That is a same day call rather than something to watch.",
    },
    {
      q: "How long does a panel last?",
      a: "There is no fixed life. A dry indoor commercial panel can be serviceable for decades. The same panel on a wet farm building may be finished in fifteen years. Environment and load history decide it far more than age does.",
    },
  ],

  sources: [
    {
      label: "UL: Reconditioned electrical equipment and the 2020 NEC",
      href: "https://www.ul.com/news/reconditioned-electrical-equipment-2020-nec-guide",
      note: "Sets out what may and may not be reconditioned, including the prohibition on reconditioning panelboards under 408.8(A).",
    },
    {
      label: "IAEI Magazine: NEC requirements for short circuit current ratings",
      href: "https://iaeimagazine.org/2012/may2012/nec-requirements-for-short-circuit-current-ratings/",
      note: "Why equipment can be in good condition and still be wrong for the fault current available where it is installed.",
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
    { label: "24/7 emergency electrician", href: "/emergency-electrician" },
  ],

  related: ["cost-to-replace-electrical-panel", "what-is-switchgear", "stray-voltage-on-dairy-farms"],

  closing:
    "We make this call on farm and commercial panels most weeks, and we will tell you it is a repair when it is a repair. If something has already failed, or an insurer has started asking questions, a look with the cover off and a thermal camera usually settles it in one visit.",

  keywords: [
    "replacing a breaker panel",
    "panel breaker",
    "electrical panel upgrade",
    "signs panel needs replacing",
    "circuit panel breaker",
    "panel replacement",
  ],
};

export default article;
