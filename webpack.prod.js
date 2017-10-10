var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var webpack = require('webpack')
module.exports = merge(common,{
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        // 将 第三方依赖 单独打包
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'es6-promise',
            'whatwg-fetch',
            'immutable'
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[chunkhash:8].js",
        publicPath: '/',
        chunkFilename:"[name].[chunkhash:5].chunk.js"
    },
    plugins: [
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by zhaobojian"),

        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),

        // 分离CSS和JS文件
        new ExtractTextPlugin('[name].[chunkhash:8].css'),

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:8].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
});