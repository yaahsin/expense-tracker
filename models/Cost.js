// models/cost

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const costSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  categoryId: {
    type: String,
  },
  amount: {
    type: Number,
    required: true
  },
  userId: {
    type: String
  }
})

module.exports = mongoose.model('Cost', costSchema)