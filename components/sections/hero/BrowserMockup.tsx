import GlassCard from "@/components/design-system/GlassCard";

export default function BrowserMockup() {
  return (
    <GlassCard className="relative w-full max-w-[420px] overflow-hidden rounded-[28px]">

      <div className="flex items-center justify-between border-b border-white/20 bg-white/40 px-4 py-3">

        <div className="flex items-center gap-2">

          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

        </div>

        <div className="h-7 w-32 rounded-full bg-white/80 sm:w-40" />

        <p className="text-xs font-medium text-gray-500">
          Portfolio
        </p>

      </div>

      <div className="space-y-4 p-4">

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-orange-50 p-4 shadow-lg">

            <p className="text-sm text-gray-500">
              Projects
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              15+
            </h2>

          </div>

          <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-cyan-50 p-4 shadow-lg">

            <p className="text-sm text-gray-500">
              Tech
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              20+
            </h2>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-4 shadow-lg">

          <div className="mb-5 flex h-32 items-end justify-between">

            <div className="h-12 w-4 rounded-full bg-orange-300" />
            <div className="h-20 w-4 rounded-full bg-orange-500" />
            <div className="h-14 w-4 rounded-full bg-orange-200" />
            <div className="h-28 w-4 rounded-full bg-orange-600" />
            <div className="h-16 w-4 rounded-full bg-orange-400" />
            <div className="h-24 w-4 rounded-full bg-orange-300" />
            <div className="h-32 w-4 rounded-full bg-orange-500" />

          </div>

          <div className="h-2 rounded-full bg-gray-200" />

        </div>

        <div className="rounded-2xl bg-white p-4 shadow-lg">

          <div className="mb-4 flex items-center justify-between">

            <h3 className="font-semibold">
              Recent Projects
            </h3>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
              Active
            </span>

          </div>

          {[
            "AgriScout",
            "Business Website",
            "Urban Heat AI",
          ].map((project) => (
            <div
              key={project}
              className="mb-3 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 last:mb-0"
            >

              <span className="font-medium text-gray-700">
                {project}
              </span>

              <span className="text-xs text-green-500">
                Completed
              </span>

            </div>
          ))}

        </div>

      </div>

    </GlassCard>
  );
}
