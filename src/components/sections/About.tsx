import GhostHeading from "../GhostHeading";
import Placeholder from "../Placeholder";
import PlayButton from "../PlayButton";
import { GridLines } from "../Patterns";
import Link from "next/link";
import { about } from "@/lib/content";

/** Фото с фирменной смещённой серой плитой и кнопкой play поверх. */
function VideoCard({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`left-shadow relative ${className}`}>
      <Placeholder label={label} className="aspect-[524/270] w-full" />
      <PlayButton />
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Про нас */}
      <section className="home_about_section relative overflow-hidden bg-white">
        <GridLines className="right-0 top-10 hidden h-[560px] w-[720px] lg:block" />

        <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-20">
          <div className="relative">
            <div className="z-10 mx-auto my-0 flex w-full max-w-[524px] items-center lg:absolute lg:bottom-0 lg:left-0 lg:top-0">
              <VideoCard label="company overview video still" className="w-full" />
            </div>

            <div className="relative mx-auto grid max-w-[1140px] grid-cols-1 md:grid-cols-2">
              <div aria-hidden="true" />
              <div className="rounded-md p-4 lg:bg-white lg:p-0">
                <div className="flex items-center py-8 xl:py-12">
                  <GhostHeading ghost={about.ghost} heading={about.heading} />
                </div>
                <p className="max-w-[560px] text-[16px] leading-7 text-gray-700">{about.body}</p>
                <Link href={about.cta.href} className="btn btn_solid mt-8">
                  {about.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия и цель */}
      <section className="home_about_section relative overflow-hidden bg-white">
        <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-20 pt-16">
          <div className="relative">
            <div className="z-10 mx-auto my-0 flex w-full max-w-[524px] items-center lg:absolute lg:right-0 lg:top-0">
              <VideoCard label="site walkthrough video still" className="w-full" />
            </div>

            <div className="relative mx-auto grid max-w-[1140px] grid-cols-1 md:grid-cols-2">
              <div className="space-y-12 py-8">
                <div>
                  <h2 className="text-[28px] font-extrabold text-primary-500 lg:text-[36px]">{about.mission.heading}</h2>
                  <p className="mt-5 max-w-[520px] text-[16px] leading-7 text-gray-700">{about.mission.body}</p>
                </div>
                <div>
                  <h2 className="text-[28px] font-extrabold text-primary-500 lg:text-[36px]">{about.goal.heading}</h2>
                  <p className="mt-5 max-w-[520px] text-[16px] leading-7 text-gray-700">{about.goal.body}</p>
                </div>
              </div>
              <div aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
