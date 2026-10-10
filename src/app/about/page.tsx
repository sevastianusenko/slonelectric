import type { Metadata } from "next";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import { SlashBullet } from "@/components/Logo";
import { Chevron } from "@/components/Icons";
import { GridLines, DotDiamonds, DiagonalWash } from "@/components/Patterns";
import { projectList } from "@/content/projects";
import { site, aboutPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Slon Electric | Myerstown PA Electrical Contractor",
  description:
    "A family run electrical contractor in Myerstown PA, with a team that brings more than eighteen years of hands-on experience to agricultural, commercial and industrial work. Our mission, goal and how we work.",
  alternates: { canonical: "/about" },
};

/** Восемь разборов из всех: остальные на /projects. */
const SHOWN = 8;

function Rail({ label }: { label: string }) {
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
      <span className="line-draw h-px w-full bg-paper-300" aria-hidden="true" />
    </div>
  );
}

export default function AboutPage() {
  const a = aboutPage;
  const shown = projectList.slice(0, SHOWN);

  return (
    <>
      {/* ── Кто мы ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[440px] w-[560px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost={a.ghost} heading={a.heading} as="h1" />

          <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            <div>
              {a.lead.map((p) => (
                <p key={p.slice(0, 32)} className="mt-6 text-[17px] leading-8 text-gray-700 first:mt-0 lg:text-[18px]">
                  {p}
                </p>
              ))}

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-8 !py-4 !text-[15px]">
                  Call {site.phone}
                </a>
                <Link href="/contact" className="btn btn_outline !px-8 !py-4 !text-[15px]">
                  Send us the details
                </Link>
              </div>
            </div>

            <Reveal anim="slide-in-right">
              <div className="left-shadow">
                <Photo
                  {...a.photo}
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="aspect-[3/4] w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Миссия, цель, ценности ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-24">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <DotDiamonds className="right-0 top-20 h-[280px] w-[760px]" color="#454c5e" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
            {a.purpose.overline}
          </p>
          <h2 className="mt-5 max-w-[820px] text-[26px] font-extrabold leading-tight text-white lg:text-[36px]">
            {a.purpose.heading}
          </h2>

          <Reveal anim="fade-in" className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[a.purpose.mission, a.purpose.goal].map((b, i) => (
              <div
                key={b.title}
                className="rise border-l-[5px] border-primary-500 bg-white/[0.04] p-8"
                style={{ "--d": `${100 + i * 90}ms` } as React.CSSProperties}
              >
                <h3 className="text-[20px] font-extrabold leading-tight text-white lg:text-[24px]">
                  {b.title}
                </h3>
                <p className="mt-5 text-[16px] leading-8 text-gray-300">{b.body}</p>
              </div>
            ))}
          </Reveal>

          <div className="mt-16">
            <div className="flex items-center gap-4">
              <span
                className="block h-5 w-[4px] shrink-0 bg-primary-500"
                style={{ transform: "skewX(-14deg)" }}
                aria-hidden="true"
              />
              <h3 className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                What we hold to
              </h3>
              <span className="line-draw h-px w-full bg-white/20" aria-hidden="true" />
            </div>

            <Reveal anim="fade-in" className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {a.purpose.values.map((v, i) => (
                <div
                  key={v.title}
                  className="rise border-t border-white/15 pt-6"
                  style={{ "--d": `${100 + i * 70}ms` } as React.CSSProperties}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] font-bold text-primary-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-[17px] font-bold leading-6 text-white lg:text-[18px]">
                      {v.title}
                    </h4>
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-gray-400">{v.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── На чём специализируемся ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
                {a.focus.heading}
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-gray-700">{a.focus.body}</p>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
                >
                  Everything we do
                  <Chevron className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <Rail label={a.how.heading} />
              <Reveal anim="fade-in" as="span" className="mt-8 block">
                <ul>
                  {a.how.items.map((t, i) => (
                    <li
                      key={t}
                      className="rise flex gap-4 border-t border-paper-300 py-5 text-[16px] leading-7 text-gray-700 first:border-t-0 first:pt-0"
                      style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
                    >
                      <SlashBullet className="mt-1" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Цифры ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-14 lg:py-16">
        <DotDiamonds className="right-0 top-10 h-[200px] w-[620px]" color="#d7d7d7" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
            {a.facts.map((f) => (
              <div key={f.l} className="flex gap-4">
                <SlashBullet className="mt-2 !h-10 !w-[5px]" />
                <div>
                  <dt className="text-[34px] font-extrabold leading-none text-ink-900 lg:text-[40px]">{f.v}</dt>
                  <dd className="mt-3 max-w-[200px] text-[14px] leading-5 text-ink-500">{f.l}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-[13px] leading-6 text-ink-500">{a.factsNote}</p>
        </div>
      </section>

      {/* ── Наши работы ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <GhostHeading ghost={a.projects.ghost} heading={a.projects.heading} />
            <p className="max-w-[420px] text-[15px] leading-7 text-ink-500">{a.projects.intro}</p>
          </div>

          <div className="mt-12">
            <Carousel label="Projects" autoplay>
              {shown.map((p) => (
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

          <div className="mt-4 flex justify-center">
            <Link href="/projects" className="btn btn_outline !px-9 !py-4 !text-[14px]">
              All projects
              <Chevron className="ml-3 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Про блог ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-20">
        <DiagonalWash from="#ffffff" clip="polygon(0 0, 42% 0, 0 100%)" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="max-w-[820px]">
            <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[30px]">
              {a.blog.heading}
            </h2>
            {a.blog.body.map((p) => (
              <p key={p.slice(0, 32)} className="mt-5 text-[17px] leading-8 text-gray-700">
                {p}
              </p>
            ))}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
              >
                Read the blog
                <Chevron className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Звонок ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900 py-14 lg:py-16">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[660px]">
            <h2 className="text-[26px] font-extrabold leading-tight text-white lg:text-[32px]">
              Tell us what the building has to run
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-gray-300">
              Based in {site.address.city}, Pennsylvania. Working across Lebanon, Lancaster and
              Berks counties and the ones around them, {site.hours.toLowerCase()}.
            </p>
          </div>
          <a href={`tel:${site.phoneHref}`} className="btn btn_solid shrink-0 !px-8 !py-4 !text-[15px]">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
