# @waystone/color

A set of color utilities used by the `@waystone/*` design system.

## Getting Started

```bash
# npm
npm install @waystone/color

# yarn
yarn add @waystone/color
```

## What you get

### The `createColorScale` method

Creates a tailwindcss style color scale based on the HEX color provided,
and gives you autocomplete on the generated keys.

```ts
const colorScale = createColorScale({
  name: 'primary',
  value: '#00A8EB',
});

/**
 * The generated color scale
 * {
 *   'primary-50': '#EBF9FF',
 *   'primary-100': '#DBF5FF',
 *   'primary-200': '#ADE8FF',
 *   'primary-300': '#7AD9FF',
 *   'primary-400': '#33C5FF',
 *   'primary-500': '#00A8EB',
 *   'primary-600': '#009AD6',
 *   'primary-700': '#0087BD',
 *   'primary-800': '#00719E',
 *   'primary-900': '#005070',
 *   'primary-950': '#003347'
 * } *
 * /
```
