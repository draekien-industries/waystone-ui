'use client';

/* eslint-disable react/function-component-definition */

import { useMemo } from 'react';
import { Box } from 'theme-ui';
import type {
  Node,
  Span,
  SyntaxHighlightStyleSheet as StyleSheet,
} from '../../lib';
import { createStyleObject } from '../../utils';

export type CodeLineProps = {
  children: Node;
  stylesheet: StyleSheet;
};

type CodeLineContentProps = {
  children: Span;
  stylesheet: StyleSheet;
  allStylesheetSelectors: string;
};

function CodeLineContent({
  children,
  stylesheet,
  allStylesheetSelectors,
}: CodeLineContentProps) {
  const {
    properties: { className: classNames },
  } = children;

  const props = useMemo(() => {
    const startingClassName =
      classNames && classNames.includes('token') ? ['token'] : [];

    const className =
      classNames &&
      startingClassName.concat(
        classNames.filter((cname) => !allStylesheetSelectors.includes(cname))
      );

    return {
      className: className.join(' ') || undefined,
      style: createStyleObject({
        classNames,
        stylesheet,
      }),
    };
  }, [classNames, stylesheet, allStylesheetSelectors]);

  return (
    <Box as={children.tagName || 'span'} {...props}>
      {children.children.map((child, index) => (
        <CodeLine stylesheet={stylesheet} key={`code-line-${index.toString()}`}>
          {child}
        </CodeLine>
      ))}
    </Box>
  );
}

export function CodeLine({ children, stylesheet }: CodeLineProps) {
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

  return (
    <CodeLineContent
      stylesheet={stylesheet}
      allStylesheetSelectors={allStylesheetSelectors}
    >
      {children}
    </CodeLineContent>
  );
}
