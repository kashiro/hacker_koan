/* eslint-disable new-cap */
const CommonConfig = require('./webpack.common.js');
const Merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '/hacker_koans/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('[name].[chunkhash].css')],
  devtool: 'cheap-module-source-map',
});
