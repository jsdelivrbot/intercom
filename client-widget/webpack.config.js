const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './widget.js',
  output: {
    filename: './build/dist.js',
    path: __dirname
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};