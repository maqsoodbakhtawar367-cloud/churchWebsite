
import Image from "next/image";
import { Cormorant_Infant } from "next/font/google";
import { jost } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import { MeetPastorRevealGrid } from "./MeetPastorRevealGrid";
import type { MeetPastorSectionProps } from "./MeetPastorSection.types";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const PASTOR_FRAME_SCALE = 0.92;
const PASTOR_FRAME_W = 452.23480224609375 * PASTOR_FRAME_SCALE;
const PASTOR_FRAME_H = 606.8057250976562 * PASTOR_FRAME_SCALE;
/** Max width of the frame; lower = smaller portrait in the column */
const PASTOR_FRAME_MAX_W_PX = 335;
const PASTOR_FRAME_RADIUS = 226.12 * PASTOR_FRAME_SCALE * (PASTOR_FRAME_MAX_W_PX / 416);

export function MeetPastorSection({
  id = "servants",
  eyebrow = "Meet Our Pastor!",
  body,
  quote,
  attributionName,
  attributionRole,
  imageSrc = "/pastor.svg",
  imageAlt = "Pastor William Pierce",
  className,
}: MeetPastorSectionProps) {
  const portrait = (
    <div className="flex w-full justify-center lg:justify-end lg:pr-24 xl:pr-24">
      <div
        className="relative w-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        style={{
          aspectRatio: `${PASTOR_FRAME_W} / ${PASTOR_FRAME_H}`,
          borderRadius: `${PASTOR_FRAME_RADIUS}px`,
          maxWidth: `min(100%, ${PASTOR_FRAME_MAX_W_PX}px)`,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-[center_15%]"
          sizes={`(max-width: 1024px) 100vw, ${PASTOR_FRAME_MAX_W_PX}px`}
          unoptimized={imageSrc.endsWith(".svg")}
        />
      </div>
    </div>
  );

  const titleBlock = (
    <>
      <p
        className={cn(
          jost.className,
          "text-base font-normal tracking-normal text-[#424242]/85",
          "max-lg:text-center",
        )}
      >
        {eyebrow}
      </p>

      <h2
        className={cn(
          cormorant.className,
          "mt-1.5 max-w-full font-normal not-italic leading-[100%] tracking-normal text-[#1a1a1a]",
          "text-[clamp(1.75rem,4vw+0.35rem,62px)]",
          "[leading-trim:none]",
          "max-lg:text-center",
        )}
      >
        <span className="block">
          <span className="text-[#1a1a1a]">Loving </span>
          <span className="text-[#628141]">God</span>
          <span className="text-[#1a1a1a]">, </span>
          <span className="relative inline-block border-b-[3px] border-[#628141] pb-0.5">
            Loving
          </span>
        </span>
        <span className="mt-2 block text-[#628141]">People</span>
      </h2>
    </>
  );

  const bodyAndQuote = (
    <>
      <p
        className={cn(
          jost.className,
          "mt-4 text-base font-normal leading-7 tracking-normal text-[#42424299] md:text-lg md:leading-8",
          "max-lg:text-center",
        )}
      >
        {body}
      </p>

      <figure className="mt-6 min-w-0 sm:mt-7 max-lg:mx-auto max-lg:max-w-xl">
        <div
          className={cn(
            "flex min-w-0 items-stretch gap-1 sm:gap-2",
            "max-lg:justify-center",
          )}
        >
          <span
            className={cn(
              cormorant.className,
              "self-start text-[2.75rem] font-normal not-italic leading-none text-[#1a1a1a]/75 sm:text-[3.25rem]",
            )}
            aria-hidden
          >
            &ldquo;
          </span>
          <blockquote
            className={cn(
              cormorant.className,
              "min-w-0 flex-1 pt-1 text-base leading-7 tracking-normal text-[#424242]/85 md:text-lg md:leading-8",
              "max-lg:max-w-[28ch] max-lg:text-center",
            )}
          >
            {quote}
          </blockquote>
          <span
            className={cn(
              cormorant.className,
              "self-end text-[2.75rem] font-normal not-italic leading-none text-[#1a1a1a]/75 sm:text-[3.25rem]",
            )}
            aria-hidden
          >
            &rdquo;
          </span>
        </div>
        <figcaption
          className={cn(
            jost.className,
            "mt-4 text-base text-[#424242]/90",
            "max-lg:text-center lg:text-left",
          )}
        >
          <span className="font-semibold text-[#424242]">{attributionName}</span>
          <span className="mt-0.5 block text-sm font-normal text-[#424242]/80">
            {attributionRole}
          </span>
        </figcaption>
      </figure>
    </>
  );

  return (
    <section
      id={id}
      className={cn(
        "w-full min-w-0 bg-transparent py-10 text-[#1a1a1a] sm:py-12 md:py-16",
        className,
      )}
    >
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <MeetPastorRevealGrid
          gridClassName={cn(
            "mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-y-6 sm:gap-y-8",
            "lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-8 lg:gap-y-3 xl:gap-x-10 xl:gap-y-4",
          )}
          portrait={portrait}
          titleBlock={titleBlock}
          bodyAndQuote={bodyAndQuote}
        />
      </div>
    </section>
  );
}
