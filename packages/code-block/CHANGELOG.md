# @waystone/code-block

## 1.0.3

### Patch Changes

- Updated dependencies [202df02]
  - @waystone/syntax-highlighter@13.0.3

## 1.0.2

### Patch Changes

- f8574a9: chore: update deps
- Updated dependencies [f8574a9]
  - @waystone/syntax-highlighter@13.0.2

## 1.0.1

### Patch Changes

- a7a67a8: chore: upgrade dependencies and prettify types
- Updated dependencies [a7a67a8]
  - @waystone/syntax-highlighter@13.0.1

## 1.0.0

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
