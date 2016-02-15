'use strict';
const webpack = require('webpack');
const PRODUCTION = process.env.NODE_ENV === 'production';

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
    plugins: PRODUCTION ? [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }), new webpack.DefinePlugin({
            // To use React in production mode, set the environment variable NODE_ENV to production
            // http://facebook.github.io/react/docs/getting-started.html#using-react-from-npm
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ] : [],
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
