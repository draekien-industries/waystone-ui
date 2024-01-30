const preset = require('eslint-preset-waystone');

module.exports = {
  ...preset,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    ...preset.extends,
    'plugin:storybook/recommended',
    'plugin:waystone/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    ...preset.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
