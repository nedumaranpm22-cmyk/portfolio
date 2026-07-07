import { ArrowRight } from "lucide-react";

import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <PrimaryButton>
        <>
          Start Your Project
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      </PrimaryButton>

      <SecondaryButton>
        View My Work
      </SecondaryButton>

    </div>
  );
}