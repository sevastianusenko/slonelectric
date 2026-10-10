import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import RichText from "@/components/RichText";
import Reveal from "@/components/Reveal";
import { SlashBullet } from "@/components/Logo";
import { GridLines, DotDiamonds } from "@/components/Patterns";
import { articleList, articleMap } from "@/content/blog";
import type { ArticlePhoto } from "@/content/blog/types";
import { site } from "@/lib/content";
import { metaTitle } from "@/lib/meta";

export function generateStaticParams() {
  return articleList.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articleMap[slug];
  if (!a) return {};
  return {
    title: metaTitle(a.title),
    description: a.summary,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.summary,
      images: a.photos[0] ? [a.photos[0].src] : undefined,
    },
  };
}

/** Иллюстрация с подписью. Чужие снимки всегда идут с указанием автора и лицензии. */
function Figure({ photo, priority = false }: { photo: ArticlePhoto; priority?: boolean }) {
  return (
    <figure>
      <div className="left-shadow">
        <Photo
          src={photo.src}
          alt={photo.alt}
          priority={priority}
          sizes="(max-width: 760px) 100vw, 760px"
          className="aspect-[3/2] w-full"
        />
      </div>
      {(photo.caption || photo.credit) && (
        <figcaption className="mt-4 text-[13px] leading-6 text-ink-500">
          {photo.caption}
          {photo.credit && (
            <>
              {photo.caption ? " " : ""}
              <a
                href={photo.credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary-500"
              >
                {photo.credit.author}
              </a>
              , {photo.credit.license}
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default async function ArticlePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articleMap[slug];
  if (!a) notFound();

  const related = a.related.map((s) => articleMap[s]).filter(Boolean);
  const [lead, ...rest] = a.photos;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    image: a.photos.map((p) => p.src),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };
  const faqSchema = a.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: a.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[440px] w-[560px] lg:block" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <nav className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-ink-500">
            <Link href="/blog" className="hover:text-primary-500">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary-500">{a.category}</span>
          </nav>

          <p className="mt-6 max-w-[760px] text-[15px] font-bold uppercase tracking-[0.06em] text-ink-500">
            {a.question}
          </p>
          <h1 className="mt-3 max-w-[880px] text-[30px] font-extrabold leading-[1.15] text-ink-900 lg:text-[46px]">
            {a.title}
          </h1>

          {/* Короткий ответ на первом экране: человек пришёл с вопросом. */}
          <div className="mt-9 max-w-[760px] border-l-[5px] border-primary-500 bg-paper-100 p-6 lg:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
              Short answer
            </p>
            <p className="mt-3 text-[17px] font-bold leading-8 text-ink-900 lg:text-[18px]">
              <RichText text={a.answer} />
            </p>
          </div>

          <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-gray-700">{a.lead}</p>
        </div>
      </section>

      {lead && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="max-w-[760px]">
              <Reveal anim="fade-in"><Figure photo={lead} priority /></Reveal>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white pb-8">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="max-w-[760px]">
            {a.sections.map((s, i) => (
              <div key={s.heading} className="mt-12 first:mt-0">
                <h2 className="text-[22px] font-extrabold leading-tight text-ink-900 lg:text-[26px]">
                  {s.heading}
                </h2>

                {s.body.map((para) => (
                  <p key={para.slice(0, 32)} className="mt-5 text-[17px] leading-8 text-gray-700">
                    <RichText text={para} />
                  </p>
                ))}

                {s.bullets && (
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-4 text-[16px] leading-7 text-gray-700">
                        <SlashBullet className="mt-1 !h-5 !w-[4px]" />
                        <span><RichText text={b} /></span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Врезка с расчётом или порядком действий. */}
                {s.callout && (
                  <div className="mt-8 border border-paper-300 bg-paper-100 p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
                      {s.callout.title}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {s.callout.lines.map((l) => (
                        <li key={l} className="text-[15px] leading-7 text-ink-900">
                          <RichText text={l} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {rest[i] && (
                  <Reveal anim="fade-in" className="mt-10">
                    <Figure photo={rest[i]} />
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {a.faq && (
        <section className="bg-white pb-14 pt-4">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-4">
                <span
                  className="block h-5 w-[4px] shrink-0 bg-primary-500"
                  style={{ transform: "skewX(-14deg)" }}
                  aria-hidden="true"
                />
                <h2 className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                  Questions people ask
                </h2>
                <span className="h-px w-full bg-paper-300" aria-hidden="true" />
              </div>
              <dl className="mt-2">
                {a.faq.map((f) => (
                  <div key={f.q} className="border-t border-paper-300 py-6 first:border-t-0">
                    <dt className="text-[18px] font-bold leading-7 text-ink-900">{f.q}</dt>
                    <dd className="mt-3 text-[16px] leading-7 text-gray-700">
                      <RichText text={f.a} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Источники и куда идти дальше */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-20">
        <DotDiamonds className="right-0 top-10 h-[200px] w-[620px]" color="#d7d7d7" />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                Sources worth reading
              </h2>
              <ul className="mt-6 space-y-5">
                {a.sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-bold leading-6 text-ink-900 underline underline-offset-4 hover:text-primary-500"
                    >
                      {s.label}
                    </a>
                    {s.note && <p className="mt-1 text-[14px] leading-6 text-ink-500">{s.note}</p>}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                What we do about it
              </h2>
              <ul className="mt-6 space-y-4">
                {a.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="group flex items-center gap-4">
                      <SlashBullet />
                      <span className="text-[16px] font-bold text-ink-900 group-hover:text-primary-500">
                        {s.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div>
                <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                  Read next
                </h2>
                <ul className="mt-6 space-y-5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="text-[16px] font-bold leading-6 text-ink-900 hover:text-primary-500"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Про нас */}
      <section className="relative overflow-hidden bg-ink-900 py-14 lg:py-16">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-[24px] font-extrabold leading-tight text-white lg:text-[30px]">
                Who wrote this
              </h2>
              <p className="mt-5 max-w-[680px] text-[16px] leading-7 text-gray-300">{a.closing}</p>
              <p className="mt-4 max-w-[680px] text-[16px] leading-7 text-gray-300">
                Slon Electric is a family run electrical contractor in Myerstown,
                Lebanon County. Anatoly runs the crew and usually answers the phone himself. We work
                on farms, in plants and in commercial buildings across Lebanon, Lancaster and Berks
                counties, we are rated {site.reviews.rating.toFixed(1)} on Google, and the phone is
                covered around the clock.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <a href={`tel:${site.phoneHref}`} className="btn btn_solid !px-8 !py-4 !text-[15px]">
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="btn !border !border-white/30 !bg-transparent !px-8 !py-4 !text-[15px] !text-white hover:!bg-white/10"
              >
                Send us the details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
