import { TimezoneCard, TimezoneCardProps } from "./timezone-card";

export interface TimezoneCardsProps {
  timezones: TimezoneCardProps[];
}

export default function TimezoneCards({ timezones }: TimezoneCardsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {timezones.map((item, index) => (
        <TimezoneCard {...item} key={index} />
      ))}
    </div>
  );
}
