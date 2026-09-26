"use client";

import { useState } from "react";
import GhostHeading from "../GhostHeading";
import { faq } from "@/lib/content";

/** Аккордеон. Он же источник разметки FAQPage и кандидат в AI Overview. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  /** Разметка живёт здесь, на странице с этими вопросами, а не в макете. */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="relative bg-white py-16 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-[1140px] px-4">
        <GhostHeading ghost={faq.ghost} heading={faq.heading} />

        <dl className="mt-12 max-w-[860px] border-t border-paper-300">
          {faq.items.map((item, i) => {
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
                      className={`mt-1 block h-[2px] w-5 shrink-0 bg-primary-500 transition-transform ${
                        isOpen ? "" : "rotate-90"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="max-w-[720px] pb-6 text-[16px] leading-7 text-gray-700">{item.a}</dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
