import { Icon } from '@waystone/icon';
import {
  Box,
  Button as ThemeUIButton,
  type ThemeUIStyleObject,
} from 'theme-ui';
import {
  outlineCss,
  boxShadowCss,
  disabledCss,
  cssSelectors,
} from '@waystone/css-presets';
import type { ButtonProps, ButtonSize } from './button.types';
import {
  getActiveBackgroundColor,
  getBackgroundColor,
  getColor,
  getHoverBackgroundColor,
  getInteractiveColor,
} from './button.styles';

const paddingY: Record<ButtonSize, string> = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
};

export const Button = ({
  children,
  icon,
  loading,
  size = 'sm',
  variant = 'primary',
  color,
  fullWidth,
  ...rest
}: ButtonProps) => {
  const disabled = loading || rest.disabled;
  const isLink = variant === 'link';

  const interactiveColor = getInteractiveColor(variant);

  const hoverCss: ThemeUIStyleObject = {
    color: interactiveColor,
    boxShadow: boxShadowCss.focused,
    backgroundColor: getHoverBackgroundColor(variant),
  };

  const focusCss: ThemeUIStyleObject = {
    ...hoverCss,
    boxShadow: boxShadowCss.active,
  };

  const activeCss: ThemeUIStyleObject = {
    ...focusCss,
    backgroundColor: getActiveBackgroundColor(variant),
  };

  return (
    <ThemeUIButton
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        color: color || getColor(variant),
        gap: 'sm',
        paddingX: isLink ? 0 : size,
        paddingY: isLink ? 0 : paddingY[size],
        width: fullWidth ? '100%' : undefined,
        cursor: 'pointer',
        transition: 'all 200ms',
        backgroundColor: getBackgroundColor(variant),
        ...outlineCss.base,
        ...(isLink ? {} : boxShadowCss.base),
        [cssSelectors.hover]: {
          ...hoverCss,
        },
        [cssSelectors.focusVisible]: {
          ...outlineCss.focused,
          ...focusCss,
        },
        [cssSelectors.active]: {
          ...outlineCss.active,
          ...activeCss,
        },
        [cssSelectors.disabled]: {
          ...disabledCss,
          backgroundColor: isLink ? undefined : 'muted',
        },
      }}
      {...rest}
      disabled={disabled}>
      {loading ? (
        <Box>Loading...</Box>
      ) : (
        <>
          {icon && <Icon {...icon}>{icon.name}</Icon>}
          {children}
        </>
      )}
    </ThemeUIButton>
  );
};
