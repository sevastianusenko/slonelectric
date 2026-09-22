import { Social } from "./Icons";
import { socials } from "@/lib/content";

/** Вертикальная лента соцсетей слева в герое. */
export default function SocialRail({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-col gap-5 ${className}`}>
      {socials.map((s) => {
        const Icon = Social[s.icon];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
