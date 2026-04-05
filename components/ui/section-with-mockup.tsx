"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

export type SectionPillar = {
  title: string;
  tagline: string;
  image: string;
  sticker?: string;
};

export interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  pillars: SectionPillar[];
  reverseLayout?: boolean;
}

export default function SectionWithMockup({
  title,
  description,
  pillars,
  reverseLayout = false,
}: SectionWithMockupProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: smoothEase },
    },
  };

  const pillarGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const pillarItemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: smoothEase },
    },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";

  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const panelOrderClass = reverseLayout ? "md:col-start-1" : "";

  const pillarAccent = [
    "border-l-[oklch(0.58_0.2_285_/_0.55)]",
    "border-l-[oklch(0.52_0.19_270_/_0.5)]",
    "border-l-[oklch(0.55_0.14_200_/_0.5)]",
  ] as const;

  return (
    <div
      className="relative w-full border-y border-[oklch(0.88_0.04_285)] bg-gradient-to-br from-white via-[oklch(0.995_0.01_285)] to-[oklch(0.97_0.028_285)] py-16 md:py-20"
      aria-labelledby="who-we-are-story-heading"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-0">
        <motion.div
          className={`grid w-full grid-cols-1 items-center gap-12 md:gap-14 lg:gap-16 ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={`mx-auto flex w-full max-w-xl flex-col items-start gap-4 md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <div className="space-y-1">
              <h3
                id="who-we-are-story-heading"
                className="type-subhead text-gray-950 md:text-[2.15rem]"
              >
                {title}
              </h3>
            </div>
            <p className="type-body-lg text-[oklch(0.38_0.025_285)]">
              {description}
            </p>

          </motion.div>

          <motion.div
            className={`relative mx-auto mt-2 w-full max-w-[300px] md:mt-0 md:max-w-[471px] ${panelOrderClass}`}
            variants={itemVariants}
          >
            <motion.ul
              className="grid gap-4 sm:gap-5 md:gap-6"
              variants={pillarGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {pillars.map((pillar, index) => (
                <motion.li
                  key={pillar.title}
                  variants={pillarItemVariants}
                  className={`rounded-2xl border border-[oklch(0.9_0.035_285)] border-l-4 bg-[oklch(1_0_0_/_0.72)] p-5 shadow-[0_14px_28px_-20px_oklch(0.45_0.12_285_/_0.18)] backdrop-blur-sm transition-colors hover:border-[oklch(0.85_0.05_285)] sm:p-6 ${pillarAccent[index % pillarAccent.length]}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        width={72}
                        height={72}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                      {pillar.sticker ? (
                        <Image
                          src={pillar.sticker}
                          alt=""
                          width={30}
                          height={30}
                          loading="lazy"
                          className="absolute -right-1 -top-1 h-6 w-6 object-contain opacity-70 sm:h-7 sm:w-7"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <p className="type-card-title text-[oklch(0.28_0.06_285)]">
                        {pillar.title}
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-[oklch(0.4_0.03_285)]">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
