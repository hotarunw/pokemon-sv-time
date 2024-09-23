interface TimezoneTableProps {
  date: Date;
  columns: { name: string; color: "gray" | "orange" | "teal" | "indigo" }[];
}

export default function TimezoneTable({ date, columns }: TimezoneTableProps) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                Laptop PC
              </td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                Accessories
              </td>
              <td className="px-6 py-4">$99</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">Phone</td>
              <td className="px-6 py-4">$799</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-50 px-6 py-4 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="bg-gray-50 px-6 py-4 dark:bg-gray-800">
                Wearables
              </td>
              <td className="px-6 py-4">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
