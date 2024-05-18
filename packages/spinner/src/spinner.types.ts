import type { SizeAttributes, ColorAttributes } from '@waystone/types';

export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = SizeAttributes<SpinnerSize> & ColorAttributes;
