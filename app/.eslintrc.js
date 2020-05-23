module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue',
    'jest'
  ],
  env: {
    jest: true
  }
}
