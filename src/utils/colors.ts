export function getCssColor(cssVar: string, theme?: 'dark' | 'light') {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  const color = style
    .getPropertyValue(cssVar)
    .trim()
    .match(/\(([^()]*)\)/)?.[1]
    .split(',') ?? ['', ''];
  const selectedColor = theme === 'dark' ? color[0] : color[1];
  return selectedColor.trim();
}
interface Color {
  r: number;
  g: number;
  b: number;
}

export function toRgbaString({ r, g, b }: Color, a: number) {
  return `rgb(${r},${g},${b},${a})`;
}
