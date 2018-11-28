const env = process.env.NODE_ENV || 'production'

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
