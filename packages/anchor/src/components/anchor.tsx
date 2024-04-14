import { AbsoluteAnchor } from './anchor.absolute';
import { RelativeAnchor } from './anchor.relative';

export const Anchor = {
  Relative: RelativeAnchor,
  Absolute: AbsoluteAnchor,
} as const;
