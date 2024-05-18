import type { ThemeColor } from '@waystone/theme';

export type OverlayProps = {
  /**
   * Set the blurriness factor of the backdrop filter by providing a px value
   * @default 10
   */
  blur?: number;
  /**
   * Set the transparency of the overlay by providing a value from 0 -> 1
   * @default 0.9
   */
  backgroundOpacity?: number;
  /**
   * Set the background color of the overlay to a color defined in the theme
   * @default 'ghost'
   */
  backgroundColor?: ThemeColor;
};
