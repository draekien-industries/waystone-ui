import { Span } from 'lowlight/lib/core';
import { Tree } from '../lib';

export type CreateSpanOptions = {
  children: Tree;
  className: string[];
};

export const createSpan = ({
  children,
  className,
}: CreateSpanOptions): Span => {
  const properties = {
    className,
  };

  return {
    type: 'element',
    tagName: 'span',
    properties,
    children,
  };
};
