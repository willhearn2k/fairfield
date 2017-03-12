const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'eval',
  	entry: {
    	'app': [
      	'babel-polyfill',
      	'./src/app'
    	]
  	},
  	devServer: {   // Server Configuration options
    	//contentBase: 'src/www', // Relative directory for base of server
    	hot: true, // Live-reload
    	inline: true,
    	port: 8000, // Port Number
    	host: 'localhost', // Change to '0.0.0.0' for external facing server
  	},
  	output: {
    	path: path.resolve(__dirname, './dist'),
    	filename: '[name].js',
  	},
  	module: {
    	loaders: [
      		{
        		test: /\.jsx?$/, // All .js files
        		loaders: ['babel-loader'],
        		exclude: /node_modules/,
     		},
    	],
  	}
}