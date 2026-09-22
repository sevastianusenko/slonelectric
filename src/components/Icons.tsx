type P = { className?: string };

export const Social = {
  instagram: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.7v8h3.5Z" />
    </svg>
  ),
  linkedin: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M7.1 20H4V9.4h3.1V20ZM5.5 8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM20 20h-3.1v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H10V9.4h3v1.5h.05c.42-.8 1.44-1.6 2.97-1.6 3.2 0 3.8 2.1 3.8 4.8V20Z" />
    </svg>
  ),
  youtube: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  ),
} as const;

/** Крупные полупрозрачные иконки на оранжевых карточках услуг. */
export const ServiceIcon: Record<string, (p: P) => React.ReactElement> = {
  panel: (p) => (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" {...p}>
      <circle cx="88" cy="26" r="10" /><path d="M88 6v6M88 40v6M68 26h6M102 26h6M74 12l4 4M98 36l4 4M102 12l-4 4M78 36l-4 4" />
      <path d="M14 96h74L74 62H28L14 96Z" /><path d="M40 62v34M62 62v34M22 79h58" />
    </svg>
  ),
  grid: (p) => (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" {...p}>
      <circle cx="30" cy="24" r="8" /><path d="M30 8v4M30 36v4M14 24h4M42 24h4M19 13l3 3M38 32l3 3M41 13l-3 3M22 32l-3 3" />
      <rect x="44" y="44" width="62" height="62" /><path d="M65 44v62M85 44v62M44 65h62M44 85h62" />
    </svg>
  ),
  meter: (p) => (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" {...p}>
      <path d="M96 60a36 36 0 1 0-12 26.8" /><path d="M62 30 46 64h16l-4 26 20-36H62l4-24Z" />
      <circle cx="92" cy="90" r="16" /><path d="M92 82v16M88 86h8M88 94h8" />
    </svg>
  ),
  switch: (p) => (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" {...p}>
      <rect x="22" y="16" width="76" height="88" /><path d="M22 44h76M60 16v88" />
      <circle cx="41" cy="30" r="5" /><circle cx="79" cy="30" r="5" />
      <path d="M34 60h18M34 74h18M34 88h18M68 60h18M68 74h18M68 88h18" />
    </svg>
  ),
  tower: (p) => (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" {...p}>
      <path d="M60 10v96M30 106 60 34l30 72" /><path d="M26 34h68M34 56h52M42 78h36" />
      <path d="M18 24h20M82 24h20" />
    </svg>
  ),
  audit: (p) => (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" {...p}>
      <rect x="20" y="14" width="66" height="84" /><path d="M34 36h38M34 54h38M34 72h20" />
      <circle cx="84" cy="84" r="18" /><path d="M97 97l11 11" />
    </svg>
  ),
};

export const Chevron = ({ dir = "right", ...p }: P & { dir?: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d={dir === "left" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"} />
  </svg>
);
