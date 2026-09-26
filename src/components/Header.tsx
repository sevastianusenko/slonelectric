"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Social, Chevron } from "./Icons";
import { serviceList } from "@/content/services";
import { areaList } from "@/content/areas";
import { site, socials } from "@/lib/content";

const HEADER_H = 70;

/** Пункты верхнего уровня. Подменю строятся из контента, а не дублируют его. */
const TOP = [
  { label: "Services", href: "/services", menu: "services" as const },
  { label: "Our projects", href: "/projects", menu: null },
  { label: "Blog", href: "/blog", menu: null },
  { label: "Service area", href: "/service-area", menu: "areas" as const },
  { label: "About", href: "/about", menu: null },
  { label: "Contact", href: "/contact", menu: null },
];

const markets = serviceList.filter((s) => s.kind === "market");
const services = serviceList.filter((s) => s.kind === "service");

/** Заголовки услуг длинные, в меню нужна только первая часть. */
const short = (h1: string) => h1.split(/ for | across |, /)[0];

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  /** Какое из выпадающих меню открыто на широком экране. */
  const [menu, setMenu] = useState<null | "services" | "areas">(null);
  /** Ящик на планшете и телефоне. */
  const [drawer, setDrawer] = useState(false);
  /** Какая группа раскрыта внутри ящика. */
  const [section, setSection] = useState<null | "services" | "areas">(null);
  const headerRef = useRef<HTMLElement>(null);

  // Escape закрывает всё, что открыто
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu(null);
      setDrawer(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Пока ящик открыт, страница под ним не должна прокручиваться
  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [drawer]);

  // Клик мимо шапки закрывает выпадающее меню
  useEffect(() => {
    if (!menu) return;
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menu]);

  const closeAll = () => { setMenu(null); setDrawer(false); setSection(null); };

  const trigger =
    "hvr-shutter flex items-center gap-1.5 text-[14px] uppercase text-gray-700 transition-colors hover:text-primary-500";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white"
      onMouseLeave={() => setMenu(null)}
    >
      <div
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 lg:px-6 xl:px-8"
        style={{ height: HEADER_H }}
      >
        <Logo />

        {/* Меню на широком экране. Ниже 1024 его заменяет ящик. */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main">
          {TOP.map((item) =>
            item.menu ? (
              <button
                key={item.label}
                type="button"
                className={trigger}
                aria-expanded={menu === item.menu}
                aria-haspopup="true"
                onMouseEnter={() => setMenu(item.menu)}
                onClick={() => setMenu(menu === item.menu ? null : item.menu)}
              >
                {item.label}
                <Caret open={menu === item.menu} />
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="hvr-shutter text-[14px] uppercase text-gray-700 transition-colors hover:text-primary-500"
                onMouseEnter={() => setMenu(null)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3 lg:gap-4">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden text-[14px] font-bold text-ink-900 hover:text-primary-500 xl:block"
          >
            {site.phone}
          </a>

          <Link href="/contact" className="btn btn_outline hidden sm:inline-flex">
            Request a quote
          </Link>

          <ul className="hidden items-center gap-2 xl:flex">
            {socials.map((sn) => {
              const Icon = Social[sn.icon];
              return (
                <li key={sn.label}>
                  <a
                    href={sn.href}
                    aria-label={sn.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-500 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setDrawer(!drawer)}
            className="-mr-2 p-2 text-gray-700 lg:hidden"
            aria-expanded={drawer}
            aria-label={drawer ? "Close main menu" : "Open main menu"}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {drawer ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Мега-меню услуг ───────────────────────────────────────── */}
      {menu === "services" && (
        <div className="absolute inset-x-0 top-full hidden border-t border-gray-100 bg-white shadow-[0_18px_40px_rgba(54,62,78,0.12)] lg:block">
          <div className="mx-auto grid max-w-[1140px] grid-cols-12 gap-8 px-4 py-9">
            <div className="col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">Markets</p>
              <ul className="mt-5 space-y-4">
                {markets.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/${m.slug}`}
                      onClick={closeAll}
                      className="block text-[15px] font-bold leading-6 text-ink-900 hover:text-primary-500"
                    >
                      {short(m.h1)}
                      <span className="mt-1 block text-[13px] font-normal leading-5 text-ink-500">
                        {m.facilities?.slice(0, 2).join(", ")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">Services</p>
              <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      onClick={closeAll}
                      className="block text-[14px] leading-6 text-gray-700 hover:text-primary-500"
                    >
                      {short(s.h1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-3">
              <div className="h-full bg-ink-900 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
                  Something down?
                </p>
                <p className="mt-4 text-[14px] leading-6 text-gray-300">
                  The phone is answered around the clock, every day of the year.
                </p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="mt-5 block text-[19px] font-extrabold text-white hover:text-primary-500"
                >
                  {site.phone}
                </a>
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
                >
                  All services
                  <Chevron className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Округа ────────────────────────────────────────────────── */}
      {menu === "areas" && (
        <div className="absolute inset-x-0 top-full hidden border-t border-gray-100 bg-white shadow-[0_18px_40px_rgba(54,62,78,0.12)] lg:block">
          <div className="mx-auto max-w-[1140px] px-4 py-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
              Counties we cover
            </p>
            <ul className="mt-5 grid grid-cols-4 gap-x-8 gap-y-4">
              {areaList.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-area/${a.slug}`}
                    onClick={closeAll}
                    className="block text-[15px] font-bold leading-6 text-ink-900 hover:text-primary-500"
                  >
                    {a.county}
                    <span className="mt-1 block text-[13px] font-normal leading-5 text-ink-500">
                      {a.towns.slice(0, 2).map((t) => t.name).join(", ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-paper-300 pt-6">
              <Link
                href="/service-area"
                onClick={closeAll}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-primary-500 hover:underline"
              >
                The whole service area
                <Chevron className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Ящик на планшете и телефоне ───────────────────────────── */}
      {drawer && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-gray-100 bg-white lg:hidden"
          style={{ top: HEADER_H }}
        >
          <nav className="mx-auto max-w-[720px] px-5 py-4" aria-label="Main">
            <ul>
              {TOP.map((item) => (
                <li key={item.label} className="border-b border-gray-100">
                  {item.menu ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="flex-1 py-4 text-[16px] font-bold uppercase text-ink-900"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setSection(section === item.menu ? null : item.menu)}
                          className="flex h-11 w-11 items-center justify-center text-primary-500"
                          aria-expanded={section === item.menu}
                          aria-label={`${item.label} submenu`}
                        >
                          <Caret open={section === item.menu} />
                        </button>
                      </div>

                      {section === item.menu && (
                        <ul className="pb-3">
                          {item.menu === "services"
                            ? serviceList.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/${s.slug}`}
                                    onClick={closeAll}
                                    className="block border-l-2 border-paper-300 py-2.5 pl-4 text-[15px] leading-6 text-gray-700"
                                  >
                                    {short(s.h1)}
                                  </Link>
                                </li>
                              ))
                            : areaList.map((a) => (
                                <li key={a.slug}>
                                  <Link
                                    href={`/service-area/${a.slug}`}
                                    onClick={closeAll}
                                    className="block border-l-2 border-paper-300 py-2.5 pl-4 text-[15px] leading-6 text-gray-700"
                                  >
                                    {a.county}
                                  </Link>
                                </li>
                              ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="block py-4 text-[16px] font-bold uppercase text-ink-900"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-l-[5px] border-primary-500 bg-paper-100 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-500">
                Answered around the clock
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-3 block text-[24px] font-extrabold leading-none text-ink-900"
              >
                {site.phone}
              </a>
            </div>

            <Link href="/contact" onClick={closeAll} className="btn btn_solid mt-5 w-full !py-4 !text-[14px]">
              Request a quote
            </Link>

            <ul className="mb-8 mt-6 flex items-center gap-3">
              {socials.map((sn) => {
                const Icon = Social[sn.icon];
                return (
                  <li key={sn.label}>
                    <a
                      href={sn.href}
                      aria-label={sn.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-500 text-primary-500"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
