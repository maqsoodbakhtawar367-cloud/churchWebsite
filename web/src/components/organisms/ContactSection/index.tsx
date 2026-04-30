import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Cormorant_Infant } from "next/font/google";
import { jost } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { hrefAccessibilityLabel } from "@/src/lib/hrefAccessibility";
import { cn } from "@/src/lib/utils";
import type { ContactCardData, ContactSectionProps } from "./ContactSection.types";
import { ContactRevealGrid } from "./ContactRevealGrid";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal"],
});

function CardIcon({ kind }: { kind: ContactCardData["kind"] }) {
  const iconClass = "h-[18px] w-[18px] text-white";
  switch (kind) {
    case "pastor":
      return (
        <Image
          src="/cross.svg"
          alt=""
          width={15}
          height={23}
          className="h-[18px] w-auto object-contain"
          unoptimized
        />
      );
    case "phone":
      return <Phone className={iconClass} strokeWidth={2.25} aria-hidden />;
    case "email":
      return <Mail className={iconClass} strokeWidth={2.25} aria-hidden />;
    case "visit":
      return <MapPin className={iconClass} strokeWidth={2.25} aria-hidden />;
    default:
      return null;
  }
}

export function ContactSection({
  id = "contact",
  heading,
  introParagraphs,
  cards,
  className,
}: ContactSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-w-0 bg-transparent py-14 text-[#1a1a1a] sm:py-16 md:py-20",
        className,
      )}
    >
      <div className={cn("w-full", SITE_HORIZONTAL_GUTTER)}>
        <ContactRevealGrid
          left={
            <>
              <h2
                className={cn(
                  cormorant.className,
                  "font-bold tracking-normal text-[#628141] [leading-trim:none]",
                  "text-[clamp(1.65rem,3.85vw+0.75rem,52px)] leading-[clamp(1.85rem,4.35vw+0.95rem,56px)]",
                  "lg:text-[52px] lg:leading-[56px]",
                )}
              >
                Contact Us!
              </h2>
              <p
                className={cn(
                  cormorant.className,
                  "mt-3 font-normal tracking-normal text-[#1a1a1a] [leading-trim:none]",
                  "text-[clamp(1.25rem,2.85vw+0.55rem,42px)] leading-[clamp(1.55rem,3.85vw+0.85rem,58px)]",
                  "lg:text-[42px] lg:leading-[58px]",
                )}
              >
                {heading}
              </p>
              <div
                className={cn(
                  jost.className,
                  "mt-6 max-w-xl space-y-3 text-sm font-normal leading-6 text-[#1a1a1a] sm:text-[15px] sm:leading-7",
                  "max-lg:mx-auto",
                )}
              >
                <p>{introParagraphs[0]}</p>
                <p>{introParagraphs[1]}</p>
              </div>
            </>
          }
          right={
            <>
              {cards.map((card) => {
                const cardClassName =
                  "flex flex-col items-start text-left rounded-2xl border border-[#1a1a1a]/12 bg-transparent p-2 sm:p-3 md:p-4";
                const cardBody = (
                  <>
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8BAE66] shadow-inner shadow-black/10"
                      aria-hidden
                    >
                      <CardIcon kind={card.kind} />
                    </div>
                    <h3
                      className={cn(
                        cormorant.className,
                        "mt-3 text-base font-semibold text-[#1a1a1a] sm:text-lg",
                      )}
                    >
                      {card.title}
                    </h3>
                    <p className={cn(jost.className, "mt-2 text-xs font-medium text-[#1a1a1a] sm:text-sm")}>
                      {card.line1}
                    </p>
                    <p className={cn(jost.className, "mt-1 text-xs font-normal leading-snug text-[#424242]/95 sm:text-sm")}>
                      {card.line2}
                    </p>
                  </>
                );

                if (card.href) {
                  const external =
                    card.href.startsWith("http://") ||
                    card.href.startsWith("https://");
                  return (
                    <a
                      key={card.id}
                      href={card.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={cn(
                        cardClassName,
                        "text-inherit no-underline transition-colors hover:border-[#628141]/40 hover:bg-[#628141]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#628141]",
                      )}
                      aria-label={hrefAccessibilityLabel(card)}
                    >
                      {cardBody}
                    </a>
                  );
                }

                return (
                  <article key={card.id} className={cardClassName}>
                    {cardBody}
                  </article>
                );
              })}
            </>
          }
        />
      </div>
    </section>
  );
}
