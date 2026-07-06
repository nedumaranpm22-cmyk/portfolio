interface FloatingCardProps {
  title: string;
  value: string;
}

export default function FloatingCard({
  title,
  value,
}: FloatingCardProps) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <h4 className="mt-2 text-lg font-bold text-gray-900">
        {value}
      </h4>
    </div>
  );
}