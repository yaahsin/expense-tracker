// models/seeds/costSeeders.js

const mongoose = require('mongoose')
const Cost = require('../cost')
const initialCost = require('../initialCost.json')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
 