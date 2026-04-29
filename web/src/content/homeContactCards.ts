import type { ContactCardData } from "@/src/components/organisms/ContactSection/ContactSection.types";
import {
  EMAIL_CARD_RESPONSE_LINE,
  PASTOR_CARD_LINE1,
  PASTOR_CARD_LINE2,
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_MAILTO_HREF,
  SITE_PHONE_CARD_LINE2,
  SITE_PHONE_DISPLAY,
  SITE_VISIT_ADDRESS_LINE1,
  SITE_VISIT_ADDRESS_LINE2,
  SITE_VISIT_MAPS_HREF,
} from "@/src/lib/contactInfo";
import { SECTION_ANCHOR, sectionHash } from "@/src/lib/sectionAnchors";

export const HOME_CONTACT_CARDS: ContactCardData[] = [
  {
    id: "pastor",
    kind: "pastor",
    title: "Our Pastor",
    line1: PASTOR_CARD_LINE1,
    line2: PASTOR_CARD_LINE2,
    href: sectionHash(SECTION_ANCHOR.meetPastor),
  },
  {
    id: "phone",
    kind: "phone",
    title: "Call Us",
    line1: SITE_PHONE_DISPLAY,
    line2: SITE_PHONE_CARD_LINE2,
  },
  {
    id: "email",
    kind: "email",
    title: "Email Us",
    line1: SITE_CONTACT_EMAIL,
    line2: EMAIL_CARD_RESPONSE_LINE,
    href: SITE_CONTACT_MAILTO_HREF,
  },
  {
    id: "visit",
    kind: "visit",
    title: "Visit Us",
    line1: SITE_VISIT_ADDRESS_LINE1,
    line2: SITE_VISIT_ADDRESS_LINE2,
    href: SITE_VISIT_MAPS_HREF,
  },
];
