// routes/modules/costs.js

// 區塊1: 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Cost = require('../../models/cost')

// 區塊2: 引入路由模組
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('', (req, res) => {
  const { name, date, category, amount } = req.body
  return Cost.create({
    name, date, category, amount
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Cost.findById(id)
    .lean()
    .then(cost => res.render('edit', { cost }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  return Cost.findById(id)
    .then(cost => {
      cost.name = name
      cost.date = date
      cost.category = category
      cost.amount = amount
      return cost.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Cost.findById(id)
    .then(cost => cost.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 區塊3: 匯出路由器
module.exports = router