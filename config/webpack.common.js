const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  entry: {
    app: './src/index.js',
    font: './src/font.js',
    sw: './src/sw.js',
  },
  output: {
    path: path.resolve(process.cwd(), './dist/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.resolve(process.cwd(), 'src/'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(process.cwd()),
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.html',
    }),
  ],
};
