export const styles = {
  shadows: {
    none: 'none',
    small:
      'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)',
    medium:
      'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 4px 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)',
    large:
      'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 8px 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)',
  },
  sizes: {
    'extra-small': '1em',
    small: '5em',
    medium: '10em',
    large: '15em',
    'extra-large': '20em',
    half: '50%',
    full: '100%',
  },
} as const;

export default styles;
