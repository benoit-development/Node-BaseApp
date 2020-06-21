import mongoose from 'mongoose'
import MongoMemoryServerPkg from 'mongodb-memory-server'

const { MongoMemoryServer } = MongoMemoryServerPkg

let mongoServer;

beforeEach(async () => {
  mongoServer = new MongoMemoryServer()
  const mongoUri = await mongoServer.getUri()
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
});

afterEach(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
});