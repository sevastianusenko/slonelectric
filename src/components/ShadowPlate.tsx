"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Смещённая серая плита под фото. Раньше это была тень (`.left-shadow`),
 * то есть нарисовать её отдельно было нечем. Здесь она настоящий элемент,
 * поэтому может медленно ехать при прокрутке и давать глубину.
 *
 * Движение считается от положения блока в окне, через rAF, и полностью
 * отключается при `prefers-reduced-motion`.
 */
export default function ShadowPlate({
  children,
  className = "",
  /** Насколько плита уезжает от базового смещения, в пикселях. */
  drift = 28,
  /**
   * Базовое смещение плиты от фото, [x, y] в пикселях, если нужно другое,
   * чем вниз-влево из оригинала (тот вариант остаётся классами ниже и
   * умеет отдельное значение под мобильный — этот проп его не трогает).
   * У плотных карточек в сетке снизу часто сразу подпись без зазора,
   * и плита туда наезжает — для них передают отрицательный y, чтобы
   * плита ушла вверх, в зазор между рядами, а не легла на текст.
   */
  offset,
}: {
  children: ReactNode;
  className?: string;
  drift?: number;
  offset?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // +1, пока блок ниже экрана (плита ещё внизу своего хода), −1, когда
      // ушёл выше (плита уже поднялась). При прокрутке ВНИЗ centre убывает,
      // значит p тоже убывает — плита едет вверх быстрее самого фото,
      // а не вниз следом за ним, как было раньше.
      const centre = r.top + r.height / 2;
      const p = (centre - vh / 2) / (vh / 2 + r.height / 2);
      setShift(Math.max(-1, Math.min(1, p)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const [ox, oy] = offset ?? [0, 0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className={
          offset
            ? "pointer-events-none absolute inset-0 bg-paper-200"
            : "pointer-events-none absolute inset-0 bg-paper-200 [--px:-16px] [--py:16px] md:[--px:-40px] md:[--py:40px]"
        }
        style={
          offset
            ? { transform: `translate3d(${ox}px, ${(oy + shift * drift).toFixed(1)}px, 0)` }
            : { transform: `translate3d(var(--px), calc(var(--py) + ${(shift * drift).toFixed(1)}px), 0)` }
        }
      />
      <div className="relative">{children}</div>
    </div>
  );
}
