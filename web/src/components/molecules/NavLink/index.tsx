import Link from "next/link";
import { jost } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import type { NavLinkProps } from "./NavLink.types";

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      onClick={onClick}
      className={cn(
        jost.className,
        "inline-flex min-h-11 min-w-11 items-center justify-center text-base font-normal not-italic leading-[100%] tracking-normal text-[#1a1a1a]/80 transition-colors hover:text-[#5a7a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a7a3a]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
