import {
  Smartphone,
  Search,
  Zap,
  Palette,
  Code2,
  Handshake,
  CheckCircle2,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  result: string;
  icon: string;
  index: number;
}

const icons = {
  Smartphone,
  Search,
  Zap,
  Palette,
  Code2,
  Handshake,
};

export default function FeatureCard({
  title,
  description,
  result,
  icon,
  index,
}: FeatureCardProps) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-orange-100/70 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_26px_70px_rgba(15,23,42,.10)] sm:p-7">

      <div className="absolute right-5 top-5 text-5xl font-black leading-none text-orange-50 transition-colors duration-300 group-hover:text-orange-100">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#FF6B4A] ring-1 ring-orange-100 transition-colors duration-300 group-hover:bg-[#FF6B4A] group-hover:text-white">

        <Icon size={28} />

      </div>

      <h3 className="relative text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="relative mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <div className="relative mt-6 flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-gray-800">
        <CheckCircle2
          className="h-4 w-4 text-[#FF6B4A]"
          aria-hidden="true"
        />

        <span>
          {result}
        </span>
      </div>

    </article>
  );
}
