"use client";

import { useInView } from "./Reveal";

/**
 * Фирменный приём ETL: гигантское контурное слово (SVG <text>, fill прозрачный,
 * обводка серая), которое «прорисовывается» штрихом, а поверх него — небольшой
 * оранжевый подзаголовок.
 */
export default function GhostHeading({
  ghost,
  heading,
  tone = "light",
  align = "left",
  width = "default",
  className = "",
}: {
  ghost: string;
  heading: string;
  tone?: "light" | "gray" | "dark";
  align?: "left" | "right";
  width?: "default" | "wide";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const anchor = align === "right" ? "end" : "start";
  const box =
    width === "wide"
      ? "h-[56px] w-[350px] md:h-[86px] md:w-[600px] lg:h-[96px] lg:w-[760px]"
      : "h-[50px] w-[350px] md:h-[80px] md:w-[500px] lg:h-[90px] lg:w-[600px]";

  return (
    <div
      ref={ref}
      className={`relative ${box} ${
        align === "right" ? "ml-auto" : ""
      } ${className}`}
    >
      <svg
        data-tone={tone}
        className={`ghost-heading ${box} ${inView ? "is-visible" : ""}`}
        aria-hidden="true"
      >
        <text
          x={align === "right" ? "100%" : "0%"}
          y="40%"
          dy="50%"
          textAnchor={anchor}
          className="text-[54px] md:text-[64px] lg:text-[96px]"
        >
          {ghost}
        </text>
      </svg>

      <h2
        className={`absolute bottom-0 top-4 m-auto flex items-center text-[24px] font-extrabold text-primary-500 lg:text-[36px] ${
          align === "right" ? "right-4 justify-end" : "left-4 justify-start"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
