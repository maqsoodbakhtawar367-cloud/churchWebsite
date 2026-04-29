/**
 * Molecule: InfoBadge
 * Icon and text row; hero uses serif for address/time to match design.
 */
import { Cormorant_Infant } from "next/font/google";
import { cn } from "@/src/lib/utils";
import type { InfoBadgeProps } from "./InfoBadge.types";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal"],
});

export function InfoBadge({ icon, text, className, preLine = false }: InfoBadgeProps) {
  return (
    <div
      className={cn("flex min-h-10 w-full min-w-0 items-center gap-3", className)}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center text-[#5a7a3a]"
        aria-hidden
      >
        {icon}
      </div>
      <p
        className={cn(
          cormorant.className,
          "text-left text-sm font-medium leading-tight text-[#1a1a1a] sm:text-base",
          preLine && "whitespace-pre-line",
        )}
      >
        {text}
      </p>
    </div>
  );
}
