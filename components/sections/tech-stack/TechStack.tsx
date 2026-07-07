import { Boxes, Code2 } from "lucide-react";

import { coreTech, techStack } from "@/lib/data/techStack";
import TechCategory from "./TechCategory";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,107,74,.12),transparent_28%),radial-gradient(circle_at_88%_70%,rgba(56,189,248,.10),transparent_30%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fffaf5] px-4 py-2 text-sm font-semibold text-[#FF6B4A] shadow-[-6px_-6px_14px_rgba(255,255,255,.95),6px_6px_16px_rgba(15,23,42,.08)]">
              <Code2
                className="h-4 w-4"
                aria-hidden="true"
              />
              Tech Stack
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              A clay-soft toolkit for fast, modern product builds.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
            I combine frontend polish, practical backend skills and deployment tools to move ideas from prototype to production-ready experiences.
          </p>
        </div>

        <div className="mb-10 rounded-[30px] border border-white/70 bg-[#fffaf5] p-5 shadow-[-12px_-12px_28px_rgba(255,255,255,.95),12px_12px_34px_rgba(15,23,42,.09)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#FF6B4A] shadow-[-6px_-6px_14px_rgba(255,255,255,.95),6px_6px_16px_rgba(15,23,42,.08)]">
                <Boxes
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Core stack
                </h3>

                <p className="text-sm text-gray-600">
                  The tools I reach for most often.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-[-5px_-5px_12px_rgba(255,255,255,.95),5px_5px_14px_rgba(15,23,42,.07)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {techStack.map((category, index) => (

            <TechCategory
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              level={category.level}
              technologies={category.technologies}
              index={index}
            />

          ))}

        </div>

      </div>
    </section>
  );
}
