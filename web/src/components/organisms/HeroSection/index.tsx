/**
 * Organism: HeroSection
 * Desktop (lg+): 50/50 column layout — unchanged.
 * Mobile: stacked — headline, subtext, centered church, info row, Bible study line.
 */

import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { HeroSectionContent } from "./HeroSectionContent";
import type { HeroSectionProps } from "./HeroSection.types";

const defaultGrass = "/grass.svg";

function HeroGrass({ src }: { src: string }) {
  return (
    <div
      className="relative z-30 -mt-3 w-full min-w-0 shrink-0 sm:-mt-4"
      aria-hidden
    >
      <div className="relative h-[min(16svh,7rem)] w-full min-h-[5.5rem] sm:min-h-24 sm:h-[min(14svh,6.5rem)]">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover object-bottom"
          role="presentation"
          loading="eager"
          sizes="100vw"
          unoptimized={src.endsWith(".svg")}
        />
      </div>
    </div>
  );
}

export function HeroSection({
  heading,
  subtext,
  address,
  time,
  bibleStudy,
  churchImageSrc,
  churchImageAlt,
  mapIconSrc,
  clockIconSrc,
  grassImageSrc = defaultGrass,
  className,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={cn(
        "relative flex w-full min-w-0 shrink-0 flex-col overflow-x-clip bg-transparent text-[#1a1a1a]",
        "max-lg:h-auto max-lg:min-h-0",
        "lg:h-svh lg:min-h-0 lg:overflow-y-hidden",
        className,
      )}
    >
      <div className="relative z-10 flex w-full min-h-0 min-w-0 max-lg:flex-none flex-col pt-16 min-[400px]:pt-20 sm:pt-[5.25rem] lg:flex-1 lg:pt-20">
        <HeroSectionContent
          heading={heading}
          subtext={subtext}
          address={address}
          time={time}
          bibleStudy={bibleStudy}
          churchImageSrc={churchImageSrc}
          churchImageAlt={churchImageAlt}
          mapIconSrc={mapIconSrc}
          clockIconSrc={clockIconSrc}
        />
      </div>

      <HeroGrass src={grassImageSrc} />
    </section>
  );
}
