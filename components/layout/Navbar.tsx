"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { navigation } from "@/lib/config/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="mx-auto flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/30 bg-white/80 px-6 py-4 shadow-xl backdrop-blur-xl">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-all duration-300 hover:text-[#FF6B4A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <Button
            className="hidden rounded-full bg-[#FF6B4A] px-6 text-white hover:bg-[#ff5d3b] lg:flex"
          >
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