"use client";

import type { ReactNode } from "react";
import { revealDelay, scrollReveal, useScrollReveal } from "@/src/lib/scrollReveal";
import { cn } from "@/src/lib/utils";

type MeetPastorRevealGridProps = {
  gridClassName: string;
  portrait: ReactNode;
  titleBlock: ReactNode;
  bodyAndQuote: ReactNode;
};

export function MeetPastorRevealGrid({
  gridClassName,
  portrait,
  titleBlock,
  bodyAndQuote,
}: MeetPastorRevealGridProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={gridClassName}>
      <div className="flex min-w-0 flex-col text-left lg:col-start-2 lg:row-start-1 lg:self-start">
        <div
          className={cn(
            scrollReveal.fromRight,
            visible && scrollReveal.fromRightInView,
          )}
        >
          {titleBlock}
        </div>
      </div>

      <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
        <div
          className={cn(
            scrollReveal.fromLeft,
            visible && scrollReveal.fromLeftInView,
          )}
        >
          {portrait}
        </div>
      </div>

      <div className="flex min-w-0 flex-col text-left lg:col-start-2 lg:row-start-2 lg:self-start">
        <div
          className={cn(
            scrollReveal.fromRight,
            visible && scrollReveal.fromRightInView,
          )}
          style={revealDelay(110)}
        >
          {bodyAndQuote}
        </div>
      </div>
    </div>
  );
}
