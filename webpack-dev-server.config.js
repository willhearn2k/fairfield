const webpack = require('webpack')
const path = require('path')
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '/src/app.js'),
	devtool: 'eval',

  	devServer: {   // Server Configuration options
		contentBase: 'src/www',
    	port: 8001, // Port Number
    	host: 'localhost', // Change to '0.0.0.0' for external facing server
  	},
  	output: {
    	path: path.resolve(__dirname, './dist'),
    	filename: 'app.js',
  	},
	plugins: [
		new TransferWebpackPlugin([
			{from: 'www'},
		], path.resolve(__dirname, 'src')),	
	],
  	module: {
    	rules: [
      		{
				  test: /\.(js|jsx)$/, 
				  use: ['babel-loader'],
				  exclude: /node_modules/,
			},
		],
  	}
}