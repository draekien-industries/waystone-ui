# eslint-preset-waystone

## 2.0.0

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

## 1.4.0

### Minor Changes

- 21db598: chore: bump deps and add documentation

### Patch Changes

- Updated dependencies [21db598]
  - eslint-plugin-waystone@1.2.0

## 1.3.1

### Patch Changes

- 41664e2: fix: use type imports to improve bundling

## 1.3.0

### Minor Changes

- 8f75dd6: Added a custom eslint plugin for Waystone

### Patch Changes

- 8f75dd6: Fixed plugin declaration and usage

## 1.2.0

### Minor Changes

- 9a4fb80: Refactor of table component

### Patch Changes

- 9a4fb80: Update dependencies
- 9a4fb80: Add react table based table component

## 1.1.0

### Minor Changes

- 8e39d65: Migrate storybook to Vite

  Storybook now uses Vite for compilation rather than webpack. This change was
  made to improve storybook performance.

  No need to update anything from the consumer end.

## 1.0.1

### Patch Changes

- 43bc664: move stories into @waystone/stories package

## 1.0.0

### Major Changes

- 5e07ae0: Initial major release
