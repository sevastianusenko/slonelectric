import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Photo from "../Photo";
import Reveal from "../Reveal";
import ShadowPlate from "../ShadowPlate";
import { GridLines } from "../Patterns";
import { about, site } from "@/lib/content";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <GridLines className="-left-24 top-16 hidden h-[500px] w-[600px] lg:block" />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal anim="slide-in-left" className="order-2 lg:order-1">
            <ShadowPlate className="max-w-[460px]">
              <Photo {...about.photo} className="aspect-[3/4] w-full" />
            </ShadowPlate>
          </Reveal>

          <Reveal anim="slide-in-right" className="order-1 lg:order-2">
            <GhostHeading ghost={about.ghost} heading={about.heading} />

            <div className="mt-8 space-y-5">
              {about.body.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[540px] text-[17px] leading-7 text-gray-700">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href={about.cta.href} className="btn btn_solid">
                {about.cta.label}
              </Link>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener"
                className="text-[15px] font-bold text-ink-900 hover:text-primary-500"
              >
                <span className="text-primary-500">{site.reviews.rating.toFixed(1)}</span>
                {" ★ "}
                on {site.reviews.source}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
