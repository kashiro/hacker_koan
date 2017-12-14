const path = require('path');

module.exports = {
  context: process.cwd(),
  entry: {
    sw: './src/sw.js',
  },
  output: {
    path: path.resolve(process.cwd(), './dist/'),
    filename: '[name].bundle.js',
    publicPath: '/hacker_koans/',
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
};
