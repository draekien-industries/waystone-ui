import { ThemeSize } from '@waystone/core';
import { StylePropertyValue, ThemeUIStyleObject } from 'theme-ui';
// eslint-disable-next-line import/no-unresolved
import { Property } from 'csstype';
import { CanBeFullWidth, HasHeight, HasWidth } from '../common/interfaces';

/** THe props for styling the card container */
interface CardContainerCssProps extends HasWidth, HasHeight, CanBeFullWidth {
  /** Should the card not have a shadow */
  noShadow?: boolean;
  /** Is the app in dark mode. */
  darkMode?: boolean;
}

export const cardContainerCss = ({
  fullWidth,
  width,
  minWidth,
  maxWidth,
  noShadow,
  darkMode,
  ...rest
}: CardContainerCssProps): ThemeUIStyleObject => ({
  borderRadius: 'md',
  width: fullWidth ? '100%' : width || 'auto',
  minWidth: !fullWidth && minWidth,
  maxWidth: !fullWidth && maxWidth,
  backgroundColor: darkMode ? 'b-600' : 'b-50',
  boxShadow: !noShadow && 'md',
  overflowY: 'auto',
  ...rest,
});

/**
 * The props for styling the card's cover image.
 * The cover image is considered a background-image.
 */
export interface CoverImageCssOptions {
  /** The url of the background image. */
  url: string;
  /** The cover image size. */
  size?: 'contain' | 'cover' | 'auto' | string;
  /** The covert image repeat setting. */
  repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y';
  /** The cover image position. */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  /** The height of the cover image. */
  height?:
    | ThemeSize
    | ThemeSize[]
    | StylePropertyValue<Property.Height<string | number>>;
  /** The fallback color if the cover image cannot be rendered. */
  fallbackColor?: string;
}

export const coverImageCss = ({
  url,
  size = 'cover',
  repeat = 'no-repeat',
  position = 'center',
  height = 'md',
  fallbackColor = 'secondary',
}: CoverImageCssOptions): ThemeUIStyleObject => ({
  backgroundImage: `url(${url})`,
  backgroundColor: fallbackColor,
  backgroundSize: size,
  backgroundRepeat: repeat,
  backgroundPosition: position,
  width: '100%',
  height,
});

export const cardContentCss = (noPadding?: boolean): ThemeUIStyleObject => ({
  padding: noPadding ? 0 : 'md',
});
