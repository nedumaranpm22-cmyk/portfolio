import { whyChooseMe } from "@/lib/data/whyChooseMe";
import FeatureCard from "./FeatureCard";

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="relative overflow-hidden bg-[#FFF9F6] py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Me
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Building Websites That Deliver Results
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every website is designed with performance, usability and scalability
            in mind to provide the best experience for your users.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {whyChooseMe.map((feature) => (

            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />

          ))}

        </div>

      </div>
    </section>
  );
}