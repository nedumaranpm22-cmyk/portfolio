import Hero from "@/components/sections/hero/Hero";
import WhyChooseMe from "@/components/sections/why-choose-me/WhyChooseMe";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import TechStack from "@/components/sections/tech-stack/TechStack";
import Projects from "@/components/sections/projects/Projects";
import Achievements from "@/components/sections/achievements/Achievements";
import Pricing from "@/components/sections/pricing/Pricing";
import FAQ from "@/components/sections/faq/FAQ";
import Contact from "@/components/sections/contact/Contact";
import Process from "@/components/sections/process/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Achievements />
      <Pricing />
      <FAQ />
      <Process />
      <Contact />
    </>
  );
}