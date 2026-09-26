import type { Article } from "./types";

const article: Article = {
  slug: "transfer-switch-types",
  question: "What is the difference between a manual and an automatic transfer switch, and which one does our building need?",
  title: "Transfer switch types: manual, automatic, open, closed and delayed transition, and how to choose",
  category: "Standby power",
  summary:
    "Transfer switches explained: why back feeding is the rule that matters, manual against automatic, the three transition types, neutral switching, and how to size one.",
  answer:
    "A transfer switch connects your building to either the utility or the generator and makes it impossible to be connected to both. That is not a convenience feature. It is what stops your generator energising the utility line and killing a lineman working to restore your power. Beyond that safety function the choice is about how the change happens: a manual switch needs somebody to operate it, an automatic switch senses the outage and starts the generator itself, and the transition type decides whether the load sees a break, no break, or a deliberate pause. Which one you need is settled by what the loads tolerate and who is on site, not by the size of the generator.",
  lead:
    "The transfer switch is the least interesting item in a standby installation and the one most likely to be chosen badly. It gets specified late, priced as an accessory, and sized against the generator instead of the load. This is what the types actually are and how the choice is made.",

  photos: [
    {
      src: "/photos/blog/transfer-switch-1.webp",
      alt: "Labelled automatic transfer switches with arc flash warning label",
      caption: "Labelled, rated and documented. The switch is service equipment in its own right, not an accessory.",
    },
    {
      src: "/photos/blog/ext-transfer.webp",
      alt: "Generator transfer switch mounted on a wall",
      caption: "Two sources, one load, and a mechanism that makes both at once impossible. Photo by",
      credit: {
        author: "Robert.Harker",
        href: "https://commons.wikimedia.org/wiki/File:Generator_Transfer_Switch.jpg",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: "/photos/blog/transfer-switch-2.webp",
      alt: "Service equipment mounted on the exterior of a building",
      caption: "Where the switch sits relative to the service decides whether it needs a service entrance rating.",
    },
    {
      src: "/photos/blog/ext-transfer-2.webp",
      alt: "Interior of a generator transfer switch panel",
      caption: "Inside, the question is how many poles switch and whether the neutral is one of them. Photo by",
      credit: {
        author: "Robert.Harker",
        href: "https://commons.wikimedia.org/wiki/File:Generator_Transfer_Switch_Panel.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "What it is for, and the rule that is not negotiable",
      body: [
        "A transfer switch has one job that matters more than all its features: it makes it mechanically and electrically impossible for the generator and the utility to be connected to the same conductors at once. Everything else is a refinement of that.",
        "The reason is not equipment protection, although a generator paralleled onto a live utility supply destroys itself in a fraction of a second. It is that your generator feeding back through your service transformer becomes a primary voltage source on the line outside. A lineman working that line has tested it dead and grounded it, and a back fed transformer steps a few hundred volts up into thousands.",
        "Once the interlock exists, the remaining questions are who operates it, how long the break lasts, whether the neutral switches with the phases, and whether the switch is also the service disconnect. Those four cover almost every choice on a [standby generator installation](/standby-generator-installation).",
      ],
    },
    {
      heading: "Manual or automatic",
      body: [
        "A manual transfer switch is a mechanically interlocked double throw device. Somebody walks to it, checks the generator is running and warm, and moves the handle. On a shop or a farm where somebody is always about, that is an honest answer: fewer components, nothing to fail on standby, a fraction of the cost. IAEI's review of [transfer equipment used in optional standby systems](https://iaeimagazine.org/2009/july2009/transfer-equipment-used-in-optional-standby-systems-for-commercial-applications-part-ii-transfer-equipment-options/) describes the usual options, including the double throw safety switch listed to UL 98 with a clear off position, and interlocks between two breakers. Transfer switches themselves are listed to UL 1008, manual and automatic alike.",
        "An automatic switch watches the utility, and when it drops out of tolerance it signals the generator to start, waits for voltage and frequency, and transfers. When the utility returns it waits out a stability timer, transfers back, cools the engine unloaded, and stops it. The timers matter as much as the mechanism: a few seconds before deciding an outage is real, thirty seconds of warm up, several minutes of stability before returning, and a five minute cool down.",
        "The case for automatic is simple. If losing power costs money or livestock before somebody can drive to site, it is automatic. Ventilation, milk cooling and any process that ruins a batch fall on that side, as does any NEC Article 700 emergency system, which has to be supplied within ten seconds.",
      ],
    },
    {
      heading: "Open, closed and delayed transition",
      body: [
        "Transition type describes what the load experiences during the change over, and it is the part most people are never asked about.",
        "Open transition is break before make. The switch disconnects from one source, then connects to the other, and the load sees an interruption of a fraction of a second. It is standard, cheapest, and adequate for lighting, motors, heating and most farm and commercial loads. Anything that genuinely cannot see a break needs a UPS whatever the switch type.",
        "Closed transition is make before break. The switch momentarily parallels generator and utility, typically under 100 milliseconds, so the load never loses power. It suits sites where a monthly test must not interrupt production. The catch is that paralleling with the utility, even briefly, needs their agreement and usually an interconnection review with protective relaying.",
        "Delayed transition adds a deliberate pause, commonly one to three seconds in a neutral position. That sounds backwards until you have seen a bank of spinning motors disconnected from one source and reconnected to another out of phase with the residual voltage they are still generating. The result is a large transient and, on large motors, mechanical damage. Where there is substantial motor load it is the right answer.",
      ],
    },
    {
      heading: "Three pole or four pole: the neutral question",
      body: [
        "On a three phase four wire system there is a decision that never appears in a sales brochure: does the switch break the neutral along with the phases? The answer changes how the generator is grounded and how ground fault protection behaves, so it belongs in the design.",
        "A three pole switch leaves the neutral solidly connected between both sources, so the generator is not a separately derived system and its neutral is bonded back at the service. A four pole switch breaks the neutral as well, making the generator separately derived under the NEC Article 100 definition, so it needs its own grounding electrode conductor and main bonding jumper under 250.30. IAEI's discussion of [grounding of alternate power](https://iaeimagazine.org/features/grounding-of-alternate-power) works through the trade off: three pole switches are cheaper and smaller but risk improper ground fault sensing and nuisance tripping, while four pole switches isolate the neutral cleanly at the cost of a fourth set of contacts.",
        "The practical rule is that the moment ground fault protection exists anywhere in the system, the neutral arrangement has to be deliberate. Multiple neutral to ground connections create parallel paths, current flows where the sensor does not expect it, and protection either trips for nothing or fails to trip when it should. A middle option exists as well, a three pole switch with overlapping neutral contacts, which connects the neutrals only momentarily during transfer.",
      ],
    },
    {
      heading: "Service entrance rating, and sizing the switch",
      body: [
        "Where the switch sits decides whether it needs a service entrance rating. If it is the first device the incoming service conductors land on, it has to include the service disconnecting means and overcurrent protection and be listed for that use. Buying the rating avoids a separate main disconnect and usually saves money and wall space, which is how the [standby generator and transfer switch project](/projects/standby-generator-transfer-switch) was arranged.",
        "Sizing gets confused most often. The switch carries the load continuously on either source, so it is sized against the load it switches and the fault current available at that point, not against the generator kilowatts. A 400 A switch protecting a 200 A load is money wasted. A 200 A switch on a load that peaks above it is a fire.",
        "One more thing before anyone offers refurbished equipment cheaply: transfer switches are on the list of equipment the 2020 NEC does not permit to be reconditioned, alongside panelboards, moulded case breakers and fire pump controllers. Switchgear sections and power circuit breakers can be. That matters when a used price looks too good, as discussed in [what a standby generator really costs](/blog/standby-generator-cost).",
      ],
      callout: {
        title: "Choosing a transfer switch, in order",
        lines: [
          "1. Is somebody on site who can operate a handle, and can the loads wait for them? If yes, a manual double throw switch with a positive off position is honest and reliable. If no, go automatic with an engine start contact to the generator.",
          "2. Does anything lose money or livestock within minutes, such as ventilation, milk cooling or a process batch? Automatic. Does the building serve an NEC Article 700 emergency system? Automatic is mandatory, because supply is required within ten seconds.",
          "3. Does anything have to ride through a break of a second or so? No transfer switch will do that. Put a UPS on those loads and let the switch keep its batteries from running flat.",
          "4. Must a monthly test happen without interrupting production, and will the utility accept a brief parallel? If both, closed transition, typically under 100 milliseconds of overlap, with the interconnection review that goes with it. Otherwise open transition.",
          "5. Is there substantial motor or transformer load on the switched circuits? Delayed transition, with a programmed neutral position of roughly one to three seconds.",
          "6. Is there ground fault protection downstream, or does the generator need to be separately derived? Settle three pole against four pole in the design, and apply NEC 250.30 if the neutral switches.",
          "7. Do the incoming service conductors land on this switch first? Then it must be service entrance rated with an integral disconnect and overcurrent protection.",
          "8. Does the switch have to be maintained without dropping the load? Bypass isolation. It costs considerably more and it is the only way to service the switch on a building that cannot go dark.",
          "9. Size it last and size it on the load: continuous current through the switch, plus the fault current available at that point for the withstand and closing rating. Generator kilowatts do not enter the calculation.",
        ],
      },
    },
    {
      heading: "A switch that has never operated under load is an assumption",
      body: [
        "The most common failure in standby power is not a generator that will not start. It is a generator that starts and a building that never sees it, because the switch did not transfer. Contacts that have sat in one position for four years develop resistance and can weld or stick. Control transformers fail, timers drift, rodents get into the enclosure, and none of it shows on a display.",
        "So the switch has to be exercised properly, which means transferring the actual load rather than pressing the test button and watching a lamp. It should transfer to the generator, carry the building, and transfer back, with somebody there holding a meter. That belongs on the same visit as the engine service, set out in [the standby generator maintenance schedule](/blog/generator-maintenance-schedule).",
        "Three things come out of doing this regularly. The timers are almost never set the way anybody assumed, and the return delay in particular is often far too short. Whatever was added to the building since the switch went in is frequently on the wrong side of it, which only appears when the new equipment stays dark. And the labelling is usually wrong, which on [commercial electrical work](/commercial-electrical-services) is the difference between a five minute fault find and an afternoon of tracing.",
      ],
      bullets: [
        "Transfer the real load, not the test lamp",
        "Record voltage, frequency and transfer times each time",
        "Check what has been added to the building and which side of the switch it landed on",
        "Verify and relabel, because switchgear labelling drifts from reality faster than anything else",
      ],
    },
  ],

  faq: [
    {
      q: "Can we use an interlock kit on the panel instead of a transfer switch?",
      a: "A listed mechanical interlock between the main breaker and a generator breaker in the same panel is a legitimate manual transfer method and is common on smaller buildings, because the two breakers physically cannot be on together. What it does not give you is automatic operation, a neutral arrangement of your choosing, or a service entrance rating.",
    },
    {
      q: "How long is the break on an open transition switch?",
      a: "The transfer itself takes a fraction of a second, but that is not the number that matters. The building is dark from the moment the utility fails until the generator is up and the switch has transferred, typically ten to thirty seconds. Article 700 emergency systems have to achieve ten seconds, Article 701 sixty seconds, and Article 702 optional standby has no limit.",
    },
    {
      q: "Does the transfer switch have to be sized for the generator?",
      a: "No, and sizing it that way is a common and expensive error. The switch carries the load continuously on both sources, so it is sized against the load it switches and the fault current at its location. A large generator feeding a modest switched load still needs only a switch sized for that load.",
    },
    {
      q: "Our switch transfers but the generator trips on overload. Is the switch wrong?",
      a: "Almost certainly not. That symptom points at the starting demand of everything restarting together being larger than the set can supply, which is a sizing and sequencing problem. A scheme that brings the loads back in blocks usually fixes it without changing equipment.",
    },
    {
      q: "Can a transfer switch be reconditioned or bought used?",
      a: "The 2020 NEC lists transfer switches among equipment not permitted to be reconditioned, along with panelboards, moulded case breakers, GFCI and AFCI devices and fire pump controllers. Switchgear sections and power circuit breakers can be reconditioned by a qualified organisation and marked accordingly. For a transfer switch, plan on new equipment.",
    },
  ],

  sources: [
    {
      label: "IAEI Magazine: Transfer Equipment Used in Optional Standby Systems, Part II",
      href: "https://iaeimagazine.org/2009/july2009/transfer-equipment-used-in-optional-standby-systems-for-commercial-applications-part-ii-transfer-equipment-options/",
      note: "Manual and automatic transfer equipment options, and the UL 98 and UL 1008 listings behind them.",
    },
    {
      label: "IAEI Magazine: Grounding of Alternate Power",
      href: "https://iaeimagazine.org/features/grounding-of-alternate-power",
      note: "Three pole against four pole switching, separately derived systems, and the ground fault sensing consequences of each.",
    },
  ],

  services: [
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Commercial electrical services", href: "/commercial-electrical-services" },
    { label: "Electrical preventive maintenance", href: "/electrical-preventive-maintenance" },
  ],

  related: ["standby-generator-cost", "generator-maintenance-schedule", "generator-sizing-starting-vs-running"],

  closing:
    "We specify, install and test transfer equipment as part of the standby installation rather than as a box bolted on at the end, which means the neutral arrangement, the rating and the timers are decided on paper before anything is ordered. If your building has a generator and nobody has watched the switch carry the load, that is the test worth booking.",

  keywords: [
    "automatic transfer switch installation",
    "manual transfer switch",
    "transfer switch",
    "standby generator installation",
    "generator transfer switch",
  ],
};

export default article;
