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
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	entry: {
		"venus-ui": "./src/main.js",
		"venus-ui.min": "./src/main.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(process.cwd(), "dist"),
		publicPath: "/"
	},
	module: {
		rules: [{
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {importLoaders: 1, sourceMap: true},
				},
				{loader: "postcss-loader",
					options: {
						config: {
							path: path.resolve(__dirname, "postcss.config.js")
						}
					}
				},
				"sass-loader",

			],
		}]
	},

	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false,
					},
				},
			}),
			new OptimizeCSSAssetsPlugin({
				include: /\.min\.css$/
			})
		],
	}
});