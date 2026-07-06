import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

export default function Grid({
  children,
}: GridProps) {
  return (
    <div
      className="
      mt-20
      grid
      gap-8
      md:grid-cols-2
      xl:grid-cols-3
      "
    >
      {children}
    </div>
  );
}