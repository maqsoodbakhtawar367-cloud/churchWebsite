"use client";

import type { ReactNode } from "react";
import { cormorantTitle, jost } from "@/src/lib/fonts";
import {
  revealDelay,
  revealDurationMs,
  scrollReveal,
  useScrollReveal,
} from "@/src/lib/scrollReveal";
import { cn } from "@/src/lib/utils";
import type { Pillar } from "./AboutPillarsSection.types";

/** Left heading and right intro animate together; pillars wait until this finishes. */
const INTRO_ROW_MS = 950;
const afterIntroMs = INTRO_ROW_MS;

const IMAGE_MS = 1000;
const TITLE_MS = 700;
const BODY_MS = 700;

type AboutPillarsRevealLayoutProps = {
  headingClassName: string;
  introClassName: string;
  mainHeading: string;
  intro: ReactNode;
  pillars: Pillar[];
};

export function AboutPillarsRevealLayout({
  headingClassName,
  introClassName,
  mainHeading,
  intro,
  pillars,
}: AboutPillarsRevealLayoutProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full min-w-0">
      <div className="grid w-full min-w-0 grid-cols-1 gap-8 gap-y-6 max-lg:justify-items-center lg:grid-cols-2 lg:items-start lg:justify-items-stretch lg:gap-12 xl:gap-16">
        <h2
          className={cn(
            headingClassName,
            scrollReveal.fromLeft,
            visible && scrollReveal.fromLeftInView,
          )}
          style={revealDurationMs(INTRO_ROW_MS)}
        >
          {mainHeading}
        </h2>
        <div
          className={cn(
            introClassName,
            scrollReveal.fromRight,
            visible && scrollReveal.fromRightInView,
          )}
          style={revealDurationMs(INTRO_ROW_MS)}
        >
          {intro}
        </div>
      </div>

      <div className="my-10 w-full min-w-0 sm:my-12 md:my-14">
        <div className="grid w-full min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {pillars.map((p) => (
            <article
              key={p.id}
              className={cn(
                "flex w-full min-w-0 max-w-md flex-col items-center text-center",
                "lg:max-w-none lg:items-center lg:text-center",
              )}
            >
              <div
                className={cn(
                  scrollReveal.fromBottom,
                  visible && scrollReveal.fromBottomInView,
                )}
                style={{
                  ...revealDelay(afterIntroMs),
                  ...revealDurationMs(IMAGE_MS),
                }}
              >
                <div className="mb-2 flex h-32 w-32 items-center justify-center sm:mb-5 sm:h-36 sm:w-36">
                  {p.image}
                </div>
              </div>

              <h3
                className={cn(
                  cormorantTitle.className,
                  scrollReveal.fromBottom,
                  visible && scrollReveal.fromBottomInView,
                  "text-center text-[36px] font-normal not-italic leading-none tracking-normal text-[#424242]",
                )}
                style={{
                  ...revealDelay(afterIntroMs + IMAGE_MS),
                  ...revealDurationMs(TITLE_MS),
                }}
              >
                {p.title}
              </h3>

              <div
                className={cn(
                  jost.className,
                  scrollReveal.fromBottom,
                  visible && scrollReveal.fromBottomInView,
                  "mt-3 w-full text-center text-[16px] font-normal not-italic leading-8 tracking-normal text-[#42424299] sm:mt-4 [&_p]:m-0",
                )}
                style={{
                  ...revealDelay(afterIntroMs + IMAGE_MS + TITLE_MS),
                  ...revealDurationMs(BODY_MS),
                }}
              >
                {p.body}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
