module.exports = {
  entry: './widget.js',
  output: {
    filename: './build/bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};