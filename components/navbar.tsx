"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useHeroEntrance } from "./hero-entrance-context";
import { getEntranceStyle } from "@/lib/motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "what-we-do", label: "What We Do" },
  { id: "how-we-work", label: "How We Work" },
  { id: "about", label: "About" },
] as const;

export default function Navbar() {
  const { mounted, prefersReducedMotion } = useHeroEntrance();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

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
      {typeof document !== "undefined" && mobileOpen
        ? createPortal(
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/25 md:hidden"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />,
            document.body,
          )
        : null}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex min-h-11 min-w-0 items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2"
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
              className="h-8 w-8 shrink-0"
            />
            <span className="text-xl font-semibold text-gray-900 tracking-[-0.02em] sm:text-2xl">
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
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 focus:outline-none focus-visible:text-[#875BF8]"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-800 transition-colors md:hidden",
                "hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2",
              )}
              aria-expanded={mobileOpen}
              aria-controls="site-mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" aria-hidden strokeWidth={2} />
              )}
            </button>

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
              <Button className="h-11 min-h-11 bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 sm:px-6 rounded-full transition-all duration-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site sections"
        className={cn(
          "border-t border-gray-100 bg-white/95 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.2)] backdrop-blur-md md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="flex min-h-11 w-full items-center rounded-lg px-3 text-left text-base font-medium text-gray-800 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#875BF8]"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
