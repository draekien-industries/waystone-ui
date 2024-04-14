export const layouts = {
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    max: 999,
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  zIndices: {
    lowest: 0,
    lower: 10,
    low: 20,
    middle: 30,
    high: 40,
    higher: 50,
    highest: 60,
    pagination: 1,
    navbar: 20,
    dropdown: 30,
    drawer: 40,
    modal: 50,
    toast: 60,
  },
} as const;

export default layouts;
