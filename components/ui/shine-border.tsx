"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function shineGradient(shineColor: string | string[]) {
  const stops = Array.isArray(shineColor) ? shineColor.join(",") : shineColor
  return `radial-gradient(transparent,transparent, ${stops},transparent,transparent)`
}

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number
  /**
   * Duration of the animation in seconds
   * @default 14
   */
  duration?: number
  /**
   * When `shineHover` is set, animation speed while hovered (seconds)
   * @default 6
   */
  durationHover?: number
  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  shineColor?: string | string[]
  /**
   * Brighter / stronger shine when an ancestor has `group` and the card is hovered.
   */
  shineHover?: string | string[]
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  durationHover = 6,
  shineColor = "#000000",
  shineHover,
  className,
  style,
  ...props
}: ShineBorderProps) {
  const baseStyle = {
    "--border-width": `${borderWidth}px`,
    "--duration": `${duration}s`,
    backgroundImage: shineGradient(shineColor),
    backgroundSize: "300% 300%",
    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    WebkitMaskComposite: "xor" as const,
    maskComposite: "exclude" as const,
    padding: "var(--border-width)",
    ...style,
  } as React.CSSProperties

  const layerClass = cn(
    "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
    "motion-safe:animate-shine",
  )

  return (
    <>
      <div
        style={baseStyle}
        className={cn(layerClass, "opacity-100", className)}
        {...props}
      />
      {shineHover ? (
        <div
          aria-hidden
          style={
            {
              ...baseStyle,
              "--duration": `${durationHover}s`,
              backgroundImage: shineGradient(shineHover),
            } as React.CSSProperties
          }
          className={cn(
            layerClass,
            "opacity-0 transition-opacity duration-300 ease-out motion-reduce:hidden motion-safe:group-hover:opacity-100",
            className,
          )}
        />
      ) : null}
    </>
  )
}
