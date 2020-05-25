import express from 'express'
import topics from './routes/topics.js'
import swagger from './routes/swagger.js'

const server = express()

server.use('/topics', topics)
server.use('/api-docs', swagger)
server.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

const port = 3000;
server.listen(port, function () {
  console.log('BaseApp listening on port ' + port)
})