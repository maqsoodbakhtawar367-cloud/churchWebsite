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
    <footer className={cn("w-full mt-16 min-w-0 pb-10 pt-6 sm:pb-12 sm:pt-8", className)}>
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-5 py-10 shadow-lg shadow-black/10 sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-12 md:py-14"
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
              className="absolute bottom-[5.25rem] -right-2 z-0 h-auto w-[min(10rem,28vw)] max-w-none object-contain object-right object-bottom opacity-[0.28] brightness-[1.12] sm:bottom-[5.75rem] sm:-right-3 sm:w-[min(11.5rem,26vw)] md:bottom-[6.25rem] md:-right-2 md:w-[min(13rem,24vw)]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
              <Image
                src={headingLogoSrc}
                alt={logoAlt}
                width={180}
                height={72}
                className="h-12 w-auto max-w-[min(100%,11rem)] shrink-0 object-contain sm:h-14 sm:max-w-[12rem] md:h-16 md:max-w-[14rem]"
                unoptimized={headingLogoSrc.endsWith(".svg")}
              />
              <div className="flex min-w-0 flex-col items-center text-center leading-tight text-white lg:items-start lg:text-left">
                <span className={cn(nameSerif.className, "text-lg font-semibold sm:text-xl md:text-2xl")}>
                  {nameLine1}
                </span>
                <span
                  className={cn(
                    jost.className,
                    "mt-0.5 text-xs font-medium tracking-wide text-white/95 sm:text-sm md:text-base",
                  )}
                >
                  {nameLine2}
                </span>
              </div>
            </div>

            <p
              className={cn(
                jost.className,
                "mx-auto mt-12 max-w-3xl text-center text-[15px] font-light leading-[24px] tracking-normal text-[#FFFFFF99] sm:mt-14 sm:text-[16px] sm:leading-[26px] md:mt-16",
              )}
            >
              {mission}
            </p>

            <div className="mt-10 w-full sm:mt-12">
              <p
                className={cn(
                  cormorantTitle.className,
                  "text-[22px] font-normal leading-none tracking-normal text-white sm:text-[24px] md:text-[26px]",
                  "max-lg:italic lg:not-italic",
                )}
              >
                Quick Links
              </p>
              <nav
                className={cn(
                  "mt-5 flex w-full flex-col items-center gap-4 sm:mt-6",
                  "lg:mt-4 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-8 lg:gap-y-2",
                )}
                aria-label="Footer quick links"
              >
                {quickLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    prefetch={false}
                    className={cn(
                      jost.className,
                      "block text-[15px] font-normal leading-snug tracking-normal text-white underline decoration-solid underline-offset-2 decoration-from-font transition-opacity [text-decoration-skip-ink:auto] hover:opacity-90",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-10 w-full max-w-4xl border-t border-dashed border-white/35 sm:mt-12" />

            <p
              className={cn(
                jost.className,
                "mt-6 max-w-4xl text-[11px] font-normal leading-relaxed text-white/75 sm:mt-8 sm:text-xs",
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
