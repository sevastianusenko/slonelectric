import Hero from "@/components/sections/Hero";
import MarketSplit from "@/components/sections/MarketSplit";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyUs from "@/components/sections/WhyUs";
import ServiceArea from "@/components/sections/ServiceArea";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import GoFuture from "@/components/sections/GoFuture";

/**
 * Порядок секций: кто мы и для кого (агро первым), затем что делаем,
 * почему нам, и только потом доказательства.
 *
 * Секция Facilities убрана с главной 25.09.2026: типы зданий и так живут
 * на страницах услуг и округов, а на главной они отнимали экран.
 *
 * Секция EmergencyBand («Before you go / Something down right now?»)
 * убрана с главной 26.09.2026 по прямой просьбе клиента. Компонент
 * (`components/sections/EmergencyBand.tsx`) и текст (`emergency` в
 * `content.ts`) не удалялись — если понадобится вернуть, разметка готова.
 * Похожая по смыслу, но отдельная плашка «Something down right now»
 * на /contact не трогалась: там она стоит рядом с формой не просто так,
 * это другое место и другая просьба не отменяет.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <MarketSplit />
      <About />
      <Services />
      <WhyUs />
      <Projects />
      <ServiceArea />
      <Faq />
      <CtaBanner />
      <GoFuture />
    </>
  );
}
