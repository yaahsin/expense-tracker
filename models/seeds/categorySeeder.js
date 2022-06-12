// models/seeds/costSeeders.js

const db = require('../../config/mongoose')
const Category = require('../category')
const initialCost = require('../initialCost.json')


// 取得資料庫連線狀態
db.once('open', () => {
  console.log('creating seed')
  Category.create(initialCost)
  console.log('done')
})
