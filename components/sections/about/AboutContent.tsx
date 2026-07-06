import { aboutData } from "@/lib/data/about";
import FeatureList from "./FeatureList";

export default function AboutContent() {
  return (
    <div>

      <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-[#FF6B4A]">
        {aboutData.title}
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
        {aboutData.subtitle}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {aboutData.description}
      </p>

      <FeatureList />

    </div>
  );
}