import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Placeholder from "../Placeholder";
import Reveal from "../Reveal";
import { DiagonalTiles } from "../Patterns";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <DiagonalTiles className="-left-10 top-24 hidden h-[640px] w-[620px] lg:block" />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="mb-12 flex justify-end">
          <GhostHeading ghost={projects.ghost} heading={projects.heading} align="right" />
        </div>

        <Reveal anim="fade-in" className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((p) => (
            <Link key={p.title} href={p.href} className="group block">
              <Placeholder label={p.title} className="aspect-[242/158] w-full" />
              <div className="flex min-h-[86px] items-center bg-primary-500 px-5 py-4 transition-colors group-hover:bg-primary-600">
                <h3 className="text-[15px] font-bold leading-[1.4] text-white">{p.title}</h3>
              </div>
            </Link>
          ))}
        </Reveal>

        <div className="mt-12 flex justify-center lg:justify-end">
          <Link
            href={projects.cta.href}
            className="flex h-[86px] w-[86px] items-center justify-center rounded-full bg-white text-[11px] font-bold uppercase tracking-[0.08em] text-primary-500 shadow-[0_4px_18px_rgba(0,0,0,.12)] transition-transform hover:scale-105"
          >
            {projects.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
