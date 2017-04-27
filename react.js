'use strict';

module.exports = {

   'extends': [ './index.js', './commonjs.js', 'plugin:react/recommended' ],

   'plugins': [
      'react',
   ],

   'parserOptions': {
      'ecmaFeatures': {
         'jsx': true,
      },
   },

   'rules': {
      'react/prop-types': 'off',
   },
};
