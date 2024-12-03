# @waystone/syntax-highlighter

## 13.0.3

### Patch Changes

- 202df02: fix: invalid css selector for checkbox

## 13.0.2

### Patch Changes

- f8574a9: chore: update deps

## 13.0.1

### Patch Changes

- a7a67a8: chore: upgrade dependencies and prettify types

## 13.0.0

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

## 12.1.0

### Minor Changes

- 21db598: chore: bump deps and add documentation

## 12.0.3

### Patch Changes

- 41664e2: fix: use type imports to improve bundling

## 12.0.2

### Patch Changes

- 856ba2b: fix: missing dependencies when installing package

## 12.0.1

### Patch Changes

- 5b726aa: fix build and dependencies

## 12.0.0

### Patch Changes

- 7086019: Update dependencies
- Updated dependencies [7086019]
- Updated dependencies [7086019]
  - @waystone/core@9.3.0
  - @waystone/utils@9.3.0

## 11.0.1

### Patch Changes

- 24a8468: Use os.EOL instead of \n when generating files
  - @waystone/core@9.2.1
  - @waystone/utils@9.2.1

## 11.0.0

### Patch Changes

- @waystone/utils@9.2.0
- @waystone/core@9.2.0

## 10.0.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

### Patch Changes

- 2744dbd: Port lowlight into package to fix issues with types
- Updated dependencies [5c43357]
  - @waystone/core@9.1.0
  - @waystone/utils@9.1.0
