import type { ReactNode } from "react";

export interface PillarColumnProps {

  image: ReactNode;
  title: string;
  children: ReactNode;
  footnote?: ReactNode;
  className?: string;
}
