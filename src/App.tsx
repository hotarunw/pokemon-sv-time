import { useEffect, useState } from "react";
import { TimezoneCardProps } from "./features/timezone-cards/timezone-card";
import TimezoneCards from "./features/timezone-cards/timezone-cards";
import TimezoneTable from "./features/timezone-table/timezone-table";
import {
  toBlueberryTime,
  toKitakamiTime,
  toPaldeaTime,
} from "./lib/to-paldea-time";

function App() {
  const [date, setDate] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const paldeaTime = toPaldeaTime(date);
  const hogehoge: TimezoneCardProps[] = [
    { date: date, name: "現在時刻", color: "gray" },
    { date: paldeaTime, name: "パルデア地方", color: "orange" },
    { date: toKitakamiTime(paldeaTime), name: "キタカミの里", color: "teal" },
    {
      date: toBlueberryTime(paldeaTime),
      name: "ブルーベリー学園",
      color: "indigo",
    },
  ];

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        ポケモンSV時間表示
      </h1>
      <TimezoneCards timezones={hogehoge}></TimezoneCards>
      <TimezoneTable></TimezoneTable>
      <div>
        <span className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
          ポケモンSVの3地方の時間と時間帯を表示する。現在時刻の12:18がパルデア地方の06:00。パルデア地方では時間は20倍の速さで進む。6時が朝、12時が昼、18時が夕方、19時が夜。キタカミの里は6時間進んでいる。ブルーベリー学園は6時間遅れている。
        </span>

        <h2 className="text-2xl font-extrabold dark:text-white">参考</h2>

        <div>
          <a
            href="https://wiki.xn--rckteqa2e.com/wiki/%E6%99%82%E9%96%93%E5%B8%AF#%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%E3%83%BB%E3%83%90%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            時間帯 - ポケモンWiki
          </a>
        </div>

        <div>
          <a
            href="https://www.serebii.net/scarletviolet/daynightcycle.shtml"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Pokémon Scarlet & Violet - Day & Night Cycle
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
