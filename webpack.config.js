// webpack.config.js
const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.resolve(__dirname),
    entry: {
        application: './src/js/index.js',
        common: 'react'
    },
    output: {
        path: path.join(__dirname, '..', '_dist', 'static', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: 'common.js',
            name: 'common'
        })
    ]
}

module.exports = config;