# @waystone/ui

@waystone/ui is the recommended way of installing the design system of Draekien-Industries.

## Docs

Click the badge below to view the components in storybook.

[![Storybook Enabled](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--63394994ddec8475ab8b00af.chromatic.com)

## What's included

| Package                        | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `@waystone/core`               | core functionality of the design system         |
| `@waystone/theme`              | the theme-ui theme provider                     |
| `@waystone/components`         | all of the pre-made components                  |
| `@waystone/utils`              | utilities that are used by the design system    |
| `@waystone/syntax-highlighter` | a type safe version of react-syntax-highlighter |

## Installation

Run the relevant script for your package manager

| Package manager | Script                                                 |
| --------------- | ------------------------------------------------------ |
| npm             | `npm i @waystone/ui@latest @emotion/react theme-ui`    |
| yarn            | `yarn add @waystone/ui@latest @emotion/react theme-ui` |
| pnpm            | `pnpm i @waystone/ui@latest @emotion/react theme-ui`   |

## Usage

Import the `Waystone` component and use it inside your `App.tsx`

```tsx
export const App = () => {
  return (
    <StrictMode>
      <Waystone>
        <YourAppHere />
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
        <YourApp />
      </Waystone>
    </StrictMode>
  );
};
```
