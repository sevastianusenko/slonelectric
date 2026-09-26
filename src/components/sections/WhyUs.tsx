import GhostHeading from "../GhostHeading";
import Photo from "../Photo";
import Reveal from "../Reveal";
import ShadowPlate from "../ShadowPlate";
import { SlashBullet } from "../Logo";
import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-24">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[70%] bg-white"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="flex justify-end">
          <GhostHeading ghost={whyUs.ghost} heading={whyUs.heading} align="right" width="wide" tone="gray" />
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal anim="slide-in-left">
            <ShadowPlate className="max-w-[420px]">
              <Photo {...whyUs.photo} className="aspect-[3/4] w-full" />
            </ShadowPlate>
          </Reveal>

          <Reveal anim="slide-in-right">
            <ul className="space-y-7">
              {whyUs.items.map((w) => (
                <li key={w.title} className="flex gap-4">
                  <SlashBullet className="mt-1" />
                  <div>
                    <h3 className="text-[18px] font-bold leading-6 text-ink-900 lg:text-[20px]">{w.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-gray-700">{w.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
