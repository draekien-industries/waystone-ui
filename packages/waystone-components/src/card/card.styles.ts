import { ThemeUIStyleObject } from 'theme-ui';
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
  backgroundColor: darkMode ? 'b-600' : 'b-000',
  boxShadow: !noShadow && 'md',
  overflowY: 'auto',
  ...rest,
});

export const coverImageCss = (coverImageUrl?: string): ThemeUIStyleObject => ({
  backgroundImage: coverImageUrl && `url(${coverImageUrl})`,
  backgroundColor: 'secondary',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: 'md',
});

export const cardContentCss = (noPadding?: boolean): ThemeUIStyleObject => ({
  padding: noPadding ? 0 : 'md',
});
