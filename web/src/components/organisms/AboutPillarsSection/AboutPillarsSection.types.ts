import type { ReactNode } from "react";

export interface Pillar {
  id: string;
  title: string;
  image: ReactNode;
  body: ReactNode;
  footnote?: ReactNode;
}

export interface AboutPillarsSectionProps {
  id?: string;
  mainHeading: string;
  intro: ReactNode;
  pillars: Pillar[];
  className?: string;
}
