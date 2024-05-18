# @waystone/ui

`@waystone/ui` is the design system of Draekien-Industries.

## Docs

Click the badge below to view the components in storybook.

[![Storybook Enabled](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--63394994ddec8475ab8b00af.chromatic.com)

## Installation

Run the relevant script for your package manager

| Package manager | Script                                                         |
| --------------- | -------------------------------------------------------------- |
| npm             | `npm i @waystone/ui@latest @emotion/react@11 theme-ui@0.6`     |
| yarn            | `yarn add @waystone/ui@latest @emotion/react@11 theme-ui@0.16` |
| pnpm            | `pnpm i @waystone/ui@latest @emotion/react@11 theme-ui@0.16`   |

## Usage

Import the `Waystone` component and use it inside your `App.tsx`

```tsx
export const App = () => {
  return (
    <StrictMode>
      <Waystone>
        <MyApp />
      </Waystone>
    </StrictMode>
  );
};
```

## Customizing the theme

Provide your custom theme into the `theme` prop of the `Waystone` component. The default theme
will be merged with the one you provide.

```tsx
export const App = () => {
  return (
    <StrictMode>
      <Waystone
        theme={{
          colors: {
            primary: 'blue',
          },
        }}
      >
        <MyApp />
      </Waystone>
    </StrictMode>
  );
};
```
