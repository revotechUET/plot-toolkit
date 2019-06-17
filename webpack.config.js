var webpack = require('webpack');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
    mode: 'development',
    context: __dirname + '/src',
    //entry: './main.js',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        //path: __dirname + '../../multi-well-crossplot/bower_components/plot-toolkit/dist',
        filename: 'plot-toolkit.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/library/library.json')
        }),
        new HardSourceWebpackPlugin()
    ]
}
