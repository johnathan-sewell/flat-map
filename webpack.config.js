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
