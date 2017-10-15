const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  entry: {
    'app': './src/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './dist/'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.resolve(process.cwd(), 'src/')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(process.cwd())
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

