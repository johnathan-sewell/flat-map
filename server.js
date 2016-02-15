'use strict';
const express = require('express');
const http = require('http');

const appPort = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use('/data', express.static('data'));

app.use(function(req, res) {
    res.status(404).send('Oops, that page doesn\'t exist');
});

server.listen(appPort, () => {
    /*eslint-disable no-console*/
    console.info(`server listening on port ${appPort}`);
    /*eslint-enable no-console*/
});
