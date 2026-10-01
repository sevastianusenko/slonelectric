import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import RichText from "@/components/RichText";
import GhostHeading from "@/components/GhostHeading";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { SlashBullet } from "@/components/Logo";
import { ServiceIcon, Chevron } from "@/components/Icons";
import { GridLines, DotDiamonds, DiagonalWash } from "@/components/Patterns";
import { townList, townMap } from "@/content/towns";
import { areaMap } from "@/content/areas";
import { serviceMap } from "@/content/services";
import { projectMap } from "@/content/projects";
import { articleMap } from "@/content/blog";
import { site } from "@/lib/content";
import { trimSegments } from "@/lib/meta";

/** Только известные города. Всё остальное под округом отдаёт 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return townList.map((t) => ({ county: t.county, town: t.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ county: string; town: string }> }): Promise<Metadata> {
  const { town } = await params;
  const t = townMap[town];
  if (!t) return {};
  return {
    title: trimSegments(t.title),
    description: t.summary,
    alternates: { canonical: `/service-area/${t.county}/${t.slug}` },
    openGraph: { type: "website", title: t.title, description: t.summary, images: [t.hero.src] },
  };
}

const ICONS = ["panel", "switch", "meter", "grid", "audit", "tower"] as const;

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

export default async function TownPage({
  params,
}: { params: Promise<{ county: string; town: string }> }) {
  const { county, town } = await params;
  const t = townMap[town];
  if (!t || t.county !== county) notFound();

  const area = areaMap[t.county];
  const projects = t.related.projects.map((p) => projectMap[p]).filter(Boolean);
  const articles = t.related.articles.map((a) => articleMap[a]).filter(Boolean);
  const nearby = t.nearby.map((n) => townMap[n]).filter(Boolean);

  /**
   * У города своё только hero-фото, поэтому иллюстрации к разделам берём
   * из связанных проектов: это реальные наши работы, а не подбор под текст.
   * Берём второй кадр проекта — первый уходит в карточки ниже на этой же
   * странице, и одинаковое фото дважды выглядит как ошибка вёрстки.
   */
  const photoPool = projects.map((p) => p.photos[1] ?? p.photos[0]).filter(Boolean);
  const sectionPhoto = (i: number) =>
    photoPool.length ? photoPool[i % photoPool.length] : undefined;

  /**
   * areaServed это город, а не адрес компании: страница отвечает на вопрос
   * «вы работаете у нас». @id тот же, что у разметки в макете, чтобы это
   * была одна компания, а не вторая.
   */
  const schema = {
    "@context": "https://schema.org",
    "@id": `https://${site.domain}/#business`,
    // Electrician, не ElectricalContractor — см. комментарий в Schema.tsx.
    "@type": "Electrician",
    name: site.name,
    areaServed: {
      "@type": "City",
      name: `${t.town}, Pennsylvania`,
      containedInPlace: { "@type": "AdministrativeArea", name: `${area?.county}, Pennsylvania` },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Service area", item: `https://${site.domain}/service-area` },
      { "@type": "ListItem", position: 2, name: area?.county, item: `https://${site.domain}/service-area/${t.county}` },
      { "@type": "ListItem", position: 3, name: t.town },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Герой ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={t.hero.src} alt="" fill priority sizes="100vw" className="object-cover" />
          <span className="absolute inset-0 bg-ink-900/55" />
          <span className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/20" />
        </div>
        <DotDiamonds className="right-0 top-0 hidden h-[240px] w-[640px] opacity-40 lg:block" color="#7c8598" />

        <div className="relative mx-auto max-w-[1140px] px-4 pb-14 pt-12 lg:pb-20 lg:pt-16">
          <nav className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-white/60">
            <Link href="/service-area" className="hover:text-primary-500">Service area</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/service-area/${t.county}`} className="hover:text-primary-500">
              {area?.county}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary-500">{t.town}</span>
          </nav>

          <div className="mt-8 flex gap-6 lg:gap-8">
            <span
              className="mt-2 block h-[60px] w-[10px] shrink-0 bg-primary-500 lg:h-[96px] lg:w-[16px]"
              style={{ transform: "skewX(-14deg)" }}
              aria-hidden="true"
            />
            <h1 className="max-w-[860px] text-[28px] font-extrabold leading-[1.1] text-white lg:text-[46px]">
              {t.h1}
            </h1>
          </div>

          <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-gray-300">{t.lead}</p>
          <p className="mt-5 flex items-start gap-3 text-[15px] leading-7 text-white">
            <SlashBullet className="mt-1 !h-5 !w-[4px]" />
            {t.drive}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
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

      {/* ── Чем работа здесь отличается ───────────────────────────── */}
      {t.sections.map((sec, i) => {
        const photo = sectionPhoto(i);
        // Чётные разделы: фото справа. Нечётные: слева, чтобы полоса не шла в одну колонну.
        const photoRight = i % 2 === 0;
        return (
          <section
            key={sec.heading}
            className={`relative overflow-hidden py-14 lg:py-18 ${i % 2 === 0 ? "bg-white" : "bg-paper-100"}`}
          >
            {i === 0 && <GridLines className="-right-24 top-8 hidden h-[380px] w-[500px] lg:block" />}
            {i % 2 === 1 && <DiagonalWash from="#ffffff" clip="polygon(0 0, 42% 0, 0 100%)" />}
            <div className="relative mx-auto max-w-[1140px] px-4">
              <div
                className={`grid grid-cols-1 items-start gap-10 ${
                  photo ? "lg:grid-cols-[1fr_440px] lg:gap-16" : ""
                }`}
              >
                <div className={photoRight ? "" : "lg:order-2"}>
                  <h2 className="text-[23px] font-extrabold leading-tight text-ink-900 lg:text-[30px]">
                    {sec.heading}
                  </h2>
                  {sec.body.map((p) => (
                    <p
                      key={p.slice(0, 32)}
                      className="mt-5 text-[16px] leading-8 text-gray-700 lg:text-[17px]"
                    >
                      <RichText text={p} />
                    </p>
                  ))}
                </div>

                {photo && (
                  <Reveal
                    anim={photoRight ? "slide-in-right" : "slide-in-left"}
                    className={photoRight ? "" : "lg:order-1"}
                  >
                    <div className="lg:mt-2">
                      <Photo
                        src={photo.src}
                        alt={photo.alt}
                        sizes="(max-width: 1024px) 92vw, 440px"
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

      {/* ── Ориентиры ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-18">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label={`Around ${t.town}`} />
          <Reveal anim="fade-in" className="mt-9 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.landmarks.map((l, i) => (
              <div
                key={l}
                className="rise flex items-center gap-4 border-t border-paper-300 py-5"
                style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
              >
                <span className="text-[13px] font-bold text-primary-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] font-bold leading-6 text-ink-900">{l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Что здесь заказывают ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 py-14 lg:py-20">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <DotDiamonds className="right-0 top-16 h-[260px] w-[720px]" color="#454c5e" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label="What we are called for" tone="dark" />
          <h2 className="mt-7 max-w-[720px] text-[24px] font-extrabold leading-tight text-white lg:text-[32px]">
            The work {t.town} asks us for
          </h2>

          <Reveal anim="fade-in" className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {t.demand.map((d, i) => {
              const svc = serviceMap[d.service];
              const Icon = ServiceIcon[ICONS[i % ICONS.length]];
              if (!svc) return null;
              return (
                <Link
                  key={d.title}
                  href={`/${svc.slug}`}
                  className="rise group relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-primary-500/60 hover:bg-white/[0.07]"
                  style={{ "--d": `${100 + i * 70}ms` } as React.CSSProperties}
                >
                  <Icon
                    className="absolute -bottom-6 -right-6 h-28 w-28 text-white/[0.06] transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span
                    className="relative block h-6 w-[5px] bg-primary-500"
                    style={{ transform: "skewX(-14deg)" }}
                    aria-hidden="true"
                  />
                  <h3 className="relative mt-4 text-[17px] font-bold leading-6 text-white group-hover:text-primary-500">
                    {d.title}
                  </h3>
                  <p className="relative mt-3 text-[14px] leading-6 text-gray-400">{d.body}</p>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Работы по теме ────────────────────────────────────────── */}
      {projects.length > 0 && (
        <section className="relative overflow-hidden bg-paper-100 py-14 lg:py-20">
          <div className="relative mx-auto max-w-[1140px] px-4">
            <GhostHeading ghost="Projects" heading="Work of this kind" tone="gray" />
            <Reveal anim="fade-in" className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="rise group block"
                  style={{ "--d": `${100 + i * 70}ms` } as React.CSSProperties}
                >
                  <Photo
                    src={p.photos[0].src}
                    alt={p.photos[0].alt}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 260px"
                    className="aspect-[3/2] w-full"
                  />
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-[16px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Вопросы ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Questions" heading={`Working in ${t.town}`} />
          <FaqAccordion items={t.faq} className="mt-11 max-w-[880px]" />
        </div>
      </section>

      {/* ── Рядом и почитать ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-14 lg:py-18">
        <DiagonalWash from="#ffffff" clip="polygon(55% 0, 100% 0, 100% 100%)" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Rail label="Nearby" />
              <Reveal anim="fade-in" as="span" className="mt-8 block">
                <ul>
                  {nearby.map((n, i) => (
                    <li key={n.slug} className="rise" style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}>
                      <Link
                        href={`/service-area/${n.county}/${n.slug}`}
                        className="group flex items-center gap-4 border-t border-paper-300 py-4 first:border-t-0 first:pt-0"
                      >
                        <SlashBullet className="!h-5 !w-[4px]" />
                        <span className="text-[16px] font-bold text-ink-900 group-hover:text-primary-500">
                          Electrician in {n.town}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div className="mt-7 border-t border-paper-300 pt-6">
                <Link
                  href={`/service-area/${t.county}`}
                  className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
                >
                  All of {area?.county}
                  <Chevron className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {articles.length > 0 && (
              <div>
                <Rail label="Worth reading" />
                <Reveal anim="fade-in" as="span" className="mt-8 block">
                  <ul>
                    {articles.map((a, i) => (
                      <li
                        key={a.slug}
                        className="rise border-t border-paper-300 py-4 first:border-t-0 first:pt-0"
                        style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                      >
                        <Link href={`/blog/${a.slug}`} className="group block">
                          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                            {a.category}
                          </p>
                          <h3 className="mt-2 text-[16px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                            {a.title}
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
      <section className="relative overflow-hidden bg-ink-900 py-12 lg:py-16">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-[24px] font-extrabold leading-tight text-white lg:text-[30px]">
              Tell us what the building has to run
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-gray-300">
              Describe the job and where in {t.town} it is. If somebody closer would serve you
              better on that particular job, we will say so.
            </p>
          </div>
          <a href={`tel:${site.phoneHref}`} className="btn btn_solid shrink-0 !px-9 !py-4 !text-[15px]">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
