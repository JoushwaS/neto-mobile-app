// module.exports = {
//   root: true,
//   extends: ['@react-native'],
//   plugins: ['unused-imports', 'import'],
//   rules: {
//     'import/order': 2,
//     'unused-imports/no-unused-imports-ts': 2,
//     'react/jsx-boolean-value': 2,
//     'react/react-in-jsx-scope': 0,
//     'react-native/no-inline-styles': 0,
//   },
// };

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['.ts', '.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
