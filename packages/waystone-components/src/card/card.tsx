/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import { CanBeFullWidth, HasHeight, HasWidth } from '../common/interfaces';
import * as styles from './card.styles';

/**
 * The props for the Card component.
 */
export interface CardProps extends HasWidth, HasHeight, CanBeFullWidth {
  /** The children to render in the card. */
  children: React.ReactNode;
  /** Setting this prop to `true` will disable this component's drop shadow. */
  noShadow?: boolean;
  /** Setting this prop to `true` will disable this component's default padding. */
  noPadding?: boolean;
  /** An optional cover image to render inside the card. */
  coverImageUrl?: string;
}

/**
 * A card is a container for content that is grouped together.
 */
export const Card = ({
  children,
  coverImageUrl,
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
      {coverImageUrl && (
        <div sx={styles.coverImageCss(coverImageUrl)} role="img" />
      )}
      <div sx={styles.cardContentCss(noPadding)}>{children}</div>
    </div>
  );
};
