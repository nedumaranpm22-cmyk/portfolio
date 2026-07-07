"use client";

import { cn } from "@/lib/utils";

interface EnterpriseButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  className?: string;
  onClick?: () => void;
}

export default function EnterpriseButton({
  children,
  variant = "primary",
  className,
  onClick,
}: EnterpriseButtonProps) {
  const variants = {
    primary: `
      bg-gradient-to-r
      from-[#FF6B4A]
      to-[#FF875F]
      text-white
      shadow-[0_15px_35px_rgba(255,107,74,.30)]
      hover:scale-[1.03]
      hover:shadow-[0_25px_50px_rgba(255,107,74,.45)]
    `,

    secondary: `
      bg-white
      text-gray-900
      border
      border-gray-200
      hover:bg-gray-50
    `,

    glass: `
      glass
      text-gray-900
      hover:bg-white/70
    `,
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        `
        inline-flex
        items-center
        justify-center

        rounded-full

        px-8
        py-4

        text-sm
        font-semibold

        transition-all
        duration-300

        active:scale-95
      `,
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}