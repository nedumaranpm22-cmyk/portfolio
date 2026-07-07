import { faqs } from "@/lib/data/faq";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#FFF9F6] py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you might want to know before working with me.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              faq={faq}
            />
          ))}

        </div>

      </div>
    </section>
  );
}