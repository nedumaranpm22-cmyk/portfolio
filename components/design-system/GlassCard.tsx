interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        rounded-[32px]
        border border-white/30
        bg-white/55
        backdrop-blur-3xl
        shadow-[0_20px_70px_rgba(15,23,42,.12)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}