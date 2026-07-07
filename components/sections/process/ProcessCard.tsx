import { ProcessStep } from "@/types/process";

interface ProcessCardProps {
  step: ProcessStep;
}

export default function ProcessCard({
  step,
}: ProcessCardProps) {
  return (
    <div
      className="
        group
        relative
        rounded-3xl
        border
        border-orange-100
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Step Number */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-orange-500
            text-2xl
            text-white
            shadow-lg
          "
        >
          {step.icon}
        </div>

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Step {step.id}
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            {step.title}
          </h3>

        </div>

      </div>

      {/* Description */}

      <p className="mt-6 leading-8 text-gray-600">
        {step.description}
      </p>

      {/* Hover Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          rounded-full
          bg-orange-500
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </div>
  );
}