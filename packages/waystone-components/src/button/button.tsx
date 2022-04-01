/** @jsxImportSource theme-ui */
import { ReactNode } from 'react';
import {
  useColorMode,
  Button as ThemeUiButton,
  ButtonProps as ThemeUiButtonProps,
} from 'theme-ui';
import {
  CanDisable,
  HasSize,
  HasVariant,
  HasWidth,
} from '../common/interfaces';
import { buttonCss } from './button.styles';
import { ButtonVariant } from './button.types';

export interface ButtonProps
  extends Omit<ThemeUiButtonProps, 'sx'>,
    HasVariant,
    HasSize,
    HasWidth,
    CanDisable {
  /** The content to render inside the button */
  children?: ReactNode;
  /**
   * The style of button to render.
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * A flag indicating whether the button should render with no shadows.
   * @default false
   */
  noShadow?: boolean;
  /**
   * A flag indicating whether the button should render with no padding.
   * @default false
   */
  noPadding?: boolean;
}

/**
 * Renders a styled HTML `<button>` element.
 * @param props - the {@link ButtonProps}
 * @returns the button component
 */
export function Button({
  children,
  variant = 'primary',
  size = 'sm',
  noShadow = false,
  noPadding = false,
  ...rest
}: ButtonProps) {
  const [colorMode] = useColorMode();
  const darkMode = colorMode === 'dark';

  return (
    <ThemeUiButton
      sx={buttonCss({
        variant,
        size,
        darkMode,
        noShadow,
        noPadding,
        ...rest,
      })}
      {...rest}>
      {children}
    </ThemeUiButton>
  );
}
