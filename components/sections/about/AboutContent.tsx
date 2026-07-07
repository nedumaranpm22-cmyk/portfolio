import { ArrowRight, Sparkles } from "lucide-react";

import { aboutData } from "@/lib/data/about";
import FeatureList from "./FeatureList";

export default function AboutContent() {
  return (
    <div className="max-w-2xl">

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-[#FF6B4A] shadow-sm">
        <Sparkles
          className="h-4 w-4"
          aria-hidden="true"
        />
        {aboutData.title}
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
        {aboutData.subtitle}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {aboutData.description}
      </p>

      <p className="mt-5 text-base leading-8 text-gray-600">
        {aboutData.summary}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {aboutData.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-orange-100 bg-white/80 px-5 py-4 shadow-[0_16px_40px_rgba(15,23,42,.05)] backdrop-blur"
          >
            <div className="text-3xl font-extrabold text-[#FF6B4A]">
              {stat.value}
            </div>

            <div className="mt-1 text-sm font-medium text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <FeatureList />

      <a
        href="#projects"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors duration-300 hover:text-[#FF6B4A]"
      >
        See my work
        <ArrowRight
          className="h-4 w-4"
          aria-hidden="true"
        />
      </a>

    </div>
  );
}
