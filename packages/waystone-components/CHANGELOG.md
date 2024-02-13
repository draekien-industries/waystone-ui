# @waystone/components

## 9.3.0

### Minor Changes

- 7086019: Update focus to focus within and button padding

### Patch Changes

- 7086019: Update dependencies
- Updated dependencies [7086019]
- Updated dependencies [7086019]
  - @waystone/core@9.3.0
  - @waystone/syntax-highlighter@12.0.0
  - @waystone/utils@9.3.0

## 9.2.1

### Patch Changes

- Updated dependencies [24a8468]
  - @waystone/syntax-highlighter@11.0.1
  - @waystone/core@9.2.1
  - @waystone/utils@9.2.1

## 9.2.0

### Minor Changes

- 8f75dd6: Added 'use client' directives to relevant components
- 8f75dd6: Updated table to use tanstack react virtual

### Patch Changes

- @waystone/syntax-highlighter@11.0.0
- @waystone/utils@9.2.0
- @waystone/core@9.2.0

## 9.1.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- Updated dependencies [2744dbd]
- Updated dependencies [5c43357]
  - @waystone/syntax-highlighter@10.0.0
  - @waystone/core@9.1.0
  - @waystone/utils@9.1.0

## 9.0.1

### Patch Changes

- f6fd6f0: Forward ref to anchor component
  - @waystone/core@9.0.1
  - @waystone/utils@9.0.1

## 9.0.0

### Major Changes

- 4a19c42: Update package structure

  Created the `@waystone/ui` package for easier installation and created the `@waystone/testing-library`
  package for a preconfigured testing-library render function.

  Uninstall your `@waystone/*` packages, and run the command `yarn add @waystone/ui`
  to update to the latest version. You will need to update the imports to point
  to the new source.

### Patch Changes

- c3d9a7a: Upgrade dependencies
  - @waystone/core@9.0.0
  - @waystone/utils@9.0.0

## 8.0.1

### Patch Changes

- 4902c93: Obey the linter
  - @waystone/core@8.0.1
  - @waystone/utils@8.0.1

## 8.0.0

### Major Changes

- 4dcbaa8: Rework of color system

  The new colorscale unifies the way colors are used to a scale starting from `50`
  and ending at `950`.

  To migrate to the new color system, replace any usages of the `*-000` colors
  with a reference to `*-50`.

### Minor Changes

- 9a4fb80: Add react table based table component
- 9a4fb80: Refactor of table component

### Patch Changes

- 4dcbaa8: Constrain range of offsets for color generation
- 9a4fb80: Update dependencies
- Updated dependencies [4dcbaa8]
- Updated dependencies [9a4fb80]
- Updated dependencies [9a4fb80]
- Updated dependencies [9a4fb80]
- Updated dependencies [9e5effc]
- Updated dependencies [4dcbaa8]
  - @waystone/core@8.0.0
  - @waystone/utils@8.0.0

## 7.0.0

### Minor Changes

- 66f4a36: Enable autocomplete for props that accepted predefined theme values
- a491b37: Update letter spacing of label

### Patch Changes

- Updated dependencies [907c970]
  - @waystone/utils@7.0.0
  - @waystone/core@7.0.0

## 6.0.0

### Minor Changes

- 8e39d65: Migrate storybook to Vite

  Storybook now uses Vite for compilation rather than webpack. This change was
  made to improve storybook performance.

  No need to update anything from the consumer end.

### Patch Changes

- Updated dependencies [8e39d65]
  - @waystone/core@6.0.0
  - @waystone/utils@6.0.0

## 5.0.0

### Minor Changes

- 43bc664: move stories into @waystone/stories package

### Patch Changes

- Updated dependencies [43bc664]
  - @waystone/core@5.0.0
  - @waystone/utils@5.0.0

## 4.0.0

### Patch Changes

- Updated dependencies [e021e14]
  - @waystone/core@4.0.0

## 3.1.0

### Minor Changes

- c357c52: build: export code-block, hooks, and common

## 3.0.0

### Minor Changes

- 209fd69: fix: update package dependencies list

### Patch Changes

- 9ce3b08: exclude test fixture from build
- Updated dependencies [209fd69]
  - @waystone/core@3.0.0
  - @waystone/utils@3.0.0

## 2.0.1

### Patch Changes

- 02f2c0e: use tsup for build instead of tsc

## 2.0.0

### Minor Changes

- fe8fc3a: Added type-fest to enable literalunions in order for strongly typed material icon names while still allowing string primitives and supporting autocomplete
- dfe69e7: Move FCC type into utils package

### Patch Changes

- Updated dependencies [fe8fc3a]
- Updated dependencies [dfe69e7]
  - @waystone/core@2.0.0
  - @waystone/utils@2.0.0

## 1.0.0

### Major Changes

- 5e07ae0: Initial major release
