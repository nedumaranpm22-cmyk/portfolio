import { techStack } from "@/lib/data/techStack";
import TechCategory from "./tech-stack/TechCategory";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="bg-[#FFFBF8] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-[#FF6B4A]">
            Tech Stack
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Technologies I Use
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I use modern technologies to build fast, scalable, responsive, and SEO-friendly web applications.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {techStack.map((category) => (
            <TechCategory
              key={category.title}
              {...category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}