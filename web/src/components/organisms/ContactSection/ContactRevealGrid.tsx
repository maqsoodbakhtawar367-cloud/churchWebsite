"use client";

import type { ReactNode } from "react";
import { revealDelay, scrollReveal, useScrollReveal } from "@/src/lib/scrollReveal";
import { cn } from "@/src/lib/utils";

type ContactRevealGridProps = {
  left: ReactNode;
  right: ReactNode;
};

export function ContactRevealGrid({ left, right }: ContactRevealGridProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16"
    >
      <div className="flex min-w-0 flex-col max-lg:items-center max-lg:text-center lg:items-start lg:text-left">
        <div
          className={cn(
            scrollReveal.fromLeft,
            visible && scrollReveal.fromLeftInView,
          )}
        >
          {left}
        </div>
      </div>

      <div
        className={cn(
          "grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:text-left",
          scrollReveal.fromRight,
          visible && scrollReveal.fromRightInView,
        )}
        style={revealDelay(120)}
      >
        {right}
      </div>
    </div>
  );
}
