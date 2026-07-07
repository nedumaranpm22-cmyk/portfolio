import { CheckCircle2 } from "lucide-react";
import { aboutData } from "@/lib/data/about";

export default function FeatureList() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {aboutData.features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50/80 px-4 py-4 transition-all duration-300 hover:bg-orange-100"
        >
          <CheckCircle2
            className="h-5 w-5 shrink-0 text-[#FF6B4A]"
            aria-hidden="true"
          />

          <span className="text-sm font-medium text-gray-700">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}
