"use client";

import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import { smoothEase } from "@/lib/motion";
import ScrollFloat from "./ScrollFloat";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: smoothEase },
  },
};

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      description:
        "We start by understanding your vision, challenges, and goals through in-depth discussions.",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description:
        "Quick iterations to validate concepts and get early feedback before full development.",
    },
    {
      number: "03",
      title: "Build & Scale",
      description:
        "Production-grade development with clean code, testing, and scalable architecture.",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      description:
        "Launch with confidence and continuous monitoring to ensure everything runs smoothly.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--brand)/0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-purple-400/10 blur-2xl sm:h-80 sm:w-80 sm:blur-3xl md:h-96 md:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-violet-300/12 blur-2xl sm:h-72 sm:w-72 sm:blur-3xl md:h-80 md:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: smoothEase }}
        >
          <p className="type-eyebrow mb-3 sm:mb-4 text-brand">
            Process
          </p>
          <ScrollFloat
            containerClassName="type-section-title mb-3 text-foreground sm:mb-5"
            textClassName="text-[1em] font-[inherit] leading-[inherit]"
            animationDuration={1.2}
            ease="back.inOut(1.8)"
            scrollStart="center bottom+=60%"
            scrollEnd="bottom bottom-=30%"
            stagger={0.04}
          >
            How we work
          </ScrollFloat>
          <p className="type-body mx-auto max-w-xl text-muted-foreground sm:type-body-lg">
            A clear path from first conversation to production, with velocity
            and quality at every step.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0 pl-3 pt-2 sm:pl-4 sm:pt-3 md:pl-4 lg:pt-5">
            <TracingBeam className="mx-0 max-w-none">
              <motion.div
                className="space-y-3.5 sm:space-y-4 md:space-y-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                {steps.map((step) => (
                  <motion.div key={step.number} variants={item}>
                    <div
                      className={cn(
                        "group min-h-[8rem] rounded-2xl border border-border/80 bg-card/80 px-3 py-5 pl-12 shadow-[0_1px_0_hsl(var(--foreground)/0.04)] backdrop-blur-sm transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:bg-card/70 sm:px-5 sm:py-6 sm:pl-12 md:min-h-[9.5rem] md:px-7 md:py-10",
                        "hover:border-brand/25 hover:bg-card hover:shadow-[0_20px_50px_-24px_hsl(var(--brand)/0.14)] lg:min-h-[10rem] lg:py-11",
                      )}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-3 md:hidden">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand-dark">
                          {step.number}
                        </span>
                      </div>
                      <p className="type-label mb-1.5 text-brand/90 sm:mb-2">
                        Step {step.number}
                      </p>
                      <h3 className="type-card-title text-foreground">
                        {step.title}
                      </h3>
                      <p className="type-body mt-2 text-muted-foreground sm:mt-2.5 md:hidden">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TracingBeam>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: smoothEase, delay: 0.12 }}
            className="relative mx-auto hidden w-full max-w-[min(100%,440px)] md:block lg:mx-0 lg:max-w-none"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,580px)] w-[min(100%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-gradient-to-br from-purple-500/15 via-transparent to-violet-400/10 blur-2xl"
              aria-hidden
            />
            <div className="relative min-h-[500px] md:min-h-[520px] lg:min-h-[480px]">
              <CardSwap
                verticalAlign="top"
                width={420}
                height={460}
                cardDistance={32}
                verticalDistance={28}
                delay={3200}
                pauseOnHover
                skewAmount={2.5}
                easing="linear"
              >
                {steps.map((step) => (
                  <Card
                    key={step.number}
                    className="border-border/90 shadow-[0_25px_60px_-15px_hsl(var(--foreground)/0.1)] ring-1 ring-foreground/5"
                  >
                    <div className="flex h-full flex-col">
                      <p className="type-label mb-1 text-brand">
                        Step {step.number}
                      </p>
                      <h4 className="type-subhead text-foreground">
                        {step.title}
                      </h4>
                      <p className="type-body mt-3 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
