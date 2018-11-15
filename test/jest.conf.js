const path = require('path')

module.exports = {
  verbose: false,
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: [ 'js' ],
  moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
  },
  testURL: 'http://localhost:3000/',
  transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest'
		// '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  }
}

