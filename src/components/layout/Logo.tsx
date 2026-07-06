import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B4A] text-white shadow-md">
        <span className="text-xl leading-none">◉</span>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-gray-900">
          NeduDev
        </span>

        <span className="text-xs text-gray-500">
          Web Developer
        </span>
      </div>
    </Link>
  );
}