import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({
  children,
}: GlassCardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/40
      bg-white/70
      backdrop-blur-xl
      p-8
      shadow-xl
      "
    >
      {children}
    </div>
  );
}