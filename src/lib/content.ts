/**
 * Весь текст сайта. В разметке текста быть не должно.
 * Факты только подтверждённые: карточка Google, отзывы, фотографии с объектов.
 * Всё неподтверждённое помечено [TBD] и продублировано в OPEN-QUESTIONS.md.
 */

export const site = {
  name: "Slon Electric",
  legal: "Slon Electric LLC",
  owner: "Anatoly",
  tagline: "Agricultural, commercial and industrial electrical contracting",
  phone: "(717) 821-9166",
  phoneHref: "+17178219166",
  /** Подтверждено клиентом 25.09.2026. */
  email: "Anatoly@slonelectric.com",
  domain: "slonelectric.com",
  address: {
    street: "319 Yeagley Rd",
    city: "Myerstown",
    state: "PA",
    zip: "17067",
  },
  /** Подтверждено карточкой Google: круглосуточно. */
  hours: "Open 24 hours",
  /** Подтверждено карточкой Google на 25.09.2026. Обновлять при изменении. */
  reviews: { rating: 5.0, count: 46, source: "Google" },
  /** Постоянная ссылка на карточку через числовой CID: maps?cid=<dec>. Не меняется при переносе. */
  googleMapsUrl: "https://www.google.com/maps?cid=5952708546065676719",
  /** Тот же CID, но с output=embed — годится в src у <iframe> без API-ключа Google. */
  googleMapsEmbedUrl: "https://www.google.com/maps?cid=5952708546065676719&output=embed",
  /**
   * Ссылку прислал клиент 26.09.2026. Саму карточку Yelp прочитать не смог —
   * сайт отдаёт 403 и обычному запросу, и headless-браузеру, то есть рейтинг
   * и отзывы там не подтверждены нами и на сайт не выводятся, только
   * ссылка-подтверждение бизнеса в schema.org (sameAs).
   */
  yelpUrl: "https://www.yelp.com/biz/slon-electric-myerstown",
};

export const nav = [
  { label: "Services", href: "/services", children: [
    { label: "Agricultural electrical", href: "/agricultural-electrical-services" },
    { label: "Commercial electrical", href: "/commercial-electrical-services" },
    { label: "Industrial electrical", href: "/industrial-electrical-services" },
    { label: "Standby generators", href: "/standby-generator-installation" },
    { label: "Service and panel upgrades", href: "/electrical-service-upgrades" },
    { label: "LED lighting", href: "/commercial-led-lighting" },
  ]},
  { label: "Our projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Service area", href: "/service-area", children: [
    { label: "Lebanon County", href: "/service-area/lebanon-county" },
    { label: "Lancaster County", href: "/service-area/lancaster-county" },
    { label: "Berks County", href: "/service-area/berks-county" },
    { label: "Dauphin County", href: "/service-area/dauphin-county" },
    { label: "Schuylkill County", href: "/service-area/schuylkill-county" },
    { label: "Cumberland County", href: "/service-area/cumberland-county" },
    { label: "York County", href: "/service-area/york-county" },
    { label: "Chester County", href: "/service-area/chester-county" },
  ]},
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  overline: "When the power has to hold",
  wordmarkTop: "SLON",
  wordmarkBottom: "ELECTRIC",
  subtitle:
    "Agricultural, commercial and industrial electrical contractors in Myerstown, Pennsylvania",
  photo: { src: "/photos/hero-dairy-barn.webp", alt: "Lit free stall dairy barn wired by Slon Electric" },

  /**
   * Мозаика в герое: десять плиток разного размера из наших кадров.
   * У части плиток есть второй кадр, они по очереди переключаются.
   * `drift` — медленный наезд на кадр, ставим не на все, иначе рябит.
   * `area` — позиция в сетке 6x4 на широком экране. На телефоне сетка
   * простая: две колонки квадратов, видно первые шесть плиток.
   * `sizes` считаем от доли ширины экрана, которую плитка занимает.
   */
  mosaic: [
    {
      area: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      photos: [
        { src: "/photos/projects/service-pole-overhead-drop-1.webp", alt: "Newly set service pole with a bucket truck alongside" },
        { src: "/photos/projects/meter-service-upgrade-womelsdorf-1.webp", alt: "Building exterior with newly installed meter and service equipment" },
      ],
    },
    {
      area: "lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3",
      sizes: "(max-width: 1024px) 100vw, 34vw",
      drift: true,
      photos: [
        { src: "/photos/hero-dairy-barn.webp", alt: "Lit free stall dairy barn wired by Slon Electric" },
        { src: "/photos/poultry-house.webp", alt: "Long agricultural building with new lighting" },
      ],
    },
    {
      area: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      drift: true,
      photos: [
        { src: "/photos/mosaic/grain-legs.webp", alt: "Grain bin and elevator leg against the sky" },
      ],
    },
    {
      area: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      photos: [
        { src: "/photos/mosaic/control-panel-tall.webp", alt: "Control panel wired and terminated by Slon Electric" },
      ],
    },
    {
      area: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-5",
      sizes: "(max-width: 1024px) 100vw, 34vw",
      drift: true,
      photos: [
        { src: "/photos/mosaic/industrial-install.webp", alt: "Large industrial space during electrical installation" },
        { src: "/photos/plant-crew.webp", alt: "Slon Electric crew working in a plant" },
      ],
    },
    {
      area: "lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      photos: [
        { src: "/photos/mosaic/switchgear.webp", alt: "Labelled distribution panels in an electrical room" },
      ],
    },
    {
      area: "lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-4",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      photos: [
        { src: "/photos/mosaic/warehouse.webp", alt: "Warehouse racking under new high bay lighting" },
        { src: "/photos/mosaic/commercial-hall.webp", alt: "Commercial interior with linear lighting installed" },
      ],
    },
    {
      area: "lg:col-start-6 lg:col-end-7 lg:row-start-3 lg:row-end-5",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      photos: [
        { src: "/photos/services/low-voltage-structured-wiring.webp", alt: "Comms room with patch panels and network cabling" },
        { src: "/photos/services/emergency-electrician.webp", alt: "Electrical enclosure opened up in the snow during an after hours repair" },
      ],
    },
    {
      area: "lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-5",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      photos: [
        { src: "/photos/mosaic/ev-charger.webp", alt: "Commercial EV charger mounted and connected" },
      ],
    },
    {
      area: "lg:col-start-5 lg:col-end-6 lg:row-start-4 lg:row-end-5",
      sizes: "(max-width: 1024px) 50vw, 17vw",
      drift: true,
      photos: [
        { src: "/photos/mosaic/pole-light.webp", alt: "Pole mounted light lit against the sky after a lighting job" },
        { src: "/photos/projects/farm-standby-generator-1.webp", alt: "Diesel generator set with batteries and exhaust connected in a farm generator room" },
      ],
    },
  ],
};

export const markets = {
  ghost: "Markets",
  heading: "Who we work for",
  intro:
    "Three kinds of customer, and the same reason behind all of them. Losing power costs them money the same day it happens.",
  items: [
    {
      title: "Agricultural",
      icon: "panel",
      href: "/agricultural-electrical-services",
      body:
        "Poultry houses, dairy barns and grain handling. Ventilation, controllers, lighting programs, backup power and the service entrance that feeds all of it.",
    },
    {
      title: "Commercial",
      icon: "grid",
      href: "/commercial-electrical-services",
      body:
        "Fit outs, remodels and additions. Panels, lighting, parking lots, EV charging and the service upgrades that make the rest possible.",
    },
    {
      title: "Industrial",
      icon: "tower",
      href: "/industrial-electrical-services",
      body:
        "Plant distribution, machine wiring, motor controls and three phase work. Including the jobs that have to happen inside a shutdown window.",
    },
  ],
};

export const about = {
  ghost: "Company",
  heading: "About us",
  /**
   * Начинаем с работы и со срока, а не с адреса: адрес живёт на /contact.
   * Про потери здесь намеренно короче, чем на /services: та же мысль в трёх
   * словах, иначе сайт повторяет сам себя на каждом экране.
   */
  body: [
    "For more than fifteen years we have wired the buildings this part of Pennsylvania runs on. Poultry houses and dairy barns, grain systems, processing plants and the commercial buildings that sit between them.",
    "What those have in common is that the power is not a convenience. Stop one of them for an afternoon and the loss is not the repair bill, it is whatever was inside the building at the time. That is the work the business was built around, and it is the reason the phone is answered at night and the crew keeps training.",
    "Anatoly runs that crew and is usually the person who picks up.",
  ],
  cta: { label: "More about us", href: "/about" },
  photo: {
    src: "/photos/about-roof-fan.webp",
    alt: "Slon Electric electrician working on a rooftop exhaust fan",
  },
};

/**
 * Шесть услуг на главной. Рынки сюда не идут: они уже закрыты секцией
 * «Who we work for» выше, и повторять их значило бы потратить экран.
 *
 * Отбор: деньги за работу, поисковый спрос из docs/keywords-for-pages.md
 * и то, чем мы отличаемся от обычного электрика. За бортом остались
 * слаботочка и зарядки: самый низкий чек и меньше всего отличий.
 */
export const services = {
  ghost: "Services",
  heading: "What we do",
  intro:
    "Six of the things we are called for by name. Any of them can be the whole job or one line of a larger one, and the full list is a click away.",
  cards: [
    {
      slug: "standby-generator-installation",
      title: "Standby generators",
      body:
        "On a farm this is not a comfort item. It is what keeps ventilation turning when the line goes down, and it has to be sized from the loads that cannot stop.",
    },
    {
      slug: "electrical-service-upgrades",
      title: "Service and panel upgrades",
      body:
        "For when the service is smaller than everything added to it since. Sized for the real load, coordinated with the utility, cut over in the shortest window the job allows.",
    },
    {
      slug: "emergency-electrician",
      title: "Emergency service, 24 hours",
      body:
        "Ventilation stopped, a phase dropped, a panel that smells hot. Answered around the clock, because the clock is the expensive part of that night.",
    },
    {
      slug: "commercial-led-lighting",
      title: "LED lighting",
      body:
        "Barns, shops, warehouses and lots. Usually fewer fixtures than you had, better light where the work happens, and a bill that drops the month after.",
    },
    {
      slug: "control-panels-machine-wiring",
      title: "Control panels and machine wiring",
      body:
        "Panels built and wired, motor starters, drives and the connections out to the machines that earn the money.",
    },
    {
      slug: "electrical-preventive-maintenance",
      title: "Maintenance and infrared surveys",
      body:
        "Thermal imaging finds a loose connection while it is still only warm, which is the cheapest moment anyone will ever find it.",
    },
  ],
  cta: { label: "All services", href: "/services" },
};

/**
 * Страница /services. Отдельный текст, а не пересказ главной: сюда человек
 * приходит, уже зная, что ему нужен электрик, и выбирает исполнителя.
 * Подписи карточек короткие — полные описания живут на самих страницах услуг.
 */
export const servicesPage = {
  ghost: "Services",
  label: "What we do",
  h1: "Electrical services for farms, plants and commercial buildings",
  lead: [
    "Everything below is one job described in different ways: keeping a building running. Nearly all of our work is in places where power is not a convenience, and where an outage is not measured by the repair bill. It is measured by what was inside the building at the time.",
    "So the two things we are asked for most are not clever ideas. They are work that holds, and somebody who turns up quickly. The rest of this page is how we go about both.",
  ],

  /** Ставки. Это то, чем мы отличаемся от электрика, который просто чинит. */
  stakes: {
    overline: "Why we work the way we do",
    heading: "A building that stops does not cost what the repair costs",
    intro:
      "Ask what an outage costs and most people answer with the invoice. In the buildings we work in, the invoice is the small number and almost never the one that decides the year.",
    items: [
      {
        title: "A house full of birds",
        body:
          "Ventilation is the shortest clock on any farm. Air movement stops, and on a warm afternoon the house starts working against the birds inside it within the hour. Nothing about that day is made better by being quick with a receipt.",
      },
      {
        title: "A hatch three weeks in the making",
        body:
          "A setter or a hatcher is holding eggs that have been getting to that point for three weeks. Lose heat and air at the wrong hour and what is lost is not an afternoon. It is the batch, and the weeks that went into it.",
      },
      {
        title: "A season sitting in one building",
        body:
          "Grain is only safe while the dryer and the fans keep running. A year of work can come down to whether one motor starts on a cold morning, and to whether anyone looked at the starter feeding it since the last harvest.",
      },
      {
        title: "A line with a shift standing in it",
        body:
          "In a plant the meter starts the second the line does not. Paid people standing still, product part way through a process that will not wait for them, and an order that still has a date on it.",
      },
    ],
    close:
      "None of that is solved by being fast with a repair. It is decided earlier: by how the building was wired, what was put into it, and whether anybody has checked it since.",
  },

  markets: {
    overline: "Markets",
    heading: "Three kinds of building",
    intro:
      "The work changes more with the building than with the job. A barn, a shop floor and a store room each punish a different shortcut, and the code treats them differently too.",
    items: [
      {
        slug: "agricultural-electrical-services",
        title: "Agricultural electrical",
        body:
          "Poultry, dairy and grain. Ventilation, controllers and alarms, lighting programs, standby power, and the service entrance that carries the whole yard.",
      },
      {
        slug: "commercial-electrical-services",
        title: "Commercial electrical",
        body:
          "Fit outs, remodels and additions. Panels, interior and lot lighting, EV charging, and the service upgrade that usually has to come before any of it.",
      },
      {
        slug: "industrial-electrical-services",
        title: "Industrial electrical",
        body:
          "Plant distribution, machine connections, motor control and three phase work, including the jobs that have to fit inside a shutdown window.",
      },
    ],
  },

  work: {
    overline: "Services",
    heading: "The work itself",
    intro:
      "Eight things we are called for by name. Any of them can be the whole job or one line of a larger one.",
    items: [
      {
        slug: "emergency-electrician",
        title: "Emergency electrician",
        body:
          "Power off, a phase dropped, a panel that smells hot. Answered around the clock, because the clock is the expensive part.",
      },
      {
        slug: "standby-generator-installation",
        title: "Standby generators",
        body:
          "Sized around the loads that cannot wait rather than around the size of the service. Transfer switch, fuel line and the wiring between them.",
      },
      {
        slug: "electrical-service-upgrades",
        title: "Service and panel upgrades",
        body:
          "For when the service is smaller than everything that has been added to it since. Sized for the real load, coordinated with the utility, cut over in the shortest window the job allows.",
      },
      {
        slug: "commercial-led-lighting",
        title: "LED lighting",
        body:
          "Barns, shops, warehouses and lots. Usually fewer fixtures than you had, better light where the work actually happens, and a bill that drops the month after.",
      },
      {
        slug: "control-panels-machine-wiring",
        title: "Control panels and machine wiring",
        body:
          "Panels built and wired, motor starters, drives and the connections out to the machines that earn the money.",
      },
      {
        slug: "low-voltage-structured-wiring",
        title: "Low voltage and controls",
        body:
          "Controller and sensor wiring, data, cameras, and the alarms that have to reach a phone at three in the morning to be worth anything.",
      },
      {
        slug: "electrical-preventive-maintenance",
        title: "Preventive maintenance",
        body:
          "Infrared surveys and scheduled checks. Thermal imaging finds a loose connection while it is still only warm, which is the cheapest moment to find one.",
      },
      {
        slug: "ev-charging-installation",
        title: "EV charging",
        body:
          "Commercial and fleet charging, from the panel out to the parking space, along with whatever service work has to happen first.",
      },
    ],
  },

  /** Ответ на «кто всем этим занимается»: закупка, монтаж, пусконаладка — мы. */
  process: {
    overline: "How a job runs",
    heading: "From ordering the equipment to the last setting",
    intro:
      "Quality and speed are not opposites on this kind of work. They depend on the same thing, which is nobody waiting on anybody else. We keep the whole chain in one pair of hands so there is nobody to wait on.",
    photo: {
      src: "/photos/svc-testing.webp",
      alt: "Thermal imaging camera in use on a Slon Electric survey",
    },
    steps: [
      {
        title: "We come and look",
        body:
          "On anything larger than a service call, before a number is written down. Guessing at a load or a service size over the phone helps nobody.",
      },
      {
        title: "We size it before we price it",
        body:
          "A load calculation first, so the service, the feeders and the generator are sized around what the building actually runs and not around what fits the conversation.",
      },
      {
        title: "We buy the equipment",
        body:
          "Gear, panels, fixtures, generators, controllers. You are not the one chasing a supplier, comparing catalogue numbers, or finding out in week six that something arrived in the wrong voltage.",
      },
      {
        title: "We install around your schedule",
        body:
          "Milking, loading, a hatch, a shutdown window. The work is planned around whichever of those cannot move, not around our week.",
      },
      {
        title: "We set it up and prove it",
        body:
          "Transfer switches run under load, drives and controllers configured, sensors checked, alarms made to actually reach somebody. Equipment that was installed and never tested is not finished.",
      },
      {
        title: "We label it and stay reachable",
        body:
          "A panel schedule and labels left in the panel rather than in a van, and the same number answered afterwards by the same people who did the work.",
      },
    ],
  },

  cta: {
    heading: "Not sure which heading your job sits under?",
    body:
      "Describe the building and what it has to run. If it is something we should not be doing, we will say so and usually know who should.",
    secondary: { label: "Send us the details", href: "/contact" },
  },
};

/**
 * Страница /about. Текст в разметке держать нельзя, поэтому он живёт здесь.
 *
 * «Более 15 лет» подтверждено клиентом 24.09.2026. До этого срок работы
 * стоял в OPEN-QUESTIONS как то, что выдумывать запрещено.
 */
export const aboutPage = {
  ghost: "Company",
  heading: "About us",
  lead: [
    "Slon Electric is a family run electrical contractor on Yeagley Road in Myerstown, in the middle of Lebanon County farm country. Anatoly runs the crew and is usually the person who answers the phone.",
    "We have been doing this for more than fifteen years. In that time the work settled into three markets, agricultural, commercial and industrial, and into one habit that matters more than any of them: the crew keeps training. Codes change, equipment changes, and a contractor who stopped learning a decade ago is working from a picture of the trade that no longer matches the buildings.",
  ],
  photo: {
    src: "/photos/about-crew.webp",
    alt: "Slon Electric electrician in a hard hat and fall arrest harness in a stocked work van",
  },

  /** Миссия, цель, ценности: то, ради чего страница переписана. */
  purpose: {
    overline: "What we are here for",
    heading: "Mission, goal and the rules we hold ourselves to",
    mission: {
      title: "Our mission",
      body:
        "To keep buildings running for the people whose livelihood is inside them. On a farm that means the birds and the herd. In a plant it means the line and the shift standing in it. In a shop or a store it means the doors opening on time. The electrical work is the means, not the point.",
    },
    goal: {
      title: "Our goal",
      body:
        "To be the contractor people name when somebody else asks who to call. Not the cheapest quote and not the largest company in the county. The one that gets recommended, because the work held and nobody had to ring twice about it.",
    },
    values: [
      {
        title: "Work you would put your name to",
        body:
          "The test we apply to a job is whether we would be happy for the next electrician to open it up. That decides how it gets wired, how it gets labelled and what we refuse to leave behind.",
      },
      {
        title: "A crew that keeps learning",
        body:
          "Training is continuous here rather than something done once. New code cycles, new equipment, new drive and controller platforms. It is the only way to stay useful to customers whose buildings keep changing.",
      },
      {
        title: "Our reputation is the asset",
        body:
          "It took more than fifteen years to build and one bad job to damage. That is the calculation behind every decision we make about scheduling, materials and what we are willing to promise.",
      },
      {
        title: "Straight answers, including the unprofitable ones",
        body:
          "We say when a repair will do instead of a replacement, when a job can safely wait until morning, and when somebody closer will reach you faster. Those conversations cost us work and earn the recommendation.",
      },
      {
        title: "One crew, one person responsible",
        body:
          "Anatoly quotes the job and his crew does it. Nothing gets handed to a subcontractor you have never met, and the person who answers when you call afterwards is the person who did the work.",
      },
      {
        title: "We leave the building documented",
        body:
          "Labels, a filled in panel schedule and a record of what went where, left in the panel rather than in a van. It costs us an hour and saves whoever comes next a day.",
      },
    ],
  },

  focus: {
    heading: "What we chose to be good at",
    body:
      "Most of our work is in buildings where power is not a convenience: poultry houses, dairy barns, grain systems, processing plants and commercial buildings that cannot simply stop for the afternoon. Over fifteen years that is where we chose to get good, and everything else about the business points the same way. It is why the phone is covered at night, why the crew trains on controllers and drives rather than only on wiring, and why we would rather turn down a job than take one we cannot do properly.",
  },

  /** Как работаем: существующий список, он клиенту нравился. */
  how: {
    heading: "How we work",
    items: [
      "One crew, one person responsible. Anatoly quotes the job and his crew does it.",
      "We look before we quote. On anything larger than a service call we come out, because guessing at a load or a service size over the phone helps nobody.",
      "We say when something is a repair. If the panel is sound and the breakers are available, we will tell you that, even when a replacement would be the larger invoice.",
      "We buy the equipment. Gear, panels, fixtures, generators and controllers come through us, so nobody is chasing a supplier on your behalf.",
      "We set it up and prove it. Transfer switches run under load, drives configured, alarms made to actually reach somebody.",
      "We leave a record. Labels, a panel schedule and a note of what went where, in the panel rather than in a van.",
      "The phone is covered at night. Not as a marketing line, as the reason the listing says open 24 hours.",
    ],
  },

  facts: [
    { v: "15+", l: "Years doing this work", note: "client" },
    { v: "5.0", l: "Rating on Google", note: "google" },
    { v: "24/7", l: "Phone answered, every day", note: "google" },
    { v: "8", l: "Counties we provide service in", note: "site" },
  ],
  factsNote:
    "The rating and the hours come from our Google listing. The rest comes from us, and we would rather say which is which.",

  blog: {
    heading: "Why there is a blog on a contractor website",
    body: [
      "Because the same questions come up every week, and a straight answer is worth more than a brochure. Whether stray voltage is the reason milk is down. Whether a panel needs replacing or repairing. How long a poultry house really has when the fans stop.",
      "If reading one of them saves you a call, that is a fine outcome. If it tells you the job is bigger than you thought, that is a useful outcome too.",
    ],
  },

  projects: {
    ghost: "Projects",
    heading: "Work we have written up",
    intro:
      "Customer names are not on this website, because most of our farm and plant customers would rather they were not. The write ups describe the building and the work instead.",
  },
};

export const projects = {
  ghost: "Projects",
  heading: "Recent work",
  cta: { label: "More", href: "/projects" },
  /** Шесть из двадцати пяти разборов. Полный список на /projects. */
  items: [
    { title: "Free stall barn lighting, rebuilt for a long day schedule", slug: "free-stall-barn-lighting" },
    { title: "Poultry house ventilation and controller power", slug: "poultry-house-ventilation-power" },
    { title: "Plant wiring inside a production shutdown", slug: "plant-wiring-during-shutdown" },
    { title: "Panel upgrade in Myerstown", slug: "panel-upgrade-myerstown" },
    { title: "Warehouse high bay lighting retrofit", slug: "warehouse-high-bay-lighting" },
    { title: "Standby generator and transfer switch", slug: "standby-generator-transfer-switch" },
  ].map((p) => ({
    ...p,
    href: `/projects/${p.slug}`,
    photo: `/photos/projects/${p.slug}-1.webp`,
  })),
};
export const whyUs = {
  ghost: "Why us",
  heading: "Why people call us back",
  items: [
    {
      title: "We know what a ventilation failure costs",
      body: "Farm work is not a sideline here. When a controller drops out at two in the morning, the clock that matters is the one counting birds, not billable hours.",
    },
    {
      title: "One crew, one person responsible",
      body: "Anatoly quotes the job and his crew does it. Nothing gets handed to a subcontractor you have never met.",
    },
    {
      title: "Rated 5.0 on Google",
      body: "Generator work, panel upgrades and commercial wiring, reviewed by the people who paid for it.",
    },
    {
      title: "Somebody answers at night",
      body: "The phone is covered around the clock, every day of the year.",
    },
  ],
  photo: { src: "/photos/grain-bins.webp", alt: "Grain storage bins served by Slon Electric" },
};

/**
 * Блок зоны обслуживания на главной. Список округов сюда не дублируется:
 * секция берёт его из `src/content/areas`, иначе он разъедется со страницами.
 *
 * [TBD] точный радиус выезда клиент не подтвердил, поэтому формулировки
 * осторожные: ближние округа быстро, дальние плановой работой.
 */
export const serviceArea = {
  ghost: "Area",
  heading: "Counties we cover",
  intro:
    "Eight counties across south central Pennsylvania, on farms, in plants and in commercial buildings. The counties nearest us get same day service calls. The further ones get planned work, and we would rather say which is which than take a job we cannot reach in time.",
  note: "Not sure whether you are in range? Call and ask. It is a short conversation and you get a straight answer rather than an optimistic one.",
  cta: { label: "The whole service area", href: "/service-area" },
};

export const faq = {
  ghost: "Questions",
  heading: "Common questions",
  items: [
    {
      q: "Do you work on poultry and dairy farms?",
      a: "Yes, and it is a large share of what we do. Ventilation and controller wiring, lighting programs, standby power, bulk tank and parlour circuits, grain dryers and bin fans, and the service entrance feeding the whole operation.",
    },
    {
      q: "Are you available at night and on weekends?",
      a: "Yes. Our hours on Google are listed as open 24 hours because that is how the phone is actually covered.",
    },
    {
      q: "Do you take commercial and industrial jobs, or only farms?",
      a: "All three. Commercial fit outs, service upgrades and lighting, and industrial work including machine wiring, motor controls and three phase distribution.",
    },
    {
      q: "What area do you cover?",
      a: "We are on Yeagley Road in Myerstown and work through Lebanon County and the surrounding farm country, reaching into Lancaster and Berks. If you are not sure whether you are in range, call and ask.",
    },
    {
      q: "How do I get a price?",
      a: "Call (717) 821-9166 and describe the job. For anything larger than a service call we come out and look before quoting, because guessing at a load or a service size on the phone helps nobody.",
    },
  ],
};

/** Аварийка стоит в конце главной: это не витрина, а страховка для того, кто дочитал. */
export const emergency = {
  heading: "Something down right now?",
  body:
    "Ventilation stopped, a phase dropped, a panel is hot or the power is off and the utility says it is not on their side. Call. The phone is answered around the clock.",
  /**
   * Не "Call (717) 821-9166" — эта же фраза уже написана на кнопке в футере
   * сразу после этой секции (через одну полосу GoFuture), и одинаковый текст
   * на двух кнопках подряд читался как один и тот же призыв, повторённый
   * дважды. Номер и так набирается по клику и виден в шапке на любой странице.
   */
  cta: "Call now",
};

export const cta = {
  heading: "Planning a build or an upgrade?",
  body:
    "Send us what you know about the job, even if it is rough. We will tell you what it needs, what it will take and what it should cost.",
  button: { label: "Get in touch", href: "/contact" },
};

export const goFuture = { text: "POWER THAT HOLDS" };

/**
 * Подвал. Списки услуг и округов сюда не дублируются: колонки строятся
 * из `content/services` и `content/areas`, иначе разъедутся при первой правке.
 */
export const footer = {
  blurb:
    "Agricultural, commercial and industrial electrical contractors. Poultry houses, dairy barns, grain systems, plants and the commercial buildings between them.",
  company: [
    { label: "About us", href: "/about" },
    { label: "Our projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Service area", href: "/service-area" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of use", href: "/terms" },
  ],
  copyright: `© ${new Date().getFullYear()} Slon Electric LLC`,
  credit: {
    text: "Website designed & developed by",
    label: "Seva Web Studio",
    href: "https://seva-web-studio.com/",
  },
};

const allSocials = [
  // Подтверждено клиентом 25.09.2026.
  { label: "Facebook", href: "https://www.facebook.com/p/Slon-Electric-100062870268366/", icon: "facebook" },
  // Instagram пока не подтверждён — см. OPEN-QUESTIONS.md.
  { label: "Instagram", href: "#", icon: "instagram" },
  // Карточка Google — не соцсеть, но иконка ведёт туда же, куда и остальные:
  // на страницу, где реально можно увидеть отзывы и написать свой.
  { label: "Google", href: site.googleMapsUrl, icon: "google" },
  // Ссылку прислал клиент 26.09.2026 — саму карточку прочитать не смогли,
  // yelp.com отдаёт 403 (см. комментарий у site.yelpUrl), ссылка от этого
  // не менее настоящая.
  { label: "Yelp", href: site.yelpUrl, icon: "yelp" },
] as const;

/**
 * В хидер и футер идут только подтверждённые ссылки: иконка на "#" — это
 * кликабельный тупик на всех страницах сайта, хуже, чем просто её не показать.
 */
export const socials = allSocials.filter((s) => s.href !== "#");
