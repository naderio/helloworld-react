/* eslint-disable no-undef, global-require, import/no-extraneous-dependencies */

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  globals: {
    globalThis: 'readonly',
  },
  rules: {
    'max-len': ['warn', { code: 120 }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    camelcase: 'warn',
    'no-underscore-dangle': 'warn',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'no-restricted-syntax': require('eslint-config-airbnb-base/rules/style').rules['no-restricted-syntax'].filter(
      (item) => typeof item !== 'object' || item.selector !== 'ForOfStatement',
    ),
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-fragments': ['error', 'element'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
