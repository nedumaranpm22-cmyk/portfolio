import {
  Smartphone,
  Search,
  Zap,
  Palette,
  Code2,
  Handshake,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
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
  icon,
}: FeatureCardProps) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#FF6B4A]">

        <Icon size={28} />

      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}