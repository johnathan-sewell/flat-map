'use strict';

module.exports = {
    context: __dirname,
    entry: [
        './public/app.js'
    ],
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
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map'
};
