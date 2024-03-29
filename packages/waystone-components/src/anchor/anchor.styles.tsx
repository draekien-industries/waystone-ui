import { getOutlineCss } from '@waystone/core';
import type { ThemeUIStyleObject } from 'theme-ui';

const outline = getOutlineCss();

export const anchorCss: ThemeUIStyleObject = {
  paddingX: 'xs',
  textDecoration: 'none',
  borderBottom: '1px solid',
  borderBottomColor: 'highlight',
  color: 'inherit',
  transition: 'all 100ms',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  cursor: 'pointer',
  ...outline.base,
  ':hover': {
    backgroundColor: 'ghost',
    borderTopLeftRadius: 'sm',
    borderTopRightRadius: 'sm',
  },
  ':focus-visible': {
    backgroundColor: 'ghost',
    borderTopLeftRadius: 'sm',
    borderTopRightRadius: 'sm',
    ...outline.focused[':enabled:not(active):focus-visible'],
  },
};

export const undecoratedAnchorCss: ThemeUIStyleObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};
