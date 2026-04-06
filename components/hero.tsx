"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { useHeroEntrance } from "./hero-entrance-context";
import { getEntranceStyle } from "@/lib/motion";
import { cn } from "@/lib/utils";
import GlareHover from "./GlareHover";
import TextRoll from "@/components/ui/text-roll";

const GLSLHills = dynamic(
  () => import("./ui/glsl-hills").then((mod) => mod.GLSLHills),
  {
    ssr: false,
  },
);

export default function Hero() {
  const { mounted, prefersReducedMotion } = useHeroEntrance();
  const [isCtaActive, setIsCtaActive] = useState(false);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
      style={{ minHeight: "100dvh" }}
    >
      <GLSLHills />
      <div className="pointer-events-none absolute z-10 space-y-6 px-6 text-center">
        <p
          className="type-eyebrow text-brand"
          style={getEntranceStyle({
            isVisible: mounted,
            reducedMotion: prefersReducedMotion,
            baseDelayMs: 240,
          })}
        >
          AI Venture Studio
        </p>
        <h1
          className="type-display whitespace-pre-wrap text-foreground"
          style={getEntranceStyle({
            isVisible: mounted,
            reducedMotion: prefersReducedMotion,
            baseDelayMs: 240,
            index: 1,
          })}
        >
          <span className="block italic text-[0.72em] font-light leading-[1.05] text-muted-foreground">
            Build AI Products
            <br />
          </span>
          <span className="font-semibold">from Idea to Production</span>
        </h1>
        <p
          className="type-body-lg mx-auto text-muted-foreground"
          style={getEntranceStyle({
            isVisible: mounted,
            reducedMotion: prefersReducedMotion,
            baseDelayMs: 240,
            index: 2,
          })}
        >
          We partner with startups and companies to design, build, and launch
          <br className="hidden md:block" />
          AI-native products used in the real world.
        </p>
        <div
          className="flex justify-center items-center pointer-events-auto pt-4"
          style={getEntranceStyle({
            isVisible: mounted,
            reducedMotion: prefersReducedMotion,
            baseDelayMs: 240,
            index: 3,
          })}
        >
          <GlareHover
            width="auto"
            height="auto"
            background="hsl(var(--ink))"
            borderRadius="9999px"
            borderColor="transparent"
            glareColor="#ffffff"
            glareOpacity={0.18}
            glareAngle={-45}
            glareSize={220}
            transitionDuration={600}
            style={{ display: "inline-flex" }}
            onMouseEnter={() => setIsCtaActive(true)}
            onMouseLeave={() => setIsCtaActive(false)}
          >
            <Link
              href="/contact"
              className={cn(
                "inline-flex min-h-11 items-center justify-center px-9 py-3 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_hsl(var(--ink)/0.45)] transition-all duration-300 hover:shadow-[0_24px_52px_-22px_hsl(var(--brand)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
              )}
              onFocus={() => setIsCtaActive(true)}
              onBlur={() => setIsCtaActive(false)}
            >
              <TextRoll
                active={isCtaActive}
                className="leading-none !text-current dark:!text-current"
              >
                Start a Project
              </TextRoll>
            </Link>
          </GlareHover>
        </div>
      </div>
    </section>
  );
}
