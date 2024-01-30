'use strict';

const useClientRule = require('./useClient');

export const configs = {
  recommended: {
    plugins: ['waystone'],
  },
  rules: {
    'waystone/enforce-use-client': 'warn',
  },
};

export const rules = {
  'enforce-use-client': useClientRule,
};
