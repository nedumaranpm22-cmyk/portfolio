import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
}: Props) {
  return (
    <Button
      className="
      rounded-full
      bg-[#FF6B4A]
      px-8
      py-6
      text-white
      hover:bg-[#E85A3A]
      transition-all
      duration-300
      "
    >
      {children}
    </Button>
  );
}