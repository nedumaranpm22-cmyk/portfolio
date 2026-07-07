interface Props {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular,
}: Props) {
  return (
    <div
      className={`relative rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        popular
          ? "border-[#FF6B4A] bg-orange-50"
          : "border-gray-100 bg-white"
      }`}
    >
      {popular && (
        <span className="absolute right-6 top-6 rounded-full bg-[#FF6B4A] px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-3 text-4xl font-bold text-[#FF6B4A]">
        {price}
      </p>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <span className="text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="mt-10 w-full rounded-xl bg-[#FF6B4A] py-3 font-semibold text-white transition hover:bg-[#ff5a36]">
        Get Started
      </button>
    </div>
  );
}