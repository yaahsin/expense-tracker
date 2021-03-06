// models/seeds/costSeeders.js
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
const Category = require('../category')
const initialCategory = require('../initialCategory.json')

// 取得資料庫連線狀態
db.once('open', () => {
  console.log('creating category seed')
  Promise.all(Array.from(initialCategory, category => Category.create(category)))
    .then(() => {
      console.log('done')
      process.exit()
    })
})
