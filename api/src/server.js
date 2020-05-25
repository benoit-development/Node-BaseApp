global.BASE_PATH = __dirname

const express = require('express');
const topicsRoutes = require('./routes/topics');
const swaggerRoutes = require('./routes/swagger').default;

const server = express()

server.use('/topics', topicsRoutes);
server.use('/api-docs', swaggerRoutes);
server.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

const port = 3000;
server.listen(port, function () {
  console.log('BaseApp listening on port ' + port)
})