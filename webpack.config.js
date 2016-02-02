'use strict';

module.exports = {
    context: __dirname,
    entry: {
        javascript: './public/app.js',
        html: './public/index.html'
    },
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map'
};

