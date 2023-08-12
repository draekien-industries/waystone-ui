# @waystone/ui

## 9.1.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- Updated dependencies [2744dbd]
- Updated dependencies [5c43357]
  - @waystone/syntax-highlighter@10.0.0
  - @waystone/components@9.1.0
  - @waystone/core@9.1.0
  - @waystone/theme@9.1.0
  - @waystone/utils@9.1.0

## 9.0.0

### Major Changes

- 4a19c42: Update package structure

  Created the `@waystone/ui` package for easier installation and created the `@waystone/testing-library`
  package for a preconfigured testing-library render function.

  Uninstall your `@waystone/*` packages, and run the command `yarn add @waystone/ui`
  to update to the latest version. You will need to update the imports to point
  to the new source.

### Patch Changes

- 9829c46: Fix build script
- Updated dependencies [c3d9a7a]
- Updated dependencies [4a19c42]
  - @waystone/components@9.0.0
  - @waystone/theme@9.0.0
  - @waystone/core@9.0.0
  - @waystone/utils@9.0.0
