import mongoose from 'mongoose'
import MongoMemoryServerPkg from 'mongodb-memory-server'
import jwt from 'jsonwebtoken'

const { MongoMemoryServer } = MongoMemoryServerPkg

let mongoServer;

beforeEach(async () => {
  // set a memory instance of mongodb
  mongoServer = new MongoMemoryServer()
  const mongoUri = await mongoServer.getUri()
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

  // generate a token
  process.env.ACCESS_TOKEN_SECRET = "pouet"
  process.env.ACCESS_TOKEN = jwt.sign({
    username: "john",
    password: "123",
    expiresIn: '1800s'
  }, process.env.ACCESS_TOKEN_SECRET)
});

afterEach(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
});