import Link from "next/link";
import Logo from "./Logo";
import { Social } from "./Icons";
import { site, footer, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary-500 bg-ink-900 text-white">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-6 text-sm leading-6 text-gray-300">
            {footer.copyright}
            <br />
            {site.legal}
          </p>
        </div>

        {footer.columns.map((col, i) => (
          <nav key={i} className="space-y-4">
            {col.items.map((l) => (
              <Link key={l.label} href={l.href} className="block text-[15px] font-semibold hover:text-primary-500">
                {l.label}
              </Link>
            ))}
          </nav>
        ))}

        <div className="space-y-4">
          <a href={`tel:${site.phone}`} className="block text-[15px] hover:text-primary-500">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block text-[15px] hover:text-primary-500">{site.email}</a>
          <div className="flex gap-4 pt-2">
            {socials.map((s) => {
              const Icon = Social[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-500 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
