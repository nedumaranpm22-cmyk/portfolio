import { ArrowRight, Sparkles } from "lucide-react";

import { whyChooseMe, whyChooseMeStats } from "@/lib/data/whyChooseMe";
import FeatureCard from "./FeatureCard";

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-28"
    >
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">

          <div className="lg:sticky lg:top-28">

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-4 py-2 text-sm font-semibold text-[#FF6B4A] shadow-sm backdrop-blur">
              <Sparkles
                className="h-4 w-4"
                aria-hidden="true"
              />
              Why Choose Me
            </span>

            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Websites built with strategy, speed and long-term care.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              I focus on the pieces that make a site feel professional after the first impression: strong structure, polished interactions, clean code and reliable delivery.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {whyChooseMeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-orange-100 bg-white/75 px-5 py-4 shadow-sm backdrop-blur"
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

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors duration-300 hover:text-[#FF6B4A]"
            >
              Start a project
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {whyChooseMe.map((feature, index) => (

              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                result={feature.result}
                icon={feature.icon}
                index={index}
              />

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
