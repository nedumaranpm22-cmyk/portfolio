import FeaturedProject from "./projects/FeaturedProject";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#FFFBF8] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-[#FF6B4A]">
            Projects I've Built
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Turning Ideas into Real Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A collection of projects I've built through hackathons, personal learning, and real-world problem solving.
          </p>

        </div>

        <FeaturedProject />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}