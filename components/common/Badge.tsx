interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-orange-200
      bg-orange-50
      px-5
      py-2
      text-sm
      font-medium
      text-[#FF6B4A]
      "
    >
      {children}
    </span>
  );
}