module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue',
    'jest'
  ],
  env: {
    jest: true
  },
  rules: {
    'space-before-function-paren': ['error', 'never']
  }
}
