// routes/modules/home.js

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Cost = require('../../models/cost')

// 區塊2: 引入路由模組
router.get('/', (req, res) => {
  const userId = req.user._id

  Cost.find({ userId })
    .lean()
    .sort({ date: 'asc' })
    .then(costs => {
      // 刪去時間，並寫入總計金額
      costs.forEach(cost => cost.date = cost.date.toJSON().slice(0, 10))
      if (costs.length === 0) {
        const totalAmount = 0
        costs.totalAmount = totalAmount
      } else {
        const totalAmount = costs.map(cost => cost.amount).reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        })
        costs.totalAmount = totalAmount
      }
      res.render('index', { costs })
    })
    .catch(error => console.error(error))
})

router.post('/', (req, res) => {
  const category = req.body.costCategory
  const userId = req.user._id
  Cost.find({ userId, category })
    .lean()
    .then(costs => {
      // 如果類別內無資料
      if (costs.length === 0) {
        req.flash('warning_msg', `類別：「${category}」 無資料`)
        return res.redirect('/')
      }
      // 如果類別內有資料
      costs.forEach(cost => cost.date = cost.date.toJSON().slice(0, 10))
      const totalAmount = costs.map(cost => cost.amount).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      })
      costs.totalAmount = totalAmount
      res.render('index', { costs, category })
    })
})

// 區塊3: 匯出路由器
module.exports = router