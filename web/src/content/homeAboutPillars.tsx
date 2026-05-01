import Image from "next/image";
import type { Pillar } from "@/src/components/organisms/AboutPillarsSection/AboutPillarsSection.types";

const pillarImageClass =
  "h-full max-h-36 w-full object-contain object-bottom";

export const HOME_ABOUT_PILLARS: Pillar[] = [
  {
    id: "our-church",
    title: "Our Church",
    image: (
      <Image
        src="/about_church.png"
        alt=""
        width={160}
        height={160}
        className={pillarImageClass}
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
        className={pillarImageClass}
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
        className={pillarImageClass}
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
