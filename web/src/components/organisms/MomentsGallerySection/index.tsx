/**
 * Organism: MomentsGallerySection
 * Horizontal photo strip (bow-tie clip), scrollable on x — all breakpoints.
 * Title: two-line on mobile / tablet, inline + brush on lg+.
 */
import Image from "next/image";
import { cormorantTitle } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import type { MomentsGallerySectionProps } from "./MomentsGallerySection.types";

/** Bow-tie clip: curved sides, flat middle band */
const GALLERY_CLIP =
  "polygon(0% 5%, 18% 14%, 32% 18%, 68% 18%, 82% 14%, 100% 5%, 100% 95%, 82% 86%, 68% 82%, 32% 82%, 18% 86%, 0% 95%)";

/** Decorative brush under “Moments” — intrinsic 359×119 */
const GROUP_BRUSH_W = 359;
const GROUP_BRUSH_H = 119;

export function MomentsGallerySection({
  id = "gallery",
  images,
  className,
}: MomentsGallerySectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-w-0 bg-transparent py-14 text-[#1a1a1a] sm:py-16 md:py-20",
        className,
      )}
    >
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <header className="mx-auto max-w-5xl text-center">
          <h2
            className={cn(
              cormorantTitle.className,
              "font-normal tracking-normal [leading-trim:none]",
              "text-[clamp(1.75rem,5vw+0.25rem,68px)] leading-[1.1]",
            )}
          >
            <span className="flex flex-col items-center gap-3 lg:hidden">
              <span className="text-[#424242]">Moments We</span>
              <span className="text-[#8BAE66]">Enjoyed</span>
            </span>

            <span className="hidden flex-wrap items-baseline justify-center gap-x-[0.12em] lg:flex">
              <span className="inline-flex flex-col items-center">
                <span className="text-[#424242]">Moments</span>
                <Image
                  src="/Group.png"
                  alt=""
                  width={GROUP_BRUSH_W}
                  height={GROUP_BRUSH_H}
                  className="pointer-events-none -mt-[0.4em] h-auto w-[min(220px,58vw)] max-w-full select-none object-contain"
                  sizes="(max-width: 1024px) 58vw, 220px"
                  aria-hidden
                />
              </span>
              <span className="text-[#424242]">We</span>
              <span className="text-[#8BAE66]">Enjoyed</span>
            </span>
          </h2>
        </header>
      </div>

      {/* Horizontal gallery — full width overflow; swipe / drag on touch */}
      <div className="relative mt-8 w-full lg:mt-6">
        <div
          className={cn(
            "mx-auto w-full max-w-[100vw] overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth",
            "h-[220px] sm:h-[260px] md:h-[300px] lg:h-[260px] xl:h-[340px] 2xl:h-[360px]",
            "[-webkit-overflow-scrolling:touch]",
          )}
          style={{
            clipPath: GALLERY_CLIP,
            WebkitClipPath: GALLERY_CLIP,
          }}
        >
          <div
            className={cn(
              "flex h-full w-max gap-2 px-4 sm:gap-3 sm:px-6 md:gap-3 md:px-10 lg:gap-3 lg:px-12 xl:gap-4 xl:px-16",
              "touch-pan-x snap-x snap-mandatory",
            )}
          >
            {images.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className={cn(
                  "relative h-full shrink-0 snap-start snap-always",
                  "w-[min(78vw,280px)] sm:w-[260px] md:w-[280px] lg:w-[min(22vw,320px)] xl:w-[min(20vw,340px)]",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 78vw, (max-width: 1536px) 22vw, 340px"
                  draggable={false}
                  unoptimized={item.src.endsWith(".svg")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
