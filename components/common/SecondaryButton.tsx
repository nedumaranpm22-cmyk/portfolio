import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SecondaryButton({
  children,
}: Props) {
  return (
    <Button
      variant="outline"
      className="
      rounded-full
      px-8
      py-6
      "
    >
      {children}
    </Button>
  );
}