import { AboutPillarsSection } from "@/src/components/organisms/AboutPillarsSection";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { MeetPastorSection } from "@/src/components/organisms/MeetPastorSection";
import { MomentsGallerySection } from "@/src/components/organisms/MomentsGallerySection";
import { ContactSection } from "@/src/components/organisms/ContactSection";
import { SiteFooter } from "@/src/components/organisms/SiteFooter";
import { UpcomingEventsSection } from "@/src/components/organisms/UpcomingEventsSection";
import { HOME_ABOUT_PILLARS } from "@/src/content/homeAboutPillars";
import { HOME_CONTACT_CARDS as contactCards } from "@/src/content/homeContactCards";
import {
  HOME_FOOTER_COPYRIGHT,
  HOME_FOOTER_MISSION,
  HOME_FOOTER_QUICK_LINKS,
} from "@/src/content/homeFooter";
import { HOME_GALLERY_IMAGES } from "@/src/content/homeGalleryImages";
import {
  HOME_ABOUT_INTRO,
  HOME_ABOUT_MAIN_HEADING,
  HOME_CONTACT_HEADING,
  HOME_CONTACT_INTRO_PARAGRAPHS,
  HOME_HERO_ADDRESS,
  HOME_HERO_BIBLE_STUDY,
  HOME_HERO_HEADING,
  HOME_HERO_SUBTEXT,
  HOME_HERO_TIME,
  HOME_MEET_PASTOR_BODY,
  HOME_MEET_PASTOR_NAME,
  HOME_MEET_PASTOR_QUOTE,
  HOME_MEET_PASTOR_ROLE,
} from "@/src/content/homePageCopy";
import { HOME_UPCOMING_EVENTS } from "@/src/content/homeUpcomingEvents";
import { SECTION_ANCHOR } from "@/src/lib/sectionAnchors";

export default function Home() {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden">
      <main className="flex min-h-0 min-w-0 w-full flex-1 flex-col">
        <HeroSection
          heading={HOME_HERO_HEADING}
          subtext={HOME_HERO_SUBTEXT}
          address={HOME_HERO_ADDRESS}
          time={HOME_HERO_TIME}
          bibleStudy={HOME_HERO_BIBLE_STUDY}
        />
        <AboutPillarsSection
          id={SECTION_ANCHOR.aboutPillars}
          mainHeading={HOME_ABOUT_MAIN_HEADING}
          intro={<p className="m-0">{HOME_ABOUT_INTRO}</p>}
          pillars={HOME_ABOUT_PILLARS}
        />
        <MeetPastorSection
          id={SECTION_ANCHOR.meetPastor}
          body={HOME_MEET_PASTOR_BODY}
          quote={HOME_MEET_PASTOR_QUOTE}
          attributionName={HOME_MEET_PASTOR_NAME}
          attributionRole={HOME_MEET_PASTOR_ROLE}
        />
        <MomentsGallerySection
          id={SECTION_ANCHOR.gallery}
          images={HOME_GALLERY_IMAGES}
        />
        <UpcomingEventsSection
          id={SECTION_ANCHOR.upcomingEvents}
          events={HOME_UPCOMING_EVENTS}
        />
        <ContactSection
          id={SECTION_ANCHOR.contact}
          heading={HOME_CONTACT_HEADING}
          introParagraphs={HOME_CONTACT_INTRO_PARAGRAPHS}
          cards={contactCards}
        />
        <SiteFooter
          mission={HOME_FOOTER_MISSION}
          quickLinks={HOME_FOOTER_QUICK_LINKS}
          copyrightLine={HOME_FOOTER_COPYRIGHT}
        />
      </main>
    </div>
  );
}
