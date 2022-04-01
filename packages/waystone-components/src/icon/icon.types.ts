import { HasColor, HasSize } from '../common/interfaces';

export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'two-tone'
  | 'sharp';

/** The props required to generate the correct icon styles. */
export interface IconStyleProps extends HasSize, HasColor {}
