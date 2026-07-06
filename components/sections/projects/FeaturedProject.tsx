import { featuredProject } from "@/lib/data/projects";
import { Button } from "@/components/ui/button";
import { GitBranch, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <div className="mb-16 overflow-hidden rounded-[36px] bg-white shadow-xl">
      <div className="grid lg:grid-cols-2">

        {/* Project Preview */}
        <div className="flex min-h-[420px] items-center justify-center bg-gray-100">
          <span className="text-gray-400">
            Project Screenshot
          </span>
        </div>

        {/* Content */}
        <div className="p-10">

          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B4A]">
            ⭐ Featured Project
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            {featuredProject.title}
          </h2>

          <p className="mt-2 text-sm font-medium text-[#FF6B4A]">
            {featuredProject.category}
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            {featuredProject.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-[#FF6B4A]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button type="button">
              <GitBranch className="mr-2 h-4 w-4" />
              GitHub
            </Button>

            <Button
              type="button"
              variant="outline"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
}