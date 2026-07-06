import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B4A] text-white shadow-md">
        <span className="text-lg">◉</span>
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight">
          NeduDev
        </h1>

        <p className="text-xs text-gray-500">
          Web Developer
        </p>
      </div>
    </Link>
  );
}