module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    "import",
    "react",
    "jsx-a11y",
  ],
  extends: 'airbnb',
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
