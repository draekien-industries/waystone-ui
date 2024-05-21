import type { DimensionsAttributes } from '@waystone/types';
import {
  forwardRef,
  type ForwardRefExoticComponent,
  type ForwardedRef,
  type Key,
  type ReactNode,
  type RefAttributes,
} from 'react';

export type VirtualizedTableWrapperProps = {
  children: ReactNode;
} & DimensionsAttributes;

const VirtualizedTableWrapperWithRef = (
  { children, height = 800, ...rest }: VirtualizedTableWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) => (
  <div
    ref={ref}
    sx={{
      overflow: 'auto',
      position: 'relative',
      height,
      ...rest,
    }}
  >
    {children}
  </div>
);

export const VirtualizedTableWrapper: ForwardRefExoticComponent<
  VirtualizedTableWrapperProps & {
    key?: Key | null | undefined;
    ref: RefAttributes<HTMLDivElement>['ref'];
  }
> = forwardRef(VirtualizedTableWrapperWithRef);
