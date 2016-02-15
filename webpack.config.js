'use strict';

module.exports = {
    context: __dirname,
    entry: {
        javascript: './src/app.js'
    },
    output: {
        path: `${__dirname}/public/build`,
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
    devtool: 'source-map'
};
