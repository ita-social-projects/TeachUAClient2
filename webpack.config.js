const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
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
                }]
            },
          
            {
                test: /\.(svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new webpack.EnvironmentPlugin( { ...process.env } )
    ],
}