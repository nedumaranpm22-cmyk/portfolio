import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  GitBranch,
} from "lucide-react";

interface Props {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  impact: string;
  highlights: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  technologies,
  impact,
  highlights,
  github,
  demo,
}: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/70 bg-[#fffaf5] p-3 shadow-[-12px_-12px_28px_rgba(255,255,255,.95),12px_12px_34px_rgba(15,23,42,.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[-16px_-16px_34px_rgba(255,255,255,.98),18px_18px_45px_rgba(15,23,42,.13)]">
      <div className="relative h-56 overflow-hidden rounded-[24px] bg-orange-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#FF6B4A] shadow-sm backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-gray-700 shadow-[-5px_-5px_12px_rgba(255,255,255,.95),5px_5px_14px_rgba(15,23,42,.07)]">
          {impact}
        </p>

        <div className="mt-5 space-y-2">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-[#FF6B4A]"
                aria-hidden="true"
              />
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#FF6B4A] shadow-[-4px_-4px_10px_rgba(255,255,255,.95),4px_4px_12px_rgba(15,23,42,.06)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-7">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-full bg-[#FF6B4A] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <GitBranch
              className="mr-2 h-4 w-4"
              aria-hidden="true"
            />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-bold text-gray-800 shadow-[-4px_-4px_10px_rgba(255,255,255,.95),4px_4px_12px_rgba(15,23,42,.07)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <ExternalLink
              className="mr-2 h-4 w-4 text-[#FF6B4A]"
              aria-hidden="true"
            />
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}
