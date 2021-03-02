module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'linebreak-style': 0,
    'indent': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'eol-last': 0,
    'spaced-comment': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
    'prefer-const': 'off'
  }
};