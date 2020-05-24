const express = require('express');
const topicsRoutes = require('./routes/topics');
const swaggerRoutes = require('./routes/swagger');

const server = express()

server.use('/topics', topicsRoutes);
server.use('/api-docs', swaggerRoutes);
server.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = server;