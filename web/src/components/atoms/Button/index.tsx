
import Link from "next/link";
import { firaSans } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import type { ButtonProps } from "./Button.types";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: cn(
    firaSans.className,
    "inline-flex min-h-11 min-w-11 items-center justify-center bg-[#628141] px-6 py-2.5 text-sm text-white transition-colors rounded-full hover:bg-[#4a642f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628141] sm:text-base",
  ),
};

export function Button({
  children,
  label,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const content = children ?? label;
  const base = cn(variantClasses[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        prefetch={false}
        className={base}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={base}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
