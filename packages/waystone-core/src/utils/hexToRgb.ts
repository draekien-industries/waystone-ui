/* eslint-disable no-bitwise */
export const hexToRgb = (hex: string) => {
  const cleanHex = hex.replace(/[^0-9A-F]/gi, '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};
