const preset = require('eslint-preset-waystone');

module.exports = {
  ...preset,
  extends: ['plugin:waystone/recommended', ...preset.extends],
};
