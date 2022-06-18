// routes/modules/home.js

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Cost = require('../../models/cost')
const Category = require('../../models/category')

// 區塊2: 引入路由模組
router.get('/', (req, res) => {
  const userId = req.user._id

  Cost.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then(costs => {
      costs.forEach(cost => cost.date = cost.date.toJSON().slice(0, 10))
      if (costs.length === 0) {
        const Total = 0
        costs.Total = Total
      } else {
        const Total = costs.map(cost => cost.amount).reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        })
        costs.Total = Total
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
      if (costs.length === 0) {
        req.flash('warning_msg', `類別：「${category}」 無資料`)
        return res.redirect('/')
      }
      costs.forEach(cost => cost.date = cost.date.toJSON().slice(0, 10))
      const Total = costs.map(cost => cost.amount).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      })
      costs.Total = Total
      res.render('index', { costs })
    })
})

// 區塊3: 匯出路由器
module.exports = router