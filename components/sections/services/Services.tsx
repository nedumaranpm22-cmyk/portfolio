import { ArrowRight, Layers3 } from "lucide-react";

import { serviceProcess, services } from "@/lib/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-28"
    >
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-4 py-2 text-sm font-semibold text-[#FF6B4A] shadow-sm backdrop-blur">
              <Layers3
                className="h-4 w-4"
                aria-hidden="true"
              />
              Services
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Web services shaped around launches, growth and maintenance.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-gray-600">
              From a sharp landing page to a complete business website, I build fast, responsive and maintainable digital products with a practical launch path.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors duration-300 hover:text-[#FF6B4A]"
            >
              Discuss a service
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {serviceProcess.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <div className="text-sm font-black text-[#FF6B4A]">
                {item.step}
              </div>

              <h3 className="mt-3 text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              technologies={service.technologies}
              deliverables={service.deliverables}
              icon={service.icon}
              featured={service.featured}
            />

          ))}

        </div>

      </div>
    </section>
  );
}
