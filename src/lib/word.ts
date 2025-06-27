export const wordList = ["dream", "ocean", "robot", "forest", "ghost", "magic", "city", "storm", "fox", "star"];

export function getRandomWords(count = 3) {
  const indexes: number[] = [];
  const words: string[] = [];

  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * wordList.length);
    indexes.push(index);
    words.push(wordList[index]);
  }
  return { words, indexes };
}

export function getWords(indexes: number[]): string[] {
  const words = indexes.map((i) => wordList[i]);
  return words;
}
