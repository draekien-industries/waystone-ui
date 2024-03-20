'use client';

import { useMemo } from 'react';
import { Box } from 'theme-ui';
import type { Node, StyleSheet } from '../../lib';
import { createStyleObject } from '../../utils';

export type CodeLineProps = {
  node: Node;
  stylesheet: StyleSheet;
};

export const CodeLine = ({ node, stylesheet }: CodeLineProps) => {
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

  if (node.type === 'text') {
    return <span>{node.value}</span>;
  }

  const { properties } = node;

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
    <Box as={node.tagName || 'span'} {...props}>
      {node.children.map((child, index) => (
        <CodeLine
          node={child}
          stylesheet={stylesheet}
          key={`code-line-${index.toString()}`}
        />
      ))}
    </Box>
  );
};
