import { goFuture } from "@/lib/content";

/**
 * Надпись, сквозь которую видно подложку: буквы работают как маска.
 * В оригинале внутрь букв пущено видео — здесь пока паттерн-заглушка,
 * подменяется на <video> без изменения разметки.
 */
export default function GoFuture() {
  return (
    <section className="relative w-full overflow-hidden bg-white" aria-label={goFuture.text}>
      <svg viewBox="0 0 1440 210" className="block h-[120px] w-full sm:h-[160px] lg:h-[210px]" role="img" aria-label={goFuture.text}>
        <defs>
          <pattern id="gf-fill" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
            <rect width="46" height="46" fill="#4a5a52" />
            <path d="M0 23h46M23 0v46" stroke="#5f7266" strokeWidth="6" />
          </pattern>
          <mask id="gf-mask">
            <rect width="1440" height="210" fill="black" />
            <text
              x="50%" y="50%" dy="0.34em" textAnchor="middle"
              fill="white"
              style={{ fontSize: 186, fontWeight: 800, letterSpacing: "0.02em" }}
            >
              {goFuture.text}
            </text>
          </mask>
        </defs>
        <rect width="1440" height="210" fill="url(#gf-fill)" mask="url(#gf-mask)" />
      </svg>
      <span className="sr-only">photo needed — aerial footage behind the wordmark</span>
    </section>
  );
}
