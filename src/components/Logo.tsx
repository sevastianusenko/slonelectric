import Link from "next/link";

/** Оранжевый слеш + название в две строки — как у ETL. */
export default function Logo({
  tone = "dark", className = "",
}: { tone?: "dark" | "light"; className?: string }) {
  const text = tone === "light" ? "text-white" : "text-ink-900";
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="Slon Electric — home">
      <span
        className="block h-9 w-[6px] shrink-0 bg-primary-500"
        style={{ transform: "skewX(-14deg)" }}
        aria-hidden="true"
      />
      <span className={`flex flex-col leading-[0.92] ${text}`}>
        <span className="text-[19px] font-extrabold tracking-[0.02em]">SLON</span>
        <span className="text-[19px] font-extrabold tracking-[0.02em]">ELECTRIC</span>
      </span>
    </Link>
  );
}

/** Тот же слеш, но как маркер списка. */
export function SlashBullet({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block h-6 w-[5px] shrink-0 bg-primary-500 lg:h-9 ${className}`}
      style={{ transform: "skewX(-14deg)" }}
      aria-hidden="true"
    />
  );
}
