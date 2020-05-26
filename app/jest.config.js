module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ]
}
