'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: [ './dev/main.js' ]
  },
  output: {
    path: path.resolve(__dirname, '../dev/dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'VuexFlash',
    libraryTarget: 'umd'
  },
  devServer: {
    hot: true,
    inline: true
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'dev/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});
