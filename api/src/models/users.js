import mongoose from 'mongoose'

export default mongoose.model('Topic', new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}))
