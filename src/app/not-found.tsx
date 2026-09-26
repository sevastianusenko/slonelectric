import type { Metadata } from "next";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import { SlashBullet } from "@/components/Logo";
import { Chevron } from "@/components/Icons";
import { GridLines, DotDiamonds } from "@/components/Patterns";
import { serviceList } from "@/content/services";
import { areaList } from "@/content/areas";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found | Slon Electric",
  robots: { index: false, follow: true },
};

/**
 * 404 должна работать, а не извиняться: человек попал сюда по битой ссылке,
 * и ему нужен путь дальше, а не пустой экран с цифрой.
 */
export default function NotFound() {
  const markets = serviceList.filter((s) => s.kind === "market");
  const services = serviceList.filter((s) => s.kind === "service").slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[420px] w-[540px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="404" heading="This page is not here" as="h1" width="wide" />
          <p className="mt-8 max-w-[680px] text-[17px] leading-8 text-gray-700 lg:text-[18px]">
            The address does not match anything on this site. Either it has moved, or something in
            the link got mangled on the way. Below is everything the site actually has.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-8 !py-4 !text-[15px]">
              Call {site.phone}
            </a>
            <Link href="/" className="btn btn_outline !px-8 !py-4 !text-[15px]">
              Back to the front page
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-100 py-14 lg:py-20">
        <DotDiamonds className="right-0 top-10 h-[220px] w-[640px]" color="#d7d7d7" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                Markets
              </p>
              <ul className="mt-6 space-y-4">
                {markets.map((m) => (
                  <li key={m.slug}>
                    <Link href={`/${m.slug}`} className="group flex items-start gap-3">
                      <SlashBullet className="mt-1 !h-5 !w-[4px]" />
                      <span className="text-[15px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                        {m.h1.split(/ for | across /)[0]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                Services
              </p>
              <ul className="mt-6 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="text-[15px] leading-6 text-gray-700 hover:text-primary-500"
                    >
                      {s.h1.split(/ for | across |, /)[0]}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
                  >
                    All services
                    <Chevron className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                Counties
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
                {areaList.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/service-area/${a.slug}`}
                      className="text-[15px] leading-6 text-gray-700 hover:text-primary-500"
                    >
                      {a.county}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper-300 pt-8">
            {[
              { label: "Our projects", href: "/projects" },
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[14px] font-bold uppercase tracking-[0.06em] text-ink-900 hover:text-primary-500"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
