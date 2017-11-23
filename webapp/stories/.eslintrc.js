module.exports = {
  extends: "pagarme-react",
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [0],
    "css-modules/no-unused-class": [
      2,
      {
        camelCase: true
      }
    ],
    "css-modules/no-undef-class": [
      2,
      {
        camelCase: true
      }
    ],
    "import/no-extraneous-dependencies": ["warn", {
      devDependencies: true,
      peerDependencies: true,
    }],
    "react/prop-types": [0],
  },
  plugins: [
    "css-modules"
  ],
};
