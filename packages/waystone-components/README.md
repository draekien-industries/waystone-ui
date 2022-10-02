# @waystone/components

This is the package that contains the design system of draekien-industries.

## Consuming this package

Install this package in your project with `yarn add @waystone/components`

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

> You may need to install `@waystone/core` to use the custom theme
