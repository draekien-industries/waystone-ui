# @waystone/stories

## 10.0.1

### Patch Changes

- Updated dependencies [cae3dce]
  - @waystone/table@1.1.0

## 10.0.0

### Major Changes

- bd9dbe7: Major refactor of package structure and component implementation

  ## Migration steps

  Uninstall the old version of `@waystone/*`, then run one of the below scripts depending on the package manager you use:

  | Package manager | Script                                                         |
  | --------------- | -------------------------------------------------------------- |
  | npm             | `npm i @waystone/ui@latest @emotion/react@11 theme-ui@0.6`     |
  | yarn            | `yarn add @waystone/ui@latest @emotion/react@11 theme-ui@0.16` |
  | pnpm            | `pnpm i @waystone/ui@latest @emotion/react@11 theme-ui@0.16`   |

  Replace imports with an import of `@waystone/ui`

  ```diff
  - import { Waystone } from '@waystone/theme';
  - import { Card, Text, Button } from '@waystone/components';
  + import { Waystone, Card, Text, Button } from '@waystone/ui';
  ```

### Patch Changes

- Updated dependencies [bd9dbe7]
  - @waystone/theme-provider@1.0.0
  - @waystone/button-group@1.0.0
  - @waystone/card-button@1.0.0
  - @waystone/form-fields@1.0.0
  - @waystone/code-block@1.0.0
  - @waystone/overlay@1.0.0
  - @waystone/spinner@1.0.0
  - @waystone/anchor@1.0.0
  - @waystone/button@1.0.0
  - @waystone/table@1.0.0
  - @waystone/theme@1.0.0
  - @waystone/card@1.0.0
  - @waystone/code@1.0.0
  - @waystone/icon@1.0.0
  - @waystone/text@1.0.0

## 9.5.0

### Minor Changes

- 21db598: chore: bump deps and add documentation

### Patch Changes

- Updated dependencies [21db598]
  - @waystone/components@9.5.0
  - @waystone/theme@9.3.0
  - @waystone/utils@9.4.0
  - @waystone/core@9.4.0

## 9.4.1

### Patch Changes

- 41664e2: fix: use type imports to improve bundling
- Updated dependencies [41664e2]
  - @waystone/components@9.4.1
  - @waystone/theme@9.2.5
  - @waystone/utils@9.3.2
  - @waystone/core@9.3.3

## 9.4.0

### Minor Changes

- 86f5b91: Update style of table component

### Patch Changes

- Updated dependencies [86f5b91]
- Updated dependencies [856ba2b]
  - @waystone/components@9.4.0
  - @waystone/theme@9.2.4
  - @waystone/core@9.3.2

## 9.3.1

### Patch Changes

- 5b726aa: fix build and dependencies
- 90f63d8: Update stories location
- Updated dependencies [5b726aa]
  - @waystone/components@9.3.1
  - @waystone/theme@9.2.3
  - @waystone/utils@9.3.1
  - @waystone/core@9.3.1

## 9.3.0

### Patch Changes

- 7086019: Update dependencies
- Updated dependencies [7086019]
- Updated dependencies [7086019]
- Updated dependencies [7086019]
  - @waystone/core@9.3.0
  - @waystone/components@9.3.0
  - @waystone/theme@9.2.2
  - @waystone/utils@9.3.0

## 9.2.1

### Patch Changes

- @waystone/components@9.2.1
- @waystone/core@9.2.1
- @waystone/utils@9.2.1
- @waystone/theme@9.2.1

## 9.2.0

### Patch Changes

- 04575c8: build(deps-dev): bump vite from 4.5.2 to 5.0.12
- bc1df8b: build(deps-dev): bump vite from 4.4.9 to 4.5.2
- Updated dependencies [8f75dd6]
- Updated dependencies [8f75dd6]
  - @waystone/components@9.2.0
  - @waystone/theme@9.2.0
  - @waystone/utils@9.2.0
  - @waystone/core@9.2.0

## 9.1.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- Updated dependencies [5c43357]
  - @waystone/components@9.1.0
  - @waystone/core@9.1.0
  - @waystone/theme@9.1.0
  - @waystone/utils@9.1.0

## 9.0.1

### Patch Changes

- Updated dependencies [f6fd6f0]
  - @waystone/components@9.0.1
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
- 2f248fe: Upgrade storybook to v7.1.1
- Updated dependencies [c3d9a7a]
- Updated dependencies [4a19c42]
  - @waystone/components@9.0.0
  - @waystone/theme@9.0.0
  - @waystone/core@9.0.0
  - @waystone/utils@9.0.0

## 8.0.1

### Patch Changes

- Updated dependencies [4902c93]
  - @waystone/components@8.0.1
  - @waystone/core@8.0.1
  - @waystone/utils@8.0.1

## 8.0.0

### Minor Changes

- 9a4fb80: Add react table based table component
- 9a4fb80: Refactor of table component

### Patch Changes

- 9a4fb80: Update dependencies
- Updated dependencies [4dcbaa8]
- Updated dependencies [9a4fb80]
- Updated dependencies [9a4fb80]
- Updated dependencies [9a4fb80]
- Updated dependencies [9a4fb80]
- Updated dependencies [9e5effc]
- Updated dependencies [4dcbaa8]
  - @waystone/components@8.0.0
  - @waystone/core@8.0.0
  - @waystone/utils@8.0.0

## 7.0.0

### Patch Changes

- Updated dependencies [66f4a36]
- Updated dependencies [907c970]
- Updated dependencies [a491b37]
  - @waystone/components@7.0.0
  - @waystone/utils@7.0.0
  - @waystone/core@7.0.0

## 6.0.0

### Major Changes

- 8e39d65: Migrate storybook to Vite

  Storybook now uses Vite for compilation rather than webpack. This change was
  made to improve storybook performance.

  No need to update anything from the consumer end.

### Patch Changes

- Updated dependencies [8e39d65]
  - @waystone/components@6.0.0
  - @waystone/core@6.0.0
  - @waystone/utils@6.0.0

## 5.0.0

### Major Changes

- 43bc664: move stories into @waystone/stories package

### Patch Changes

- Updated dependencies [43bc664]
  - @waystone/components@5.0.0
  - @waystone/core@5.0.0
  - @waystone/utils@5.0.0
