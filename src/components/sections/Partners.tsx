"use client";

import Carousel from "../Carousel";
import { partners } from "@/lib/content";

export default function Partners() {
  return (
    <section className="relative bg-white py-14">
      <div className="mx-auto max-w-[1140px] px-4">
        <h2 className="mb-10 text-center text-[24px] font-extrabold text-primary-500 lg:text-[30px]">
          {partners.heading}
        </h2>

        <Carousel label="Partners" slidesPerView={{ base: 2, sm: 3, lg: 5 }} spaceBetween={20}>
          {partners.items.map((p) => (
            <div
              key={p}
              className="flex h-20 items-center justify-center px-4 text-[13px] uppercase tracking-[0.12em] text-paper-400 grayscale transition hover:grayscale-0"
            >
              {p}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
