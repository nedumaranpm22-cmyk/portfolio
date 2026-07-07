import {
  Code2,
  GraduationCap,
  Rocket,
} from "lucide-react";

import { aboutData } from "@/lib/data/about";

const icons = {
  Code2,
  GraduationCap,
  Rocket,
};

export default function AboutCards() {
  return (
    <div className="grid gap-5 lg:pt-10">
      {aboutData.cards.map((card, index) => {
        const Icon = icons[card.icon as keyof typeof icons];
        const featured = index === 1;

        return (
          <article
            key={card.title}
            className={`group relative overflow-hidden rounded-[28px] border p-6 shadow-[0_20px_60px_rgba(15,23,42,.08)] transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
              featured
                ? "border-transparent bg-[#111827] text-white"
                : "border-orange-100 bg-white/85 text-gray-900 backdrop-blur"
            }`}
          >
            <div className={`absolute right-6 top-6 text-6xl font-black leading-none ${
              featured ? "text-white/5" : "text-orange-50"
            }`}>
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
              featured
                ? "bg-[#FF6B4A] text-white"
                : "bg-orange-50 text-[#FF6B4A] ring-1 ring-orange-100"
            }`}>
              <Icon
                size={28}
                aria-hidden="true"
              />
            </div>

            <span className={`relative mt-6 block text-sm font-bold uppercase ${
              featured ? "text-orange-200" : "text-[#FF6B4A]"
            }`}>
              {card.label}
            </span>

            <h3 className="relative mt-3 text-2xl font-bold">
              {card.title}
            </h3>

            <p className={`relative mt-3 leading-7 ${
              featured ? "text-slate-300" : "text-gray-600"
            }`}>
              {card.description}
            </p>

            <p className={`relative mt-5 border-t pt-5 text-sm font-medium leading-6 ${
              featured
                ? "border-white/10 text-white"
                : "border-gray-100 text-gray-800"
            }`}>
              {card.detail}
            </p>
          </article>
        );
      })}
    </div>
  );
}
