export default function DashboardPreview() {
  return (
    <div className="space-y-6">

      {/* Top Cards */}
      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-orange-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500">
            Visitors
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            12.4K
          </h2>

          <p className="mt-2 text-sm text-green-600">
            +18% this month
          </p>

        </div>

        <div className="rounded-2xl bg-sky-100 p-5 shadow-sm">
          <p className="text-xs text-gray-500">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            24
          </h2>

          <p className="mt-2 text-sm text-green-600">
            +6 Completed
          </p>

        </div>

      </div>

      {/* Chart */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-end gap-3 h-44">

          <div className="w-full rounded bg-orange-200 h-20" />
          <div className="w-full rounded bg-orange-300 h-28" />
          <div className="w-full rounded bg-orange-400 h-36" />
          <div className="w-full rounded bg-orange-500 h-44" />
          <div className="w-full rounded bg-orange-300 h-30" />
          <div className="w-full rounded bg-orange-200 h-24" />

        </div>

      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs text-gray-500">
            SEO
          </p>

          <h3 className="mt-2 font-bold">
            98%
          </h3>

        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs text-gray-500">
            Speed
          </p>

          <h3 className="mt-2 font-bold">
            A+
          </h3>

        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs text-gray-500">
            Mobile
          </p>

          <h3 className="mt-2 font-bold">
            100%
          </h3>

        </div>

      </div>

    </div>
  );
}