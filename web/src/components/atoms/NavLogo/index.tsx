import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/src/lib/utils";
import type { NavLogoProps } from "./NavLogo.types";

const nameSerif = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export function NavLogo({
  nameLine1 = "St. Matthew's",
  nameLine2 = "Lutheran Church",
  logoSrc = "/logo.svg",
  logoAlt = "",
  href = "#hero",
  className,
  variant = "default",
  onNavigate,
}: NavLogoProps) {
  const onDark = variant === "onDark";
  /** On olive backgrounds use pre-made white mark — avoids a flat white circle from CSS-inverting the color logo */
  const resolvedLogoSrc =
    onDark && logoSrc === "/logo.svg" ? "/white_logo.png" : logoSrc;

  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={`${nameLine1} ${nameLine2} — home`}
      onClick={() => onNavigate?.()}
      className={cn(
        "flex min-h-9 items-center gap-2 rounded-sm outline-offset-2 transition-opacity hover:opacity-90 sm:gap-2.5",
        onDark
          ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          : "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5a7a3a]",
        className,
      )}
    >
      <Image
        src={resolvedLogoSrc}
        alt={logoAlt}
        width={36}
        height={36}
        className={cn(
          "h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10",
          onDark &&
            resolvedLogoSrc.endsWith(".svg") &&
            "brightness-0 invert",
        )}
        priority
        unoptimized={resolvedLogoSrc.endsWith(".svg")}
      />
      <div
        className={cn(
          "flex min-w-0 flex-col leading-tight",
          onDark ? "text-white" : "text-[#1a1a1a]",
        )}
      >
        <span
          className={cn(
            nameSerif.className,
            "text-xs font-semibold leading-tight tracking-tight sm:text-sm",
          )}
        >
          {nameLine1}
        </span>
        <span
          className={cn(
            "font-sans text-[10px] font-medium tracking-wide sm:text-[11px]",
            onDark ? "text-white/90" : "text-[#1a1a1a]/85",
          )}
        >
          {nameLine2}
        </span>
      </div>
    </Link>
  );
}
