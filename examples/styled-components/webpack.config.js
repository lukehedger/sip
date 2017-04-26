const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 3000,
    stats: 'errors-only',
  },
  entry: require('path').join(__dirname, '/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
