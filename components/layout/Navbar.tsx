"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/config/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] flex justify-center px-6 pt-5">
      <div
        className={`w-full max-w-7xl transition-all duration-500 ${
          scrolled ? "scale-[0.985]" : "scale-100"
        }`}
      >
        <div
          className={`
            relative
            flex
            items-center
            justify-between

            rounded-full

            border
            border-white/30

            px-8
            py-4

            backdrop-blur-3xl

            ${
              scrolled
                ? "bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.18)]"
                : "bg-white/60 shadow-[0_20px_50px_rgba(15,23,42,.12)]"
            }

            transition-all
            duration-500
          `}
        >
          {/* Decorative Glow */}

          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/30 via-transparent to-white/20" />

          {/* Logo */}

          <div className="relative z-10">
            <Logo />
          </div>

          {/* Desktop Navigation */}

          <nav className="relative z-10 hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 transition hover:text-[#FF6B4A]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[#FF6B4A]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}

          <div className="relative z-10 flex items-center gap-3">
            <Button
              className="hidden rounded-full bg-gradient-to-r
              from-[#FF6B4A] to-[#FF875F]
              px-7 py-6
              text-white
              shadow-lg
              transition
              hover:scale-105
              hover:shadow-orange-300/40
              lg:flex"
            >
              Hire Me
            </Button>

            <button className="rounded-full bg-white/60 p-3 backdrop-blur-xl lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}