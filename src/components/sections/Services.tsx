import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Reveal from "../Reveal";
import ServiceCard from "../ServiceCard";
import { Chevron } from "../Icons";
import { DotDiamonds, DiagonalWash } from "../Patterns";
import { services } from "@/lib/content";

/**
 * Шесть услуг карточками. Раньше здесь была карусель из трёх кадров плюс
 * сетка иконок: два разных приёма в одной секции ради одного списка.
 */
export default function Services() {
  return (
    <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
      <DiagonalWash from="#ffffff" />
      <DotDiamonds className="right-0 top-20 h-[240px] w-[700px]" color="#d7d7d7" />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <GhostHeading ghost={services.ghost} heading={services.heading} tone="gray" />
          <p className="max-w-[440px] text-[16px] leading-7 text-gray-700">{services.intro}</p>
        </div>

        <Reveal anim="fade-in" className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((c, i) => (
            <ServiceCard key={c.slug} {...c} index={i} priority={i < 3} />
          ))}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link href={services.cta.href} className="btn btn_solid !px-9 !py-4 !text-[14px]">
            {services.cta.label}
            <Chevron className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
