import mongoose from 'mongoose'
import server from './server.js'
import env from './env.js'

mongoose.connect(env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  auth: {
    authdb: env.DATABASE_DB
  }
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to Mongo DB')
  server.listen(3000, function () {
    console.log('Base App listening on port 3000')
  })
})
