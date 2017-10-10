var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common,{
    devtool: 'inline-source-map',
    entry: {
        app: ["webpack-dev-server/client?http://localhost:8080","webpack/hot/only-dev-server","./app/index"]
    },
    output: {
        // path: __dirname + "/build",
        path:'/',
        filename: "bundle.js",
        chunkFilename:"[name].[chunkhash:5].chunk.js",
        publicPath: '/'
    },
    eslint: {
        configFile: '.eslintrc' // Rules for eslint
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        // new OpenBrowserPlugin({
        //   url: 'http://localhost:8080'
        // }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false')),
            'process.env.NODE_ENV': '"development"'
        })
    ],
});