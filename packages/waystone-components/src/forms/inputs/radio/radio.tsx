import type { HTMLProps } from 'react';
import { forwardRef } from 'react';

export type RadioProps = {
  name: string;
} & Omit<HTMLProps<HTMLInputElement>, 'type' | 'name'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => (
  <input ref={ref} type="radio" {...props} />
));

Radio.displayName = 'Radio';

export default Radio;
