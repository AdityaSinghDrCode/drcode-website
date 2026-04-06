"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const STAGGER = 0.035;

function isSpaceChar(c: string) {
  return c === " " || c === "\u00a0";
}

export default function TextRoll({
  children,
  className,
  center = false,
  active,
}: {
  children: string;
  className?: string;
  center?: boolean;
  active?: boolean;
}) {
  const shouldUseSelfHover = active === undefined;

  return (
    <motion.span
      initial="initial"
      animate={active ? "hovered" : "initial"}
      whileHover={shouldUseSelfHover ? "hovered" : undefined}
      className={cn(
        "relative inline-block overflow-hidden text-black dark:text-white/90",
        className,
      )}
      style={{
        lineHeight: 1.15,
      }}
    >
      <div className="min-h-[1.15em]">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;
          const space = isSpaceChar(l);

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className={cn(
                "inline-block shrink-0 align-top",
                space && "w-[0.35em] min-w-[0.35em]",
              )}
              key={i}
            >
              {space ? "\u00a0" : l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0 min-h-[1.15em]">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;
          const space = isSpaceChar(l);

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className={cn(
                "inline-block shrink-0 align-top",
                space && "w-[0.35em] min-w-[0.35em]",
              )}
              key={i}
            >
              {space ? "\u00a0" : l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
}
