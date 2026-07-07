import Hero from "@/components/sections/hero/Hero";
import WhyChooseMe from "@/components/sections/why-choose-me/WhyChooseMe";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import TechStack from "@/components/sections/tech-stack/TechStack";
import Projects from "@/components/sections/projects/Projects";
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
      <Process />
    </>
  );
}