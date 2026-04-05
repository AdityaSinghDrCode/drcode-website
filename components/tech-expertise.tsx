"use client";

import { type ComponentProps, useMemo, useRef } from "react";
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

function desktopNodeEntrance(
  reduced: boolean | null,
  delaySec: number,
): Pick<
  ComponentProps<typeof motion.div>,
  "initial" | "whileInView" | "viewport" | "transition"
> {
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.58, ease: smoothEase, delay: delaySec },
  };
}

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
      className="relative overflow-hidden bg-background px-6 py-24 md:py-32"
      aria-labelledby="tech-expertise-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,hsl(var(--brand)/0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_72%_58%_at_50%_45%,#000_35%,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.68, ease: smoothEase }}
        >
          <p className="type-eyebrow mb-3 text-brand">
            Capabilities
          </p>
          <h2
            id="tech-expertise-heading"
            className="type-section-title mb-4 text-foreground"
          >
            Our tech expertise
          </h2>
          <p className="type-body-lg mx-auto max-w-xl text-muted-foreground">
            You set direction and outcomes; we own the engineering path—product surface,
            APIs, data, cloud, and AI—so everything ships as one production-ready release.
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
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: smoothEase },
              },
            }}
            className="flex items-center gap-3 rounded-2xl border border-border/90 bg-card px-4 py-3 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
              <Users className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="type-nav font-semibold text-foreground">Your team</p>
              <p className="type-nav text-muted-foreground">
                Goals, users, and constraints
              </p>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" aria-hidden />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: smoothEase },
              },
            }}
            className="rounded-2xl border border-brand/30 bg-card px-4 py-4 shadow-[0_16px_42px_-28px_hsl(var(--brand)/0.4)]"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/12 text-brand-dark">
                <span className="text-sm font-bold">D</span>
              </span>
              <div>
                <p className="type-nav font-semibold text-foreground">DrCode</p>
                <p className="type-nav text-muted-foreground">
                  Where the full stack comes together
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {TECH.map(({ name, Icon }) => (
                <div
                  key={name}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border border-border/90 bg-muted/70 px-2.5 py-2",
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-brand-dark" aria-hidden />
                  <span className="type-chip truncate text-foreground/80">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: smoothEase },
              },
            }}
            className="flex items-center gap-3 rounded-2xl border border-border/90 bg-card px-4 py-3 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
              <Package className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="type-nav font-semibold text-foreground">Product</p>
              <p className="type-nav text-muted-foreground">Delivered and production-ready</p>
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
                duration={6.2}
                delay={0}
                pathColor="rgb(148 163 184)"
                pathWidth={1.8}
                pathOpacity={0.2}
                gradientStartColor="#875BF8"
                gradientStopColor="#a78bfa"
                repeatType="loop"
                ease="linear"
                repeatDelay={0}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={productRef}
                curvature={16}
                duration={5.5}
                delay={0.2}
                pathColor="rgb(148 163 184)"
                pathWidth={1.8}
                pathOpacity={0.2}
                gradientStartColor="#875BF8"
                gradientStopColor="#34d399"
                repeatType="loop"
                ease="linear"
                repeatDelay={0}
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
                duration={5.4 + (i % 4) * 0.28}
                delay={i * 0.22}
                pathColor="rgb(148 163 184)"
                pathWidth={1.5}
                pathOpacity={0.18}
                gradientStartColor="#875BF8"
                gradientStopColor="#a78bfa"
                repeatType="loop"
                ease="linear"
                repeatDelay={0}
              />
            ))}

          <motion.div
            ref={customerRef}
            className="absolute left-[1%] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center"
            {...desktopNodeEntrance(reduceMotion, 0)}
          >
            <div className="flex h-[6.25rem] w-[6.25rem] flex-col items-center justify-center rounded-3xl border border-border bg-card shadow-[0_16px_50px_-30px_hsl(var(--foreground)/0.12)]">
              <Users className="h-6 w-6 text-brand-dark" strokeWidth={1.8} aria-hidden />
              <span className="type-label mt-2 text-muted-foreground">
                Your team
              </span>
            </div>
          </motion.div>

          {TECH.map(({ name, Icon, position }, i) => (
            <motion.div
              key={name}
              ref={satelliteRefs[i]}
              className={cn(
                "absolute z-10 flex flex-col items-center gap-2",
                position,
              )}
              {...desktopNodeEntrance(reduceMotion, 0.05 + i * 0.04)}
            >
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl border border-border/90 bg-card/95 shadow-md backdrop-blur-sm",
                  "transition-[transform,box-shadow,border-color] duration-500 ease-out",
                  "hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg",
                )}
              >
                <Icon
                  className="h-7 w-7 text-brand-dark"
                  strokeWidth={1.65}
                  aria-hidden
                />
              </div>
              <span className="type-chip text-muted-foreground">
                {name}
              </span>
            </motion.div>
          ))}

          <motion.div
            ref={centerRef}
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
            {...desktopNodeEntrance(reduceMotion, 0.24)}
          >
            <div
              className={cn(
                "flex w-[8rem] flex-col items-center justify-center gap-1.5 rounded-3xl border-2 border-brand/35 bg-card px-3 py-3 text-center shadow-[0_20px_60px_-28px_hsl(var(--brand)/0.4)]",
                "ring-4 ring-brand/10",
              )}
            >
              <span className="text-lg font-bold leading-none tracking-tight text-foreground">
                DrCode
              </span>
              <span className="whitespace-nowrap text-[11px] font-semibold leading-none tracking-wide text-brand">
                Design · Build · Ship
              </span>
            </div>
          </motion.div>

          <motion.div
            ref={productRef}
            className="absolute right-[1%] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center"
            {...desktopNodeEntrance(reduceMotion, 0.36)}
          >
            <div className="flex h-[6.25rem] w-[6.25rem] flex-col items-center justify-center rounded-3xl border border-emerald-300/60 bg-card shadow-[0_16px_50px_-30px_rgba(5,150,105,0.35)]">
              <Package className="h-6 w-6 text-emerald-700" strokeWidth={1.8} aria-hidden />
              <span className="type-label mt-2 text-emerald-700/90">
                Product
              </span>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}
