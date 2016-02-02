'use strict';

const express = require('express');
const http = require('http');
const path = require('path');

const appConfig = {
    appPort: 3000
};

const logger = {
    /*eslint-disable no-console*/
    info: console.log
    /*eslint-enable no-console*/
};

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.static('build'));
app.use('/data', express.static('data'));

app.use(function(req, res) {
    res.status(404).send('Oops, that page doesn\'t exist');
});

server.listen(appConfig.appPort, () => {
    logger.info(`server listening on port ${appConfig.appPort}`);
});
