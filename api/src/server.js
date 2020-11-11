import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import topics from './routes/topics.js'
import auth from './routes/auth.js'

const server = express()
server.use(cors({
    origin: '*'
}))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/topics', topics)
server.use('/auth', auth)
server.use(express.static('static'))
server.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

export default server
