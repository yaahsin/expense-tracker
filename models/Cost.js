// models/cost

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const costSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  amount: {
    type: Number,
    required: true
  },
  userId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  },
  categoryId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
  }
})

module.exports = mongoose.model('Cost', costSchema)