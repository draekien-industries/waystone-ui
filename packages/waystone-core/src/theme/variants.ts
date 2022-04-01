import { ThemeUIStyleObject } from 'theme-ui';

export const variants: Record<string, ThemeUIStyleObject> = {
  text: {
    default: {
      fontSize: 'body',
      fontWeight: 'regular',
      lineHeight: 'body',
      fontFamily: 'body',
      marginY: 'sm',
    },
    hero: {
      fontSize: 'hero',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      marginY: 'lg',
    },
    heading: {
      fontSize: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      marginY: 'md',
    },
    title: {
      fontSize: 'title',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      marginY: 'sm',
    },
    subtitle: {
      fontSize: 'subtitle',
      fontWeight: 'semibold',
      lineHeight: 'heading',
      fontFamily: 'body',
      marginY: 'sm',
    },
    eyebrow: {
      fontSize: 'body',
      fontWeight: 'medium',
      lineHeight: 'body',
      fontFamily: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'uppercase',
    },
    body: {
      fontSize: 'body',
      fontWeight: 'regular',
      lineHeight: 'body',
      fontFamily: 'body',
      marginY: 'sm',
    },
    caption: {
      fontSize: 'caption',
      fontWeight: 'regular',
      lineHeight: 'body',
      fontFamily: 'body',
    },
    small: {
      fontSize: 'small',
      fontWeight: 'regular',
      lineHeight: 'body',
      fontFamily: 'body',
    },
    monospace: {
      fontFamily: 'monospace',
      lineHeight: 'body',
      fontWeight: 'regular',
      fontSize: 'body',
    },
  },
};

export default variants;
