import GhostHeading from "../GhostHeading";
import Placeholder from "../Placeholder";
import Reveal from "../Reveal";
import { SlashBullet } from "../Logo";
import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[70%] bg-paper-100"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1140px] px-4">
        <div className="mb-14 flex justify-end">
          <GhostHeading ghost={whyUs.ghost} heading={whyUs.heading} align="right" width="wide" />
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal anim="slide-in-left">
            <div className="left-shadow">
              <Placeholder label="crew at work / finished panel" className="aspect-[463/250] w-full" />
            </div>
          </Reveal>

          <Reveal anim="slide-in-right">
            <ul className="space-y-2">
              {whyUs.items.map((t) => (
                <li key={t} className="flex items-center p-3 text-[18px] leading-8 text-ink-900 lg:text-[24px]">
                  <SlashBullet className="mr-4" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
