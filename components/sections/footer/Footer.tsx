import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-[#FF6B4A]">
              Nedumaran
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Building modern websites, AI applications,
              dashboards and scalable software using
              Next.js, React and Python.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-3">

              <p>📧 nedumaran202@gmail.com</p>

              <p>📍 Mayiladuthurai, Tamil Nadu</p>

              <a
                href="https://github.com/nedumaranpm22-cmyk"
                target="_blank"
              >
                💻 GitHub
              </a>

              <br />

              <a
                href="https://www.linkedin.com/in/pmnedumaran"
                target="_blank"
              >
                💼 LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">

          © {year} Nedumaran. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}