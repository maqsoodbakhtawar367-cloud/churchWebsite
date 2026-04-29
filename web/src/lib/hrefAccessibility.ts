/**
 * Accessible names for generic link cards (mailto, tel, in-page hash, external URLs).
 */
export interface HrefAccessibilityFields {
  href?: string;
  title: string;
}

export function hrefAccessibilityLabel(card: HrefAccessibilityFields): string {
  const { href, title } = card;
  if (!href) return title;
  if (href.startsWith("mailto:")) {
    const addr = href.slice("mailto:".length).split("?")[0];
    return `Send email to ${addr}`;
  }
  if (href.startsWith("tel:")) {
    return `Call ${href.slice("tel:".length)}`;
  }
  if (href.startsWith("#")) {
    return `Go to ${title} section`;
  }
  if (href.startsWith("http://") || href.startsWith("https://")) {
    if (href.includes("google.com/maps") || href.includes("maps.apple.com")) {
      return `Open map for church location (${title})`;
    }
    return `Open ${title}`;
  }
  return title;
}
