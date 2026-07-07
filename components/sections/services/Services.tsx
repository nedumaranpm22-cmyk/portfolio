import { services } from "@/lib/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            What I Can Build For You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From landing pages to complete web applications,
            I build fast, scalable and modern digital products.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              technologies={service.technologies}
              icon={service.icon}
            />

          ))}

        </div>

      </div>
    </section>
  );
}