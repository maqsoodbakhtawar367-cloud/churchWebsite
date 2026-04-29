export interface NavLogoProps {
  nameLine1?: string;
  nameLine2?: string;
  logoSrc?: string;
  logoAlt?: string;
  /** Default: in-page hero (`#hero`). Use `/#hero` if you add routes beyond `/`. */
  href?: string;
  className?: string;
  /** Light text + inverted mark for dark backgrounds (e.g. mobile menu overlay). */
  variant?: "default" | "onDark";
  /** Fires after navigation (e.g. close mobile menu). */
  onNavigate?: () => void;
}
