import HeroContent from "./HeroContent";
import BrowserMockup from "./BrowserMockup";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#FFF9F5] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center">
        <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:gap-12">

          <HeroContent />

          <div className="relative flex min-w-0 items-center justify-center lg:justify-end">

            <BrowserMockup />

          </div>
        </div>
      </div>
    </section>
  );
}
