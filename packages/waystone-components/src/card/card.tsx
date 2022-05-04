/** @jsxImportSource theme-ui */

import { ThemeUIStyleObject, useColorMode } from 'theme-ui';
import { CanBeFullWidth, HasHeight, HasWidth } from '../common';

/**
 * The props for the Card component.
 */
export interface CardProps extends HasWidth, HasHeight, CanBeFullWidth {
  /** The children to render in the card. */
  children: React.ReactNode;
  /** Setting this prop to `true` will disable this component's drop shadow. */
  noShadow?: boolean;
}

/**
 * A card is a container for content that is grouped together.
 */
export const Card = ({
  children,
  fullWidth,
  width,
  minWidth,
  maxWidth,
  noShadow,
  ...rest
}: CardProps) => {
  const [mode] = useColorMode();
  const darkMode = mode === 'dark';

  const cardCss: ThemeUIStyleObject = {
    paddingX: 'md',
    paddingY: 'md',
    borderRadius: 'md',
    width: fullWidth ? '100%' : width || 'auto',
    minWidth: !fullWidth && minWidth,
    maxWidth: !fullWidth && maxWidth,
    backgroundColor: darkMode ? 'b-600' : 'b-000',
    boxShadow: !noShadow && 'md',
    overflowY: 'scroll',
    ...rest,
  };

  return <div sx={cardCss}>{children}</div>;
};
