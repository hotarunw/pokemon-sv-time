import { TimeOfDay } from "../lib/to-paldea-time";

interface TimeOfDayBadgeProps {
  timeOfDay: TimeOfDay;
}

interface TimeOfDayStyle {
  name: string;
  classes: string;
}

const timeOfDayStyles = new Map<TimeOfDay, TimeOfDayStyle>([
  [
    "morning",
    {
      name: "朝",
      classes:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    },
  ],
  [
    "day",
    {
      name: "昼",
      classes:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    },
  ],
  [
    "evening",
    {
      name: "夕方",
      classes: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
  ],
  [
    "night",
    {
      name: "夜",
      classes: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
  ],
]);

export function TimeOfDayBadge({ timeOfDay }: TimeOfDayBadgeProps) {
  const style = timeOfDayStyles.get(timeOfDay);

  if (!style) {
    return null; // Or a default badge
  }

  return (
    <span
      className={`rounded px-2.5 py-0.5 text-sm font-medium ${style.classes}`}
    >
      {style.name}
    </span>
  );
}
