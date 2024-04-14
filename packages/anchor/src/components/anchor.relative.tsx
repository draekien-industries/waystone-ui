import { forwardRef, type ForwardedRef } from 'react';
import type { Assign } from '@waystone/utils';
import type { AnchorProps } from './anchor.types';
import { undecoratedAnchorCss, anchorCss } from './anchor.styles';

export type RelativeAnchorProps = Assign<
  AnchorProps,
  {
    href: `/${string}` | `#${string}`;
  }
>;

const RelativeAnchorWithRef = (
  { href, children, nodecoration, ...rest }: RelativeAnchorProps,
  ref: ForwardedRef<HTMLAnchorElement>
) => (
  <a
    ref={ref}
    href={href}
    sx={nodecoration ? undecoratedAnchorCss : anchorCss}
    {...rest}>
    {children}
  </a>
);

export const RelativeAnchor = forwardRef(RelativeAnchorWithRef);
