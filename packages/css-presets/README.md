# `@waystone/anchor`

## Installation

Run the relevant script for your package manager

| Package manager | Script                                                 |
| --------------- | ------------------------------------------------------ |
| npm             | `npm i @waystone/ui@latest @emotion/react theme-ui`    |
| yarn            | `yarn add @waystone/ui@latest @emotion/react theme-ui` |
| pnpm            | `pnpm i @waystone/ui@latest @emotion/react theme-ui`   |

## Usage

### Relative URL

```tsx
const App = () => {
  return (
    <Anchor.Relative href="/example">my link</Anchor.Relative>
  )
}
```

### Absolute URL

```tsx
const App = () => {
  return (
    <Anchor.Absolute href="https://example.com">my link</Anchor.Absolute>
  )
}
```
