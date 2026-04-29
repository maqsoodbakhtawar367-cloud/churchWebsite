import type { NavBarLinkItem } from "@/src/components/organisms/Navbar/Navbar.types";
import { SECTION_ANCHOR, sectionHash } from "@/src/lib/sectionAnchors";

export const PRIMARY_NAV: NavBarLinkItem[] = [
  { id: "home", label: "Home", href: sectionHash(SECTION_ANCHOR.hero) },
  { id: "servants", label: "Meet The Servants", href: sectionHash(SECTION_ANCHOR.meetPastor) },
  { id: "gallery", label: "Photo Gallery", href: sectionHash(SECTION_ANCHOR.gallery) },
  { id: "events", label: "Events", href: sectionHash(SECTION_ANCHOR.upcomingEvents) },
  { id: "contact", label: "Contact Us", href: sectionHash(SECTION_ANCHOR.contact) },
];
