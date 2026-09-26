import type { Article } from "./types";

const article: Article = {
  slug: "poultry-house-power-outage",
  question: "The power is out and the fans have stopped. How long do we actually have?",
  title: "A poultry house with no power: how long you really have, and what decides it",
  category: "Agricultural",
  summary:
    "What happens inside a tunnel ventilated house when the fans stop, how little time there is in hot weather, and the electrical decisions that are made long before that night.",
  answer:
    "Less time than almost anybody expects. University of Kentucky extension guidance puts it plainly: poultry can survive only 20 to 30 minutes above 97 degrees Fahrenheit in still air, and in a closed house on a hot afternoon the temperature climbs toward that quickly because the birds themselves are the heat source. Carbon dioxide rises on the same clock. That is the real answer to how long you have, and it is why the decisions that matter are the ones made months earlier: whether the generator starts by itself, whether it can pick up the fan motors, and whether anything wakes a person up.",
  lead:
    "This is the call we would rather never take, and it is the one we plan the rest of the business around. Everything else we do has an invoice attached to it. A still house on a July afternoon has a different kind of number attached, and no amount of speed on our side fixes what was decided when the standby system was specified.",

  photos: [
    {
      src: "/photos/projects/poultry-house-ventilation-power-1.webp",
      alt: "Long poultry house interior with new lighting running the length of the building",
      caption: "A tunnel ventilated house is a sealed box. Without air movement it works against the birds in it.",
    },
    {
      src: "/photos/blog/ext-generator.webp",
      alt: "Diesel standby generator set in an enclosure",
      caption: "The set is the obvious part of the answer and rarely the part that fails. Photo by",
      credit: {
        author: "Gregsedits",
        href: "https://commons.wikimedia.org/wiki/File:Caterpillar_(Olympian)_Generator_Set.jpg",
        license: "CC BY-SA 3.0",
      },
    },
    {
      src: "/photos/projects/farm-standby-generator-1.webp",
      alt: "Diesel generator set with batteries and exhaust connected in a farm generator room",
      caption: "Batteries are the single most common reason a standby set does not start.",
    },
    {
      src: "/photos/blog/ext-transfer.webp",
      alt: "Generator transfer switch enclosure",
      caption: "Automatic transfer is what makes the system work while nobody is standing there. Photo by",
      credit: {
        author: "Robert.Harker",
        href: "https://commons.wikimedia.org/wiki/File:Generator_Transfer_Switch.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  ],

  sections: [
    {
      heading: "What happens inside the house",
      body: [
        "A modern tunnel house is deliberately sealed. Nothing moves through it except what the fans move, and that design is exactly why it performs so well and exactly why it has so little margin when the fans stop.",
        "Three things change at once. Temperature rises, because the birds are producing heat continuously and there is nowhere for it to go. Humidity rises for the same reason. And carbon dioxide accumulates: University of Kentucky's [chapter on emergency ventilation](https://afs.mgcafe.uky.edu/poultry/chapter-7-emergency-ventilation) gives 3,000 ppm as normal for a properly ventilated house and notes that above 30,000 ppm it contributes to oxygen deficiency and asphyxiation.",
        "The same guidance gives the figure that settles the argument about timing: birds survive only 20 to 30 minutes above 97 degrees in still air. That is not a drive time. That is barely enough to find the problem, which is why the plan cannot be built around anybody arriving.",
      ],
      bullets: [
        "Heat: the birds are the source and the house is sealed",
        "Humidity: rises on the same clock, and makes the heat worse for the birds",
        "Carbon dioxide: normal around 3,000 ppm, dangerous above 30,000",
        "Time above 97 degrees in still air: 20 to 30 minutes",
      ],
    },
    {
      heading: "The failure is almost never the whole grid",
      body: [
        "When people picture this they picture a storm and a county in darkness. Those happen, and they are the easy case, because everybody knows immediately.",
        "The failures we are actually called to are quieter and more dangerous. A contactor welds or drops out and one bank of fans stops while everything else keeps running. A controller locks up and stops commanding anything, with the lights still on. A single phase is lost, so single phase equipment carries on and three phase fan motors sit humming, getting hot, going nowhere. That last one is worth recognising on sight, and the order to check it in is in [why a three phase motor will not start](/blog/three-phase-motor-wont-start).",
        "In every one of those cases the house looks normal from the road. The birds know before anybody else does, and the only thing that closes the gap is an alarm that is watching the right thing.",
      ],
    },
    {
      heading: "Three things decide the outcome, and all are chosen in advance",
      body: [
        "The first is whether the generator starts on its own. A manual transfer switch is defensible where somebody is always on site, and on a livestock building the failure mode is obvious: the outage happens at four in the morning and nobody throws the handle. Automatic transfer is not a luxury here, and the differences between switch types are set out in [transfer switch types](/blog/transfer-switch-types).",
        "The second is whether the set can actually pick up the load. This is where good intentions fail most often. A generator sized against the running total of the house will still stall when several tunnel fans and a well pump try to start at the same moment, because inrush is several times running current. The fix is sequencing the starts, soft starters or drives on the largest motors, or a larger alternator, and the arithmetic is in [starting load against running load](/blog/generator-sizing-starting-vs-running).",
        "The third is whether the set starts at all on the day. Alabama Cooperative Extension's [spring tune up list for poultry farm generators](https://www.aces.edu/blog/topics/farming/19-spring-tune-up-tips-for-poultry-farm-generators-electrical-systems/) is a good description of what this involves in practice: exercise the set under load when the house is empty, practise the transfer, load test the batteries and clean the terminals at least annually, and have a licensed electrician check the connections including the grounds. Batteries are the single most common reason a standby set fails to start, and a battery that is five years old has told you what it is going to do.",
      ],
      callout: {
        title: "The short list a standby system has to carry on a poultry house",
        lines: [
          "Tunnel and minimum ventilation fans, including whatever starts first in the sequence.",
          "The house controller, and the circuits its sensors and actuators run on.",
          "Cool cell pumps and water supply, because heat load does not pause.",
          "Brooders or heaters, if there are young birds in cold weather.",
          "The alarm and the dialer, which are worthless if they sit on the wrong side of the transfer.",
          "Deliberately left off: yard lighting, the shop, comfort loads and anything that can wait.",
        ],
      },
    },
    {
      heading: "The alarm is half the system",
      body: [
        "A generator that fails to start silently is the same outcome as having no generator. What makes the difference is a warning that reaches a person who is asleep, and that means more than a siren on the wall.",
        "Stand alone power failure alarms have been standard equipment on these farms for years and they still deserve to be the primary defence, because they are independent of the controller. A battery backed unit whose relay drops out when power disappears will keep working when the controller is exactly the thing that failed. Relying on the controller to report its own failure is the arrangement that most often goes wrong.",
        "What that alarm should cover is wider than power: high temperature, low temperature, the generator running, the generator failing to transfer, and not in auto. That last one catches the genuinely infuriating case where somebody worked on the set and left the switch in the wrong position, and the whole system sat there for months looking installed.",
        "The wiring side of this belongs with the controller work rather than with the power, and the practical rules for keeping those runs reliable are in [low voltage and controls wiring](/low-voltage-structured-wiring).",
      ],
    },
    {
      heading: "What we do on the night, and what we do afterwards",
      body: [
        "On the call itself the first questions are always the same. What has curtains, what can be opened, what did the alarm do, and did the standby set try to start. Those buy minutes, and minutes are the entire currency here. After that it is the usual order: make it safe, find the fault, restore what can be restored, and say plainly what is temporary. What a night like that actually looks like is written up in [a winter failure call](/projects/emergency-winter-failure).",
        "The conversation afterwards is the one that matters more. Almost every emergency call on a farm is a maintenance conversation that arrived late. An exercise schedule nobody kept, an alarm nobody tested, a connection that had been running warm for a year and showed up plainly under a thermal camera months before it let go. That last one is exactly what [an infrared survey](/blog/infrared-electrical-survey) is for.",
        "The rest of what a house needs electrically, from ventilation and controller circuits to the service entrance behind them, is on [the agricultural page](/agricultural-electrical-services), and the standby side is on [the generator page](/standby-generator-installation).",
      ],
    },
  ],

  sources: [
    {
      label: "University of Kentucky: Emergency Ventilation",
      href: "https://afs.mgcafe.uky.edu/poultry/chapter-7-emergency-ventilation",
      note: "Survival time above 97 degrees in still air, CO2 thresholds, and the backup systems recommended for mechanically ventilated houses.",
    },
    {
      label: "Alabama Cooperative Extension: Spring Tune-Up Tips for Poultry Farm Generators",
      href: "https://www.aces.edu/blog/topics/farming/19-spring-tune-up-tips-for-poultry-farm-generators-electrical-systems/",
      note: "Practical maintenance list: load testing, transfer practice, battery testing and connection checks.",
    },
  ],

  services: [
    { label: "Agricultural electrical services", href: "/agricultural-electrical-services" },
    { label: "Standby generator installation", href: "/standby-generator-installation" },
    { label: "Emergency electrical service", href: "/emergency-electrician" },
  ],

  related: ["generator-sizing-starting-vs-running", "transfer-switch-types", "generator-maintenance-schedule"],

  faq: [
    {
      q: "How long do we actually have when the fans stop?",
      a: "In hot weather, very little. Extension guidance puts survival at 20 to 30 minutes above 97 degrees in still air, and a sealed house reaches that quickly because the birds are the heat source. In cold weather you have longer against heat and less against carbon dioxide.",
    },
    {
      q: "Our generator runs fine every week. Is that enough of a test?",
      a: "It is better than nothing and it is not a real test. A weekly exercise with no load proves the engine starts. What matters is whether it carries the house, and that means running it under load and practising the transfer, ideally between flocks.",
    },
    {
      q: "The set starts but stalls when the fans come on. Does that mean we need a bigger one?",
      a: "Not necessarily, and it is worth checking before spending. Sequencing the starts or putting soft starters on the largest motors often solves it for a fraction of the cost of a larger alternator.",
    },
    {
      q: "Should the alarm be part of the controller or separate?",
      a: "Separate, and battery backed. A controller that has locked up is exactly the thing that will not raise the alarm about itself, so the primary warning should not depend on it.",
    },
    {
      q: "What should we check right now, before anything happens?",
      a: "Battery age and terminals, the position of the transfer switch selector, whether the alarm actually rings a phone rather than just a bell, and whether anybody has run the set under load this year. Those four cover most of what goes wrong.",
    },
  ],

  closing:
    "Most of our work is on farms in Lebanon and Lancaster counties, and a large share of it is ventilation, controllers, standby power and the alarms that tie them together. The phone is answered around the clock because of the arithmetic at the top of this page. If nobody has load tested your standby system this year, that is the cheapest call you can make.",

  keywords: [
    "poultry house power outage",
    "emergency ventilation poultry",
    "poultry farm generator",
    "chicken house backup power",
    "how long poultry survive without ventilation",
  ],
};

export default article;
