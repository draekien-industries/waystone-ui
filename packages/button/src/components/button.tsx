import { type ComponentPropsWithoutRef } from 'react';
import { Icon, type IconProps } from '@waystone/icon';
import { Box, Button as ThemeUIButton } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import type {
  ActiveAttributes,
  BackgroundColorAttributes,
  BackgroundImageAttributes,
  ColorAttributes,
  DisabledAttributes,
  FullWidthAttributes,
  LoadingAttributes,
  Size,
  SizeAttributes,
  VariantAttributes,
  ButtonVariant,
} from '@waystone/core';

export type ButtonProps = {
  icon?: { name: string } & Pick<IconProps, 'variant' | 'color' | 'size'>;
} & ComponentPropsWithoutRef<'button'> &
  LoadingAttributes &
  DisabledAttributes &
  ActiveAttributes &
  FullWidthAttributes &
  SizeAttributes &
  ColorAttributes &
  BackgroundColorAttributes &
  BackgroundImageAttributes &
  VariantAttributes<ButtonVariant>;

const paddingY: Record<Size, string> = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
};

export const Button = ({
  children,
  icon,
  loading,
  size = 'sm',
  color,
  fullWidth,
  ...rest
}: ButtonProps) => {
  const disabled = loading || rest.disabled;

  return (
    <ThemeUIButton
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        color,
        gap: 'sm',
        paddingX: size,
        paddingY: paddingY[size],
        width: fullWidth ? '100%' : undefined,
        cursor: 'pointer',
        transition: 'all 200ms',
        ':enabled:hover': {
          backgroundColor: alpha(rest.backgroundColor, 0.75),
        },
        ':not(active):focus-visible': {},
        ':enabled:active': {},
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
