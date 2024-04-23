'use client';

import {
  type ComponentRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  type ForwardedRef,
  useState,
  useEffect,
} from 'react';
import { Flex } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import type { DisabledAttributes, FullWidthAttributes } from '@waystone/types';
import { Icon } from '@waystone/icon';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import { Label } from '../label';
import type {
  InputAriaAttributes,
  InputCallbackAttributes,
  SharedInputAttributes,
} from '../types';

export type CheckboxProps = {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
} & InputAriaAttributes &
  InputCallbackAttributes &
  FullWidthAttributes &
  SharedInputAttributes;

export const CheckboxContent = (
  {
    id,
    label,
    name,
    checked,
    defaultChecked,
    required,
    readOnly,
    fullWidth,
    value,
    defaultValue,
    onClick,
    onChange,
    onBlur,
    onFocus,
    ...rest
  }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputRef = useRef<ComponentRef<'input'>>(null);
  const buttonRef = useRef<ComponentRef<'button'>>(null);

  const [displayChecked, setDisplayChecked] = useState(defaultChecked);

  useEffect(() => {
    if (checked === undefined) return;

    setDisplayChecked(checked);
  }, [checked]);

  useImperativeHandle<Partial<HTMLInputElement>, Partial<HTMLInputElement>>(
    ref,
    () => ({
      ...inputRef.current,
      focus(options) {
        buttonRef.current?.focus(options);
      },
      blur() {
        buttonRef.current?.blur();
      },
      click() {
        buttonRef.current?.click();
      },
    }),
    []
  );

  return (
    <Flex
      sx={{
        display: fullWidth ? 'flex' : 'inline-flex',
        flexWrap: 'nowrap',
        gap: 'small',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <button
        sx={{
          cursor: rest.disabled ? 'not-allowed' : 'pointer',
          width: '1.25rem',
          color: displayChecked ? 'info-400' : 'transparent',
          padding: 0,
          aspectRatio: 1,
          position: 'relative',
          border: '2px solid',
          borderColor: displayChecked ? 'info-400' : 'muted',
          borderRadius: 'small',
          backgroundColor: displayChecked
            ? alpha('info-200', 0.3)
            : alpha('ghost', 0.5),
          ...outlineCss.base,
          [cssSelectors.focusVisible]: {
            ...outlineCss.focused,
          },
          [cssSelectors.hover]: {
            borderColor: displayChecked ? 'info-500' : 'b-400',
          },
          [cssSelectors.disabled]: {
            borderColor: 'ghost',
          },
        }}
        ref={buttonRef}
        type="button"
        role="checkbox"
        aria-checked={displayChecked}
        onClick={() => inputRef.current?.click()}
        {...rest}>
        <Icon size="small" aria-hidden>
          check
        </Icon>
      </button>
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        hidden
        onClick={(e) => {
          if (onClick) onClick(e);
          setDisplayChecked(!displayChecked);
        }}
        {...{
          name,
          checked,
          defaultChecked,
          required,
          readOnly,
          value,
          defaultValue,
          onFocus,
          onBlur,
          onChange,
        }}
      />
      {label && (
        <Label
          sx={{ cursor: rest.disabled ? 'not-allowed' : 'pointer' }}
          htmlFor={id}>
          {label}
        </Label>
      )}
    </Flex>
  );
};

export const Checkbox = forwardRef(CheckboxContent);
