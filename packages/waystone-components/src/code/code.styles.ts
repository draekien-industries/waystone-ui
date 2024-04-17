import type { ThemeUIStyleObject } from 'theme-ui';

export const codeCss = (darkMode: boolean): ThemeUIStyleObject => ({
  variant: 'text.mono',
  fontSize: 'caption',
  backgroundColor: darkMode ? 'b-600' : 'b-200',
  borderRadius: 'small',
  px: 'extra-small',
  py: 2,
  color: darkMode ? 'highlight' : 'b-600',
});
