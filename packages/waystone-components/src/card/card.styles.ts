import type { ThemeSize } from '@waystone/core';
import type { StylePropertyValue, ThemeUIStyleObject } from 'theme-ui';
// eslint-disable-next-line import/no-unresolved
import type { Property } from 'csstype';
import type { CanBeFullWidth, HasHeight, HasWidth } from '../common/interfaces';

/** THe props for styling the card container */
type CardContainerCssProps = {
  /** Should the card not have a shadow */
  noShadow?: boolean;
  /** Is the app in dark mode. */
  darkMode?: boolean;
} & HasWidth &
  HasHeight &
  CanBeFullWidth;

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
export type CoverImageCssOptions = {
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
};

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
