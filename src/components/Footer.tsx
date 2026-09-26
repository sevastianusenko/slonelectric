import Link from "next/link";
import Logo from "./Logo";
import { Social, Chevron } from "./Icons";
import { SlashBullet } from "./Logo";
import { DotDiamonds } from "./Patterns";
import { serviceList } from "@/content/services";
import { areaList } from "@/content/areas";
import { site, footer, socials } from "@/lib/content";

/** В подвал идут первые шесть услуг, остальные за ссылкой «all services». */
const services = serviceList.filter((s) => s.kind === "service").slice(0, 6);
const markets = serviceList.filter((s) => s.kind === "market");
const short = (h1: string) => h1.split(/ for | across |, /)[0];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">{children}</p>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-primary-500 bg-ink-900 text-white">
      <DotDiamonds className="right-0 top-0 hidden h-[240px] w-[680px] lg:block" color="#454c5e" />

      {/* ── Призыв ────────────────────────────────────────────────── */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-4 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-[620px]">
            {/*
              Заголовок намеренно не повторяет закрывающий призыв страниц
              («Tell us what the building has to run»). Полоса стоит на каждой
              странице, и одинаковый h2 дважды подряд — это дубль на каждой
              странице сайта, а не усиление.
            */}
            <h2 className="text-[24px] font-extrabold leading-tight text-white lg:text-[30px]">
              The phone is answered by the person doing the work
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-gray-400">
              Anatoly runs the crew and usually answers it himself, {site.hours.toLowerCase()}.
              Describe the job and you will get a straight answer on whether it is ours.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
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

      {/* ── Колонки ───────────────────────────────────────────────── */}
      <div className="relative mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-[320px] text-[14px] leading-6 text-gray-400">{footer.blurb}</p>

          <address className="mt-6 space-y-1 text-[14px] not-italic leading-6 text-gray-300">
            <p className="font-bold text-white">{site.legal}</p>
            <p>{site.address.street}</p>
            <p>{site.address.city}, {site.address.state} {site.address.zip}</p>
          </address>

          <p className="mt-5 flex items-center gap-3 text-[14px] font-bold text-white">
            <SlashBullet className="!h-5 !w-[4px]" />
            {site.hours}
          </p>
          <p className="mt-2 flex items-center gap-3 text-[14px] font-bold text-white">
            <SlashBullet className="!h-5 !w-[4px]" />
            <a href={site.googleMapsUrl} target="_blank" rel="noopener" className="hover:text-primary-500">
              <span className="text-primary-500">{site.reviews.rating.toFixed(1)}</span>
              {" ★ "} on {site.reviews.source}
            </a>
          </p>
        </div>

        <nav className="lg:col-span-3" aria-label="Services">
          <Heading>Services</Heading>
          <ul className="mt-5 space-y-3">
            {markets.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/${m.slug}`}
                  className="text-[14px] font-bold leading-6 text-white hover:text-primary-500"
                >
                  {short(m.h1)}
                </Link>
              </li>
            ))}
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-[14px] leading-6 text-gray-300 hover:text-primary-500"
                >
                  {short(s.h1)}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
              >
                All services
                <Chevron className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="lg:col-span-3" aria-label="Service area">
          <Heading>Service area</Heading>
          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
            {areaList.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-area/${a.slug}`}
                  className="text-[14px] leading-6 text-gray-300 hover:text-primary-500"
                >
                  {a.county}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <Heading>Company</Heading>
          <ul className="mt-5 space-y-3">
            {footer.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[14px] leading-6 text-gray-300 hover:text-primary-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Heading>Call or write</Heading>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-4 block text-[20px] font-extrabold leading-none text-white hover:text-primary-500"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-words text-[14px] text-gray-300 hover:text-primary-500"
            >
              {site.email}
            </a>

            <ul className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = Social[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Нижняя строка ─────────────────────────────────────────── */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-4 px-4 py-6 text-[13px] text-gray-400 lg:flex-row lg:items-center lg:justify-between">
          <p>{footer.copyright}</p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Legal">
            {footer.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-primary-500">
                {l.label}
              </Link>
            ))}
          </nav>

          <p>
            {footer.credit.text}{" "}
            <a
              href={footer.credit.href}
              target="_blank"
              rel="noopener"
              className="font-semibold text-gray-300 hover:text-primary-500"
            >
              {footer.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
