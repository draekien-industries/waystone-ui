import { ThemeUIStyleObject } from 'theme-ui';

export const anchorCss: ThemeUIStyleObject = {
  paddingX: 'xs',
  textDecoration: 'none',
  borderBottom: '1px solid',
  borderBottomColor: 'highlight',
  color: 'inherit',
  transition: 'all 100ms',
  outline: 'none',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  cursor: 'pointer',
  ':hover, :focus': {
    backgroundColor: 'ghost',
    borderTopLeftRadius: 'sm',
    borderTopRightRadius: 'sm',
  },
};

export const undecoratedAnchorCss: ThemeUIStyleObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};
