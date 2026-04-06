"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type Align = "center" | "start";

type AnimatedHeadingHighlightProps = {
  children: ReactNode;
  align?: Align;
  className?: string;
};

/**
 * Section title with a scroll-triggered “marker” underline (brand wash, not a generic gradient blob).
 */
export function AnimatedHeadingHighlight({
  children,
  align = "center",
  className,
}: AnimatedHeadingHighlightProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        "flex w-fit max-w-full flex-col",
        align === "center" ? "mx-auto items-center" : "items-start",
      )}
    >
      <h2
        className={cn(
          "type-section-title text-balance",
          align === "center" ? "text-center" : "text-left",
          className,
        )}
      >
        {children}
      </h2>
      <span className="mt-[0.35em] block w-full -rotate-[0.35deg]">
        <motion.span
          aria-hidden
          className={cn(
            "block h-[0.28em] min-h-[3px] w-full rounded-[3px]",
            "bg-[hsl(var(--brand)/0.42)] shadow-[0_1px_0_hsl(var(--brand)/0.12)]",
          )}
          initial={{ scaleX: reduced ? 1 : 0, opacity: reduced ? 1 : 0.85 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6, margin: "0px 0px -12% 0px" }}
          transition={{
            scaleX: {
              duration: reduced ? 0 : 0.78,
              ease: [0.25, 1, 0.5, 1],
            },
            opacity: { duration: reduced ? 0 : 0.35, ease: "easeOut" },
          }}
          style={{
            transformOrigin: align === "center" ? "50% 50%" : "0% 50%",
          }}
        />
      </span>
    </div>
  );
}
