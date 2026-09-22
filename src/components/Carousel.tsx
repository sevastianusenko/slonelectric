"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { useState, type ReactNode } from "react";
import { Chevron } from "./Icons";
import "swiper/css";
import "swiper/css/navigation";

/** Карусель с оранжевыми стрелками по бокам — как на ETL. */
export default function Carousel({
  children,
  slidesPerView = { base: 1, sm: 2, lg: 3 },
  spaceBetween = 28,
  label,
}: {
  children: ReactNode[];
  slidesPerView?: { base: number; sm: number; lg: number };
  spaceBetween?: number;
  label: string;
}) {
  const [prev, setPrev] = useState<HTMLButtonElement | null>(null);
  const [next, setNext] = useState<HTMLButtonElement | null>(null);

  const arrow =
    "hidden lg:flex absolute top-1/2 z-20 -translate-y-1/2 items-center justify-center text-primary-500 transition-opacity hover:opacity-70 disabled:opacity-25";

  return (
    <div className="relative lg:px-16">
      <button ref={setPrev} type="button" className={`${arrow} left-0`} aria-label={`${label}: previous`}>
        <Chevron dir="left" className="h-10 w-10" />
      </button>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView.base}
        breakpoints={{
          640:  { slidesPerView: slidesPerView.sm },
          1024: { slidesPerView: slidesPerView.lg },
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
