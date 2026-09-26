import type { Metadata } from "next";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { DotDiamonds } from "@/components/Patterns";
import { articleList } from "@/content/blog";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Practical Electrical Answers for Farms & Plants",
  description:
    "Straight answers to the questions we actually get asked: stray voltage, voltage drop, three phase, panel replacement cost, agricultural wiring code and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <DotDiamonds className="right-0 top-16 h-[220px] w-[640px]" color="#e5e5e5" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Answers" heading="Blog" as="h1" />
          <p className="mt-8 max-w-[720px] text-[18px] leading-8 text-gray-700">
            Every piece here starts from a question somebody actually asked us or asked on a trade
            forum, and answers it in the first few lines. No introductions about the importance of
            electricity. If you would rather just ask, call{" "}
            <a href={`tel:${site.phoneHref}`} className="font-bold text-primary-500 hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <Reveal anim="fade-in" className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {articleList.map((a, i) => (
              <article key={a.slug}>
                <Link href={`/blog/${a.slug}`} className="group block">
                  <Photo
                    src={a.photos[0].src}
                    alt={a.photos[0].alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    priority={i < 3}
                    className="aspect-[3/2] w-full"
                  />
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
                    {a.category}
                  </p>
                  <h2 className="mt-2 text-[19px] font-bold leading-[1.35] text-ink-900 group-hover:text-primary-500">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-gray-700">{a.question}</p>
                </Link>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
