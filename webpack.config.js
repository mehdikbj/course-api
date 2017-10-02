const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
    output: path.join(__dirname, './target/classes/static')
};
const TARGET = process.env.npm_lifecycle_event;


var common = module.exports = {
    entry: [
        './src/main/scripts/main.js',
    ],
    output: {
        path: PATHS.output,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: "babel-loader",
            include: __dirname,
            query: {
                presets: [[
                    "latest",
                    {
                        "modules": false
                    }
                ], "react"]
            }
        }],
    },
    resolve: {
        modules: ['node_modules', './src/main/scripts'],
        extensions: ['.js', '.jsx']
    },
};

if (TARGET === 'start') {
    console.log('Compiling front end code for dev ')

    // Add Hot reload for dev env
    common.module.loaders[0].query.presets.push("react-hmre")

    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:3000',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });

}

if (!TARGET) {
    console.log('Compiling front end code for production ')

    module.exports = merge(common, {});
}