import type { Metadata } from "next";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import { GridLines, PulseDiamonds } from "@/components/Patterns";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Slon Electric, Myerstown PA",
  description:
    "Call (717) 821-9166, answered 24 hours. Slon Electric, 319 Yeagley Rd, Myerstown PA. Agricultural, commercial and industrial electrical work across Lebanon, Lancaster and Berks counties.",
  alternates: { canonical: "/contact" },
};

// Форма живёт только здесь, ни на одной другой странице — так попросил
// клиент. Сама форма и её бэкенд — в ContactForm.tsx (клиентский компонент,
// обязательно: страница от этого не перестаёт быть серверной).
export default function ContactPage() {
  const addr = site.address;

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-14 lg:pt-20">
        <GridLines className="-right-24 top-0 hidden h-[420px] w-[540px] lg:block" />
        {/* Ромбы этой же сетки, вспыхивающие оранжевым — координаты подогнаны под
            узлы 4×3 сетки выше (см. комментарий в Patterns.tsx). Только верхний
            ряд: секция здесь ниже самого узора (overflow-hidden режет низ),
            нижний ряд узлов там всё равно не виден. */}
        <PulseDiamonds
          className="-right-24 top-0 hidden h-[420px] w-[540px] lg:block"
          dots={[
            { x: 25, y: 32, delay: "-1.6s" },
            { x: 50, y: 32, delay: "-6.4s" },
            { x: 75, y: 32, delay: "-9.6s" },
          ]}
        />
        <div className="relative mx-auto max-w-[1140px] px-4">
          <GhostHeading ghost="Contact" heading="Get in touch" as="h1" />
          <p className="mt-8 max-w-[680px] text-[18px] leading-8 text-gray-700">
            The quickest way to get an answer is to call. Anatoly runs the crew and usually picks up
            himself, and the phone is covered around the clock, every day of the year.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_440px] lg:items-start">
            {/* Форма — тёмная карточка сама по себе, ни с чем не делит колонку. */}
            <div className="bg-ink-900 p-8 text-white lg:p-10">
              <h2 className="text-[22px] font-extrabold lg:text-[26px]">Send us the details</h2>
              <p className="mt-4 text-[15px] leading-7 text-gray-400">
                Useful things to include: what the building is and roughly what it has to run,
                what changed recently, whether anything is down right now, and any deadline.
              </p>

              <ContactForm />
            </div>

            {/* Факты и предупреждение про аварию — своя колонка, без формы и без карты. */}
            <div>
              <dl className="border-t border-paper-300">
                <div className="border-b border-paper-300 py-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">Phone</dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-[28px] font-extrabold leading-none text-primary-500 hover:text-primary-600 lg:text-[34px]"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-paper-300 py-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">Hours</dt>
                  <dd className="mt-2 text-[17px] font-bold text-ink-900">{site.hours}</dd>
                </div>
                <div className="border-b border-paper-300 py-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">Address</dt>
                  <dd className="mt-2 text-[17px] leading-7 text-ink-900">
                    {site.legal}
                    <br />
                    {addr.street}
                    <br />
                    {addr.city}, {addr.state} {addr.zip}
                  </dd>
                </div>
                <div className="border-b border-paper-300 py-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">Email</dt>
                  <dd className="mt-2 text-[17px] text-ink-900">
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent("Job from the website")}`}
                      className="underline decoration-paper-300 underline-offset-4 hover:text-primary-500 hover:decoration-primary-500"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-paper-300 py-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">Rating</dt>
                  <dd className="mt-2 text-[17px] font-bold text-ink-900">
                    <a
                      href={site.googleMapsUrl}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-primary-500"
                    >
                      <span className="text-primary-500">{site.reviews.rating.toFixed(1)}</span>
                      {" ★ "} on {site.reviews.source}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 border-l-[5px] border-primary-500 bg-paper-100 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
                  Something down right now
                </p>
                <p className="mt-3 text-[16px] leading-7 text-ink-900">
                  Ventilation stopped, a phase dropped, a panel is hot, or the power is off and the
                  utility says it is not on their side. Call rather than using the form. What
                  happens on that call is described in{" "}
                  <Link href="/emergency-electrician" className="font-bold text-primary-500 underline underline-offset-4">
                    our emergency page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Карта — своя секция, отдельно от формы и от списка контактов. */}
      <section className="bg-paper-100 py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="left-shadow">
              <Photo
                src="/photos/company-van.webp"
                alt="Slon Electric service van parked at a customer property"
                sizes="(max-width: 1140px) 100vw, 560px"
                className="aspect-[3/2] w-full"
              />
            </div>

            <div>
              <h2 className="text-[22px] font-extrabold text-ink-900 lg:text-[26px]">Find us</h2>
              <p className="mt-4 text-[16px] leading-7 text-gray-700">
                {addr.street}, {addr.city}, {addr.state} {addr.zip}
              </p>
              <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-paper-300">
                <iframe
                  src={site.googleMapsEmbedUrl}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Slon Electric on Google Maps"
                />
              </div>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
