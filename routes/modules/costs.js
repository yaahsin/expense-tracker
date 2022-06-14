// routes/modules/costs.js

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Cost = require('../../models/cost')
const Category = require('../../models/category')

// 區塊2: 引入路由模組
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('', (req, res) => {
  const userId = req.user._id
  const { name, date, category, amount } = req.body
  Category.findOne({ name: category })
    .lean()
    .then(category => {
      Cost.create({
        name, date, amount, userId, category: category.name, categoryId: category._id, icon: category.icon
      })
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Cost.findOne({ _id, userId })
    .lean()
    .then(cost => res.render('edit', { cost }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, category, amount } = req.body
  return Category.findOne({ name: category })
    .lean()
    .then(category => {
      return Cost.findOneAndUpdate({ _id, userId }
        , {
          name: name,
          date: date,
          category: category._id,
          amount: amount
        })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
    })
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Cost.findOne({ _id, userId })
    .then(cost => cost.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 區塊3: 匯出路由器
module.exports = router