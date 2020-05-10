const express = require('express');
const routes = require('./routes');

const server = express()

server.use('/', routes);
server.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = server;