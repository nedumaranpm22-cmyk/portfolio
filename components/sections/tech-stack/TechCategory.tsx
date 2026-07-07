import {
  Database,
  MonitorSmartphone,
  ServerCog,
  Sparkles,
  Wrench,
} from "lucide-react";

interface TechCategoryProps {
  title: string;
  description: string;
  icon: string;
  level: string;
  technologies: string[];
  index: number;
}

const icons = {
  Database,
  MonitorSmartphone,
  ServerCog,
  Wrench,
};

export default function TechCategory({
  title,
  description,
  icon,
  level,
  technologies,
  index,
}: TechCategoryProps) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-[#fffaf5] p-6 shadow-[-12px_-12px_28px_rgba(255,255,255,.95),12px_12px_34px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[-16px_-16px_34px_rgba(255,255,255,.98),18px_18px_45px_rgba(15,23,42,.13)] sm:p-7">
      <div className="absolute right-5 top-5 text-6xl font-black leading-none text-orange-100/60">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative flex items-start justify-between gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#fff6ef] text-[#FF6B4A] shadow-[-8px_-8px_18px_rgba(255,255,255,.95),8px_8px_18px_rgba(15,23,42,.08)]">
          <Icon
            size={30}
            aria-hidden="true"
          />
        </div>

        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-gray-600 shadow-[-5px_-5px_12px_rgba(255,255,255,.9),5px_5px_14px_rgba(15,23,42,.07)]">
          {level}
        </span>
      </div>

      <h3 className="relative mt-7 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="relative mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-2 rounded-full bg-[#fffdf9] px-4 py-2 text-sm font-semibold text-gray-700 shadow-[-6px_-6px_14px_rgba(255,255,255,.95),6px_6px_16px_rgba(15,23,42,.07)] transition-all duration-300 group-hover:text-gray-900"
          >
            <Sparkles
              className="h-3.5 w-3.5 text-[#FF6B4A]"
              aria-hidden="true"
            />
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
