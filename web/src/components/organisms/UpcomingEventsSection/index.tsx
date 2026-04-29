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

/** Decorative brush under “Events” — same asset as gallery heading (intrinsic 359×119). */
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
        <div className="mx-auto w-full max-w-5xl">
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

          <ul className="w-full">
            {events.map((event) => (
              <li
                key={event.id}
                className="border-b border-[#1a1a1a]/10 py-8 last:border-b-0 sm:py-8 md:py-10"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,11rem)_1fr_minmax(0,14rem)] md:items-start md:gap-8 lg:gap-12">
                  {/* Date */}
                  <div className="flex flex-row items-start justify-center gap-3 md:justify-start md:gap-4">
                    <span
                      className={cn(
                        cormorant.className,
                        "min-w-[2ch] text-3xl font-light leading-none tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl",
                      )}
                    >
                      {event.day}
                    </span>
                    <div
                      className={cn(
                        jost.className,
                        "flex flex-col justify-center pt-1 text-left text-xs font-normal leading-snug tracking-normal text-[#424242]/90 sm:text-sm md:text-left",
                      )}
                    >
                      <span>{event.month}</span>
                      <span>{event.year}</span>
                    </div>
                  </div>

                  {/* Title + time */}
                  <div className="flex flex-col gap-2 items-center text-center md:items-center md:text-center">
                    <h3
                      className={cn(
                        cormorant.className,
                        "text-xl font-medium leading-snug text-[#1a1a1a] sm:text-2xl md:text-[1.65rem]",
                      )}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={cn(
                        jost.className,
                        "text-xs font-normal tracking-normal text-[#42424299]",
                      )}
                    >
                      {event.timeRange}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1 items-center text-center md:items-end md:text-right">
                    <span
                      className={cn(
                        jost.className,
                        "text-[10px] font-medium uppercase tracking-[0.14em] text-[#424242]/70 sm:text-xs",
                      )}
                    >
                      Location
                    </span>
                    <p
                      className={cn(
                        cormorant.className,
                        "max-w-xs text-sm font-normal leading-snug text-[#1a1a1a] sm:text-base",
                        "max-md:mx-auto md:ml-auto",
                      )}
                    >
                      {event.address}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
