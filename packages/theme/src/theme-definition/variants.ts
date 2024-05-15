export const variants = {
  text: {
    default: {
      fontSize: 'body',
      fontWeight: 'regular',
      lineHeight: 'body',
      fontFamily: 'body',
      marginY: 'small',
    },
    hero: {
      fontSize: 'hero',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      marginY: 'large',
    },
    heading: {
      fontSize: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      marginY: 'medium',
    },
    title: {
      fontSize: 'title',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontFamily: 'heading',
      marginY: 'small',
    },
    subtitle: {
      fontSize: 'subtitle',
      fontWeight: 'semibold',
      lineHeight: 'heading',
      fontFamily: 'body',
      marginY: 'small',
    },
    eyebrow: {
      fontSize: 'body',
      fontWeight: 'medium',
      lineHeight: 'body',
      fontFamily: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'uppercase',
    },
    label: {
      fontSize: 'body',
      fontWeight: 'medium',
      lineHeight: 'body',
      fontFamily: 'body',
      marginY: 0,
    },
    body: {
      fontSize: 'body',
      fontWeight: 'regular',
      lineHeight: 'body',
      fontFamily: 'body',
      marginY: 'small',
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
} as const;

export default variants;