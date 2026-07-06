import { heroData } from "@/lib/data/hero";

export default function HeroStats() {
  return (
    <div className="mt-14 flex flex-wrap gap-6">
      {heroData.stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="text-3xl font-bold text-[#FF6B4A]">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}