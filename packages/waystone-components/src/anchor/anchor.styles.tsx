import { ThemeUIStyleObject } from 'theme-ui';

export const anchorCss: ThemeUIStyleObject = {
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
    backgroundColor: 'b-300',
    borderTopLeftRadius: 'sm',
    borderTopRightRadius: 'sm',
  },
};
