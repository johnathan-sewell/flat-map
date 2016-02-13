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
        }), new webpack.DefinePlugin({ //http://facebook.github.io/react/docs/getting-started.html#using-react-from-npm
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ] : [],

    //tell webpack how to handle various file types:
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            //tell webpack we need React! http://stackoverflow.com/questions/33037113/react-webpack-undefined-react-in-console
            test: require.resolve('react'),
            loader: 'expose?React'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map'
};
