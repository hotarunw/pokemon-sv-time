import {
  toBlueberryTime,
  toKitakamiTime,
  toPaldeaTime,
} from "./to-paldea-time";

test("現在時刻からパルデア地方、キタカミの里、ブルーベリー学園の時間に変換するテスト", () => {
  const paldeaPm12 = toPaldeaTime(new Date("2024/9/28 12:36:00"));
  expect(paldeaPm12.toLocaleTimeString()).toBe(
    new Date("2024/9/28 12:00:00").toLocaleTimeString(),
  );

  const kitakamiPm6 = toKitakamiTime(paldeaPm12);
  expect(kitakamiPm6.toLocaleTimeString()).toBe(
    new Date("2024/9/28 18:00:00").toLocaleTimeString(),
  );

  const blueBerryAm6 = toBlueberryTime(paldeaPm12);
  expect(blueBerryAm6.toLocaleTimeString()).toBe(
    new Date("2024/9/28 6:00:00").toLocaleTimeString(),
  );
});
