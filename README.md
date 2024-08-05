# Waystone-UI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Publish Packages](https://github.com/draekien-industries/waystone-ui/actions/workflows/release.yml/badge.svg)](https://github.com/draekien-industries/waystone-ui/actions/workflows/release.yml)
[![Publish Codecov](https://github.com/draekien-industries/waystone-ui/actions/workflows/coverage.yml/badge.svg)](https://github.com/draekien-industries/waystone-ui/actions/workflows/coverage.yml)
[![codecov](https://codecov.io/gh/draekien-industries/waystone-ui/branch/main/graph/badge.svg?token=FOEQJUVOY0)](https://codecov.io/gh/draekien-industries/waystone-ui)

Waystone-UI is the design system of Draekien-Industries built on top of [Theme UI](https://theme-ui.com/).

## What's inside?

This Turborepo includes the following public packages and apps:

### Apps and Packages

- 💻 apps
- 📦 packages
- 🔧 tools

| Name                           | Type | Description                                                          |
| :----------------------------- | :--- | -------------------------------------------------------------------- |
| `@waystone/ui`                 | 📦   | The entrypoint of the UI library                                     |
| `@waystone/syntax-highlighter` | 📦   | Minimal port of react-syntax-highlighter for react 18 and typescript |
| `@waystone/color`              | 📦   | Tailwind style color stops generator logic                           |
| `@waystone/cli`                | 🔧   | CLI tool for code-gen                                                |
| `@waystone/stories`            | 💻   | Storybook of all the available components                            |
| `eslint-config-waystone`       | 📦   | Shared configs used in the project                                   |
| `eslint-plugin-waystone`       | 📦   | Shared plugins used in the project                                   |

## Docs

Click the badge below to view the components in storybook.

[![Storybook Enabled](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--63394994ddec8475ab8b00af.chromatic.com)

## Installation

Run the relevant script for your package manager

| Package manager | Script                                                         |
| --------------- | -------------------------------------------------------------- |
| npm             | `npm i @waystone/ui@latest @emotion/react@11 theme-ui@0.16`     |
| yarn            | `yarn add @waystone/ui@latest @emotion/react@11 theme-ui@0.16` |
| pnpm            | `pnpm i @waystone/ui@latest @emotion/react@11 theme-ui@0.16`   |

## Contributing

1. Clone or fork this repository
2. Checkout a feature branch for your change
3. Make your changes locally
4. Create a changeset by running `npx changeset` and answer the provided questions
5. Commit your changes locally
6. Push your changes to remote
7. Create a pull request
