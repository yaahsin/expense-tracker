// app.js

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Cost = require('./models/cost')

const exphbs = require('express-handlebars')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

// route setting
app.get('/', (req, res) => {
  Cost.find()
    .lean()
    .then(costs => res.render('index', { costs }))
    .catch(error => console.error(error))
})

app.get('/costs/new', (req, res) => {
  return res.render('new')
})

app.post('/costs', (req, res) => {
  const { name, date, category, amount } = req.body
  return Cost.create({
    name, date, category, amount
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost${port}`)
})