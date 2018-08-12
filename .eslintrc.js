module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prefer-stateless-function": "off",
    quotes: "off"
  }
};
