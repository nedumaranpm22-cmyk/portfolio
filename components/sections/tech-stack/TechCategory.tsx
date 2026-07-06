interface TechCategoryProps {
  title: string;
  technologies: string[];
}

export default function TechCategory({
  title,
  technologies,
}: TechCategoryProps) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[#FF6B4A]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}