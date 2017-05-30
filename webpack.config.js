// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const CommonsChunkPlugin = require("../../lib/optimize/CommonsChunkPlugin");

const config = {
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    entry: {
        pageA: "./src/js/index.js"
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
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
        new CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        })
    ]
}

module.exports = config;