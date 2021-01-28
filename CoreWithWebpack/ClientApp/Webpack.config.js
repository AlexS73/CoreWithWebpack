const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
            template: './src/index.html'
        })
    ]
}