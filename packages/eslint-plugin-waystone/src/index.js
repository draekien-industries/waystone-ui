'use strict';

const useClientRule = require('./useClient');

const configs = {
  recommended: {
    plugins: ['waystone'],
  },
  rules: {
    'waystone/enforce-use-client': 'warn',
  },
};

const rules = {
  'enforce-use-client': useClientRule,
};

module.exports = {
  configs,
  rules,
};
