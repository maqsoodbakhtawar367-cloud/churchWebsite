import type { ReactNode } from "react";

export type ButtonVariant = "primary";

export interface ButtonProps {
  children?: ReactNode;
  label?: string;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  "aria-label"?: string;
}
