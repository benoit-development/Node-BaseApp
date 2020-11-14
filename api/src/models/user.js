import mongoose from 'mongoose'

export default mongoose.model('appusers', new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}))
