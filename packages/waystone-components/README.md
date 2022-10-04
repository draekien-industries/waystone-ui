# @waystone/components

## Docs

Click the badge below to view the components in storybook.

[![Storybook Enabled](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--63394994ddec8475ab8b00af.chromatic.com)

## Getting Started

### Installation

```bash
# yarn
yarn add @waystone/components

# npm
npm install @waystone/components
```

### Usage

In your app, consume the theme provider by declaring the below:

```tsx
import { Waystone } from '@waystone/components';

export const App = () => {
  return (
    <Waystone>
      <MyContents />
    </Waystone>
  );
};
```

### Customisation

You can optionally provide your own `theme` and `fontOptions` by instantiating
your own:

```tsx
import { Waystone } from '@waystone/components';
import { WaystoneTheme } from '@waystone/core';

export const App = () => {
  const customTheme: WaystoneTheme = {
    // my custom theme
  };

  return (
    <Waystone
      theme={customTheme}
      fontOptions={{ textFont: 'my font url', iconFont: 'my font url' }}
    >
      <MyContents />
    </Waystone>
  );
};
```
