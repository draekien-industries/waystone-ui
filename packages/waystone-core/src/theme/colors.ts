import { createColorScale } from '@waystone/color';

export const colors = {
  text: '#212121',
  background: '#f7f7f7',
  primary: '#4995ae',
  secondary: '#ba90c7',
  accent: '#00a9ed',
  highlight: '#ed6f22',
  muted: '#a4a4a4',
  ghost: '#e3e3e3',
  modes: {
    dark: {
      text: '#b6e9ff',
      background: '#212121',
      muted: '#434343',
      ghost: '#383838',
    },
  },
  ...createColorScale({ name: 'p', value: '#4995ae' }),
  ...createColorScale({ name: 'a', value: '#00a9ed' }),
  ...createColorScale({ name: 's', value: '#ba90c7' }),
  ...createColorScale({ name: 'h', value: '#ed6f22' }),
  ...createColorScale({ name: 'b', value: '#666666' }),
  ...createColorScale({ name: 'info', value: '#066899' }),
  ...createColorScale({ name: 'success', value: '#2B8D4B' }),
  ...createColorScale({ name: 'warning', value: '#EA4318' }),
  ...createColorScale({ name: 'error', value: '#E00027' }),
} as const;

export default colors;
