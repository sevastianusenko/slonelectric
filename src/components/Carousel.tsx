"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Chevron } from "./Icons";
import "swiper/css";
import "swiper/css/navigation";

/** Карусель с оранжевыми стрелками по бокам. */
export default function Carousel({
  children,
  slidesPerView = { base: 1, sm: 2, lg: 3 },
  spaceBetween = 28,
  label,
  autoplay = false,
}: {
  children: ReactNode[];
  slidesPerView?: { base: number; sm: number; lg: number };
  spaceBetween?: number;
  label: string;
  /** Листать самостоятельно, пока секция находится в кадре. */
  autoplay?: boolean;
}) {
  const [prev, setPrev] = useState<HTMLButtonElement | null>(null);
  const [next, setNext] = useState<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  /**
   * Автопрокрутка включается, только когда блок доскроллили до экрана,
   * и выключается, когда он ушёл. Иначе карусель крутится вхолостую
   * и к моменту просмотра стоит на случайном слайде.
   */
  useEffect(() => {
    const el = wrap.current;
    if (!autoplay || !swiper?.autoplay || !el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? swiper.autoplay.start() : swiper.autoplay.stop()),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoplay, swiper]);

  const arrow =
    "hidden lg:flex absolute top-1/2 z-20 -translate-y-1/2 items-center justify-center text-primary-500 transition-opacity hover:opacity-70 disabled:opacity-25";

  return (
    <div ref={wrap} className="relative lg:px-16">
      <button ref={setPrev} type="button" className={`${arrow} left-0`} aria-label={`${label}: previous`}>
        <Chevron dir="left" className="h-10 w-10" />
      </button>

      <Swiper
        modules={autoplay ? [Navigation, A11y, Autoplay] : [Navigation, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView.base}
        breakpoints={{
          640: { slidesPerView: slidesPerView.sm },
          1024: { slidesPerView: slidesPerView.lg },
        }}
        autoplay={autoplay ? { delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true, stopOnLastSlide: false } : false}
        onSwiper={(sw) => {
          // стартовать будем сами, по попаданию в кадр
          sw.autoplay?.stop();
          setSwiper(sw);
        }}
        navigation={{ prevEl: prev, nextEl: next }}
        a11y={{ containerMessage: label }}
        className="!pb-12"
      >
        {children.map((c, i) => (
          <SwiperSlide key={i} className="h-auto">{c}</SwiperSlide>
        ))}
      </Swiper>

      <button ref={setNext} type="button" className={`${arrow} right-0`} aria-label={`${label}: next`}>
        <Chevron dir="right" className="h-10 w-10" />
      </button>
    </div>
  );
}
