const preset = require('eslint-preset-waystone');

module.exports = {
  ...preset,
  extends: ['plugin:waystone/recommended', ...preset.extends],
  env: {
    browser: true,
    es2021: true,
  },
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
