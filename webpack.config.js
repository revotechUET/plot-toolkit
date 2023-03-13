const common = {
    mode: 'development',
    context: __dirname + '/src',
    entry: {
        'plot-toolkit': "./index.js",
    },
    output: {
        path: __dirname + '/dist',
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
    ]
}

/**
 * @type {import('webpack').Configuration[]}
 */
module.exports = [
    {
        ...common,
        output: {
            ...common.output,
            filename: '[name].js',
        },
    },
    {
        ...common,
        output: {
            ...common.output,
            filename: '[name].mjs',
            library: {
                type: 'module',
            },
        },
        experiments: {
            outputModule: true,
        },
    },
]