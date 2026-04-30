import { Cormorant_Infant } from "next/font/google";
import { jost } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import { AboutPillarsRevealLayout } from "./AboutPillarsRevealLayout";
import type { AboutPillarsSectionProps } from "./AboutPillarsSection.types";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  style: ["normal"],
});

export function AboutPillarsSection({
  id = "our-church",
  mainHeading,
  intro,
  pillars,
  className,
}: AboutPillarsSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-w-0 mt-5 sm:mt-7 md:mt-9 bg-transparent py-14 text-[#1a1a1a] sm:py-16 md:py-20",
        className,
      )}
    >
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <div className="mx-auto w-full max-w-7xl">
          <AboutPillarsRevealLayout
            headingClassName={cn(
              cormorant.className,
              "w-full min-w-0 text-center text-3xl font-medium leading-tight text-[#424242] [text-wrap:balance]",
              "sm:text-4xl md:text-4xl lg:max-w-[20ch] lg:text-left lg:text-4xl xl:text-5xl",
            )}
            introClassName={cn(
              jost.className,
              "w-full max-w-2xl min-w-0 text-center text-[17px] font-normal not-italic leading-8 tracking-normal text-[#42424299]",
              "lg:max-w-none lg:text-left",
            )}
            mainHeading={mainHeading}
            intro={intro}
            pillars={pillars}
          />
        </div>
      </div>
    </section>
  );
}
