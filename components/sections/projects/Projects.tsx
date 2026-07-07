import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF9F6] py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Featured Work
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Projects I've Built
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A collection of hackathon, academic, and personal projects that
            showcase my skills in full-stack development, AI, and modern web
            technologies.
          </p>

        </div>

        {/* Featured Project */}

        <FeaturedProject />

        {/* Other Projects */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              technologies={project.technologies}
            />
          ))}

        </div>

      </div>
    </section>
  );
}