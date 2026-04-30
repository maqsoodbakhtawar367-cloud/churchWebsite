"use client";

import type { ReactNode } from "react";
import {
  revealDelay,
  revealDurationMs,
  scrollReveal,
  useScrollReveal,
} from "@/src/lib/scrollReveal";
import { cn } from "@/src/lib/utils";
import type { UpcomingEventItem } from "./UpcomingEventsSection.types";
import { UpcomingEventRow } from "./UpcomingEventRow";

/** Main title slide-up length. */
const HEADER_REVEAL_MS = 1000;
/** Each event row: animation length and time until the next row starts (one-by-one). */
const ROW_REVEAL_MS = 650;

type UpcomingEventsRevealProps = {
  header: ReactNode;
  events: UpcomingEventItem[];
  cormorantClassName: string;
  jostClassName: string;
};

export function UpcomingEventsReveal({
  header,
  events,
  cormorantClassName,
  jostClassName,
}: UpcomingEventsRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="mx-auto w-full max-w-5xl">
      <div
        className={cn(
          scrollReveal.fromBottom,
          visible && scrollReveal.fromBottomInView,
        )}
        style={revealDurationMs(HEADER_REVEAL_MS)}
      >
        {header}
      </div>

      <ul className="w-full">
        {events.map((event, index) => {
          const isLast = index === events.length - 1;
          return (
            <li key={event.id}>
              <div
                className={cn(
                  "border-b border-[#1a1a1a]/10 py-8 sm:py-8 md:py-10",
                  isLast && "border-b-0",
                  scrollReveal.fromBottom,
                  visible && scrollReveal.fromBottomInView,
                )}
                style={{
                  ...revealDelay(HEADER_REVEAL_MS + index * ROW_REVEAL_MS),
                  ...revealDurationMs(ROW_REVEAL_MS),
                }}
              >
                <UpcomingEventRow
                  event={event}
                  cormorantClassName={cormorantClassName}
                  jostClassName={jostClassName}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
