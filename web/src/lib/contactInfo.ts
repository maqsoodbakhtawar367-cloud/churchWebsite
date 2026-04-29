/** Public contact email (display). */
export const SITE_CONTACT_EMAIL = "bmaqsood@indio.inc";

/**
 * Recipient-only mailto (no subject/body/cc params).
 * Avoids extra query keys that some clients treat like a saved draft.
 * Which app opens (Outlook vs Mail vs browser) is controlled by the OS default handler.
 */
export const SITE_CONTACT_MAILTO_HREF = `mailto:${SITE_CONTACT_EMAIL}`;

export const SITE_PHONE_DISPLAY = "(808) 555-0123";

export const SITE_PHONE_CARD_LINE2 = "Bible Study — Sunday 03:00 PM";

export const SITE_VISIT_ADDRESS_LINE1 = "4602 Hoomana Road in Lihue";

export const SITE_VISIT_ADDRESS_LINE2 =
  "(near the intersection of Rice St and Kuhio Hwy)";

/** Full place query for opening maps (Google Maps search). */
export const SITE_VISIT_MAPS_QUERY =
  "4602 Hoomana Road, Lihue, Kauai, HI, USA";

export const SITE_VISIT_MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_VISIT_MAPS_QUERY)}`;

export const PASTOR_CARD_LINE1 = "William Pierce";

export const PASTOR_CARD_LINE2 = "Always there for your help!";

export const EMAIL_CARD_RESPONSE_LINE = "We respond within 24 hours";
