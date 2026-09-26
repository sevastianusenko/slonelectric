import type { Project } from "./types";

const project: Project = {
  slug: "meter-service-upgrade-womelsdorf",
  title: "Meter and service entrance upgrade in Womelsdorf, working to the utility's sequence",
  category: "Service and panels",
  location: "Womelsdorf, PA",
  summary:
    "Meter and service entrance upgrades in Womelsdorf, PA: utility coordination, mast and socket condition, drip loops, grounding electrodes and the cut over.",
  lead:
    "A meter and service entrance upgrade is one of the few electrical jobs that is split between two owners. The utility has its side, the building has its side, and the point where they meet decides who does what and in what order. Get the sequence right and the power is off for part of a day rather than most of a week.",

  photos: [
    {
      src: "/photos/projects/meter-service-upgrade-womelsdorf-1.webp",
      alt: "Building exterior with a newly installed meter and service equipment in Womelsdorf",
    },
    {
      src: "/photos/projects/meter-service-upgrade-womelsdorf-2.webp",
      alt: "Meter pedestal and disconnect at a rural site",
    },
  ],

  sections: [
    {
      heading: "What the utility owns and what you own",
      body: [
        "The dividing line is the service point. On the utility side sit the overhead drop or the underground lateral, the connection at the weatherhead or the transformer, and usually the meter itself. On the building side sit the meter socket, the mast or riser, the service entrance conductors, the main disconnect, the panel and the whole grounding electrode system.",
        "That split explains a lot of arguments. A burned meter socket is the customer's to replace even though the utility's meter sits in it. A drop torn off a mast in a storm is normally the utility's to reconnect, but the mast belongs to the building owner and nothing is reconnected until it is put right.",
        "It also sets the order of work. The utility needs notice and an application for a service change, usually with the new size and layout. They come back with where they want the meter, which sockets they accept, how the mast is to be braced and what clearances the drop needs. Doing the work first and asking afterwards is how a finished job gets rebuilt.",
      ],
    },
    {
      heading: "Meter socket and service mast condition",
      body: [
        "Old sockets fail in predictable ways. The jaws lose tension and burn, which shows as heat marks around the meter base. The enclosure rusts through at the bottom where water has been standing for twenty years. The hub leaks. A lever bypass seizes in place and nobody finds out until the meter has to come out.",
        "The mast is the other half of it. A rigid mast that has carried a drop across a farm yard for decades will usually have corroded at the roof flashing, or taken a bend under ice load and never been straightened. A mast out of plumb puts a permanent side load on the roof penetration, and the penetration is where water starts getting in.",
        "Around Womelsdorf, a borough in western Berks County surrounded by working farm ground and small industrial shops along the Route 422 corridor, a good number of services are pole mounted rather than building mounted. The meter and disconnect sit on a pedestal in the yard and the buildings are fed from there. That is usually worth rebuilding in place rather than relocating, because it keeps the connection point outside the buildings and gives a clean origin for [underground feeders across the farm yard](/projects/underground-feeders-farm-yard).",
      ],
    },
    {
      heading: "Weatherhead, drip loops and where water actually gets in",
      body: [
        "Water travels along conductors, and that single fact is why the weatherhead and the drip loop exist. The head sits above the point of attachment, the conductors leave it and drop below the entry point before rising to the splice, and the low point of that loop is where water lets go instead of running into the conduit.",
        "Get it wrong and the water runs down the riser into the meter socket, and from the socket into the panel. We find corroded sockets and rust stained panel interiors constantly, and almost every time the drip loop was flat, the head sat below the splice, or the head fitting had cracked.",
        "Clearances belong in the same conversation because they are checked at the same time. Height above a driveway, a roof and a yard a feed truck uses, and distance from windows and doors, are all fixed by code. Setting the mast height right the first time is far cheaper than raising it after the inspector has been out.",
      ],
    },
    {
      heading: "The grounding electrode system, and why one old rod is not enough",
      body: [
        "Grounding is usually the weakest part of an old service. One driven rod, a clamp corroded to a shell, and a conductor sized for a smaller service than the building now carries. It passed forty years ago and it will not pass now.",
        "The rule is that every electrode present at the building has to be used, not just the convenient one, and where rods are the only option they go in pairs unless the resistance of a single rod is measured and proven low enough.",
        "On farms this gets more involved rather than less. Separate buildings fed from a yard pole each need their own electrode system, and bonding between metal structures matters for animal contact as much as for clearing a fault. That runs through everything on our [agricultural electrical services](/agricultural-electrical-services) page and shows up again in [the farm service entrance upgrade](/projects/farm-service-entrance-upgrade).",
      ],
      bullets: [
        "Metal underground water pipe with ten feet or more in contact with earth",
        "Concrete encased electrode in the footing, where the building has one",
        "Driven rods, in pairs unless resistance is measured and documented",
        "Metal building frame where it qualifies as an electrode",
      ],
    },
    {
      heading: "The cut over, and how long the power is really off",
      body: [
        "The outage itself is short. Most of the work happens with the old service still live: the new socket position prepared, the mast set, conduit run, grounding installed, the panel mounted and the branch circuits made ready to move. The genuinely dead time is the utility pulling the meter, the changeover, and the utility putting it back.",
        "What stretches the day is the utility's calendar rather than the electrician's. The disconnect and reconnect have to be booked, and if the inspection is not signed off when their crew arrives they will not connect. That is the difference between half a day and three days.",
        "Where a building cannot be down at all the job gets staged, with a temporary feed, a generator connection or the work split across two visits. Along this stretch of Berks and Lebanon counties most customers are small shops and farms where a lost day is a real cost, so it gets planned rather than assumed. The same staging logic applies to [commercial panel rooms and feeders](/projects/commercial-panel-room-feeders).",
      ],
    },
    {
      heading: "Inspection before the utility will reconnect",
      body: [
        "Once the meter is out, reconnection is gated by an inspection. The inspector looks at the whole service: conductor sizing, the disconnect and where it sits, the grounding electrode conductor and its connections, bonding at the meter and the neutral, working clearance in front of the equipment, and labelling.",
        "Womelsdorf sits in Berks County, so the permit comes from the borough and the inspection is done by the third party agency that municipality uses. The agency changes from one township to the next across this part of the county, which is why the permit gets pulled before the mast comes down.",
        "The inspector's approval goes to the utility and the utility reconnects on the strength of it. An inspected service comes with a paper trail, which matters for insurance and matters again the next time anybody extends the building, so every one of our [electrical service upgrades](/electrical-service-upgrades) runs this way.",
      ],
    },
  ],

  services: [
    { label: "Electrical service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
  ],

  related: ["200-amp-service-upgrade", "panel-upgrade-myerstown", "farm-service-entrance-upgrade"],

  keywords: [
    "electrical service upgrade",
    "meter upgrade",
    "electrician womelsdorf pa",
    "service entrance",
    "electrical panel upgrade",
  ],
};

export default project;
