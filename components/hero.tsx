"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "./ui/button";
import { useHeroEntrance } from "./hero-entrance-context";
import { getEntranceStyle } from "@/lib/motion";

const GLSLHills = dynamic(
  () => import("./ui/glsl-hills").then((mod) => mod.GLSLHills),
  {
    ssr: false,
  },
);

export default function Hero() {
  const { mounted, prefersReducedMotion } = useHeroEntrance();

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute px-6">
        <p
          className="text-sm md:text-base font-medium tracking-widest uppercase text-[#875BF8]"
          style={getEntranceStyle({
            isVisible: mounted,
            reducedMotion: prefersReducedMotion,
            baseDelayMs: 240,
          })}
        >
          AI Venture Studio
        </p>
        <h1
          className="font-semibold text-5xl md:text-7xl whitespace-pre-wrap text-gray-900 tracking-[-0.02em]"
          style={getEntranceStyle({
            isVisible: mounted,
            reducedMotion: prefersReducedMotion,
            baseDelayMs: 240,
            index: 1,
          })}
        >
          <span className="italic text-4xl md:text-6xl font-thin">
            Build AI Products
            <br />
          </span>
          from Idea to Production
        </h1>
        <p
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base rounded-full transition-all duration-200 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <span className="inline-flex items-center gap-2">
                Start a Project
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
