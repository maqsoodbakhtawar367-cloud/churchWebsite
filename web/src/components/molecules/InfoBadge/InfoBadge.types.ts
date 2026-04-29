import type { ReactNode } from "react";

export interface InfoBadgeProps {
  icon: ReactNode;
  text: string;
  className?: string;
  /** Allow "4602 Hoomana\nRoad" style line breaks in the comp */
  preLine?: boolean;
}
