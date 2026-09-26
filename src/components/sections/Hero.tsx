"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/lib/content";

/** Угловые скобки-«прицел» вокруг надстрочника. */
function Brackets() {
  const c = "absolute h-6 w-6 border-primary-500 lg:h-8 lg:w-8";
  return (
    <span aria-hidden="true">
      <span className={`${c} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${c} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${c} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${c} bottom-0 right-0 border-b-2 border-r-2`} />
    </span>
  );
}

/** Индексы плиток, у которых есть второй кадр. Только они и переключаются. */
const rotating = hero.mosaic
  .map((t, i) => (t.photos.length > 1 ? i : -1))
  .filter((i) => i >= 0);

/**
 * Мозаика из наших кадров. Плитки разного размера, у части есть второй
 * снимок, и они по очереди меняются: не все сразу, иначе шапка мигает.
 *
 * Второй кадр монтируется не сразу, а после паузы: на первой отрисовке
 * и так десять изображений, и незачем заставлять их конкурировать за канал.
 */
function Mosaic() {
  const [shown, setShown] = useState<number[]>(() => hero.mosaic.map(() => 0));
  const [alternatesReady, setAlternatesReady] = useState(false);

  useEffect(() => {
    if (!rotating.length) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const warmup = setTimeout(() => setAlternatesReady(true), 2500);
    let turn = 0;
    const timer = setInterval(() => {
      const tile = rotating[turn % rotating.length];
      turn += 1;
      setShown((prev) => {
        const next = [...prev];
        next[tile] = (next[tile] + 1) % hero.mosaic[tile].photos.length;
        return next;
      });
    }, 4200);

    return () => {
      clearTimeout(warmup);
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      /* Высота ограничена высотой окна: подпись внизу мозаики должна
         попадать на первый экран вместе с ней, а не уезжать под сгиб. */
      className="
        grid grid-cols-2 gap-1.5
        lg:h-[min(600px,calc(100vh-150px))] lg:grid-cols-6 lg:grid-rows-4 lg:gap-2 xl:h-[min(660px,calc(100vh-150px))]
      "
    >
      {/* Марка занимает крупную плиту слева вверху */}
      <div className="relative col-span-2 aspect-[2/1] overflow-hidden bg-ink-900 sm:aspect-[5/2] lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-3 lg:aspect-auto">
        <div className="flex h-full flex-col items-center justify-center gap-3 px-5 sm:gap-5 lg:gap-7">
          <div className="relative inline-block px-5 py-3 lg:px-8 lg:py-5">
            <Brackets />
            <p className="fade-in text-center text-[15px] font-extrabold uppercase leading-tight text-white sm:text-[20px] lg:text-[28px]">
              {hero.overline}
            </p>
          </div>

          <div className="slide-in-bottom flex items-center gap-3 lg:gap-6">
            <span
              className="block h-[44px] w-[8px] bg-primary-500 sm:h-[62px] lg:h-[104px] lg:w-[18px]"
              style={{ transform: "skewX(-14deg)" }}
              aria-hidden="true"
            />
            <span className="flex flex-col text-left leading-[0.86] text-white">
              <span className="text-[30px] font-extrabold uppercase sm:text-[42px] lg:text-[68px]">
                {hero.wordmarkTop}
              </span>
              <span className="text-[30px] font-extrabold uppercase sm:text-[42px] lg:text-[68px]">
                {hero.wordmarkBottom}
              </span>
            </span>
          </div>
        </div>
      </div>

      {hero.mosaic.map((tile, i) => (
        <div
          key={tile.photos[0].src}
          className={`relative aspect-square overflow-hidden bg-ink-900 lg:aspect-auto ${tile.area} ${
            i > 5 ? "hidden lg:block" : ""
          }`}
        >
          {tile.photos.map((photo, j) => {
            // второй кадр появляется в разметке только после разогрева
            if (j > 0 && !alternatesReady) return null;
            return (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={tile.sizes}
                priority={j === 0 && i < 3}
                className={`object-cover transition-opacity duration-[1200ms] ${
                  tile.drift ? "drift" : ""
                } ${shown[i] === j ? "opacity-100" : "opacity-0"}`}
                style={tile.drift ? { animationDelay: `${i * 2.5}s` } : undefined}
              />
            );
          })}
          <span
            className="pointer-events-none absolute inset-0 bg-ink-900/15 transition-colors duration-500 hover:bg-ink-900/0"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative">
        <div className="relative px-1.5 pt-1.5 lg:px-2 lg:pt-2">
          <Mosaic />

          {/* Низ мозаики высветляем, чтобы подпись читалась поверх кадров */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-white via-white/88 to-transparent sm:h-[22%] lg:h-[19%]"
            aria-hidden="true"
          />

          {/* H1 живёт здесь и обязан быть в разметке без скриптов */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-5 text-center lg:pb-8">
            <span
              className="rule-in mx-auto mb-3 block h-[2px] w-[240px] max-w-full bg-primary-500 lg:mb-4 lg:w-[320px]"
              aria-hidden="true"
            />
            <h1 className="caption-in mx-auto max-w-[1040px] text-[14px] font-bold leading-6 text-ink-900 sm:text-[16px] lg:text-[19px] lg:leading-7">
              {hero.subtitle}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
