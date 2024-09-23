import { TimeOfDayBadge } from "../../components/time-of-day-badge";
import {
  getTimeOfDay,
  toBlueberryTime,
  toKitakamiTime,
  toPaldeaTime,
} from "../../lib/to-paldea-time";

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

const timeTableValue = ((): Date[][] => {
  const dateAM12 = new Date(new Date().setHours(0, 0, 0, 0));

  const table: Date[][] = [];

  for (let i = 0; i < 24 * 60; i += 3) {
    const date = new Date(dateAM12.getTime() + i * 60 * 1000);

    const paldea = toPaldeaTime(date);
    const kitakami = toKitakamiTime(paldea);
    const blueberry = toBlueberryTime(paldea);

    table.push([new Date(date), paldea, kitakami, blueberry]);
  }
  return table;
})();

export interface TimezoneTableProps {
  date: Date;
  columns: { name: string; color: "gray" | "orange" | "teal" | "indigo" }[];
}

export default function TimezoneTable({ date, columns }: TimezoneTableProps) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.name}
                  scope="col"
                  className={`px-2 py-2 ${colorBackgrounds.get(column.color)}`}
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeTableValue.map((row, index) => {
              const isNowDate =
                Math.abs(date.getTime() - row[0].getTime()) < 3 * 60 * 1000;

              return (
                <tr
                  key={index}
                  className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  {row.map((cell, index) => (
                    <td
                      key={index}
                      className={`px-2 py-2 ${isNowDate ? "bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-800 dark:hover:bg-yellow-700" : colorBackgrounds.get(columns[index].color)}`}
                    >
                      <div className="flex items-center gap-2">
                        <span>
                          {cell.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        {index > 0 && (
                          <TimeOfDayBadge timeOfDay={getTimeOfDay(cell)} />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
