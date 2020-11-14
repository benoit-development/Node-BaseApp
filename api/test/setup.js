import mongoose from 'mongoose'
import MongoMemoryServerPkg from 'mongodb-memory-server'
import jwt from 'jsonwebtoken'

import AppUser from '../src/models/user.js'

const { MongoMemoryServer } = MongoMemoryServerPkg

let mongoServer;
let user;

beforeEach(async () => {
    // set a memory instance of mongodb
    mongoServer = new MongoMemoryServer()
    const mongoUri = await mongoServer.getUri()
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

    user = await AppUser.collection.insertOne({
        login: 'benoit',
        name: 'Benoît',
        password: '$2b$10$1o3KY/tO81e0/4nPhG5MVO04p8R0i90r12cNLD2l3qfdpdgPrQG3.',
        salt: '$2b$10$1o3KY/tO81e0/4nPhG5MVO',
    })

    // generate a token
    process.env.ACCESS_TOKEN_SECRET = "pouet"
    process.env.ACCESS_TOKEN = jwt.sign({
        username: "benoit",
        password: "pouet",
        expiresIn: '1800s'
    }, process.env.ACCESS_TOKEN_SECRET)
});

afterEach(async () => {
    await mongoose.disconnect()
    await AppUser.findOneAndDelete(user.id)
    await mongoServer.stop()
});