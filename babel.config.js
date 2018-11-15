const env = process.env.NODE_ENV || 'production'
const chalk = require('chalk')

if (env) {
  console.log( chalk.cyan('[babel config] process env:', env.toUpperCase()) )
}

module.exports = {
  presets: ["@babel/preset-env"],
  overrides: [{
    test: ["./src"],
    presets: (env !== 'test') ? [
      ["@babel/preset-env", { "modules": false }]
    ] : ["@babel/preset-env"]
  }, {
    test: ["./test"],
    presets: ["@babel/preset-env"]
  }]
}
