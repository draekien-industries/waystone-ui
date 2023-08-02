import { getOutlineCss } from '@waystone/core';
import { ThemeUIStyleObject } from 'theme-ui';

export const codeBlockContainerCss: ThemeUIStyleObject = {
  backgroundColor: 'b-600',
  mb: 'lg',
  mx: 'md',
  borderRadius: 'md',
  variant: 'text.monospace',
  display: 'block',
  position: 'relative',
  overflow: 'clip',
};

export const codeBlockLanguageCss: ThemeUIStyleObject = {
  variant: 'text.small',
  letterSpacing: 1.25,
  fontWeight: 'medium',
  position: 'absolute',
  top: 0,
  left: '1.5rem',
  backgroundColor: 'a-600',
  padding: 'xs',
  color: 'b-50',
  textTransform: 'uppercase',
  boxShadow: 'sm-dark',
  borderBottomLeftRadius: 'sm',
  borderBottomRightRadius: 'sm',
  pointerEvents: 'none',
};

const outline = getOutlineCss();

export const codeBlockCopyButtonCss: ThemeUIStyleObject = {
  variant: 'text.small',
  letterSpacing: 1.25,
  fontWeight: 'medium',
  position: 'absolute',
  top: 0,
  right: '1.5rem',
  padding: 'xs',
  background: 'b-500',
  boxShadow: 'sm-dark',
  border: 'none',
  borderBottomLeftRadius: 'sm',
  borderBottomRightRadius: 'sm',
  color: 'b-50',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 200ms',
  ...outline.base,
  ...outline.focused,
  ':hover': {
    background: 'b-400',
  },
  ':active': {
    background: 'b-300',
    ...outline.active[':enabled:active'],
  },
};

export const codeBlockCaptionCss: ThemeUIStyleObject = {
  position: 'absolute',
  variant: 'text.caption',
  textAlign: 'center',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 'xs',
  backgroundColor: 'b-700',
  color: 'b-50',
};
