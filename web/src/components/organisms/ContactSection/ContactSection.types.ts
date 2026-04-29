export type ContactCardKind = "pastor" | "phone" | "email" | "visit";

export interface ContactCardData {
  id: string;
  kind: ContactCardKind;
  title: string;
  line1: string;
  line2: string;
  /** If set, the whole card is a link (e.g. `#servants` for in-page scroll). */
  href?: string;
}

export interface ContactSectionProps {
  id?: string;
  /** Line shown under the main “Contact Us!” title (e.g. a welcoming subheading). */
  heading: string;
  introParagraphs: [string, string];
  cards: ContactCardData[];
  className?: string;
}
