export default function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[560px]">

      {/* Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-orange-200/30 blur-3xl" />

      {/* Browser */}
      <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="rounded-full bg-gray-100 px-4 py-1 text-xs text-gray-500">
            nedudev.dev/dashboard
          </div>

        </div>

        <div className="grid grid-cols-[80px_1fr]">

          {/* Sidebar */}
          <div className="border-r border-gray-100 bg-gray-50 p-5">

            <div className="mb-8 h-10 w-10 rounded-xl bg-[#FF6B4A]" />

            <div className="space-y-4">

              <div className="h-3 rounded bg-orange-200" />
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200" />

            </div>

          </div>

          {/* Main */}
          <div className="p-6">

            <div className="mb-8">

              <h3 className="text-xl font-bold">
                Dashboard
              </h3>

              <p className="text-sm text-gray-500">
                Welcome back 👋
              </p>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-orange-50 p-5">

                <p className="text-sm text-gray-500">
                  Projects
                </p>

                <h4 className="mt-2 text-3xl font-bold">
                  03
                </h4>

              </div>

              <div className="rounded-2xl bg-sky-50 p-5">

                <p className="text-sm text-gray-500">
                  Technologies
                </p>

                <h4 className="mt-2 text-3xl font-bold">
                  15+
                </h4>

              </div>

            </div>

            {/* Chart */}

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">

              <div className="mb-5 flex items-end gap-3">

                <div className="h-14 w-6 rounded bg-orange-200" />
                <div className="h-24 w-6 rounded bg-orange-300" />
                <div className="h-20 w-6 rounded bg-orange-400" />
                <div className="h-32 w-6 rounded bg-[#FF6B4A]" />
                <div className="h-16 w-6 rounded bg-orange-300" />
                <div className="h-28 w-6 rounded bg-orange-500" />

              </div>

              <div className="h-2 rounded-full bg-gray-200" />

            </div>

            {/* Projects */}

            <div className="mt-6 space-y-3">

              {[
                "AgriScout",
                "Smart Student Hub",
                "Urban Heat AI",
              ].map((project) => (
                <div
                  key={project}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:shadow-md"
                >
                  <span className="font-medium">
                    {project}
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    Completed
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}