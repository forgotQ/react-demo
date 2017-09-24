var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// console.log(process.env.NODE_ENV)

module.exports = {
    entry:[hotMiddlewareScript,'webpack/hot/dev-server',"./app/index"],
    output: {
        // path: __dirname + "/build",
        path:'/',
        filename: "bundle.js",
        chunkFilename:"[name].[chunkhash:5].chunk.js",
        //publicPath: '/',
        publicPath: '/'
    },

    resolve:{
        extensions:['', '.js','.jsx']
    },

    module: {
        // preLoaders: [
        //     // 报错 ？？？？？
        //     {test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/}
        // ],
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.sass$/, exclude: /node_modules/, loader: 'style!css!postcss!sass' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },
    devtool: 'inline-source-map',
    eslint: {
        configFile: '.eslintrc' // Rules for eslint
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],

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

}
