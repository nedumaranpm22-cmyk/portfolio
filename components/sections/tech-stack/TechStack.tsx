import { techStack } from "@/lib/data/techStack";
import TechCategory from "./TechCategory";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Tech Stack
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Technologies I Use
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I use modern technologies to build scalable, secure and
            high-performance applications for web and mobile.
          </p>

        </div>

        {/* Categories */}

        <div className="grid gap-8 md:grid-cols-2">

          {techStack.map((category) => (

            <TechCategory
              key={category.title}
              title={category.title}
              technologies={category.technologies}
            />

          ))}

        </div>

      </div>
    </section>
  );
}