import express from 'express'
import topics from './routes/topics.js'

const server = express()

server.use('/topics', topics)
server.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

export default server