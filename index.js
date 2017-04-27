'use strict';

module.exports = {

   'extends': [ 'eslint-config-silvermine' ],

   'env': {
      'es6': true,
   },

   'rules': {
      'silvermine/no-multiline-var-declarations': 'off',
      'one-var': 'off',
      'no-restricted-syntax': 'off',
      'new-cap': 'off',
      'no-process-env': 'off',
      'strict': 'off',
      'comma-dangle': [ 'error', 'always-multiline' ],
   },
};
