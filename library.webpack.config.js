const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.css'],
        modules: [__dirname, 'node_modules']
    },

    entry: {
        //library: [ 'angular', 'lodash', 'resize-sensor' ]
        library: [ 'lodash', 'resize-sensor' ]
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './dist/library'),
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: './dist/library/[name].json'
        })
    ]
};
