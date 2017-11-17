module.exports = {
  entry: './client-widget/widget.js',
  output: {
    filename: './client-widget/build/bundle.js',
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