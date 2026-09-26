import type { Metadata } from "next";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { DiagonalTiles } from "@/components/Patterns";
import { projectList } from "@/content/projects";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Projects | Farm, Plant & Commercial Electrical Work",
  description:
    "Poultry houses, dairy barns, grain systems, plants, warehouses and service upgrades across Lebanon, Lancaster and Berks counties. What the work involved and why it mattered.",
  alternates: { canonical: "/projects" },
};

const ORDER = [
  "Agricultural",
  "Industrial",
  "Commercial",
  "Service and panels",
  "Standby power",
  "Maintenance",
  "Emergency",
] as const;

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <DiagonalTiles className="-left-16 top-6 hidden h-[520px] w-[520px] lg:block" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Projects" heading="Our work" as="h1" />
          <p className="mt-8 max-w-[720px] text-[18px] leading-8 text-gray-700">
            Every job below is written up the way we would explain it on site: what the building had
            to run, why the work mattered, and where the same approach applies. Call{" "}
            <a href={`tel:${site.phoneHref}`} className="font-bold text-primary-500 hover:underline">
              {site.phone}
            </a>{" "}
            if any of it sounds like your building.
          </p>
        </div>
      </section>

      {ORDER.map((cat) => {
        const items = projectList.filter((p) => p.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="relative bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-[1140px] px-4">
              <div className="flex items-center gap-4">
                <span
                  className="block h-5 w-[4px] shrink-0 bg-primary-500"
                  style={{ transform: "skewX(-14deg)" }}
                  aria-hidden="true"
                />
                <h2 className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                  {cat}
                </h2>
                <span className="h-px w-full bg-paper-300" aria-hidden="true" />
              </div>

              <Reveal anim="fade-in" className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                    <Photo
                      src={p.photos[0].src}
                      alt={p.photos[0].alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      priority={i < 3}
                      className="aspect-[3/2] w-full"
                    />
                    <div className="flex min-h-[92px] flex-col justify-center bg-primary-500 px-5 py-4 transition-colors group-hover:bg-primary-600">
                      <h3 className="text-[15px] font-bold leading-[1.4] text-white">{p.title}</h3>
                      {p.location && (
                        <p className="mt-1 text-[12px] uppercase tracking-[0.08em] text-white/75">
                          {p.location}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
