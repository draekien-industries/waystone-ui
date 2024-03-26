'use client';

import { useMemo } from 'react';
import { Box } from 'theme-ui';
import type { Node, StyleSheet } from '../../lib';
import { createStyleObject } from '../../utils';

export type CodeLineProps = {
  children: Node;
  stylesheet: StyleSheet;
};

export const CodeLine = ({ children, stylesheet }: CodeLineProps) => {
  const allStylesheetSelectors = useMemo(
    () =>
      Object.keys(stylesheet).reduce((classes, selector) => {
        selector.split('.').forEach((className) => {
          if (!classes.includes(className)) {
            classes.concat(className);
          }
        });

        return classes;
      }),
    [stylesheet]
  );

  if (children.type === 'text') {
    return <span>{children.value}</span>;
  }

  const { properties } = children;

  const startingClassName =
    properties.className && properties.className.includes('token')
      ? ['token']
      : [];

  const className =
    properties.className &&
    startingClassName.concat(
      properties.className.filter(
        (cname) => !allStylesheetSelectors.includes(cname)
      )
    );

  const props = {
    ...properties,
    className: className.join(' ') || undefined,
    style: createStyleObject({
      classNames: properties.className,
      stylesheet,
    }),
  };

  return (
    <Box as={children.tagName || 'span'} {...props}>
      {children.children.map((child, index) => (
        <CodeLine stylesheet={stylesheet} key={`code-line-${index.toString()}`}>
          {child}
        </CodeLine>
      ))}
    </Box>
  );
};
