"use client";

import { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  ArrowRight,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  FileCode,
  GitBranch,
  Package,
  Server,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { smoothEase } from "@/lib/motion";

type TechItem = {
  name: string;
  Icon: LucideIcon;
  position: string;
  curvature: number;
};

const TECH: TechItem[] = [
  {
    name: "TypeScript",
    Icon: FileCode,
    position: "left-[24%] top-[8%]",
    curvature: -72,
  },
  { name: "React", Icon: Atom, position: "left-[38%] top-[3%]", curvature: -82 },
  { name: "Next.js", Icon: Code2, position: "left-[52%] top-[3%]", curvature: -82 },
  { name: "Node.js", Icon: Server, position: "left-[66%] top-[8%]", curvature: -72 },
  {
    name: "PostgreSQL",
    Icon: Database,
    position: "left-[65%] bottom-[8%]",
    curvature: 62,
  },
  {
    name: "Cloud",
    Icon: Cloud,
    position: "left-1/2 bottom-[2%] -translate-x-1/2",
    curvature: 80,
  },
  {
    name: "Containers",
    Icon: Boxes,
    position: "left-[22%] bottom-[8%]",
    curvature: 62,
  },
  { name: "Git", Icon: GitBranch, position: "left-[36%] bottom-[4%]", curvature: 74 },
  {
    name: "AI / ML",
    Icon: Brain,
    position: "left-[78%] top-[20%] hidden xl:block",
    curvature: -26,
  },
  {
    name: "LLM APIs",
    Icon: Sparkles,
    position: "left-[78%] bottom-[20%] hidden xl:block",
    curvature: 20,
  },
];

export default function TechExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const customerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const satelliteRefs = useMemo(
    () =>
      Array.from({ length: TECH.length }, () => ({
        current: null as HTMLDivElement | null,
      })),
    [],
  );
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="tech-expertise"
      className="relative overflow-hidden py-24 md:py-32 px-6"
      aria-labelledby="tech-expertise-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,rgba(135,91,248,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_72%_58%_at_50%_45%,#000_35%,transparent)]"
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
          <p className="type-eyebrow mb-3 text-[#875BF8]">
            Capabilities
          </p>
          <h2
            id="tech-expertise-heading"
            className="type-section-title mb-4 text-gray-900"
          >
            Our tech expertise
          </h2>
          <p className="type-body-lg mx-auto text-gray-600">
            Modern stacks, integrated end-to-end—from typed frontends and APIs to data,
            infra, and AI systems that ship together.
          </p>
        </motion.div>

        {/* Mobile / tablet: linear process */}
        <motion.div
          className="space-y-4 lg:hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.08 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: smoothEase },
              },
            }}
            className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-white px-4 py-3 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#875BF8]/10 text-[#6B3FD4]">
              <Users className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">Customer</p>
              <p className="text-sm text-gray-600">Business goals and requirements</p>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-gray-400" aria-hidden />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: smoothEase },
              },
            }}
            className="rounded-2xl border border-[#875BF8]/30 bg-white px-4 py-4 shadow-[0_16px_42px_-28px_rgba(135,91,248,0.45)]"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#875BF8]/12 text-[#6B3FD4]">
                <span className="text-sm font-bold">D</span>
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">DrCode</p>
                <p className="text-sm text-gray-600">Engineering core</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {TECH.map(({ name, Icon }) => (
                <div
                  key={name}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border border-gray-200/90 bg-gray-50/70 px-2.5 py-2",
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-[#6B3FD4]" aria-hidden />
                  <span className="type-label truncate normal-case tracking-normal text-gray-700">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: smoothEase },
              },
            }}
            className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-white px-4 py-3 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
              <Package className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">Product</p>
              <p className="text-sm text-gray-600">Delivered and production-ready</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop: Customer -> DrCode <- Techs -> Product */}
        <div
          ref={containerRef}
          className="relative mx-auto hidden min-h-[500px] max-w-5xl lg:block xl:min-h-[540px]"
        >
          {!reduceMotion && (
            <>
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={customerRef}
                toRef={centerRef}
                curvature={16}
                duration={4.6}
                delay={0}
                pathColor="rgb(148 163 184)"
                pathWidth={1.8}
                pathOpacity={0.2}
                gradientStartColor="#875BF8"
                gradientStopColor="#a78bfa"
                repeatDelay={0.55}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={productRef}
                curvature={16}
                duration={4.2}
                delay={0.2}
                pathColor="rgb(148 163 184)"
                pathWidth={1.8}
                pathOpacity={0.2}
                gradientStartColor="#875BF8"
                gradientStopColor="#34d399"
                repeatDelay={0.45}
              />
            </>
          )}

          {!reduceMotion &&
            satelliteRefs.map((toRef, i) => (
              <AnimatedBeam
                key={TECH[i].name}
                containerRef={containerRef}
                fromRef={toRef}
                toRef={centerRef}
                curvature={TECH[i].curvature}
                duration={4.2 + (i % 4) * 0.35}
                delay={i * 0.28}
                pathColor="rgb(148 163 184)"
                pathWidth={1.5}
                pathOpacity={0.18}
                gradientStartColor="#875BF8"
                gradientStopColor="#a78bfa"
                repeatDelay={0.6}
              />
            ))}

          <div
            ref={customerRef}
            className="absolute left-[1%] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center"
          >
            <div className="flex h-[6.25rem] w-[6.25rem] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-[0_16px_50px_-30px_rgba(17,24,39,0.28)]">
              <Users className="h-6 w-6 text-[#6B3FD4]" strokeWidth={1.8} aria-hidden />
              <span className="type-label mt-2 text-gray-500">
                Customer
              </span>
            </div>
          </div>

          {TECH.map(({ name, Icon, position }, i) => (
            <div
              key={name}
              ref={satelliteRefs[i]}
              className={cn(
                "absolute z-10 flex flex-col items-center gap-2",
                position,
              )}
            >
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200/90 bg-white/95 shadow-md backdrop-blur-sm",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                  "hover:-translate-y-0.5 hover:border-[#875BF8]/30 hover:shadow-lg",
                )}
              >
                <Icon
                  className="h-7 w-7 text-[#6B3FD4]"
                  strokeWidth={1.65}
                  aria-hidden
                />
              </div>
              <span className="type-label tracking-[0.14em] text-gray-500">
                {name}
              </span>
            </div>
          ))}

          <div
            ref={centerRef}
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
          >
            <div
              className={cn(
                "flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-3xl border-2 border-[#875BF8]/35 bg-white shadow-[0_20px_60px_-28px_rgba(135,91,248,0.45)]",
                "ring-4 ring-[#875BF8]/10",
              )}
            >
              <span className="text-lg font-bold tracking-tight text-gray-900">
                DrCode
              </span>
              <span className="type-label mt-0.5 text-[#875BF8]">
                Stack
              </span>
            </div>
          </div>

          <div
            ref={productRef}
            className="absolute right-[1%] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center"
          >
            <div className="flex h-[6.25rem] w-[6.25rem] flex-col items-center justify-center rounded-3xl border border-emerald-300/60 bg-white shadow-[0_16px_50px_-30px_rgba(5,150,105,0.35)]">
              <Package className="h-6 w-6 text-emerald-700" strokeWidth={1.8} aria-hidden />
              <span className="type-label mt-2 text-emerald-700/90">
                Product
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
