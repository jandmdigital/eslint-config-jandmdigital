'use strict';

module.exports = {

   'extends': [ 'silvermine' ],

   'env': {
      'es6': true,
   },

   'parserOptions': {
      'sourceType': 'module'
   },

   'rules': {
      'silvermine/no-multiline-var-declarations': 'off',
      'one-var': 'off',
      'no-console': 'off',
      'no-restricted-syntax': 'off',
      'new-cap': 'off',
      'no-process-env': 'off',
      'strict': 'off',
      'comma-dangle': [ 'error', 'always-multiline' ],
      'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
   },
};
