# @waystone/tsconfig

## 2.0.0

### Major Changes

- 4dcbaa8: Rework of color system

  The new colorscale unifies the way colors are used to a scale starting from `50`
  and ending at `950`.

  To migrate to the new color system, replace any usages of the `*-000` colors
  with a reference to `*-50`.

### Patch Changes

- 4dcbaa8: Constrain range of offsets for color generation
- 9a4fb80: Update dependencies

## 1.2.0

### Minor Changes

- 8e39d65: Migrate storybook to Vite

  Storybook now uses Vite for compilation rather than webpack. This change was
  made to improve storybook performance.

  No need to update anything from the consumer end.

## 1.1.1

### Patch Changes

- 43bc664: move stories into @waystone/stories package

## 1.1.0

### Minor Changes

- 5e8295f: build: changed module from 'ESNext' to 'CommonJS'

## 1.0.0

### Major Changes

- 5e07ae0: Initial major release
