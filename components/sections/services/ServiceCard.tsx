import {
  Rocket,
  Globe,
  Briefcase,
  LayoutDashboard,
  Settings,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  price: string;
  technologies: string[];
  deliverables: string[];
  icon: string;
  featured?: boolean;
}

const icons = {
  Rocket,
  Globe,
  Briefcase,
  LayoutDashboard,
  Settings,
  Search,
};

export default function ServiceCard({
  title,
  description,
  price,
  technologies,
  deliverables,
  icon,
  featured = false,
}: Props) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,.12)] sm:p-7 ${
      featured
        ? "border-transparent bg-[#111827] text-white"
        : "border-orange-100/80 bg-white text-gray-900"
    }`}>

      {featured && (
        <div className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-orange-100">
          Popular
        </div>
      )}

      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
        featured
          ? "bg-[#FF6B4A] text-white"
          : "bg-orange-50 text-[#FF6B4A] ring-1 ring-orange-100 group-hover:bg-[#FF6B4A] group-hover:text-white"
      }`}>
        <Icon
          size={28}
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className={`mt-4 leading-7 ${
        featured ? "text-slate-300" : "text-gray-600"
      }`}>
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {deliverables.map((item) => (
          <div
            key={item}
            className={`flex items-center gap-3 text-sm font-medium ${
              featured ? "text-white" : "text-gray-700"
            }`}
          >
            <CheckCircle2
              className="h-4 w-4 shrink-0 text-[#FF6B4A]"
              aria-hidden="true"
            />

            <span>
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              featured
                ? "bg-white/10 text-orange-100"
                : "bg-orange-50 text-[#FF6B4A]"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className={`mt-auto flex items-center justify-between border-t pt-7 ${
        featured ? "border-white/10" : "border-gray-100"
      }`}>

        <span className="font-semibold text-[#FF6B4A]">
          {price}
        </span>

        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-2"
          aria-hidden="true"
        />

      </div>

    </article>
  );
}
