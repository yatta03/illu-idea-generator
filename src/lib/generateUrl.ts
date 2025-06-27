import { getRandomPalette, getColors } from "./palette";
import { getRandomWords, getWords } from "./word";

function encodeUrl(paletteInx: number, wordInxes: number[]): string {
  const parts = [paletteInx.toString(36), ...wordInxes.map((i) => i.toString(36))];
  return parts.join("-");
}

export function decodeUrl(code: string) {
  const parts = code.split("-");
  const paletteInx = parseInt(parts[0], 36);
  const colors = getColors(paletteInx);
  const wordInxes = parts.slice(1).map((p) => parseInt(p, 36));
  const words = getWords(wordInxes);
  return { colors, paletteInx, words, wordInxes };
}

export function getRandomUrl(isChangeColor = true, isChangeWords = true, myPaletteInx = 0, myWordInxes: number[] = []): string {
  if (!isChangeColor && !isChangeWords) return "";
  let pi: number = myPaletteInx;
  let wis: number[] = myWordInxes;

  if (isChangeColor) {
    const { paletteInx } = getRandomPalette();
    pi = paletteInx;
  }
  if (isChangeWords) {
    const { indexes } = getRandomWords();
    wis = indexes;
  }

  return encodeUrl(pi, wis);
}
