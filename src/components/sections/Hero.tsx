import Placeholder from "../Placeholder";
import SocialRail from "../SocialRail";
import { hero } from "@/lib/content";

/** Угловые скобки-«прицел» вокруг надстрочника. */
function Brackets() {
  const c = "absolute h-8 w-8 border-primary-500 lg:h-10 lg:w-10";
  return (
    <span aria-hidden="true">
      <span className={`${c} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${c} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${c} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${c} bottom-0 right-0 border-b-2 border-r-2`} />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative lg:pl-[170px]">
        <div className="relative h-[560px] w-full overflow-hidden sm:h-[680px] lg:h-[830px]">
          <Placeholder label="hero — crew on site / finished installation" className="absolute inset-0 h-full w-full" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="relative inline-block px-8 py-5 lg:px-12 lg:py-7">
              <Brackets />
              <p className="fade-in text-[26px] font-extrabold uppercase leading-[1.05] text-white drop-shadow-sm sm:text-[38px] lg:text-[52px]">
                {hero.overline}
              </p>
            </div>

            <div className="slide-in-bottom mt-6 flex items-center gap-5 lg:mt-10 lg:gap-8">
              <span
                className="block h-[84px] w-[14px] bg-primary-500 lg:h-[150px] lg:w-[26px]"
                style={{ transform: "skewX(-14deg)" }}
                aria-hidden="true"
              />
              <span className="flex flex-col text-left leading-[0.86] text-white">
                <span className="text-[46px] font-extrabold uppercase sm:text-[68px] lg:text-[96px]">{hero.wordmarkTop}</span>
                <span className="text-[46px] font-extrabold uppercase sm:text-[68px] lg:text-[96px]">{hero.wordmarkBottom}</span>
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent pb-8 pt-16">
            <div className="mx-auto max-w-[760px] px-6 text-center">
              <span className="mx-auto mb-5 block h-[2px] w-[300px] max-w-full bg-primary-500" aria-hidden="true" />
              <p className="text-[15px] font-bold leading-6 text-ink-500 lg:text-[18px]">{hero.subtitle}</p>
            </div>
          </div>
        </div>

        <SocialRail className="absolute left-0 top-1/2 hidden w-[170px] -translate-y-1/2 items-center pl-8 lg:flex" />
      </div>
    </section>
  );
}
