"use client";

import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import { smoothEase } from "@/lib/motion";

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
        "We align on the product thesis, user problem, and technical constraints before writing code.",
      deliverable: "Scope Plan",
      focus: "Founder interviews, success criteria, and architecture direction",
      output: "A validated scope and execution plan.",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description:
        "We ship a clickable prototype fast so your team can review interaction and product flow early.",
      deliverable: "UX Prototype",
      focus: "UX wireframes, proof-of-concept builds, and feedback loops",
      output: "A tested prototype with clear iteration priorities.",
    },
    {
      number: "03",
      title: "Build & Scale",
      description:
        "We move into production engineering with secure integrations, testing, and scalable foundations.",
      deliverable: "Production Build",
      focus: "Code quality, integration reliability, and release readiness",
      output: "A production-grade product that is ready to grow.",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      description:
        "After launch, we monitor, optimize, and turn usage signals into the next product wins.",
      deliverable: "Launch Operations",
      focus: "Observability, optimization, and post-launch iteration",
      output: "Stable operations with a measurable improvement cycle.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden px-6 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-22%,rgba(135,91,248,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#875BF8]/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-28 top-14 h-72 w-72 rounded-full bg-[#875BF8]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-14 grid gap-8 border-b border-slate-200/70 pb-10 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-10 md:pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: smoothEase }}
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#875BF8] md:text-sm">
              Process
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-900 md:text-5xl md:leading-[1.06] lg:text-[3.35rem]">
              How we work
            </h2>
          </div>
          <div className="space-y-4 md:space-y-5">
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              A practical delivery rhythm from first call to scaled product,
              designed for founders who need momentum without sacrificing
              quality.
            </p>
            <div className="inline-flex items-center rounded-full border border-[#875BF8]/25 bg-[#875BF8]/5 px-4 py-1.5 text-sm font-medium text-[#6B3FD4]">
              Weekly checkpoints. Transparent progress.
            </div>
          </div>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-16">
          <div className="min-w-0 pr-1 sm:pr-2">
            <TracingBeam className="mx-0 max-w-none">
              <motion.div
                className="space-y-4 md:space-y-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                {steps.map((step) => (
                  <motion.div key={step.number} variants={item}>
                    <div
                      className={cn(
                        "group rounded-2xl border border-slate-200/85 bg-white px-6 py-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "hover:-translate-y-0.5 hover:border-[#875BF8]/30 hover:shadow-[0_22px_48px_-28px_rgba(135,91,248,0.32)] md:px-7 md:py-7",
                      )}
                    >
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#875BF8]/10 px-2 text-xs font-bold text-[#6B3FD4]">
                          {step.number}
                        </span>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-600">
                          {step.deliverable}
                        </span>
                      </div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#875BF8]/90">
                        Step {step.number}
                      </p>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-base leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                      <p className="mt-4 border-t border-slate-200/80 pt-4 text-sm leading-relaxed text-slate-500">
                        <span className="font-medium text-slate-700">Focus:</span>{" "}
                        {step.focus}
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
            className="relative mx-auto w-full max-w-[min(100%,470px)] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-[#F8F5FF] p-5 shadow-[0_24px_54px_-34px_rgba(15,23,42,0.28)] md:p-6">
              <div className="mb-5 border-b border-slate-200/80 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#875BF8]">
                  Workflow Preview
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Each stage has a concrete artifact so your team always knows
                  what was delivered and what is next.
                </p>
              </div>

              <div className="relative min-h-[460px]">
                <CardSwap
                  width={420}
                  height={340}
                  cardDistance={26}
                  verticalDistance={22}
                  delay={3800}
                  pauseOnHover
                  skewAmount={1.2}
                  easing="linear"
                >
                  {steps.map((step) => (
                    <Card
                      key={step.number}
                      className="border-slate-200/90 shadow-[0_22px_44px_-24px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/[0.03]"
                    >
                      <div className="flex h-full flex-col">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#875BF8]">
                          Step {step.number}
                        </p>
                        <h4 className="text-2xl font-semibold tracking-tight text-slate-900">
                          {step.title}
                        </h4>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                        <p className="mt-auto border-t border-slate-200/85 pt-4 text-sm leading-relaxed text-slate-500">
                          <span className="font-medium text-slate-700">
                            Outcome:
                          </span>{" "}
                          {step.output}
                        </p>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>

              <div className="mt-3 grid gap-2 text-sm text-slate-600">
                <p className="rounded-xl bg-slate-100/80 px-3.5 py-2.5">
                  Discovery sprint in week one
                </p>
                <p className="rounded-xl bg-slate-100/80 px-3.5 py-2.5">
                  Short feedback cycles with clear owners
                </p>
                <p className="rounded-xl bg-slate-100/80 px-3.5 py-2.5">
                  Production tracking after launch
                </p>
              </div>
            </div>
          </motion.div>
        </div>
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
