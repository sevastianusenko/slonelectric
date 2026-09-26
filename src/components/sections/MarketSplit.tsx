import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Reveal from "../Reveal";
import { ServiceIcon } from "../Icons";
import { DotDiamonds } from "../Patterns";
import { markets } from "@/lib/content";

/** Три рынка. Главный блок страницы: с него клиент считывает, кто мы. */
export default function MarketSplit() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <DotDiamonds className="right-0 top-10 h-[220px] w-[640px]" color="#e5e5e5" />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <GhostHeading ghost={markets.ghost} heading={markets.heading} />
        <p className="mt-6 max-w-[640px] text-[17px] leading-7 text-gray-700">{markets.intro}</p>

        <Reveal anim="fade-in" className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {markets.items.map((m) => {
            const Icon = ServiceIcon[m.icon] ?? ServiceIcon.panel;
            return (
              <Link key={m.title} href={m.href} className="group relative block">
                <div className="relative h-full overflow-hidden bg-primary-500 p-7 pb-16">
                  <h3 className="relative z-10 text-[22px] font-extrabold uppercase leading-none tracking-[0.01em] text-white">
                    {m.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-[15px] leading-6 text-white/90">{m.body}</p>
                  <Icon className="absolute -bottom-8 -right-8 h-48 w-48 text-white/20" />
                </div>
                <span className="absolute bottom-0 left-7 z-10 flex translate-y-1/2 items-center gap-2 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-primary-500 shadow-md transition-transform group-hover:translate-x-1">
                  See the work
                </span>
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
