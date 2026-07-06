import DashboardPreview from "./DashboardPreview";
import FloatingCard from "./FloatingCard";

export default function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[600px]">

      {/* Background Glow */}
      <div className="absolute -left-10 top-16 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full bg-sky-200/20 blur-3xl" />

      {/* Floating Cards */}
      <div className="absolute -left-8 top-16 z-20 hidden lg:block">
        <FloatingCard
          title="Performance"
          value="98/100"
        />
      </div>

      <div className="absolute -right-8 bottom-20 z-20 hidden lg:block">
        <FloatingCard
          title="SEO Score"
          value="100%"
        />
      </div>

      {/* Browser */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.12)]">

        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-6 py-4">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="rounded-full bg-white px-5 py-1 text-xs text-gray-500 shadow">
            https://nedudev.dev
          </div>

          <div className="w-6" />

        </div>

        {/* Dashboard */}
        <div className="bg-slate-50 p-6">

          <DashboardPreview />

        </div>

      </div>

    </div>
  );
}