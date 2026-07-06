import { services } from "@/lib/data/services";
import ServiceCard from "./services/ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-[#FF6B4A]">
            Services
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Solutions Designed for Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you need a landing page, a portfolio, a business website,
            or a custom dashboard, I build fast, modern, and responsive
            solutions tailored to your goals.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}