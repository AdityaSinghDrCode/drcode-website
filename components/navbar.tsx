"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useHeroEntrance } from "./hero-entrance-context";
import { getEntranceStyle } from "@/lib/motion";

export default function Navbar() {
  const { mounted, prefersReducedMotion } = useHeroEntrance();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md"
      style={getEntranceStyle({
        isVisible: mounted,
        reducedMotion: prefersReducedMotion,
        durationMs: 560,
        offsetPx: 14,
        direction: -1,
      })}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2"
            style={getEntranceStyle({
              isVisible: mounted,
              reducedMotion: prefersReducedMotion,
              baseDelayMs: 80,
              durationMs: 620,
              offsetPx: 10,
            })}
          >
            <Image
              src="/logo.svg"
              alt="DrCode"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-2xl font-semibold text-gray-900 tracking-[-0.02em]">
              DrCode
            </span>
          </Link>

          <div
            className="hidden items-center gap-8 md:flex"
            style={getEntranceStyle({
              isVisible: mounted,
              reducedMotion: prefersReducedMotion,
              baseDelayMs: 150,
              durationMs: 620,
              offsetPx: 10,
            })}
          >
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus-visible:text-[#875BF8]"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("how-we-work")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus-visible:text-[#875BF8]"
            >
              How We Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus-visible:text-[#875BF8]"
            >
              About
            </button>
          </div>

          <Link
            href="/contact"
            style={getEntranceStyle({
              isVisible: mounted,
              reducedMotion: prefersReducedMotion,
              baseDelayMs: 220,
              durationMs: 620,
              offsetPx: 10,
            })}
          >
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
