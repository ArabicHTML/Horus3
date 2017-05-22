'use strict';
const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },{
                test: /\.(jpg|png)$/,
                loader: 'url-loader'
            }
        ] // End loaders
    },
    devServer:{
        host: 'localhost',
        port: 8080
    }
}