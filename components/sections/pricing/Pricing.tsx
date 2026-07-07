import { pricingPlans } from "@/lib/data/pricing";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#FFF9F6] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Flexible pricing for portfolios, business websites and AI-powered applications.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
            />
          ))}

        </div>

      </div>
    </section>
  );
}