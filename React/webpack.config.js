var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: BUILD_DIR + '/index.jsx',
  output: {
    path: '',
    filename: BUILD_DIR + '/bundle.js'
  },
  module : {
	loaders : [
	  {
	    test : /\.jsx?/,
	    loader : 'babel-loader',
	    exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2'
         ]
        }
	  }
	]
  }
};

module.exports = config;