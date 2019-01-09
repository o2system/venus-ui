/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	entry: {
		"venus-ui.min": "./src/main.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../docs"),
		publicPath: "/venus-ui/"
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
				],
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
				}]
			}
		]
	},

	plugins: [
	new HTMLWebpackPlugin({
		title: "O2System Venus UI",
		template: "./src/index.html",
		minify: {
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		}
        }), // Generates default index.html
	new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
	],
	optimization: {
		minimize: true,
		minimizer: [
		new UglifyJsPlugin({
			include: /\.min\.js$/
		}),
		new OptimizeCSSAssetsPlugin({
			include: /\.min\.css$/
		})
		]
	}
});