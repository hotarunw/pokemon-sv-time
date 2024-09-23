// 時間帯 - ポケモンWiki https://wiki.xn--rckteqa2e.com/wiki/%E6%99%82%E9%96%93%E5%B8%AF#%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%E3%83%BB%E3%83%90%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88
// Pokémon Scarlet & Violet - Day & Night Cycle https://www.serebii.net/scarletviolet/daynightcycle.shtml
const PALDEA_TIME_MULTIPLIER = 20;
const MS_PER_HOUR = 60 * 60 * 1000;

export const toPaldeaTime = (nowDate: Date): Date => {
  const referenceTime = new Date(new Date().setHours(12, 18, 0, 0));

  const diffMs =
    (nowDate.getTime() - referenceTime.getTime()) * PALDEA_TIME_MULTIPLIER;

  const paldeaAm6 = new Date(new Date().setHours(6, 0, 0, 0));

  return new Date(paldeaAm6.getTime() + diffMs);
};

export const adjustTimeByHours = (
  paldeaTime: Date,
  hoursDiff: number,
): Date => {
  return new Date(paldeaTime.getTime() + hoursDiff * MS_PER_HOUR);
};

export const toKitakamiTime = (paldeaTime: Date): Date =>
  adjustTimeByHours(paldeaTime, -6);

export const toBlueberryTime = (paldeaTime: Date): Date =>
  adjustTimeByHours(paldeaTime, 6);

export type TimeOfDay = "morning" | "day" | "evening" | "night";

export const getTimeOfDay = (date: Date): TimeOfDay => {
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "day";
  if (hour >= 18 && hour < 19) return "evening";
  return "night";
};
