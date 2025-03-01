# @waystone/testing-library

## 10.0.2

### Patch Changes

- f8574a9: chore: update deps
- Updated dependencies [f8574a9]
  - @waystone/theme-provider@1.0.1

## 10.0.1

### Patch Changes

- a7a67a8: chore: upgrade dependencies and prettify types
  - @waystone/theme-provider@1.0.0

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

## 9.2.0

### Minor Changes

- 21db598: chore: bump deps and add documentation

### Patch Changes

- Updated dependencies [21db598]
  - @waystone/theme@9.3.0

## 9.1.6

### Patch Changes

- 41664e2: fix: use type imports to improve bundling
- Updated dependencies [41664e2]
  - @waystone/theme@9.2.5

## 9.1.5

### Patch Changes

- 856ba2b: fix: missing dependencies when installing package
- Updated dependencies [856ba2b]
  - @waystone/theme@9.2.4

## 9.1.4

### Patch Changes

- 5b726aa: fix build and dependencies
- Updated dependencies [5b726aa]
  - @waystone/theme@9.2.3

## 9.1.3

### Patch Changes

- 7086019: Update dependencies
- Updated dependencies [7086019]
  - @waystone/theme@9.2.2

## 9.1.2

### Patch Changes

- @waystone/theme@9.2.1

## 9.1.1

### Patch Changes

- Updated dependencies [8f75dd6]
  - @waystone/theme@9.2.0

## 9.1.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- Updated dependencies [5c43357]
  - @waystone/theme@9.1.0

## 9.0.0

### Major Changes

- 4a19c42: Update package structure

  Created the `@waystone/ui` package for easier installation and created the `@waystone/testing-library`
  package for a preconfigured testing-library render function.

  Uninstall your `@waystone/*` packages, and run the command `yarn add @waystone/ui`
  to update to the latest version. You will need to update the imports to point
  to the new source.

### Patch Changes

- Updated dependencies [4a19c42]
  - @waystone/theme@9.0.0
