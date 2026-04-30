import { cn } from "@/src/lib/utils";
import type { UpcomingEventItem } from "./UpcomingEventsSection.types";

export type UpcomingEventRowProps = {
  event: UpcomingEventItem;
  cormorantClassName: string;
  jostClassName: string;
};

export function UpcomingEventRow({
  event,
  cormorantClassName,
  jostClassName,
}: UpcomingEventRowProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,11rem)_1fr_minmax(0,14rem)] md:items-start md:gap-8 lg:gap-12">
      <div className="flex flex-row items-start justify-center gap-3 md:justify-start md:gap-4">
        <span
          className={cn(
            cormorantClassName,
            "min-w-[2ch] text-3xl font-light leading-none tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl",
          )}
        >
          {event.day}
        </span>
        <div
          className={cn(
            jostClassName,
            "flex flex-col justify-center pt-1 text-left text-xs font-normal leading-snug tracking-normal text-[#424242]/90 sm:text-sm md:text-left",
          )}
        >
          <span>{event.month}</span>
          <span>{event.year}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center text-center md:items-center md:text-center">
        <h3
          className={cn(
            cormorantClassName,
            "text-xl font-medium leading-snug text-[#1a1a1a] sm:text-2xl md:text-[1.65rem]",
          )}
        >
          {event.title}
        </h3>
        <p
          className={cn(
            jostClassName,
            "text-xs font-normal tracking-normal text-[#42424299]",
          )}
        >
          {event.timeRange}
        </p>
      </div>

      <div className="flex flex-col gap-1 items-center text-center md:items-end md:text-right">
        <span
          className={cn(
            jostClassName,
            "text-[10px] font-medium uppercase tracking-[0.14em] text-[#424242]/70 sm:text-xs",
          )}
        >
          Location
        </span>
        <p
          className={cn(
            cormorantClassName,
            "max-w-xs text-sm font-normal leading-snug text-[#1a1a1a] sm:text-base",
            "max-md:mx-auto md:ml-auto",
          )}
        >
          {event.address}
        </p>
      </div>
    </div>
  );
}
