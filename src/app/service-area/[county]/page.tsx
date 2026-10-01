import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import RichText from "@/components/RichText";
import GhostHeading from "@/components/GhostHeading";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import FaqAccordion from "@/components/FaqAccordion";
import { SlashBullet } from "@/components/Logo";
import { ServiceIcon, Chevron } from "@/components/Icons";
import { GridLines, DotDiamonds, DiagonalTiles, DiagonalWash } from "@/components/Patterns";
import { areaList, areaMap } from "@/content/areas";
import { townByName } from "@/content/towns";
import { serviceMap } from "@/content/services";
import { projectMap } from "@/content/projects";
import { articleMap } from "@/content/blog";
import { site } from "@/lib/content";
import { trimSegments } from "@/lib/meta";

/** Только известные округа. Всё остальное под /service-area отдаёт 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return areaList.map((a) => ({ county: a.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const a = areaMap[county];
  if (!a) return {};
  return {
    title: trimSegments(a.title),
    description: a.summary,
    alternates: { canonical: `/service-area/${a.slug}` },
    openGraph: { type: "website", title: a.title, description: a.summary, images: [a.hero.src] },
  };
}

const DEMAND_ICONS = ["panel", "switch", "meter", "grid", "audit", "tower"] as const;

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

export default async function AreaPage({
  params,
}: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const a = areaMap[county];
  if (!a) notFound();

  const projects = a.related.projects.map((p) => projectMap[p]).filter(Boolean);
  const articles = a.related.articles.map((x) => articleMap[x]).filter(Boolean);
  const neighbours = a.neighbours.map((x) => areaMap[x]).filter(Boolean);

  const photoPool = projects.map((p) => p.photos[0]).filter(Boolean);
  const pick = (i: number) => (photoPool.length ? photoPool[i % photoPool.length] : undefined);
  const townsPhoto = pick(a.sections.length);
  const closingPhoto = pick(a.sections.length + 1);

  /**
   * areaServed описывает округ, а не адрес: страница отвечает на вопрос
   * «вы работаете у нас», и разметка должна говорить ровно то же самое.
   */
  const schema = {
    "@context": "https://schema.org",
    /** Тот же @id, что у разметки в макете: это одна компания, а не вторая. */
    "@id": `https://${site.domain}/#business`,
    // Electrician, не ElectricalContractor — см. комментарий в Schema.tsx.
    "@type": "Electrician",
    name: site.name,
    areaServed: [
      { "@type": "AdministrativeArea", name: `${a.county}, Pennsylvania` },
      ...a.towns.map((t) => ({ "@type": "City", name: `${t.name}, Pennsylvania` })),
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Герой ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={a.hero.src} alt="" fill priority sizes="100vw" className="object-cover" />
          <span className="absolute inset-0 bg-ink-900/55" />
          <span className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/20" />
        </div>
        <DotDiamonds className="right-0 top-0 hidden h-[260px] w-[680px] opacity-40 lg:block" color="#7c8598" />

        <div className="relative mx-auto max-w-[1140px] px-4 pb-16 pt-12 lg:pb-24 lg:pt-20">
          <nav className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-white/60">
            <Link href="/service-area" className="hover:text-primary-500">Service area</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary-500">{a.county}</span>
          </nav>

          <div className="mt-10 flex gap-6 lg:gap-8">
            <span
              className="mt-2 block h-[70px] w-[10px] shrink-0 bg-primary-500 lg:h-[120px] lg:w-[18px]"
              style={{ transform: "skewX(-14deg)" }}
              aria-hidden="true"
            />
            <h1 className="max-w-[880px] text-[30px] font-extrabold leading-[1.1] text-white lg:text-[52px]">
              {a.h1}
            </h1>
          </div>

          <p className="mt-8 max-w-[720px] text-[17px] leading-8 text-gray-300 lg:text-[18px]">{a.lead}</p>

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

        <div className="relative border-t border-white/15">
          <dl className="mx-auto grid max-w-[1140px] grid-cols-2 px-4 lg:grid-cols-4">
            {[
              { v: String(a.towns.length), l: `Towns listed across ${a.county}` },
              { v: "24/7", l: "Phone answered, every day" },
              { v: `${site.reviews.rating.toFixed(1)} ★`, l: `Rating on ${site.reviews.source}` },
              { v: "3", l: "Markets: agricultural, commercial, industrial" },
            ].map((f, i) => (
              <div
                key={f.l}
                className={[
                  "py-7 lg:py-8",
                  i < 2 ? "border-b border-white/15 lg:border-b-0" : "",
                  i % 2 === 0 ? "border-r border-white/15" : "",
                  i % 2 === 1 ? "pl-6 lg:border-r lg:border-white/15" : "",
                  i === 3 ? "lg:border-r-0" : "",
                  i > 0 ? "lg:pl-8" : "",
                ].filter(Boolean).join(" ")}
              >
                <dt className="text-[26px] font-extrabold leading-none text-primary-500 lg:text-[32px]">{f.v}</dt>
                <dd className="mt-3 max-w-[200px] text-[13px] leading-5 text-gray-400">{f.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Города ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <GridLines className="-right-24 top-10 hidden h-[420px] w-[540px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label="Towns we work in" />
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[640px] text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
              Where the work is across {a.county}
            </h2>
            <p className="max-w-[420px] text-[15px] leading-7 text-ink-500">{a.drive}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            <Reveal anim="slide-in-left">
              <ul>
                {a.towns.map((t, i) => {
                  // Не у каждого города есть своя страница: Майерстаун закрывает главная.
                  const page = townByName(a.slug, t.name);
                  return (
                    <li
                      key={t.name}
                      className="rise group flex gap-6 border-t border-paper-300 py-5 last:border-b"
                      style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                    >
                      <span className="mt-1 text-[13px] font-bold text-primary-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[18px] font-bold leading-6 text-ink-900 transition-colors group-hover:text-primary-500 lg:text-[19px]">
                          {page ? (
                            <Link href={`/service-area/${a.slug}/${page.slug}`}>
                              {t.name}
                              <span className="ml-2 inline-block text-[13px] font-bold text-primary-500 transition-transform group-hover:translate-x-1">
                                →
                              </span>
                            </Link>
                          ) : (
                            t.name
                          )}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-gray-700">{t.note}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            {townsPhoto && (
              <Reveal anim="slide-in-right">
                <div className="left-shadow">
                  <Photo
                    src={townsPhoto.src}
                    alt={townsPhoto.alt}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="aspect-[3/4] w-full"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── Чем этот округ отличается ─────────────────────────────── */}
      {a.sections.map((sec, i) => {
        const photo = pick(i);
        const flip = i % 2 === 1;
        const paper = i % 2 === 0;

        return (
          <section
            key={sec.heading}
            className={`relative overflow-hidden py-14 lg:py-20 ${paper ? "bg-paper-100" : "bg-white"}`}
          >
            {paper && <DiagonalWash from="#ffffff" clip="polygon(0 0, 42% 0, 0 100%)" />}
            <div className="relative mx-auto max-w-[1140px] px-4">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? "lg:order-2" : ""}>
                  <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
                    {sec.heading}
                  </h2>
                  {sec.body.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-5 text-[16px] leading-8 text-gray-700 lg:text-[17px]">
                      <RichText text={p} />
                    </p>
                  ))}
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

      {/* ── Что здесь заказывают ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-24">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <DotDiamonds className="right-0 top-20 h-[280px] w-[760px]" color="#454c5e" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label="What we are called for" tone="dark" />
          <h2 className="mt-7 max-w-[720px] text-[26px] font-extrabold leading-tight text-white lg:text-[36px]">
            The work {a.county} asks us for most
          </h2>

          <Reveal anim="fade-in" className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {a.demand.map((d, i) => {
              const svc = serviceMap[d.service];
              const Icon = ServiceIcon[DEMAND_ICONS[i % DEMAND_ICONS.length]];
              if (!svc) return null;
              return (
                <Link
                  key={d.title}
                  href={`/${svc.slug}`}
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
                  <h3 className="relative mt-5 text-[18px] font-bold leading-6 text-white group-hover:text-primary-500">
                    {d.title}
                  </h3>
                  <p className="relative mt-4 text-[15px] leading-7 text-gray-400">{d.body}</p>
                  <span className="relative mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                    {svc.kind === "market" ? "See the market" : "See the service"}
                    <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Объекты ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <DiagonalTiles className="-left-16 top-10 hidden h-[420px] w-[420px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
            <div>
              <GhostHeading ghost="Sites" heading="What we work on" />
              <p className="mt-8 text-[16px] leading-8 text-gray-700 lg:text-[17px]">
                The {a.facilities.length} kinds of building we are inside most often across{" "}
                {a.county}. If yours is not one of them, it is still worth a call: the question
                is what the building has to run, not what it is called.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-8 !py-4 !text-[15px]">
                  Call {site.phone}
                </a>
                <Link href="/services" className="btn btn_outline !px-8 !py-4 !text-[15px]">
                  All services
                </Link>
              </div>
            </div>

            <Reveal anim="fade-in" className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {a.facilities.map((f, i) => (
                <div
                  key={f}
                  className="rise group flex items-center gap-5 border-t border-paper-300 py-6"
                  style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                >
                  <span className="text-[13px] font-bold text-primary-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] font-bold leading-6 text-ink-900 transition-colors group-hover:text-primary-500">
                    {f}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Работы поблизости ─────────────────────────────────────── */}
      {projects.length > 0 && (
        <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
          <DotDiamonds className="right-0 top-16 h-[240px] w-[680px]" color="#d7d7d7" />
          <div className="relative mx-auto max-w-[1140px] px-4">
            <div className="mb-12">
              <GhostHeading ghost="Projects" heading="Work of this kind" tone="gray" />
            </div>

            <Carousel label={`Projects relevant to ${a.county}`} autoplay>
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
                </Link>
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {/* ── Вопросы ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Questions" heading={`Working in ${a.county}`} />
          <FaqAccordion items={a.faq} className="mt-12 max-w-[880px]" />
        </div>
      </section>

      {/* ── Соседние округа и чтение ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-20">
        <DiagonalWash from="#ffffff" clip="polygon(55% 0, 100% 0, 100% 100%)" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Rail label="Next county over" />
              <Reveal anim="fade-in" as="span" className="mt-8 block">
                <ul>
                  {neighbours.map((nb, i) => (
                    <li
                      key={nb.slug}
                      className="rise"
                      style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                    >
                      <Link
                        href={`/service-area/${nb.slug}`}
                        className="group flex items-start gap-4 border-t border-paper-300 py-5 first:border-t-0 first:pt-0"
                      >
                        <SlashBullet className="mt-1" />
                        <span className="text-[16px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                          Electrical service across {nb.county}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div className="mt-8 border-t border-paper-300 pt-8">
                <Link
                  href="/service-area"
                  className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
                >
                  The whole service area
                  <Chevron className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {articles.length > 0 && (
              <div>
                <Rail label="Worth reading" />
                <Reveal anim="fade-in" as="span" className="mt-8 block">
                  <ul>
                    {articles.map((x, i) => (
                      <li
                        key={x.slug}
                        className="rise border-t border-paper-300 py-5 first:border-t-0 first:pt-0"
                        style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                      >
                        <Link href={`/blog/${x.slug}`} className="group block">
                          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                            {x.category}
                          </p>
                          <h3 className="mt-2 text-[17px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                            {x.title}
                          </h3>
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
        {closingPhoto && (
          <div className="absolute inset-0 opacity-25" aria-hidden="true">
            <Image src={closingPhoto.src} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        )}
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-[1140px] flex-col items-start gap-10 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-[660px]">
            <h2 className="text-[28px] font-extrabold leading-tight text-white lg:text-[38px]">
              Tell us what the building has to run
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-gray-300">
              Describe the job and where in {a.county} it is. Anatoly runs the crew and usually
              answers the phone himself, and if somebody closer would serve you better on that
              particular job, he will say so.
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
