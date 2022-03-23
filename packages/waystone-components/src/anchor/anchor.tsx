/** @jsxImportSource theme-ui */
import { FC } from 'react';
import { Link, LinkProps } from 'theme-ui';
import { anchorCss } from './anchor.styles';

/** The props for the anchor component. */
export interface AnchorProps extends LinkProps {
  /**
   * A flag indicating whether the href is an external link.
   * @default false
   */
  external?: boolean;
}

/** The internal anchor component */
const InternalAnchor: FC<LinkProps> = ({ children, ...rest }) => (
  <Link {...rest} sx={anchorCss}>
    {children}
  </Link>
);

/** The external anchor component */
const ExternalAnchor: FC<LinkProps> = ({
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...rest
}) => (
  <Link {...rest} sx={anchorCss} target={target} rel={rel}>
    {children}
  </Link>
);

export const Anchor: FC<AnchorProps> = ({ external = false, ...rest }) => {
  if (external) {
    return <ExternalAnchor {...rest} />;
  }

  return <InternalAnchor {...rest} />;
};
