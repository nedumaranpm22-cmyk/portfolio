import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";
import { BriefcaseBusiness } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,107,74,.12),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(56,189,248,.10),transparent_32%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fffaf5] px-4 py-2 text-sm font-semibold text-[#FF6B4A] shadow-[-6px_-6px_14px_rgba(255,255,255,.95),6px_6px_16px_rgba(15,23,42,.08)]">
              <BriefcaseBusiness
                className="h-4 w-4"
                aria-hidden="true"
              />
              Featured Work
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Projects I have built, shipped and learned from.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:justify-self-end">
            Three organized case-study style projects that show professional
            website delivery, applied AI, and modern product thinking.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              impact={project.impact}
              highlights={project.highlights}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
