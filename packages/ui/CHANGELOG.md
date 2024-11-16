# @waystone/ui

## 12.1.2

### Patch Changes

- Updated dependencies [f8574a9]
  - @waystone/syntax-highlighter@13.0.2

## 12.1.1

### Patch Changes

- Updated dependencies [a7a67a8]
  - @waystone/syntax-highlighter@13.0.1

## 12.1.0

### Minor Changes

- cae3dce: Adds support for virtualized table rows

## 12.0.0

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
  - @waystone/syntax-highlighter@13.0.0
  - @waystone/color@9.0.0

## 11.0.0

### Minor Changes

- 21db598: chore: bump deps and add documentation

### Patch Changes

- Updated dependencies [21db598]
  - @waystone/syntax-highlighter@12.1.0
  - @waystone/components@9.5.0
  - @waystone/color@8.2.0
  - @waystone/theme@9.3.0
  - @waystone/utils@9.4.0
  - @waystone/core@9.4.0

## 10.0.1

### Patch Changes

- Updated dependencies [41664e2]
  - @waystone/syntax-highlighter@12.0.3
  - @waystone/components@9.4.1
  - @waystone/color@8.1.4
  - @waystone/theme@9.2.5
  - @waystone/utils@9.3.2
  - @waystone/core@9.3.3

## 10.0.0

### Patch Changes

- 856ba2b: fix: missing dependencies when installing package
- Updated dependencies [86f5b91]
- Updated dependencies [856ba2b]
  - @waystone/components@9.4.0
  - @waystone/syntax-highlighter@12.0.2
  - @waystone/color@8.1.3
  - @waystone/theme@9.2.4
  - @waystone/core@9.3.2

## 9.1.4

### Patch Changes

- 5b726aa: fix build and dependencies
- Updated dependencies [5b726aa]
  - @waystone/syntax-highlighter@12.0.1
  - @waystone/components@9.3.1
  - @waystone/theme@9.2.3
  - @waystone/utils@9.3.1
  - @waystone/core@9.3.1

## 9.1.3

### Patch Changes

- 7086019: Update dependencies
- Updated dependencies [7086019]
- Updated dependencies [7086019]
- Updated dependencies [7086019]
  - @waystone/core@9.3.0
  - @waystone/syntax-highlighter@12.0.0
  - @waystone/components@9.3.0
  - @waystone/theme@9.2.2
  - @waystone/utils@9.3.0

## 9.1.2

### Patch Changes

- Updated dependencies [24a8468]
  - @waystone/syntax-highlighter@11.0.1
  - @waystone/components@9.2.1
  - @waystone/core@9.2.1
  - @waystone/utils@9.2.1
  - @waystone/theme@9.2.1

## 9.1.1

### Patch Changes

- Updated dependencies [8f75dd6]
- Updated dependencies [8f75dd6]
  - @waystone/components@9.2.0
  - @waystone/theme@9.2.0
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
