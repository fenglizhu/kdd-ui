const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'), // 类似 webpack.context
  moduleFileExtensions: [ // 类似 webpack.resolve.extensions
    'js',
    'json',
    'vue',
  ],
  // collectCoverage: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // 类似 webpack.resolve.alias
  },
  transform: { // 类似 webpack.module.rules
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  setupFiles: ['<rootDir>/test/unit/setup'], // 类似 webpack.entry
  coverageDirectory: '<rootDir>/test/unit/coverage', // 类似 webpack.output 生成的报告放哪里
};