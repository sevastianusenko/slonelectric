import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Reveal from "../Reveal";
import { Chevron } from "../Icons";
import { DiagonalTiles, DotDiamonds } from "../Patterns";
import { areaList } from "@/content/areas";
import { serviceArea, site } from "@/lib/content";

/**
 * Восемь округов с главной. Раньше здесь был текст про три округа и список
 * городов без единой ссылки: страницы округов не получали с главной ничего.
 * Список берём из `content/areas`, чтобы он не разъезжался со страницами.
 */
export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <DiagonalTiles className="-left-24 top-4 hidden h-[360px] w-[360px] lg:block" />
      <DotDiamonds className="right-0 top-8 hidden h-[200px] w-[560px] lg:block" color="#ededed" />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <GhostHeading ghost={serviceArea.ghost} heading={serviceArea.heading} />
          <p className="max-w-[520px] text-[16px] leading-7 text-gray-700">{serviceArea.intro}</p>
        </div>

        <Reveal anim="fade-in" className="mt-14 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {areaList.map((a, i) => (
            <Link
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="rise group flex flex-col border-t-2 border-primary-500 pt-5"
              style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}
            >
              <span className="text-[12px] font-bold tracking-[0.1em] text-primary-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[18px] font-bold leading-6 text-ink-900 transition-colors group-hover:text-primary-500">
                {a.county}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-gray-700">
                {a.towns.slice(0, 3).map((t) => t.name).join(", ")}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500">
                See the county
                <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Reveal>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-paper-300 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[620px] text-[15px] leading-6 text-ink-500">
            {serviceArea.note}{" "}
            <a href={`tel:${site.phoneHref}`} className="font-bold text-primary-500 hover:underline">
              {site.phone}
            </a>
          </p>
          <Link href={serviceArea.cta.href} className="btn btn_outline shrink-0 !px-8 !py-4 !text-[14px]">
            {serviceArea.cta.label}
            <Chevron className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
