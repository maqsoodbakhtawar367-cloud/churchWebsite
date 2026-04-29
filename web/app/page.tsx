import Image from "next/image";
import { AboutPillarsSection } from "@/src/components/organisms/AboutPillarsSection";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { MeetPastorSection } from "@/src/components/organisms/MeetPastorSection";
import { MomentsGallerySection } from "@/src/components/organisms/MomentsGallerySection";
import { ContactSection } from "@/src/components/organisms/ContactSection";
import { SiteFooter } from "@/src/components/organisms/SiteFooter";
import { UpcomingEventsSection } from "@/src/components/organisms/UpcomingEventsSection";
import type { Pillar } from "@/src/components/organisms/AboutPillarsSection/AboutPillarsSection.types";
import type { GalleryImageItem } from "@/src/components/organisms/MomentsGallerySection/MomentsGallerySection.types";
import type { UpcomingEventItem } from "@/src/components/organisms/UpcomingEventsSection/UpcomingEventsSection.types";
import { HOME_CONTACT_CARDS as contactCards } from "@/src/content/homeContactCards";
import {
  HOME_FOOTER_COPYRIGHT,
  HOME_FOOTER_MISSION,
  HOME_FOOTER_QUICK_LINKS,
} from "@/src/content/homeFooter";
import { SECTION_ANCHOR } from "@/src/lib/sectionAnchors";

const upcomingEvents: UpcomingEventItem[] = [
  {
    id: "evt-1",
    day: "25",
    month: "December",
    year: "2025",
    title: "Suicide Loss Support Group",
    timeRange: "04:00 PM – 05:30 PM",
    address: "4602 Hoomana Road in Lihue",
  },
  {
    id: "evt-2",
    day: "15",
    month: "June",
    year: "2025",
    title: "Rise and Shine Stretch",
    timeRange: "07:00 AM – 08:00 AM",
    address: "4602 Hoomana Road in Lihue",
  },
  {
    id: "evt-3",
    day: "01",
    month: "May",
    year: "2025",
    title: "Divorce Care Support Group",
    timeRange: "06:30 PM – 08:00 PM",
    address: "4602 Hoomana Road in Lihue",
  },
  {
    id: "evt-4",
    day: "11",
    month: "November",
    year: "2025",
    title: "Community Gatherings",
    timeRange: "12:00 PM – 02:00 PM",
    address: "4602 Hoomana Road in Lihue",
  },
];

const momentsGalleryImages: GalleryImageItem[] = [
  { src: "/group.svg", alt: "Congregation gathered together" },
  { src: "/kid_group_pic.svg", alt: "Children at church" },
  { src: "/baby_holding.svg", alt: "Baptism celebration" },
  { src: "/people_reading.jpg", alt: "Reading Scripture together" },
  { src: "/group.svg", alt: "Church family photo" },
  { src: "/kid_group_pic.svg", alt: "Kids enjoying fellowship" },
  { src: "/baby_holding.svg", alt: "Welcoming new life in Christ" },
  { src: "/people_reading.jpg", alt: "Studying God’s Word" },
];

const aboutPillars: Pillar[] = [
  {
    id: "our-church",
    title: "Our Church",
    image: (
      <Image
        src="/about_church.png"
        alt=""
        width={160}
        height={160}
        className="h-full max-h-36 w-full object-contain object-bottom"
        unoptimized
      />
    ),
    body: (
      <p>
        A welcoming LCMS mission congregation on Kauaʻi, gathering every
        Sunday at 4pm for Divine Service with Holy Communion in Lihue.
      </p>
    ),

  },
  {
    id: "our-beliefs",
    title: "Our Beliefs",
    image: (
      <Image
        src="/people.svg"
        alt=""
        width={160}
        height={160}
        className="h-full max-h-36 w-full object-contain object-bottom"
        unoptimized
      />
    ),
    body: (
      <p>
        We confess salvation by grace alone through faith in Christ, holding
        to Scripture and the Lutheran Confessions (Book of Concord) as
        our guide.
      </p>
    ),
  },
  {
    id: "our-mission",
    title: "Our Mission",
    image: (
      <Image
        src="/hands.svg"
        alt=""
        width={160}
        height={160}
        className="h-full max-h-36 w-full object-contain object-bottom"
        unoptimized
      />
    ),
    body: (
      <p>
        To faithfully proclaim Christ’s forgiveness through Word and
        Sacrament, sharing the aloha of Jesus with Kauaʻi and beyond.
      </p>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-0 w-full min-w-0 flex-1 flex flex-col overflow-x-hidden">
        <main className="flex w-full min-w-0 min-h-0 flex-1 flex-col">
          <HeroSection
            heading="Welcome to St. Matthew's Lutheran Church"
            subtext="Experience God's love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished."
            address={"4602 Hoomana\nRoad in Lihue"}
            time="04:00 PM"
            bibleStudy="Bible Study — Sunday 03:00 PM"
          />
          <AboutPillarsSection
            id={SECTION_ANCHOR.aboutPillars}
            mainHeading="A Church That Loves God And People"
            intro={
              <p className="m-0">
                Nestled in the heart of Lihue on the beautiful Garden Isle, St. Matthew’s is the only Lutheran Church–Missouri Synod congregation on Kaua‘i. Join our small, warm ohana every Sunday at 4:00 p.m. for traditional Divine Service with Holy Communion, where Christ’s forgiveness is freely given and all are welcome.
              </p>
            }
            pillars={aboutPillars}
          />
          <MeetPastorSection
            id={SECTION_ANCHOR.meetPastor}
            body="Pastor William Pierce was ordained and installed as the pastor of St. Matthew Lutheran Church on November 8, 2020, becoming the only LCMS pastor on Kauaʻi. With a heart for Scripture, sacraments, and island hospitality, he leads a growing ohana rooted in grace and the Book of Concord."
            quote="Christ’s aloha calls us together—broken people made whole by His cross and open table."
            attributionName="William Pierce"
            attributionRole="Pastor"
          />
          <MomentsGallerySection id={SECTION_ANCHOR.gallery} images={momentsGalleryImages} />
          <UpcomingEventsSection id={SECTION_ANCHOR.upcomingEvents} events={upcomingEvents} />
          <ContactSection
            id={SECTION_ANCHOR.contact}
            heading="Connect with Our Ohana on Kauaʻi!"
            introParagraphs={[
              "We'd love to hear from you whether you have questions about our services, need prayer, want to learn more about membership, or are planning a visit to the Garden Isle.",
              "Reach out anytime; Pastor William Pierce and our small congregation are here to welcome you with the aloha of Christ.",
            ]}
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
