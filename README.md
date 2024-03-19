# Waystone-UI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Publish Packages](https://github.com/draekien-industries/waystone-ui/actions/workflows/release.yml/badge.svg)](https://github.com/draekien-industries/waystone-ui/actions/workflows/release.yml)
[![Publish Codecov](https://github.com/draekien-industries/waystone-ui/actions/workflows/coverage.yml/badge.svg)](https://github.com/draekien-industries/waystone-ui/actions/workflows/coverage.yml)
[![codecov](https://codecov.io/gh/draekien-industries/waystone-ui/branch/main/graph/badge.svg?token=FOEQJUVOY0)](https://codecov.io/gh/draekien-industries/waystone-ui)

Waystone-UI is the design system of Draekien-Industries.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `@waystone/stories` - The storybook for the design system
- `@waystone/components` - The React components for the design system
- `@waystone/core` - The design system theme and types
- `@waystone/utils` - Some utils that can be used by consumers of the design system
- `@waystone/tsconfig` - A Shared `tsconfig.json` used throughout the monorepo
- `eslint-preset-waystone` - The ESLint preset used throught the monorepo

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

## Docs

Click the badge below to view the components in storybook.

[![Storybook Enabled](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--63394994ddec8475ab8b00af.chromatic.com)

## Installation

```bash
# NPM
npm install @waystone/ui @emotion/react

# Yarn
yarn add @waystone/ui @emotion/react
```

## Contributing

1. Clone or fork this repository
2. Checkout a feature branch for your change
3. Make your changes locally
4. Create a changeset by running `yarn changeset` and answer the provided questions
5. Commit your changes locally
6. Push your changes to remote
7. Create a pull request
