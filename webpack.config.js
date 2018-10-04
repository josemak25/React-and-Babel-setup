const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                "presets":[
                    "@babel/env",
                    "@babel/react"
                ],
                cacheDirectory: true
              }
            },
      ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build'),
        inline: true
    }
}