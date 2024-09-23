import { TimeOfDayBadge } from "../../components/time-of-day-badge";
import { getTimeOfDay } from "../../lib/to-paldea-time";

export interface TimezoneCardProps {
  date: Date;
  name: string;
  color: "gray" | "orange" | "teal" | "indigo";
}

const colorBackgrounds = new Map<string, string>([
  [
    "gray",
    "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700",
  ],
  [
    "orange",
    "bg-orange-50 hover:bg-orange-100 dark:bg-orange-800 dark:hover:bg-orange-700",
  ],
  [
    "teal",
    "bg-teal-50 hover:bg-teal-100 dark:bg-teal-800 dark:hover:bg-teal-700",
  ],
  [
    "indigo",
    "bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-800 dark:hover:bg-indigo-700",
  ],
]);

export function TimezoneCard({ date, name, color }: TimezoneCardProps) {
  const timeOfDay = getTimeOfDay(date);
  const backgroundClass = colorBackgrounds.get(color) ?? "";

  return (
    <div
      className={`block w-48 rounded-lg border border-gray-200 ${backgroundClass} p-4 shadow transition-colors duration-300 dark:border-gray-700`}
    >
      <h3 className="flex items-center text-lg font-medium dark:text-white">
        <span className="me-2">{name}</span>
        <TimeOfDayBadge timeOfDay={timeOfDay} />
      </h3>
      <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
}
