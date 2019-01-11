const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let pathsToClean = [
	'dist'
]

module.exports = {
    //开发环境
	// devtool: 'eval-source-map',
    // 生产环境
	devtool: 'cheap-module-source-map',
	entry: {
		entry: "./src/main.js"
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	
	module: {
		rules: [{
				test: /\.(css|less)$/,
				use: [{
					loader : "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}]
			},
			{
				test: /\.(jsx|js)$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/
			},
			{
			    test: /\.(jpg|png|gif)$/,
			    loader: 'url-loader?limit=1000000000000&name=img/[hash:8].[name].[ext]'
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)$/,
				loader: 'url-loader?imit=100000&name=./assets/fonts/[name].[ext]'
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname+"/src"),
		host: "localhost",
		port: 8080,
		hot: true,
		inline: true,
		quiet: false,
	}
};