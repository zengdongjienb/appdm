const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  plugins:[
      new HtmlWebpackPlugin({
        title:'appdemo'
    })
  ],
  output: {
    filename: 'name.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};