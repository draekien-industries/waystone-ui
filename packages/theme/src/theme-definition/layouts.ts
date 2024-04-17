export const layouts = {
  radii: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
    'extra-large': '1rem',
    max: 999,
  },
  space: {
    'extra-small': '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    'extra-large': '2rem',
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
