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
        "inline-flex min-h-9 min-w-9 items-center justify-center px-1.5 text-[13px] font-normal not-italic leading-[100%] tracking-normal text-[#1a1a1a]/80 transition-colors hover:text-[#5a7a3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a7a3a] sm:text-sm",
        className,
      )}
    >
      {children}
    </Link>
  );
}
