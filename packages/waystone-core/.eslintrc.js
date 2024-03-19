const preset = require('eslint-preset-waystone');

module.exports = {
  ...preset,
  parserOptions: {
    ...preset.parserOptions,
  },
};
