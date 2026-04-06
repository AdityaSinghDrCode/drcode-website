"use client";

import { AnimatedHeadingHighlight } from "@/components/ui/animated-heading-highlight";
import { MarqueeDemo } from "@/components/marquee-reviews";

export function Component() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <AnimatedHeadingHighlight
            align="center"
            className="text-gray-900"
          >
            What our clients say
          </AnimatedHeadingHighlight>
          <p className="type-body-lg mx-auto mt-4 text-gray-600">
            Real feedback from founders and teams we have partnered with
          </p>
        </div>
      </div>
      {/* Full-bleed marquee (not constrained by max-w-7xl) */}
      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden">
        <MarqueeDemo />
      </div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
