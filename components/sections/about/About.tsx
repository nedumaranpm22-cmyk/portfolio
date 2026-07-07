import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,107,74,.10),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(14,165,233,.08),transparent_32%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

        <AboutContent />

        <AboutCards />

      </div>
    </section>
  );
}
