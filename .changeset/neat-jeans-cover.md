---
'eslint-config-waystone': major
'@waystone/syntax-highlighter': major
'@waystone/testing-library': major
'@waystone/theme-provider': major
'@waystone/button-group': major
'@waystone/card-button': major
'@waystone/css-presets': major
'@waystone/form-fields': major
'@waystone/code-block': major
'@waystone/template': major
'@waystone/tsconfig': major
'@waystone/overlay': major
'@waystone/spinner': major
'@waystone/anchor': major
'@waystone/button': major
'@waystone/color': major
'@waystone/table': major
'@waystone/theme': major
'@waystone/types': major
'@waystone/card': major
'@waystone/code': major
'@waystone/icon': major
'@waystone/text': major
'@waystone/stories': major
'@waystone/cli': major
'@waystone/ui': major
---

Major refactor of package structure and component implementation

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
