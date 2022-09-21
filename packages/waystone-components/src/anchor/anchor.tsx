/** @jsxImportSource theme-ui */
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Link, LinkProps } from 'theme-ui';
import { Icon } from '../icon/icon';
import { anchorCss } from './anchor.styles';

/**
 * The props for the anchor component.
 * @extends LinkProps
 */
export interface AnchorProps extends LinkProps {
  /**
   * A flag indicating whether the href is an external link.
   * @default false
   */
  external?: boolean;
  /**
   * The target to open the link in. The default value only applies when the `external` flag is `true`.
   */
  target?: HTMLAttributeAnchorTarget;
  /**
   * The relationship between the linked resource and the current document.
   * The default value only applies when the `external` flag is `true`.
   */
  rel?: string;
  /**
   * The react component to display inside the anchor.
   */
  children: ReactNode;
}

/** The internal anchor component */
export const InternalAnchor = ({ children, ...rest }: LinkProps) => (
  <Link {...rest} sx={anchorCss}>
    {children}
  </Link>
);

/** The external anchor component */
export const ExternalAnchor = ({
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...rest
}: LinkProps) => (
  <Link {...rest} sx={anchorCss} target={target} rel={rel}>
    {children} <Icon name="open_in_new" size="sm" />
  </Link>
);

/**
 * A styled HTML `<a>` element which creates a hyperlink to the provided URL.
 * Content passed in via the `children` prop should indicate the link's destination.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a for more details
 * about the HTML `<a>` element.
 */
export const Anchor = ({ external = false, ...rest }: AnchorProps) => {
  if (external) {
    return <ExternalAnchor {...rest} />;
  }

  return <InternalAnchor {...rest} />;
};
