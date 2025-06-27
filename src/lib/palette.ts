import palettes from "nice-color-palettes";

// return list of 5 color hex code str
export function getRandomPalette() {
  const paletteInx = Math.floor(Math.random() * palettes.length);
  const colors = palettes[paletteInx];
  return { colors, paletteInx };
}

export function getColors(paletteInx: number): string[] {
  const colors = palettes[paletteInx];
  return colors;
}
