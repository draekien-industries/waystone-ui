module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:n/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  ignorePatterns: ['**/*.test.js'],
};
