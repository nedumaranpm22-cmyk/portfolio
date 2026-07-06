export default function AboutCards() {
  return (
    <div className="grid gap-6">

      {/* Education */}
      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <span className="text-sm font-semibold text-[#FF6B4A]">
          EDUCATION
        </span>

        <h3 className="mt-4 text-2xl font-bold text-gray-900">
          B.Tech Information Technology
        </h3>

        <p className="mt-2 text-gray-600">
          A.V.C College of Engineering
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Anna University
        </p>

      </div>

      {/* Current Focus */}
      <div className="rounded-3xl bg-[#FF6B4A] p-8 text-white shadow-xl">

        <span className="text-sm font-semibold uppercase tracking-wider">
          CURRENT FOCUS
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          Building Modern Web Applications
        </h3>

        <p className="mt-4 text-orange-100 leading-7">
          I'm currently focused on mastering Next.js, React,
          TypeScript and SEO while building high-performance,
          responsive websites for businesses and individuals.
        </p>

      </div>

      {/* Learning */}
      <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">

        <span className="text-sm font-semibold uppercase tracking-wider text-orange-300">
          CONTINUOUS LEARNING
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          Always Improving
        </h3>

        <p className="mt-4 text-slate-300 leading-7">
          Every project helps me learn something new. I actively
          participate in hackathons, build personal projects and
          explore modern web technologies to improve my skills.
        </p>

      </div>

    </div>
  );
}