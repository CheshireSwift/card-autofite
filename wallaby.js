module.exports = function (wallaby) {
  return {
    files: ['packages/**/*.js', '!packages/**/*.test.js', '!**/node_modules/**'],
    tests: ['packages/autofite-tests/*.test.js'],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    compilers: {
      'packages/**/*.js': wallaby.compilers.babel(),
    },
  }
}
