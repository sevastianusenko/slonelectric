import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import RichText from "@/components/RichText";
import Reveal from "@/components/Reveal";
import { SlashBullet } from "@/components/Logo";
import { GridLines, DotDiamonds } from "@/components/Patterns";
import { projectList, projectMap } from "@/content/projects";
import { site } from "@/lib/content";
import { metaTitle } from "@/lib/meta";

export function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectMap[slug];
  if (!p) return {};
  return {
    title: metaTitle(p.title),
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.summary,
      images: p.photos[0] ? [p.photos[0].src] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectMap[slug];
  if (!p) notFound();

  const related = p.related.map((s) => projectMap[s]).filter(Boolean);
  const [lead, ...rest] = p.photos;

  const faqSchema = p.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.summary,
    image: p.photos.map((ph) => ph.src),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Шапка поста */}
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[440px] w-[560px] lg:block" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <nav className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-ink-500">
            <Link href="/projects" className="hover:text-primary-500">Projects</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary-500">{p.category}</span>
          </nav>

          <h1 className="mt-6 max-w-[860px] text-[30px] font-extrabold leading-[1.15] text-ink-900 lg:text-[46px]">
            {p.title}
          </h1>

          {p.location && (
            <p className="mt-4 flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.08em] text-ink-500">
              <SlashBullet className="!h-4 !w-[4px]" />
              {p.location}
            </p>
          )}

          <p className="mt-7 max-w-[760px] text-[18px] leading-8 text-gray-700 lg:text-[19px]">{p.lead}</p>

          {p.facts && (
            <dl className="mt-10 grid max-w-[900px] grid-cols-1 border-t border-paper-300 sm:grid-cols-2 lg:grid-cols-3">
              {p.facts.map((f) => (
                <div key={f.label} className="border-b border-paper-300 py-5 pr-8">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">{f.label}</dt>
                  <dd className="mt-2 text-[16px] font-bold leading-6 text-ink-900">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {lead && (
        <section className="relative bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[1140px] px-4">
            <Reveal anim="fade-in">
              <div className="left-shadow">
                <Photo {...lead} priority sizes="(max-width: 1140px) 100vw, 1140px" className="aspect-[3/2] w-full" />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Текст */}
      <section className="relative overflow-hidden bg-white pb-8">
        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="max-w-[760px]">
            {p.sections.map((s, i) => (
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

                {/* фото ставим между разделами, а не пачкой в конце */}
                {rest[i] && (
                  <Reveal anim="fade-in" className="mt-10">
                    <div className="left-shadow">
                      <Photo {...rest[i]} sizes="(max-width: 760px) 100vw, 760px" className="aspect-[3/2] w-full" />
                    </div>
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {p.faq && (
        <section className="relative bg-white pb-16 pt-4">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-4">
                <span
                  className="block h-5 w-[4px] shrink-0 bg-primary-500"
                  style={{ transform: "skewX(-14deg)" }}
                  aria-hidden="true"
                />
                <h2 className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                  Questions we get on this
                </h2>
                <span className="h-px w-full bg-paper-300" aria-hidden="true" />
              </div>

              <dl className="mt-2">
                {p.faq.map((f) => (
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

      {/* Куда идти дальше */}
      <section className="relative overflow-hidden bg-paper-100 py-16 lg:py-20">
        <DotDiamonds className="right-0 top-10 h-[200px] w-[620px]" color="#d7d7d7" />

        <div className="relative mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary-500">
                Services used on this job
              </h2>
              <ul className="mt-6 space-y-4">
                {p.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="group flex items-center gap-4">
                      <SlashBullet />
                      <span className="text-[17px] font-bold text-ink-900 group-hover:text-primary-500">
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
                  Related work
                </h2>
                <ul className="mt-6 space-y-6">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/projects/${r.slug}`} className="group flex gap-5">
                        <Photo
                          src={r.photos[0].src}
                          alt={r.photos[0].alt}
                          sizes="120px"
                          className="aspect-[3/2] w-[120px] shrink-0"
                        />
                        <span>
                          <span className="block text-[16px] font-bold leading-6 text-ink-900 group-hover:text-primary-500">
                            {r.title}
                          </span>
                          <span className="mt-1 block text-[13px] uppercase tracking-[0.08em] text-ink-500">
                            {r.category}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Звонок */}
      <section className="relative overflow-hidden bg-ink-900 py-14 lg:py-16">
        <span className="absolute left-0 top-0 h-[3px] w-full bg-primary-500" aria-hidden="true" />
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-[26px] font-extrabold leading-tight text-white lg:text-[32px]">
              Got something like this coming up?
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-gray-300">
              Tell us what the building is and what it has to run. We will tell you what it needs and
              what it takes. The phone is answered around the clock.
            </p>
          </div>
          <a href={`tel:${site.phoneHref}`} className="btn btn_solid shrink-0 !px-8 !py-4 !text-[15px]">
            Call {site.phone}
          </a>
        </div>
      </section>
    </article>
  );
}
