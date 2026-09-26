import Link from "next/link";
import { Fragment } from "react";

/**
 * Переводит [текст](/путь) в ссылки. Внутренние идут через next/link,
 * внешние открываются в новой вкладке. Нужен, чтобы тексты оставались
 * обычными строками в data-файлах и их можно было править без JSX.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  const cls =
    "font-bold text-primary-500 underline underline-offset-4 hover:text-primary-600";

  return (
    <>
      {parts.map((part, i) => {
        const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, label, href] = m;
        if (/^https?:\/\//.test(href)) {
          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
              {label}
            </a>
          );
        }
        return (
          <Link key={i} href={href} className={cls}>
            {label}
          </Link>
        );
      })}
    </>
  );
}
