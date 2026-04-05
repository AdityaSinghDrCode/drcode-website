import type { CSSProperties } from "react";

/**
 * Primary site easing — soft ease-out (no harsh stop).
 * Use with Framer Motion / Motion `transition.ease`.
 */
export const smoothEase: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

type EntranceStyleOptions = {
  isVisible: boolean;
  reducedMotion: boolean;
  index?: number;
  baseDelayMs?: number;
  durationMs?: number;
  stepMs?: number;
  offsetPx?: number;
  direction?: 1 | -1;
};

const ENTRANCE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export function getEntranceStyle({
  isVisible,
  reducedMotion,
  index = 0,
  baseDelayMs = 0,
  durationMs = 680,
  stepMs = 130,
  offsetPx = 18,
  direction = 1,
}: EntranceStyleOptions): CSSProperties {
  if (reducedMotion) {
    return {
      opacity: 1,
      transform: "none",
    };
  }

  const offset = offsetPx * direction;

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${offset}px, 0)`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: ENTRANCE_EASING,
    transitionDelay: `${baseDelayMs + index * stepMs}ms`,
    willChange: "opacity, transform",
  };
}
