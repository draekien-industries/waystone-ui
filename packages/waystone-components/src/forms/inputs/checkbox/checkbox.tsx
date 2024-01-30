'use client';

import { HTMLProps, useEffect, useRef } from 'react';

export type CheckboxProps = {
  indeterminate?: boolean;
} & Omit<HTMLProps<HTMLInputElement>, 'type'>;

export const Checkbox = ({
  indeterminate,
  checked,
  ...rest
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = !!indeterminate;
    }
  }, [ref, checked, indeterminate]);

  return (
    <input
      sx={{
        cursor: rest.disabled ? 'not-allowed' : 'pointer',
      }}
      type="checkbox"
      ref={ref}
      checked={checked}
      {...rest}
    />
  );
};

export default Checkbox;
