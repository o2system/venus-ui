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

module.exports = {
    entry: {
        "venus-ui": "./src/main.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpg|jpeg|gif|png|webpm|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    }
}