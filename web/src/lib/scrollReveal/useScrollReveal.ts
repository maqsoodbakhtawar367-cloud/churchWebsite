"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export type UseScrollRevealOptions = {
  /** Passed to IntersectionObserver */
  rootMargin?: string;
  /** Passed to IntersectionObserver */
  threshold?: number | number[];
  /** If true (default), observer disconnects after the first intersect */
  once?: boolean;
};

/**
 * Observes `ref` and sets `visible` when the element intersects the viewport.
 * Attach `ref` to the element that should trigger the reveal (often a wrapper),
 * or to the animated element itself.
 */
export function useScrollReveal<T extends Element = HTMLElement>(
  options?: UseScrollRevealOptions,
): { ref: RefObject<T | null>; visible: boolean } {
  const {
    rootMargin = "0px 0px -8% 0px",
    threshold = 0.12,
    once = true,
  } = options ?? {};

  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once) io.disconnect();
      },
      { rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, visible };
}
