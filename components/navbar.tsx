"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { useHeroEntrance } from "./hero-entrance-context";
import { getEntranceStyle } from "@/lib/motion";
import { cn } from "@/lib/utils";
import TextRoll from "@/components/ui/text-roll";

const NAV_LINKS = [
  { id: "what-we-do", label: "What We Do" },
  { id: "how-we-work", label: "How We Work" },
  { id: "about", label: "About" },
] as const;

export default function Navbar() {
  const { mounted, prefersReducedMotion } = useHeroEntrance();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isGetStartedActive, setIsGetStartedActive] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md"
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
              className="fixed inset-0 z-40 bg-foreground/20 md:hidden"
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
            className="flex min-h-11 min-w-0 items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
            <span className="type-logo text-foreground">
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
              <Link
                key={id}
                href={`/#${id}`}
                className="type-nav rounded-md px-1 py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground focus:outline-none focus-visible:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors md:hidden",
                "hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
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
              className={cn(
                "hidden min-h-11 items-center justify-center rounded-full border border-transparent bg-ink px-8 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_hsl(var(--ink)/0.45)] transition-all duration-300 hover:bg-ink/90 hover:shadow-[0_24px_52px_-22px_hsl(var(--brand)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] md:inline-flex",
              )}
              style={getEntranceStyle({
                isVisible: mounted,
                reducedMotion: prefersReducedMotion,
                baseDelayMs: 220,
                durationMs: 620,
                offsetPx: 10,
              })}
              onMouseEnter={() => setIsGetStartedActive(true)}
              onMouseLeave={() => setIsGetStartedActive(false)}
              onFocus={() => setIsGetStartedActive(true)}
              onBlur={() => setIsGetStartedActive(false)}
            >
              <TextRoll
                active={isGetStartedActive}
                className="!text-current dark:!text-current"
              >
                Get Started
              </TextRoll>
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
          "border-t border-border/80 bg-background/95 shadow-[0_12px_40px_-24px_hsl(var(--foreground)/0.08)] backdrop-blur-md md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className="type-nav flex min-h-11 w-full items-center rounded-lg px-3 text-left text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
