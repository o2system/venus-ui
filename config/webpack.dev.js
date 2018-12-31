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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
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
            template: "./src/index.html"
        }), // Generates default index.html
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'admin.html',
            template: "./src/template/admin/admin.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'login.html',
            template: "./src/template/admin/login.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-advanced.html',
            template: "./src/template/form/form-advanced.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-basic.html',
            template: "./src/template/form/form-basic.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-editor.html',
            template: "./src/template/form/form-editor.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-masks.html',
            template: "./src/template/form/form-masks.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-pickers.html',
            template: "./src/template/form/form-pickers.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-upload.html',
            template: "./src/template/form/form-upload.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-validation.html',
            template: "./src/template/form/form-validation.html"
        }),
        new HTMLWebpackPlugin({  // Also generate a test.html
            filename: 'form-wizard.html',
            template: "./src/template/form/form-wizard.html"
        }),
    ]
});