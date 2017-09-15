var webpack = require('webpack')
var path = require('path');
var libName = 'Mu'

var outputFile = libName + '.js';


var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: outputFile,
      library: libName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            },
            sourceMap: true
          }),
    ],
    module: {
      loaders: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /(\.jsx|\.js)$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
     modules: [__dirname, 'node_modules'],    
    }
  };
  
  module.exports = config;