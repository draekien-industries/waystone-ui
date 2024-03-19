'use client';

import { useColorMode } from 'theme-ui';
import type { CanBeFullWidth, HasHeight, HasWidth } from '../common/interfaces';
import * as styles from './card.styles';
import type { CoverImageCssOptions } from './card.styles';

/**
 * The props for the Card component.
 */
export type CardProps = {
  /** The children to render in the card. */
  children: React.ReactNode;
  /** Setting this prop to `true` will disable this component's drop shadow. */
  noShadow?: boolean;
  /** Setting this prop to `true` will disable this component's default padding. */
  noPadding?: boolean;
  /** An optional cover image to render inside the card. */
  coverImage?: CoverImageCssOptions;
} & HasWidth &
  HasHeight &
  CanBeFullWidth;

/**
 * A card is a container for content that is grouped together.
 */
export const Card = ({
  children,
  coverImage,
  noPadding,
  ...rest
}: CardProps) => {
  const [mode] = useColorMode();
  const darkMode = mode === 'dark';

  return (
    <div
      sx={styles.cardContainerCss({
        ...rest,
        darkMode,
      })}
    >
      {coverImage && <div sx={styles.coverImageCss(coverImage)} role="img" />}
      <div sx={styles.cardContentCss(noPadding)}>{children}</div>
    </div>
  );
};
