"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Anim = "fade-in" | "slide-in-left" | "slide-in-right" | "slide-in-bottom" | "none";

/**
 * Оригинал прячет секцию (`visibility:hidden`) и вешает анимацию, когда она
 * входит во вьюпорт. Повторяем через IntersectionObserver.
 */
export default function Reveal({
  children,
  anim = "fade-in",
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  once = true,
}: {
  children: ReactNode;
  anim?: Anim;
  className?: string;
  as?: "div" | "section" | "span";
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // старый браузер: показываем сразу, правим DOM напрямую, без лишнего рендера
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref as never}
      className={[
        "animated_section",
        shown ? "is-visible" : "",
        shown && anim !== "none" ? anim : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}

/** Тот же наблюдатель, но без обёртки — отдаёт ref и флаг. */
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.unobserve(e.target); } },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}
