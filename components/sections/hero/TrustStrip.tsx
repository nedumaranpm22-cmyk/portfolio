const features = [
  "Responsive Design",
  "SEO Optimized",
  "Fast Performance",
  "Modern UI",
];

export default function TrustStrip() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {features.map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md"
        >
          <div className="h-2 w-2 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-gray-700">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}