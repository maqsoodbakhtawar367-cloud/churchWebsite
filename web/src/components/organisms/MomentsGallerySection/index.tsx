/**
 * Organism: MomentsGallerySection
 * 3D rotating ring of photos (CSS perspective + preserve-3d); title unchanged.
 */
import type { CSSProperties } from "react";
import Image from "next/image";
import { cormorantTitle } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import type { MomentsGallerySectionProps } from "./MomentsGallerySection.types";
import styles from "./MomentsGallerySection.module.css";

/** Decorative brush under “Moments” — intrinsic 359×119 */
const GROUP_BRUSH_W = 359;
const GROUP_BRUSH_H = 119;

export function MomentsGallerySection({
  id = "gallery",
  images,
  className,
}: MomentsGallerySectionProps) {
  const n = Math.max(images.length, 1);

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
              "text-[clamp(1.5rem,4vw+0.2rem,52px)] leading-[1.1]",
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
                  className="pointer-events-none -mt-[0.4em] h-auto w-[min(176px,52vw)] max-w-full select-none object-contain"
                  sizes="(max-width: 1024px) 52vw, 176px"
                  aria-hidden
                />
              </span>
              <span className="text-[#424242]">We</span>
              <span className="text-[#8BAE66]">Enjoyed</span>
            </span>
          </h2>
        </header>
      </div>

      {/* Full-bleed 3D carousel — viewport-wide scene (breaks out of any implicit alignment) */}
      <div
        className={cn(
          "relative mt-8 w-screen max-w-[100vw] lg:mt-6",
          "-translate-x-1/2 left-1/2",
        )}
      >
        <div className={styles.scene}>
          <div className={styles.sceneInner}>
            <div className={styles.a3dSpread}>
              <div
                className={styles.a3d}
                style={{ ["--n" as string]: String(n) } as CSSProperties}
              >
                {images.map((item, index) => (
                  <div
                    key={`${item.src}-${index}`}
                    className={styles.cardWrap}
                    style={{ ["--i" as string]: String(index) } as CSSProperties}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      quality={88}
                      sizes="(max-width: 640px) 36vw, 280px"
                      draggable={false}
                      unoptimized={item.src.endsWith(".svg")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
