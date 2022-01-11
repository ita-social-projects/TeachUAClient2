const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',

    },
    resolve: {
        alias: {
            _: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, 'public'),
            ],
          },
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
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [{
                    loader: 'file-loader',
<<<<<<< HEAD
=======

>>>>>>> f61dc9ae5d678e30a710d767b5249976ce4e799d
                }]
            },
          
            {
                test: /\.(svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
<<<<<<< HEAD
                    options: {
                        limit: 10000,
                      },
=======

>>>>>>> f61dc9ae5d678e30a710d767b5249976ce4e799d
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
            'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
          }),
    ],
}