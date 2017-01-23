const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'main.js': ['./src/main.js', 'webpack-hot-middleware/client']
    },
    output: {
        path: '/',
        publicPath: 'http://localhost:3000/dist/',
        filename: '[name]'
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions: ['', '.js'],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};
