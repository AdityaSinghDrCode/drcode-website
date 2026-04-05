"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

// Smooth easing curves
const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function WhyDrCode() {
  const prefersReducedMotion = useReducedMotion();

  const reasons = [
    {
      title: "Real products, not demos",
      description: "We build production systems that serve real users, not proof-of-concepts that sit on a shelf.",
      image: "/illustration/man-riding-a-rocket.svg",
    },
    {
      title: "Close collaboration",
      description: "Your team works directly with ours. No layers of account managers or project coordinators.",
      image: "/illustration/shaking-hands.svg",
    },
    {
      title: "End-to-end ownership",
      description: "We own the entire journey from initial idea to deployment and beyond. One team, full accountability.",
      image: "/illustration/engineer.svg",
    },
    {
      title: "Build, measure, improve",
      description: "Rapid iterations based on real data and user feedback. We ship fast and learn faster.",
      image: "/illustration/business-success-chart.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: easeOutQuart,
      },
    },
  };

  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative mx-auto mb-20 max-w-3xl overflow-hidden rounded-2xl border border-border/80 bg-muted/70 px-8 py-10 text-center shadow-[0_20px_60px_-40px_hsl(var(--brand)/0.16)] md:px-12 md:py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: easeOutQuart }}
        >
          <BorderBeam
            size={100}
            duration={14}
            borderWidth={1.5}
            colorFrom="hsl(var(--brand) / 0.85)"
            colorTo="hsl(270 95% 88% / 0.5)"
          />
          <div className="relative z-[1]">
            <h2 className="type-display mb-5 text-balance text-foreground">
              Why work with us
            </h2>
            <p className="type-body-lg mx-auto text-pretty text-muted-foreground">
              We&apos;re not consultants. We&apos;re builders who ship.
            </p>
          </div>
        </motion.div>

        {/* Two-column list layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/75 bg-card p-6 shadow-[0_12px_40px_-28px_hsl(var(--foreground)/0.06)] md:p-7"
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.25, ease: easeOutQuart }}
            >
              <ShineBorder
                borderWidth={2}
                duration={16}
                durationHover={5}
                shineColor={[
                  "transparent",
                  "hsl(var(--brand) / 0.45)",
                  "hsl(270 85% 78% / 0.55)",
                  "hsl(270 95% 88% / 0.4)",
                  "transparent",
                ]}
                shineHover={[
                  "transparent",
                  "hsl(var(--brand) / 0.95)",
                  "hsl(270 95% 88% / 0.85)",
                  "hsl(285 100% 94% / 0.7)",
                  "transparent",
                ]}
              />
              <div className="relative z-[1] flex gap-6">
                <div className="shrink-0">
                  <motion.div
                    className="flex h-28 w-28 items-center justify-center rounded-2xl bg-muted ring-1 ring-border/80"
                    whileHover={
                      prefersReducedMotion ? undefined : { scale: 1.04 }
                    }
                    transition={{ duration: 0.25, ease: easeOutQuart }}
                  >
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      width={100}
                      height={100}
                      loading="lazy"
                      className="object-contain"
                    />
                  </motion.div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="type-card-title mb-3 text-foreground transition-colors duration-200 group-hover:text-brand-dark">
                    {reason.title}
                  </h3>
                  <p className="type-body text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
