// models/cost

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const costSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: { type: Date, default: Date.now },
    required: true
  },
  categoryId: {
    type: String,
  },
  amount: {
    type: Number,
    required: true
  },
  userId: {
    type: string
  }
})

module.exports = mongoose.model('Cost', todoSchema)