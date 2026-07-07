import { MapPin, Mail } from "lucide-react";

import { contact } from "@/lib/data/contact";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FFF9F6] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm available for internships, freelance projects,
            collaborations and exciting opportunities.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-5">

            <ContactCard
              icon={<MapPin size={28} />}
              title="Location"
              value={contact.location}
            />

            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />

            <ContactCard
              icon={<span className="text-2xl">💻</span>}
              title="GitHub"
              value="nedumaranpm22-cmyk"
              href={contact.github}
            />

            <ContactCard
              icon={<span className="text-2xl">💼</span>}
              title="LinkedIn"
              value="pmnedumaran"
              href={contact.linkedin}
            />

            <SocialLinks
              github={contact.github}
              linkedin={contact.linkedin}
            />

          </div>

          {/* Right */}

          <ContactForm />

        </div>

      </div>
    </section>
  );
}