/**
 * Canonical in-page section `id` values.
 * Must match `<section id="...">` (and anchor targets) across the app.
 */
export const SECTION_ANCHOR = {
  hero: "hero",
  aboutPillars: "about-pillars",
  meetPastor: "servants",
  gallery: "gallery",
  upcomingEvents: "upcoming-events",
  contact: "contact",
  donate: "donate",
} as const;

export type SectionAnchorId = (typeof SECTION_ANCHOR)[keyof typeof SECTION_ANCHOR];

/** Hash link for same-document navigation, e.g. `#servants`. */
export function sectionHash(id: SectionAnchorId): string {
  return `#${id}`;
}
