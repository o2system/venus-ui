/**
 * This file is part of the O2System Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

let blender = require('o2system-blender');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';

blender.setOutputPath('assets/');
blender.setResourceRoot('');

let htmlFilename = 'index';
if(typeof process.env.npm_config_filename !== 'undefined') {
    htmlFilename = process.env.npm_config_filename;
}

if(isDev) {
    blender.setPublicPath('./docs/');

    blender.webpackConfig({
        output: {
            path: path.resolve(__dirname, './docs/'),
            publicPath: './'
        },
        devServer: {
            contentBase: './docs/',
            hot: true,
            open: true,
        },
        devtool: 'source-map',
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    include: path.join(__dirname, 'src/partials'),
                    use: {
                        loader: 'html-loader',
                        options: {
                          minimize: false,
                          interpolate: true
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'O2System Venus UI',
                template: './src/' + htmlFilename + '.html',
                inject: 'body',
                filename: htmlFilename + '.html',
                hash: true
            })
        ]
    });
    
    blender.js('./src/UserInterface.js', './docs/venus-ui.js')
        .sass('./src/UserInterface.scss', './docs/venus-ui.css')
        .sass('./src/Components/demo.scss', './docs/venus-demo.css');
} else {
    blender.setPublicPath('./dist/');

    blender.webpackConfig({
        output: {
            path: path.resolve(__dirname, './dist/'),
            publicPath: './'
        },
        mode: 'production'
    });
    
    blender.js('./src/UserInterface.js', './dist/venus-ui.js')
        .sass('./src/UserInterface.scss', './dist/venus-ui.css');
}