module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
};
