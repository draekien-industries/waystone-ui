export const typography = {
  fonts: {
    body: '"Barlow", sans-serif',
    heading: '"Barlow", sans-serif',
    monospace: '"Fira Code", monospace',
  },
  fontSizes: {
    hero: '2.5rem',
    heading: '1.75rem',
    title: '1.5rem',
    subtitle: '1.25rem',
    body: '1rem',
    caption: '0.875rem',
    small: '0.75rem',
  },
  fontWeights: {
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    uppercase: '0.1em',
  },
} as const;

export default typography;
