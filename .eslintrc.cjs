module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
