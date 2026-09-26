import Link from "next/link";
import GhostHeading from "../GhostHeading";
import Photo from "../Photo";
import Reveal from "../Reveal";
import ShadowPlate from "../ShadowPlate";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative mx-auto max-w-[1140px] px-4">
        <GhostHeading ghost={projects.ghost} heading={projects.heading} />

        <Reveal anim="fade-in" className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((p, i) => {
            const photo = (
              <Photo
                src={p.photo}
                alt={p.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="aspect-[242/158] w-full"
              />
            );
            return (
              <Link key={p.title} href={p.href} className="group block">
                {/* Плита едет при скролле только у части карточек — не у всех,
                    иначе сетка «дрожит» вся сразу. Через одну по диагонали.
                    Смещение вверх, а не вниз-влево как в оригинале: снизу
                    у карточки сразу подпись без зазора, плита туда наезжала
                    бы прямо на текст. Вверх есть зазор между рядами. */}
                {i === 1 || i === 4 ? (
                  <ShadowPlate offset={[-10, -14]} drift={10}>
                    {photo}
                  </ShadowPlate>
                ) : (
                  photo
                )}
                <div className="flex min-h-[78px] items-center bg-primary-500 px-5 py-4 transition-colors group-hover:bg-primary-600">
                  <h3 className="text-[15px] font-bold leading-[1.4] text-white">{p.title}</h3>
                </div>
              </Link>
            );
          })}
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
