// 時間帯 - ポケモンWiki https://wiki.xn--rckteqa2e.com/wiki/%E6%99%82%E9%96%93%E5%B8%AF#%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%E3%83%BB%E3%83%90%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88
// Pokémon Scarlet & Violet - Day & Night Cycle https://www.serebii.net/scarletviolet/daynightcycle.shtml

export const toPaldeaTime = (nowdate: Date): Date => {
  // 現在時刻（パルデアでは6:00）と12:18のの差分を取る
  const now1218date = new Date(nowdate);
  now1218date.setHours(12);
  now1218date.setMinutes(18);
  now1218date.setSeconds(0);
  now1218date.setMilliseconds(0);
  const diffMs = nowdate.getTime() - now1218date.getTime();

  // パルデアでは時間の進みが20倍速いので20倍する
  const diffMsPaldea = diffMs * 20;

  // 6:00に差分*20を足す
  const paldea6am = new Date(nowdate);
  paldea6am.setHours(6);
  paldea6am.setMinutes(0);
  paldea6am.setSeconds(0);
  paldea6am.setMilliseconds(0);

  return new Date(paldea6am.getTime() + diffMsPaldea);
};

export const toKitakamiTime = (paldeaTime: Date): Date => {
  const sixHourMs = 6 * 60 * 60 * 1000;
  // キタカミの里の時差はパルデア地方から-6時間
  return new Date(paldeaTime.getTime() - sixHourMs);
};

export const toBlueberryTime = (paldeaTime: Date): Date => {
  const sixHourMs = 6 * 60 * 60 * 1000;
  // ブルーベリー学園の時差はパルデア地方から+6時間
  return new Date(paldeaTime.getTime() + sixHourMs);
};

export type TimeOfDay = "morning" | "day" | "evening" | "night";

export const getTimeOfDay = (date: Date): TimeOfDay => {
  // morning: 6:00 - 12:00
  // day: 12:00 - 18:00
  // evening: 18:00 - 19:00
  // night: 19:00 - 6:00

  const hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "day";
  } else if (hour >= 18 && hour < 19) {
    return "evening";
  } else {
    return "night";
  }
};
