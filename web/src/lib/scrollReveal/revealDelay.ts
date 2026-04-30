import type { CSSProperties } from "react";

/** Sets `--reveal-delay` for slide-in keyframes (used with scrollReveal styles). */
export function revealDelay(ms: number): CSSProperties {
  return { ["--reveal-delay" as string]: `${ms}ms` };
}

/** Sets `--reveal-duration` (how long the slide runs). Higher = slower. Default in CSS is 2.5s. */
export function revealDurationMs(ms: number): CSSProperties {
  return { ["--reveal-duration" as string]: `${ms}ms` };
}
