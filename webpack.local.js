const path = require("path");
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
    mode: 'development',
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../wi-angular/watch/bower_components/plot-toolkit/dist'),
        filename: 'plot-toolkit.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']

        }]
    },
    plugins: [
        new HardSourceWebpackPlugin()
    ]
}
