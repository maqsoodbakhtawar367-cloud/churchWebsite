import type { ComponentPropsWithoutRef } from "react";

export interface NavBarLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface NavbarProps {
  links: NavBarLinkItem[];
  donateLabel?: string;
  donateHref?: string;
  className?: string;
  navProps?: ComponentPropsWithoutRef<"nav">;
}
