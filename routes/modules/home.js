// routes/modules/home.js

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Cost = require('../../models/cost')
const Category = require('../../model/category')

// category icon
const CATEGORY = {
  家居物業: "https://fontawesome.com/icons/home?style=solid",
  交通出行: "https://fontawesome.com/icons/shuttle-van?style=solid",
  休閒娛樂: "https://fontawesome.com/icons/grin-beam?style=solid",
  餐飲食品: "https://fontawesome.com/icons/utensils?style=solid",
  其他: "https://fontawesome.com/icons/pen?style=solid"
}

// 區塊2: 引入路由模組
router.get('/', (req, res) => {
  const userId = req.user._id
  Cost.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then(costs => res.render('index', { costs }))
    .catch(error => console.error(error))
})

// 區塊3: 匯出路由器
module.exports = router