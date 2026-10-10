import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import ServiceCard from "@/components/ServiceCard";
import RichText from "@/components/RichText";
import GhostHeading from "@/components/GhostHeading";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import FaqAccordion from "@/components/FaqAccordion";
import { SlashBullet } from "@/components/Logo";
import { ServiceIcon, Chevron } from "@/components/Icons";
import { GridLines, DotDiamonds, DiagonalTiles, DiagonalWash } from "@/components/Patterns";
import { serviceList, serviceMap } from "@/content/services";
import { projectMap } from "@/content/projects";
import { articleMap } from "@/content/blog";
import { site } from "@/lib/content";
import { trimSegments } from "@/lib/meta";

/** Только известные слуги. Всё остальное на верхнем уровне остаётся 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceMap[slug];
  if (!s) return {};
  return {
    title: trimSegments(s.title),
    description: s.summary,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { type: "website", title: s.title, description: s.summary, images: [s.hero.src] },
  };
}

/** Иконки по кругу: групп в scope шесть, столько же и рисунков. */
const SCOPE_ICONS = ["panel", "switch", "grid", "tower", "meter", "audit"] as const;

/** Линейка с подписью: тот же приём, что на главной и на /services. */
function Rail({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="block h-5 w-[4px] shrink-0 bg-primary-500"
        style={{ transform: "skewX(-14deg)" }}
        aria-hidden="true"
      />
      <p className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
        {label}
      </p>
      <span
        className={`line-draw h-px w-full ${tone === "dark" ? "bg-white/20" : "bg-paper-300"}`}
        aria-hidden="true"
      />
    </div>
  );
}

export default async function ServicePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceMap[slug];
  if (!s) notFound();

  const projects = s.related.projects.map((p) => projectMap[p]).filter(Boolean);
  const articles = s.related.articles.map((a) => articleMap[a]).filter(Boolean);
  const also = s.seeAlso.map((x) => serviceMap[x]).filter(Boolean);
  const scopeCount = s.scope.reduce((n, g) => n + g.items.length, 0);
  /**
   * Карточки сразу после героя. Своя подборка (highlightCards), если на
   * странице она задана: сюда идёт то, что реально релевантно именно
   * этой странице, одной карточкой на тему, без дублей между категорией
   * работы и услугой сайта. Если не задана, карточки собираются как
   * раньше, из seeAlso с обложками самих услуг.
   */
  const rawHighlightCards: { title: string; body: string; href: string; photoProject?: string; photoIndex?: number }[] =
    s.highlightCards ??
    s.seeAlso
      .map((x) => {
        const svc = serviceMap[x];
        return svc ? { title: svc.h1, body: svc.summary, href: `/${x}` } : null;
      })
      .filter((c): c is { title: string; body: string; href: string } => !!c);
  const highlightCards = rawHighlightCards.map((c) => ({
    ...c,
    photo: c.photoProject
      ? projectMap[c.photoProject]?.photos[c.photoIndex ?? 0]
      : c.href.startsWith("/projects/")
        ? projectMap[c.href.slice("/projects/".length)]?.photos[0]
        : serviceMap[c.href.slice(1)]?.hero,
  }));

  /**
   * Кадры для блоков берём из наших же проектов по этой услуге: своего фото
   * на каждый раздел нет, а стоковые на этом сайте запрещены. Раздаём по
   * индексу, чтобы один и тот же снимок не появился на странице дважды.
   */
  const photoPool = projects.map((p) => p.photos[0]).filter(Boolean);
  const afterSections = s.sections.length;
  /** Если проектов вдруг меньше, чем мест под кадр, возвращаемся к началу пула. */
  const pick = (i: number) => (photoPool.length ? photoPool[i % photoPool.length] : undefined);
  const facilitiesPhoto = pick(afterSections);
  const processPhoto = pick(afterSections + 1);
  const whyUsPhoto = pick(afterSections + 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    description: s.summary,
    serviceType: s.h1,
    provider: {
      "@id": `https://${site.domain}/#business`,
      // Electrician, не ElectricalContractor — см. комментарий в Schema.tsx.
      "@type": "Electrician",
      name: site.name,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
      },
      /**
       * По решению клиента 24.09.2026 число отзывов на страницах не показываем,
       * виден только рейтинг. В разметке reviewCount остаётся: без него
       * AggregateRating невалиден. Не «чинить» удалением.
       */
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.reviews.rating,
        reviewCount: site.reviews.count,
      },
    },
    areaServed: ["Lebanon County, Pennsylvania", "Lancaster County, Pennsylvania", "Berks County, Pennsylvania"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.h1,
      itemListElement: s.scope.map((g) => ({
        "@type": "OfferCatalog",
        name: g.group,
        itemListElement: g.items.map((i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: i },
        })),
      })),
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Герой: кадр с объекта во всю ширину ───────────────────── */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={s.hero.src} alt="" fill priority sizes="100vw" className="object-cover" />
          {/* затемнение ровно настолько, чтобы текст читался, а кадр остался виден */}
          <span className="absolute inset-0 bg-ink-900/55" />
          <span className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/20" />
        </div>
        <DotDiamonds className="right-0 top-0 hidden h-[260px] w-[680px] opacity-40 lg:block" color="#7c8598" />

        <div className="relative mx-auto max-w-[1140px] px-4 pb-16 pt-12 lg:pb-24 lg:pt-20">
          <nav className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-white/60">
            <Link href="/services" className="hover:text-primary-500">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary-500">{s.kind === "market" ? "Market" : "Service"}</span>
          </nav>

          <div className="mt-10 flex gap-6 lg:gap-8">
            <span
              className="mt-2 block h-[70px] w-[10px] shrink-0 bg-primary-500 lg:h-[120px] lg:w-[18px]"
              style={{ transform: "skewX(-14deg)" }}
              aria-hidden="true"
            />
            <h1 className="max-w-[880px] text-[30px] font-extrabold leading-[1.1] text-white lg:text-[52px]">
              {s.h1}
            </h1>
          </div>

          {/*
            RichText, не голый текст: у industrial-electrical-services здесь
            годами жила markdown-ссылка на источник (цитата Siemens), которая
            рендерилась как сырой текст "[текст](url)" — RichText её нигде
            не раскрывал, потому что сюда его никогда не подключали. Сама
            цитата переехала в первый блок текста ниже при правке 10.10.2026,
            но баг у поля lead остаётся багом и для любого будущего текста.
          */}
          <p className="mt-8 max-w-[720px] text-[17px] leading-8 text-gray-300 lg:text-[18px]">
            <RichText text={s.lead} />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-9 !py-4 !text-[15px]">
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="btn !border !border-white/30 !bg-transparent !px-9 !py-4 !text-[15px] !text-white hover:!bg-white/10"
            >
              Send us the details
            </Link>
          </div>
        </div>

        {/* полоска фактов по низу героя */}
        <div className="relative border-t border-white/15">
          <dl className="mx-auto grid max-w-[1140px] grid-cols-2 px-4 lg:grid-cols-4">
            {[
              { v: `${site.reviews.rating.toFixed(1)} ★`, l: `Rating on ${site.reviews.source}` },
              { v: "24/7", l: "Phone answered, every day" },
              { v: String(scopeCount), l: "Kinds of work under this heading" },
              { v: "3", l: "Counties: Lebanon, Lancaster, Berks" },
            ].map((f, i) => (
              <div
                key={f.l}
                className={[
                  "py-7 lg:py-8",
                  // разделители: на телефоне сетка 2x2, на широком экране одна строка
                  i < 2 ? "border-b border-white/15 lg:border-b-0" : "",
                  i % 2 === 0 ? "border-r border-white/15" : "",
                  i % 2 === 1 ? "pl-6 lg:border-r lg:border-white/15" : "",
                  i === 3 ? "lg:border-r-0" : "",
                  i > 0 ? "lg:pl-8" : "",
                ].filter(Boolean).join(" ")}
              >
                <dt className="text-[26px] font-extrabold leading-none text-primary-500 lg:text-[32px]">{f.v}</dt>
                <dd className="mt-3 max-w-[190px] text-[13px] leading-5 text-gray-400">{f.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/*
        ── Короткий обзор: карточки, одной секцией ──────────────────
        Просьба клиента 10.10.2026, трижды уточнена 11.10.2026: первое,
        что видит фермер после героя, не должно быть сразу техническим
        текстом, и это одна секция, а не две. Было две: категории
        фермерской работы (из scope) и услуги сайта в агро-одежде
        (из seeAlso) — в них задваивались темы ("Farm power and
        distribution" и "Farm panel and service upgrades" были по сути
        одной темой двумя карточками, то же со standby power). Свели
        в один список `highlightCards`: девять карточек без дублей, часть
        ведёт на проект (реальный кейс), часть на страницу услуги, у
        каждой своё фото с объекта. Там, где highlightCards не задан
        (страницы без своей подборки), секция собирается как раньше,
        из seeAlso с обложками самих услуг.
      */}
      {highlightCards.length > 0 && (
        <section className="relative overflow-hidden bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[1140px] px-4">
            <Rail label="What we do" />
            <h2 className="mt-7 max-w-[680px] text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
              {s.highlightCards ? "The kinds of work this covers" : "The services behind this work"}
            </h2>

            <Reveal anim="fade-in" className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {highlightCards.map((c, i) => (
                <ServiceCard
                  key={c.href}
                  href={c.href}
                  photo={c.photo}
                  title={c.title}
                  body={c.body}
                  index={i}
                  priority={i < 3}
                />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Текст вперемешку с кадрами: то же самое, подробно ───────── */}
      {s.sections.map((sec, i) => {
        const photo = photoPool[i];
        const flip = i % 2 === 1;
        const paper = i % 2 === 1;

        return (
          <section
            key={sec.heading}
            className={`relative overflow-hidden py-14 lg:py-20 ${paper ? "bg-paper-100" : "bg-white"}`}
          >
            {i === 0 && <GridLines className="-right-24 top-10 hidden h-[420px] w-[540px] lg:block" />}
            {paper && <DiagonalWash from="#ffffff" clip="polygon(0 0, 42% 0, 0 100%)" />}

            <div className="relative mx-auto max-w-[1140px] px-4">
              <div
                className={`grid grid-cols-1 items-center gap-12 ${
                  photo ? "lg:grid-cols-2 lg:gap-16" : ""
                }`}
              >
                <div className={flip && photo ? "lg:order-2" : ""}>
                  {i === 0 && <Rail label={s.kind === "market" ? "The work" : "What it is"} />}
                  <h2
                    className={`text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px] ${
                      i === 0 ? "mt-8" : ""
                    }`}
                  >
                    {sec.heading}
                  </h2>
                  {sec.body.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-5 text-[16px] leading-8 text-gray-700 lg:text-[17px]">
                      <RichText text={p} />
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="mt-7 space-y-3">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex gap-4 text-[16px] leading-7 text-gray-700">
                          <SlashBullet className="mt-1 !h-5 !w-[4px]" />
                          <span><RichText text={b} /></span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {photo && (
                  <Reveal anim={flip ? "slide-in-left" : "slide-in-right"} className={flip ? "lg:order-1" : ""}>
                    <div className="left-shadow">
                      <Photo
                        src={photo.src}
                        alt={photo.alt}
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="aspect-[4/3] w-full"
                      />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Что сюда входит ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-24">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <DotDiamonds className="right-0 top-20 h-[280px] w-[760px]" color="#454c5e" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Rail label="What this covers" tone="dark" />
              <h2 className="mt-7 max-w-[680px] text-[26px] font-extrabold leading-tight text-white lg:text-[36px]">
                {scopeCount} kinds of work under one heading
              </h2>
            </div>
            <p className="max-w-[420px] text-[15px] leading-7 text-gray-400">
              If what you need is not on the list, it is still worth asking. This is what we are
              asked for most, not the limit of what we do.
            </p>
          </div>

          <Reveal anim="fade-in" className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {s.scope.map((g, i) => {
              const Icon = ServiceIcon[SCOPE_ICONS[i % SCOPE_ICONS.length]];
              return (
                <div
                  key={g.group}
                  className="rise group relative overflow-hidden border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-primary-500/60 hover:bg-white/[0.07]"
                  style={{ "--d": `${100 + i * 70}ms` } as React.CSSProperties}
                >
                  <Icon
                    className="absolute -bottom-6 -right-6 h-32 w-32 text-white/[0.06] transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span
                    className="relative block h-6 w-[5px] bg-primary-500"
                    style={{ transform: "skewX(-14deg)" }}
                    aria-hidden="true"
                  />
                  <h3 className="relative mt-5 text-[18px] font-bold leading-6 text-white">{g.group}</h3>
                  {g.note && <p className="relative mt-3 text-[14px] leading-6 text-gray-400">{g.note}</p>}
                  <ul className="relative mt-6 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[14px] leading-6 text-gray-300">
                        <SlashBullet className="mt-1 !h-4 !w-[3px]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Где мы это делаем ─────────────────────────────────────── */}
      {s.facilities && (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
          <DiagonalTiles className="-left-16 top-10 hidden h-[420px] w-[420px] lg:block" />
          <div className="relative mx-auto max-w-[1140px] px-4">
            <GhostHeading ghost="Where" heading="Buildings we do this in" width="wide" />

            <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_460px] lg:gap-16">
              <Reveal anim="slide-in-left">
                <ul>
                  {s.facilities.map((f, i) => (
                    <li
                      key={f}
                      className="rise group flex items-center gap-6 border-t border-paper-300 py-5 last:border-b"
                      style={{ "--d": `${80 + i * 70}ms` } as React.CSSProperties}
                    >
                      <span className="text-[13px] font-bold text-primary-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[17px] font-bold leading-6 text-ink-900 transition-colors group-hover:text-primary-500 lg:text-[19px]">
                        {f}
                      </p>
                      <span
                        className="ml-auto h-[2px] w-0 bg-primary-500 transition-all duration-300 group-hover:w-10"
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              </Reveal>

              {facilitiesPhoto && (
                <Reveal anim="slide-in-right">
                  <div className="left-shadow">
                    <Photo
                      src={facilitiesPhoto.src}
                      alt={facilitiesPhoto.alt}
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="aspect-[4/5] w-full"
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Для кого ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
        <DiagonalWash from="#ffffff" clip="polygon(55% 0, 100% 0, 100% 100%)" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Clients" heading="Who we do this for" tone="gray" />

          <Reveal anim="fade-in" className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {s.audience.map((a, i) => (
              <div
                key={a.title}
                className="rise border-t-2 border-primary-500 bg-white p-7 shadow-[0_2px_20px_rgba(54,62,78,0.06)]"
                style={{ "--d": `${100 + i * 70}ms` } as React.CSSProperties}
              >
                <p className="text-[12px] font-bold tracking-[0.1em] text-primary-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[18px] font-bold leading-6 text-ink-900">{a.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-gray-700">
                  <RichText text={a.body} />
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Как идёт работа ───────────────────────────────────────── */}
      {s.process && (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
          <div className="relative mx-auto max-w-[1140px] px-4">
            <Rail label="How a job runs" />

            <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr] lg:gap-20">
              <div>
                <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
                  {s.process.title}
                </h2>
                <p className="mt-6 text-[16px] leading-7 text-gray-700">
                  From the first visit to the labels left in the panel, this is the order it happens in.
                </p>
                {processPhoto && (
                  <Reveal anim="slide-in-left" className="mt-10 hidden lg:block">
                    <div className="left-shadow">
                      <Photo
                        src={processPhoto.src}
                        alt={processPhoto.alt}
                        sizes="380px"
                        className="aspect-[4/5] w-full"
                      />
                    </div>
                  </Reveal>
                )}
              </div>

              <Reveal anim="slide-in-right">
                <ol className="relative">
                  {/* вертикальная нить, вдоль которой стоят шаги */}
                  <span
                    className="absolute bottom-6 left-[19px] top-4 w-px bg-paper-300"
                    aria-hidden="true"
                  />
                  {s.process.lines.map((l, i) => (
                    <li
                      key={l}
                      className="rise relative flex gap-7 pb-9 last:pb-0"
                      style={{ "--d": `${100 + i * 80}ms` } as React.CSSProperties}
                    >
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-[13px] font-bold text-primary-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-2 text-[16px] leading-7 text-gray-700">
                        <RichText text={l} />
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ── Почему мы ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[440px] w-[70%] bg-white"
          style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Why us" heading="Why this work comes to us" tone="gray" width="wide" />

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[420px_1fr] lg:gap-16">
            {whyUsPhoto && (
              <Reveal anim="slide-in-left">
                <div className="left-shadow">
                  <Photo
                    src={whyUsPhoto.src}
                    alt={whyUsPhoto.alt}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="aspect-[3/4] w-full"
                  />
                </div>
              </Reveal>
            )}

            <Reveal anim="slide-in-right">
              <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {s.whyUs.map((w, i) => (
                  <li
                    key={w.title}
                    className="rise flex gap-5"
                    style={{ "--d": `${100 + i * 70}ms` } as React.CSSProperties}
                  >
                    <SlashBullet className="mt-1 !h-7 !w-[5px]" />
                    <div>
                      <h3 className="text-[17px] font-bold leading-6 text-ink-900 lg:text-[18px]">{w.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-gray-700">
                        <RichText text={w.body} />
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-9 !py-4 !text-[15px]">
                  Call {site.phone}
                </a>
                <p className="text-[14px] font-bold text-ink-900">
                  <a href={site.googleMapsUrl} target="_blank" rel="noopener" className="hover:text-primary-500">
                    <span className="text-primary-500">{site.reviews.rating.toFixed(1)}</span>
                    {" ★ "} on {site.reviews.source}
                  </a>{" "}
                  {"·"} {site.hours}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Наши работы ───────────────────────────────────────────── */}
      {projects.length > 0 && (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
          <DotDiamonds className="right-0 top-16 h-[240px] w-[680px]" color="#e5e5e5" />
          <div className="relative mx-auto max-w-[1140px] px-4">
            <div className="mb-12">
              <GhostHeading ghost="Projects" heading="Jobs of this kind" />
            </div>

            <Carousel label="Projects for this service" autoplay>
              {projects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group block focus:outline-none">
                  <div className="relative overflow-hidden">
                    <Photo
                      src={p.photos[0].src}
                      alt={p.photos[0].alt}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 340px"
                      className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/25"
                      aria-hidden="true"
                    />
                    <span className="absolute left-0 top-6 bg-primary-500 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                    Read the job
                    <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </Carousel>

            <div className="mt-4 flex justify-center">
              <Link href="/projects" className="btn btn_outline !px-9 !py-4 !text-[14px]">
                All projects
                <Chevron className="ml-3 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Вопросы ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
        <GridLines className="-left-20 top-16 hidden h-[420px] w-[520px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Questions" heading="Questions we get" tone="gray" />
          <FaqAccordion items={s.faq} className="mt-12 max-w-[880px]" />
        </div>
      </section>

      {/* ── Почитать и смежные услуги ─────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            {articles.length > 0 && (
              <div>
                <Rail label="Read first" />
                <Reveal anim="fade-in" as="span" className="mt-8 block">
                <ul>
                  {articles.map((a, i) => (
                    <li
                      key={a.slug}
                      className="rise border-t border-paper-300 py-5 first:border-t-0 first:pt-0"
                      style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                    >
                      <Link href={`/blog/${a.slug}`} className="group block">
                        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                          {a.category}
                        </p>
                        <h3 className="mt-2 text-[17px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                          {a.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-6 text-gray-700">{a.question}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                </Reveal>
                <div className="mt-8 border-t border-paper-300 pt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
                  >
                    All articles
                    <Chevron className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}

            {also.length > 0 && (
              <div>
                <Rail label="Related services" />
                <Reveal anim="fade-in" as="span" className="mt-8 block">
                <ul>
                  {also.map((o, i) => (
                    <li
                      key={o.slug}
                      className="rise"
                      style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                    >
                      <Link
                        href={`/${o.slug}`}
                        className="group flex items-start gap-4 border-t border-paper-300 py-5 first:border-t-0 first:pt-0"
                      >
                        <SlashBullet className="mt-1" />
                        <span className="text-[16px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                          {o.h1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                </Reveal>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Звонок ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <Image src={s.hero.src} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-[1140px] flex-col items-start gap-10 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-[660px]">
            <h2 className="text-[28px] font-extrabold leading-tight text-white lg:text-[38px]">
              Tell us what the building has to run
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-gray-300">
              Anatoly runs the crew and usually answers the phone himself. Based in{" "}
              {site.address.city}, working across Lebanon, Lancaster and
              Berks counties, {site.hours.toLowerCase()}.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4">
            <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-9 !py-4 !text-[15px]">
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="btn !border !border-white/30 !bg-transparent !px-9 !py-4 !text-[15px] !text-white hover:!bg-white/10"
            >
              Send us the details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
