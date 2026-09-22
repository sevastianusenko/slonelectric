"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);       // мобильное меню
  const [drop, setDrop] = useState<string | null>(null); // раскрытый подпункт
  const [lang, setLang] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-dropdown]")) { setDrop(null); setLang(false); }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-4 lg:px-8">
        <Logo />

        {/* десктопное меню */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative" data-dropdown>
                <button
                  type="button"
                  onClick={() => setDrop(drop === item.label ? null : item.label)}
                  className="hvr-shutter flex items-center gap-1 text-[14px] uppercase text-gray-700 transition-colors hover:text-primary-500"
                  aria-expanded={drop === item.label}
                >
                  {item.label}
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {drop === item.label && (
                  <ul className="absolute left-0 top-full z-50 mt-4 w-[300px] divide-y divide-gray-100 rounded bg-white py-1 shadow-lg">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="hvr-shutter text-[14px] uppercase text-gray-700 transition-colors hover:text-primary-500"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn btn_outline hidden sm:inline-flex">
            Request a quote
          </Link>

          <div className="relative hidden lg:block" data-dropdown>
            <button
              type="button"
              onClick={() => setLang(!lang)}
              className="flex items-center gap-1 text-[14px] uppercase text-gray-700 hover:text-primary-500"
              aria-expanded={lang}
            >
              EN
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {lang && (
              <ul className="absolute right-0 top-full z-50 mt-3 w-20 divide-y divide-gray-100 rounded bg-white py-1 text-sm shadow-lg">
                <li><span className="block px-4 py-2 text-gray-400">EN</span></li>
                <li><span className="block cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-50">ES</span></li>
              </ul>
            )}
          </div>

          {/* бургер */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-700 lg:hidden"
            aria-expanded={open}
            aria-label="Open main menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* мобильное меню */}
      {open && (
        <nav className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-[1440px] px-4 py-2">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-gray-50 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[14px] uppercase text-gray-700"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-500">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
