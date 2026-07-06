import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeduDev | Full Stack Web Developer",
  description:
    "Portfolio of Nedumaran - Building modern, responsive and SEO-friendly websites with Next.js, React and TypeScript.",
  keywords: [
    "NeduDev",
    "Nedumaran",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Web Developer",
    "TypeScript",
  ],
  authors: [{ name: "Nedumaran" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={plusJakarta.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FFF9F6] font-sans text-gray-900 antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}