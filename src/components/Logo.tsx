import Image from "next/image";
import Link from "next/link";

/**
 * Логотип клиента: слон в каске и надпись. Файл один и тот же, но надпись
 * в нём чёрная, поэтому на графитовом подвале используется вариант, где
 * буквы перекрашены в белый. Слона трогать не пришлось: он читается на обоих.
 * Обновлено 26.09.2026 новым файлом от клиента (та же композиция, добавлен
 * оранжевый цвет у молнии на каске и у полосы-разделителя). Готовый файл
 * 880×433 — с запасом на retina при реальном размере на экране (максимум
 * lg:h-20, то есть ~160px), пересчитан width/height под новую пропорцию,
 * чтобы Next не растягивал картинку по старой 520×264.
 */
export default function Logo({
  tone = "dark", className = "",
}: { tone?: "dark" | "light"; className?: string }) {
  const src = tone === "light" ? "/brand/logo-light.webp" : "/brand/logo-dark.webp";
  return (
    <Link href="/" className={`block ${className}`} aria-label="Slon Electric, home">
      <Image
        src={src}
        alt="Slon Electric"
        width={880}
        height={433}
        priority
        className={tone === "light" ? "h-16 w-auto lg:h-20" : "h-11 w-auto lg:h-14"}
      />
    </Link>
  );
}

/** Фирменный скошенный слеш как маркер списка. */
export function SlashBullet({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block h-6 w-[5px] shrink-0 bg-primary-500 lg:h-9 ${className}`}
      style={{ transform: "skewX(-14deg)" }}
      aria-hidden="true"
    />
  );
}
