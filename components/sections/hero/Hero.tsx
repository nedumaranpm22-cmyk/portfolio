import { heroData } from "@/lib/data/hero";
import BrowserMockup from "./BrowserMockup";
import HeroActions from "./HeroActions";
import TrustStrip from "./TrustStrip";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF8F1] pt-36"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-60" />

      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-orange-50 blur-3xl opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-10 lg:grid-cols-2">

        <div>

          <span className="inline-flex items-center rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-medium text-orange-600 shadow-sm">
            {heroData.badge}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
            {heroData.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {heroData.description}
          </p>

          <HeroActions />

          <TrustStrip />

        </div>

        <div className="relative flex justify-center lg:justify-end">

          <BrowserMockup />

        </div>

      </div>

    </section>
  );
}