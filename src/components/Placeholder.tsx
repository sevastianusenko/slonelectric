/**
 * Заглушка вместо фотографии: держит пропорции и тон, чтобы вёрстка читалась,
 * и подписывает себя в углу, не мешая контенту поверх.
 * Заменяется на <Image/> по мере появления съёмки.
 */
export default function Placeholder({
  label,
  tone = "dark",
  className = "",
}: {
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  const id = `ph-${label.replace(/\W/g, "").slice(0, 24)}`;
  return (
    <div
      className={`relative overflow-hidden ${dark ? "bg-ink-900" : "bg-paper-100"} ${className}`}
      role="img"
      aria-label={`Photo needed: ${label}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.16]" aria-hidden="true">
        <defs>
          <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0v28" fill="none" stroke={dark ? "#fff" : "#363e4e"} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>

      <span
        className={`absolute bottom-2 left-3 max-w-[85%] truncate text-[9px] uppercase tracking-[0.16em] ${
          dark ? "text-white/35" : "text-ink-500/60"
        }`}
      >
        photo needed — {label}
      </span>
      <span className="absolute left-0 top-0 h-[3px] w-14 bg-primary-500" aria-hidden="true" />
    </div>
  );
}
