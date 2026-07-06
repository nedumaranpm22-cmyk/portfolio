import Hero from "@/components/sections/Hero";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <About />
      <Services />
      <TechStack />
      <Projects />
    </>
  );
}