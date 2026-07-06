import {
  Rocket,
  Globe,
  Briefcase,
  LayoutDashboard,
  Settings,
  Search,
  ArrowRight,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  price: string;
  technologies: string[];
  icon: string;
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
  icon,
}: Props) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#FF6B4A]">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-[#FF6B4A]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">

        <span className="font-semibold text-[#FF6B4A]">
          {price}
        </span>

        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

      </div>

    </div>
  );
}