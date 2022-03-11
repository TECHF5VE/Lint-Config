module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": ['warn'],
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": ['warn'],
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-unused-vars": ['warn'],
    "react/display-name": 0,
    "react/prop-types": 0,
    indent: ['error', 2, { "SwitchCase": 1 }],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  globals: {
    window: true,
    module: true,
  }
};
