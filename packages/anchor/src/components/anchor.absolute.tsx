import {
  forwardRef,
  type ForwardedRef,
  type HTMLAttributeReferrerPolicy,
  type HTMLAttributeAnchorTarget,
} from 'react';
import { Icon } from '@waystone/icon';
import type { Assign } from '@waystone/types';
import type { AnchorProps } from './anchor.types';
import { anchorCss, undecoratedAnchorCss } from './anchor.styles';

export type AbsoluteAnchorProps = Assign<
  AnchorProps,
  {
    href: string;
    referrerPolicy: HTMLAttributeReferrerPolicy;
    target: HTMLAttributeAnchorTarget;
  }
>;

const AbsoluteAnchorWithRef = (
  { href, children, nodecoration, ...rest }: AbsoluteAnchorProps,
  ref: ForwardedRef<HTMLAnchorElement>
) => (
  <a
    ref={ref}
    href={href}
    {...rest}
    sx={nodecoration ? undecoratedAnchorCss : anchorCss}
  >
    <Icon sx={{ pr: 'extra-small', pb: 'extra-small' }}>open_in_new</Icon>
    {children}
  </a>
);

export const AbsoluteAnchor = forwardRef(AbsoluteAnchorWithRef);
