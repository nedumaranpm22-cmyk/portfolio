import { heroData } from "@/lib/data/hero";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-2xl min-w-0">

      <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/70 px-5 py-2 text-sm font-medium text-[#FF6B4A] backdrop-blur-xl">
        {heroData.badge}
      </span>

      <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

        Building

        <span className="gradient-text"> Enterprise</span>

        <br />

        Digital Experiences

      </h1>

      <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">

        Full Stack Developer specializing in

        <span className="font-semibold text-[#FF6B4A]">
          {" "}Next.js
        </span>

        ,

        <span className="font-semibold text-[#FF6B4A]">
          {" "}React
        </span>

        ,

        <span className="font-semibold text-[#FF6B4A]">
          {" "}AI/ML
        </span>

        {" "}and modern web applications.

      </p>

      <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">

        I create premium websites, scalable web applications,
        AI-powered solutions, and responsive user experiences
        focused on performance, usability and clean architecture.

      </p>

      {/* Buttons */}

      <HeroButtons />

    </div>
  );
}
