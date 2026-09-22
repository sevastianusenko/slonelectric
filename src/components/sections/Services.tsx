import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Carousel from "../Carousel";
import { ServiceIcon } from "../Icons";
import { DotDiamonds, DiagonalWash } from "../Patterns";
import { services } from "@/lib/content";

function ServiceCard({ title, icon, href }: { title: string; icon: string; href: string }) {
  const Icon = ServiceIcon[icon] ?? ServiceIcon.panel;
  return (
    <Link href={href} className="group relative block">
      <div className="relative h-[400px] overflow-hidden bg-primary-500 p-6">
        <h3 className="relative z-10 max-w-[240px] text-[19px] font-bold leading-[1.35] text-white">{title}</h3>
        <Icon className="absolute -bottom-6 -right-8 h-64 w-64 text-white/25" />
      </div>

      <span className="absolute bottom-0 left-1/2 z-10 flex h-[72px] w-[72px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white text-[11px] font-bold uppercase tracking-[0.08em] text-primary-500 shadow-md transition-transform group-hover:scale-105">
        More
      </span>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
      <DiagonalWash from="#ffffff" className="opacity-100" />
      <DotDiamonds className="right-0 top-24 h-[260px] w-[720px]" color="#d7d7d7" />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="mb-12">
          <GhostHeading ghost={services.ghost} heading={services.heading} tone="gray" />
        </div>

        <Carousel label="Services">
          {services.items.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
