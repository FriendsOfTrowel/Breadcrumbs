/*global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

let outputFile = 'breadcrumbs.js';
let outputFileMin = 'breadcrumbs.min.js';
let library = 'TrowelBreadcrumbs';

const config = {
  entry: __dirname + '/src/javascript/breadcrumbs.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

var destConfig = Object.assign({}, config, {
  output: {
    path: __dirname + '/dest/javascript',
    filename: outputFile,
    library: library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
});

var destMinConfig = Object.assign({}, config, {
  output: {
    path: __dirname + '/dest/javascript',
    filename: outputFileMin,
    library: library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true }),
  ],
});

var testConfig = Object.assign({}, config, {
  output: {
    path: __dirname + '/test/dest/javascript',
    filename: outputFile,
    library: library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
});


module.exports = [destConfig, destMinConfig, testConfig];
