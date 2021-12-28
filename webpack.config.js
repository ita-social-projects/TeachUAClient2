const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }],

            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']   
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [{
                        loader:'file-loader'
                    }],
            },
            {
                test: /\.svg$/,

                use: [{
                    loader: "svg-url-loader",
                    options: {
                        limit: 100000,
                    }
                },
                {
                    loader: '@svgr/webpack',
                    options: {
                      babel: false,
                      icon: true,
                    },
                  }],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
}