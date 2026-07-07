import { processSteps } from "@/lib/data/process";
import ProcessCard from "./ProcessCard";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#FFF9F6] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="container-width relative">

        {/* Section Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Development Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            How I Build Modern Web Applications
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project follows a structured workflow that ensures
            performance, scalability, clean architecture, and an excellent user
            experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {processSteps.map((step) => (
            <ProcessCard
              key={step.id}
              step={step}
            />
          ))}

        </div>

      </div>
    </section>
  );
}