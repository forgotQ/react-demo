



module.exports = {
    //entry:[hotMiddlewareScript,'webpack/hot/dev-server',"./app/index"],
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
    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],
}