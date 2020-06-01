import express from 'express'
import topics from './routes/topics.js'
import cors from 'cors'

const server = express()

server.use(cors({
  origin: '*'
}))

server.use('/topics', topics)
server.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

export default server
