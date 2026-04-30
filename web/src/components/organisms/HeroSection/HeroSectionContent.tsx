"use client";

import Image from "next/image";
import { InfoBadge } from "@/src/components/molecules/InfoBadge";
import { cormorantTitle, jostBody } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import {
  revealDelay,
  revealDurationMs,
  scrollReveal,
  useScrollReveal,
} from "@/src/lib/scrollReveal";
import { cn } from "@/src/lib/utils";
import type { HeroSectionProps } from "./HeroSection.types";

const CHURCH_W = 820;
const CHURCH_H = 1150;

const defaultChurch = "/church.svg";
const defaultMap = "/map.svg";
const defaultClock = "/clock.svg";

/** Slower than default scroll-reveal (1s) so the hero feels gentler. */
const HERO_REVEAL_MS = 1750;

export function HeroSectionContent({
  heading,
  subtext,
  address,
  time,
  bibleStudy,
  churchImageSrc = defaultChurch,
  churchImageAlt = "Church building",
  mapIconSrc = defaultMap,
  clockIconSrc = defaultClock,
}: HeroSectionProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.08,
  });

  const mapIcon = (
    <Image
      src={mapIconSrc}
      alt=""
      width={40}
      height={40}
      className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
      role="presentation"
      unoptimized={mapIconSrc.endsWith(".svg")}
    />
  );
  const clockIcon = (
    <Image
      src={clockIconSrc}
      alt=""
      width={40}
      height={40}
      className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
      role="presentation"
      unoptimized={clockIconSrc.endsWith(".svg")}
    />
  );

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-0 w-full min-w-0 flex-col max-lg:flex-none lg:flex-1",
        SITE_HORIZONTAL_GUTTER,
      )}
    >
      {/* ── Mobile / tablet < lg ───────────────────────────────────────── */}
      <div className="flex min-h-0 w-full min-w-0 shrink-0 flex-col pb-8 pt-2 sm:pb-10 lg:hidden">
        <div
          className={cn(
            scrollReveal.fromLeft,
            visible && scrollReveal.fromLeftInView,
            "flex w-full min-w-0 max-w-full flex-col items-start text-left",
          )}
          style={revealDurationMs(HERO_REVEAL_MS)}
        >
          <h3
            className={cn(
              cormorantTitle.className,
              "w-full max-w-full text-left not-italic tracking-normal text-[#1a1a1a]",
              "leading-[1.05] text-[clamp(1.75rem,6.5vw,2.35rem)]",
            )}
          >
            {heading}
          </h3>
          <p
            className={cn(
              jostBody.className,
              "mt-4 w-full max-w-full text-left font-light not-italic tracking-normal text-[#42424299]",
              "text-[15px] leading-6 min-[400px]:text-base min-[400px]:leading-[26px]",
            )}
          >
            {subtext}
          </p>
        </div>

        <div
          className={cn(
            scrollReveal.fromRight,
            visible && scrollReveal.fromRightInView,
            "relative mx-auto mt-12 flex w-full max-w-[28rem] min-w-0 flex-col items-center justify-center px-2 sm:mt-14 sm:px-0",
          )}
          style={revealDurationMs(HERO_REVEAL_MS)}
        >
          <div
            className={cn(
              "flex w-full max-w-[520px] items-end justify-center",
              "h-[min(42svh,20rem)] min-[400px]:h-[min(44svh,22rem)] sm:h-[min(46svh,24rem)]",
            )}
          >
            <Image
              src={churchImageSrc}
              alt={churchImageAlt}
              width={CHURCH_W}
              height={CHURCH_H}
              className={cn(
                "h-full w-full max-h-full object-contain object-bottom translate-y-5 sm:translate-y-6",
                "[filter:drop-shadow(0_8px_24px_rgba(0,0,0,0.12))]",
              )}
              priority
              loading="eager"
              unoptimized={churchImageSrc.endsWith(".svg")}
            />
          </div>
        </div>

        <div
          className={cn(
            scrollReveal.fromLeft,
            visible && scrollReveal.fromLeftInView,
          )}
          style={{
            ...revealDelay(220),
            ...revealDurationMs(HERO_REVEAL_MS),
          }}
          role="group"
          aria-label="Service location and time"
        >
          <div className="mt-8 w-full min-w-0 sm:mt-10">
            <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-3 border-t border-[#1a1a1a]/10 pt-6 sm:gap-x-4 sm:pt-7">
              <InfoBadge preLine className="w-auto min-w-0 shrink" icon={mapIcon} text={address} />
              <div
                className="h-10 w-px shrink-0 self-center bg-[#1a1a1a]/15"
                role="separator"
                aria-hidden
              />
              <InfoBadge className="w-auto min-w-0 shrink" icon={clockIcon} text={time} />
            </div>
            <p
              className={cn(
                jostBody.className,
                "mt-4 w-full text-center text-sm font-normal leading-snug text-[#424242] sm:mt-5 sm:text-[15px]",
              )}
            >
              {bibleStudy}
            </p>
          </div>
        </div>
      </div>

      {/* ── Desktop lg+ ───────────────────────────────────────────────── */}
      <div className="hidden min-h-0 w-full min-w-0 flex-1 flex-col lg:flex">
        <div className="grid min-h-0 w-full min-w-0 flex-1 grid-cols-1 gap-8 pb-4 min-[500px]:gap-10 min-[500px]:pb-6 sm:pb-0 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:items-stretch lg:gap-x-8 lg:gap-y-0 lg:pb-0 xl:gap-x-10 2xl:gap-x-12">
          <div
            className={cn(
              scrollReveal.fromLeft,
              visible && scrollReveal.fromLeftInView,
              "flex h-full min-h-0 w-full min-w-0 max-w-full flex-col justify-center",
            )}
            style={revealDurationMs(HERO_REVEAL_MS)}
          >
            <div className="flex w-full min-w-0 max-w-full flex-col items-start text-left">
              <h3
                className={cn(
                  cormorantTitle.className,
                  "w-full max-w-full ms-6 pl-10 text-left not-italic tracking-normal text-[#1a1a1a]",
                  "leading-[100%] text-4xl min-[400px]:text-5xl sm:text-5xl md:text-6xl",
                  "lg:max-w-full lg:text-4xl xl:text-5xl 2xl:text-[72px]",
                )}
              >
                {heading}
              </h3>

              <p
                className={cn(
                  jostBody.className,
                  "font-light mt-4  ms-6 pl-10 w-full max-w-full text-left not-italic tracking-normal text-[#42424299]",
                  "text-sm leading-6 min-[400px]:mt-5",
                  "min-[400px]:text-[18px] min-[400px]:leading-[24px] sm:mt-6",
                  "sm:text-[20px] sm:leading-[28px] lg:max-w-[32rem] xl:max-w-[36rem]",
                )}
              >
                {subtext}
              </p>

              <div
                role="group"
                aria-label="Service location and time"
                className="mt-4 w-full ms-5 pl-10 max-w-full min-[400px]:mt-5 sm:mt-6"
              >
                <div className="w-full pt-4 min-[400px]:pt-5 sm:pt-5">
                  <div className="w-full pl-2 min-[400px]:pl-3 sm:pl-4 md:pl-5 lg:pl-6">
                    <div className="flex w-full min-w-0 flex-col items-start justify-start gap-3 sm:flex-row sm:items-stretch sm:gap-4 md:gap-6 lg:gap-8">
                      <InfoBadge
                        preLine
                        className="w-full min-w-0 sm:w-auto sm:shrink"
                        icon={mapIcon}
                        text={address}
                      />

                      <div
                        className="hidden w-px shrink-0 self-stretch bg-[#1a1a1a]/15 sm:mx-0 sm:block"
                        role="separator"
                      />

                      <InfoBadge
                        className="w-full min-w-0 sm:w-auto sm:shrink"
                        icon={clockIcon}
                        text={time}
                      />
                    </div>

                    <p
                      className={cn(
                        cormorantTitle.className,
                        "mt-3 w-full min-w-0 pl-[3.25rem] text-left text-sm not-italic tracking-normal text-[#1a1a1a] sm:mt-4 sm:text-base",
                      )}
                    >
                      {bibleStudy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              scrollReveal.fromRight,
              visible && scrollReveal.fromRightInView,
              "relative flex min-h-[16rem] min-w-0 flex-col overflow-visible sm:min-h-[18rem] lg:min-h-0",
            )}
            style={revealDurationMs(HERO_REVEAL_MS)}
          >
            <div className="flex h-full w-full min-h-0 min-w-0 flex-1 items-end justify-end self-stretch">
              <div
                className={cn(
                  "mt-10 flex min-h-0 w-full max-w-[820px] items-end justify-end sm:mt-12 md:mt-14 lg:mt-16 xl:mt-[4.5rem] 2xl:mt-24",
                  "h-[min(60svh,40rem)] max-h-[48rem] sm:h-[min(68svh,48rem)]",
                  "md:h-[min(78svh,56rem)]",
                  "lg:max-h-[min(1150px,calc(100dvh-4rem))] lg:h-[min(1150px,calc(100dvh-4rem))]",
                  "xl:max-h-[min(1200px,calc(100dvh-3.5rem))] xl:h-[min(1200px,calc(100dvh-3.5rem))]",
                  "2xl:max-h-[min(1200px,calc(100dvh-3rem))] 2xl:h-[min(1200px,calc(100dvh-3rem))]",
                )}
              >
                <Image
                  src={churchImageSrc}
                  alt={churchImageAlt}
                  width={CHURCH_W}
                  height={CHURCH_H}
                  className={cn(
                    "h-full w-full max-w-[820px] origin-bottom-right object-contain object-bottom object-right will-change-transform",
                    "translate-x-2 translate-y-7 min-[400px]:translate-x-3 min-[400px]:translate-y-8",
                    "sm:translate-x-4 sm:translate-y-9 md:translate-x-5 md:translate-y-10",
                    "lg:translate-x-10 lg:translate-y-14 xl:translate-x-12 xl:translate-y-16 2xl:translate-x-14 2xl:translate-y-[4.5rem]",
                    "[filter:drop-shadow(0_8px_24px_rgba(0,0,0,0.12))]",
                  )}
                  priority
                  loading="eager"
                  unoptimized={churchImageSrc.endsWith(".svg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
