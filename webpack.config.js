const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist/',
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, 'dist'),
  },
};