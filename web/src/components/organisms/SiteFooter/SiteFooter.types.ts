export interface FooterQuickLink {
  label: string;
  href: string;
}

export interface SiteFooterProps {
  mission: string;
  quickLinks: FooterQuickLink[];
  copyrightLine: string;
  /** Logo beside the church name heading (default: white mark on olive background). */
  headingLogoSrc?: string;
  logoAlt?: string;
  /** Upper-left decorative mark (default: left_mark.png). */
  leftMarkSrc?: string;
  /** Lower-right decorative mark (default: right_church_mark.png). */
  rightMarkSrc?: string;
  nameLine1?: string;
  nameLine2?: string;
  className?: string;
}
