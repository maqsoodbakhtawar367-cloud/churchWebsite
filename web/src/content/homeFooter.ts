import type { FooterQuickLink } from "@/src/components/organisms/SiteFooter/SiteFooter.types";
import { SECTION_ANCHOR, sectionHash } from "@/src/lib/sectionAnchors";

export const HOME_FOOTER_QUICK_LINKS: FooterQuickLink[] = [
  { label: "Home", href: sectionHash(SECTION_ANCHOR.hero) },
  { label: "Meet The Servants", href: sectionHash(SECTION_ANCHOR.meetPastor) },
  { label: "Photo Gallery", href: sectionHash(SECTION_ANCHOR.gallery) },
  { label: "Contact Us", href: sectionHash(SECTION_ANCHOR.contact) },
  { label: "Donate Us", href: sectionHash(SECTION_ANCHOR.donate) },
];

export const HOME_FOOTER_MISSION =
  "A Mission of Grace on the Garden Isle Where sinners are welcomed, Christ is proclaimed, His Word and Sacraments are faithfully given, and the aloha of Jesus transforms hearts on Kauaʻi.";

export const HOME_FOOTER_COPYRIGHT =
  "© 2011 – 2025 St. Matthew Lutheran Church – All Rights Reserved. Church Websites | Ministry Websites by NetMinistry.";
