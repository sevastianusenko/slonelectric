"use client";

import { useId } from "react";
import { useInView } from "./Reveal";

/**
 * Фирменный приём ETL: гигантское контурное слово, которое «прорисовывается»
 * при попадании в кадр, а поверх него — небольшой оранжевый подзаголовок.
 *
 * Раньше контур получали в лоб: fill:transparent + stroke на <text>. У букв
 * со сквозным просветом (A и подобных — то есть где у контура буквы есть
 * отдельный замкнутый подконтур-«дырка») браузер обводит оба подконтура
 * по отдельности, и обводка дырки рисуется как самостоятельная фигура
 * вместо аккуратного выреза — на A получался лишний прямоугольник поперёк
 * перекладины. Это не баг одного шрифта: воспроизведено на шести разных
 * шрифтах, включая системный Arial, — свойство обводки-без-заливки как
 * таковой для буквы с дыркой, а не особенность Manrope.
 *
 * Чиним SVG-фильтром: буква рисуется обычной сплошной заливкой (fill-rule
 * сам корректно вырезает дырку), затем feMorphology раздувает силуэт на
 * пару пикселей, feComposite вычитает исходный силуэт — остаётся только
 * тонкое кольцо по НАРУЖНОМУ контуру буквы. Дырка просто остаётся пустой,
 * лишних фигур внутри взяться неоткуда.
 */
export default function GhostHeading({
  ghost,
  heading,
  tone = "light",
  align = "left",
  width = "default",
  as: Tag = "h2",
  className = "",
}: {
  ghost: string;
  heading: string;
  tone?: "light" | "gray" | "dark";
  align?: "left" | "right";
  width?: "default" | "wide";
  /**
   * Индексные страницы используют h1, секции на длинных страницах h2.
   * `p` — когда настоящий заголовок стоит ниже отдельной строкой и слово
   * над ним остаётся подписью, а не заголовком.
   */
  as?: "h1" | "h2" | "p";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const filterId = useId();
  const anchor = align === "right" ? "end" : "start";
  const box =
    width === "wide"
      ? "h-[56px] w-[350px] md:h-[86px] md:w-[600px] lg:h-[96px] lg:w-[760px]"
      : "h-[50px] w-[350px] md:h-[80px] md:w-[500px] lg:h-[90px] lg:w-[600px]";

  // "gray" — сплошная бледная заливка, не контур: у обычной заливки такой
  // проблемы нет в принципе (fill-rule сам вырезает дырки), фильтр ей не нужен.
  const outlined = tone !== "gray";
  const ringColor = tone === "dark" ? "#6c6d71" : "#d1d5db";

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
        {outlined && (
          <defs>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feMorphology operator="dilate" radius="1.3" in="SourceAlpha" result="dilated" />
              <feComposite in="dilated" in2="SourceAlpha" operator="out" result="ring" />
              <feFlood floodColor={ringColor} result="color" />
              <feComposite in="color" in2="ring" operator="in" />
            </filter>
          </defs>
        )}
        <text
          x={align === "right" ? "100%" : "0%"}
          y="40%"
          dy="50%"
          textAnchor={anchor}
          filter={outlined ? `url(#${filterId})` : undefined}
          className="text-[54px] md:text-[64px] lg:text-[96px]"
        >
          {ghost}
        </text>
      </svg>

      <Tag
        className={`absolute bottom-0 top-4 m-auto flex items-center text-[24px] font-extrabold text-primary-500 lg:text-[36px] ${
          align === "right" ? "right-4 justify-end" : "left-4 justify-start"
        }`}
      >
        {heading}
      </Tag>
    </div>
  );
}
