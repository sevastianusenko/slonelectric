"use client";

import { useInView } from "./Reveal";

/**
 * Фоновая графика ETL. Все три узора собраны из плиток со скруглёнными углами —
 * на стыке четырёх скруглений получается тот самый ромбовидный просвет.
 * Линии прорисовываются штрихом при попадании в кадр.
 */

function tileGrid({ cols, rows, size, gap, rx, skew = 0 }: {
  cols: number; rows: number; size: number; gap: number; rx: number; skew?: number;
}) {
  const step = size + gap;
  const cells: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) cells.push({ x: c * step + r * skew, y: r * step });
  }
  return { cells, w: cols * step + rows * skew, h: rows * step, size, rx };
}

function TileLayer({
  cols, rows, size, gap, rx, skew = 0, stroke = "#e5e5e5", delay = "0s", className = "",
}: {
  cols: number; rows: number; size: number; gap: number; rx: number;
  skew?: number; stroke?: string; delay?: string; className?: string;
}) {
  const { ref, inView } = useInView<SVGSVGElement>(0.05);
  const g = tileGrid({ cols, rows, size, gap, rx, skew });
  // грубая длина контура одной плитки — задаёт dasharray для эффекта рисования
  const len = (g.size * 4 + g.rx * 2) * g.cells.length;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${g.w} ${g.h}`}
      className={`stroke-draw ${inView ? "is-visible" : ""} ${className}`}
      style={{ ["--len" as string]: len, ["--delay" as string]: delay }}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMinYMin meet"
    >
      <g transform={skew ? `skewX(-20)` : undefined}>
      {g.cells.map((c, i) => (
        <rect
          key={i}
          x={c.x} y={c.y}
          width={g.size} height={g.size}
          rx={g.rx} ry={g.rx}
          stroke={stroke}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      </g>
    </svg>
  );
}

/** Крупная сетка со скруглениями — справа в блоке «О компании». */
export function GridLines({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <TileLayer cols={4} rows={3} size={136} gap={5} rx={18} stroke="#e1e1e1" className="h-full w-full" />
    </div>
  );
}

/** Скошенная штриховка — слева в блоке «Проекты». */
export function DiagonalTiles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <TileLayer cols={5} rows={5} size={72} gap={12} rx={12} skew={30} stroke="#ededed" delay=".5s" className="h-full w-full" />
    </div>
  );
}

/** Россыпь мелких ромбов — фон блока услуг. */
export function DotDiamonds({
  cols = 18, rows = 6, color = "#d7d7d7", className = "",
}: { cols?: number; rows?: number; color?: string; className?: string }) {
  const step = 42, s = 4;
  const dots: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) dots.push({ x: c * step, y: r * step });

  return (
    <svg
      viewBox={`0 0 ${cols * step} ${rows * step}`}
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {dots.map((d, i) => (
        <rect
          key={i}
          x={d.x} y={d.y} width={s} height={s}
          fill={color}
          transform={`rotate(45 ${d.x + s / 2} ${d.y + s / 2})`}
        />
      ))}
    </svg>
  );
}

/**
 * Несколько узлов сетки время от времени вспыхивают оранжевым и гаснут —
 * подсмотрено на etlgroup.com.ua (страница контактов, там это Lottie:
 * assets/lottie/contacts_top_left.json, шесть слоёв, каждый — scale
 * 0 → 120% → 0 за 20 кадров при 25fps, то есть 0.8с, раскиданные по циклу
 * в 321 кадр / 12.84с). Здесь тот же рисунок без Lottie: один CSS-keyframe
 * (`diamond-pulse` в globals.css) и своя задержка у каждой точки.
 * Координаты — проценты от контейнера, чтобы попадать в сетку на любом
 * экране, а не абсолютные пиксели одного макета.
 */
export function PulseDiamonds({
  dots, size = 10, color = "var(--color-primary-500)", className = "",
}: {
  dots: { x: number; y: number; delay: string }[];
  size?: number;
  color?: string;
  className?: string;
}) {
  // Без inset-0: этот класс задаёт top/right/bottom/left и спорит с переданными
  // -right-24/top-0 у вызывающей стороны — ромбы уезжали к левому краю секции
  // вместо правого. GridLines рядом устроен так же, без inset-0.
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="diamond-pulse absolute block"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            background: color,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

/** Диагональный срез светло-серого фона секции. */
export function DiagonalWash({
  className = "", from = "#f6f6f6", clip = "polygon(45% 0, 100% 0, 100% 100%)",
}: { className?: string; from?: string; clip?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ background: from, clipPath: clip }}
      aria-hidden="true"
    />
  );
}
