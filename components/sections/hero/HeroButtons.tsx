import EnterpriseButton from "@/components/design-system/EnterpriseButton";
import { ArrowRight, Download } from "lucide-react";
import { heroData } from "@/lib/data/hero";

export default function HeroButtons() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">

      <EnterpriseButton className="group">
        {heroData.primaryButton}

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />

      </EnterpriseButton>

      <EnterpriseButton variant="glass">

        <Download
          size={18}
          className="mr-2"
        />

        Download Resume

      </EnterpriseButton>

    </div>
  );
}
