'use strict'
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = 'production';

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'dist/',
    filename: 'vue-flash-message.min.js',
    library: 'VueFlashMessage',
    libraryTarget: 'umd'
  },
  plugins: [
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: 'vue-flash-message.min.css',
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
  ]
});
