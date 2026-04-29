import { Cormorant_Infant } from "next/font/google";
import { PillarColumn } from "@/src/components/molecules/PillarColumn";
import { jost } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
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
          <div className="grid w-full min-w-0 grid-cols-1 gap-8 gap-y-6 max-lg:justify-items-center lg:grid-cols-2 lg:items-start lg:justify-items-stretch lg:gap-12 xl:gap-16">
            <h2
              className={cn(
                cormorant.className,
                "w-full min-w-0 text-center text-3xl font-medium leading-tight text-[#424242] [text-wrap:balance]",
                "sm:text-4xl md:text-4xl lg:max-w-[20ch] lg:text-left lg:text-4xl xl:text-5xl",
              )}
            >
              {mainHeading}
            </h2>
            <div
              className={cn(
                jost.className,
                "w-full max-w-2xl min-w-0 text-center text-[17px] font-normal not-italic leading-8 tracking-normal text-[#42424299]",
                "lg:max-w-none lg:text-left",
              )}
            >
              {intro}
            </div>
          </div>

          <div className="my-10 w-full min-w-0 sm:my-12 md:my-14">
            <div
              className="grid w-full min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8"
            >
              {pillars.map((p) => (
                <PillarColumn
                  key={p.id}
                  image={p.image}
                  title={p.title}
                  footnote={p.footnote}
                >
                  {p.body}
                </PillarColumn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
