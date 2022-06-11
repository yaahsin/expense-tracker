// models/cost

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  }
})

module.exports = mongoose.model('User', todoSchema)