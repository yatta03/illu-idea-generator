import { getRandomPalette, getColors } from "./palette";
import { getRandomWords, getWords } from "./word";

export function encodeUrl(colors: string[], wordInxes: number[]): string {
  const colorParts = colors.map((c) => c.replace("#", "").toLowerCase());
  const wordParts = wordInxes.map((i) => i.toString(36));
  return [...colorParts, ...wordParts].join("-");
}

export function decodeUrl(code: string) {
  const parts = code.split("-");

  const colors = parts.splice(0, 5).map((h) => "#" + h);

  const wordInxes = parts.map((p) => parseInt(p, 36));
  const words = getWords(wordInxes);
  return { colors, words, wordInxes };
}

export function getRandomUrl(isChangeColor = true, isChangeWords = true, myColors: string[] = [], myWordInxes: number[] = []): string {
  if (!isChangeColor && !isChangeWords) return "";
  let cs: string[] = myColors;
  let wis: number[] = myWordInxes;

  if (isChangeColor) {
    const { colors } = getRandomPalette();
    cs = colors;
  }
  if (isChangeWords) {
    const { indexes } = getRandomWords();
    wis = indexes;
  }

  return encodeUrl(cs, wis);
}
