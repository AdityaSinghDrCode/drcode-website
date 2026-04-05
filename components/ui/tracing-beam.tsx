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
    offset: ["start start", "end start"],
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
    useTransform(scrollYProgress, [0, 0.8], [50, Math.max(svgHeight, 1)]),
    {
      stiffness: 320,
      damping: 42,
      mass: 0.85,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 200, 1)]),
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
      <div className="absolute top-3 -left-4 md:-left-8">
        <motion.div
          transition={{
            duration: 0.55,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          animate={{
            boxShadow: hasScrolled
              ? "none"
              : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.55,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            animate={{
              backgroundColor: hasScrolled ? "white" : "#10b981",
              borderColor: hasScrolled ? "white" : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${h}`}
          width="20"
          height={h}
          className="ml-4 block"
          aria-hidden
        >
          <path
            d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
