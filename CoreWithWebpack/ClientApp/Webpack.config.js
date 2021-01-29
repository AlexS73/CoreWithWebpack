const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';
console.log("Using NODE_ENV = " + process.env.NODE_ENV);

const webpackDevServerPort = 8083;
const proxyTarget = "http://localhost:4000";

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
        app: './src/app.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    plugins:[
        //используется для отчистки папки dist
        new CleanWebpackPlugin(),
        //используется для работы с html
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        compress: true,
        proxy: {
            '/api': {
                target: proxyTarget
            }
        },
        port: webpackDevServerPort
    },


}