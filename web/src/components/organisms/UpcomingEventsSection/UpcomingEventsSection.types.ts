export interface UpcomingEventItem {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  timeRange: string;
  address: string;
}

export interface UpcomingEventsSectionProps {
  id?: string;
  events: UpcomingEventItem[];
  className?: string;
}
