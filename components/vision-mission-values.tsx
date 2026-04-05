"use client";

import SectionWithMockup from "@/components/ui/section-with-mockup";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

const pillars = [
  {
    title: "Vision",
    tagline: "Tech for everyone",
    image: "/illustration/surreal-flying-bulbs.svg",
    sticker: "/illustration/question-mark.svg",
  },
  {
    title: "Mission",
    tagline: "Build, grow, scale",
    image: "/illustration/product-launch.svg",
    sticker: "/illustration/microphone.svg",
  },
  {
    title: "Values",
    tagline: "Own it, build it right",
    image: "/illustration/shaking-hands.svg",
    sticker: "/illustration/happy-man-waving.svg",
  },
];

export default function VisionMissionValues() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
        >
          <p className="type-eyebrow mb-3 text-[#875BF8]">
            About
          </p>
          <h2
            id="about-heading"
            className="type-section-title mb-4 text-gray-900"
          >
            Who we are
          </h2>
          <p className="type-body-lg mx-auto text-gray-600">
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
