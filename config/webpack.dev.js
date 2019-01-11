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
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    entry: {
        "venus-ui": "./src/main.dev.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dev"),
        publicPath: "/"
    },
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
        contentBase: "dev",
        overlay: true,
        stats: {
            colors: true
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"},
                    {
                        loader: "postcss-loader",
                        options: {config: {path: 'config/postcss.config.js'}}
                    },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HTMLWebpackPlugin({
            title: "O2System Venus UI",
            template: "./src/index.html"
        }), // Generates default index.html
    ]
});