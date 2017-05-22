var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot: true,
    historyApiFallback:true
}).listen(1337, 'localhost', function(err, result){
    if(err){ console.log(err); }
    console.log('Horus working on localhost port:1337');
});