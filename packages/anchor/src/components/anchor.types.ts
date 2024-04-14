import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { SxProp } from 'theme-ui';

export type AnchorProps = {
  children?: ReactNode;
  nodecoration?: boolean;
} & ComponentPropsWithoutRef<'a'> &
  SxProp;
