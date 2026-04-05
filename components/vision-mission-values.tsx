"use client";

import SectionWithMockup from "@/components/ui/section-with-mockup";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

const pillars = [
  {
    title: "Vision",
    tagline: "Technology built for real-world use",
    image: "/illustration/surreal-flying-bulbs.svg",
    sticker: "/illustration/question-mark.svg",
  },
  {
    title: "Mission",
    tagline: "Ship products that earn trust",
    image: "/illustration/product-launch.svg",
    sticker: "/illustration/microphone.svg",
  },
  {
    title: "Values",
    tagline: "Own outcomes; sweat the details",
    image: "/illustration/shaking-hands.svg",
    sticker: "/illustration/happy-man-waving.svg",
  },
];

export default function VisionMissionValues() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-background via-[oklch(0.992_0.012_285)] to-[oklch(0.965_0.035_285)] px-6 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-[min(28rem,50vw)] w-[min(28rem,50vw)] rounded-full bg-[oklch(0.72_0.16_285_/_0.09)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[oklch(0.78_0.12_250_/_0.06)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
        >
          <p className="type-eyebrow mb-3 text-brand-dark">
            About
          </p>
          <div className="mx-auto mb-4 inline-block border-b-2 border-[oklch(0.62_0.2_285_/_0.35)] pb-3">
            <h2
              id="about-heading"
              className="type-section-title text-foreground"
            >
              Who we are
            </h2>
          </div>
          <p className="type-body-lg mx-auto text-[oklch(0.38_0.02_285)]">
            An AI venture studio for founders who need velocity, senior builders,
            and software that holds up in production—not pitch decks.
          </p>
        </motion.div>

        <SectionWithMockup
          title={
            <>
              Execution-first partners
              <br />
              from idea to live users.
            </>
          }
          description={
            <>
              We embed with startups and enterprises through discovery, build, and
              scale—shipping typed frontends, APIs, data, and AI features as one
              coherent product. You get direct access to the people writing code and
              owning outcomes.
            </>
          }
          pillars={pillars}
        />
      </div>
    </section>
  );
}
