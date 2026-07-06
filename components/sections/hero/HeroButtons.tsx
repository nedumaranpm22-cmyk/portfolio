import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <Button className="rounded-full bg-[#FF6B4A] px-8 py-6 text-white hover:bg-[#ff5b37]">
        Hire Me
      </Button>

      <Button
        variant="outline"
        className="rounded-full px-8 py-6"
      >
        View Portfolio
      </Button>
    </div>
  );
}