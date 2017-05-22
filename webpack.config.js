'use strict';
var path = require('path');
var webpack = require('webpack');
module.exports = {
    //entry: './main.js',
    entry: [
        'webpack-dev-server/client?http://localhost:1337',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/horus/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',include:path.join(__dirname, 'src/js')
            },{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap',include:path.join(__dirname,'src/scss')
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap', include:path.join(__dirname, 'src/scss')
            },{
                test: /\.(jpg|png)$/,
                loader: 'url-loader'
            }
        ] // End loaders
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin ()
    ]
}