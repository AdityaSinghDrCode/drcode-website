"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useSpring,
  useTransform,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const gradientId = `tracing-beam-${useId().replace(/:/g, "")}`;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHasScrolled(latest > 0.01);
  });

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setSvgHeight(el.offsetHeight);

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [32, Math.max(svgHeight, 1)]),
    {
      stiffness: 320,
      damping: 42,
      mass: 0.85,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [32, Math.max(svgHeight - 200, 1)]),
    {
      stiffness: 320,
      damping: 42,
      mass: 0.85,
    },
  );

  const h = Math.max(svgHeight, 1);

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="pointer-events-none absolute top-0 -left-1 z-10 sm:-left-3 md:-left-8">
        <motion.div
          transition={{
            duration: 0.55,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          animate={{
            boxShadow: hasScrolled
              ? "0 0 0 1px hsl(262 83% 58% / 0.25)"
              : "0 2px 12px hsl(262 83% 58% / 0.35), 0 0 0 1px hsl(262 83% 58% / 0.2)",
          }}
          className="ml-[22px] flex h-4 w-4 items-center justify-center rounded-full border border-brand/30 bg-card shadow-sm sm:ml-[25px] sm:h-5 sm:w-5 md:ml-[27px]"
        >
          <motion.div
            transition={{
              duration: 0.55,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            animate={{
              backgroundColor: hasScrolled ? "hsl(270 100% 98%)" : "hsl(262 83% 58%)",
              borderColor: hasScrolled ? "hsl(258 90% 86%)" : "hsl(258 58% 48%)",
            }}
            className="h-2 w-2 rounded-full border border-brand/40 bg-white sm:h-2.5 sm:w-2.5"
          />
        </motion.div>
        <svg
          viewBox={`0 -40 24 ${h + 40}`}
          width="24"
          height={h}
          className="ml-2 block overflow-visible sm:ml-3"
          aria-hidden
        >
          <path
            d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
            fill="none"
            stroke="hsl(262 83% 58%)"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mobile: no SVG filter glow (lighter GPU + clearer on small screens) */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="motion-reduce:hidden md:hidden"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#${gradientId}-glow)`}
            className="motion-reduce:hidden hidden md:block"
          />
          <defs>
            <filter
              id={`${gradientId}-glow`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="1.25" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <motion.linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#ddd6fe" stopOpacity="0.2" />
              <stop offset="0.08" stopColor="#a78bfa" stopOpacity="1" />
              <stop offset="0.35" stopColor="#875BF8" stopOpacity="1" />
              <stop offset="0.92" stopColor="#7c3aed" stopOpacity="0.95" />
              <stop offset="1" stopColor="#c4b5fd" stopOpacity="0.2" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
