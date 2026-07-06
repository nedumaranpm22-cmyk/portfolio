interface Props {
  title: string;
  category: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  category,
  technologies,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 h-40 rounded-2xl bg-gray-100" />

      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-[#FF6B4A]">
        {category}
      </span>

      <h3 className="mt-4 text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs"
          >
            {tech}
          </span>

        ))}

      </div>

    </div>
  );
}