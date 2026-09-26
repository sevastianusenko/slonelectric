import type { Metadata } from "next";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import Photo from "@/components/Photo";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { SlashBullet } from "@/components/Logo";
import { GridLines, DotDiamonds, DiagonalWash } from "@/components/Patterns";
import { site, servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Electrical Services | Slon Electric, Myerstown PA",
  description:
    "Agricultural, commercial and industrial electrical work across Lebanon, Lancaster and Berks counties: generators, service upgrades, lighting and controls.",
  alternates: { canonical: "/services" },
};

/** Линейка с подписью: тот же приём, что и на главной под каруселью. */
function Rail({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="block h-5 w-[4px] shrink-0 bg-primary-500"
        style={{ transform: "skewX(-14deg)" }}
        aria-hidden="true"
      />
      <h2 className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
        {label}
      </h2>
      <span className="line-draw h-px w-full bg-paper-300" aria-hidden="true" />
    </div>
  );
}

export default function ServicesIndex() {
  const p = servicesPage;

  return (
    <>
      {/* Вступление */}
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[440px] w-[560px] lg:block" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost={p.ghost} heading={p.label} as="p" />

          <h1 className="mt-8 max-w-[880px] text-[30px] font-extrabold leading-[1.15] text-ink-900 lg:text-[46px]">
            {p.h1}
          </h1>

          {p.lead.map((t) => (
            <p key={t.slice(0, 24)} className="mt-6 max-w-[760px] text-[17px] leading-8 text-gray-700 lg:text-[18px]">
              {t}
            </p>
          ))}

          <div className="mt-9 flex flex-wrap items-center gap-5 pb-4">
            <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-8 !py-4 !text-[15px]">
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
        </div>
      </section>

      {/* Ставки: чем оборачивается остановка */}
      <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-24">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <DotDiamonds className="right-0 top-16 h-[240px] w-[700px]" color="#4a5266" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <Reveal anim="fade-in">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
              {p.stakes.overline}
            </p>
            <h2 className="mt-5 max-w-[820px] text-[26px] font-extrabold leading-[1.2] text-white lg:text-[38px]">
              {p.stakes.heading}
            </h2>
            <p className="mt-6 max-w-[720px] text-[17px] leading-8 text-gray-300">{p.stakes.intro}</p>

            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              {p.stakes.items.map((s, i) => (
                <div
                  key={s.title}
                  className="rise border-t border-white/15 pt-6"
                  style={{ "--d": `${150 + i * 110}ms` } as React.CSSProperties}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] font-bold text-primary-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[19px] font-bold leading-6 text-white lg:text-[21px]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-gray-300">{s.body}</p>
                </div>
              ))}
            </div>

            <p
              className="rise mt-14 max-w-[760px] border-l-[5px] border-primary-500 pl-6 text-[18px] font-bold leading-8 text-white lg:text-[20px]"
              style={{ "--d": "620ms" } as React.CSSProperties}
            >
              {p.stakes.close}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Три рынка */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label={p.markets.overline} />
          <h2 className="mt-8 text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[30px]">
            {p.markets.heading}
          </h2>
          <p className="mt-4 max-w-[640px] text-[16px] leading-7 text-gray-700">{p.markets.intro}</p>

          <Reveal anim="fade-in" className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
            {p.markets.items.map((m, i) => (
              <ServiceCard key={m.slug} {...m} tall priority={i === 0} index={i} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Восемь услуг */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-20">
        <DiagonalWash from="#ffffff" />
        <DotDiamonds className="right-0 top-10 h-[220px] w-[640px]" color="#d7d7d7" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label={p.work.overline} />
          <h2 className="mt-8 text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[30px]">
            {p.work.heading}
          </h2>
          <p className="mt-4 max-w-[640px] text-[16px] leading-7 text-gray-700">{p.work.intro}</p>

          <Reveal anim="fade-in" className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {p.work.items.map((w, i) => (
              <ServiceCard key={w.slug} {...w} index={i} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Порядок работы: от закупки до настройки */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <Rail label={p.process.overline} />

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr] lg:gap-16">
            <Reveal anim="slide-in-left">
              <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[30px]">
                {p.process.heading}
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-gray-700">{p.process.intro}</p>

              <div className="left-shadow mt-10 hidden lg:block">
                <Photo {...p.process.photo} sizes="380px" className="aspect-[3/4] w-full" />
              </div>
            </Reveal>

            <Reveal anim="slide-in-right">
              <ol>
                {p.process.steps.map((s, i) => (
                  <li
                    key={s.title}
                    className="rise flex gap-6 border-t border-paper-300 py-6 first:border-t-0 first:pt-0"
                    style={{ "--d": `${120 + i * 90}ms` } as React.CSSProperties}
                  >
                    <span className="mt-1 text-[13px] font-bold text-primary-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-bold leading-6 text-ink-900 lg:text-[19px]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[16px] leading-7 text-gray-700">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Куда звонить */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-20">
        <DiagonalWash from="#ffffff" clip="polygon(0 0, 55% 0, 0 100%)" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <Reveal anim="fade-in">
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[640px]">
                <h2 className="text-[26px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
                  {p.cta.heading}
                </h2>
                <p className="mt-5 text-[17px] leading-8 text-gray-700">{p.cta.body}</p>

                <ul className="mt-7 flex flex-wrap gap-x-10 gap-y-3">
                  {[
                    `${site.address.city}, ${site.address.state}`,
                    "Lebanon, Lancaster and Berks",
                    site.hours,
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[14px] font-bold text-ink-900">
                      <SlashBullet />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-col gap-4">
                <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-9 !py-4 !text-[15px]">
                  Call {site.phone}
                </a>
                <Link href={p.cta.secondary.href} className="btn btn_outline !px-9 !py-4 !text-[15px]">
                  {p.cta.secondary.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
