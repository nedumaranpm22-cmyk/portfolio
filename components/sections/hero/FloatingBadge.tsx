interface FloatingBadgeProps {
  label: string;
  className?: string;
}

export default function FloatingBadge({
  label,
  className = "",
}: FloatingBadgeProps) {
  return (
    <div
      className={`
        absolute
        rounded-full
        border
        border-orange-200
        bg-white/90
        px-4
        py-2
        text-sm
        font-semibold
        text-gray-800
        shadow-xl
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        ${className}
      `}
    >
      {label}
    </div>
  );
}