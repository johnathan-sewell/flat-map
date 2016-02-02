'use strict';

const express = require('express');
const http = require('http');
const path = require('path');

const appConfig = {
    appPort: 3000,
    environment: process.env.NODE_ENV
};

const logger = {
    /*eslint-disable no-console*/
    info: console.log
    /*eslint-enable no-console*/
};

const app = express();
const server = http.createServer(app);

if (appConfig.environment === 'development') {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');

    const config = require('./webpack.config.js');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        quiet: false,
        noInfo: false,
        stats: {
            colors: true,
        }
    }));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.static('build'));

app.use(function(req, res) {
    res.status(404).send('Oops, that page doesn\'t exist');
});

server.listen(appConfig.appPort, () => {
    logger.info(`server listening on port ${appConfig.appPort}`);
});
