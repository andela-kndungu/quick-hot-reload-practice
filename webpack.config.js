const path = require('path');
const webpack = require('webpack');

var assetsPath = path.join(__dirname, './public/build');

module.exports = {
  entry: path.join(__dirname, './app/main.js'),
  devtool: 'eval-source-map',
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app')
    }]
  },
};

