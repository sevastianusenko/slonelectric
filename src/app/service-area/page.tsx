import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import Reveal from "@/components/Reveal";
import { SlashBullet } from "@/components/Logo";
import { Chevron } from "@/components/Icons";
import { GridLines, DotDiamonds, DiagonalWash } from "@/components/Patterns";
import { areaList } from "@/content/areas";
import { townsByCounty } from "@/content/towns";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service Area | Eight Pennsylvania Counties | Slon Electric",
  description:
    "Where we provide electrical service: Lebanon, Lancaster, Berks, Dauphin, Schuylkill, Cumberland, York and Chester counties in Pennsylvania.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  const towns = areaList.flatMap((a) => a.towns.length);
  const townCount = towns.reduce((n, t) => n + t, 0);

  /**
   * Округа, у которых есть городские страницы. Пока это Ланкастер и Лебанон;
   * список собирается сам, поэтому новый округ с городами появится здесь
   * без правки разметки.
   */
  const townCounties = areaList
    .map((area) => ({ area, towns: townsByCounty(area.slug) }))
    .filter((g) => g.towns.length > 0);

  const schema = {
    "@context": "https://schema.org",
    /** Тот же @id, что у разметки в макете: это одна компания, а не вторая. */
    "@id": `https://${site.domain}/#business`,
    // Electrician, не ElectricalContractor — см. комментарий в Schema.tsx.
    "@type": "Electrician",
    name: site.name,
    areaServed: areaList.map((a) => ({
      "@type": "AdministrativeArea",
      name: `${a.county}, Pennsylvania`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Герой ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/photos/hero-dairy-barn.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-ink-900/55" />
          <span className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/20" />
        </div>
        <DotDiamonds className="right-0 top-0 hidden h-[260px] w-[680px] opacity-40 lg:block" color="#7c8598" />

        <div className="relative mx-auto max-w-[1140px] px-4 pb-16 pt-12 lg:pb-24 lg:pt-20">
          <div className="flex gap-6 lg:gap-8">
            <span
              className="mt-2 block h-[70px] w-[10px] shrink-0 bg-primary-500 lg:h-[120px] lg:w-[18px]"
              style={{ transform: "skewX(-14deg)" }}
              aria-hidden="true"
            />
            <h1 className="max-w-[880px] text-[30px] font-extrabold leading-[1.1] text-white lg:text-[52px]">
              Where we provide electrical service
            </h1>
          </div>

          <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-gray-300 lg:text-[18px]">
            Eight counties across south central Pennsylvania, on farms, in plants and in commercial
            buildings. The counties nearest us get same day service calls. The further ones get
            planned work, and we would rather say which is which than take a job we cannot reach
            in time.
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

        <div className="relative border-t border-white/15">
          <dl className="mx-auto grid max-w-[1140px] grid-cols-2 px-4 lg:grid-cols-4">
            {[
              { v: String(areaList.length), l: "Counties we provide service in" },
              { v: String(townCount), l: "Towns named across those counties" },
              { v: "24/7", l: "Phone answered, every day" },
              { v: `${site.reviews.rating.toFixed(1)} ★`, l: `Rating on ${site.reviews.source}` },
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

      {/* ── Восемь округов ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        {/* паттерн держим выше карточек, иначе он просвечивает за текстом */}
        <GridLines className="-right-24 top-4 hidden h-[240px] w-[420px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Counties" heading="The eight we cover" />

          <Reveal anim="fade-in" className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {areaList.map((a, i) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className="rise group flex flex-col border-t-2 border-primary-500 pt-5"
                style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
              >
                <p className="text-[12px] font-bold tracking-[0.1em] text-primary-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-[19px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                  {a.county}
                </h2>
                <p className="mt-3 text-[14px] leading-6 text-ink-500">{a.drive}</p>
                <p className="mt-4 text-[14px] leading-6 text-gray-700">
                  {a.towns.slice(0, 4).map((t) => t.name).join(", ")} and more
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                  See the county
                  <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Города с отдельными страницами ────────────────────────── */}
      {townCounties.length > 0 && (
        <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
          <DotDiamonds className="-left-16 bottom-8 hidden h-[200px] w-[200px] lg:block" />
          <div className="relative mx-auto max-w-[1140px] px-4">
            <GhostHeading ghost="Towns" heading="The ones we are asked about most" width="wide" />
            <p className="mt-8 max-w-[560px] text-[15px] leading-7 text-ink-500">
              What the work actually looks like in each one, and how long it takes us to get there.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
              {townCounties.map(({ area, towns }) => (
                <Reveal key={area.slug} anim="fade-in">
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary-500">
                    {area.county}
                  </p>
                  <ul className="mt-5">
                    {towns.map((t, i) => (
                      <li
                        key={t.slug}
                        className="rise border-t border-paper-300 last:border-b"
                        style={{ "--d": `${80 + i * 50}ms` } as React.CSSProperties}
                      >
                        <Link
                          href={`/service-area/${t.county}/${t.slug}`}
                          className="group flex items-baseline justify-between gap-4 py-4"
                        >
                          <span className="text-[17px] font-bold leading-6 text-ink-900 transition-colors group-hover:text-primary-500">
                            {t.town}
                          </span>
                          <Chevron className="h-3.5 w-3.5 shrink-0 text-primary-500 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Как это работает на практике ──────────────────────────── */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
        <DiagonalWash from="#ffffff" clip="polygon(0 0, 42% 0, 0 100%)" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
                Distance changes the answer, so we say so
              </h2>
              <p className="mt-6 text-[16px] leading-8 text-gray-700 lg:text-[17px]">
                A ventilation failure twenty minutes away and the same failure an hour away are not
                the same call, and pretending otherwise helps nobody. In the counties closest to us
                a call in the morning usually means a truck the same day. Further out, planned work
                is what we do well: a shutdown window, a service rebuild, a generator, a controls
                job.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-gray-700 lg:text-[17px]">
                On a first emergency call at the far end of the map, somebody local will reach you
                sooner. We will tell you that on the phone rather than let you wait on our truck.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-extrabold leading-tight text-ink-900 lg:text-[32px]">
                What travels well, and what does not
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  "Planned work travels: service rebuilds, generators, lighting retrofits, controls and machine jobs.",
                  "Shutdown and outage work travels, because the window is booked and the material is staged beforehand.",
                  "Farm work travels, because there are not many crews who do it and the buildings are all over these counties.",
                  "Small fault calls do not travel well, and an hour of drive time does not make the repair any better.",
                  "Emergency work travels for customers we already know, because we know the building before we set off.",
                ].map((t) => (
                  <li key={t} className="flex gap-4 text-[16px] leading-7 text-gray-700">
                    <SlashBullet className="mt-1" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
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
              Not sure whether you are in range?
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-gray-300">
              Call and describe the building and the job. It is a short conversation and you get a
              straight answer rather than an optimistic one.
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
