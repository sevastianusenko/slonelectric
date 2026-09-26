import Link from "next/link";
import GhostHeading from "./GhostHeading";
import { SlashBullet } from "./Logo";
import { GridLines } from "./Patterns";
import type { LegalPage as Legal } from "@/content/legal";
import { site } from "@/lib/content";

/** Один макет на обе юридические страницы: они отличаются только текстом. */
export default function LegalPage({ page }: { page: Legal }) {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[420px] w-[540px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Legal" heading={page.h1} as="h1" width="wide" />
          <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-gray-700 lg:text-[18px]">
            {page.lead}
          </p>
          <p className="mt-6 text-[13px] uppercase tracking-[0.12em] text-ink-500">
            Last updated {page.updated}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="max-w-[760px]">
            {page.sections.map((s) => (
              <div key={s.heading} className="mt-12 first:mt-0">
                <h2 className="text-[22px] font-extrabold leading-tight text-ink-900 lg:text-[26px]">
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-5 text-[17px] leading-8 text-gray-700">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-4 text-[16px] leading-7 text-gray-700">
                        <SlashBullet className="mt-1 !h-5 !w-[4px]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-900 py-14 lg:py-16">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-[24px] font-extrabold leading-tight text-white lg:text-[30px]">
              Questions about any of this?
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-gray-300">
              {site.legal}, {site.address.street}, {site.address.city}, {site.address.state}{" "}
              {site.address.zip}. The phone is the quickest way to get an answer.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4">
            <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-8 !py-4 !text-[15px]">
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="btn !border !border-white/30 !bg-transparent !px-8 !py-4 !text-[15px] !text-white hover:!bg-white/10"
            >
              Contact details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
