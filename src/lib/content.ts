/**
 * Тексты-рыба. Структура повторяет etlgroup.com.ua.
 * Всё здесь подлежит замене на реальные данные клиента.
 */

export const site = {
  name: "Slon Electric",
  tagline: "Commercial and agricultural electrical contracting",
  phone: "[TBD: phone]",
  email: "[TBD: email]",
  legal: "[TBD: legal entity]",
};

export const nav = [
  { label: "Services", href: "/services", children: [
    { label: "Design and engineering", href: "/services/design-engineering" },
    { label: "Service and maintenance", href: "/services/service-maintenance" },
    { label: "Switchgear and automation", href: "/services/switchgear-automation" },
    { label: "High-voltage lines and substations", href: "/services/high-voltage" },
    { label: "Standby and backup power", href: "/services/backup-power" },
    { label: "Energy audits", href: "/services/energy-audits" },
  ]},
  { label: "Our projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  overline: "Power the next build with",
  wordmarkTop: "SLON",
  wordmarkBottom: "ELECTRIC",
  subtitle: "A contractor with years of field experience in commercial and agricultural power systems",
};

export const about = {
  ghost: "Company",
  heading: "About us",
  body: "We handle every stage of an electrical project, from the first load calculation to the day the system is energised. Design, engineering, procurement, installation and long-term service — one crew, one point of responsibility.",
  cta: { label: "Read more", href: "/about" },
  mission: {
    heading: "Our mission",
    body: "— to keep production running by building power systems that hold up under real field conditions",
  },
  goal: {
    heading: "Our goal",
    body: "— to make electricity cheaper for the client and the operation as independent from outages as it can be",
  },
};

export const services = {
  ghost: "Services",
  heading: "What we do",
  items: [
    { title: "Design, engineering, procurement and construction", icon: "panel", href: "/services/design-engineering" },
    { title: "Service and maintenance of existing systems", icon: "grid", href: "/services/service-maintenance" },
    { title: "Backup power and energy service for business", icon: "meter", href: "/services/backup-power" },
    { title: "Switchgear and plant automation", icon: "switch", href: "/services/switchgear-automation" },
    { title: "High-voltage lines, substations and utility connections", icon: "tower", href: "/services/high-voltage" },
    { title: "Load studies and energy audits", icon: "audit", href: "/services/energy-audits" },
  ],
};

export const projects = {
  ghost: "Projects",
  heading: "Our projects",
  cta: { label: "More", href: "/projects" },
  items: [
    { title: "Ground-mounted industrial systems", href: "/projects" },
    { title: "Rooftop commercial systems", href: "/projects" },
    { title: "Farm service entrances", href: "/projects" },
    { title: "Backup power and energy service", href: "/projects" },
    { title: "Switchgear and plant automation", href: "/projects" },
    { title: "High-voltage lines and substations. Utility connections", href: "/projects" },
  ],
};

export const cta = {
  heading: "Ready to start a project?",
  body: "If you are planning a build or an upgrade, start with a load estimate prepared by our team. Send us the details and we will put together a free calculation and a scope of work.",
  button: { label: "Get in touch", href: "/contact" },
};

export const whyUs = {
  ghost: "Why us",
  heading: "Working with us means",
  items: [
    "Field-tested crews, not subcontracted labour",
    "Engineering review before anything gets ordered",
    "Fast, documented installation",
    "Service that continues after the handover",
  ],
};

export const partners = {
  heading: "Our partners",
  items: ["[Partner 1]", "[Partner 2]", "[Partner 3]", "[Partner 4]", "[Partner 5]"],
};

export const goFuture = {
  text: "GO FUTURE",
};

export const footer = {
  columns: [
    { items: [ { label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Our projects", href: "/projects" } ] },
    { items: [ { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" } ] },
  ],
  copyright: `© ${new Date().getFullYear()} All rights reserved`,
};

export const socials = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook",  href: "#", icon: "facebook" },
  { label: "LinkedIn",  href: "#", icon: "linkedin" },
  { label: "YouTube",   href: "#", icon: "youtube" },
] as const;
