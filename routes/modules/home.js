// routes/modules/home.js

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Cost = require('../../models/cost')

// 區塊2: 引入路由模組
router.get('/', (req, res) => {
  Cost.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(costs => res.render('index', { costs }))
    .catch(error => console.error(error))
})

// 區塊3: 匯出路由器
module.exports = router