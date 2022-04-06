/** @jsxImportSource theme-ui */
import { ReactNode } from 'react';
import {
  useColorMode,
  Button as ThemeUiButton,
  ButtonProps as ThemeUiButtonProps,
} from 'theme-ui';
import {
  CanDisable,
  CanLoad,
  HasSize,
  HasVariant,
  HasWidth,
} from '../common/interfaces';
import { Spinner } from '../spinner/spinner';
import { buttonCss, ButtonCssProps } from './button.styles';
import { ButtonVariant } from './button.types';

export interface ButtonProps
  extends Omit<ThemeUiButtonProps, 'sx'>,
    HasVariant,
    HasSize,
    HasWidth,
    CanDisable,
    CanLoad {
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
  /**
   * A flag indicating whether the button should render it's children while
   * in the loading state
   * @default true
   */
  showContentWhileLoading?: boolean;
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
  disabled = false,
  loading = false,
  showContentWhileLoading = true,
  ...rest
}: ButtonProps) {
  const [colorMode] = useColorMode();
  const darkMode = colorMode === 'dark';
  const buttonCssProps: ButtonCssProps = {
    variant,
    size,
    darkMode,
    noShadow,
    noPadding,
    ...rest,
  };
  const buttonSx = buttonCss(buttonCssProps);

  return (
    <ThemeUiButton sx={buttonSx} disabled={disabled || loading} {...rest}>
      {loading && <Spinner size={size !== 'sm' ? 'md' : 'sm'} />}
      {(!loading || showContentWhileLoading) && children}
    </ThemeUiButton>
  );
}
