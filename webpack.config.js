const path = require('path');
const PATHS = {
    output: path.join(__dirname, './target/classes/static')
};

module.exports = {
    entry: [
        './src/main/scripts/main.js',
    ],
    output: {
        path: PATHS.output,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules', './src/main/scripts'],
        extensions: ['.js', '.jsx']
    },
};