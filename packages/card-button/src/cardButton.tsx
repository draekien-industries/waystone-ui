'use client';

import { forwardRef, type ForwardedRef, type ReactNode } from 'react';
import type {
  DimensionsAttributes,
  DisabledAttributes,
  LoadingAttributes,
  TestIdAttributes,
} from '@waystone/types';
import { Spinner } from '@waystone/spinner';
import { Overlay } from '@waystone/overlay';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import { Flex, type ThemeUICSSObject } from 'theme-ui';

export type CardButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
} & LoadingAttributes &
  DisabledAttributes &
  DimensionsAttributes &
  TestIdAttributes;

const renderCardButton = (
  {
    children,
    onClick,
    loading,
    disabled,
    'data-testid': testId,
    ...rest
  }: CardButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) => {
  const styles: ThemeUICSSObject = {
    position: 'relative',
    padding: 'medium',
    border: 'none',
    borderRadius: 'medium',
    color: 'text',
    backgroundColor: 'card',
    boxShadow: 'small',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 200ms ease',
    ...outlineCss.base,
    ...rest,
    [cssSelectors.hover]: {
      backgroundColor: 'active',
      boxShadow: 'large',
    },
    [cssSelectors.active]: {
      boxShadow: 'medium',
      backgroundColor: 'active',
      ...outlineCss.active,
    },
    [cssSelectors.focusVisible]: {
      boxShadow: 'medium',
      backgroundColor: 'active',
      ...outlineCss.focused,
    },
    [cssSelectors.disabled]: {
      color: 'text-disabled',
      backgroundColor: 'muted',
      cursor: 'not-allowed',
    },
  };

  return (
    <button
      ref={ref}
      sx={styles}
      onClick={onClick}
      type="button"
      disabled={disabled || loading}
      data-testid={testId}
    >
      {loading && (
        <Overlay.Absolute>
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Spinner />
          </Flex>
        </Overlay.Absolute>
      )}
      {children}
    </button>
  );
};

export const CardButton = forwardRef(renderCardButton);
