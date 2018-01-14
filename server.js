/**
 * Created by zhaobojian on 2017/9/24.
 */
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');
var compiler = webpack(config);
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var WebpackHotMiddleware = require('webpack-hot-middleware')
// var app = express();
// app.use(webpackDevMiddleware(compiler,
//     {
//     publicPath: config.output.publicPath,
//     hot: true,
//     index :"index.tmpl.html",
//     historyApiFallback: true,
//     inline: true,
//     proxy: {
//         '/api': {
//             target: 'http://localhost:3000',
//             changeOrigin: true,
//             secure: false
//         }
//     },
// }));
// app.use(WebpackHotMiddleware(compiler));
// app.listen(8080,function (err, result) {
//
// });
new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            secure: false
        }
    },
}).listen(8081, 'localhost', function (err, result) {

});