"use client";

import { useState } from "react";
import RichText from "./RichText";

/**
 * Тот же аккордеон, что на главной, но принимает вопросы параметром,
 * чтобы им могли пользоваться страницы услуг. Разметку FAQPage
 * ставит вызывающая страница: она знает, её ли это вопросы.
 */
export default function FaqAccordion({
  items,
  className = "",
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className={`border-t border-paper-300 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-paper-300">
            <dt>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-[17px] font-bold leading-7 text-ink-900 lg:text-[19px]">
                  {item.q}
                </span>
                <span
                  className={`mt-2 block h-[2px] w-5 shrink-0 bg-primary-500 transition-transform ${
                    isOpen ? "" : "rotate-90"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </dt>
            {isOpen && (
              <dd className="max-w-[760px] pb-6 text-[16px] leading-7 text-gray-700">
                <RichText text={item.a} />
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
