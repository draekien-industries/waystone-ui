'use client';

import type { FullWidthAttributes } from '@waystone/types';
import {
  type ComponentRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ForwardedRef,
  forwardRef,
} from 'react';
import { Flex } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import type {
  InputAriaAttributes,
  InputCallbackAttributes,
  SharedInputAttributes,
} from '../types';
import { Label } from '../label';

export type RadioProps = {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
} & InputAriaAttributes &
  InputCallbackAttributes &
  SharedInputAttributes &
  FullWidthAttributes;

export type RadioGroupProps = {
  options: Array<{ id: string; label: string; value: string }>;
  name: string;
  layout?: 'row' | 'column';
} & FullWidthAttributes &
  SharedInputAttributes &
  Omit<InputCallbackAttributes, 'onClick'> &
  InputAriaAttributes;

const RadioGroupWithRef = (
  {
    options,
    name,
    fullWidth,
    layout = 'column',
    onChange,
    onBlur,
    onFocus,
    ...rest
  }: RadioGroupProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const containerRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [displaySelected, setDisplaySelected] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    ...inputRef.current!,
    focus() {
      containerRef.current?.focus();
    },
  }));

  return (
    <Flex ref={containerRef} onFocus={onFocus} onBlur={onBlur}>
      {options.map(({ id, label, value }) => (
        <Flex
          key={id}
          sx={{
            display: fullWidth ? 'flex' : 'inline-flex',
            flexFlow: layout === 'column' ? 'column' : 'row wrap',
            gap: 'small',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <button
            sx={{
              cursor: rest.disabled ? 'not-allowed' : 'pointer',
              width: '1.25rem',
              color: displaySelected === value ? 'info-400' : 'transparent',
              padding: '3px',
              aspectRatio: 1,
              position: 'relative',
              border: '2px solid',
              borderColor: displaySelected === value ? 'info-400' : 'muted',
              borderRadius: 'max',
              backgroundColor:
                displaySelected === value
                  ? alpha('info-200', 0.3)
                  : alpha('ghost', 0.5),
              ...outlineCss.base,
              [cssSelectors.focusVisible]: {
                ...outlineCss.focused,
              },
              [cssSelectors.hover]: {
                borderColor: displaySelected ? 'info-500' : 'b-400',
              },
              [cssSelectors.disabled]: {
                borderColor: 'ghost',
              },
            }}
            type="button"
            role="radio"
            aria-checked={displaySelected === value}
            onClick={() => {
              inputRef.current!.value = value;
            }}
            {...rest}>
            <div
              sx={{
                width: '10px',
                aspectRatio: 1,
                borderRadius: 'max',
                backgroundColor:
                  displaySelected === value ? 'info-400' : 'transparent',
              }}
            />
          </button>
          {label && (
            <Label
              sx={{ cursor: rest.disabled ? 'not-allowed' : 'pointer' }}
              htmlFor={id}>
              {label}
            </Label>
          )}
        </Flex>
      ))}
      <input
        type="hidden"
        ref={inputRef}
        name={name}
        onChange={(e) => {
          setDisplaySelected(e.currentTarget.value);
          if (onChange) onChange(e);
        }}
      />
    </Flex>
  );
};

export const RadioGroup = forwardRef(RadioGroupWithRef);
