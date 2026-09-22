import Link from "next/link";
import Placeholder from "../Placeholder";
import { cta } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* фон приглушён до 40 %, как в оригинале */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <Placeholder label="wide banner — completed installation" className="h-full w-full" />
      </div>

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
