const path = require('path')
const env = process.env.NODE_ENV || 'test'
const chalk = require('chalk')

if (env) {
  console.log( chalk.white.bgCyan.bold('[process env]:', env.toUpperCase()) )
}

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

