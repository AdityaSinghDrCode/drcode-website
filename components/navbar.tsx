"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="DrCode"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-2xl font-semibold text-gray-900 tracking-[-0.015em]">
              DrCode
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("how-we-work")}
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              How We Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </button>
          </div>

          <Link href="/contact">
            <Button className="bg-[#875BF8] hover:bg-[#7347e0] text-white px-6 py-2 text-sm font-medium transition-all duration-200 hover:shadow-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
