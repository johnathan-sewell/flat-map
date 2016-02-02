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

    //tell webpack how to handle various file types:
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
        }, {
            test: /\.css$/,
            loader: 'style!css' //runs  style and css loaders
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map'
};
