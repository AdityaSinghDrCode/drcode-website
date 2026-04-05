"use client";

import { MarqueeDemo } from "@/components/marquee-reviews";

export function Component() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-semibold leading-[0.95] tracking-[-0.02em] text-gray-900 md:text-5xl lg:text-6xl">
            What our clients say
          </h2>
          <p className="mx-auto max-w-[58ch] text-base leading-8 text-gray-600 md:text-lg">
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
