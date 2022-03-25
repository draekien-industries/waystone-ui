import React from 'react';
import { HasColor, HasSize, HasVariant } from '../common/interfaces';

export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'two-tone'
  | 'sharp';

export interface IconStyleProps extends HasSize, HasColor {}

export interface IconOptions extends IconStyleProps, HasVariant {
  variant?: IconVariant;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  options?: IconOptions;
}
