/* eslint func-names: ["error", "never"] */
module.exports = function(wallaby) {
  return {
    files: [
      'utilities/*.js',
      'tools/*.js',
      'settings/*.js',
      'objects/*.js',
      'generic/*.js',
      'elements/*.js',
    ],
    tests: ['test/**/*.test.js'],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    debug: true,
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }),
    },
  };
};
