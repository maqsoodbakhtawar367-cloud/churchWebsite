import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { cormorantTitle, jost } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import type { SiteFooterProps } from "./SiteFooter.types";

const nameSerif = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const OLIVE_BG = "#5c6b3d";

const DEFAULT_HEADING_LOGO = "/white_logo.png";
const DEFAULT_LEFT_MARK = "/left_mark.png";
const DEFAULT_RIGHT_MARK = "/right_church_mark.png";

export function SiteFooter({
  mission,
  quickLinks,
  copyrightLine,
  headingLogoSrc = DEFAULT_HEADING_LOGO,
  logoAlt = "",
  leftMarkSrc = DEFAULT_LEFT_MARK,
  rightMarkSrc = DEFAULT_RIGHT_MARK,
  nameLine1 = "St. Matthew's",
  nameLine2 = "Lutheran Church",
  className,
}: SiteFooterProps) {
  return (
    <footer
      className={cn(
        "mt-10 w-full min-w-0 pt-3 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:mt-12 sm:pt-5 sm:pb-9 md:pb-11",
        className,
      )}
    >
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <div
          className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl px-4 py-6 shadow-lg shadow-black/10 min-[420px]:rounded-[1.75rem] min-[420px]:px-5 min-[420px]:py-7 sm:rounded-[2rem] sm:px-7 sm:py-8 md:px-9 md:py-9 lg:px-11 lg:py-10 xl:max-w-none xl:px-12 2xl:px-16"
          style={{ backgroundColor: OLIVE_BG }}
        >
          {/* In-page target for nav / footer "Donate" links */}
          <div id="donate" className="h-0 w-0 overflow-hidden" tabIndex={-1} aria-hidden />

          {/* Watermark church marks — desktop only so mobile stays clean */}
          <div
            className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-[inherit] lg:block"
            aria-hidden
          >
            {/* Left: full image, upper-left — lighter / larger / tucked higher */}
            <Image
              src={leftMarkSrc}
              alt=""
              width={400}
              height={400}
              className="absolute -left-2 top-2 z-0 h-auto w-[min(11rem,32vw)] max-w-none object-contain object-left object-top opacity-[0.28] brightness-[1.12] sm:-left-3 sm:top-3 sm:w-[min(13rem,28vw)] md:-left-2 md:top-4 md:w-[min(15rem,26vw)] lg:w-[min(16rem,22vw)]"
            />
            {/* Right: full image (no clip — old layout used overflow + translate and hid part of the PNG) */}
            <Image
              src={rightMarkSrc}
              alt=""
              width={400}
              height={400}
              className="absolute bottom-[3.75rem] -right-2 z-0 h-auto w-[min(10rem,28vw)] max-w-none object-contain object-right object-bottom opacity-[0.28] brightness-[1.12] sm:bottom-[4.25rem] sm:-right-3 sm:w-[min(11.5rem,26vw)] md:bottom-[4.5rem] md:-right-2 md:w-[min(13rem,24vw)]"
            />
          </div>

          <div className="relative z-10 flex w-full min-w-0 flex-col items-center text-center">
            <div className="flex w-full min-w-0 max-w-2xl flex-col items-center justify-center gap-2 sm:max-w-4xl sm:flex-row sm:gap-3 md:max-w-5xl md:gap-4 lg:max-w-6xl lg:gap-5 xl:max-w-none xl:gap-6">
              <Image
                src={headingLogoSrc}
                alt={logoAlt}
                width={200}
                height={80}
                className="h-12 w-auto max-w-[min(100%,11.5rem)] shrink-0 object-contain min-[420px]:h-[3.25rem] min-[420px]:max-w-[12.5rem] sm:h-14 sm:max-w-[14rem] md:h-[4rem] md:max-w-[15rem] lg:h-[4.25rem] lg:max-w-[16rem]"
                unoptimized={headingLogoSrc.endsWith(".svg")}
              />
              <div className="flex min-w-0 flex-col items-center text-center leading-tight text-white sm:items-start sm:text-left">
                <span
                  className={cn(
                    nameSerif.className,
                    "text-[clamp(1.35rem,3.5vw+0.5rem,2.25rem)] font-semibold sm:text-2xl md:text-3xl lg:text-[2.125rem] lg:leading-tight",
                  )}
                >
                  {nameLine1}
                </span>
                <span
                  className={cn(
                    jost.className,
                    "mt-1 max-w-[24ch] text-[0.8125rem] font-medium tracking-wide text-white/95 min-[420px]:max-w-none min-[420px]:text-sm sm:text-base md:text-lg lg:text-xl",
                  )}
                >
                  {nameLine2}
                </span>
              </div>
            </div>

            <p
              className={cn(
                jost.className,
                "mx-auto mt-6 w-full max-w-3xl px-1 text-pretty text-center text-[0.9375rem] font-light leading-relaxed tracking-normal text-[#FFFFFF99] min-[420px]:text-base min-[420px]:leading-7 sm:mt-8 sm:max-w-4xl sm:text-lg sm:leading-8 md:max-w-5xl md:text-xl md:leading-8 lg:max-w-6xl xl:max-w-[min(100%,48rem)] 2xl:max-w-[min(100%,52rem)]",
              )}
            >
              {mission}
            </p>

            <div className="mt-6 w-full min-w-0 sm:mt-8 md:mt-10">
              <p
                className={cn(
                  cormorantTitle.className,
                  "text-[clamp(1.35rem,2.5vw+0.75rem,2.125rem)] font-normal leading-none tracking-normal text-white md:text-4xl lg:text-[2.5rem]",
                  "max-lg:italic lg:not-italic",
                )}
              >
                Quick Links
              </p>
              <nav
                className={cn(
                  jost.className,
                  "mt-3 grid w-full max-w-xl grid-cols-1 justify-items-stretch gap-x-8 gap-y-1.5 min-[480px]:max-w-2xl min-[480px]:grid-cols-2 min-[480px]:justify-items-center sm:mt-4 sm:max-w-3xl sm:gap-y-2 md:max-w-4xl lg:mt-4 lg:flex lg:max-w-5xl lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-9 lg:gap-y-2 xl:w-full xl:max-w-none xl:gap-x-10 xl:gap-y-2 2xl:gap-x-12",
                )}
                aria-label="Footer quick links"
              >
                {quickLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    prefetch={false}
                    className={cn(
                      "inline-flex min-h-10 w-full max-w-md items-center justify-center rounded-lg px-3 py-1.5 text-center text-[15px] font-normal leading-snug tracking-normal text-white underline decoration-solid underline-offset-[0.2em] decoration-from-font transition-opacity [text-decoration-skip-ink:auto] hover:bg-white/[0.06] hover:opacity-95 min-[420px]:text-base sm:max-w-none sm:px-4 sm:text-lg",
                      "lg:inline-flex lg:w-auto lg:min-h-10 lg:shrink-0 lg:px-3",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-6 w-full min-w-0 max-w-5xl border-t border-dashed border-white/40 sm:mt-8 md:mt-10 lg:max-w-6xl xl:max-w-none" />

            <p
              className={cn(
                jost.className,
                "mt-4 w-full max-w-5xl px-2 text-pretty text-center text-sm font-normal leading-relaxed text-white/85 sm:mt-5 sm:text-base md:mt-6 md:text-lg lg:max-w-6xl xl:max-w-none xl:px-6",
              )}
            >
              {copyrightLine}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
