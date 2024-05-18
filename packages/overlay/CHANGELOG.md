# @waystone/overlay

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
