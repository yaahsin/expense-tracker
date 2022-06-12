// routes/index.js 總路由器 各路由的控制中心

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 區塊2: 引入路由模組
const home = require('./modules/home')
const costs = require('./modules/costs')
const users = require('./modules/users')

router.use('/', home)
router.use('/costs', costs)
router.use('/users', users)


// 區塊3: 匯出路由器
module.exports = router