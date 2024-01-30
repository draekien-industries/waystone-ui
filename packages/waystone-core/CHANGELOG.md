# @waystone/core

## 9.2.0

### Patch Changes

- @waystone/color@8.1.0

## 9.1.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- Updated dependencies [5c43357]
  - @waystone/color@8.1.0

## 9.0.1

## 9.0.0

## 8.0.1

## 8.0.0

### Major Changes

- 4dcbaa8: Rework of color system

  The new colorscale unifies the way colors are used to a scale starting from `50`
  and ending at `950`.

  To migrate to the new color system, replace any usages of the `*-000` colors
  with a reference to `*-50`.

### Minor Changes

- 9a4fb80: Introduced waystone cli tool

### Patch Changes

- 4dcbaa8: Constrain range of offsets for color generation
- 9a4fb80: Update dependencies
- 9e5effc: Stopped setting initial color mode name of theme ui
- Updated dependencies [4dcbaa8]
- Updated dependencies [9a4fb80]
- Updated dependencies [4dcbaa8]
  - @waystone/color@8.0.0

## 7.0.0

## 6.0.0

### Minor Changes

- 8e39d65: Migrate storybook to Vite

  Storybook now uses Vite for compilation rather than webpack. This change was
  made to improve storybook performance.

  No need to update anything from the consumer end.

## 5.0.0

### Patch Changes

- 43bc664: move stories into @waystone/stories package

## 4.0.0

### Minor Changes

- e021e14: fix: set initial color mode to dark

## 3.0.0

### Minor Changes

- 209fd69: fix: update package dependencies list

## 2.0.0

### Minor Changes

- fe8fc3a: Added type-fest to enable literalunions in order for strongly typed material icon names while still allowing string primitives and supporting autocomplete

## 1.0.0

### Major Changes

- 5e07ae0: Initial major release
