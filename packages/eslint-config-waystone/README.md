# eslint-config-waystone

## Installation

```bash
npm i -D eslint eslint-config-waystone
```

## Usage

```js
// .eslintrc.js
module.exports = {
  extends: ['waystone'],
  // OR extends: ['waystone/typescript']
  // OR extends: ['waystone/react']
};
```

## Configs

| Name                                     | Description                            |
| :--------------------------------------- | :------------------------------------- |
| [default](docs/configs/default.md)       | Barebones configuration for vanilla js |
| [typescript](docs/configs/typescript.md) | Typescript configuration               |
| [react](docs/configs/react.md)           | Typescript + react configuration       |
