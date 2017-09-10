var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/build',
        filename: 'bundle.min.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        modulesDirectories: ['./', 'node_modules'],
        alias: {
            "npm": 'node_modules',
        }
    }
};