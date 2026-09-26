import Link from "next/link";
import Photo from "../Photo";
import { cta } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <Photo src="/photos/plant-crew.webp" alt="Slon Electric crew working in a plant" sizes="100vw" className="h-full w-full" />
      </div>
      {/* светлая заливка слева, иначе тёмный заголовок тонет в фотографии */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1140px] px-4 py-14 lg:py-20">
        <h2 className="text-[30px] font-extrabold leading-tight text-ink-900 lg:text-[44px]">{cta.heading}</h2>
        <p className="mt-5 max-w-[1000px] text-[16px] leading-7 text-gray-700 lg:text-[17px]">{cta.body}</p>
        <Link href={cta.button.href} className="btn btn_solid mt-8">
          {cta.button.label}
        </Link>
      </div>
    </section>
  );
}
