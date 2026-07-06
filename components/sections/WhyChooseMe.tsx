import FeatureCard from "./why-choose-me/FeatureCard";
import { whyChooseMe } from "@/lib/data/whyChooseMe";

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="bg-[#FFFBF8] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-[#FF6B4A]">
            Why Choose Me
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Websites Built for Performance & Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I create modern websites that are fast, responsive,
            SEO-friendly and focused on helping businesses build a
            strong online presence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {whyChooseMe.map((feature) => (

            <FeatureCard
              key={feature.title}
              {...feature}
            />

          ))}

        </div>

      </div>
    </section>
  );
}