module.esports = {
  plugins: 'react',
  extends: [
    '../../.eslintrc',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-vars': 2,
  },
}
