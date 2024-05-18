# @waystone/cli

## 3.0.0

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
  - @waystone/color@9.0.0

## 2.1.0

### Minor Changes

- 21db598: chore: bump deps and add documentation

### Patch Changes

- Updated dependencies [21db598]
  - @waystone/color@8.2.0

## 2.0.4

### Patch Changes

- Updated dependencies [41664e2]
  - @waystone/color@8.1.4

## 2.0.3

### Patch Changes

- Updated dependencies [856ba2b]
  - @waystone/color@8.1.3

## 2.0.2

### Patch Changes

- 5b726aa: fix build and dependencies
- Updated dependencies [5b726aa]
  - @waystone/color@8.1.2

## 2.0.1

### Patch Changes

- Updated dependencies [7086019]
  - @waystone/color@8.1.1

## 2.0.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- Updated dependencies [5c43357]
  - @waystone/color@8.1.0

## 1.0.1

### Patch Changes

- 1898587: Move plop into dependencies

## 1.0.0

### Minor Changes

- 9a4fb80: Create component generation script
- 9a4fb80: Introduced waystone cli tool

### Patch Changes

- 9a4fb80: Update dependencies
- 9a4fb80: Updaet package json to include repository
- Updated dependencies [4dcbaa8]
- Updated dependencies [9a4fb80]
- Updated dependencies [4dcbaa8]
  - @waystone/color@8.0.0
