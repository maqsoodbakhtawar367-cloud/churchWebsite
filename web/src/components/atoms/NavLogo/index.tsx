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
        "flex min-h-11 items-center gap-3 rounded-sm outline-offset-2 transition-opacity hover:opacity-90",
        onDark
          ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          : "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5a7a3a]",
        className,
      )}
    >
      <Image
        src={resolvedLogoSrc}
        alt={logoAlt}
        width={48}
        height={48}
        className={cn(
          "h-12 w-12 shrink-0 object-contain",
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
            "text-base font-semibold leading-tight tracking-tight sm:text-lg",
          )}
        >
          {nameLine1}
        </span>
        <span
          className={cn(
            "font-sans text-xs font-medium tracking-wide sm:text-sm",
            onDark ? "text-white/90" : "text-[#1a1a1a]/85",
          )}
        >
          {nameLine2}
        </span>
      </div>
    </Link>
  );
}
