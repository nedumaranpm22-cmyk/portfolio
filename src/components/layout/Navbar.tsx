"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="mx-auto flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/30 bg-white/70 px-6 py-4 shadow-lg backdrop-blur-xl">
        
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#FF6B4A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <Button className="hidden rounded-full bg-[#FF6B4A] px-6 hover:bg-[#ff5b37] lg:flex">
            Let's Talk
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>

        </div>

      </div>
    </header>
  );
}