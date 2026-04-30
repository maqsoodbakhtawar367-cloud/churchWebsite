/**
 * Organism: UpcomingEventsSection
 * Three-column rows: date | title + time | location; dividers between rows only.
 */
import Image from "next/image";
import { Cormorant_Infant } from "next/font/google";
import { jost } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import type { UpcomingEventsSectionProps } from "./UpcomingEventsSection.types";
import { UpcomingEventsReveal } from "./UpcomingEventsReveal";


const EVENTS_BRUSH_W = 359;
const EVENTS_BRUSH_H = 119;

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  style: ["normal"],
});

export function UpcomingEventsSection({
  id = "upcoming-events",
  events,
  className,
}: UpcomingEventsSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-w-0 bg-transparent py-10 text-[#1a1a1a] sm:py-12 md:py-16",
        className,
      )}
    >
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <UpcomingEventsReveal
          events={events}
          cormorantClassName={cormorant.className}
          jostClassName={jost.className}
          header={
            <header className="text-center">
              <h2
                className={cn(
                  cormorant.className,
                  "flex flex-wrap items-baseline justify-center gap-x-[0.18em] gap-y-1",
                  "pb-[clamp(1.35rem,4.25vw,2.15rem)]",
                  "font-medium tracking-tight leading-[1.1]",
                  "text-[clamp(1.75rem,3.35vw+0.45rem,2.75rem)]",
                )}
              >
                <span className="text-[#1a1a1a]">Our</span>
                <span className="text-[#8BAE66]">Upcoming</span>
                <span className="relative inline-block">
                  <span className="text-[#1a1a1a]">Events</span>
                  <Image
                    src="/Group.png"
                    alt=""
                    width={EVENTS_BRUSH_W}
                    height={EVENTS_BRUSH_H}
                    className="pointer-events-none absolute left-1/2 top-full h-auto w-[min(180px,48vw)] max-w-none -translate-x-1/2 -translate-y-[0.52em] select-none object-contain"
                    sizes="(max-width: 640px) 48vw, 180px"
                    aria-hidden
                  />
                </span>
              </h2>
            </header>
          }
        />
      </div>
    </section>
  );
}
