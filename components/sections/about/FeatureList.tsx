import { CheckCircle2 } from "lucide-react";
import { aboutData } from "@/lib/data/about";

export default function FeatureList() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {aboutData.features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-3 rounded-2xl bg-orange-50 px-4 py-4 transition-all duration-300 hover:bg-orange-100"
        >
          <CheckCircle2 className="h-5 w-5 text-[#FF6B4A]" />

          <span className="text-sm font-medium text-gray-700">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}